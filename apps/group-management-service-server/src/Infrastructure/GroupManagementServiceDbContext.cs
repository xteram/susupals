using Microsoft.EntityFrameworkCore;

namespace GroupManagementService.Infrastructure;

public class GroupManagementServiceDbContext : DbContext
{
    public GroupManagementServiceDbContext(
        DbContextOptions<GroupManagementServiceDbContext> options
    )
        : base(options) { }
}
