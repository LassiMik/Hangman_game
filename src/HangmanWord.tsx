import styles from './App.module.css'

type HangmanWordProps = {
    reveal?: boolean
    guessedLetters: string[]
    guessWord: string
}

export function HangmanWord({ reveal=false, guessedLetters, guessWord }:
    HangmanWordProps) {

    return (
    <div className={styles.wordcontainer}
    >
        {guessWord.split("").map((letter, index) => (
            <span style={{ borderBottom: '.1em solid black' }} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                    color: !guessedLetters.includes(letter) && reveal ?
                    "red" : "black"
                }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
    )
}