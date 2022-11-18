import Control from '../components/Control/Control';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import { Outlet } from 'react-router-dom';
import Player from '../components/Player/Player';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { home } from '../../services/homeService';

export const ThemeContext = createContext();

function DefaultLayout() {
    const defaultData = {
        banner: [],
    };
    const [data, setData] = useState(defaultData);
    console.log('data', data);

    useEffect(() => {
        const getData = async () => {
            const items = await home();
            console.log('items', items);

            const banner = items.find((item) => item.viewType === 'slider');

            setData({ ...data, banner });
        };

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ThemeContext.Provider value={data}>
            <div className="d-flex">
                <LeftSidebar />
                <div className="content">
                    <div className="content-header">
                        <Control />
                    </div>
                    <div className="content-container">
                        <Outlet></Outlet>
                    </div>
                    <Player />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default DefaultLayout;
