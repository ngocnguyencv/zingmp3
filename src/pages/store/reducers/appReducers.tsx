
import actionTypes from "../actions/actionType";

interface AppState {
    banner: Array<any>;
    friday: object;
    albumhot: object;
    remix: object;
    chill: object;
    xone: object;
    newRelease: object;
    weekChart: Array<any>;
    favoritedArtist: object;
    chart: any;
    rank: any;
}

const initState: AppState = {
    banner: [],
    friday: {},
    chill: {},
    albumhot: {},
    remix: {},
    xone: {},
    newRelease: {},
    weekChart: [],
    favoritedArtist: {},
    chart: {},
    rank: [],
}

const appReducer = (state: AppState = initState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find((item: any) => item.sectionId === 'hSlider')?.items || null,
                friday: action.homeData?.find((item: any) => item.sectionId === 'h100') || {},
                chill: action.homeData?.find((item: any) => item.sectionId === 'hEditorTheme') || {},
                albumhot: action.homeData?.find((item: any) => item.sectionId === 'hAlbum') || {},
                remix: action.homeData?.find((item: any) => item.sectionId === 'hEditorTheme3') || {},
                xone: action.homeData?.find((item: any) => item.sectionId === 'hLiveRadio') || {},
                newRelease: action.homeData?.find((item: any) => item.sectionType === 'new-release') || {},
                weekChart: action.homeData?.find((item: any) => item.sectionType === 'weekChart')?.items || {},
                favoritedArtist: action.homeData?.find((item: any) => item.sectionId === 'hMix') || {},
                chart: action.homeData?.find((item: any) => item.sectionId === 'hZC')?.chart || {},
                rank: action.homeData?.find((item: any) => item.sectionId === 'hZC')?.items || [],
            }
        default:
            return state
    };
}

export default appReducer;