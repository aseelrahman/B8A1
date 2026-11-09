function multiplyValue(num: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return num * multiplier;
  } else {
    return num * 2;
  }
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }

  return "Input is not valid";
}

function formatCoordinate(arr: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = arr;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: readonly Course[],
  minStudents: number,
): Course[] {
  const filteredCourse: Course[] = courses.filter(
    (course) => course.students >= minStudents && course.isPublished,
  );

  return filteredCourse;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const newArr: T[K][] = items.map((item: T) => item[key]);

  return newArr;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

export {};
