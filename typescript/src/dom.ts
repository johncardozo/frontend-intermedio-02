interface ITraining {
  type: string;
  distance: number;
  format(): string;
}

class LongRunTraining implements ITraining {
  readonly type: string;
  constructor(public distance: number) {
    this.type = "LONG RUN";
  }
  format(): string {
    return `${this.type} for ${this.distance}Kms`;
  }
}
class IntervalsTraining implements ITraining {
  readonly type: string;
  constructor(public distance: number, public amount: number) {
    this.type = "INTERVALS";
  }
  format(): string {
    return `${this.amount} ${this.type} for ${this.distance}kms`;
  }
}
class RunningTraining implements ITraining {
  readonly type: string;
  constructor(public distance: number, public date: string) {
    this.type = "RUNNING";
  }
  format(): string {
    return `Ran ${this.distance} for ${this.type}`;
  }
}

const LONG_RUN = 1;
const INTERVALS = 2;
const RUNNING = 3;

// Obtiene elementos del DOM
const form = document.querySelector("#form")!;
const typeElement = document.querySelector("#type") as HTMLSelectElement;
const distanceElement = document.querySelector("#distance") as HTMLInputElement;
const tbody = document.querySelector("#tbody")!;

// Arreglo de entrenamientos
const trainings: ITraining[] = [];

form.addEventListener("submit", (event: Event) => {
  // Evita que se envíe información al servidor
  event.preventDefault();

  // Obtiene los valores del formulario
  const typeValue = parseInt(typeElement.value);
  const distanceValue = parseInt(distanceElement.value);

  // Crea un objeto diferente dependiendo de la selección del usuario
  let newTraining: ITraining;
  if (typeValue === LONG_RUN) {
    newTraining = new LongRunTraining(distanceValue);
  } else if (typeValue === INTERVALS) {
    newTraining = new IntervalsTraining(distanceValue, 0);
  } else if (typeValue === RUNNING) {
    newTraining = new RunningTraining(distanceValue, "2023-10-10");
  }

  // Agrega un entrenamiento al arreglo
  trainings.push(newTraining!);

  // Crea la fila
  const tr = document.createElement("tr");
  // Crea las celdas
  const tdType = document.createElement("td");
  const tdDistance = document.createElement("td");
  // Asigna los textos a las celdas dada la información del objeto
  tdType.textContent = newTraining!.type;
  tdDistance.textContent = `${newTraining!.distance} kms`;
  // Agrega las celdas a la fila
  tr.append(tdType, tdDistance);
  // Agrega la fila a la tabla
  tbody.append(tr);
});
