import "./cleanupmap.css";
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

const position = [34.298409, -83.832855]
const cleanuparr = [[34.298409, -83.832855], [34.297409, -83.842855]]

export default function CleanupMap(props) {
  return (
        <div>  
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cleanuparr.map((cleanup)=>{
                    return (
                        <Marker position={cleanup}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    )
                })}
                
            </MapContainer>
        </div>
        
    );
}