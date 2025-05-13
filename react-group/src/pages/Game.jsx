import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { decodeEntity } from "html-entities";
import Form from "../components/Form.jsx";
import MemoryCard from "../components/MemoryCard.jsx";
import GameOver from "../components/GameOver.jsx";
import ScoreBoard from "../components/ScoreBoard.jsx";

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [username, setUsername] = useState("");
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [allMatched, setAllMatched] = useState(false);
  const [score, setScore] = useState(0);

  //USERNAME SHOWED ON THE GAME
  useEffect(() => {
    const savedUsername = localStorage.getItem("currentUsername");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  //END GAME WHEN ALL CARDS ARE MATCHED
  useEffect(() => {
    //CHECK ARRAY NOT EMPTY AND IF MATCHED ALL EMOJIS
    if (matchedCards.length === emojisData.length && emojisData.length) {
      setAllMatched(true);
    }
  }, [matchedCards]);
  //TRACK MATCHES WHENEVER CARD SELECTED
  useEffect(() => {
    //VERIFY AT LEAST 2 CARDS SELECTED & NAMES MATCH EXACTLY
    if (
      selectedCards.length === 2 &&
      selectedCards[0].name === selectedCards[1].name
    ) {
      //ADD CURRENT MATCHED OBJECTS TO ALL PREVIOUS MATCHED OBJECTS
      setMatchedCards((previous) => [...previous, ...selectedCards]);
      setScore((previous) => (previous = previous + 1));
    }
  }, [selectedCards]);

  async function startGame(e) {
    //PREVENT BUTTON FROM DEFAULT FORM ACTION
    e.preventDefault();

    try {
      //FETCH THE API EMOJIS
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );

      //CHECK IF RESPONSE IS OK
      if (!response.ok) {
        throw new Error("Could not fetch data from API");
      } //END OF IF

      const data = await response.json();
      const dataSlice = getDataSlice(data);
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      //TURN GAME ON
      setIsGameOn(true);
    } catch (err) {
      console.log(err);
    } //END OF TRY CATCH
  } //END OF STARTGAME FUNCTION

  function getDataSlice(data) {
    //GET THE RANDOM INDICES
    const randomIndices = getRandomIndices(data);

    //PULL THE INDICES FROM THE API DATA
    const dataSlice = randomIndices.map((index) => data[index]);

    //RETURN THE RANDOMLY SELECTED API DATA
    return dataSlice;
  } //END OF GET DATA SLICE

  function getRandomIndices(data) {
    const randomIndicesArray = [];

    for (let i = 0; i < 3; i++) {
      const randomNum = Math.floor(Math.random() * data.length);

      //IF RANDOM INDEX NOT ALREADY SELECTED ADD TO ARRAY
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        //IF INDEX ALREADY PICKED REPICK
        i--;
      }
    }

    return randomIndicesArray;
  } //END OF RANDOMINDICES

  function getEmojisArray(data) {
    //DUPLICATE THE ARRAY AND SPREAD VALUES INTO LARGER ARRAY
    const pairedEmojisArray = [...data, ...data];

    //SHUFFLE ARRAY USING FISHER-YATES ALGORITHM
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }

    return pairedEmojisArray;
  } //END OF GETEMOJISARRAY

  function turnCard(name, index) {
    //STORE THE INDEX OF SELECTED CARD
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index == index
    );

    //CHECK SAME CARD NOT SELECTED AND 1 OR LESS CARDS PICKED
    if (!selectedCardEntry && selectedCards.length < 2) {
      //STORE THE PREVIOUS CARD SELECTION
      setSelectedCards((previous) => [
        ...previous,
        { name: name, index: index },
      ]);
    } else if (!selectedCardEntry && selectedCards.length === 2) {
      //OVERRITE SELECTION WITH NEW CARDS
      setSelectedCards([{ name: name, index: index }]);
    }
  } //END OF TURNCARD

  function resetGame() {
    setIsGameOn(false);
    setSelectedCards([]);
    setMatchedCards([]);
    setAllMatched(false);
    setScore(0);
  }

  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("currentUsername");
    navigate("/loginform");
  }

    return (
      <main className="min-h-screen flex flex-col items-center justify-center relative bg-linear-to-r from-pink-500 via-red-500 to-orange-500 p-8">
        {username && (
            <div className="absolute top-4 right-4">
                <button
                    onClick={handleLogout}
                    className="text-xl font-semibold px-6 py-3 bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition text-pink-50"
            >
              Logout
            </button>
          </div>
        )}

         <h1>Memory/MatchMoji</h1>

         {username && (
            <p className="text-rose-50 text-lg mb-4">
              Great to see you {username}! Ready to match some emojis?
            </p>
         )}

        {allMatched && <GameOver handleClick={resetGame} />}
        {isGameOn && <ScoreBoard score={score} allMatched={allMatched} />}
        <div className="gameboard bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-3/4 border border-white/20">
          {!isGameOn && <Form handleSubmit={startGame} />}
          {isGameOn && (
            <MemoryCard
              handleClick={turnCard}
              data={emojisData}
              selectedCards={selectedCards}
              matchedCards={matchedCards}
            />
          )}
        </div>
      </main>
    );
  }

