import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

class Mapa extends Component {
    constructor() {
        super();
        this.state = {
            markers: [[19.4100819, -99.1630388]]
        };
    }

    addMarker = (e) => {
        const { markers } = this.state
        markers.push(e.latlng)
        this.setState({ markers })
    }

    render() {
        return (
            <Map
                center={[-31.42414, -64.49778]}
                zoom={13}
                onClick={this.addMarker}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {this.state.markers.map((position, idx) =>
                    <Marker key={`marker-${idx}`} position={position}>
                        <Popup>
                            <span>Popup</span>
                        </Popup>
                    </Marker>
                )}
            </Map>

        );
    }
}

export default Mapa;