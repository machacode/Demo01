using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo01.AppWebMvc.Controllers
{
    public class VerPaisController : Controller
    {
        //
        // GET: /VerPais/

        public ActionResult ListaPais()
        {
            return View();
        }

    }
}
