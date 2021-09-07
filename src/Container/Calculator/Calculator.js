import React, {useState} from 'react';
import './Calculator.css';

const Calculator = () => {
    const [calc, setCalc] = useState({display: ''});
    const buttons = [1, 2, 3, '*', 4, 5, 6, '/', 7, 8, 9, '+', 'C', 0, '.', '-'];

    const checkSing = (znak) => {
        const prev = calc.display[calc.display.length-1];
        let string = calc.display;
        if ((prev === '/') || (prev === '*') || (prev === '-') || (prev === '+')) {
            console.log('защло');
            string = string.slice(0, -1);
            console.log(string);
            string = string + znak;
            console.log(string);
            setCalc({...calc, display: string});
        } else {
            setCalc({...calc, display: calc.display + znak});
        }

    }

    const onButtonHandle = e => {
        const value = e.target.value;

        if (value === 'C') {
            setCalc({...calc, display: ''});
        }

        else {
            setCalc({...calc, display: calc.display + value});
        }


    }

    const onResultHandle = () => {
        console.log('Result');
    }

    const onKeyHandler = e => {
        const key = e.keyCode;
        switch (key) {
            case 96:
                setCalc({...calc, display: calc.display + '0'});
                break;
            case 97:
                setCalc({...calc, display: calc.display + '1'});
                break;
            case 98:
                setCalc({...calc, display: calc.display + '2'});
                break;
            case 99:
                setCalc({...calc, display: calc.display + '3'});
                break;
            case 100:
                setCalc({...calc, display: calc.display + '4'});
                break;
            case 101:
                setCalc({...calc, display: calc.display + '5'});
                break;
            case 102:
                setCalc({...calc, display: calc.display + '6'});
                break;
            case 103:
                setCalc({...calc, display: calc.display + '7'});
                break;
            case 104:
                setCalc({...calc, display: calc.display + '8'});
                break;
            case 105:
                setCalc({...calc, display: calc.display + '9'});
                break;
            case 106:
                checkSing('*');
                break;
            case 107:
                checkSing('+');
                break;
            case 109:
                checkSing('-');
                break;
            case 111:
                checkSing('/');
                break;
            case 27:
                setCalc({...calc, display: ''});
                break;
            default:
                console.log('X');
        }
    }

    return (
        <div className="Calculator">
            <div className="Display">
                {calc.display}
            </div>
            <div
                className="Buttons"
                onKeyDown={onKeyHandler}
                >
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