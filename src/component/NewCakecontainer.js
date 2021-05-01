import React,{useState} from 'react'
import {connect } from 'react-redux'
import { buyCake } from './redux/cakes/CakeAction'

function NewCakecontainer(props) {
    const[number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numofCakes}</h2>
            <input type="text" value={number} onChange={e=> setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numofCakes:state.cake.numofCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:number =>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakecontainer)
