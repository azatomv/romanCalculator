import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import { romanize, deromanize } from './utils/romanConverter';
import { refactorNumber, isButtonAllowed } from './utils/mainFunctions';

class App extends Component {
    constructor(){
        super();
        this.state = {
            result: [],
            renderedExpression: [],
        }
    }

    onClick = button => {
        let { result, renderedExpression } = this.state;
        let flag;
        if(button === "="){ 
            this.calculate()
        }
        else if((button === "+" || button === "-" || button === "/" || button === "*")){
            let a = result.pop();
            let r = renderedExpression.pop();
            if(!isNaN(a)){
               result.push(a);
               result.push(button);
               renderedExpression.push(r);
               renderedExpression.push(button);
            }
            if(a === ')'){
                result.push(a);
                result.push(button);
                renderedExpression.push(r);
                renderedExpression.push(button);
            }
            this.setState({
                result,
                renderedExpression,
           })

        }
        else if(button === '(' || button === ')'){
            flag = isButtonAllowed(result, button);
            if(flag){
                result.push(button);
                renderedExpression.push(button);
                this.setState({
                    result,
                    renderedExpression,
                })
            }
        } 
        else if(button === "R"){
            this.reset()
        } 
        else if(button === "CE"){
            this.backspace()
        }
        else {
            let romanExpression = [];
            let arabicExpression = []
            if(renderedExpression.length === 0){
                romanExpression.push(button);
                arabicExpression.push(deromanize(button));
            }
            if(renderedExpression.length !== 0){
                let a = result.pop();
                let r = romanize(a);
                if(!isNaN(a)){
                   r = refactorNumber(r, button);
                   renderedExpression.pop();
                   renderedExpression.push(r);
                   result.push(deromanize(r))
                   romanExpression = renderedExpression;
                   arabicExpression = result; 
                } else {
                    // + 
                    result.push(a);
                    result.push(deromanize(button));
                    arabicExpression = result;
                    renderedExpression.push(button);
                    romanExpression = renderedExpression;

                }
            }
 
            this.setState({
                result: arabicExpression,
                renderedExpression: romanExpression,
           })

        }
    }

    

    calculate = () => {
        const {result} = this.state;
        let romanExpression = [], arabicExpression = [];
        let a = result + '';
        let regex = /,/gi;
            a = a.replace(regex, '');
        try {
            a = (eval(a) || "" ) + "";
            a = Math.trunc(a);
        } catch (e) {
            this.setState({ result: "error" })
        }
        let r = romanize(a);
            r = a < 0 ? `-${r}` : r;
        romanExpression[0] = r;
        arabicExpression[0] = a;
            this.setState({
                // eslint-disable-next-line
                result: arabicExpression,
                renderedExpression: romanExpression,
        })
    };

    reset = () => {
        this.setState({
            result: "",
            renderedExpression: '',
        })
    };

    backspace = () => {
        const { result, renderedExpression } = this.state;
        result.pop();
        renderedExpression.pop();
        this.setState({
            result,
            renderedExpression,
       })

    };

    render() {
        const { renderedExpression } = this.state;
        let d = renderedExpression + '';
        let regex = /,/gi;
            d = d.replace(regex, '');
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    
                    <ResultComponent  result={d}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    <p>{this.state.result}</p>
                </div>
            </div>
        );
    }
}

export default App;
