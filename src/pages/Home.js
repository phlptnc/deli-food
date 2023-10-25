import React from "react"
import Hero from "../components/Hero/Hero"
import Faqs from "../components/Faqs/Faqs"
import Feedback from "../components/Feedback/Feedback"
import Menu from "../components/Menu/Menu"

function Home() {
    return (
        <>
            <Hero />
            <Menu />
            <Feedback />
            <Faqs />
        </>
    )
}

export default Home
