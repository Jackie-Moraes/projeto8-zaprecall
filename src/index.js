import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';

const divRoot = document.querySelector(".root");

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

ReactDOM.render(App(), divRoot);