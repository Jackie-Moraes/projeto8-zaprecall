import Questions from "./Questions.js"

export default function Main() {
    return (
        <main>
            <section className='start hidden'>
                <img src="/images/logo.png" alt="ZapRecall Logo" />
                <h1>ZapRecall</h1>
                <button>Iniciar Recall!</button>
            </section>

            <Questions />
        </main>
    )
}