import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import mergeNumbers from './utils/compoundSymbols';
import { romanize, deromanize } from './utils/romanConverter';

class App extends Component {
    constructor(){
        super();
        this.state = {
            result: "",
            renderedExpression: '',
        }
    }

    
    
    isOperationSign = (button) =>{
        switch (button) {
            case '+':
            case '-':
            case '/':
            case '*':        
                return true;
            default:
                return false;
        }
    }

    

    isEven = num => {
        if(num % 2 !== 0){
            return false; // 1
        } else 
            return true; // 0
    }

    

    onClick = button => {
        let { result } = this.state;
        let flag;
        // =
        if(button === "="){
            this.calculate()
        }
        // buttons = + - / *
        else if((button === "+" || button === "-" || button === "/" || button === "*")){
            let end = result.slice(-1);
            let nResult = this.skipOrMerge(`${result}${button}`);
            if(isNaN(end)){
                if(end !== '(' &&  end !== ')'){
                    result = result.replace(end, button);
                    nResult = this.skipOrMerge(`${result}`);
                    this.setState({
                        result,
                        renderedExpression:  nResult,
                    })
                } else {
                    this.setState({
                        result: this.state.result + button,
                        renderedExpression:  nResult,
                    })
                }
            } else {
                this.setState({
                    result: this.state.result + button,
                    renderedExpression:  nResult,
                })
            }
        }
        // ( )
        else if(button.toString() === '(' || button.toString() === ')'){
            flag = this.isButtonAllowed(result, button.toString());
            if(flag){
                const nResult = this.skipOrMerge(`${result}${button}`);
                this.setState({
                    result: this.state.result + button,
                    renderedExpression:  nResult,
                })
            }
        } // C
        else if(button === "C"){
            this.reset()
        } // CE
        else if(button === "CE"){
            this.backspace()
        }
        
        else {
            const nResult = this.skipOrMerge(`${result}${button}`);
            this.setState({
                result: this.state.result + button,
                renderedExpression:  nResult,
            })
        }
    };

    skipOrMerge = (arr) => { // one arg
        debugger
        let result = arr.split('');
        result = mergeNumbers(result);
        // result = this.compoundSymbols(result);
        console.info(result);
        let str = '';
        if(result.length !== 0){
            while(result.length > 0){
                let a = result.shift();
                const b = parseInt(a, 10)
                a = b ? romanize(b) : a;
                str = `${str}${a}`;
            }
        }
        return str;
    }

    isButtonAllowed = (result, button) => {
        let flag = false;
        let str = result.slice(-1);
        if(button === '('){
            if(str !== button && (str === '+' || str === '-' || str === '/' || str === '*')){
                flag = true
            }
        } else {
            if(!isNaN(str) && (result.indexOf('(') > 0)){
                flag = true
            }
        }
            return flag;
    }

    compoundSymbols = (arr) => {
        debugger
        let temp = [];
        temp.push(arr.shift());
        while(arr.length > 0){
          let fTemp = temp.pop();
          let fArr = arr.shift();
          if(!isNaN(fTemp + fArr)){
              if(fTemp === '+'){
                temp.push(fTemp);
                temp.push(fArr);
              } else {
                let str = `${fTemp}${fArr}`;
                console.info(str);
                temp.push(parseInt(str, 10)); // temp[0,?]
              }
          }
          if(isNaN(fTemp + fArr)){
              if(!isNaN(fTemp) && isNaN(fArr)){
                  temp.push(fTemp); // temp[0,?]
                  temp.push(fArr); // temp[0,?]
              }
              if(isNaN(fTemp) && !isNaN(fArr)){
                  temp.push(fTemp); // temp[0,?]
                  temp.push(fArr); // temp[0,?]
              }
              if(isNaN(fTemp) && isNaN(fArr)){
                  let str = fTemp+fArr;
                  temp.push(str);
              }
          }
        }
        return temp
      }


    calculate = () => {
        let renderedExpression = '';
        let result = 0;
        let floatingPart = 0;
        try {
            result = (eval(this.state.result) || "" ) + "";
        } catch (e) {
            this.setState({ result: "error" })
        }

        if(this.isFractional(result)){
            let wholePart = Math.trunc(result)
            floatingPart = result - wholePart;
            floatingPart = floatingPart.toFixed(1)*10;
            renderedExpression = `${romanize(wholePart)}.${romanize(floatingPart)}`;
        } else {
            renderedExpression = romanize(result);
        }
            this.setState({
                // eslint-disable-next-line
                result,
                renderedExpression: result < 0 ? `-${renderedExpression}` : renderedExpression
        })
    };

    reset = () => {
        this.setState({
            result: "",
            renderedExpression: '',
        })
    };

    backspace = () => {
        debugger
        const result = this.state.result.slice(0, -1);
        if(result !== ''){
            const renderedExpression = this.skipOrMerge(result);
            this.setState({
                result, 
                renderedExpression,
            })
        } else {
            this.setState({
                result, 
                renderedExpression: '',
            })
        }

    };

    isFractional = (r) => {
        try {
            let res = eval(r);
            return parseFloat((res - Math.floor(res)).toFixed(10))*10 > 0 ? true : false
        } catch (error) {
            return error
        }
        
    }

    render() {
        const { result } = this.state;
        console.info(result);
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <p>{this.state.result}</p>
                    <ResultComponent  romanize={romanize} result={this.state.renderedExpression || this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
