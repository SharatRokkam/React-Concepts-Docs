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

## CSS STYLING IN REACT: -

In React we can apply styling in multiple ways, here we will look into the most commonly used methods.


- Inline Styling
- Creating State object variable
- Sharing style across many React components
- Styled Components


# Inline Styling:

In React just like CSS, we can apply the styling directly to the element by adding style attribute, but unlike CSS since the inline CSS is written in a javascript object, properties with hyphens separators like background-color must be written with camel case syntax. While applying inline styling the first curly brackets inject JavaScript in JSX and the second curly brackets create an object :

![InlineStyling](https://user-images.githubusercontent.com/94468010/222709996-cac45b3a-714a-4571-a996-8932f2585ad1.png)


# Creating a State Object Variable 
This is the other way of styling in react, where we can create Javascript objects, and instead of writing inline styling, we pass objects to elements in style attribute directly.

![StyleObject](https://user-images.githubusercontent.com/94468010/222710071-7b80c223-5ed0-4855-a695-a6ca90de7622.png)


# Sharing Style across many react Components

The style objects and the components do not have to be in the same file. We can create a separate .js file for our styles, export these styles, and then import them into the component where we want to use them. Doing this makes styles reusable across multiple components.


we can export each style object individually, which will also mean importing them individually. That might get tedious if there are many style objects in the file.

![AppObject](https://user-images.githubusercontent.com/94468010/222710191-1dcef51b-3b8c-48b9-a027-fbbea4af63c8.png)


![ExportStyleObject](https://user-images.githubusercontent.com/94468010/222710205-6a2e377c-7d46-4f51-862e-3ed933d02536.png)








## CONDITIONAL RENDERING :

# In React conditional rendering means to render something if the given condition is true, to follow this concept we can always use traditional if-else statements but in addition to that React allows Ternary operators and Logical && operator to put something in condition.


You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX,  {cond ? <A /> : <B />} means if “cond is true, render A else B ”.
- In JSX, {cond && <A />} means if “cond is true, render A otherwise nothing.

```
class App extends Component {
  // ...

  render() {
    let {isLoggedIn} = this.state;

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

```
src/App.js
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
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    );
  }
}

export default App;
```

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

## Pass Props Parent to Child Component 

![Screenshot 2023-02-27 162940](https://user-images.githubusercontent.com/94469107/221546758-a25898ef-666f-4137-abcf-9422c4ee96bc.png)

## Pass Props Child to Parent Component 

![Screenshot 2023-02-27 164459](https://user-images.githubusercontent.com/94469107/221549637-b6863545-de2f-4c2f-9d39-99aed2e28ecc.png)

## Update State

#### Code

![Screenshot 2023-02-27 165338](https://user-images.githubusercontent.com/94469107/221551565-8f1b51f4-1854-4450-a517-4f098dfeace5.png)

#### Output

![update-state-on-props-change](https://user-images.githubusercontent.com/94469107/221552208-0d1cb97b-a641-4b8a-98ca-60e334978f2a.gif)


#### There are many methods but only Three methods are important:

1. constructor()
```
The Constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, 
this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
```
2. render()
```
The render() method is required, and is the method that actually outputs the HTML to the DOM.
```
3. componentDidMount()
```
This function is invoked immediately after the component is mounted to the DOM.
You would use the componentDidMount lifecycle method to grab a DOM node from the component tree immediately after it’s mounted.
```
### Code

![Screenshot 2023-02-26 225940](https://user-images.githubusercontent.com/94469107/221426409-818f55da-abaf-417c-8948-8d5fcc8b332e.png)

## Updating (altering existing nodes in the DOM)
```
Whenever a change is made to the state or props of a React component, the component is rerendered.
In simple terms, the component is updated. This is the updating phase of the React component lifecycle.
```
1. componentDidUpdate()
```
The componentDidUpdate method is called after the component is updated in the DOM.
```
![Screenshot 2023-02-26 230627](https://user-images.githubusercontent.com/94469107/221426717-80dd9a5a-9027-4014-b0a1-ff24b65cc86a.png)

## Unmounting (removing nodes from the DOM)
```
React has only one built-in method that gets called when a component is unmounted.
```
1. componentWillUnmount()
```
The componentWillUnmount lifecycle method is invoked immediately before a component is unmounted and destroyed.
```
![Screenshot 2023-02-26 235509](https://user-images.githubusercontent.com/94469107/221429265-2002acb7-5790-4485-a4f2-a5149e6c7c43.png)

# Hooks

### What is Props-Drilling?
```
Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.
Passing data through multiple components is not a good way of writing clean, reusable, and DRY code.
```
#### Example:

<img src="https://lh5.googleusercontent.com/K1veBT9r_aQPq_iYI9MdtljbsBu8egv7n8cu78fWqzL0POVn2xb66r_gEFgJ8qg9FxphsGFqNZIDQ3QZ0zuT-XtEcrpNVZylXvxhDTPAySL8_FJWiIGHlcXggcHYCFKaQeNp8HRQvCZZQHRULaf8_vtg8mgyZElVhkSiUYgicFQ0mo6zPgGve9-Pcg" width="500" height ="500"/>

### Props-Drilling Code
```
import React, { useState } from "react";

function Parent() {
const [fName, setfName] = useState("firstName");
const [lName, setlName] = useState("LastName");
return (
	<>
	<div>This is a Parent component</div>
	<br />
	<ChildA fName={fName} lName={lName} />
	</>
);
}

function ChildA({ fName, lName }) {
return (
	<>
	This is ChildA Component.
	<br />
	<ChildB fName={fName} lName={lName} />
	</>
);
}

function ChildB({ fName, lName }) {
return (
	<>
	This is ChildB Component.
	<br />
	<ChildC fName={fName} lName={lName} />
	</>
);
}

function ChildC({ fName, lName }) {
return (
	<>
	This is ChildC component.
	<br />
	<h3> Data from Parent component is as follows:</h3>
	<h4>{fName}</h4>
	<h4>{lName}</h4>
	</>
);
}

export default Parent;

```

## Solution of Props-Drilling:
```
The React context API is a fast way of avoiding prop drilling and ensuring your data is managed globally.
```

### What is Context API??
```
React context is a built-in API that uses the useContext hook to share data across components.
Imagine passing the data of an authenticated user from a parent component to a deep nested child component. This will be cumbersome if you need to pass the data through a lot of intermediate components.

A better approach to doing this is using React context to handle the data.  
```

### How to Use the React Context API??
```
useContext is a built-in hook in React. You can start using the context API by importing the **createContext** function from React.
```

#### Step-1: createContext
#### we initialized our context and named it globalContext.
```
Import {createContext} from ‘react’;

const globalContext = createContext();
```

#### Step-2: provide the context
#### The context API uses a provider to pass data to its child components. You will have to wrap all components with a provider component.
```
<globalContext.Provider value={...}> // Like BrowserRouter
	<ParentComponent/>
<globalContext.Provider>
```

#### Example:
```
import React from ‘react’;

function App() {

	const username = “John Doe”
    
	return(
        <globalContext.Provider value={username}> 
        	<Dashboard/>
        <globalContext.Provider>
    )
}

export default App;
```

## There are two ways to consume the context.
` Way-1 `

#### Step-3: Consume the context 
```
We can consume the context by using the useContext hook.
Without passing data through nested components, you can access your context in any component you want. 
```

```
import { useContext } from ‘react’;

const Profile = () => {

	const value = useContext(globalContext);  //Consume the context way-1
    
	return (
        <div>
        	{value}                         // used state directly where we want
        </div>
    )
}

export default Profile
```
` Way-2 `
```
import { globalContext } from './context';  // Import your globalContext.

function ChildComponent() {
  return (
    <globalContext.Consumer>
      {value => <span>{value}</span>}
    </globalContext.Consumer>
  );
}
```

#### Example of useContext
 <img src="https://dmitripavlutin.com/90649ae4bdf379c482ad24e0dd220bc4/react-context-3.svg" />
 
 
# useState:
```
The useState() is a Hook that allows you to have state variables in functional components.
It returns an array with two values: **the current state** and a **function to update** it. 
The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
useState is a named export from react. To use it, you can write React.useState or import it by writing useState:
```

### Syntax:
` const [state, setState] = useState(initialValue); `

```
the **initialValue** is the value you want to start with, and **state** is the current state value that can be used in your component. 
The **setState function** can be used to update the state, triggering a re-render of your component.
```

### Updating objects:
```
const [state, setState] = useState({ name: 'John', age: 30 });

const updateName = () => {
  setState({ ...state, name: 'Jane' });
};

const updateAge = () => {
  setState({ ...state, age: state.age + 1 });
};

```

### Updating Array:
```
const [array, setArray] = useState([1, 2, 3, 4, 5]);

const addItem = () => {
  setArray([...array, 6]);
};

const removeItem = () => {
  setArray(array.slice(0, array.length - 1));
};
```

## Code with Array:
```
const MessageList = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={message}
        placeholder="Enter a message"
        onChange={e => {
          setMessage(e.target.value);
        }}
      />
      <input
        type="button"
        value="Add"
        onClick={e => {
          setMessageList([
            ...messageList,
            {
              // Use the current size as ID (needed to iterate the list later)
              id: messageList.length + 1,
              message: message
            }
          ]);
          setMessage(""); // Clear the text box
        }}
      />
      <ul>
        {messageList.map(m => (
          <li key={m.id}>{m.message}</li>
        ))}
      </ul>
    </div>
  );
};
```

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

## Code 

![Screenshot 2023-02-28 145946](https://user-images.githubusercontent.com/94469107/221811103-7e163ef9-8791-4eba-a6c3-a6518c7686dd.png)

# useMemo:
```
The useMemo is a hook used in the functional component of react that returns a memoized value.

