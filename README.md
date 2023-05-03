# Hangman game

This is a stundent project hangman game. I chose to make a hangman game because I thought it would be fun to code with react. I utilized TypeScript with React to make this game. 

I chose to use Vite over Create-React-App for its inbuilt support for tsx. Making this project I learnt a lot about using TypeScript aswell as conditional rendering in react.

## Introduction

This is a learning project in which I wanted to learn how to use TypeScript as it was one of our course subjects.

1. Select a random word from imported json file with this function 
```
function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}
```
2. Create equal amount of black lines under the word as word length
```
{guessWord.split("").map((letter, index) => (
    <span style={{ borderBottom: '.1em solid black' }} key={index}>
    </span>
))}
```
3. Multiple react hooks to keep track of guessed letters, incorrect letters and correct letters.
4. Checks after every guessed letter to check if user has won or lost
5. End popup to let the user know if they won or lost as well as play again button

## Used technologies

I have utilized the following technologies to make this project

[x] React

[x] TypeScript

[x] Vite

## App.tsx

The app runs only on the loaded page with multiple components imported. All the communication with user is done by conditional rendering react components and with an endgame popup screen. 

## Summary

This project has made me to study one of this courses subjects, TypeScript more deeply. 

During this project I learnt how to make TypeScript types such as this type for the Popup component
```
type PopupProps = {
correctLetters: boolean
wrongLetters: string[]
selectedWord: string
playAgain: () => void
}
```
So when a react component receives props TypeScript knows what type those props are

## Sources

I have used this video guide from **TraversyMedia** to help me with this project https://youtu.be/jj0W8tYX_q8

I have also used the aforementioned video creators github project https://github.com/codeSTACKr/hangman-react

