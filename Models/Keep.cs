using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [MinLength(4)]
        public string Title { get; set; }

        [Required]
        [MinLength(4)]
        public string Description { get; set; }

        public Keep() { }
        public Keep(string title, string description)
        {
            Title = title;
            Description = description;
        }

    }
}