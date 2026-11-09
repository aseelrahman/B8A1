# Type Alias vs Interface in TypeScript and What's the Difference?

In TypeScript, both `type` aliases and `interface` can be used to describe the structure of an object, but they works a little differently. An interface is mainly used to define what properties or methods an object should have, while a type alias can describe almost any kind of data.

For example, we can use a type alias for strings, numbers, unions, tuples, and objects. On the other hand, interfaces are mostly used for objects and classes.

```typescript
interface User {
  name: string;
  age: number;
}

type Status = "active" | "inactive";
```

One interesting difference is declaration merging. If we declare two interfaces with the same name, TypeScript automatically merges them together. But if we try to do the same thing with type aliases, it will throw an error.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Here both properties are required
const user: User = {
  name: "John",
  age: 25,
};
```

Another difference is how we extend them. With interfaces, we can use the `extends` keyword to inherit properties from another interface, while type aliases can use the `&` operator to combine different types.

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

type PersonType = {
  name: string;
};

type EmployeeType = PersonType & {
  salary: number;
};
```

We use an interface when working with objects or classes, especially when we might need to extend them later. But if we need to define a union type, tuple, or a combination of different types, we chose a type alias because it gives us more flexibility. Both are useful when writing TypeScript code, but knowing their differences help us decide which one to use.
