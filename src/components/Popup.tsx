import styles from '../App.module.css'

type PopupProps = {
    correctLetters: boolean
    wrongLetters: string[]
    selectedWord: string
    playAgain: () => void
}

const Popup = ({ correctLetters, wrongLetters, selectedWord, playAgain }: PopupProps) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';

  if (wrongLetters.length === 6) {
    finalMessage = 'Unfortunately you lost!';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
  } else if (correctLetters) {
    finalMessage = 'Congratulations! You won!';
  }

  return (
    <div className={styles.popupcontainer} style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className={styles.popup}>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;