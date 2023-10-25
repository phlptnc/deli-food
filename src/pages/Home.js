import React from "react"
import Hero from "../components/Hero/Hero"
import Faqs from "../components/Faqs/Faqs"
import Feedback from "../components/Feedback/Feedback"
import Menu from "../components/Menu/Menu"
import List from "../components/List/List"

function Home() {
    return (
        <>
            <Hero />
            <List />
            <Menu />
            <Feedback />
            <Faqs />
        </>
    )
}

export default Home
