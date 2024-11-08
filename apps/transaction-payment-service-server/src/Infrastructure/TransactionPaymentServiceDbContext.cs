using Microsoft.EntityFrameworkCore;

namespace TransactionPaymentService.Infrastructure;

public class TransactionPaymentServiceDbContext : DbContext
{
    public TransactionPaymentServiceDbContext(
        DbContextOptions<TransactionPaymentServiceDbContext> options
    )
        : base(options) { }
}
