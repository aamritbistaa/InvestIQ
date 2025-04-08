using System;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository;

public class PortfolioRepository : IPortfolioRepository
{
    private readonly ApplicationDbContext _context;
    public PortfolioRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Portfolio> CreateAsync(Portfolio portfolio)
    {
        await _context.Portfolios.AddAsync(portfolio);
        await _context.SaveChangesAsync();
        return portfolio;
    }

    public async Task<List<Stock>> GetUserPortfolio(AppUser user)
    {
        return await _context.Portfolios.Where(x => x.AppUserId == user.Id).Select(x => new Stock
        {
            Id = x.StockId,
            Symbol = x.Stock.Symbol,
            CompanyName = x.Stock.CompanyName,
            Purchase = x.Stock.Purchase,
            LastDiv = x.Stock.LastDiv,
            Industry = x.Stock.Industry,
            MarketCap = x.Stock.MarketCap,
        }).ToListAsync();
    }
}
