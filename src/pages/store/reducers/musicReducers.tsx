import actionType from '../actions/actionType';
import { Reducer } from 'redux';

interface MusicState {
    curSongId: null | string;
}

const initState: MusicState = {
    curSongId: null
}

const musicReducer: Reducer<MusicState, any> = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null        
            }
        default:
            return state
    }
}

export default musicReducer;