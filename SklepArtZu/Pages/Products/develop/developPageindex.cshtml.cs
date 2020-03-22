using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using SklepArtZu.Data;
using SklepArtZu.Models;

namespace SklepArtZu
{
    public class developPageindexModel : PageModel
    {
        private readonly SklepArtZu.Data.AppDbContext _context;

        public developPageindexModel(SklepArtZu.Data.AppDbContext context)
        {
            _context = context;
        }

        public IList<Product> Product { get; set; }

        public async Task OnGetAsync()
        {
            Product = await _context.Products.ToListAsync();
        }
    }
}
