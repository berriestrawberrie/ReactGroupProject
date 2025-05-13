import RegularButton from "./ReqgularButton"
import {useRef, useEffect} from 'react'

export default function GameOver({handleClick, score}){

    const ref = useRef(null)

    useEffect(()=>{
        ref.current.focus()

    },[])
      
    return (
        <div className="wrapper wrapper--accent bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-3/4 border border-white/20" ref={ref} tabIndex={-1}>
            <h2 className="text-3xl bg-rose-500 p-4 rounded-4xl w-2/3">Final Score: {score} pts</h2>
            <p className="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play again?
            </RegularButton>
        </div>
    )
}