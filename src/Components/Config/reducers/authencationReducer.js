import actionTypes from '../constant/types';


const INITIAL_STATE = {
    id: 1,
    userName: 'Kashaf'
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_USERNAME:
            return ({
                ...states,
                userName: action.payload
            })
        default:
            return states;
    }
}