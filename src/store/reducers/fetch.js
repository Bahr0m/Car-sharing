
import { GETITEMS,LOADER,ADD,EDIT} from "../actions"


const initialState = {
    items: [],
    loading: false,
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETITEMS:
            return { ...state, items: action.payload }
        case LOADER: 
            return {...state, loading: action.payload};
        case ADD: 
            return { ...state, items: [action.payload,...state.items] } 
        case EDIT: 
            return {...state, items: state.items.map((item)=>{
                if (item.id==action.payload.id) {
                    item.title = action.payload.title
                    item.brand = action.payload.brand
                    item.price = action.payload.price
                    return item;
                } 
                return item;
            }) };       
        default:
            return state;
    }
}

export const getItems = () => {
    return async function (dispatch) {
        try {
            dispatch({type: LOADER, payload: true})
            const response = await fetch('https://dummyjson.com/products');
            const responseJSON = await response.json();
            dispatch({type: GETITEMS, payload: responseJSON.products})
            dispatch({type: LOADER, payload: false})
            
        } catch(e) {
            dispatch({type: LOADER, payload: false})
            console.log(e);
        }
    }
}