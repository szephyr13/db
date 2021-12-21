const provinciaSelect = document.getElementById("provinciaselect");

//Codigo-1
const doConnection = (url) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    var method = "GET";
    xhr.open(method, url, true);
    xhr.onerror = function () {
      reject("Ha habido un error en la consulta");
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  });
}

//Codigo-2
const init = async () => {
  try {
    const result = await doConnection("https://raw.githubusercontent.com/szephyr13/db/main/json1.json");

    //creo un array con las provincias
    let arrayProvincias = [];
    for (let i = 0; i<result.provincias.length; i++) {
      arrayProvincias.push(result.provincias[i]);
    }

    //creo el select dentro del div provincia-select


  } catch (error) {
      let recarga = window.confirm("La conexión con la base de datos ha fallado. ¿Quieres reintentarla?")
      if (recarga===true) { //si no funciona, ¿recargar?
        location.reload();
      } else { //si no se recarga, dejar constancia en la consola de que no se ha podido realizar consulta
        console.log("No se ha podido realizar la consulta");
      }
  }
}

init();
