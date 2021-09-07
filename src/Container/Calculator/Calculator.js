import React, {useState} from 'react';
import './Calculator.css';

const Calculator = () => {
    const [calc, setCalc] = useState({display: ''});
    const buttons = [1, 2, 3, '*', 4, 5, 6, '/', 7, 8, 9, '+', 'C', 0, '.', '-'];

    const onButtonHandle = e => {
        const value = e.target.value;

        if (value === 'C') {
            setCalc({...calc, display: ''});
        } else {
            setCalc({...calc, display: calc.display + value});
        }
    }

    const onResultHandle = () => {
        console.log('Result');
    }

    const onKeyHandler = e => {
        const key = e.keyCode
        console.log('кнопка', e.keyCode);
        switch (key) {
            case 96:
                console.log('0');
                break;
            case 97:
                console.log('1');
                break;
            case 98:
                console.log('2');
                break;
            case 99:
                console.log('3');
                break;
            case 100:
                console.log('4');
                break;
            case 101:
                console.log('5');
                break;
            case 102:
                console.log('6');
                break;
            case 103:
                console.log('7');
                break;
            case 104:
                console.log('8');
                break;
            case 105:
                console.log('9');
                break;
            case 106:
                console.log('*');
                break;
            case 107:
                console.log('+');
                break;
            case 109:
                console.log('-');
                break;
            case 111:
                console.log('/');
                break;
            case 27:
                console.log('ESC');
                break;
            default:
                console.log('X');
        }
    }

    return (
        <div
            className="Calculator"
            onKeyDown={onKeyHandler}
        >
            <div className="Display">
                {calc.display}
            </div>
            <div className="Buttons">
                {buttons.map(button => (
                    <button
                        key={button}
                        className='butt'
                        value={button}
                        onClick={onButtonHandle}
                    >
                        {button}
                    </button>
                ))}
                <button
                    className="Result"
                    onClick={onResultHandle}
                >
                    Result
                </button>
            </div>
        </div>
    );
};

export default Calculator;