namespace AngularApp1.Server.Models
{
	public class Experience
	{

		public int Id { get; set; }
		public string Company { get; set; }
		public string Position { get; set; }
		public string Duration { get; set; }

		public int EmployeeId { get; set; }
		//public virtual Employee Employee { get; set; }


	}
}
