// Clase Padre
class Person {
  constructor(private firstName: string, private lastName: string) {}
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1: Person = new Person("Clark", "Kent");
console.log(person1.getFullName());

// Clase Hija
class Teacher extends Person {
  constructor(firstName: string, lastName: string, public code: string) {
    super(firstName, lastName);
  }
}

// Instanciación de clase hija definiendo un objeto de clase hija
const teacher1: Teacher = new Teacher("Louise", "Lane", "001");
console.log(teacher1.getFullName());

// Instanciación de clase hija definiendo un objeto de clase padre
const teacher2: Person = new Teacher("Bruce", "Wayne", "002");
console.log(teacher2.getFullName());

// Clase Hija
class Student extends Person {
  constructor(firstName: string, lastName: string, avg: number) {
    super(firstName, lastName);
  }
}

const student1: Student = new Student("Diane", "Prince", 3.2);
console.log(student1.getFullName());

const student2: Person = new Student("Barry", "Allen", 4.3);
console.log(student2.getFullName());

// Lista de objetos
const persons: Person[] = [];
persons.push(new Teacher("Arthur", "Curry", "003"));
persons.push(new Student("Slade", "Wilson", 4.8));
persons.push(new Teacher("Selina", "Kyle", "004"));
persons.push(new Student("Jason", "Todd", 3.5));
persons.push(new Student("Oliver", "Queen", 2.5));

persons.forEach((person) => console.log(person.getFullName()));
