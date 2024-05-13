export default function ReducerAction(state,action){

    
    switch(action.type){
        case 'ADD':
            return state + action.payload

            case 'SUB':
                return state - action.payload
        
        default:
            break;
    }
}