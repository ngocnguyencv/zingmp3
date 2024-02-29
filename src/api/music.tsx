import axios from "axios"

export const apiGetSong = (sid: any) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'https://api-zingmp3-vercel.vercel.app/api/song',
            method: 'get',
            params: { id: sid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDetailSong = (sid: any) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'https://api-zingmp3-vercel.vercel.app/api/infosong',
            method: 'get',
            params: { id: sid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
    console.log(apiGetDetailSong)
})
export const apiGetDetailPlaylist = (pid: any) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'https://api-zingmp3-vercel.vercel.app/api/detailplaylist',
            method: 'get',
            params: { id: pid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetChartHome = (pid: any) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'https://api-zingmp3-vercel.vercel.app/api/charthome',
            method: 'get',
            params: { id: pid }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

