using System.Collections.Generic;
using keepr.Models;
using Microsoft.AspNetCore.Mvc;
using keepr.Repositories;
using System;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KeepsController : Controller
    {
        KeepsRepository _repo;
        public KeepsController(KeepsRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return _repo.GetAll();
        }
        [HttpGet("{id}")]
        public IEnumerable<Keep> Get(int id)
        {
            return _repo.GetKeepsByVaultId(id);
        }

        [HttpPost]
        public Keep Post([FromBody]Keep keep)
        {
            if (ModelState.IsValid)
            {
                keep.UserId = HttpContext.User.Identity.Name;
                return _repo.Create(keep);
            }
            throw new Exception("Invalid keep!");
        }

        [HttpPut("{id}")]
        public Keep Put(int id, [FromBody]Keep keep)
        {
            keep.UserId = HttpContext.User.Identity.Name;
            keep.Id = id;
            return _repo.Update(keep);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}