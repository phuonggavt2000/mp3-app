import Control from '../components/Control/Control';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import { Outlet } from 'react-router-dom';
import Player from '../components/Player/Player';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { getDetailPlaylist, getInfo, getSong } from '../../services/homeService';
import ModalSm from '../../components/Modal/Modal';
import { dataHome } from '../../data/data';

export const ThemeContext = createContext();

function DefaultLayout() {
    const [smShow, setSmShow] = useState(false);

    const handleChangeSong = (id) => {
        const getData = async () => {
            setData((prev) => {
                return {
                    ...prev,
                    loading: true,
                };
            });

            const infoSong = await getInfo(id);
            const song = await getSong(id);
            const dataSong = song.data;

            if (dataSong.err === 0) {
                const { thumbnailM, title, artistsNames, duration } = infoSong.data.data;
                const audio = dataSong.data[128];
                const dataAudio = {
                    img: thumbnailM,
                    name: title,
                    adult: artistsNames,
                    linkAudio: audio,
                    time: duration,
                };

                setData((prev) => {
                    return {
                        ...prev,
                        player: dataAudio,
                        playing: true,
                        loading: false,
                    };
                });
            } else {
                setSmShow(true);
                setData((prev) => {
                    return {
                        ...prev,
                        loading: false,
                        playing: false,
                    };
                });
            }
        };

        getData();
    };

    const controlMusic = () => {
        setData((prev) => {
            const playing = !prev.playing;
            return { ...prev, playing: playing, loading: false };
        });
    };

    const getPlaylist = (id) => {
        setData((prev) => {
            return {
                ...prev,
                loadPage: true,
            };
        });

        const getData = async () => {
            const detailPlaylist = await getDetailPlaylist(id);

            setData((prev) => {
                return {
                    ...prev,
                    detailPlaylist: detailPlaylist.data.data,
                    loadPage: false,
                };
            });
        };

        getData();
    };

    const defaultData = {
        player: {},
        detailPlaylist: {},
        banner: [],
        newMusic: [],
        playlist: [],
        music: [],
        playing: false,
        loading: true,
        loadPage: false,
        methodRenderSong: handleChangeSong,
        methodControlMusic: controlMusic,
        methodGetPlaylist: getPlaylist,
        currentMusic: 0,
    };

    const [data, setData] = useState(defaultData);

    useEffect(() => {
        const getData = async () => {
            const items = dataHome.data.items;

            const banner = items.find((item) => item.viewType === 'slider');
            const newMusic = items.find((item) => item.sectionType === 'new-release');
            const playList = items.find((item) => item.sectionType === 'playlist');

            setData({ ...data, banner, newMusic, playlist: playList });
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
            <ModalSm smShow={smShow} onHide={() => setSmShow(false)} />
        </ThemeContext.Provider>
    );
}

export default DefaultLayout;
