using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeApplication.Controllers
{
    public class EmployeeAPIController : ApiController
    {
        [Route("api/EmployeeAPI/InsertEmployee")]
        [HttpPost]        
        public Employee InsertEmployee(Employee employee)
        {
            using (EmployeeInfoEntities entities = new EmployeeInfoEntities())
            {
                entities.Employees.Add(employee);
                entities.SaveChanges();
            }
            return employee;
        }

        [Route("api/EmployeeAPI/GetEmployee/{EmployeeName}")]
        [HttpGet]
        public Employee GetEmployee(String EmployeeName)
        {            
            Employee emp = new Employee();
            using(EmployeeInfoEntities entities = new EmployeeInfoEntities())
            {
                emp = entities.Employees.FirstOrDefault(e => e.Name == EmployeeName);
            }
            return emp;
        }
    }
}
