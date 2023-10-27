import React from "react"
import Hero from "../components/Hero/Hero"
import ChooseUs from "../components/ChooseUs/ChooseUs"
import List from "../components/List/List"
import Menu from "../components/Menu/Menu"
import Feedback from "../components/Feedback/Feedback"
import Faqs from "../components/Faqs/Faqs"

function Home() {
    return (
        <>
            <Hero />
            <ChooseUs />
            <List />
            <Menu />
            <Feedback />
            <Faqs />
        </>
    )
}

export default Home
