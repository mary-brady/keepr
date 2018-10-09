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
                vault.UserId = HttpContext.User.Identity.Name;
                return _repo.Create(vault);
            }
            throw new Exception("Invalid keep!");
        }

        [HttpPut]
        public Vault Put([FromBody]Vault vault)
        {
            vault.UserId = HttpContext.User.Identity.Name;
            return _repo.Update(vault);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}