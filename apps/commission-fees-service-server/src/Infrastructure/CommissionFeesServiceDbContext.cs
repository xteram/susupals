using Microsoft.EntityFrameworkCore;

namespace CommissionFeesService.Infrastructure;

public class CommissionFeesServiceDbContext : DbContext
{
    public CommissionFeesServiceDbContext(DbContextOptions<CommissionFeesServiceDbContext> options)
        : base(options) { }
}
