using Microsoft.EntityFrameworkCore;

namespace InsuranceSecurityService.Infrastructure;

public class InsuranceSecurityServiceDbContext : DbContext
{
    public InsuranceSecurityServiceDbContext(
        DbContextOptions<InsuranceSecurityServiceDbContext> options
    )
        : base(options) { }
}
