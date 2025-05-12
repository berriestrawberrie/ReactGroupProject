import { decodeEntity } from "html-entities"

export default function EmojiButtion({
    content,
    handleClick,
    selectedCardEntry,
    matchedCardEntry,
    index,
    name
    }){
    
        
    //IF BUTTON SELECTED OR MATCHED SHOW EMOJI OTHWERWISE DISPLAY QUESTIONMARK
    const btnContent = selectedCardEntry || matchedCardEntry ? content : "?"
    
    const btnAria =

        matchedCardEntry ? `${decodeEntity(name)}. Matched.` :
        selectedCardEntry ? `${decodeEntity(name)}. Not matched yet.`:
        "Card not turned"

    const btnStyle =
        //IF MATCHED CARD ADD MATCH STYLING
        matchedCardEntry ? "btn--emoji__back--matched" :
        //IF SELECTED CARD ADD SELECTED STYLING
        selectedCardEntry ? "btn--emoji__back--selected" :
        //OTHERWISE APPLY DEFAULT STYLING
        "btn--emoji__front"

    return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            //RUN ONLY WHEN CARD IS CLICKED 
            onClick={handleClick}
            //IF MATCHED TRUE DISABLE CARD
            disabled={matchedCardEntry}
            aria-label={`Position ${index+1}: ${btnAria}`}
            aria-live="polite"            >
            {btnContent}
            
        </button>
    )
}
