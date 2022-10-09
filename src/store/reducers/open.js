import { OPEN, CLOSE } from "../actions"


const initialState = {
    cars:[
        {
            categories:'Новинки',
            list:[
                {   
                id:Date.now(),
                name:'Tesla Model S',
                price:'1c/мин',
                image:'https://citydrive.ru/upload/iblock/fb6/g79jh93703s65efsd62kpyse1x0wqk90.png',
            },
            {   
                id:Date.now(),
                name:'Tesla Model Y',
                image:'./images/Tesla Model Y.png',
            },
            {   
                id:Date.now(),
                name:'Tesla Model 3',
                price:'1c/мин',
                image:'./images/Tesla Model 3.png',
            },
            {   
                id:Date.now(),
                name:'Volkswagen ID.3',
                price:'1c/мин',
                image:'./images/Volsvagen ID.3.png',
            },
            {   
                id:Date.now(),
                name:'Volkswagen ID.4',
                price:'1c/мин',
                image:'./images/Volsvagen ID.4.png',
            },
            {   
                id:Date.now(),
                name:'BMW 318i',
                price:'1c/мин',
                image:'./images/BMW 318i.png',
            },
            ]
        },    
        {
            categories:'Премиум',
            list:[
                {   
                    id:Date.now(),
                    name:'Audi A3',
                    price:'1c/мин',
                    image:'./images/Audi A3.png',
                },
                {   
                    id:Date.now(),
                    name:'Audi A4',
                    price:'1c/мин',
                    image:'./images/Audi A4.png',
                },
                {   
                    id:Date.now(),
                    name:'BMW 318i',
                    price:'1c/мин',
                    image:'./images/BMW 318i.png',
                },
                {   
                    id:Date.now(),
                    name:'Audi Q3',
                    price:'1c/мин',
                    image:'./images/Audi Q.png',
                },
                {   
                    id:Date.now(),
                    name:'Volkswagen ID.4',
                    price:'1c/мин',
                    image:'./images/Volsvagen ID.4.png',
                },
                {   
                    id:Date.now(),
                    name:'BMW 318i',
                    price:'1c/мин',
                    image:'./images/BMW 318i.png',
                }
            ]  
        },
        {
            categories:'Комфорт',
            list:[
                {   
                    id:Date.now(),
                    name:'Kia Soul',
                    price:'1c/мин',
                    image:'./images/Kia Soul.png',
                },
                {   
                    id:Date.now(),
                    name:'Kia Sportage',
                    price:'1c/мин',
                    image:'./images/Kia Sportage.png',
                },
                {   
                    id:Date.now(),
                    name:'Nissan Qashqai',
                    price:'1c/мин',
                    image:'./images/Nissan Qashqai.png',
                },
                {   
                    id:Date.now(),
                    name:'Nissan X-Trail',
                    price:'1c/мин',
                    image:'./images/Nissan X-Trail.png',
                },
                {   
                    id:Date.now(),
                    name:'Skoda Karoq',
                    price:'1c/мин',
                    image:'./images/Skoda Karoq.png',
                }
            ]  
        },
        {
            categories:'Эконом',
            list:[
                {   
                    id:Date.now(),
                    name:'Kia Rio',
                    price:'1c/мин',
                    image:'./images/g79jh93703s65efsd62kpyse1x0wqk90.png',
                },
                {   
                    id:Date.now(),
                    name:'Kia Sportage',
                    price:'1c/мин',
                    image:'./images/Tesla Model Y.png',
                },
                {   
                    id:Date.now(),
                    name:'Smart Fortwo',
                    price:'1c/мин',
                    image:'./images',
                },
                {   
                    id:Date.now(),
                    name:'Volsvagen Polo',
                    price:'1c/мин',
                    image:'./images/Volsvagen ID.3.png',
                },
                {   
                    id:Date.now(),
                    name:'Skoda Rapid',
                    price:'1c/мин',
                    image:'./images/Volsvagen ID.4.png',
                },
                {   
                    id:Date.now(),
                    name:'Kia Rio X-Line',
                    price:'1c/мин',
                    image:'./images/g79jh93703s65efsd62kpyse1x0wqk90.png',
                }
            ]  
        },
        {
            categories:'Электро',
            list:[
                {   
                    id:Date.now(),
                    name:'Tesla Model S',
                    price:'1c/мин',
                    image:'./images/g79jh93703s65efsd62kpyse1x0wqk90.png',
                },
                {   
                    id:Date.now(),
                    name:'Tesla Model Y',
                    price:'1c/мин',
                    image:'./images/Tesla Model Y.png',
                },
                {   
                    id:Date.now(),
                    name:'Tesla Model 3',
                    price:'1c/мин',
                    image:'./images/Tesla Model 3.png',
                },
                {   
                    id:Date.now(),
                    name:'Volkswagen ID.3',
                    price:'1c/мин',
                    image:'./images/Volsvagen ID.3.png',
                },
                {   
                    id:Date.now(),
                    name:'Volkswagen ID.4',
                    price:'1c/мин',
                    image:'./images/Volsvagen ID.4.png',
                }
            ]  
        }
    ]
}

export const OpenReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return { ...state, isOpen: true };
        case CLOSE:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}