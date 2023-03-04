# React Notes

# -------------- Day-1 -----------------

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

# -------------- Day-2 -----------------

## CSS STYLING IN REACT: -

In React we can apply styling in multiple ways, here we will look into the most commonly used methods.


- Inline Styling
- Creating State object variable
- Sharing style across many React components
- Styled Components


# Inline Styling:

In React just like CSS, we can apply the styling directly to the element by adding style attribute, but unlike CSS since the inline CSS is written in a javascript object, properties with hyphens separators like background-color must be written with camel case syntax. While applying inline styling the first curly brackets inject JavaScript in JSX and the second curly brackets create an object :

```
export default function MyComponent(){  
return <div style={{ color: 'blue', lineHeight : 10, padding: 20 }}> Inline Styled Component</div>  
}  
```


# Creating a State Object Variable 
This is the other way of styling in react, where we can create Javascript objects, and instead of writing inline styling, we pass objects to elements in style attribute directly.

```
import React, { useState } from 'react';

function MyComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const styles = {
    backgroundColor: isClicked ? 'red' : 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div style={styles} onClick={handleClick}>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

export default MyComponent;
```



# Sharing Style across many react Components

The style objects and the components do not have to be in the same file. We can create a separate .js file for our styles, export these styles, and then import them into the component where we want to use them. Doing this makes styles reusable across multiple components.


we can export each style object individually, which will also mean importing them individually. That might get tedious if there are many style objects in the file.

### sharedStyles.js

```
const button = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
}

export const style = {
    button: button
}
```

### App.js

```
import React from 'react';
import styles from './sharedStyles.js';

function Button() {
  return (
    <button className={styles.button}>
      Click me
    </button>
  );
}

export default Button;
```




## CONDITIONAL RENDERING :

- In React conditional rendering means to render something if the given condition is true, to follow this concept we can always use traditional if-else statements but in addition to that React allows Ternary operators and Logical && operator to put something in condition.


You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX,  {cond ? &lt;A /&gt; : &lt;B /&gt;} means if “cond is true, render A else B ”.
- In JSX, {cond && &lt;A /&gt;} means if “cond is true, render A otherwise nothing.

#### Traditional if-else 
```
class App extends Component {

  render() {
    let {isLoggedIn} = this.state;
    
    //if-else statement
    const renderAuthButton = () => {
      if (isLoggedIn) {
        return <button>Logout</button>;
      } else {
        return <button>Login</button>;
      }
    }

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        {renderAuthButton()}
      </div>
    );
  }
}
```

#### Ternary operators
```

import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
	//use of ternary operators
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    );
  }
}

export default App;
```
#### Short-circuit or Logical AND operator
```
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        {isLoggedIn && <button>Logout</button>}
      </div>
    );
  }
}

export default App;
```

## State vs Props

| State | Props |
| :---- | :---- |
| State can be changed. | Props are read-only. |
| States is mutable. | Props are immutable. |
| State holds info about the components. | Props allow you to pass data from one component to other component as as argument. |
| State cannot be accepted by **child component** . | Props can be accessed by the **child component** .|
| State can be used for rendering dynamic changes with the components. | Props are used to communicate between two components. |
| State cannot make components reusable. | Props can make components to re-usable. |

## Passing props in both class and functional component

#### class component

```
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, {name}!</h1>;
  }
}

export default Greeting;
```

#### functional component

```
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

- In both examples, we define a component called Greeting that accepts a prop called name. In the class component, we access the prop using this.props.name, while in the functional component we access it using props.name.

- To use these components in another component, we would pass the name prop like this:

```
<Greeting name="Alice" />
```


## Pass Props Parent to Child Component 

#### parent.jsx
```
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  state = {
    name: "Mathew",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Chennai",
      state: "Tamil Nadu"
    }
  }

  render() {
    return <Child person={this.state} />;
  }
}

export default Parent;
```
#### child.jsx

```
import React from 'react';

const Child = (props) => {
  const { name, age, address } = props.person;
  return (
    <div>
      <h1>{name}, {age}</h1>
      <p>{address.street}, {address.city}, {address.state}</p>
    </div>
  );
};

