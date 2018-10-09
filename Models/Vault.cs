using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Vault
    {
        public int Id { get; set; }

        [Required]
        [MinLength(4)]
        public string Name { get; set; }

        [Required]
        [MinLength(4)]
        public string Description { get; set; }
        public string UserId { get; set; }

        public Vault() { }
    }
}