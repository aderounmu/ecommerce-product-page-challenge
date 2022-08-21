import React , {useState, useContext} from 'react'

export const AddToCartContext = React.createContext();


export const AddToCartProvider = ({children}) => {
    const [amountOrder , setAmountOrder] = useState(0)
    const values = {
        amountOrder,
        setAmountOrder,
    }
    return <AddToCartContext.Provider value={values}>{children}</AddToCartContext.Provider>
}


export const useAddToCart = () => {
    const context = useContext(AddToCartContext);
    if(!context) throw Error(' Must be inside a Context Provider') ;

    return context;

}