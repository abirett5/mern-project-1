import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => (
    <BrowserRouter>
    <Header />
    <main>
        <Route path='/' Component={LandingPage}/>
        <Route path='/mynotes' Component={()=><MyNotes />}/>
    </main>

    <Footer />
    </BrowserRouter>
)

export default App;