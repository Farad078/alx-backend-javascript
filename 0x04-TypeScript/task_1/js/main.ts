// Teacher Interface
interface Teacher {
    firstName: string
    lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    age?: number
    location?: string
    [key: string]: any
}

// Extending the Teacher Interface class
interface Directors extends Teacher {
    numberOfReports: number
}

// Printing teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher:printTeacherFunction = (firstName:string, lastName: string) => `${firstName[0]}.${lastName}`

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
  
console.log(teacher3);
console.log(director1);
console.log(printTeacher("Chinedu", "Okorie"));

