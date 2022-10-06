import React from 'react'
import BirthdayMessage from './components/BirthdayMessage'
import BirthdayData from './data/BirthdayData'

class App extends React.Component {
  componentWillMount() {
    document.body.style.background = BirthdayData.color
    document.querySelector('title').innerText = `Happy Birthday, ${BirthdayData.wishee}!`
    document.querySelector('.favicon').href = `./images/favicon-16x16.png`
    document.querySelector('.theme-color').content = BirthdayData.color
  }
  
  render() {
    return (
      <div className='App'>
        <BirthdayMessage birthdayData={BirthdayData}/>
        <audio src="../assets/mp3/birthday.mp3" id="my_audio" autoPlay></audio>
      </div>
    )
  }
}

export default App