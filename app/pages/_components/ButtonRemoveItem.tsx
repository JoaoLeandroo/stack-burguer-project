"use client"
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";
import { toast } from "react-toastify";

interface ButtonRemoveItemProps {
    children: React.ReactNode;
    index: any;
}

const ButtonRemoveItem: React.FC<ButtonRemoveItemProps> = ({children, index}) => {
    const { itemsAdd, setItemsAdd } = useContext(AuthContext);

    function removeItem() {
        const arr = [...itemsAdd]
        arr.splice(index, 1)
        setItemsAdd(arr)
        toast.info("Produto removido com sucesso!")
    }
    return ( 
        <button onClick={removeItem}>
            {children}
        </button>
     );
}
 
export default ButtonRemoveItem;