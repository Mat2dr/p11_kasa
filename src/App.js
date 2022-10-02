import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar, Feed, LogementDetail } from './components';

const App = () => (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/logement/:id" element={<LogementDetail />} />
        </Routes>
    </BrowserRouter>
);

export default App