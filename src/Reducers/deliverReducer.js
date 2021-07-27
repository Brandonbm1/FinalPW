import types from "../Components/types";
const initialDeliverState = {
    allDelivers: [
        {id: 1, user: "Brandon Brito", state: "Pendiente"}
    ],
    deliver: []
}
const deliverReducer = (state, action) => {
    switch (action.type) {
        case types.filterDeliver:
            const deliverFiltered = state.allDelivers.map(
                deliver => deliver.state === action.payload
            )
            return {
                deliver: state.deliver.map(deliver =>
                    deliver.state === action.payload.state 
                    )
            }
        
        default:
            
        
            

    }
}
export { initialDeliverState };
export default deliverReducer;