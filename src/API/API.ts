const defaultPath = '/songs'
import MusicCT from '../Controller/MusicCT';

export default [
    {
        method: 'POST',
        path: `${defaultPath}`,
        options: {
            handler: MusicCT.CreateSongs
        }
    },
    {
        method: 'GET',
        path: `${defaultPath}`,
        options: {
            handler: MusicCT.GetSongs
        }
    },
    {
        method: 'GET',
        path: `${defaultPath}/{id}`,
        options: {
            handler: MusicCT.GetSongById
        }
    },
    {
        method: 'PUT',
        path: `${defaultPath}/{id}`,
        options: {
            handler: MusicCT.UpdateSong
        }
    },
    {
        method: 'DELETE',
        path: `${defaultPath}/{id}`,
        options: {
            handler: MusicCT.DeleteSong
        }
    },
    {
        method: 'GET',
        path: `${defaultPath}/deleteAll`,
        options: {
            handler: MusicCT.DeleteAll
        }
    }
]