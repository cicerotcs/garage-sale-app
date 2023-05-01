import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import { Link } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";

import "./Map.scss";
import { useState, useCallback, useEffect, useMemo } from "react";

const zoom = 13;

const Map = ({ height, lat, lng, listings }) => {
  function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter());

    const onClick = useCallback(() => {
      map.setView([lat, lng], zoom);
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
          center={[lat, lng]}
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
              {listings?.map((listing) => (
                <Marker
                  position={[listing.latitude, listing.longitude]}
                  key={listing.id}
                >
                  <Popup>
                    {listing.store_name} <br />{" "}
                    <Link to={`/listing/${listing.id}`} state={listing}>
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
