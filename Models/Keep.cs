using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep
    {
        public int Id { get; set; }
        [Required]
        [MinLength(4)]
        public string Title { get; set; }

        [Required]
        [MinLength(4)]
        public string Description { get; set; }
        public string KeepImg { get; set; }
        public string URL { get; set; }

        public Keep() { }
        public Keep(string title, string description, string keepimg, string url)
        {
            Title = title;
            Description = description;
            KeepImg = keepimg;
            URL = url;
        }

    }
}