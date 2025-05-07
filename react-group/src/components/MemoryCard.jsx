import { decodeEntity } from "html-entities"
import EmojiButton from '../components/EmojiButton'

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {


    const cardEl = data.map((emoji, index) => {

        const selectedCardEntry = selectedCards.find(emoji => emoji.index == index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index == index)

        const cardStyle = 
        //IF MATCHED CARD ADD MATCH STYLING
        matchedCardEntry ? "card-item--matched" :
        //IF SELECTED CARD ADD SELECTED STYLING
        selectedCardEntry ? "card-item--selected" :
        //OTHERWISE APPLY DEFAULT STYLING
         ""


        //USING PROVIDED ARRARY CREATE GAME BOARD
       return( <li key={index} className={`card-item ${cardStyle}`}>
            <EmojiButton
                content={decodeEntity(emoji.htmlCode[0])}
                //RUN ONLY WHEN CARD IS CLICKED 
                handleClick={() => handleClick(emoji.name, index)}
                selectedCardEntry={selectedCardEntry}
                matchedCardEntry={matchedCardEntry}
                index={index}
                emoji={emoji.name}

            />
                
            
        </li>
        )//END OF RETURN
    })//END OF MAP METHOD
    
    return <ul className="card-container">{cardEl}</ul>
}