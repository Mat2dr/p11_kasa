import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar, Feed, About, LogementDetail, Footer } from './components';

const App = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/logement/:id" element={<LogementDetail />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

export default App