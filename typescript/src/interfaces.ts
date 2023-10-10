interface ITraining2 {
  type: string;
  distance: number;
  format(): string;
}

class LongRunTraining2 implements ITraining {
  readonly type: string;
  constructor(public distance: number) {
    this.type = "LONG RUN";
  }
  format(): string {
    return `${this.type} for ${this.distance}Kms`;
  }
}
class IntervalsTraining2 implements ITraining {
  readonly type: string;
  constructor(public distance: number, public amount: number) {
    this.type = "INTERVALS";
  }
  format(): string {
    return `${this.amount} ${this.type} for ${this.distance}kms`;
  }
}
class RunningTraining2 implements ITraining {
  readonly type: string;
  constructor(public distance: number, public date: string) {
    this.type = "RUNNING";
  }
  format(): string {
    return `WHATEVER!!!`;
  }
}

// Instanciación de clases a partir de una interface
const entrenamiento1: ITraining2 = new LongRunTraining2(42);
const entrenamiento2: ITraining2 = new IntervalsTraining2(8, 5);
const entrenamiento3: ITraining2 = new RunningTraining2(15, "2023-10-09");
const entrenamiento4: ITraining2 = new LongRunTraining2(55);
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);

// Lista de objetos que cumplen con la interface
const entrenamientos: ITraining2[] = [
  entrenamiento1,
  entrenamiento2,
  entrenamiento3,
  entrenamiento4,
];
entrenamientos.forEach((e) => {
  console.log(e.format());
});

// Obtiene una referencia al elemento
const tbody2 = document.querySelector("#tbody")!;
// Recorre la lista de entrenamientos para generar la tabla HTML
entrenamientos.forEach((entrenamiento) => {
  // Crea la fila
  const tr = document.createElement("tr");
  // Crea las celdas
  const tdType = document.createElement("td");
  const tdDistance = document.createElement("td");
  // Asigna los textos a las celdas dada la información del objeto
  tdType.textContent = entrenamiento.type;
  tdDistance.textContent = `${entrenamiento.distance} kms`;
  // Agrega las celdas a la fila
  tr.append(tdType, tdDistance);
  // Agrega la fila a la tabla
  tbody2.append(tr);
});
