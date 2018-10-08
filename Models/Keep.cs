using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep
    {
        [Required]
        public string Id { get; set; }
        [Required]
        [MinLength(4)]
        public string Title { get; set; }

        [Required]
        [MinLength(4)]
        public string Description { get; set; }

    }
}