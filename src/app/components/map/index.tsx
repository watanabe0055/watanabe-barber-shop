"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "40%",
  height: "20vh",
};

const center = {
  lat: 32.6511929,
  lng: 131.6908594,
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
