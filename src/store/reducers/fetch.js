
import { GETITEMS,LOADER,ADD,EDIT, CHECKED} from "../actions"


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
            return { ...state, items: action.payload } 
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
        case CHECKED:
            return { ...state,items: action.payload};       
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
            const newDate = responseJSON.products
            const dates = newDate.map((item)=> {
                item.visible=false
                return item;
            })
            console.log(dates)
            dispatch({type: GETITEMS, payload: dates})
            dispatch({type: LOADER, payload: false})
            
        } catch(e) {
            dispatch({type: LOADER, payload: false})
            console.log(e);
        }
    }
}