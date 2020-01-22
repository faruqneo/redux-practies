import React from 'react'
import {connect} from 'react-redux'
import {buycakes} from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>No. of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buycakes}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buycakes: () => dispatch(buycakes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
