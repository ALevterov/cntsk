import GoogleMapReact from 'google-map-react'
// AIzaSyCkCszkPyGLpISweunZlyV2Z2_s_rkYwlA
// AIzaSyARN4ZLpzuzwGo2M6PKr2M--juR5zJyrew
export const Map = ({
  id,
  coords,
}: {
  id: string
  coords: { x: number; y: number }
}) => {
  return (
    <div style={{ width: '100%', height: '100%' }} id={id}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDcwGyRxRbcNGWOFQVT87A1mkxEOfm8t0w' }}
        defaultCenter={{ lat: coords.x, lng: coords.y }}
        defaultZoom={13}
      ></GoogleMapReact>
    </div>
  )
}
