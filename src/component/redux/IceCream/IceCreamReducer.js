import {BUY_ICECREAM} from './IceCreamType'

const initialState ={
    numofIcecreams:10
}

const IceCreamReducer =(state = initialState , action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numofIcecreams:state.numofIcecreams-1
        }
        default : return state
    }
}

export default IceCreamReducer;