export default function Questions() {
    return (
        <section className="questions">
            <div className="question question-closed">
                <h2>Pergunta 1</h2>
                <img src="images/setinha.svg" alt="Abrir pergunta"></img>
            </div>

            <div className="question question-open">
                <h2>O que é JSX?</h2>
                <img src="images/setinha-volta.png" alt="Virar Card"></img>
            </div>

            <div className="question question-open">
                <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
                <div className="answers">
                    <button className="red">Não lembrei</button>
                    <button className="orange">Quase não lembrei</button>
                    <button className="green">Zap!</button>
                </div>
            </div>
            
        </section>
   )
}