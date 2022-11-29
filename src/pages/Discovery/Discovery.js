import { useContext, useEffect, useState } from 'react';
import SectionPlaylist from '../../components/SectionPlaylist/SectionPlaylist';
import NewMusic from '../../layouts/components/NewMusic/NewMusic';
import Slides from '../../layouts/components/Slides/Slides';
import { ThemeContext } from '../../layouts/defaultLayout/DefaultLayout';

function Discovery() {
    const data = useContext(ThemeContext);
    const [playlist, setPlaylist] = useState({});
    useEffect(() => {
        if (data.playlist) {
            setPlaylist(data.playlist);
        }
    }, [data.playlist]);

    return (
        <div>
            <Slides />
            <NewMusic />
            <SectionPlaylist title={playlist.title} playlist={playlist.items} getPlaylist={data.methodGetPlaylist} />
        </div>
    );
}

export default Discovery;
