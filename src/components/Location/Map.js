import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

// local components
import MyMarker from './Marker'

// local styles
import { MapWrapper } from './Map.styled'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 47.524421833466945,
    longitude: 18.891564694194706,
    zoom: 15,
  })

  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
        mapStyle="mapbox://styles/ptrszb/ck63te37c0xo91iqlm7y6e13q"
        onViewportChange={vp => {
          setViewport({ ...vp })
        }}
        reuseMaps
      >
        <Marker
          latitude={47.524421833466945}
          longitude={18.891564694194706}
          offsetLeft={-25}
          offsetTop={-50}
        >
          <MyMarker />
        </Marker>
      </ReactMapGL>
    </MapWrapper>
  )
}

export default Map
