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
    return `WHATEVER!!!`;
  }
}

// Instanciación de clases a partir de una interface
const entrenamiento1: ITraining = new LongRunTraining(42);
const entrenamiento2: ITraining = new IntervalsTraining(8, 5);
const entrenamiento3: ITraining = new RunningTraining(15, "2023-10-09");
console.log(entrenamiento1);
console.log(entrenamiento2);
console.log(entrenamiento3);

// Lista de objetos que cumplen con la interface
const entrenamientos: ITraining[] = [
  entrenamiento1,
  entrenamiento2,
  entrenamiento3,
];
entrenamientos.forEach((e) => {
  console.log(e.format());
});
