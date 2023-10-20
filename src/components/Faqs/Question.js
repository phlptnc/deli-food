import React, { useState } from "react"
import faqsData from "./Data"

function Question() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <>
            {faqsData.map((item, i) => (
                <div className="faqs-container" onClick={() => toggle(i)}>
                    <div className="question-container">
                        <h3>{item.question}</h3>
                        <span>{selected === i ? "-" : "+"}</span>
                    </div>
                    <p className={selected === i ? "content-show" : "content"}>
                        {item.answer}
                    </p>
                </div>
            ))}
        </>
    )
}

export default Question
