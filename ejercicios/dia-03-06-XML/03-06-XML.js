function direccionDeOrden(dir) {
  if (dir == "mayor") {
    return 0;
  } else if (dir == "menor") {
    return 1;
  } else {
    document.write('Por favor, introduce "mayor" o "menor"');
  }
}

let arrayDesordenado = [6];
for (let i = 0; i < 6; i++) {
  let num = Math.floor(Math.random() * 7) + 1;
  arrayDesordenado[i] = num;
}
/*var devolucion = document.getElementById("arrayDesordenado");
devolucion.innerHTML = arrayDesordenado;*/

function ordenar(mayor) {
  arrayDesordenado.sort(function (a, b) {
    return b - a;
  });
  if (mayor == 1) {
    devolucion.innerHTML = arrayDesordenado;
  } else {
    devolucion.innerHTML = arrayDesordenado.reverse();
  }
}

let orla = [];
leerXML();

function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open(
    "GET",
    "https://adrianruiz26.github.io/CMV-publico/datos.xml",
    true
  );
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var xmlNombre;
  var xmlFoto;
  var elemento = [];
  var tabla = "";
  var final= "";
  var cont = 0;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("elemento");
  // obtenemos algo como     x =[{USR1},{USR2},...,{CANDIDO}]

  //tabla es una variable String que contiene codigo HTML para poder mostrar en pantalla el XML con formato tabla
  

  
  for (i = 0; i < x.length; i++) {
    // leo las etiquetas que me interesan del objeto
    xmlNombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    xmlFoto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
    if(cont >= 3){
      tabla = "<div class='centrado'>";
    }else{
      tabla += "<div class='elwidth'> <img class='imagen' src='"+xmlFoto +"'><div class='subtitulo'>" + xmlNombre +"</div></div>";
      elemento = [xmlNombre, xmlFoto];
      orla.push(elemento);
      cont++;
    }
    
      if (i + 1 == x.length) {
        tabla += "</div>";
        final += tabla;
        document.getElementById("mensaje").innerHTML = final;

      }else if(cont >= 3){
        tabla+="</div>"
        final += tabla;
        tabla = "";
        cont = 0;
    }
    
    
    // actualizo el array bidimensional con los usuarios registrados
    
  }

  document.getElementById("mensaje").innerHTML = final;
  
  

  // muestro en consola el array de usuarios orla
  orla.forEach((elemento) => {
    elemento.forEach((datos) => {
      console.log(datos);
    });
  });
}

function ordenarUsuarios() {
  //Ordenamos  la matriz
  orla.sort((elemento1, elemento2) =>
    elemento1[0].localeCompare(elemento2[0])
  );
  let tabla = "";
  orla.forEach((elemento) => {
    elemento.forEach((datos) => {
      tabla = "<table><tr><th>Nombre</th><th>Foto</th></tr>";
      for (let i = 0; i < orla.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let xmlNombre = orla[i][0];
        let xmlFoto = orla[i][1];
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + xmlNombre + "</td><td><img src='" + xmlFoto + "'></img></td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>";
    });
  });
  document.getElementById("mensaje").innerHTML = tabla;
}

function ordenarFotos() {
  //Ordenamos  la matriz
  orla.sort((elemento1, elemento2) =>
    elemento2[1].localeCompare(elemento1[1])
  );
  let tabla = "";
  orla.forEach((elemento) => {
    elemento.forEach((datos) => {
      tabla = "<table><tr><th>Nombre</th><th>Foto</th></tr>";
      for (let i = 0; i < orla.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let xmlNombre = orla[i][0];
        let xmlFoto = orla[i][1];
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + xmlNombre + "</td><td><img src='" + xmlFoto + "'></img></td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>";
    });
  });
  document.getElementById("mensaje").innerHTML = tabla;
}

function filtrarBusqueda() {
  let name = document.getElementById("nombre").value;
  let cont = 0;
  let tabla = "<table><tr><th>Nombre</th><th>Foto</th></tr>";
  let salida = false;

  for (let i = 0; i < orla.length; i++) {
    let xmlNombre = orla[i][0];
    let xmlFoto = orla[i][1];
    // actualizo la tabla de visualización
    if (xmlNombre == name) {
      tabla += "<tr><td>" + xmlNombre + "</td><td><img src='" + xmlFoto + "'></img></td></tr>";
    } else {
      cont++;
    }
  }
  tabla += "</table>";

  if (cont <= orla.length) {
    document.getElementById("mensaje").innerHTML = tabla;
  } else {
    alert("Ese usuario no existe, introduce otro");
  }
}