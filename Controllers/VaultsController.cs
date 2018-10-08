using System.Collections.Generic;
using keepr.Models;
using Microsoft.AspNetCore.Mvc;
using keepr.Repositories;
using System;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaultsController : Controller
    {
        VaultsRepository _repo;
        public VaultsController(VaultsRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return _repo.GetAll();
        }

        [HttpPost]
        public Vault Post([FromBody] Vault vault)
        {
            if (ModelState.IsValid)
            {
                vault = new Vault(vault.Title, vault.Description);
                return _repo.Create(vault);
            }
            throw new Exception("Invalid keep!");
        }

        [HttpPut]
        public Vault Put([FromBody]Vault vault)
        {
            return _repo.Update(vault);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}