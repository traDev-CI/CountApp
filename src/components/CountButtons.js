import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Count from './Count';
import './Count.css'

const CountButtons = () =>  {
    const [add, setAdd] = useState(0)

    const handledAdd = () => {
        if (add >= 10) {
            alert("You are out of the area")
        }else{
            setAdd(add + 1)
        }
    }
    const handlesRest = () =>{
        if (add <= 0) {
            alert("You are out of the area")
        }else{
            setAdd(add - 1)
        }
        
    }
    return (
        <>
            <div className="centered">
                <button onClick={handledAdd}>+</button>
                <button onClick={handlesRest}>-</button>
            </div>
            <Count num={add}></Count>
        </>
    )
}

export default CountButtons
