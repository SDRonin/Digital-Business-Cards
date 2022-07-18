import React from 'react'

export default function ButtonGroupTwo() {
  return (
    <div className="buttonGroup">
      <div 
        className="buttonSmall"
        id="emailButton"
      >
        <img src="images/email-icon.png" alt="email-icon" />
        <span>Email</span>
      </div>
      <div
        className="buttonSmall"
        id="linkedInButton"
      >
        <img src="images/LinkedIn-icon.png" alt="LinkedIn-icon" />
        <span>LinkedIn</span>
      </div>
    </div>
  )
}