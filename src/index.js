import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MultipleChoiceQuestions from './components/multipleChoiceQuestion'

const sampleQuestions = 
[  
    {
        id: 1,
        text: "Which data type is used to create a variable that should store text?",
        imageURL: "",
        choices: 
            [
                {
                    id: 1,
                    text: "myString",
                    imageURL: "",
                    checked: false
                },
                {
                    id: 2,
                    text: "Txt",
                    checked: false
                },
                {
                    id: 3,
                    text: "string",
                    imageURL: "",
                    checked: false
                },
                {
                    id: 4,
                    text: "String",
                    imageURL: "",
                    checked: false
                }
            ]
    },
    {
        id: 2,
        text: "How do you create a variable with the numeric value 5?",
        imageURL: "",
        choices: 
            [
                {
                    id: 1,
                    text: "float x= 5;",
                    imageURL: "",
                    checked: false
                },
                {
                    id: 2,
                    text: "x = 5;",
                    checked: false
                },
                {
                    id: 3,
                    text: "num x = 5",
                    imageURL: "",
                    checked: false
                },
                {
                    id: 4,
                    text: "int x = 5;",
                    imageURL: "",
                    checked: false
                }
            ]
    },
    {
        id: 3,
        text: "Which method can be used to find the length of a string?",
        imageURL: "",
        choices: 
            [
                {
                    id: 1,
                    text: "length()",
                    imageURL: "",
                    checked: false
                },
                {
                    id: 2,
                    text: "getLength()",
                    checked: false
                },
                {
                    id: 3,
                    text: "len()",
                    imageURL: "",
                    checked: false
                },
                {
                    id: 4,
                    text: "getSize()",
                    imageURL: "",
                    checked: false
                }
            ]
    },
    {
      id: 4,
      text: "Java is short for \"JavaScript\".hich method can be used to find the length of a string?",
      imageURL: "",
      choices: 
          [
              {
                  id: 1,
                  text: "true",
                  imageURL: "",
                  checked: false
              },
              {
                  id: 2,
                  text: "false",
                  checked: false
              }
          ]
  }    
]



ReactDOM.render(
  <React.StrictMode>
    <MultipleChoiceQuestions questions={sampleQuestions}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
