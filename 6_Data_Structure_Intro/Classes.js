class Student {
  constructor(firstName, lastName, year, tardies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = tardies;
    this.scores = [];
  }
  // The following are instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `${this.firstName} ${this.lastName} has been expelled!`;
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    return (
      this.scores.reduce((acc, score) => acc + score, 0) / this.scores.length
    );
  }

  // The following is a class method or static method (utility function)
  // It can only be used by the class itself not the instance
  static enrollStudents(...students) {
    // Send an email
  }
}

const firstStudent = new Student('Colt', 'Steele');
