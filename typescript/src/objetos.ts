// Object Oriented Programming

// Definición del objeto
let movie: {
  title: string;
  year: number;
};

// Asignación de un valor a un objeto
movie = {
  title: "Django Unchained",
  year: 2012,
};

// Genera error porque no cumple con la definición del objeto
movie = {
  title: "Pulp Fiction",
  year: 1990,
  //  director: "QT"
};

// -------- CLASS -----------

// Definición de clase con valores por default (sin constructor)
// Todas las propiedades son públicas por default
class Training1 {
  type: string = "TRAINING RUN";
  distance: number = 0;
  date: string = "";
}

const t1 = new Training1();
const t4 = new Training1();
console.log(t1);
console.log(t4);

// Definición de clase con constructor
class Training2 {
  type: string;
  distance: number;
  date: string;
  constructor(type: string, distance: number, date: string) {
    this.type = type;
    this.distance = distance;
    this.date = date;
  }
}

const t2 = new Training2("LONG RUN", 21, "2023-10-04");
const t3 = new Training2("INTERVALS", 8, "2023-10-03");
console.log(t2);
console.log(t3);

// Atributos public, private, readonly
class Training3 {
  readonly type: string = "TRAINING RUN";
  public distance: number = 0;
  public date: string = "";
  private _comments: string = "";
  // Setter
  public set comments(comments: string) {
    this._comments = comments;
  }
  // Getter
  public get comments(): string {
    return this._comments;
  }
}

const t5 = new Training3();
// Modifica los valores de las propiedades
t5.date = "2023-10-01";
// Genera error
//t5.type = "LONG RUN";

t5.comments = "It was a hard training";
console.log(t5.comments);

// Declaración de clase con constructor y atributos definidos en el constructor
class Training4 {
  constructor(
    readonly type: string,
    public distance: number,
    public date: string,
    private _comments: string
  ) {}
}

const t6 = new Training4("LONG RUN", 32, "2023-10-09", "Goog training");
console.log(t6);

// Genera error
//t6.type = "INTERVALS";