export default Child;
```

In this example, the `Parent` component has a state with three properties: `name`, `age`, and `address`. The Parent component passes its entire state object to the Child component as a prop called person.

In the `Child` component, we destructure the person prop to get the `name`, `age`, and `address` properties. We then use those properties to render a header with the person's name and age, as well as a paragraph with their street address, city, and state.

Note that we are able to pass complex data (an object containing multiple properties) as a prop from the parent component to the child component. We can then access the individual properties of that object in the child component using destructuring.

## Pass Props Child to Parent Component 

#### Parent Component
```
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  state = {
    message: ""
  }

  handleMessage = (message) => {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child handleMessage={this.handleMessage} />
        <p>Message from child: {this.state.message}</p>
      </div>
    );
  }
}

export default Parent;
```
#### Child Component
```
import React, { useState } from 'react';

const Child = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleMessage(message);
    setMessage("");
  }

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Child;
```

- In this example, the `Parent` component defines a state with a single property called `message`. The `Parent` component also defines a function called `handleMessage` that takes a message as an argument and updates the message state.
The Parent component passes the `handleMessage` function down to the `Child` component as a prop called `handleMessage`.

- The `Child` component has a form with an input field and a submit button. When the form is submitted, the `handleSubmit` function is called. This function calls the `handleMessage` function passed down from the parent with the current value of the message state.

- The Parent component renders the Child component and passes the `handleMessage` function down as a prop. The Parent component also displays the value of the message state, which is updated when the `Child` component calls the handleMessage function.

- We are able to pass a function from the parent component to the child component as a prop, and then call that function in the child component to update the state of the parent component. This allows us to pass data from the child component to the parent component.



## Update State from props

- In React, state is used to manage data that can change over time, while props are used to pass data from a parent component to a child component. It is generally not recommended to update the state directly from the props, as it can lead to bugs and unpredictable behavior.

However, if you need to update the state based on the props, you can use the `componentDidUpdate` lifecycle method. This method is called every time the component is updated, and it receives the previous props and state as arguments. You can compare the previous props to the current props, and update the state accordingly.

#### Code

```
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({ count: this.props.count });
    }
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default MyComponent;
```
The `componentDidUpdate` method is used to update the state if the count prop has changed since the last update. When the componentDidUpdate method is called, it receives the previous props as an argument (`prevProps`). We can compare the count prop from the previous props to the current props (`this.props.count`), and if they are different, we update the component's state with the new count value.

# -------------- Day-3 -----------------

# Form Handling 

### In React, there are two main approaches to form handling: `controlled components` and `uncontrolled components.`

### Controlled Components

- In controlled components, the form data is managed by React state. Every form element (such as input, textarea, and select) has a value property that is set by React and updated by React when the user types or selects a new value. The value of the form element is tied to a piece of state in the component, and changes to the form element update the state.

```
import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ControlledForm;

```
### Uncontrolled Components

- In uncontrolled components, the form data is managed by the DOM. The form elements have no corresponding state in the component, and their values are accessed directly from the DOM when the form is submitted.

```
import React, { Component } from 'react';

class UncontrolledForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      message: this.messageInput.value
    };
    console.log('Form submitted:', formData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.nameInput = input} />
        </label>
        <label>
          Email:
          <input type="email" ref={(input) => this.emailInput = input} />
        </label>
        <label>
          Message:
          <textarea ref={(input) => this.messageInput = input}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UncontrolledForm;
```

- In this example, the form data is accessed directly from the DOM when the form is submitted. The `handleSubmit` method retrieves the values of the form elements using the ref attribute, and logs the form data to the console.

### Working with Array of Objects

- Working with an array of objects is a common task in many React applications. Here's an example of how you might use an array of objects in a React component.

```
import React, { useState } from 'react';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

