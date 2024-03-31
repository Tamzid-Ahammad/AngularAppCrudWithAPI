using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Models
{
	public class EmpDb:DbContext
	{

        public DbSet<Designation> Designations { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Experience> Experiences { get; set; }

        public EmpDb(DbContextOptions o):base(o)
        {
            
        }



    }
}
