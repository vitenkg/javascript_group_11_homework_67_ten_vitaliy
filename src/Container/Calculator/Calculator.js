import {useDispatch, useSelector} from "react-redux";
import './Calculator.css';

const Calculator = () => {
    const dispatch = useDispatch();
    const display = useSelector(state => state.display);
    const buttons = [1, 2, 3, '*', 4, 5, 6, '/', 7, 8, 9, '+', 'C', 0, '.', '-'];

    const onButtonHandle = e => dispatch({type: 'NUMBERS', payload: e.target.value});
    const onResultHandle = () => dispatch({type: 'RESULT'});

    const onKeyHandler = e => {
        const key = e.keyCode;
        switch (key) {
            case 96:
                dispatch({type: 'NUMBERS', payload: '0'});
                break;
            case 97:
                dispatch({type: 'NUMBERS', payload: '1'});
                break;
            case 98:
                dispatch({type: 'NUMBERS', payload: '2'});
                break;
            case 99:
                dispatch({type: 'NUMBERS', payload: '3'});
                break;
            case 100:
                dispatch({type: 'NUMBERS', payload: '4'});
                break;
            case 101:
                dispatch({type: 'NUMBERS', payload: '5'});
                break;
            case 102:
                dispatch({type: 'NUMBERS', payload: '6'});
                break;
            case 103:
                dispatch({type: 'NUMBERS', payload: '7'});
                break;
            case 104:
                dispatch({type: 'NUMBERS', payload: '8'});
                break;
            case 105:
                dispatch({type: 'NUMBERS', payload: '9'});
                break;
            case 106:
                dispatch({type: 'NUMBERS', payload: '*'});
                break;
            case 107:
                dispatch({type: 'NUMBERS', payload: '+'});
                break;
            case 109:
                dispatch({type: 'NUMBERS', payload: '-'});
                break;
            case 111:
                dispatch({type: 'NUMBERS', payload: '/'});
                break;
            case 8:
                dispatch({type: 'NUMBERS', payload: '<'});
                break;
            case 27:
                dispatch({type: 'NUMBERS', payload: 'C'});
                break;
            case 13:
                dispatch({type: 'RESULT'});
                break;
            default:
                break;
        }
    };

    return (
        <div className="Calculator">
            <div className="Display">
                {display}
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
                        type="button"
                        onClick={onButtonHandle}
                    >
                        {button}
                    </button>
                ))}
                <button
                    className="Result"
                    value="enter"
                    onClick={onResultHandle}
                >
                    Result
                </button>
            </div>
        </div>
    );
};

export default Calculator;