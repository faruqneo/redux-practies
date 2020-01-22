import React, { useState } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../redux/index'

function PersonContainer(props) {
    
    const [inputs, setInputs] = useState({});

    const handlechanges = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        //const {name, email} = inputs;
        //console.log(inputs)
        props.addPerson(inputs)
    }

    return (
        <div>
            <from onClick={handleSubmit}>
                <input type="text" name="name" value={inputs.name}  placeholder="Enter your name" onChange={handlechanges} /><br/ >
                <input type="email" name="email" value={inputs.email}  placeholder="Enter your email" onChange={handlechanges} /><br/ >
                <button>Submit</button>
            </from>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        name: null
    }
    
}

const mapDispatchToProp = dispatch => {
    return {
        addPerson:(info) => dispatch(addPerson(info))
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(PersonContainer)
