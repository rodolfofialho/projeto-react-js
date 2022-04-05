import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Link from './links';
import Error from './pages/Error';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Link/>}/>
                <Route path="*"element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;