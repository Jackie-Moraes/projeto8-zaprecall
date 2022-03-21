import React from "react";

export default function Questions(props) {

    const perguntas = [{
        pergunta: "O que é JSX?",
        resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
    },
    {
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes"
    },
    {
        pergunta: "Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }];

    function somaValor(valor) {
        props.callback(valor);
    }

    function Pergunta(props) {
        const [selecionarPergunta, setSelecionarPergunta] = React.useState(false);
        const classCSS = `question-closed ${selecionarPergunta ? "hidden" : ""}`;

        return (
            <div className="question">
                <div className={classCSS}>
                    <h2>Pergunta {props.numero}</h2>
                    <img src="images/setinha.svg" alt="Abrir pergunta" onClick={() => {
                        const estado = !selecionarPergunta;
                        setSelecionarPergunta(estado);
                    }}>
                    </img>
                </div>
                {selecionarPergunta ? <Questao numero={props.numero} pergunta={props.pergunta} resposta={props.resposta} /> : <></>}
            </div>
            
        )
    }

    function Questao(props) {
        const [selecionarQuestao, setSelecionarQuestao] = React.useState(false);
        const classCSSQuestao = `question-open ${selecionarQuestao ? "hidden" : ""}`;

        const [red, setRed] = React.useState(false);
        const [orange, setOrange] = React.useState(false);
        const [green, setGreen] = React.useState(false);

        if(red) {
            return (
                <div className="question-closed did-not-remember">
                    <h2>Pergunta {props.numero}</h2>
                    <img src="images/red.svg" alt="Abrir pergunta"></img>
                </div>
            )
        } else if (orange) {
            return (
                <div className="question-closed almost-not-remember">
                    <h2>Pergunta {props.numero}</h2>
                    <img src="images/orange.svg" alt="Abrir pergunta"></img>
                </div>
            )
        } else if (green) {
            return (
                <div className="question-closed zap">
                    <h2>Pergunta {props.numero}</h2>
                    <img src="images/green.svg" alt="Abrir pergunta"></img>
                </div>
            )
        }   

        if (!selecionarQuestao) {
            return (
                <div className={classCSSQuestao}>
                    <h2>{props.pergunta}</h2>
                    <img src="images/setinha-volta.png" alt="Virar Card" onClick={() => {
                        const estado = !selecionarQuestao;
                        setSelecionarQuestao(estado);
                    }}>
                    </img>
                </div>
            )
            
        } else {
            return (
                <div className="question-open">
                    <h2>{props.resposta}</h2>
                    <div className="answers">
                        <button className="red" onClick={() => {
                            setRed(!red);
                            somaValor();
                        }}>Não lembrei</button>
                        <button className="orange" onClick={() => {
                            setOrange(!orange)
                            somaValor();
                        }}>Quase não lembrei</button>
                        <button className="green" onClick={() => {
                            setGreen(!green);
                            somaValor();
                        }}>Zap!</button>
                    </div>
                </div>
            )
        }
    }

    return (
        <section className="questions">
            {perguntas.map((p, index) => <Pergunta numero={index + 1} pergunta={p.pergunta} resposta={p.resposta} />)}
        </section>
    )
}