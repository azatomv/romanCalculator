export function refactorNumber (renderedExpression, button){
    let result = '';
    if(renderedExpression === ""){
        result = button;
    }
    if(renderedExpression === 'I'){
        if(button === "I" || button === "II" || button === "V" || button === "X"){
            result = `${renderedExpression}${button}`
        }
    }
    if((renderedExpression === 'II' || renderedExpression === 'VII') && button === "I"){
        result = `${renderedExpression}${button}`
    }
    if(renderedExpression === 'V'){
        if(button === "I" || button === "II" || button === "III"){
            result = `${renderedExpression}${button}`
        }
    }
    if(renderedExpression === 'VI'){
        if(button === "I" || button === "II"){
            result = `${renderedExpression}${button}`
        }
    }
    if((renderedExpression === 'X' || renderedExpression === 'XX') && button !== 'XL' && button !== 'LX' && button !== 'LXX' && button !== 'LXXX' && button !== 'XC' && button !== 'C'){
        result = `${renderedExpression}${button}`
    }

    if(renderedExpression === 'XI' && button !== 'III' && button !== 'IV' && button !== 'VI' && button !== 'VII' && button !== 'VIII'){
        result = `${renderedExpression}${button}`
    }

    if(renderedExpression === 'XL' && (button !== 'X' && button !== 'L' && button !== 'LX' && button !== 'LXX' && button !== 'LXXX' && button !== 'XC' && button !== 'C' && button !== 'XL')){
        result = `${renderedExpression}${button}`
    }
    
    if(renderedExpression === 'L' ){
        if(button === "I" || button === "II" || button === "III" || button === "IV" || button === "V" || button === "VI" || button === "VII" || button === "VIII" || button === "V" || button === "X" || button === "XX" || button === "XXX" || button === "XXXX"){
            result = `${renderedExpression}${button}`
        }
    }

    if(renderedExpression === 'LX' ){
        if(button === "I" || button === "II" || button === "III" || button === "IV" || button === "V" || button === "VI" || button === "VII" || button === "VIII" || button === "X" || button === "XX" || button === "XXX"){
            result = `${renderedExpression}${button}`
        }
    }

    if(renderedExpression === 'C'){
        result = `${renderedExpression}${button}`
    }

    if(renderedExpression === 'XX' && (button === "I" || button === "II" || button === "III" || button === "IV" || button === "V" || button === "VI" || button === "VII" || button === "VIII" || button === "X" || button === "IX")){
        result = `${renderedExpression}${button}`
    }

    if(renderedExpression === 'XXI' && (button === "I" || button === "II" || button === "III" || button === "IV" || button === "V" || button === "VI" || button === "VII" || button === "VIII" || button === "X" || button === "IX")){
        result = `${renderedExpression}${button}`
    }

    if(renderedExpression !== '' && result === ''){
        result = renderedExpression;
    }
    return result;
}

export function isButtonAllowed(result, button){ 
    let flag = false;
    const str = result + '';
    const last = result.pop();
    if( button === ')' && (str.indexOf('(') > 0) && !isNaN(last)){
        flag = true;
    }
    if( button === '(' && isNaN(last)){
        flag = true;
    }
        result.push(last)
        return flag;
}
