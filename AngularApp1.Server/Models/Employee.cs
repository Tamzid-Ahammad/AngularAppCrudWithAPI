using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularApp1.Server.Models
{
	public class Employee
	{
		[Key]
		public int Id { get; set; }
		[Required]
		public string Name { get; set; }
		[Required]
		public int DesignationId { get; set; }
		[Required]
		public DateTime JoinDate { get; set; }

		public string? ImagePath { get; set; }
		[Required]
		public decimal Salary { get; set; } 
		public bool IsActive { get; set; } = true;


		//[NotMapped]

		//public IFormFile? imageFile { get; set; }


		public Designation? Designation { get; set; }

		public virtual IList<Experience>? Experiences { get; set; } = new List<Experience>();




	}
}
