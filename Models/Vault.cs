using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Vault
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MinLength(4)]
        public string Title { get; set; }

        [Required]
        [MinLength(4)]
        public string Description { get; set; }

        public Vault() { }
        public Vault(string title, string description)
        {
            Title = title;
            Description = description;
        }
    }
}