# Typescript

    Typescript = Javascript + A type system.

# The JS type system

    - Helps us to catch errors during development; 
    - Uses type annotations to analyze our code; 
    - Onley active during development; 
    - Doesn't provide any perfomance optimization; 

# syntax-and-features
# Type
- An easy way to refer to the different properties and functions that a value has.
    e.g.
    "name" - is a string.
           - is a value that has all the properties and methods that we assume that a string has.

properties and methods of a string include;- length, charAt(), concat(), indexOf(), includes()

In typescript, we have two distinct Types 
1. Primitive types
- number, boolean, void, undefined, string, symbol, null

2. Object types
- functions, arrays, classes, objects

why consinder:
- They are used by our compiler to analyze our code for errors.
- They help others understand what values are flowing around our codebase.
 
in Typescript, types are used everywhere.

# Type annotations and type inferences

1. Type Annotations:- 

1.1 Variables
- Code we add to tell typescript what type of value a variable will refer.

e.g.  

    let apples: number = 5;

when to use:
- when we declare a variable on one line and then initialize it later.
- when we want a variable to have a type that can't be inferred.
- when a function returns the any type and we need to clarify the value.

1.2 Functions
- Code we add to tell typescript what type of arguments a function will receive and what type of values it will return.

2. Type Inference:-

2.1 Variables
-Typescript tries to figure out what type of value a variable refers to.

e.g.

    let apples = 5;

NB: It only works when declaration and initialization are on the same line.

    let apples;

    apples = 5;

The above won't work.

when to use:
- always.

2.2 Functions
- Typescript tries to figure out what kind of value a function will return.

# Any
- A type just as boolean and string
- Means TS has no idea what this is - can't check for correct  property references.
- Avoid variables with any at all cost.

# Typed Arrays
- Arrays where each element is some consistent type of value;

why;
- TS can do type inference when extracting values from an array.
- TS can prevent us from adding incompatible values to the array.
- We can get help with 'map', 'forEach', 'reduce', function.
- Flexible - arrays can still contain multiple different types;

when to use:
- any time we need to represent a collection of records with some arbitrary sort order. 

# Tuples
- array-like structure where each element represents some property of a record.

# interface
- Creates a new type, describing the property names and value types of an object.

e.g.

    interface Vehicle {
        v_name: string;
        year: number;
        broken: boolean;
    }

    const printVehicle = (vehicle: Vehicle): void => {
    
    };

# class
- Blueprint to create an object with some fields(values) and methods(functions) to represent a thing.

# class modifiers
- keywords that we can place on different methods and/or properties inside a class that restrict their accessibility.

Public
- the property or method can be called anywhere anytime.

Private
- the property or method can only be called by other methods in this class.

Protected
- the property or method can be called anywhere in this class or children classes only.

    interfaces + classes = really strong code reuse.

