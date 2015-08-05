using System.Web;
using System.Web.Optimization;

namespace AngularTestProject
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/AngularTestProject")
                    .IncludeDirectory("~/Scripts/Controllers", "*.js")
                    .IncludeDirectory("~/Scripts/Factories", "*.js")
                    .Include("~/Scripts/AngularTestProject.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
