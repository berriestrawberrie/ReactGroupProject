import { useState} from 'react'
import { decodeEntity } from 'html-entities'
import Form from './components/Form.jsx'
import MemoryCard from './components/MemoryCard.jsx'

export default function App() {
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([]);

    
    async function startGame(e) {
        //PREVENT BUTTON FROM DEFAULT FORM ACTION
        e.preventDefault()

        try{
          //FETCH THE API EMOJIS
          const response = await fetch('https://emojihub.yurace.pro/api/all/category/animals-and-nature')

          //CHECK IF RESPONSE IS OK 
          if(!response.ok){
            throw new Error("Could not fetch data from API")
          }//END OF IF

          const data = await response.json()
          const dataSlice = getDataSlice(data)
          const emojisArray = getEmojisArray(dataSlice)


           setEmojisData(emojisArray)
           //TURN GAME ON
            setIsGameOn(true)

          }catch(err){
            console.log(err)

        }//END OF TRY CATCH

    }//END OF STARTGAME FUNCTION
    
    function getDataSlice(data){

        //GET THE RANDOM INDICES
        const randomIndices = getRandomIndices(data)

        //PULL THE INDICES FROM THE API DATA
        const dataSlice = randomIndices.map(index => data[index])
        
        //RETURN THE RANDOMLY SELECTED API DATA
        return dataSlice
    }//END OF GET DATA SLICE

    function getRandomIndices(data){
        const randomIndicesArray= []

        for(let i=0; i< 5; i++){
             const randomNum = Math.floor(Math.random() * data.length)

            //IF RANDOM INDEX NOT ALREADY SELECTED ADD TO ARRAY
             if(!randomIndicesArray.includes(randomNum)){
                randomIndicesArray.push(randomNum)
             }else{
                //IF INDEX ALREADY PICKED REPICK
                i--
             }
        }

        return randomIndicesArray

    }//END OF RANDOMINDICES 

    function getEmojisArray(data){
        //DUPLICATE THE ARRAY AND SPREAD VALUES INTO LARGER ARRAY
        const pairedEmojisArray = [...data,...data]

        //SHUFFLE ARRAY USING FISHER-YATES ALGORITHM
        for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = pairedEmojisArray[i]
            pairedEmojisArray[i] = pairedEmojisArray[j]
            pairedEmojisArray[j] = temp
        }

        return pairedEmojisArray

    }//END OF GETEMOJISARRAY

    function turnCard(name, index) {

        //TEST BUTTON CLICK MEMORY CARD
        console.log(`The emoji name is ${name} and the index is: ${index}`)
    }//END OF TURNCARD
    
    return (
        <main>
            <h1>Memory</h1>
            {!isGameOn && <Form handleSubmit={startGame} />}
            {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
        </main>
    )
}