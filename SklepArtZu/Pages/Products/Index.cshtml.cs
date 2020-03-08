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
    public class IndexModel : PageModel
    {
        private readonly SklepArtZu.Data.AppDbContext _context;

        public IndexModel(SklepArtZu.Data.AppDbContext context)
        {
            _context = context;
        }

        public IList<Product> Product { get;set; }

        public async Task OnGetAsync()
        {
            Product = await _context.Products.ToListAsync();
        }
    }
}