function BookList() {
  const [bookList, setBookList] = useState(books);

  const handleRemove = (id) => {
    setBookList(bookList.filter(book => book.id !== id));
  }

  return (
    <ul>
      {bookList.map(book => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <button onClick={() => handleRemove(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
```

### Synthetic Events

- In React, a SyntheticEvent is a cross-browser wrapper around the browser's native event object. It normalizes the event properties and methods, making it consistent across different browsers.

- When an event is fired in a React component, such as a button click or form submission, React creates a SyntheticEvent object and passes it as the argument to the event handler function. The SyntheticEvent contains all the relevant information about the event, such as the type of event, the target element, and any user input data.

- The benefit of using SyntheticEvents is that they are pooled by React, meaning that the same SyntheticEvent object can be reused for different events. This can improve performance by reducing the number of objects created and garbage collected.

```
import React from 'react';

function handleClick(event) {
  event.preventDefault();
  console.log('Button clicked!');
}

function Button() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default Button;
```

- When the button is clicked, React creates a SyntheticEvent object and passes it as the argument to the `handleClick` function. We can then use the SyntheticEvent to handle the button click event in a cross-browser compatible way.

## List and Keys

```
function List(props) {
  const items = props.items.map((item) =>
    <li key={item.id}>{item.text}</li>
  );
  return (
    <ul>{items}</ul>
  );
}

const myList = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' }
];

ReactDOM.render(
  <List items={myList} />,
  document.getElementById('root')
);

```

- we're rendering a list of elements based on an array of objects called myList. We're using the map() method to create a new array of elements, and setting the key prop to the id property of each object in the myList array. This ensures that each element has a unique identifier.

- By using the key prop, React can efficiently update the list of elements when changes are made to the myList array, such as adding or removing an item. If we didn't provide a key prop, React would have to re-render the entire list of elements, which can be less efficient.


# Lifecycle Method

In React class components, there are several lifecycle methods that are called at different stages of the component's lifecycle. These methods can be used to perform various operations, such as initializing the component, updating the component, or cleaning up after the component.

Here is an overview of the most commonly used lifecycle methods in React class components:

- `constructor(props)` - This method is called when a new instance of the component is created. It is used to initialize the component's state and bind event handlers.

- `render()` - This method is required and is called whenever the component needs to be rendered. It returns a React element that represents the component's user interface.

- `componentDidMount()` - This method is called after the component has been mounted to the DOM. It is used to perform operations that require access to the DOM, such as fetching data from an API.

- `componentDidUpdate(prevProps, prevState)` - This method is called after the component has been updated. It is used to perform operations that depend on the component's new props or state, such as updating the DOM or making a network request.

- `shouldComponentUpdate(nextProps, nextState)` - This method is called before the component is updated. It is used to determine whether the component should be re-rendered or not. By default, React re-renders the component whenever its props or state change. However, this method can be used to optimize performance by preventing unnecessary re-renders.

- `componentWillUnmount()` - This method is called before the component is unmounted from the DOM. It is used to perform any necessary cleanup, such as removing event listeners or canceling network requests.

```
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      console.log("Data has changed");
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      data: [...prevState.data, "New item"]
    }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add item</button>
      </div>
    );
  }
}
```

# Lifecycle vs Hooks

- Lifecycle methods are only available in class components, whereas hooks can be used in both class and functional components. Hooks were introduced in React 16.8 as a way to manage state and lifecycle methods in functional components.

Some key differences between lifecycle methods and hooks include:

1. Lifecycle methods are only available in class components, while hooks can be used in both class and functional components.

2. Lifecycle methods are called in a specific order during a component's lifecycle, while hooks can be called in any order within a functional component.

3. Hooks provide a more concise and functional way of managing state and lifecycle than using class components and lifecycle methods.

4. Hooks can be used to share stateful logic between components, whereas with class components, this would require using higher-order components or render props.

- Lifecycle Example
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    );
  }
}
```

- Hooks Example
```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component updated');
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
    </div>
  );
}
```

# -------------- Day-4 -----------------

### What is Props-Drilling?

- Prop drilling in React refers to the process of passing props (short for properties) from a component to its child components, and then to their child components, and so on, even if those intermediate components don't actually use the prop themselves. This can result in unnecessary code complexity and make it harder to reason about the data flow in the application.

- For example, consider a scenario where a parent component needs to pass a prop to a deeply nested child component. If the intermediate components don't use the prop, but are required to pass it down to their own children, this can create a lot of unnecessary code and make the component tree more difficult to understand.

- To avoid prop drilling, React provides a few different solutions, such as using React context or Redux for managing application state. By using these tools, data can be made available to any component in the application without the need for explicit prop passing. This can help reduce the amount of code required and make the application more maintainable.


### Props-Drilling Code
```
import React from 'react';

function App() {
  const user = { name: 'John', age: 30, email: 'john@example.com' };

  return (
    <div>
      <Header user={user} />
      <Main user={user} />
      <Footer user={user} />
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
    </header>
  );
}

function Main({ user }) {
  return (
    <main>
      <h2>User Info:</h2>
      <UserInfo user={user} />
    </main>
  );
}

function UserInfo({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function Footer({ user }) {
  return (
    <footer>
      <p>Contact: {user.email}</p>
    </footer>
  );
}

export default App
```

## Solution of Props-Drilling:
```
The React context API is a fast way of avoiding prop drilling and ensuring your data is managed globally.
```

### What is Context API??

- Context API enables you to share data between components that are not directly connected in the component tree, without having to pass data down as props through every level of the tree.

- Here's an example of how you can use the Context API to pass a theme to child components:

```
// Create a new context for the theme
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

// Create a provider component that will pass the theme to its children
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

```
In this example, we define a new context using the createContext method and create a provider component ThemeProvider that wraps its children with the ThemeContext.Provider. The provider component sets the initial state of the theme to "light" and passes the theme and setTheme functions down to its children as a value using the value prop.

To consume the context value in child components, you can use the useContext hook:
```
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#eee' : '#222' }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
}
```

In this example, we import the ThemeContext and use the useContext hook to get access to the theme and setTheme functions. We use the theme value to set the background color of the header and toggle between light and dark mode when the button is clicked.

This is just a basic example, but the Context API can be used for more complex data sharing scenarios, like passing user authentication information or language preferences down the component tree.
 
 
# Hooks
 
# useState:

- useState is a hook in React that allows functional components to have state. In class components, state is defined using a class property called state. However, with functional components, stateful logic had to be implemented using class components, making the code more verbose and harder to read.

useState hook provides a way to manage state in functional components by allowing you to declare a state variable and a function to update that variable.

### Syntax:
` const [state, setState] = useState(initialValue); `

```
the **initialValue** is the value you want to start with, and **state** is the current state value that can be used in your component. 
The **setState function** can be used to update the state, triggering a re-render of your component.
```

```
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

```

- In this example, we use the useState hook to define a state variable formData that is an object containing the values of the form fields. We define an handleInputChange function that is called when any of the form fields are updated. This function uses the setFormData function to update the formData state with the new value of the input field.
- 

# useEffect:

```
In useEffect, The word effect refers to a functional programming term called a "side effect".
**Side-Effects**
1. tasks like updating the DOM
2. fetching data from API end-points
3. setting up subscriptions or timers
```

## Why do we need useEffect:
```
if we wanted to change the title meta tag to display the user's name in their browser tab, 
we could do it within the component itself, but we shouldn't.
```
```
function User({ name }) {
  document.title = name; 
  // This is a side effect. Don't do this in the component body!
    
  return <h1>{name}</h1>;   
} 
```

## How do I use useEffect?
```
import { useEffect } from 'react';

function User({ name }) {
  useEffect(() => {
    document.title = name;
  }, [name]);
    
  return <h1>{name}</h1>;   
}
```
- The function passed to useEffect is a callback function. This will be called after the component renders.

- In this function, we can perform our side effects or multiple side effects if we want.

- The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon.

## Dependencies

1. **No dependency passed:**
-  useEffect runs after every render without the dependencies array, causing infinite loop

2. **An empty array:**
- Runs only on the first render

3. **Props or state values:**
- Runs on the first render
- And any time any dependency value changes
- you can add multiple values by separating them by commas

```
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

```

- In this example, we use useEffect to update the document title whenever the count state variable changes. The useEffect hook takes a function as its first argument, which is executed after every render of the component. In this case, the function updates the document title using the document.title property, which is part of the browser API.

- The second argument of useEffect is an array of dependencies. When any of the dependencies change, the function passed to useEffect is re-executed. If the dependencies array is empty, the function is only executed once, when the component mounts.

- Note that the function passed to useEffect can return a cleanup function, which is executed when the component unmounts or before it re-renders. The cleanup function is useful for canceling any ongoing asynchronous operations or for cleaning up resources.




# useMemo:

-`useMemo` is a hook provided by React that allows you to memoize the result of a function call so that the function doesn't get called unnecessarily. Memoization is a technique where the result of a function is cached so that if the same function is called again with the same arguments, the cached result can be returned instead of recomputing it.

Here's an example of how you can use useMemo in practice:

```
import React, { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // This function will get called every time the component re-renders
  function expensiveFunction() {
    console.log('expensiveFunction called');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }

  // Use useMemo to memoize the result of the expensiveFunction
  const memoizedResult = useMemo(() => expensiveFunction(), []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

```
- In this example, we have an expensive function expensiveFunction that takes a long time to run (simulated here by a loop that adds up numbers). We then use useMemo to memoize the result of the function by passing it the function as the first argument and an empty array as the second argument (which means that the memoized value will only be computed once when the component mounts). The memoized value is then stored in memoizedResult and can be used in the JSX markup.

- By using `useMemo`, the expensiveFunction is only called once when the component mounts, and its result is then cached. Subsequent re-renders of the component will use the memoized result instead of re-running the function, resulting in a performance improvement.





# useReducer:

- `useReducer` is a built-in hook in React that provides an alternative way of managing `state` in a component. It is similar to `useState` but instead of managing a single piece of state, it allows you to manage more complex state that may have multiple properties or requires more complex updates.


### Syntax:
```
const [state, dispatch] = useReducer(reducer, initialArgs, init);

- The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.
```

### Example: 

```
import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  todoCount: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, { id: state.todoCount + 1, text: action.payload }],
        todoCount: state.todoCount + 1
      };
    case 'removeTodo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      throw new Error();
  }
}

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    dispatch({ type: 'addTodo', payload: inputValue });
    setInputValue('');
  }

  function handleRemove(id) {
    dispatch({ type: 'removeTodo', payload: id });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button>Add Todo</button>
      </form>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- This implementation shows how useReducer can be used to manage more complex state that involves multiple properties and actions. It also demonstrates how actions can be dispatched to update the state in a predictable and consistent way.


# useCallback:


### The useCallback hook is used when you have a component in which the child is rerendering again and again without need.
- Pass an inline callback and an array of dependencies. 
- useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
- This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.


### Syntax:
```
const memoizedCallback = useCallback(
 () => {
   doSomething(a, b);
 },
 [a, b],
);
```
### Code:

```
import React, { useState, useCallback } from 'react'
var funccount = new Set();
const App = () => {
 
 
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 
const incrementCounter = useCallback(() => {
  setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
  setCount(count - 1)
}, [count])
const incrementNumber = useCallback(() => {
  setNumber(number + 1)
}, [number])
   
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);
 
  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>
         Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
         increase number
      </button>
    </div>
  )
}
 
 
export default App;

