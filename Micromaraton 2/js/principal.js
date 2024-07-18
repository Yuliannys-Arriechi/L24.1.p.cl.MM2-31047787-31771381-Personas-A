// Datos de las personas
const personas = [
    { nombre: "Luisa", genero: "F" },
    { nombre: "Ana", genero: "F" },
    { nombre: "José", genero: "M" },
    { nombre: "Carmen", genero: "F" },
    { nombre: "Rosa", genero: "F" },
    { nombre: "José", genero: "M" },
    { nombre: "María", genero: "F" },
    { nombre: "Luz", genero: "F" },
    { nombre: "Rafael", genero: "M" },
    { nombre: "Liz", genero: "F" },
    { nombre: "Marcos", genero: "M" },
    { nombre: "Leo", genero: "M" }
  ];
  
  // Contadores para hombres y mujeres
  let hombres = 0;
  let mujeres = 0;
  
  // Recorremos el arreglo de personas
  for (const persona of personas) {
    if (persona.genero === "M") {
      hombres++;
    } else if (persona.genero === "F") {
      mujeres++;
    }
  }
  
  // Calculamos el porcentaje de mujeres
  const totalPersonas = hombres + mujeres;
  const porcentajeMujeres = (mujeres / totalPersonas) * 100;
  
  // Determinamos si hay más hombres, más mujeres o ambos por igual
  let resultado = "";
  if (hombres > mujeres) {
    resultado = "Hay más hombres";
  } else if (mujeres > hombres) {
    resultado = "Hay más mujeres";
  } else {
    resultado = "Ambos por igual";
  }
  
  // Mostramos los resultados
  const resultadoElement = document.getElementById("salida");
        resultadoElement.textContent = `Porcentaje de mujeres procesadas: ${porcentajeMujeres.toFixed(2)}% - ${resultado}`;
