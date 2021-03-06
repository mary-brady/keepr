using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.Models;
using Microsoft.AspNetCore.Http;

namespace keepr.Repositories
{
    public class KeepsRepository
    {
        private IDbConnection _db;
        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        //CRUD via SQL

        //CREATE KEEP
        public Keep Create(Keep keep)
        {
            int id = _db.ExecuteScalar<int>(@"
            INSERT INTO keeps (name, description, img, userid, isprivate, views, shares, keeps)
            VALUES (@Name, @Description, @Img, @UserID, @IsPrivate, @Views, @Shares, @Keeps);
            SELECT LAST_INSERT_ID();", keep
            );
            keep.Id = id;
            return keep;
        }

        //GET ALL KEEPS
        public IEnumerable<Keep> GetAll()
        {
            return _db.Query<Keep>("SELECT * FROM keeps;");
        }

        //GET KEEP BY ID
        public Keep GetById(int id)
        {
            return _db.Query<Keep>("SELECT * FROM keeps WHERE id = @id", new { id }).FirstOrDefault();
        }

        //UPDATE KEEP
        public Keep Update(Keep keep)
        {
            _db.Execute(@"
            UPDATE keeps
            SET name = @Name, description = @Description, img = @Img, userid = @UserId, isprivate = @IsPrivate, views = @Views, shares = @Shares, keeps = @keeps
            WHERE id = @Id
            ", keep);
            return keep;
        }
        //DELETE KEEP
        public int Delete(int id)
        {
            return _db.Execute("DELETE FROM keeps WHERE id = @Id", new { id });
        }

        public IEnumerable<Keep> GetKeepsByVaultId(int id)
        {
            return _db.Query<Keep>(@"
            SELECT * FROM vaultkeeps
            INNER JOIN keeps ON keeps.id = vaultkeeps.keepId
            WHERE (vaultId = @id)
            ", new { id });
        }
    }
}