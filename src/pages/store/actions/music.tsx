import { apiSearch } from "../../../api";
import actionTypes from "./actionType";
import * as apis from "../../../api"

export const setCurSongId = (sid: any) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})
export const play = (flag: any) => ({
    type: actionTypes.PLAY,
    flag
})
export const search = (keyword: string) => (async (dispatch: any) => {
    try {
        const response: any = await apis.apiSearch(keyword)
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.SEARCH,
                data: response.data.data
            })
        } else {
            dispatch({
                type: actionTypes.SEARCH,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.SEARCH,
            data: null
        })
    }

})