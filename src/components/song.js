import React, { useState, useEffect } from 'react';

function Song() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {

        getSongsAsync();
    }, [])

    const getSongsAsync = async () => {

        let url = "https://assets.breatheco.de/apis/sound/songs"
        let options_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);

            setSongs(data);

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <ul className='list-group'>
            {
                !!songs && songs.length > 0 && songs.map((song, i) => {
                    return (
                        <li className='btn btn-dark m-0 rounded-0' onClick={


                            () => {
                                const track = new Sound(sound.url, null, (e) => {
                                    if (e) {
                                        console.log('error loading track:', e)
                                    } else {
                                        track.play()
                                    }
                                })
                            }


                        }
                            key={i}>
                            {song.name}
                            <audio id='audio' src={song.url}></audio>
                        </li>

                    )
                })
            }
        </ul>
    )
}


export default Song;

