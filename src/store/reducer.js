const initialState = {
    display: '0',
    status: false
};

const reducer = (state = initialState, action) => {
    const type = action.type;
    let payload = action.payload;

    const checkZero = number => {
        let zero = state.display;

        if ((zero[0] === '0') && (zero.length < 2)) {
            zero = zero.substring(1) + number;
        } else {
            zero += number;
        }
        return zero;
    };

    const checkSing = sing => {
        const prev = state.display[state.display.length - 1];
        let string = state.display;

        if ((prev === '/') || (prev === '*') || (prev === '-') || (prev === '+')) {
            string = string.slice(0, -1);
            string = string + sing;
        } else if (sing === '<') {
            string = string.slice(0, -1);

            if (string.length === 0) {
                string = '0';
            }
        } else if ((sing === '.') && (prev === '.')) {

        } else {
            string += sing;
        }
        return string;
    };

    if (state.status) {
        if (!payload) {
            payload = state.display;
        }
        return {...state, display: payload, status: false};
    }

    if (type === 'NUMBERS') {
        let enterNumbers = '';

        if (payload === 'C') {
            return {...state, display: '0'};
        } else {
            enterNumbers = checkZero(payload);
        }

        if ((payload === '+') || (payload === '-') || (payload === '*') || (payload === '/') || (payload === '<') || (payload === '.')) {
            enterNumbers = checkSing(payload);
        }

        return {...state, display: enterNumbers};
    }

    if (type === 'RESULT') {
        const prev = state.display[state.display.length - 1];
        let evalResult = state.display;
        if ((prev === '+') || (prev === '-') || (prev === '*') || (prev === '/')) {
            return {...state};
        }

        return {...state, display: eval(evalResult), status: true};
    }

    return state;
}


export default reducer;