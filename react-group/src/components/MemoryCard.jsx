import { decodeEntity } from "html-entities"

export default function MemoryCard({ handleClick, data }) {


    const emojiEl = data.map((emoji, index) =>

        //USING PROVIDED ARRARY CREATE GAME BOARD
        <li key={index} className="card-item">
            <button
                className="btn btn--emoji"
                //RUN ONLY WHEN CARD IS CLICKED 
                onClick={() => handleClick(emoji.name, index)}
            >
                {decodeEntity(emoji.htmlCode[0])}
            </button>
        </li>
    )
    
    return <ul className="card-container">{emojiEl}</ul>
}