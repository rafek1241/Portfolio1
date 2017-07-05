using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RS_Portfolio.Startup))]
namespace RS_Portfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
