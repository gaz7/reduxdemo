
import {List} from 'immutable';

const mutteringsReducer = (state = List([{
    mutterText: 'mutter, mutter, mutter'
}]), action) => {
    switch (action.type) {
        case 'ADD_MUTTER':
            return state.unshift({mutterText: action.mutterText});
        default:
            return state;
    }
};

export default mutteringsReducer
