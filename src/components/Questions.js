import React from "react";

export default function Questions() {

    const perguntas = [{
        pergunta: "O que é JSX?",
        resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
    },
    {
        pergunta: "O React é __",
        resposta:"uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta:"letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta:"expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __",
        resposta:"interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __",
        resposta:"gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __",
        resposta:"passar diferentes informações para componentes"
    },
    {
        pergunta: "Usamos estado (state) para __",
        resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }];

    const [pergunta, setPergunta] = React.useState(true);
    const [questao, setQuestao] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);

    function Pergunta(props) {

        return (
            <div className="question">
                {pergunta ? <div className="question-closed">
                    <h2>Pergunta {props.numero}</h2>
                    <img src="images/setinha.svg" alt="Abrir pergunta" onClick={() => 
                        {setPergunta(false) 
                            setQuestao(true)}}>
                        </img>
                </div> : <></>}
                {questao ? <Questao pergunta={props.pergunta}/> : <></>}
                {resposta ? <Resposta resposta={props.resposta}/> : <></>}
            </div>
        )
    }
    
    function Questao(props) {
        return (
            <div className="question-open">
                <h2>{props.pergunta}</h2>
                <img src="images/setinha-volta.png" alt="Virar Card" onClick={() =>
                    {setQuestao(false)
                        setResposta(true)}}>
                </img>
            </div>
        )
    }
    
    function Resposta(props) {
        return (
            <div className="question-open">
                <h2>{props.resposta}</h2>
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
            {perguntas.map((p, index) => <Pergunta numero={index+1} pergunta={p.pergunta} resposta={p.resposta}/>)}
        </section>
   )
}