```

# useRef
```
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
```

### Syntax:
```
const refContainer = useRef(initialValue);
```
- The useRef returns a mutable ref object. This object has a property called .current. 
- The value is persisted in the refContainer.current property. 
- These values are accessed from the current property of the returned object. 
- The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). 
- The object can persist a value for a full lifetime of the component. 

### Code:

```
import React, { useRef } from 'react';

function ResizableTextarea() {
  const textareaRef = useRef(null);

  // Define a function to resize the textarea based on its content
  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  // Call resizeTextarea whenever the textarea content changes
  const handleTextareaChange = (event) => {
    resizeTextarea();
  };

  return (
    <div>
      <textarea ref={textareaRef} onChange={handleTextareaChange} />
    </div>
  );
}
```
In this example, we create a textarea element and attach a `ref` to it using the useRef hook. We also define a function `resizeTextarea` using a regular function expression. This function resizes the textarea element based on its content by setting its `height` style property to the `scrollHeight` of the element.

We call `resizeTextarea` whenever the content of the `textarea` changes by attaching an onChange event listener to the element and calling resizeTextarea inside the event handler function handleTextareaChange.

By using the `useRef` hook, we can get a reference to the `textarea` element and manipulate its properties and styles directly, which can be useful for implementing custom behavior that is not available through props or state.

# Form with Hooks

## useState + Form

![Screenshot 2023-03-01 133901](https://user-images.githubusercontent.com/94469107/222080967-9230c539-953f-47b7-a875-e0e8dafa1ae7.png)

## useEffect + Form

![Screenshot 2023-03-01 134614](https://user-images.githubusercontent.com/94469107/222082455-575324f8-17fd-46cd-bb5c-b3096dae5629.png)

## useContext + Form

```
const MyContext = React.createContext();


