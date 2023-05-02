import { useState, useCallback } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './components/Drawing';
import { HangmanWord } from './components/Word';
import { Keyboard } from './components/Keyboard';
import Popup from './components/Popup'
import styles from './App.module.css'

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {

  const [guessWord, setGuessWord] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !guessWord.includes(letter)
  )

  const addGuessedLetter = useCallback((key: string) => {
    if (guessedLetters.includes(key)) return

    setGuessedLetters(currentLetters => [...currentLetters, key])
  }, [guessedLetters])

  //6 bodyparts
  const isLoser = incorrectLetters.length >= 6
  const correctLetters = guessWord.split('').every(letter =>
    guessedLetters.includes(letter))

  function getNewWord() {

    setGuessWord(getWord())
    setGuessedLetters([])
  }

  return (
    <div className={styles.gamecontainer}>
      <div className={styles.gamecontainerchild}>
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} guessWord={guessWord} />
      {isLoser && <Popup correctLetters={correctLetters} wrongLetters={incorrectLetters} selectedWord={guessWord} playAgain={getNewWord} />}
      {correctLetters && <Popup correctLetters={correctLetters} wrongLetters={incorrectLetters} selectedWord={guessWord} playAgain={getNewWord} />}
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={correctLetters || isLoser}
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