**Memoized value**
- In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a 
  given argument for the next time as it returns the cached result. 
 - A memoized function remembers the results of output for a given set of inputs.

**Situation:**
- if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, 
- but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. 

```

#### Syntax:
```
const memoizedValue = useMemo(functionThatReturnsValue, arrayDepencies)
```

#### Code:

![Screenshot 2023-02-28 151250](https://user-images.githubusercontent.com/94469107/221814663-640451e5-b18c-4160-8980-27218731ea05.png)

### WithMemo Output:-
- Now in the above example, we have used the user memo hook, here the function that returns the value
-  i.e squareNum is passed inside the useMemo and inside the array dependencies, 
-  we have used the number as the squareNum will run only when the number changes. 
-  If we increase the counter and the number remains the same in the input field the squareNum doesn’t run again

# useReducer:
```
The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook 
when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.
```
### Syntax:
```
const [state, dispatch] = useReducer(reducer, initialArgs, init);

- The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.
```
### Example: 

![Screenshot 2023-02-28 152035](https://user-images.githubusercontent.com/94469107/221816492-dee00e3b-d38d-4b58-8f5b-55450d1d2cf9.png)

### Output:
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20201103231033/gfg.gif" />

# useCallback:
```
The useCallback hook is used when you have a component in which the child is rerendering again and again without need.
- Pass an inline callback and an array of dependencies. 
- useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
- This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
```

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

![Screenshot 2023-02-28 153244](https://user-images.githubusercontent.com/94469107/221820749-096aaf65-3778-4ac4-85b0-cef03ed45916.png)

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
import React, {Fragment, useRef} from 'react';

function App() {

// Creating a ref object using useRef hook
const focusPoint = useRef(null);
const onClickHandler = () => {
	focusPoint.current.value =
	"The quick brown fox jumps over the lazy dog";
	focusPoint.current.focus();
};
return (
	<Fragment>
	<div>
		<button onClick={onClickHandler}>
		ACTION
		</button>
	</div>
	<label>
	Click on the action button to
	focus and populate the text.
	</label><br/>
	<textarea ref={focusPoint} />
	</Fragment>
);
};

export default App;

```

## Stylig with Material UI
- Material UI is an open-source React component library that implements Google's Material Design. 
- It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

#### Installing Material UI
`$ npm install @material-ui/core @material-ui/icons`

## Button

![Screenshot 2023-03-01 124609](https://user-images.githubusercontent.com/94469107/222069903-d2103370-83ea-47cb-a7a6-8264bdb10b84.png)

## ColorPicker

![Screenshot 2023-03-01 124819](https://user-images.githubusercontent.com/94469107/222070287-61f0fd15-a016-4906-b53b-9753abe9390a.png)

# Form

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

## useReducer + Form

```
import { useReducer } from "react"

type FormState = {
    firstName: string
    lastName: string
    age: string
    email: string
    password: string
}
const initialState: FormState = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: ""
}
type FormValidityState = {
    firstNameError: boolean
    lastNameError: boolean
    ageError: boolean
    emailError: boolean
    passwordError: boolean
    isFormValid: boolean
}
const initialValidityState: FormValidityState = {
    firstNameError: false,
    lastNameError: false,
    ageError: false,
    emailError: false,
    passwordError: false,
    isFormValid: false
}
type FormAction = {
    type: string
    payLoad: string
}
type FormValidityAction = {
    type: string
    payLoad: FormState
}
const formReducer = (state: FormState, action: FormAction): FormState => {
    switch(action.type){
        case "UPDATE_FIRST_NAME": return{
            ...state, firstName: action.payLoad, 
        }
        case "UPDATE_LAST_NAME": return{
            ...state,lastName: action.payLoad, 
        }
        case "UPDATE_AGE": return{
            ...state, age: action.payLoad, 
        }
        case "UPDATE_EMAIL": return{
            ...state, email: action.payLoad, 
        }
        case "UPDATE_PASSWORD": return{
            ...state, password: action.payLoad, 
        }
        default:
            return state
    }
}
const formValidityReducer = (state: FormValidityState, action: FormValidityAction): FormValidityState => {
    let isValid: boolean = false;
    switch(action.type){
        
        case "VALIDATE_FIRST_NAME": 
        isValid = action.payLoad.firstName.length > 0 ? true: false
        return{
            ...state,
            ...({firstNameError: !isValid, isFormValid: isValid && !state.lastNameError && !state.ageError && !state.emailError && !state.passwordError}),
        }
        case "VALIDATE_LAST_NAME": 
        isValid = action.payLoad.lastName.length > 0 ? true: false
        return{
            ...state,
            ...({lastNameError: !isValid, isFormValid: isValid && !state.firstNameError && !state.ageError && !state.emailError && !state.passwordError})
        }
        case "VALIDATE_AGE": 
        isValid = action.payLoad.age.length > 0 ? true: false
        return{
            ...state,
            ...({ageError: !isValid, isFormValid: isValid && !state.firstNameError && !state.lastNameError && !state.emailError && !state.passwordError})
        }
        case "VALIDATE_EMAIL": 
        isValid = (action.payLoad.email.length > 0 && action.payLoad.email.includes("@")) ? true: false
        return{
            ...state,
            ...({emailError: !isValid, isFormValid: isValid && !state.firstNameError && !state.lastNameError && !state.ageError && !state.passwordError})
        }
        case "VALIDATE_PASSWORD": 
        isValid = action.payLoad.password.length > 9 ? true: false
        return{
            ...state,
            ...({passwordError: !isValid, isFormValid: isValid && !state.firstNameError && !state.lastNameError && !state.ageError && !state.emailError})
        }
    default:
        return state
    }
}

export const Form = () => {
    const [formData, setFormData] = useReducer(formReducer, initialState)
    const [formValidityData, setFormValidityData] = useReducer(formValidityReducer, initialValidityState)

    const onButtonPress = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
        //Form submission happens here
    }
    return(
        <div style={STYLE.container}>
        <form onSubmit={onButtonPress}>
            <label style={STYLE.formElement} htmlFor="first_name">First Name</label>
            <div style={STYLE.formElement}>
                <input 
                id="first_name" 
                style={{backgroundColor:formValidityData.firstNameError ?"pink" : ""}} 
                onChange={(e) =>setFormData({type:"UPDATE_FIRST_NAME", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_FIRST_NAME", payLoad: formData})}
                type="text"/>
            </div>
           <label style={STYLE.formElement} htmlFor="last_name">Last Name</label>
            <div style={STYLE.formElement}>
                <input 
                id="last_name" 
                style={{backgroundColor:formValidityData.lastNameError ? "pink" : ""}} 
                onChange={(e) =>setFormData({type:"UPDATE_LAST_NAME", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_LAST_NAME", payLoad: formData})}
                type="text"/>
            </div>
            <label style={STYLE.formElement} htmlFor="last_name">Email</label>
            <div style={STYLE.formElement}>
                <input 
                id="email" 
                style={{backgroundColor:formValidityData.emailError ? "pink" : ""}} 
                onChange={(e) =>setFormData({type:"UPDATE_EMAIL", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_EMAIL", payLoad: formData})}
                type="text"/>
            </div>
            <label style={STYLE.formElement} htmlFor="last_name">Password</label>
            <div style={STYLE.formElement}>
                <input 
                id="password" 
                style={{backgroundColor:formValidityData.passwordError ? "pink" : ""}} 
                onChange={(e) =>setFormData({type:"UPDATE_PASSWORD", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_PASSWORD", payLoad: formData})}
                type="password"/>
            </div>
           <label style={STYLE.formElement} htmlFor="age">Age</label>
            <div style={STYLE.formElement}>
                <input 
                id="age" 
                style={{backgroundColor:formValidityData.ageError ? "pink" : ""}} 
                onChange={(e) =>setFormData({type:"UPDATE_AGE", payLoad:e.target.value})} 
                onBlur={(e) => setFormValidityData({type: "VALIDATE_AGE", payLoad: formData})}
                type="number"/>
            </div>
            <div style={STYLE.formElement}>
                <input disabled={!formValidityData.isFormValid} type="submit" value={""+formValidityData.isFormValid}/>
            </div>
        </form>
        </div>
    )
}
const STYLE = {
    container: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        maxWidth:"240px"
    },
    formElement: {
        padding: "6px 24px"
    }
}
```

## useRef + Form

```
import React, { useRef } from "react"

export default function App() {
  const nameRef = useRef();
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    //output the name
    console.log(nameRef.current.value)
    //output the email
    console.log(emailRef.current.value)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <label>Name</label>
          <input type="text" ref={nameRef}/>
        </div>
        <div className="input_group">
          <label>Email</label>
          <input type="text" ref={emailRef}/>
        </div>
        <div className="input_group">
          <label>Password</label>
          <input type="password" ref={passwordRef}/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  )
}
```

# React Router

- React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. 
- It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page.
- It also allows us to use browser history features while preserving the right application view.
- Routing is a process in which a user is directed to different pages based on their action or request.
- ReactJS Router is mainly used for developing Single Page Web Applications. 
- React Router is used to define multiple routes in the application.
- When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

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

## Code

```
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About Us</Link>
			</li>
			<li>
				<Link to="/contact">Contact Us</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/about' element={< About />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
```

## Outlet

```
An <Outlet> should be used in parent route elements to render their child route elements. 
This allows nested UI to show up when child routes are rendered. 
If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
```

## Code:
```
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="/" element={<UsersIndex />} />
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}
```

## Lazy Loading :

```
Lazy loading is one of the most common design patterns used in web and mobile development. 
It is widely used with frameworks like Angular and React to increase an application’s performance by reducing initial loading time.
```

```
In simple terms, lazy loading is a design pattern. 
It allows you to load parts of your application on-demand to reduce the initial load time. 
For example, you can initially load the components and modules related to user login and registration. 
Then, you can load the rest of the components based on user navigation.
```

```
You might not feel much difference when using lazy loading for small-scale applications. 
But it significantly impacts large-scale applications by reducing the initial load time. 
Ultimately, it improves both the user experience and the application’s performance.
```

#### Advantages of Lazy Loading
- Reduces initial loading time by reducing the bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.

#### Disadvantages of Lazy Loading
- Not suitable for small-scale applications.
- Placeholders can slow down quick scrolling.
- Requires additional communication with the server to fetch resources.
- Can affect SEO and ranking.


## Code:
```
// Without React.lazy()
import AboutComponent from './AboutComponent ';

// With React.lazy()
const AboutComponent = React.lazy(() => import('./AboutComponent '));

const HomeComponent = () => (
    <div><AboutComponent /></div>
)
```

## React.Suspense:

- When we use lazy loading, components are rendered as we navigate. 
- So, we need to have a placeholder for those components until they are loaded. 
- As a solution, React.Suspense was introduced, and it acts as a wrapper for the lazy components.
- You can wrap a single lazy component, multiple lazy components, or multiple lazy components with different hierarchy levels with React.Suspense. 
- In addition, it accepts a prop named fallback as the placeholder, and you can pass a component or an element for that.

For example, you can pass the waiting or loading message as the fallback prop, and it will be displayed until the wrapped lazy component is rendered.

```
import React, { Suspense } from "react";
const AboutComponent = React.lazy(() => import('./AboutComponent'));

const HomeComponent = () => (
    <div><Suspense fallback = { <div> Please Wait... </div> } >
            <AboutComponent /></Suspense></div>
);
```

```
As you can see, you need to use both the React.lazy() and React.Suspense features to build a lazy-loading component in React. 
These features are straightforward and anyone with basic React knowledge can easily use them.
```

## Memory Leak:
```
A Memory leak is a commonly faced issue when developing React applications. 
A memory leak is a type of **resource leak** that occurs when an application incorrectly manages memory allocations. 
That memory, which is not needed anymore, is not released for other processes to use. 
A memory leak may also happen when an object is stored in a memory, but cannot be accessed by the running code.
```

## Why should you clean up memory leaks?
```
Memory leaks are commonly faced issues when developing React applications. 
```

### It causes many problems, including:

- Affecting the project’s performance by reducing the amount of available memory;
- Slowing down the application;
- Refreshing the page randomly;
- Crashing the system;
- Overloading database with huge amounts of queries;

## What causes a memory leak?

```
A memory leak appears when React applications created subscriptions that were made when a component was mounted and
did not unsubscribe them when those components were unmounted.
```
### These subscriptions could be:

- DOM Event listeners;
- WebSocket subscriptions;
- Requests to an API;

## How to clean up memory leaks?
```
Modern programming languages and frameworks have techniques for clearing out data that is no longer needed. And react is not an exception.
```

Basically, we need to remove subscriptions when the component unmounts. For that there are three ways:

1. Clearing Intervals
```
You may use setInterval function for creating repeating tasks every second or so. This will likely result in a memory leak error and it must be cleared after unmounting.
```

## Code

```
 useEffect(() => {
    let isMounted = true;
    
    const interval = setInterval(() => {
      if (isMounted) {
        getData(cookiesList);
      }
    }, 5000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  });
```

## How to detect memory leaks?
```
There is a way to detect memory leaks before you get the error from react. Simply use google chrome’s developers tools. 
Go to Memory tab take heap snapshots and do a comparison between times before you took an action
```

## Error Boundaries:
 ```
 Error Boundaries basically provide some sort of boundaries or checks on errors, 
 They are React components that are used to handle JavaScript errors in their child component tree.
 ```
 
 ## Pure Function:
 ```
 A React component is considered pure if it renders the same output for the same state and props. 
 For this type of class component, React provides the PureComponent base class.
```
- Its return value is only determined by its input values
- Its return value is always the same for the same input values

## Code:
```
import React from 'react';

class PercentageStat extends React.PureComponent {

  render() {
    const { label, score = 0, total = Math.max(1, score) } = this.props;

    return (
      <div>
        <h6>{ label }</h6>
        <span>{ Math.round(score / total * 100) }%</span>
      </div>
    )
  }

}

export default PercentageStat;
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


# API (Application Programming Interface)

```
API is an abbreviation for Application Programming Interface which is a collection of communication protocols and subroutines 
used by various programs to communicate between them.
A programmer can make use of various API tools to make its program easier and simpler. 
Also, an API facilitates the programmers with an efficient way to develop their software programs.
```

## How we fetch the data from API 

## Using Fetch Method:

```
import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
```

## Output:

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210817165343/out.gif" />

# Using Axios
```
Use npm i axios to install axios and then add it as an import to your parent component. 
I’m going to use axios to get all of my notes, which I stored in a database.
```
## Output:

<img src="https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b" />

## Fetch API using async/await:

```
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const loadPost = async () => {

			// Till the data is fetch using API
			// the Loading page will show.
			setLoading(true);

			// Await make wait until that
			// promise settles and return its result
			const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts/");

			// After fetching data stored it in posts state.
			setPosts(response.data);

			// Closed the loading page
			setLoading(false);
		}

		// Call the function
		loadPost();
	}, []);

	return (
		<>
			<div className="App">
				{loading ? (
					<h4>Loading...</h4>) :
					(posts.map((item) =>
						// Presently we only fetch
						// title from the API
						<h4>{item.title}</h4>)
					)
				}
			</div>
		</>
	);
}

export default App;

```

## Output:

<img src="https://www.geeksforgeeks.org/how-to-fetch-data-from-apis-using-asynchronous-await-in-reactjs/" />



