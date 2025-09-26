
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

export const Teacher = class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(firstName: string, lastName: string, salary: number | string): DirectorInterface | TeacherInterface {
   if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee:  Teacher | Director): employee is Director{
  return (employee as Director).workDirectorTasks != undefined;
}

function executeWork(employee: Teacher | Director): string{
  if(isDirector(employee)){
   return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass (todayClass: Subjects): string{
  if(todayClass == 'Math'){
    return 'Teaching Math';
  }
    return 'Teaching History';
}