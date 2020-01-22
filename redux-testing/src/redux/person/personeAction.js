import {ADD_PERSON } from './personType'

export const addPerson = (input) => { 
    return {
        type: ADD_PERSON , name: input.name, email: input.email
    }
 }