import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from "../../api"

const Album = () => {
  const { title, pid } = useParams()

  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const resposive = await apis.apiGetDetailPlaylist(pid)
    }
  })
  return (
    <div>
      Album
    </div>
  )
}

export default Album