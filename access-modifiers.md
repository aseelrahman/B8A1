# Access Modifiers in TypeScript OOP and How They Work?

In TypeScript, access modifiers are used in classes to control how we can access properties and methods. There are three main access modifiers which are `public`, `private`, and `protected`. We also have `readonly`, which is used to prevent changing a property after it's initialized. By default, all properties and methods in TypeScript are `public`. It means we can access them from anywhere, even outside of the class.

```typescript
class User {
  public name: string = "John";
}

const user = new User();
console.log(user.name);
```

The `private` modifier is used when we don't want a property or method to be accessed outside of its own class. For example, if we have an employee salary, we might not want other classes to access it directly.

```typescript
class Employee {
  private salary: number = 50000;

  getSalary() {
    return this.salary;
  }
}

const empl = new Employee();
console.log(empl.getSalary()); // 50000
console.log(empl.salary); // It will give an Error
```

The protected modifier works similar to private, but it also allows child classes to access the property. This is useful when we use inheritance in OOP.

```typescript
class Person {
  protected name: string = "John";
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const student = new Student();
console.log(student.getName()); // John
```

Another useful modifier is `readonly`. It allows us to assign a value when declaring the property or inside the constructor, but we cannot change it later.

```typescript
class Student {
  readonly studentId: number = 101;
}

const student = new Student();
// student.studentId = 102; //Will throw an Error
```

We use `public` when a property should be accessible from anywhere, `private` when we want to restrict access, and `protected` when child classes needs access to it. On the other hand, `readonly` helps us protect values from being reassigned. These modifiers helps us write more organized and secure code when working with classes in TypeScript.
