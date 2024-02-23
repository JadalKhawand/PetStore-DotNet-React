using backend.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }
        // CRUD => Crate - Read - Update - Delete

        // Create
        [HttpPost]
        public async Task<IActionResult> CreateProduct()
        {
            return null;
        }

        // Read

        // Update

        // Delete
    }
}
