// Declaración de Enum
enum TrainingType {
  TRAINING_RUN, // 0
  INTERVALS, // 1
  LONG_RUN, // 2
}

// Declaración de variable de tipo Enum
let trainingType: TrainingType = TrainingType.INTERVALS;

// Asignar valor DESCRIPTIVO a la variable
trainingType = TrainingType.LONG_RUN;
// Asignar un valor NO DESCRIPTIVO a la variable
trainingType = 1;

console.log(trainingType);
