function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    }
    let student1 = new Student ("Vasilisa", "female", 19);
    let student2 = new Student ("Alex", "male", 20);
    let student3 = new Student ("Artem", "male", 21);

    Student.prototype.setSubject = function(subjectName) {
        this.subject = subjectName;
    }

    Student.prototype.addMarks = function (...marks) {
        if (this.marks === undefined) {
            return;
        }
        else {
            this.marks.push(...marks);
        }
    }

    Student.prototype.getAverage = function () {
        if (!this.marks || this.marks.length === 0) {
            return 0;
        }
        else {
            let sum = 0;
            for (let i = 0; i < this.marks.length; i++) {
                sum += this.marks[i]; 
            }
            return sum / this.marks.length;
        } 
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  
}
