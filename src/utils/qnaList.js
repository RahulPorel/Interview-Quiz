import { v4 as uuidv4 } from "uuid";

function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]]; // Swap elements
    questions[i].choices = shuffleArray(questions[i].choices); // Shuffle choices
  }
  return questions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export const qnaList = {
  allQuestions: shuffleQuestions([
    {
      id: uuidv4(),
      questions: "What is CSS?",
      choices: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Crazy Style Sheets",
      ],
      type: "MCQs",
      correctAnswer: "Cascading Style Sheets",
    },
    {
      id: uuidv4(),
      questions: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Tool Markup Language",
      ],
      type: "MCQs",
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      id: uuidv4(),
      questions: "What is JavaScript?",
      choices: [
        "A scripting language",
        "A markup language",
        "A programming language",
        "An animation tool",
      ],
      type: "MCQs",
      correctAnswer: "A programming language",
    },
    {
      id: uuidv4(),
      questions: "What is the box model in CSS?",
      choices: [
        "It defines the design and layout of elements in a webpage",
        "It represents the design of a physical box",
        "It refers to the HTML box element",
        "It defines the padding, border, and margin of an element",
      ],
      type: "MCQs",
      correctAnswer: "It defines the padding, border, and margin of an element",
    },
    {
      id: uuidv4(),
      questions: "What is a closure in JavaScript?",
      choices: [
        "A function that is called before another function",
        "A function that closes the browser window",
        "A combination of a function and the lexical environment within which that function was declared",
        "A function used to close an if statement",
      ],
      type: "MCQs",
      correctAnswer:
        "A combination of a function and the lexical environment within which that function was declared",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of AJAX?",
      choices: [
        "To make asynchronous requests to the server without reloading the page",
        "To style web pages",
        "To provide animations on the webpage",
        "To create responsive designs",
      ],
      type: "MCQs",
      correctAnswer:
        "To make asynchronous requests to the server without reloading the page",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML <canvas> element?",
      choices: [
        "To create graphics and animations",
        "To define a container for external content",
        "To display images",
        "To style text",
      ],
      type: "MCQs",
      correctAnswer: "To create graphics and animations",
    },
    {
      id: uuidv4(),
      questions: "What is a RESTful API?",
      choices: [
        "An API that follows the Representational State Transfer architectural style",
        "An API used for real-time data transfer",
        "An API for accessing databases",
        "An API that only accepts POST requests",
      ],
      type: "MCQs",
      correctAnswer:
        "An API that follows the Representational State Transfer architectural style",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS property 'float'?",
      choices: [
        "To specify how an element should float in relation to its parent element",
        "To make text bold",
        "To position an element absolutely",
        "To create a drop shadow effect",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify how an element should float in relation to its parent element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript method 'setTimeout'?",
      choices: [
        "To delay the execution of a function",
        "To set the interval between function calls",
        "To clear a timeout",
        "To execute a function immediately",
      ],
      type: "MCQs",
      correctAnswer: "To delay the execution of a function",
    },
    {
      id: uuidv4(),
      questions: "What is the CSS 'box-sizing' property used for?",
      choices: [
        "To control the size of the content box of an element",
        "To specify the width and height of an element",
        "To determine how the total width and height of an element is calculated",
        "To add a border around an element",
      ],
      type: "MCQs",
      correctAnswer:
        "To determine how the total width and height of an element is calculated",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'this' keyword in JavaScript?",
      choices: [
        "To refer to the current function",
        "To refer to the global object",
        "To refer to the object that owns the function",
        "To refer to a specific HTML element",
      ],
      type: "MCQs",
      correctAnswer: "To refer to the object that owns the function",
    },
    {
      id: uuidv4(),
      questions:
        "What is the difference between '=='' and '===' operators in JavaScript?",
      choices: [
        "'==' checks for value equality without type conversion, while '===' checks for strict equality with type conversion",
        "'==' checks for strict equality without type conversion, while '===' checks for value equality with type conversion",
        "'==' checks for value equality with type conversion, while '===' checks for strict equality without type conversion",
        "'==' checks for value equality with type conversion and strict equality, while '===' checks for strict equality without type conversion",
      ],
      type: "MCQs",
      correctAnswer:
        "'==' checks for value equality without type conversion, while '===' checks for strict equality with type conversion",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'viewport' meta tag in HTML?",
      choices: [
        "To specify the dimensions and scaling of a webpage's viewport for responsive design",
        "To link to external stylesheets",
        "To define the character set used in the webpage",
        "To set the background color of the webpage",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the dimensions and scaling of a webpage's viewport for responsive design",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the 'localStorage' object in JavaScript?",
      choices: [
        "To store data locally in the user's browser",
        "To send data to a server",
        "To store data on the server",
        "To retrieve data from an API",
      ],
      type: "MCQs",
      correctAnswer: "To store data locally in the user's browser",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'flexbox' layout?",
      choices: [
        "To provide a more efficient way to layout, align, and distribute space among items in a container, even when their size is unknown and/or dynamic",
        "To create fixed-width layouts",
        "To create responsive grids",
        "To style text",
      ],
      type: "MCQs",
      correctAnswer:
        "To provide a more efficient way to layout, align, and distribute space among items in a container, even when their size is unknown and/or dynamic",
    },
    {
      id: uuidv4(),
      questions:
        "What is the difference between 'null' and 'undefined' in JavaScript?",
      choices: [
        "'null' represents the intentional absence of any object value, while 'undefined' indicates the absence of a value in a variable",
        "'null' represents an empty string, while 'undefined' represents a null value",
        "'null' represents a non-existent object, while 'undefined' represents an object that has not been initialized",
        "'null' is a primitive data type, while 'undefined' is an object",
      ],
      type: "MCQs",
      correctAnswer:
        "'null' represents the intentional absence of any object value, while 'undefined' indicates the absence of a value in a variable",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'data' attribute?",
      choices: [
        "To store custom data attributes on HTML elements",
        "To specify the character encoding of the HTML document",
        "To define the language of the content",
        "To link to an external stylesheet",
      ],
      type: "MCQs",
      correctAnswer: "To store custom data attributes on HTML elements",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'z-index' property?",
      choices: [
        "To specify the stack order of an element",
        "To define the spacing between lines of text",
        "To set the opacity of an element",
        "To create a shadow effect",
      ],
      type: "MCQs",
      correctAnswer: "To specify the stack order of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'map' method?",
      choices: [
        "To iterate over an array and transform each element into a new array",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To sort the elements of an array",
      ],
      type: "MCQs",
      correctAnswer:
        "To iterate over an array and transform each element into a new array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'grid' layout?",
      choices: [
        "To provide a two-dimensional grid-based layout system",
        "To create rounded corners on elements",
        "To apply a background image to an element",
        "To create a horizontal line",
      ],
      type: "MCQs",
      correctAnswer: "To provide a two-dimensional grid-based layout system",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'meta' tag in HTML?",
      choices: [
        "To provide metadata about the HTML document",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To display an image",
      ],
      type: "MCQs",
      correctAnswer: "To provide metadata about the HTML document",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the 'try...catch' statement in JavaScript?",
      choices: [
        "To handle errors in code by trying a block of code for errors and catching any exceptions",
        "To define a new function",
        "To create a loop that executes a block of code while a specified condition is true",
        "To specify the conditions under which a CSS rule should be applied",
      ],
      type: "MCQs",
      correctAnswer:
        "To handle errors in code by trying a block of code for errors and catching any exceptions",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'position' property?",
      choices: [
        "To specify the positioning method used for an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the positioning method used for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'reduce' method?",
      choices: [
        "To apply a function against an accumulator and each element in the array to reduce it to a single value",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To iterate over an array and transform each element into a new array",
      ],
      type: "MCQs",
      correctAnswer:
        "To apply a function against an accumulator and each element in the array to reduce it to a single value",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'media queries'?",
      choices: [
        "To apply different styles depending on the characteristics of the device, such as its width, height, and orientation",
        "To create animation effects",
        "To define the font size of text",
        "To create responsive images",
      ],
      type: "MCQs",
      correctAnswer:
        "To apply different styles depending on the characteristics of the device, such as its width, height, and orientation",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'filter' method?",
      choices: [
        "To create a new array with all elements that pass the test implemented by the provided function",
        "To sort the elements of an array",
        "To add elements to the end of an array",
        "To remove elements from an array",
      ],
      type: "MCQs",
      correctAnswer:
        "To create a new array with all elements that pass the test implemented by the provided function",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
      choices: [
        "To specify the version of HTML in use and the rules that govern its syntax",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To display an image",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the version of HTML in use and the rules that govern its syntax",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the 'event.preventDefault()' method in JavaScript?",
      choices: [
        "To prevent the default behavior of an event from occurring",
        "To trigger an event",
        "To remove an event listener",
        "To handle errors",
      ],
      type: "MCQs",
      correctAnswer:
        "To prevent the default behavior of an event from occurring",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'animation' property?",
      choices: [
        "To specify the name of the keyframe animation",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the name of the keyframe animation",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'parseInt()' function?",
      choices: [
        "To parse a string and return an integer",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To parse a string and return an integer",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'transition' property?",
      choices: [
        "To specify the time duration and timing function of the transition effect",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the time duration and timing function of the transition effect",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the 'contenteditable' attribute in HTML?",
      choices: [
        "To make an element's content editable by the user",
        "To link to an external stylesheet",
        "To specify the character encoding of the HTML document",
        "To define the structure of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To make an element's content editable by the user",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'split()' method?",
      choices: [
        "To split a string into an array of substrings",
        "To join the elements of an array into a string",
        "To reverse the order of the elements in an array",
        "To sort the elements of an array",
      ],
      type: "MCQs",
      correctAnswer: "To split a string into an array of substrings",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'role' attribute in HTML?",
      choices: [
        "To define the role or purpose of an element for accessibility purposes",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To define the role or purpose of an element for accessibility purposes",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'overflow' property?",
      choices: [
        "To control what happens when content overflows the bounds of its container",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To control what happens when content overflows the bounds of its container",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'splice()' method?",
      choices: [
        "To change the contents of an array by removing or replacing existing elements and/or adding new elements",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To change the contents of an array by removing or replacing existing elements and/or adding new elements",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'alt' attribute in HTML?",
      choices: [
        "To provide alternative text for an image if it cannot be displayed",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To provide alternative text for an image if it cannot be displayed",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'opacity' property?",
      choices: [
        "To specify the transparency of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the transparency of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'forEach()' method?",
      choices: [
        "To execute a provided function once for each array element",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To execute a provided function once for each array element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'background' property?",
      choices: [
        "To specify the background color or image of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the background color or image of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the 'role' attribute in HTML?",
      choices: [
        "To define the role or purpose of an element for accessibility purposes",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To define the role or purpose of an element for accessibility purposes",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'find()' method?",
      choices: [
        "To return the value of the first element in the array that satisfies the provided testing function",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return the value of the first element in the array that satisfies the provided testing function",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'lang' attribute?",
      choices: [
        "To specify the language of the content",
        "To link to an external stylesheet",
        "To define the character encoding of the HTML document",
        "To define the structure of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the language of the content",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'border' property?",
      choices: [
        "To specify the width, style, and color of an element's border",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the width, style, and color of an element's border",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'every()' method?",
      choices: [
        "To test whether all elements in the array pass the provided function",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To test whether all elements in the array pass the provided function",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'font-family' property?",
      choices: [
        "To specify the font family of text",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the font family of text",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'id' attribute?",
      choices: [
        "To provide a unique identifier for an element",
        "To create a hyperlink",
        "To define the character encoding of the HTML document",
        "To define the structure of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To provide a unique identifier for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'indexOf()' method?",
      choices: [
        "To return the first index at which a given element can be found in the array, or -1 if it is not present",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return the first index at which a given element can be found in the array, or -1 if it is not present",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'margin' property?",
      choices: [
        "To specify the margin around an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the margin around an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'title' attribute?",
      choices: [
        "To provide a title for an element, which is typically displayed as a tooltip",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To provide a title for an element, which is typically displayed as a tooltip",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'isNaN()' function?",
      choices: [
        "To determine whether a value is NaN (Not-A-Number)",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To determine whether a value is NaN (Not-A-Number)",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'padding' property?",
      choices: [
        "To specify the padding around an element's content",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the padding around an element's content",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'href' attribute?",
      choices: [
        "To specify the URL of a hyperlink",
        "To provide a title for an element",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the URL of a hyperlink",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'slice()' method?",
      choices: [
        "To extract a section of an array and return a new array",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To extract a section of an array and return a new array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'display' property?",
      choices: [
        "To control the display behavior of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To control the display behavior of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'target' attribute?",
      choices: [
        "To specify where to open the linked document",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify where to open the linked document",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'push()' method?",
      choices: [
        "To add one or more elements to the end of an array and return the new length of the array",
        "To remove elements from an array",
        "To iterate over an array and transform each element into a new array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To add one or more elements to the end of an array and return the new length of the array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'position' property?",
      choices: [
        "To specify the positioning method used for an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the positioning method used for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'src' attribute?",
      choices: [
        "To specify the URL of the media file",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the URL of the media file",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'pop()' method?",
      choices: [
        "To remove the last element from an array and return that element",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To remove the last element from an array and return that element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'width' property?",
      choices: [
        "To specify the width of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the width of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'rel' attribute?",
      choices: [
        "To specify the relationship between the current document and the linked document",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the relationship between the current document and the linked document",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'shift()' method?",
      choices: [
        "To remove the first element from an array and return that element",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To remove the first element from an array and return that element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'height' property?",
      choices: [
        "To specify the height of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the height of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'class' attribute?",
      choices: [
        "To specify one or more class names for an element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify one or more class names for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'unshift()' method?",
      choices: [
        "To add one or more elements to the beginning of an array and return the new length of the array",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To add one or more elements to the beginning of an array and return the new length of the array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'background-color' property?",
      choices: [
        "To specify the background color of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the background color of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'style' attribute?",
      choices: [
        "To specify inline CSS styles for an element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify inline CSS styles for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'splice()' method?",
      choices: [
        "To change the contents of an array by removing or replacing existing elements and/or adding new elements",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To change the contents of an array by removing or replacing existing elements and/or adding new elements",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'text-align' property?",
      choices: [
        "To specify the horizontal alignment of text",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the horizontal alignment of text",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'title' attribute?",
      choices: [
        "To provide a title for an element, which is typically displayed as a tooltip",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To provide a title for an element, which is typically displayed as a tooltip",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'concat()' method?",
      choices: [
        "To merge two or more arrays and return a new array",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To merge two or more arrays and return a new array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'font-size' property?",
      choices: [
        "To specify the font size of text",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the font size of text",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'disabled' attribute?",
      choices: [
        "To disable an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To disable an input element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'shift()' method?",
      choices: [
        "To remove the first element from an array and return that element",
        "To add elements to the end of an array",
        "To remove elements from an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To remove the first element from an array and return that element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'float' property?",
      choices: [
        "To specify whether an element should float to the left, right, or none",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify whether an element should float to the left, right, or none",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'type' attribute?",
      choices: [
        "To specify the type of an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the type of an input element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'charAt()' method?",
      choices: [
        "To return the character at a specified index in a string",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To return the character at a specified index in a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'text-decoration' property?",
      choices: [
        "To specify the decoration added to text",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the decoration added to text",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'placeholder' attribute?",
      choices: [
        "To specify placeholder text for an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify placeholder text for an input element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'substring()' method?",
      choices: [
        "To return a subset of a string between two specified indices",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a subset of a string between two specified indices",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'box-sizing' property?",
      choices: [
        "To specify how the total width and height of an element is calculated",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify how the total width and height of an element is calculated",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'value' attribute?",
      choices: [
        "To specify the value of an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the value of an input element",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toUpperCase()' method?",
      choices: [
        "To convert a string to uppercase letters",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To convert a string to uppercase letters",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'position' property?",
      choices: [
        "To specify the positioning method used for an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the positioning method used for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'target' attribute?",
      choices: [
        "To specify where to open the linked document",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify where to open the linked document",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toLowerCase()' method?",
      choices: [
        "To convert a string to lowercase letters",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To convert a string to lowercase letters",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'clear' property?",
      choices: [
        "To specify whether an element should be moved below floating elements that precede it",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify whether an element should be moved below floating elements that precede it",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'alt' attribute?",
      choices: [
        "To provide alternative text for an image if it cannot be displayed",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To provide alternative text for an image if it cannot be displayed",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'trim()' method?",
      choices: [
        "To remove whitespace from both ends of a string",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],

      type: "MCQs",
      correctAnswer: "To remove whitespace from both ends of a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'z-index' property?",
      choices: [
        "To specify the stack order of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the stack order of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'href' attribute?",
      choices: [
        "To specify the URL of a hyperlink",
        "To provide a title for an element",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the URL of a hyperlink",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'replace()' method?",
      choices: [
        "To replace occurrences of a specified string or regular expression with a new string",
        "To reverse the order of the elements in an array",
        "To sort the elements of an array",
        "To split a string into an array of substrings",
      ],
      type: "MCQs",
      correctAnswer:
        "To replace occurrences of a specified string or regular expression with a new string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'border-radius' property?",
      choices: [
        "To specify the radius of the corners of an element's border",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the radius of the corners of an element's border",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'for' attribute?",
      choices: [
        "To associate a label with a form control",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To associate a label with a form control",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'includes()' method?",
      choices: [
        "To determine whether an array includes a certain value",
        "To reverse the order of the elements in an array",
        "To sort the elements of an array",
        "To split a string into an array of substrings",
      ],
      type: "MCQs",
      correctAnswer: "To determine whether an array includes a certain value",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'box-shadow' property?",
      choices: [
        "To add a shadow effect to an element's box",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To add a shadow effect to an element's box",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'name' attribute?",
      choices: [
        "To specify the name of an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the name of an input element",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toLocaleString()' method?",
      choices: [
        "To return a string representing the object's value in a specific locale",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a string representing the object's value in a specific locale",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'outline' property?",
      choices: [
        "To draw a line around an element's border",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To draw a line around an element's border",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'maxlength' attribute?",
      choices: [
        "To specify the maximum number of characters allowed in an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the maximum number of characters allowed in an input element",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toExponential()' method?",
      choices: [
        "To return a string representing the number in exponential notation",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a string representing the number in exponential notation",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'cursor' property?",
      choices: [
        "To specify the type of cursor to be displayed when pointing over an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the type of cursor to be displayed when pointing over an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'checked' attribute?",
      choices: [
        "To specify that an input element should be pre-selected when the page loads",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify that an input element should be pre-selected when the page loads",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'toFixed()' method?",
      choices: [
        "To format a number with a specific number of digits after the decimal point",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To format a number with a specific number of digits after the decimal point",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'list-style' property?",
      choices: [
        "To specify the appearance of a list item marker",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the appearance of a list item marker",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'readonly' attribute?",
      choices: [
        "To specify that an input field is read-only",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify that an input field is read-only",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'substr()' method?",
      choices: [
        "To return a subset of a string between two specified indices",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a subset of a string between two specified indices",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'overflow' property?",
      choices: [
        "To specify what should happen if content overflows an element's box",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify what should happen if content overflows an element's box",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'selected' attribute?",
      choices: [
        "To specify that an option in a dropdown list should be pre-selected when the page loads",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify that an option in a dropdown list should be pre-selected when the page loads",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'concat()' method?",
      choices: [
        "To merge two or more arrays and return a new array",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To merge two or more arrays and return a new array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'opacity' property?",
      choices: [
        "To specify the transparency of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the transparency of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'autofocus' attribute?",
      choices: [
        "To specify that an input element should automatically get focus when the page loads",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify that an input element should automatically get focus when the page loads",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'charAt()' method?",
      choices: [
        "To return the character at a specified index in a string",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To return the character at a specified index in a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'border' property?",
      choices: [
        "To specify the width, style, and color of an element's border",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify the width, style, and color of an element's border",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'autocomplete' attribute?",
      choices: [
        "To specify whether an input field should have autocomplete enabled",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify whether an input field should have autocomplete enabled",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toLocaleLowerCase()' method?",
      choices: [
        "To return a string representing the object's value converted to lowercase according to any locale-specific case mappings",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a string representing the object's value converted to lowercase according to any locale-specific case mappings",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'text-transform' property?",
      choices: [
        "To specify how to capitalize text",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify how to capitalize text",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'form' attribute?",
      choices: [
        "To associate an input element with a form",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To associate an input element with a form",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toLocaleUpperCase()' method?",
      choices: [
        "To return a string representing the object's value converted to uppercase according to any locale-specific case mappings",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a string representing the object's value converted to uppercase according to any locale-specific case mappings",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'visibility' property?",
      choices: [
        "To specify whether an element is visible or hidden",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify whether an element is visible or hidden",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'target' attribute?",
      choices: [
        "To specify where to open the linked document",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify where to open the linked document",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'slice()' method?",
      choices: [
        "To extract a section of an array and return a new array",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To extract a section of an array and return a new array",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'display' property?",
      choices: [
        "To specify the type of rendering box used for an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the type of rendering box used for an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'rows' attribute?",
      choices: [
        "To specify the visible number of rows in a textarea",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the visible number of rows in a textarea",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'lastIndexOf()' method?",
      choices: [
        "To return the last occurrence of a specified value in a string",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return the last occurrence of a specified value in a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'margin' property?",
      choices: [
        "To specify the margin of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the margin of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'cols' attribute?",
      choices: [
        "To specify the visible number of columns in a textarea",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To specify the visible number of columns in a textarea",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'startsWith()' method?",
      choices: [
        "To determine whether a string begins with the characters of a specified string",
        "To reverse the order of the elements in an array",
        "To sort the elements of an array",
        "To split a string into an array of substrings",
      ],
      type: "MCQs",
      correctAnswer:
        "To determine whether a string begins with the characters of a specified string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'padding' property?",
      choices: [
        "To specify the padding of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the padding of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'submit' attribute?",
      choices: [
        "To specify that the form should be submitted when a button is clicked",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer:
        "To specify that the form should be submitted when a button is clicked",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'trimLeft()' method?",
      choices: [
        "To remove whitespace from the left side of a string",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To remove whitespace from the left side of a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'min-height' property?",
      choices: [
        "To specify the minimum height of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the minimum height of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'button' tag?",
      choices: [
        "To create a clickable button",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To create a clickable button",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'trimRight()' method?",
      choices: [
        "To remove whitespace from the right side of a string",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To remove whitespace from the right side of a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'max-height' property?",
      choices: [
        "To specify the maximum height of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the maximum height of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'input' tag?",
      choices: [
        "To create an input field",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To create an input field",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the JavaScript 'trim()' method?",
      choices: [
        "To remove whitespace from both ends of a string",
        "To remove elements from an array",
        "To add elements to the end of an array",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer: "To remove whitespace from both ends of a string",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'min-width' property?",
      choices: [
        "To specify the minimum width of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the minimum width of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'textarea' tag?",
      choices: [
        "To create a multi-line text input field",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To create a multi-line text input field",
    },
    {
      id: uuidv4(),
      questions:
        "What is the purpose of the JavaScript 'toLocaleString()' method?",
      choices: [
        "To return a string representing the object's value in a specific locale",
        "To round a number to the nearest integer",
        "To convert a number to a string",
        "To create a new array with the results of calling a provided function on every element in the array",
      ],
      type: "MCQs",
      correctAnswer:
        "To return a string representing the object's value in a specific locale",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the CSS 'max-width' property?",
      choices: [
        "To specify the maximum width of an element",
        "To define the color of text",
        "To create a drop-down menu",
        "To style links",
      ],
      type: "MCQs",
      correctAnswer: "To specify the maximum width of an element",
    },
    {
      id: uuidv4(),
      questions: "What is the purpose of the HTML 'label' tag?",
      choices: [
        "To define a label for an input element",
        "To create a hyperlink",
        "To define the structure of the HTML document",
        "To specify the character encoding of the HTML document",
      ],
      type: "MCQs",
      correctAnswer: "To define a label for an input element",
    },
  ]),
};

export const resultInitalState = {
  score: 0,
  correctAnswer: 0,
  wrongAnswer: 0,
};
