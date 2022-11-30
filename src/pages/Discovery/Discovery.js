import { useContext } from 'react';
import Artist from '../../components/Artist/Artist';
import SectionPlaylist from '../../components/SectionPlaylist/SectionPlaylist';
import NewMusic from '../../layouts/components/NewMusic/NewMusic';
import Slides from '../../layouts/components/Slides/Slides';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';

function Discovery() {
    const { playlist, mix, methodGetPlaylist } = useContext(ThemeContext);

    return (
        <div>
            <Slides />
            <NewMusic />
            <SectionPlaylist title={playlist.title} playlist={playlist.items} getPlaylist={methodGetPlaylist} />
            <Artist title={mix.title} artists={mix.items} getPlaylist={methodGetPlaylist} />
        </div>
    );
}

export default Discovery;
