import { useContext } from 'react';
import Artist from '../../components/Artist/Artist';
import SectionPlaylist from '../../components/SectionPlaylist/SectionPlaylist';
import NewMusic from '../../layouts/components/NewMusic/NewMusic';
import Slides from '../../layouts/components/Slides/Slides';
import WeekChart from '../../layouts/components/WeekChart/WeekChart';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';

function Discovery() {
    const { playlist, mix, playlist2, methodGetPlaylist, weekChart, artistSpotlight } = useContext(ThemeContext);
    console.log('playlist', playlist);
    console.log('playlist2', playlist2);
    console.log('artistSpotlight', artistSpotlight);

    return (
        <div>
            <Slides />
            <NewMusic />
            <SectionPlaylist title={playlist.title} playlist={playlist.items} getPlaylist={methodGetPlaylist} />
            <Artist title={mix.title} artists={mix.items} getPlaylist={methodGetPlaylist} />
            <SectionPlaylist
                title={playlist2.title}
                playlist={playlist2.items}
                getPlaylist={methodGetPlaylist}
                artist
            />
            <WeekChart items={weekChart.items} />
            <Artist artists={artistSpotlight.items} getPlaylist={methodGetPlaylist} />
        </div>
    );
}

export default Discovery;
