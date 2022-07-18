import React from 'react'
import BusinessCard1 from './components/BusinessCard1'
import BusinessCard2 from './components/BusinessCard2'
import BusinessCard3 from './components/BusinessCard3'
import BusinessCard4 from './components/BusinessCard4'

export default function Page() {
    return (
        <div className="introCard">
            <BusinessCard1 />
            <BusinessCard2 />
            <BusinessCard3 />
            <BusinessCard4 />
        </div>
    )
}