const useMyContext = (section, init) => {
  // context and setContext came from MyContext.Provider
 
 const { context, setContext } = React.useContext(MyContext)
  const data = (context[section] === undefined) ? init : context[section]
  const setData = (data) => setContext({...context, [section]: data})
  return [data, setData]
}

// data and actions provider
const useNameForm = () => {
  const init = {
    values: {
      name: '',
      surname: '',
    },
    errors: []
  }
  const [data, setData] = useMyContext('formName', init)
  const changeValue = (input, value) => {
    setData({...data, values: {...data.values, [input]: value}})
  }
  const setErrors = errors => {
    setData({...data, errors})
  }
  return {data, changeValue, setErrors}
}

const Content = (props) => {
  const {data, changeValue, setErrors} = useNameForm()

  const handleChange = (event) => {
    changeValue(event.target.name, event.target.value);
  }
  
  const validate = (values) => {
    const errors = []
    !values.name && errors.push("Name is required")
    !values.surname && errors.push("surname is required")
    setErrors(errors)
    return errors.length === 0
  }
  
  const handleSubmit = (event) => {
    if(validate(data.values)){
      alert('form submited: ' + JSON.stringify(data.values))
    }
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" value={data.values.name}
                     name="name" onChange={handleChange} /></label><br />
      <label>Surname: <input type="text" value={data.values.surname} 
                        name="surname" onChange={handleChange} /></label>
      <input type="submit" value="Submit" />
      {data.errors.length > 0 && data.errors.map((err,i) => (
        <p key={i}>{err}</p>
      ))}
    </form>
  );
}

