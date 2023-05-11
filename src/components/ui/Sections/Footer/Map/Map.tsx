import { load } from '@2gis/mapgl'
import { useEffect } from 'react'

export const Map = ({
  id,
  coords,
}: {
  id: string
  coords: { x: number; y: number }
}) => {
  useEffect(() => {
    let map: any
    load().then(mapglAPI => {
      map = new mapglAPI.Map(id, {
        center: [coords.x, coords.y],
        zoom: 13,
        key: 'rudcgu3317',
      })
    })
    return () => map && map.destroy()
  }, [])

  return <div style={{ width: '100%', height: '100%' }} id={id}></div>
}
