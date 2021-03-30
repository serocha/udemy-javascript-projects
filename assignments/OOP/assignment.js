class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    get price() {
        return '$' + this._price;
    }
    
    set price(value) {
        if (value < 0) {
            throw 'Invalid price!';
        }
        this._price = value;
    }

    pricePerHour() {
        return ((this.price).slice(1)/this.length).toFixed(2) + ' per hour';
    }

    courseSummary() {
        console.log('Title: ' + this.title);
        console.log('Length: ' + this.length + 'hrs');
        console.log('Price: ' + this.price);
    }
};

const course1 = new Course('Intro to Basketweaving', 40, 1000);
const course2 = new Course('Advanced Flyfishing', 55, 1200);

console.log(course1, course2);

console.log(course1.pricePerHour() + ' vs ' + course2.pricePerHour());

course1.courseSummary();
course2.courseSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, exercises) {
        super(title, length, price);
        this.numOfExercises = exercises;
    }

    exerciseCount() {
        console.log('There are ' + this.numOfExercises + ' exercises in this course.');
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log('I have learned about tomatoes.');
    }
}

course3 = new PracticalCourse('Growing Tomatoes 101', 61, 1500, 721);
course4 = new TheoreticalCourse('Theory of Optimal Tomato Yield', 20, 600);

course3.courseSummary();
course3.exerciseCount();
course4.courseSummary();
course4.publish();