using System.Collections.Generic;
using keepr.Models;
using Microsoft.AspNetCore.Mvc;
using keepr.Repositories;
using System;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaultKeepsController : Controller
    {
        VaultKeepRepository _repo;
        public VaultKeepsController(VaultKeepRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IEnumerable<VaultKeep> Get()
        {
            return _repo.GetAll();
        }

        [HttpPost]
        public VaultKeep Post([FromBody]VaultKeep vaultkeep)
        {
            if (ModelState.IsValid)
            {
                vaultkeep.UserId = HttpContext.User.Identity.Name;
                return _repo.Create(vaultkeep);
            }
            throw new Exception("Invalid keep!");
        }

        [HttpPut]
        public VaultKeep Put([FromBody]VaultKeep vaultkeep)
        {
            return _repo.Update(vaultkeep);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}