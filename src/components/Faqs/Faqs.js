import React from "react"
import Chef from "../../images/chef.png"
import Question from "./Question"
import "./Faqs.scss"

function Faqs() {
    /*const faqsElements = faqsData.map((faqs, i) => {
        return <Question />
    })*/

    return (
        <>
            <section className="faqs-section">
                <div className="left-section">
                    <img src={Chef} alt="img of a chef" />
                </div>
                <div className="right-section">
                    <div className="faqs-header">
                        <h2>Most Asked Question</h2>
                        <p>
                            Get the information you need quickly and esily with
                            our FAQ
                        </p>
                    </div>
                    <Question />
                </div>
            </section>
        </>
    )
}

export default Faqs
