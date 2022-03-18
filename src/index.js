import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';

const divRoot = document.querySelector(".root");

function App() {

    const [advanced, setAdvanced] = React.useState(false)

    return (
        <>
            {advanced ? <Header /> : <></>}
            <Main toggle={() => {setAdvanced(!advanced)}} advanced={advanced} />
            {advanced ? <Footer /> : <></>}
        </>
    )
}

ReactDOM.render(<App />, divRoot);