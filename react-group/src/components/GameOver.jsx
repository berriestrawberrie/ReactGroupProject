import RegularButton from "./ReqgularButton"
import {useRef, useEffect} from 'react'

export default function GameOver({handleClick}){

    const ref = useRef(null)

    useEffect(()=>{
        ref.current.focus()

    },[])
      
    return (
        <div className="wrapper wrapper--accent bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-3/4 border border-white/20" ref={ref} tabIndex={-1}>
            <p className="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play again?
            </RegularButton>
        </div>
    )
}