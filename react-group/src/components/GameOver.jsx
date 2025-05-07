import RegularButton from "./ReqgularButton"
import {useRef, useEffect} from 'react'

export default function GameOver({handleClick}){

    const ref = useRef(null)

    useEffect(()=>{
        ref.current.focus()

    },[])
      
    return (
        <div className="wrapper wrapper--accent" ref={ref} tabIndex={-1}>
            <p className="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play again?
            </RegularButton>
        </div>
    )
}