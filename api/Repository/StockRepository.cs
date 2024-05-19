using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDbContext _context;
        public StockRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Stock> CreateAsync(Stock stock)
        {
            await _context.Stocks.AddAsync(stock);
            await _context.SaveChangesAsync();
            return stock;
        }

        public async Task<Stock?> DeleteAsync(int id)
        {
            var item = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);
            if (item == null) return null;
            _context.Remove(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<List<Stock>> GetAllAsync()
        {
            return await _context.Stocks.Include(c => c.Comments).ToListAsync();
        }

        public async Task<Stock?> GetByIdAsync(int id)
        {
            return await _context.Stocks.Include(c => c.Comments).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto)
        {

            var item = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);
            if (item == null) return null;
            item.Symbol = stockDto.Symbol;
            item.CompanyName = stockDto.CompanyName;
            item.Purchase = stockDto.Purchase;
            item.LastDiv = stockDto.LastDiv;
            item.Industry = stockDto.Industry;
            item.MarketCap = stockDto.MarketCap;
            await _context.SaveChangesAsync();

            return item;

        }
    }
}