const DeepComponent = () => {
  const { data } = useNameForm('formName')
  return <div><br />DeepComponent:
              <br />name: {data.values.name}
              <br />surname: {data.values.surname}</div>
}

const App = (props) => {
  const [data, setData] = React.useState({})
  return (
    <MyContext.Provider value={{
        context: data,
        setContext: newData => setData(newData)
      }}>
      <Content />
      <DeepComponent />
    </MyContext.Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

# -------------- Day-5 -----------------

# React Router

- React Router is a popular routing library for React that allows you to navigate between different pages or views in a React application. Here's an example of how to use React Router DOM to create a simple multi-page application:

## React Router Installation
`$ npm install react-router-dom --save   `



### Adding React Router Components:
1. **BrowserRouter** : 
    - BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. 
    - It is the parent component that is used to store all of the other components.
2. **Routes** :
    - It’s a new component introduced in the v6 and a upgrade of the component. 
    #### The main advantages of Routes over Switch are:
    - Routes are chosen based on the best match instead of being traversed in order.
3. **Route** :
     - Route is the conditionally shown component that renders some UI when its path matches the current URL.
4. **Link** :
    - Link component is used to create links to different routes and implement navigation around the application. 
    - It works like HTML anchor tag.

#### Once you have installed the package, you can create a new component to represent your app's main layout:


```
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```
- We wrap our entire app inside the Router component, which provides the routing functionality for our app. Inside the Router, we create a navigation menu using the Link component to navigate between our pages.

- We define our routes using the Route component inside a Switch. Each Route component defines a path and a corresponding component to render when that path is visited. In this example, we have three routes: /about, /contact, and /. The last route, /, is the default route that will be rendered when no other route matches the current path.

```
Each page component (HomePage, AboutPage, and ContactPage) can be defined as a regular functional component that returns the content for that page:
```

```
import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the homepage</h1>
      <p>This is the homepage of our app.</p>
    </div>
  );
}

export default HomePage;
```

## 404 Error Page 

### NotFound Component (NotFound.jsx)

```
import React from 'react';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
```
### App Component (App.js)

```
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
// import other components and routes

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
```

### index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```


## Pure Component:
 
#### pure components are a type of React component that only re-renders if its props or state changes, while class components have an internal state and can use lifecycle methods to manage it. Functional components are also a type of React component that don't have an internal state, but can receive props and use them to render UI elements.

### with class component

```
import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    const { prop1, prop2 } = this.props;
    return (
      <div>
        <p>Prop 1: {prop1}</p>
        <p>Prop 2: {prop2}</p>
      </div>
    );
  }
}

export default MyPureComponent

```


## HOC component:
```
Higher-order components or HOC is the advanced method of reusing the component functionality logic. 
It simply takes the original component and returns the enhanced component.
```

## Syntax:
`const EnhancedComponent = higherOrderComponent(OriginalComponent);`

## Reason to use Higher-Order component:

- Easy to handle
- Get rid of copying the same logic in every component
- Makes code more readable

## Parent Component 
```
import React from 'react'
import "./App.css"
// importing HighOrder file
import EnhancedComponent from './HighOrder'

class App extends React.Component {
render() {
	// Destructuring the props
	const { show, handleclick } = this.props

	// Calling out the props
	return <button onClick={handleclick}>{show}
	</button>
}
}


export default EnhancedComponent(App);

```

## Child Component 
```
import React from 'react'

const EnhancedComponent = (OriginalComponent) => {
	class NewComponent extends React.Component {

		constructor(props) {
			super(props);
			// Set initial count to be 0
			this.state = { count: 0 };
		}

		handleClick = () => {
			// Incrementing the count
			this.setState({ count: this.state.count + 1 });
		}

		render() {

			// passed a handleclick and count in the originalComponent
			// as a props for calling and adding the functionality
			return <OriginalComponent
				handleclick={this.handleClick}
				show={this.state.count} />
		}
	}
	// Returns the new component
	return NewComponent
}
// Export main Component
export default EnhancedComponent

```
## Output:
<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210310121357/20210310_121315.gif" />


# -------------- Day-6 -----------------

# Application Programming Interface

# Web APIs
- API stands for Application Programming Interface. The most popular Web Api used is a Representational state transfer API or RESTful API. Web APIs are used to fetch data from a database and save data back to the database. Using Web APIs requires the use of HTTP request methods there are different HTTP request methods like GET,POST,PUT,DELETE, etc. Let’s have a brief description of the mentioned HTTP request.

1. GET: Used to request data from an endpoint
2. POST: Sends data to an endpoint
3. DELETE: Remove data from an endpoint.
4. PUT: Update a record or data value at an endpoint.


## Ways of Fetching Data from API
There are different of fetching data:

- By using Fetch API
- By using Axios library
- By using async-await syntax
- By using custom hooks

## 1. Fetch API
- We can fetch data by using javascript fetch() method. It will request sever and load the information on the web pages. It will return a promise.

- Let’s start with the example. We will create a fetchData() method. It will call fetch() the method with the given URL then converts the result to a JSON object.

```
import React, { useEffect, useState } from "react";

function App() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;
```

## 2. Axios

- Axios is a javascript library that we use to make HTTP requests same as fetch(). There is a difference between these two as in fetch() we have to convert the result to a JSON object but in Axios it already returns the result as a JSON object, so we don’t need to convert it.

Let’s take the example of Axios library. First, we have to install the Axios library then we have to import Axios from Axios.

### Installation

```
npm i axios
```

### Get Data using Axios
```
import React from 'react';
 import axios from 'axios';
 export default class MyList extends React.Component {
  state = {
  persons: []
  }
 componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(response => {
const users = response.data;
  this.setState ({users});
  })
  }
 render() {
  return (
  < ul >
  {this.state.users.map (user =>  {user.name}   )}
  < /ul >
  )
  }
 }
```

### POST Data using Axios

```
import React from 'react';
import axios from 'axios';
export default class AddUser extends React.Component {
 state = {
 userName: '',
 }
 handleChange = event => {
 this.setState({ userName: event.target.value });
 }
 handleSubmit = event => {
 event.preventDefault();
 const user = {
 userName: this.state.userName
 };
 axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
 .then(res => {
 console.log(res);
 console.log(res.data);
 })[Text Wrapping Break] }
 render() {
 return (
 <div>
 <form onSubmit={this.handleSubmit}>
 <label>
 User Name:
 <input type="text" name="name" onChange={this.handleChange}/>
 </label>
 <button type="submit">Add</button>
 </form>
 </div>
 )
 }
 }
```

### DELETE using Axios

- Axios delete accepts two parameters: url and optional config

```
axios.delete(url, { data: { foo: "bar" }, headers: { "Authorization": "***" } });
```
Consider the same code above and modify the request as follows:

```
handleSubmit = event => {
  event.preventDefault();
  axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.userName}`)
  .then(res => {
  console.log(res);
  console.log(res.data);
  })
 } 
```

## 3. Using Async and Await

```
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  
  async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    getData();
  }, []);

  return (
    <div>
      {data ? (
        // Render the data
      ) : (
        // Render a loading indicator or placeholder
      )}
    </div>
  );
}
```


## Create a Custom API and render data on screen

- It's not recommended to create a custom API in React because React is a client-side library. However However, you can create a mock API in React using a technique called "mocking" or "stubbing", which involves simulating the behavior of a real API without actually making any HTTP requests. This can be useful for testing and prototyping purposes.

```
import { useState, useEffect } from "react";

const mockData = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 }
];

function MyComponent() {
  const [data, setData] = useState(null);

  async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });
  }

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    getData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.age}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
```

