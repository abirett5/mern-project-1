import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import LandingPage from './screens/LandingPage/LandingPage';

const App = () => (
    <>
    <Header />
    <main style={{minHeight:"93vh"}}></main>
    <LandingPage />

    <Footer />
    </>
)

export default App;

// Continue from 17:08