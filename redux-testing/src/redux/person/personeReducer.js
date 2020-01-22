import { ADD_PERSON } from './personType'

const initialState = {
    name: null,
    email: null
}

const personReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type)
    {
        case ADD_PERSON:
            return {
                ...state,
                name: action.name,
                email: action.email

            }
        default:
             return state
    }
}

export default personReducer;