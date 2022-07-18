import React from 'react'
import ButtonGroupTwo from './ButtonGroupTwo'
import ButtonGroupOne from './ButtonGroupOne'

export default function MainInfo(props) {
  let mainBackgroundColor, mainButtonStyle, blurbColor;
  if (props.colorStyle === "dark") {
    mainBackgroundColor = "mainInfoDark" 
    blurbColor = "blurbDark"
  } else {
    mainBackgroundColor = "mainInfoLight"
    blurbColor = "blurbLight"
  }
  props.buttonStyle === "two" ?
    mainButtonStyle = <ButtonGroupTwo /> :
    mainButtonStyle = <ButtonGroupOne />

  return (
    <div className="mainInfo" id={mainBackgroundColor}>
      <h1>Vincent Bradbury</h1>
      <h2>Frontend Developer</h2>
      <p>vincent.bradbury223@gmail.com</p>
      {mainButtonStyle}
      <div className="blurb" id={blurbColor}>
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and intuitive. I try to keep up with aesthetics and best practices, and am always looking for new things to learn.</p>
        <h2>Interests</h2>
        <p>Food eater and maker. History and sci-fi reader. Meme-connoisseur. Small-time entrepreneur. Aviation geek. Former athlete. Dark-beer enthusiast.</p>
      </div>
    </div>
  )
}