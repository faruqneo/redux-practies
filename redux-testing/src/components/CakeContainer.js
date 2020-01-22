import React from 'react'
import {connect} from 'react-redux'
import {buycakes} from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>No. of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buycakes} disabled={props.numOfCakes == 0}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = ({cakeReducer}) => {
    return {
        numOfCakes: cakeReducer.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buycakes: () => dispatch(buycakes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
