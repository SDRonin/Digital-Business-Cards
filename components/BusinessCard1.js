import React from 'react'
import ProfilePic from './ProfilePic'
import MainInfo from './MainInfo'
import SocialMedia from './SocialMedia'

export default function Rectangle() {
    const colorStyle = "dark"
    const buttonStyle = "two"
    return (
        <div id="bc1" className="card--background">
            <ProfilePic />
            <MainInfo colorStyle={colorStyle} buttonStyle={buttonStyle} />
            <SocialMedia colorStyle={colorStyle} buttonStyle={buttonStyle} />
        </div>
    )
}