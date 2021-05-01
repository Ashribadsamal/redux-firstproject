import React from 'react' 
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from './redux/cakes/CakeAction'

function HooksRedux() {
    const numofCake = useSelector(state=>state.cake.numofCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>By help of Hook</h3>
            <h2>Number of Cakes -{numofCake}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksRedux
