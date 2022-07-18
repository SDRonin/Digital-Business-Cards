import React from 'react'

export default function SocialMedia(props) {
  let socialMediaColor, socialImageURL;
  if (props.colorStyle === "dark" && props.buttonStyle === "two") {
    socialMediaColor = "socialMediaDark"
    socialImageURL = "images/socialmediagroup.png"
  } else if (props.colorStyle === "dark" && props.buttonStyle === "one") {
    socialMediaColor = "socialMediaDark"
    socialImageURL = "images/socialmediagroup-dark-five.png"
  } else if (props.colorStyle === "light" && props.buttonStyle === "two") {
    socialMediaColor = "socialMediaLight"
    socialImageURL = "images/socialmediagroup-light-four.png"
  } else if (props.colorStyle === "light" && props.buttonStyle === "one") {
    socialMediaColor = "socialMediaLight"
    socialImageURL = "images/socialmediagroup-light-five.png"
  }

  return (
    <div className="socialMedia" id={socialMediaColor}>
        <img src={socialImageURL} alt="social media icons" />
    </div>
  )
}