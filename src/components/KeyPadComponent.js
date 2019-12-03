import React, { Component } from 'react';

class KeyPadComponent extends Component {
    returnNumber = (button) => {
        const { onClick } = this.props;
        onClick(button);
        // onClick(this.convertFromRoman(button)); // For working solution #1
    }

    convertFromRoman = (button) => {
        switch (button) {
            case 'I':
                return 1;
            case 'II':
                return 2;
            case 'III':
                return 3;
            case 'IV':
                return 4;
            case 'V':
                return 5;
            case 'VI':
                return 6;
            case 'VII':
                return 7;
            case 'VIII':
                return 8;
            case 'IX':
                return 9;
            // case button:
            //     return button;
            // case 'IX':
            //     return 9;
            // case 'IX':
            //     return 9;
            // case 'IX':
            //     return 9;
            //     case 'IX':
            //     return 9;
            default:
                return button;
        }
    }


    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="R" onClick={e => this.props.onClick(e.target.name)}>R</button><br/>


                <button name="VII" onClick={e => this.returnNumber(e.target.name)}>VII</button>
                <button name="VIII" onClick={e => this.returnNumber(e.target.name)}>VIII</button>
                <button name="X" onClick={e => this.returnNumber(e.target.name)}>X</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="IV" onClick={e => this.returnNumber(e.target.name)}>IV</button>
                <button name="V" onClick={e => this.returnNumber(e.target.name)}>V</button>
                <button name="VI" onClick={e => this.returnNumber(e.target.name)}>VI</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="I" onClick={e => this.returnNumber(e.target.name)}>I</button>
                <button name="II" onClick={e => this.returnNumber(e.target.name)}>II</button>
                <button name="III" onClick={e => this.returnNumber(e.target.name)}>III</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button name="XL" onClick={e => this.returnNumber(e.target.name)}>XL</button>
                <button name="L" onClick={e => this.returnNumber(e.target.name)}>L</button>
                <button name="LXXX" onClick={e => this.returnNumber(e.target.name)}>LXXX</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
                
                <button name="XC" onClick={e => this.returnNumber(e.target.name)}>XC</button>
                <button name="C" onClick={e => this.returnNumber(e.target.name)}>C</button>
                <button name="LX" onClick={e => this.returnNumber(e.target.name)}>LX</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button><br/>

            </div>
        );
    }
}


export default KeyPadComponent;
