import { useState, useCallback } from 'react'
import words from './wordList.json'
import Drawing from './components/Drawing';
import { Word } from './components/Word';
import { Keyboard } from './components/Keyboard';
import Popup from './components/Popup'
import styles from './App.module.css'

//Get random word
function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {

  const [guessWord, setGuessWord] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !guessWord.includes(letter)
  )

  //Add the guessed word to an array
  const addGuessedLetter = useCallback((key: string) => {

    setGuessedLetters(currentLetters => [...currentLetters, key])
  }, [guessedLetters])

  //6 bodyparts. Lose when 6 wrong guesses
  const wrongGuesses = incorrectLetters.length >= 6

  //Winner when all guessed letters are in guessWord
  const correctGuesses = guessWord.split('').every(letter =>
    guessedLetters.includes(letter))

  function getNewWord() {
    setGuessWord(getWord())
    setGuessedLetters([])
  }


  return (
    <div className={styles.gamecontainer}>
      {wrongGuesses && <Popup correctLetters={correctGuesses} wrongLetters={incorrectLetters} selectedWord={guessWord} playAgain={getNewWord} />}
      {correctGuesses && <Popup correctLetters={correctGuesses} wrongLetters={incorrectLetters} selectedWord={guessWord} playAgain={getNewWord} />}
      <div className={styles.gamecontainerchild}>
        <Drawing numberOfGuesses={incorrectLetters.length} />
        <Word reveal={wrongGuesses} guessedLetters={guessedLetters} guessWord={guessWord} />
      </div>
      <div className={styles.keyboardappcontainer}>
        <Keyboard
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
