import React from 'react'
import {connect } from 'react-redux'
import { buyiceCream } from './redux/IceCream/IceCreamAction'

function IceCreamShop(props) {

    return (
        <div>
            <h2>Number of iceCream - {props.numofIcecreams}</h2>
            <button onClick={props.buyiceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numofIcecreams:state.iceCream.numofIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyiceCream:()=>dispatch(buyiceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamShop)
