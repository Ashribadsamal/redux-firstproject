import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from './cakes/CakeAction'
import { buyiceCream } from './IceCream/IceCreamAction'

function Itemcontainer(props) {
    return (
        <div>
           <h2>Item - {props.item}</h2> 
           <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownprops) =>{
    const itemState = ownprops.cake ? state.cake.numofCakes :state.iceCream.numofIcecreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownprops) =>{
    const dispatchFunction = ownprops.cake ? ()=> dispatch(buyCake()) : () => dispatch(buyiceCream())

    return{
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Itemcontainer)
