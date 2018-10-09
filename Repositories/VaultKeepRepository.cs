using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class VaultKeepRepository
    {
        private IDbConnection _db;
        public VaultKeepRepository(IDbConnection db)
        {
            _db = db;
        }

        //CRUD via SQL

        //CREATE VAULTKEEP
        public VaultKeep Create(VaultKeep vaultkeep)
        {
            int id = _db.ExecuteScalar<int>(@"
            INSERT INTO vaultkeeps (vaultid, keepid, userid)
            VALUES (@VaultId, @KeepId, @UserId);
            SELECT LAST_INSERT_ID();", vaultkeep
            );
            vaultkeep.Id = id;
            return vaultkeep;
        }

        //GET ALL VAULTS
        public IEnumerable<VaultKeep> GetAll()
        {
            return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps;");
        }

        //GET VAULT BY ID
        public VaultKeep GetById(int id)
        {
            return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps WHERE id = @id", new { id }).FirstOrDefault();
        }

        //UPDATE VAULT
        public VaultKeep Update(VaultKeep vaultkeep)
        {
            _db.Execute(@"
            UPDATE vaultkeep
            SET name = @Name, description = @Description
            WHERE id = @Id
            ", vaultkeep);
            return vaultkeep;
        }
        //DELETE VAULTKEEP
        public int Delete(int id)
        {
            return _db.Execute("DELETE FROM vaultkeeps WHERE id = @Id", new { id });
        }
    }
}