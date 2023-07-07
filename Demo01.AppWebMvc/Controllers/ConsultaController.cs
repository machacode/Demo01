using System.Collections.Generic;
using System.Web.Mvc;
using Demo01.Librerias.EntidadesNegocio;
using Demo01.Librerias.ReglasNegocio; 

namespace Demo01.AppWebMvc.Controllers
{
    public class ConsultaController : Controller
    {
        public ActionResult Inicio()
        {
            return View();
        }

        public JsonResult listarPaises()
        {
            JsonResult rpta = null;
            brPais obrPais = new brPais();
            List<bePais> lbePais = obrPais.Listar();
            rpta = Json(lbePais, JsonRequestBehavior.AllowGet);
            return rpta;
        }

    }
}
