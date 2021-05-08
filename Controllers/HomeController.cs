using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmployeeApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            EmployeeInfoEntities entities = new EmployeeInfoEntities();
            List<Employee> employees = entities.Employees.ToList();

            return View(employees);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}