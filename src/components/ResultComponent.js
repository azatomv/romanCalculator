import React from 'react';

function ResultComponent(props) {
        let {result} = props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
export default ResultComponent;
