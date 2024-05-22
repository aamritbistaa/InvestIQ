using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Stock
{
    public class UpdateStockRequestDto
    {
        [Required]
        [MinLength(3, ErrorMessage = "Symbol should be over 3 letters")]
        [MaxLength(5, ErrorMessage = "Symbol cannot be over 5 letters")]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        [MinLength(3, ErrorMessage = "Company Name should be over 3 letters")]
        [MaxLength(10, ErrorMessage = "Company Name cannot be over 10 letters")]
        public string CompanyName { get; set; } = string.Empty;
        [Required]
        [Range(1, 10000000)]
        public decimal Purchase { get; set; }
        [Required]
        [Range(0.1, 1000)]
        public decimal LastDiv { get; set; }
        [Required]
        [MinLength(3, ErrorMessage = "Industry should be over 3 letters")]
        [MaxLength(10, ErrorMessage = "Industry cannot be over 10 letters")]
        public string Industry { get; set; } = string.Empty;
        [Required]
        [Range(1, 10000000)]
        public long MarketCap { get; set; }
    }
}