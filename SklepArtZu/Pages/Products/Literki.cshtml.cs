using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using SklepArtZu.Models;

namespace SklepArtZu
{
    public class LiterkiModel : PageModel
    {
        private readonly SklepArtZu.Data.AppDbContext _context;

        public LiterkiModel(SklepArtZu.Data.AppDbContext context)
        {
            _context = context;
        }

        public IList<Product> Product { get; set; }
        


        public async Task OnGetAsync()
        {
            var product = from products in _context.Products where products.Name == "choineczka" select products;

            Product = await product.ToListAsync();
        }


       

    }
}