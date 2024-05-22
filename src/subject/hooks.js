import { useContext } from "react";
import Context from "./Context";

function useSubject(){
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}
export {useSubject};