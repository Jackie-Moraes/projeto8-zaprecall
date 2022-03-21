import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';

const divRoot = document.querySelector(".root");

let valor = 0;

function App() {
    const [advanced, setAdvanced] = React.useState(false);
    const [acertos, setAcertos] = React.useState(0)

    function AtualizaValor(){
        setAcertos(acertos + 1)
        console.log(valor)
    }

    return (
        <>
            {advanced ? <Header /> : <></>}
            <Main toggle={() => {setAdvanced(!advanced)}} advanced={advanced} callback={AtualizaValor}/>
            {advanced ? <Footer valor={acertos}/> : <></>}
        </>
    )
}

ReactDOM.render(<App />, divRoot);