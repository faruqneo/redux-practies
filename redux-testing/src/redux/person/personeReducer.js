import { ADD_PERSON } from './personType'

const initialState = {
    name: null
}

const personReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_PERSON:
            return {
                ...state,
                name: action.fname
            }
        default:
             return state
    }
}

export default personReducer;