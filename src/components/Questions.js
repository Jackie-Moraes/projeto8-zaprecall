import React from "react";

export default function Questions() {

    const perguntas = ["O que é JSX?", "O React é __", "Componentes devem iniciar com __", "Podemos colocar __ dentro do JSX", "O ReactDOM nos ajuda __", "Usamos o npm para __", "Usamos props para __", "Usamos estado (state) para __"]

    const [pergunta, setPergunta] = React.useState(true);
    const [questao, setQuestao] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);

    function Pergunta() {

        return (
            <div className="question-closed">
                <h2>Pergunta 1</h2>
                <img src="images/setinha.svg" alt="Abrir pergunta" onClick={() => 
                    {setPergunta(false) 
                        setQuestao(true)}}>
                    </img>
            </div>
        )
    }
    
    function Questao() {
        return (
            <div className="question-open">
                <h2>O que é JSX?</h2>
                <img src="images/setinha-volta.png" alt="Virar Card" onClick={() =>
                    {setQuestao(false)
                        setResposta(true)}}>
                </img>
            </div>
        )
    }
    
    function Resposta() {
        return (
            <div className="question-open">
                <h2>JSX é uma sintaxe para escrever HTML dentro do JS</h2>
                <div className="answers">
                    <button className="red" onClick={() => {
                        setResposta(false)
                        setPergunta(true)}}>
                            Não lembrei</button>
                    <button className="orange"onClick={() => {
                        setResposta(false)
                        setPergunta(true)}}>Quase não lembrei</button>
                    <button className="green" onClick={() => {
                        setResposta(false)
                        setPergunta(true)}}>Zap!</button>
                </div>
            </div>
        )
    }

    return (
        <section className="questions">
            <div className="question">
                {pergunta ? <Pergunta /> : <></>}
                {questao ? <Questao /> : <></>}
                {resposta ? <Resposta /> : <></>}
            </div>
        </section>
   )
}