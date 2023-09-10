export const initialState={
    basket:[]
}
export const reducer=(state,action)=>{
    console.log(state.basket)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
                console.log(action.id)
                const index=state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id
                )
                let newBasket=[...state.basket]
                if(index>=0){
                    newBasket.splice(index,1)
                }else{
                    console.warn(
                        "cant remove product"
                    )
                }
                return {
                    ...state,
                    basket:newBasket
                }

            
        default:{
            return state
        }
    }
}