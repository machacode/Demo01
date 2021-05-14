using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Demo01.Librerias.EntidadesNegocio;
using Demo01.Librerias.AccesoDatos; 

namespace Demo01.Librerias.ReglasNegocio
{
    public class brPais
    {
        public List<bePais> Listar()
        {
            List<bePais> lbePais = null;
            daPais odaPais = new daPais();
            lbePais = odaPais.Listar();
            return lbePais;
        }
    }
}
