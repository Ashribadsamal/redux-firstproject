import { BUY_CAKE } from "./CakeType"

const initialState ={
    numofCakes:20
}

const cakeReducer =(state = initialState , action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes:state.numofCakes-action.payload
        }
        default : return state
    }
}

export default cakeReducer;