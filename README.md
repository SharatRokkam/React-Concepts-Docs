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
![SPA](https://user-images.githubusercontent.com/94468010/221557339-eecc47ef-8745-40db-8050-1124dae3eb80.png)

SPA is webpage that dynamically interact with the web browser by rewriting the current web page with the data from the web server. SPA only sends what you need with each click, and your browser render that information. Single-page sites help keep the user in one, comfortable web space where content is presented to the user in a simple, easy and workable fashion.


