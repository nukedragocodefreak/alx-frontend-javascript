export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher1);

// should print
// Object
// contract: false bgt nmjyt789     qa` 1\
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

interface Director extends Teacher{
    numberOfReports: number
}


// Example usage:
const director1: Director = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Cape Town",
  numberOfReports: 5,
  contract: false, // additional property
};

export interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

export function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Interface for the class instance
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

