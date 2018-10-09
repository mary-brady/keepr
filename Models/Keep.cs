using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep
    {
        public int Id { get; set; }
        [Required]
        [MinLength(4)]
        public string Name { get; set; }

        [Required]
        [MinLength(4)]
        public string Description { get; set; }
        public string UserId { get; set; }
        public bool IsPrivate { get; set; } = false;
        public int Views { get; set; }
        public int Shares { get; set; }
        public int Keeps { get; set; }
        public string Img { get; set; }

        public Keep() { }

    }
}