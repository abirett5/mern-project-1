import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => (
    <BrowserRouter>
    <Header />
    
        <main>
        <Routes>
            <Route path='/' element={<LandingPage />} exact/>
            <Route path='/mynotes' element={<MyNotes />} />
        </Routes>
        </main>
    
    <Footer />
    </BrowserRouter>
);

export default App;