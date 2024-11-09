// массива с оценками
let grades = [];
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(Math.random() * 100) + 1); // Генерация случайной оценки от 1 до 100
}

console.log("Оценки студентов:", grades);

//средний балл
let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Средний балл студентов:", average.toFixed(2));

//максимальный балл
let maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);

//минимальный балл
let minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);

// студенты с положительной оценкой 
let passingGrades = grades.filter(grade => grade >= 60);
console.log("Количество студентов с положительной оценкой (балл >= 60):", passingGrades.length);

//студенты с отрицательной оценкой
let failingGrades = grades.filter(grade => grade < 60);
console.log("Количество студентов с отрицательной оценкой (балл < 60):", failingGrades.length);

// преобразуем числовые оценки в буквенные
let letterGrades = grades.map(grade => {
  if (grade >= 80) return "A";
  if (grade >= 60) return "B";
  if (grade >= 40) return "C";
  if (grade >= 20) return "D";
  return "E";
});
console.log("Буквенные оценки:", letterGrades);