# React Notes

## What is React.js?

- React.js is a popular open-source JavaScript library used to build user interfaces for web applications. It was developed by Facebook and has been widely adopted by the web development community for its simplicity, speed, and flexibility.
- In a nutshell, React allows developers to create reusable UI components that can be combined to form complex user interfaces. Each component encapsulates its own logic and state, making it easier to reason about the behavior of the application.

## History of React 

- React was initially developed by Jordan Walke, a Software Engineer at Meta. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013. Thereafter lot of upgradation has been done and currently we are using 18th version of React.

## Difference between React, Vue and Angular?

- A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers. 

![Screenshot_20230226_202851](https://user-images.githubusercontent.com/94468010/221418750-b05fe7ff-899d-4371-96d6-8ba6eb31a5ad.png)

## Library and Framework

- In the above difference you might have seen the terms library and framework, but have you wondered what this terms actually mean? Let's see then, both library and framework are code written by someone else that is used to help solve common problems. If you look deep into them, Library is a collection of reusable code to solve common problems and framework is reusable code to provide skeleton to build apps. 
- TECHNICAL DIFFERENCE between them lies in term called 'INVERSION OF CONTROL'
- A framework inverts the control of the program, it tells the developer what they need. On the otherhand library doesn't the programmer calls the library where and when they need it.
- The term 'OPINIONATED' is coined by the degree of freedom library or framework gives to the developer.

# Features

## 1. JSX

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. It was developed by Facebook as part of the React library and is used extensively in React applications.

With JSX, developers can write code that looks like HTML, but is actually a combination of JavaScript and HTML. For example, instead of creating a DOM element using plain JavaScript like this:

```
const element = document.createElement('div');
element.innerText = 'Hello, world!';
```
In JSX, the same code can be written as:
```
const element = <div>Hello, world!</div>;
```
#### Points to Remember
- You can only return one top level element from given component. This is usually known as parent element.
- Elements including self closing tags are needed to be closed.
- Unlike HTML, class attribute should be written as ClassName.
- React Component should be 'Capitalized' as it will be treated as identifier instead of string.

## Virtual DOM

- DOM stands for Document object model. It is structured representation of HTML elements that are present in the webpage. It contains node for each UI element present in the web document.
- Virtual DOM in react is a lightweight copy of actual DOM. It is same as DOM but it does not have the power to directly change the layout of the document. React maintains two VDOM at each time, one contains the updated VDOM and one is just the pre-updated version of this VDOM.
- React Compares both the VDOM to figure out the exact changes in the DOM, process of comparison is known as 'Diffing Algorithm'. Once React finds out what exactly has changed then it updates those objects only, on real DOM. React uses something called batch updates to update the real DOM.
- It just means that the change to the real DOM are sent in the batches instead of sending any update for single change in the state of component. React manages re-rendering of UI most efficiently by ensuring that the Real DOM receives batch update to re-render the UI. This entire process of transforming changes to real DOM is called as 'RECONCILIATION'.

## SPA 

SPA is webpage that dynamically interact with the web browser by rewriting the current web page with the data from the web server. SPA only sends what you need with each click, and your browser render that information. Single-page sites help keep the user in one, comfortable web space where content is presented to the user in a simple, easy and workable fashion.

![SPA](https://user-images.githubusercontent.com/94468010/221557339-eecc47ef-8745-40db-8050-1124dae3eb80.png)

### Advantages
- Single time file loads each for HTML, CSS and JS.
- No extra queries to the server.
- Fast and responsive front-end building.
- Enhanced user-experience.

### Disadvantages
- Does not perform well with SEO.
- uses lot of browser resources.
- Security issues.

## One-way Data Binding

- One-way data binding is a data flow mechanism in which the data flows only in one direction, from the data source to the UI element. This means that when the data changes, the UI element that is bound to the data is automatically updated to reflect the new data, but the reverse is not true.
- In one-way data binding, changes made to the UI element do not update the data source. If the user changes a value in the UI, the change is not automatically propagated back to the data source. Instead, the developer must explicitly update the data source based on the new value in the UI.
- One advantage of one-way data binding is that it can simplify the code and reduce the risk of unintended consequences. Since the data flow is unidirectional, it is easier to reason about the code and to track the source of changes. Additionally, one-way data binding can improve performance by reducing the number of updates that need to be made to the UI.

```
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
This is an example of one-way data binding, as the value of count flows from the state variable to the UI element (the paragraph element), but changes made to the UI element do not affect the state variable.

If we were using two-way data binding, we would need to define an event handler for the paragraph element to update the state variable when the user changes the text. However, in one-way data binding, the paragraph element is only used to display the current value of the 'count' variable, and does not update the variable when clicked or changed.

## Component Based
- Component-based architecture: React allows developers to build complex UIs by breaking them down into small, reusable components. Each component is responsible for rendering a small part of the UI, and can be composed together to create larger, more complex UIs.
- There are two types of components in React
1. Class based components
2. Functional based components

## Import and Exports

Importing and exporting in React JS will help us write modular code, i.e., splitting code into multiple files. Importing allows using contents from another file, whereas exporting makes the file contents eligible for importing. The basic idea behind imports and exports is to exchange contents between several JavaScript files.

```
const person = {
    name:'Kedar'
}

export default person;
```
```
export const age = 23;
export const birth_country = "India"
```
A File can have no more than one default export but it can have as many named exports as you like.

```
import person from './name.js'
import {age} from './info.js'
import {birth_country} from  info.js'
```
When you write default import you can put 'any name' you want after import. Incase of named imports, the name has to match on both sides. That's why they are called named exports/imports. We can export multiple components form same file using one default export and numerous named exports if required.

# Components

## Class Component

In React, class-based components are a type of component that is defined using a JavaScript class. They are an older method of defining components, and have largely been replaced by functional components in modern React development. However, they are still commonly used in legacy code and in some specialized cases.

Class-based components are defined using the class keyword, and they extend the React.Component class. They define a render() method that returns a React element, which describes the UI that should be rendered to the screen.

Here is an example of a class-based component:

```
import React from 'react';

class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
```

In this example, we define a class-based component called ExampleComponent. It extends the React.Component class and defines a render() method that returns a div element containing an h1 element.

Class-based components have a few advantages over functional components, such as the ability to define state and lifecycle methods. However, they also have some disadvantages, such as being more verbose and harder to understand for beginners.

In general, functional components are preferred for modern React development, as they are easier to write and maintain, and provide better performance. However, class-based components are still a valuable tool in the React developer's toolbox, and can be useful in some specialized cases.

### What is Constructor and Super Keyword?

Constructor are used for 2 purposes :
In React class components to initialize the component's state and to bind event handlers.

super() is used to call the constructor of its parent class. If we would like to set a property or access this inside the constructor we need to call super() method.

```
import React from 'react';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
      age: 30
    };
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name} and I am {this.state.age} years old.</h1>
      </div>
    );
  }
}
```

In this example, we define a class-based component called ExampleComponent. We define a constructor method that calls the super method to initialize the component's props and sets the component's initial state to an object with two properties, name and age. We then use the name and age state properties in the render method to display a message on the screen.

This is a very basic example, but it demonstrates how the constructor and super keywords are used to initialize a React class component's state.

## Functional component

In React, function-based components are a newer and more lightweight way to define components than class-based components. They are defined using JavaScript functions and can be considered as pure functions that take in props and return a React element.

Here is an example of a function-based component:
```
import React from 'react';

function ExampleComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}
```

In this example, we define a function-based component called `ExampleComponent`. It takes in a `props` parameter, which is an object containing any props that are passed to the component. It returns a `div` element containing an `h1` element that displays the `name` prop.

Function-based components have several advantages over class-based components:

- They are simpler and more lightweight than class-based components, which makes them easier to read, write, and maintain.
- They are less verbose than class-based components, which means less boilerplate code.
- They are easier to test because they are just plain functions that take in props and return a React element.
- They are faster than class-based components, because they don't have the overhead of a class instance and lifecycle methods.

In summary, function-based components are a simpler and more lightweight way to define components in React. They are easier to read, write, and maintain, and provide better performance than class-based components. For these reasons, they have become the preferred way to define components in modern React development.

### Is there any reason to still use react class components?
Yes, there are still some reasons to use React class components, although function components are now the preferred way of writing components in React.

Here are a few reasons why you might still choose to use React class components:

- Legacy Codebase: If you are working on a legacy codebase that uses class components, it might be more efficient to continue using class components rather than rewriting all of your code.

- Lifecycle Methods: React class components have access to a number of lifecycle methods that are not available to function components. If you need to use one of these lifecycle methods, such as componentDidMount or componentDidUpdate, you will need to use a class component.

- More Explicit: Some developers prefer the more explicit nature of class components. With class components, everything is defined in one place, making it easier to see what's going on in your code.

That being said, function components are generally considered the better choice for new React projects, as they offer better performance, simpler syntax, and easier testing. However, there are still some cases where class components might be the better option.

## Functional vs Class Component

|Functional Component|Class Component |
|:----|:---|
| A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). | A class component requires you to extend from React. Component and create a render function which returns a React element. |
|There is no render method used in functional components. | It must have the render() method returning JSX (which is syntactically similar to HTML) |
|Functional component run from top to bottom and once the function is returned it cant be kept alive. | Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component. |
| Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
|React lifecycle methods (for example, componentDidMount) cannot be used in functional components. | React lifecycle methods can be used inside class components (for example, componentDidMount). |

