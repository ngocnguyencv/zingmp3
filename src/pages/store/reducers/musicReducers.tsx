import actionType from '../actions/actionType';
import { Reducer } from 'redux';

interface MusicState {
    curSongId: null | string;
    searchData: {}
}

const initState: MusicState = {
    curSongId: null,
    searchData: {}
}

const musicReducer: Reducer<MusicState, any> = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null
            }
        case actionType.SEARCH:
            return {
                ...state,
                searchData: action.data || {}
            }
        default:
            return state
    }
}

export default musicReducer;