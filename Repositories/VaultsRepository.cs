using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
    public class VaultsRepository
    {
        private IDbConnection _db;
        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }

        //CRUD via SQL

        //CREATE VAULT
        public Vault Create(Vault vault)
        {
            int id = _db.ExecuteScalar<int>(@"
            INSERT INTO vaults (name, description, userid)
            VALUES (@Name, @Description, @UserId);
            SELECT LAST_INSERT_ID();", vault
            );
            vault.Id = id;
            return vault;
        }

        //GET ALL VAULTS
        public IEnumerable<Vault> GetAll()
        {
            return _db.Query<Vault>("SELECT * FROM vaults;");
        }

        //GET VAULT BY ID
        public Vault GetById(int id)
        {
            return _db.Query<Vault>("SELECT * FROM vaults WHERE id = @id", new { id }).FirstOrDefault();
        }

        //UPDATE VAULT
        public Vault Update(Vault vault)
        {
            _db.Execute(@"
            UPDATE vaults
            SET name = @Name, description = @Description, userid = @UserId
            WHERE id = @Id
            ", vault);
            return vault;
        }
        //DELETE VAULT
        public int Delete(int id)
        {
            return _db.Execute("DELETE FROM vaults WHERE id = @Id", new { id });
        }

        public IEnumerable<Vault> GetVaultsByUserId(string id)
        {
            return _db.Query<Vault>(@"
            SELECT * FROM vaultkeeps
            INNER JOIN keeps ON keeps.id = vaultkeeps.keepId
            WHERE (vaultId = @id)
            ", new { id });
        }
    }
}