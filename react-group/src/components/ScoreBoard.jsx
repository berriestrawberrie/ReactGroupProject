import { useState, useEffect } from "react";

export default function ScoreBoard({score, allMatched}){

    const mode = 10

    const [time, setTime] = useState(mode)
    
    /*//TIMER INTERVAL
    useEffect(() => {
        let timer = setInterval(() => {
          setTime((time) => {
            //IF ALL MATCHED END GAME AND RETAIN TIME LEFT
            if(allMatched){
              return 0
            }
            //IF TIME RUNS OUT STOP TIMER
            if (time === 0 ) {
              clearInterval(timer)
                return 0
            } else return time - .5
          })
        }, 1000)//END OF SET TIMER

      }, []);
    */

    return(
        <>
            
            <div className="flex w-md justify-evenly">
                <h2>Game Score</h2>
                <h2>{score}</h2>
                 {/*<p>
                Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
                {`${time % 60}`.padStart(2, 0)}
                </p>*/}
            </div>
        </>
    )

}