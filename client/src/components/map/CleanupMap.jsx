import "./cleanupmap.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

const position = [51.505, -0.09]

export default function CleanupMap() {
  return (
        <div>  
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
        
    );
}