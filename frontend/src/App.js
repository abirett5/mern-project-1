import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import LandingPage from './screens/LandingPage/LandingPage';

const App = () => (
    <>
    <Header />
    <main>
        <LandingPage />
    </main>

    <Footer />
    </>
)

export default App;