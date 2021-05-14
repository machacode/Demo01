var horaInicio;

window.onload = function () {
    horaInicio = new Date();
    get("Consulta/listarPaises", mostrarPaises);
}

function get(url, callback) {
    requestServer("get", url, callback);
}

function requestServer(metodoHttp, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(metodoHttp, url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.response);
        }
    }
    xhr.send();
}

function mostrarPaises(rpta) {
    console.log(rpta);

    if (rpta != null) {
        crearTablaJson(rpta, "divTabla", "spnTotalReg")
    }

    var horaFin = new Date();
    var tiempo = horaFin - horaInicio;
    spnTiempo.innerHTML = tiempo + "msg";

    ConfigurarBotones();
    setTimeout(mostrarPopPup, 3000);
}

function ConfigurarBotones() {
    document.getElementById("imgCerrar").onclick =
        function () {
            document.getElementById("divPopupContainer").style.display = "none";//Cierra Ventana
        }

    document.getElementById("imgVer").onclick = function () {
        //alert(document.getElementById("cboPaises").options[cboPaises.selectedIndex].text);
        document.cookie = "Pais_Seleccionado=" + document.getElementById("cboPaises").options[cboPaises.selectedIndex].text;
        window.location.replace("/VerPais/ListaPais");
        document.getElementById("divPopupContainer").style.display = "none";//Cierra Ventana
    }

}

function mostrarPopPup() {
    document.getElementById("spnBarraPopup").innerHTML = "Popup seleccionar pais";
    document.getElementById("divPopupContainer").style.display = "inline";//Abre Ventana
}

function crearTablaJson(json, nombreDiv, spnTotal) {
    var campos = Object.keys(json[0]);
    var nRegistros = json.length;
    var fila;
    var nCampos = campos.length;
    var col;
    var checkHtml = "";
    var comboHtml = "";
    var html = "<table><thead><tr class='FilaCabecera'>";
    for (var j = 0; j < nCampos; j++) {
        col = campos[j];
        html += "<th>";
        html += col;
        html += "</th>";
    }
    html += "</tr></thead><tbody>";
    comboHtml += "<option value=''>Seleccionar</option>";
    for (var i = 0; i < nRegistros; i++) {
        fila = json[i];
        html += "<tr class='FilaDatos'>";
        for (var j = 0; j < nCampos; j++) {
            col = fila[campos[j]];
            html += "<td>";
            html += col;
            html += "</td>";
        }
        html += "</tr>";

        // Crear y llenar el Check
        checkHtml += "<label><input type='checkbox' id='";
        checkHtml += fila["IdPais"];
        checkHtml += "' value='";
        checkHtml += fila[campos[1]];
        checkHtml += "' onclick='guardarCookie(this)'>";
        checkHtml += fila[campos[1]];
        checkHtml += "</label><br>";

        // Crear y llenar el Combo
        comboHtml += "<option value=";
        comboHtml += fila["IdPais"];
        comboHtml += ">";
        comboHtml += fila[campos[1]];
        comboHtml += "</option>";

    }
    html += "</tbody></table><br><br>";

    var div = document.getElementById(nombreDiv);
    div.innerHTML = html + checkHtml;
    var span = document.getElementById(spnTotal);
    span.innerHTML = nRegistros;
    var cbo = document.getElementById("cboPaises");
    if (cbo != null) cbo.innerHTML = comboHtml;
}

function guardarCookie(chk) {
    if (chk.checked) {
        //alert(chk.id + " " + chk.value);
        document.cookie = "xPais" + chk.id + "=" + chk.value;
    }

    //var verCookie = document.cookie;
}