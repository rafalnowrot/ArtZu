using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SklepArtZu.Models
{
    public class Product
    {
        //[Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public double Price { get; set; }

        public string Description { get; set; }

        public string imgPath { get; set; }

        public string Category { get; set; }

    }
}
