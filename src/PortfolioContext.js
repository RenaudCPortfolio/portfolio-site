import { createContext,useReducer } from "react";  

const initialState = {   

  };
 
const reducer = (state, action) => { 
     
    switch(action.type) {
    case 'receive-item-info-from-server': { 
        
    }
      

    default: {
              throw new Error(`Unrecognized action: ${action.type}`);
        }
    }

}

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

    const receiveItemInfoFromServer = (data) => {
      dispatch({
        type: "receive-item-info-from-server",
        data: {...data},
      }); 
    }; 

    const inputSearch = (data) => {
      dispatch({
        type:"input-search",
        data:{...data},
      });

    }

    const addToCart = (data) => {
      dispatch({
        type: "add-to-cart",
        data: {...data},
      }); 
    }; 

    const checkoutPurchase = (data) => {
      dispatch({
        type: "checkout-purchase",
        data: {...data},
      }); 
    }; 

  return (
    <PortfolioContext.Provider
      value={{
        state,
        actions: { 
          addToCart,
          receiveItemInfoFromServer,
          checkoutPurchase,
        },
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};



export const PortfolioContext = createContext();
