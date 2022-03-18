import React from "react";
import Questions from "./Questions.js"

export default function Main(props) {
    const {advanced, toggle} = props;
    const css = `start ${advanced ? "hidden" : ""}`;

    return (
        <main>
            <section className={css}>
                <img src="/images/logo.png" alt="ZapRecall Logo" />
                <h1>ZapRecall</h1>
                <button onClick={toggle}>Iniciar Recall!</button>
            </section>

            {advanced ? <Questions /> : <></>}
        </main>
    )
}