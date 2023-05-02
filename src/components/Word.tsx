import styles from '../App.module.css'

type WordProps = {
    reveal?: boolean
    guessedLetters: string[]
    guessWord: string
}

export function Word({ reveal = false, guessedLetters, guessWord }:
    WordProps) {

    return (
        <div className={styles.wordcontainer}>
            {guessWord.split("").map((letter, index) => (
                <span style={{ borderBottom: '.1em solid black' }} key={index}>
                    <span style={{
                        visibility: guessedLetters.includes(letter) || reveal
                            ? 'visible'
                            : 'hidden',
                        color: !guessedLetters.includes(letter) && reveal ?
                            "white" : "black"
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}