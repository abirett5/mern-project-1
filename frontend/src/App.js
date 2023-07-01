// import './App.css';
// import Footer from './components/Footer/footer';
// import Header from './components/Header/header';
// import LandingPage from './screens/LandingPage/LandingPage';

// const App = () => (
//     <>
//     <Header />
//     <main>
//         <LandingPage />
//     </main>

//     <Footer />
//     </>
// )

// export default App;

import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import LandingPage from './screens/LandingPage/LandingPage';
import BrowserRouter from 'react-router-dom';
import Route from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => (
    <BrowserRouter>
    <Header />
    <main>
        <Route path='/' Component={LandingPage} exact/>
        <Route path='/mynotes' Component={()=><MyNotes />}/>
    </main>

    <Footer />
    </BrowserRouter>
)

export default App;