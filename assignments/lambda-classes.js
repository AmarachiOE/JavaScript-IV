// CODE here for your Lambda Classes

/* 
#### Person
* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

// Base Class -- PERSON

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

/* 
#### Instructor
* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

// Child Class -- INSTRUCTOR
class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade(student, subject) {
    //maybe remove student?
    console.log(`${student.name} receives a perfect score on ${subject}!!!`);
  }
  gradeRandom(student) {
      return Math.ceil((student.grade) + (Math.random() * 10));
  }
}

/* 
#### Student
* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/

// Child Class -- STUDENT
class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
  }
  listsSubjects() {
    console.log(`Their favorite subjects are: ${this.favSubjects.join(", ")}.`);
    //   `Their favorite subjects are ${this.favSubjects[0]}, ${
    //     this.favSubjects[1]
    //   }, and ${this.favSubjects[2]}.`);
    // used .join() instead of this
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

/* 
#### Project Manager
* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
  * 
*/

// GrandChild Class -- Project Managers
class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    //maybe remove student?
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

// Person, Instructor, Student, and Program Manager OBJECTS
const nelly = new Person({
  name: "Nelly",
  age: 54,
  location: "Spanaway",
  gender: "female"
});

const mike = new Person({
  name: "Mike",
  age: 65,
  location: "Spanaway",
  gender: "male"
});

const nnenna = new Person({
  name: "Nnenna",
  age: 26,
  location: "Spanaway",
  gender: "female"
});

const fred = new Instructor({
  name: "Fred",
  age: 37,
  location: "Bedrock",
  gender: "male",
  specialty: "Front-end",
  favLanguage: "JavaScript",
  catchPhrase: `Don't forget the homies`
});

const josh = new Instructor({
  name: "Josh",
  age: 38,
  location: "Lambdaland",
  gender: "male",
  specialty: "Everything",
  favLanguage: "JavaScript",
  catchPhrase: `Welcome to another exciting day at LAMBDA School`
});

const ryan = new Instructor({
  name: "Ryan",
  age: 35,
  location: "Lambdaville",
  gender: "male",
  specialty: "Prep Tutorials",
  favLanguage: "CSS",
  catchPhrase: `Follow along in CodePen`
});

const amarachi = new Student({
  name: "Amarachi",
  age: 24,
  location: "Oakland",
  gender: "female",
  previousBackground: "Public Health",
  className: "web18",
  grade: 91,
  favSubjects: [
    "Responsive Design",
    "User Interface II",
    "Javascript Fundamentals"
  ]
});

const leslie = new Student({
  name: "Leslie",
  age: 26,
  location: "San Francisco",
  gender: "female",
  previousBackground: "Accounting",
  className: "web17",
  grade: 87,
  favSubjects: ["iOS", "CSS", "Flexbox Module"]
});

const ade = new Student({
  name: "Ade",
  age: 25,
  location: "New York",
  gender: "male",
  previousBackground: "International Relations",
  className: "web16",
  grade: 97,
  favSubjects: ["HTML", "Javascript I", "JavascriptII"]
});

const chase = new ProjectManager({
  name: "Chase",
  age: 20,
  location: "Texas",
  gender: "male",
  specialty: "Back-end",
  favLanguage: "HTML",
  catchPhrase: `You got this, guys.`,
  gradClassName: "web15",
  favInstructor: "Josh"
});

const dennis = new ProjectManager({
  name: "Dennis",
  age: 22,
  location: "Oregon",
  gender: "male",
  specialty: "UX",
  favLanguage: "Javascript",
  catchPhrase: `No problem.`,
  gradClassName: "web15",
  favInstructor: "Ryan"
});

const liz = new ProjectManager({
  name: "Liz",
  age: 25,
  location: "San Jose",
  gender: "female",
  specialty: "Front-end",
  favLanguage: "CSS",
  catchPhrase: `That's awesome!`,
  gradClassName: "web14",
  favInstructor: "Wendell"
});

// TESTING
//person
console.log(nelly.name); // Nelly
console.log(nelly.speak()); // Hello my name is Nelly, I am from Spanaway.
console.log(mike.speak());

//instructor
console.log(fred.name); // Fred
console.log(fred.speak()); // Hello my name is Fred, I am from Bedrock.
console.log(fred.specialty); // Front-end
console.log(fred.catchPhrase);
console.log(fred.demo("javascript")); // Today we are learning about javascript!
console.log(ryan.demo("Git")); // Today we are learning about Git!
console.log(fred.grade(amarachi, "Javascript Fundamentals")); // Amarachi receives a perfect score on Javascript Fundamentals!!!
console.log(josh.grade(leslie, "User Interface II")); // Leslie receives a perfect score on User Interface II!!!

//PM
console.log(chase.name); // Chase
console.log(chase.speak()); // Hello my name is Chase, I am from Texas.
console.log(chase.specialty); // Back-end
console.log(chase.catchPhrase); // You got this, guys.
console.log(chase.gradClassName); // web15
console.log(chase.favInstructor); // Josh
console.log(chase.demo("iOS design")); // Today we are learning about iOS design!
console.log(chase.grade(amarachi, "responsive design")); // Amarachi receives a perfect score on responsive design!!!
console.log(chase.standUp("web18_chase")); // Chase announces to web18_chase, @channel standy times!
console.log(liz.standUp("web18_liz")); // Liz announces to web18_liz, @channel standy times!
console.log(chase.debugsCode(amarachi, "Applied Javascript")); // Chase debugs Amarachi's code on Applied Javascript.
console.log(liz.debugsCode(leslie, "Responsive Design II")); // Liz debugs Leslie's code on Responsive Design II.
console.log(dennis.debugsCode(ade, "Web Fundamentals")); // Dennis debugs Ade's code on Web Fundamentals.

//student
console.log(amarachi.name); //Amarachi
console.log(amarachi.speak()); //Hello my name is Amarachi, I am from Oakland.
console.log(amarachi.previousBackground); // Public Health
console.log(amarachi.className); // web18
console.log(amarachi.favSubjects); // ["HTML", "CSS", "Javascript"]
console.log(amarachi.PRAssignment("User Interface II")); // Amarachi has submitted a PR for User Interface II.
console.log(amarachi.sprintChallenge("User Interface and Git")); // Amarachi has begun sprint challenge on User Interface and Git.
console.log(amarachi.listsSubjects()); // Their favorite subjects are: Responsive Design, User Interface II, Javascript Fundamentals.
console.log(leslie.listsSubjects()); // Their favorite subjects are: iOS, CSS, Flexbox Module.
console.log(ade.listsSubjects()); // Their favorite subjects are: HTML, Javascript I, JavascriptII.


// STRETCH:
console.log(josh.gradeRandom(amarachi));
console.log(chase.gradeRandom(ade));
console.log(ryan.gradeRandom(leslie));
