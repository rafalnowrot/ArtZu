using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SklepArtZu.Models
{
    public class Order
    {
        public int Id { get; set; }

        public List<Product> products { get; set; }

        public decimal price { get; set; }

        public string email { get; set; }

        public string name { get; set; }

        public string surname { get; set; }

        public string adress { get; set; }

        public int phoneNumber { get; set; }

        public DateTime OrderPlaced { get; set; }
    }
}
