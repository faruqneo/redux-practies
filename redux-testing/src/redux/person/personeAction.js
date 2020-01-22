import {ADD_PERSON } from './personType'

export const addPerson = (fname) => { 
    return {
        type: ADD_PERSON , fname: fname
    }
 }