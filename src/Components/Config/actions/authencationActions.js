import actionTypes from '../constant/types';

export default function changeState(updatedUser) {
    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_USERNAME,
            payload: updatedUser
        })
    }

}