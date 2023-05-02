import styles from '../App.module.css'

type drawingProps = {
    numberOfGuesses : number
}

const Drawing = ({ numberOfGuesses }:drawingProps) => {
    const guesses = numberOfGuesses
  
    return (
      <svg height="250" width="200" className={styles.figurecontainer}>
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />
  
        {guesses > 0 &&
          <circle cx="140" cy="70" r="20" />
        }

        {guesses > 1 &&
          <line x1="140" y1="90" x2="140" y2="150" />
        }

        {guesses > 2 &&
          <line x1="140" y1="120" x2="120" y2="100" />
        }
        {guesses > 3 &&
          <line x1="140" y1="120" x2="160" y2="100" />
        }

        {guesses > 4 &&
          <line x1="140" y1="150" x2="120" y2="180" />
        }
        {guesses> 5 &&
          <line x1="140" y1="150" x2="160" y2="180" />
        }
      </svg>
    )
  }
  
  export default Drawing