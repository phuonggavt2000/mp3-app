import Control from '../components/Control/Control';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import { Outlet } from 'react-router-dom';
import Player from '../components/Player/Player';

function DefaultLayout() {
    return (
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
    );
}

export default DefaultLayout;
