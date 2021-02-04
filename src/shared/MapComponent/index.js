import React, { useEffect, useState } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import mapStyles from './mapStyle'

const config = {
  zoomLevel: 16,
  latitudeForFocusingMap: '',
  longitudeForFocusingMap: '',
  markerLongitude: '',
  markerLatitude: '',
  apiKey: 'AIzaSyDdemVqJ1aRbCcbpPyc-tBxagqU0Rj1dSQ',
  useDefaultUI: false,
  googleMapsMarkerIcon: 'marker icon link'
}

function MapComponent(props) {
  if (props) {
    config.latitudeForFocusingMap = props.lat
    config.longitudeForFocusingMap = props.lng
    config.markerLongitude = props.lat
    config.markerLatitude = props.lng
  }

  const [zoomLevel, setZoomLevel] = useState(config.zoomLevel)
  const [lat, setLat] = useState(config.lat || 51.4934)
  const [lng, setLng] = useState(config.lng || 0.0098)
  const [state, setState] = useState({
    activeMarker: {},
    showingInfoWindow: false,
    text: ''
  })

  useEffect(() => {
    console.log(props)
    props && props.lng && setLng(props.lng)
    props && props.lat && setLat(props.lat)
  }, [props.lng, props.lat])

  const onMarkerClick = (props, marker) => {
    setState({
      ...state,
      activeMarker: marker,
      showingInfoWindow: true,
      text: marker.text || ''
    })
  }

  const onInfoWindowClose = () => {
    setState({
      activeMarker: null,
      showingInfoWindow: false
    })
  }

  return (
    <Map
      google={props.google}
      zoom={zoomLevel}
      yesIWantToUseGoogleMapApiInternals
      styles={mapStyles}
      style={{ width: '25%', height: '50%' }}
      disableDefaultUI={config.useDefaultUI}
      initialCenter={{
        lat,
        lng
      }}
    >
      <Marker
        position={{
          lat: config.latitudeForMarker,
          lng: config.longitudeForMarker
        }}
        icon={config.googleMapsMarkerIcon}
        onClick={onMarkerClick}
        text='some text'
      />
      <InfoWindow
        marker={state.activeMarker}
        onClose={onInfoWindowClose}
        visible={state.showingInfoWindow}
      >
        <div>
          <p>{state.text}</p>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({ apiKey: config.apiKey })(MapComponent)
