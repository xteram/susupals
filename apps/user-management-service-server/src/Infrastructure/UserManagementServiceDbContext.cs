using Microsoft.EntityFrameworkCore;

namespace UserManagementService.Infrastructure;

public class UserManagementServiceDbContext : DbContext
{
    public UserManagementServiceDbContext(DbContextOptions<UserManagementServiceDbContext> options)
        : base(options) { }
}
