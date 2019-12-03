import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { create } from 'react-test-renderer'

const num1 = 'IX', add = '+', num2 = 'III', additionResult = 12;
const minus = '-', minusresult = 6;
const subtract = '/', subtractionResult = 3;
const multiply = '*', multiplyResult = 27;
const equalTo = '=';
const leftBracket = '(', rightBracket = ')';
const addNumberToResultInBrackets = 9 + (3-9);
const numI = 'I', numII = 'II', romanResult = 'III';
const numIII = 'III', numIV = 'IV', romanResult2 = 'III';
const c = 'R', ce = 'CE';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("Check for rendering pressed button", () => {
  test('Should render I', () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(numI);
      expect(instance.state.renderedExpression[0]).toStrictEqual(numI);
      expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe("Render roman based number expression ", () => {

  test('Should redner I+', () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let button = 'I';
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(button);
      button = '+'
      instance.onClick(button);
      renderedExpression = ['I','+']
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression);
      expect(tree.toJSON()).toMatchSnapshot()
  })
})

describe("Addition operation", () => {

  test(`Should result to ${additionResult}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(num1);
      instance.onClick(add);
      instance.onClick(num2);
      instance.onClick(equalTo);
      expect(instance.state.result[0]).toStrictEqual(additionResult);
  })
})

describe("Minus operation", () => {

  test(`Should result to ${minusresult}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(num1);
      instance.onClick(minus);
      instance.onClick(num2);
      instance.onClick(equalTo);
      expect(instance.state.result[0]).toStrictEqual(minusresult);
  })
})

describe("Subtraction", () => {

  test(`Should result to ${subtractionResult}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(num1);
      instance.onClick(subtract);
      instance.onClick(num2);
      instance.onClick(equalTo);
      expect(instance.state.result[0]).toStrictEqual(subtractionResult);
  })
})

describe("Multiplication", () => {
  test(`Should result to ${multiplyResult}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(num1);
      instance.onClick(multiply);
      instance.onClick(num2);
      instance.onClick(equalTo);
      expect(instance.state.result[0]).toStrictEqual(multiplyResult);
  })
})

describe("Add number to (result of minus operation)  ", () => {
  test(`Should result to ${addNumberToResultInBrackets}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(num1);
      instance.onClick(add);
      instance.onClick(leftBracket);
      instance.onClick(num2);
      instance.onClick(minus); 
      instance.onClick(num1);
      instance.onClick(rightBracket);
      instance.onClick(equalTo);
      expect(instance.state.result[0]).toStrictEqual(addNumberToResultInBrackets);
  })
})

describe("Multiplication", () => {
  test(`Should result to ${multiplyResult}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(num1);
      instance.onClick(multiply);
      instance.onClick(num2);
      instance.onClick(equalTo);
      expect(instance.state.result[0]).toStrictEqual(multiplyResult);
  })
})

describe("Check for number combination", () => {
  test(`Should result to ${romanResult}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(numI);
      instance.onClick(numII);
      expect(instance.state.renderedExpression[0]).toStrictEqual(romanResult);
  })
})

describe("Check for number combination", () => {
  test(`Should result to ${romanResult2}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(numIII);
      instance.onClick(numIV);
      expect(instance.state.renderedExpression[0]).toStrictEqual(romanResult2);
  })
})

describe("Check for input removing case", () => {
  test(`Should result to empty ` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(numI);
      instance.onClick(minus);
      instance.onClick(numII);
      instance.onClick(c);
      expect(instance.state.renderedExpression).toStrictEqual('');
  })
})

describe("Check for partial input removing(backspace)", () => {
  test(`Should result to empty ${numI}${minus}` , () => {
      let tree = create(<App />);
      let renderedExpression = [];
      let instance = tree.getInstance();
      expect(instance.state.renderedExpression).toStrictEqual(renderedExpression)
      instance.onClick(numI);
      instance.onClick(minus);
      instance.onClick(numII);
      instance.onClick(ce);
      instance.onClick(ce);
      renderedExpression.push(numI)
      console.info(renderedExpression)
      expect(instance.state.renderedExpression[0]).toStrictEqual(renderedExpression[0]);
  })
})

