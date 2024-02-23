import actionTypes from "./actionType";

export const setCurSongId = (sid: any) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})
export const play = (flag: any) => ({
    type: actionTypes.PLAY,
    flag
})