import { useState, useCallback } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  
  const [guessWord, setGuessWord] = useState(getWord) 
  const [guessedLetters, setGuessedLetters] = useState<string[]>([ ])

  const incorrectLetters = guessedLetters.filter(
    letter => !guessWord.includes(letter)
  )

  function getNewWord() {
    setGuessWord(getWord())
    setGuessedLetters([])
  }
  

  const addGuessedLetter = useCallback((key: string) => {
    if (guessedLetters.includes(key)) return

    setGuessedLetters(currentLetters => [...currentLetters, key])
  }, [guessedLetters])

  //6 bodyparts
  const isLoser = incorrectLetters.length >= 6
  const isWinner = guessWord.split('').every(letter => 
    guessedLetters.includes(letter))

  console.log(guessWord);
  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'
     }}>
      <div style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        {isWinner && 'Winner!'}
        {isLoser && 'Loser!'}
      
      </div>
      <div>
        <button onClick={() => getNewWord()}>Reset</button>
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessedLetters = { guessedLetters } guessWord = { guessWord } />
      <div style={{ alignSelf: 'stretch'}}>
        <Keyboard 
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter => 
            guessWord.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          />
      </div>
    </div>
  )
}

export default App
