import 'tippy.js/dist/tippy.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publicRoutes from './routes/routes';
import DefaultLayout from './layouts/defaultLayout/DefaultLayout';
import config from './config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path={config.routes.home} element={<DefaultLayout />}>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route path={route.path} key={index} element={<Page />} />;
                        })}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
