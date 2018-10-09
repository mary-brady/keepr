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

        [HttpPost]
        public Keep Post([FromBody]Keep keep)
        {
            if (ModelState.IsValid)
            {
                return _repo.Create(keep);
            }
            throw new Exception("Invalid keep!");
        }

        [HttpPut]
        public Keep Put([FromBody]Keep keep)
        {
            return _repo.Update(keep);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}