using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularApp1.Server.Services
{
	public class ImageUploadService
	{
		private readonly IWebHostEnvironment webHost;

		public ImageUploadService(IWebHostEnvironment webHost)
        {
            this.webHost = webHost;

		}



        public async Task<string> UploadImage(IFormFile file, string? filename = null)
        {


			if(filename == null)
			{
				filename = file.FileName;
			}
			else
			{
				filename = filename+ Path.GetExtension(file.FileName);
			}


			var imagePath = $"\\images\\{filename}";
			var path = this.webHost.WebRootPath + imagePath;
			using (FileStream fs = new FileStream(path, FileMode.Create))
			{
				await file.CopyToAsync(fs);
				await fs.FlushAsync();
			}


			return imagePath;

		}
    }
}
