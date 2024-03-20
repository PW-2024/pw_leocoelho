import { useSelector, useDispatch  } from "react-redux";

export default function Counter(){
    const value = useSelector((state) => state.value)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch({type: 'increment'})}>
                Increment
            </button>
            
            <span>{value}</span>
        </div>
    )
}