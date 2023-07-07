using System;
using System.Collections.Generic;
using Demo01.Librerias.EntidadesNegocio;

namespace Demo01.Librerias.AccesoDatos
{
    public class daPais
    {

        public List<bePais> Listar()
        {
            List<bePais> lbePais = null;
            lbePais = new List<bePais>();
            bePais obePais;

            obePais = new bePais();
            obePais.IdPais = 1;
            obePais.Nombre = "Perú";
            obePais.Poblacion = 35000000;
            lbePais.Add(obePais);
            obePais = new bePais();
            obePais.IdPais = 2;
            obePais.Nombre = "Colombia";
            obePais.Poblacion = 6600000;
            lbePais.Add(obePais);
            obePais = new bePais();
            obePais.IdPais = 3;
            obePais.Nombre = "Bolivia";
            obePais.Poblacion = 9800000;
            lbePais.Add(obePais);
            obePais = new bePais();
            obePais.IdPais = 4;
            obePais.Nombre = "Argrntina";
            obePais.Poblacion = 3805000;
            lbePais.Add(obePais);
            obePais = new bePais();
            obePais.IdPais = 5;
            obePais.Nombre = "Brasil";
            obePais.Poblacion = 17895000;
            lbePais.Add(obePais);
            obePais = new bePais();
            obePais.IdPais = 6;
            obePais.Nombre = "Ecuador";
            obePais.Poblacion = 456800;
            lbePais.Add(obePais);
            return lbePais;
        } 

    }
}
