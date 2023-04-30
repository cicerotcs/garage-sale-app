import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import { sales } from "../../data.js";
import { Link } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";

import "./Map.scss";
import { useState, useCallback, useEffect, useMemo } from "react";

const center = [-34.8211664984673, 138.61874592823662];
const zoom = 13;

const Map = ({ height, lat, lng }) => {
  function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter());

    const onClick = useCallback(() => {
      map.setView(center, zoom);
    }, [map]);

    const onMove = useCallback(() => {
      setPosition(map.getCenter());
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);

    return (
      <div className="map-target">
        <BiTargetLock onClick={onClick} size={36} />
      </div>
    );
  }

  function ExternalStateExample() {
    const [map, setMap] = useState(null);

    const displayMap = useMemo(
      () => (
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          ref={setMap}
          style={{ width: "100%", height: height }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.pathname === "/" ? (
            <>
              {sales.map((sale) => (
                <Marker position={[sale.lat, sale.lng]} key={sale.id}>
                  <Popup>
                    {sale.name} <br />{" "}
                    <Link to={`/listing/${sale.id}`} state={sale}>
                      View
                    </Link>
                  </Popup>
                </Marker>
              ))}
            </>
          ) : (
            <Marker position={[lat, lng]} />
          )}
        </MapContainer>
      ),
      []
    );

    return (
      <div>
        {map ? <DisplayPosition map={map} /> : null}
        {displayMap}
      </div>
    );
  }

  return <ExternalStateExample />;
};
export default Map;
