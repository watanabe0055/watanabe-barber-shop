"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

const containerStyle = {
  min_width: "200px",
  height: "400px",
};

const center = {
  lat: 32.6511929,
  lng: 131.6908494,
};

const zoom = 20;

/**
 * GoogleMapを表示するコンポーネント
 */
const GoogleMapComponent = () => {
  const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_AKI_KEY || "";

  return (
    <LoadScript googleMapsApiKey={googleMapApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <MarkerF visible={true} position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
