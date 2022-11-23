import { useContext } from 'react';
import SectionPlaylist from '../../components/SectionPlaylist/SectionPlaylist';
import NewMusic from '../../layouts/components/NewMusic/NewMusic';
import Slides from '../../layouts/components/Slides/Slides';
import { ThemeContext } from '../../layouts/defaultLayout/DefaultLayout';

function Discovery() {
    const data = useContext(ThemeContext);
    return (
        <div>
            <Slides />
            <NewMusic />
            <SectionPlaylist />
        </div>
    );
}

export default Discovery;
