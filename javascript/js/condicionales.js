// 1 OPCIÓN -> IF
let x = 5;

if (x > 3) {
  console.log("Entró al if 1");
}

if (x === 4) {
  console.log("Entró al if 2");
}

if (x <= 10) {
  console.log("Entró al if 3");
  let y = 5;
  if (y >= 15) {
    console.log("Entro al if interno 4");
    if (x === 5 && y === 5) {
      console.log("Entro al último if");
    }
  }
}

// 2 OPCIONES -> IF/ELSE
let edad = 15;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// n OPCIONES -> IF/ELSE IF
let dia = 5;
if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miércoles");
} else {
  console.log("No es lunes, ni martes, ni miércoles");
}
