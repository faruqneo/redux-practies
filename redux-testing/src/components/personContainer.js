import React, { useState } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../redux/index'

function PersonContainer(props) {
    
    const [inputs, setInputs] = useState({});

    const handlechanges = (e) => {
        //console.log(e.target.value)
        setInputs({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        props.addPerson(inputs.name)
    }

    return (
        <div>
            <from onClick={handleSubmit}>
                <input type="text" name="name" value={inputs.name}  placeholder="Enter your name" onChange={handlechanges} />
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
