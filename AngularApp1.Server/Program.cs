
using AngularApp1.Server.Models;
using AngularApp1.Server.Services;
using Microsoft.AspNetCore.Http.Json;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace AngularApp1.Server
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.
			builder.Services.AddScoped<ImageUploadService>();

			builder.Services.Configure<JsonOptions>(opt =>
			{
				opt.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
			});
			builder.Services.AddCors();
			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();


			builder.Services.AddDbContext<EmpDb>(
				
				opt=> opt.UseSqlServer("server = .; database = testEmpDbNew; trusted_connection =true; trust server certificate =true;")
				);





			var app = builder.Build();

			app.UseDefaultFiles();
			app.UseStaticFiles();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();
			app.UseCors(opt =>{
				opt.AllowAnyHeader();
				opt.AllowAnyMethod();
				opt.AllowAnyOrigin();
			});

			app.MapControllers();

			app.MapFallbackToFile("/index.html");

			app.Run();
		}
	}
}
