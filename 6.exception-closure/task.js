function parseCount(parsing) {
    if (Number.isNaN(Number.parseFloat(parsing))) {
        throw new Error ("Невалидное значение");
    }
    return Number.parseFloat(parsing);
}

function validateCount(parsing) {
    try {
        if (parseCount(parsing) != 0) {
            return parseCount(parsing);
        }
    }
    catch (error) {
        return error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if (firstSide + secondSide < thirdSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        else if (secondSide + thirdSide < firstSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        else if (firstSide + thirdSide < secondSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p*(p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide)
    }
    catch(error) {
        return {
            get area() {
                return ("Ошибка! Треугольник не существует");
            },
            
            get perimeter() {
                return ("Ошибка! Треугольник не существует");
            }
        }
    }
}