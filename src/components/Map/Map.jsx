import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import uuid from 'react-uuid';
import axios from "axios";

export default function KakaoMap() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [arrayMap, setArrayMap] = useState([
        { id: 1, latitude: 33.4820872, longitude: 126.5317112 },
        { id: 2, latitude: 33.4860792, longitude: 126.5378002 }
    ]);
    const [isDragging, setIsDragging] = useState(false);
    const mapRef = useRef(null);

    const getBinMap = useCallback(async (latitude, longitude, zoomLevel) => {
        try {
            const response = await axios.get(`/api/v1/bin?latitude=${latitude}&longitude=${longitude}&zoomLevel=${zoomLevel}`);
            const newData = response.data.filter(newItem => !arrayMap.some(existingItem => existingItem.id === newItem.id));
            setArrayMap(prevArrayMap => [...prevArrayMap, ...newData]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [arrayMap]);

    useEffect(() => {
        navigator.geolocation.watchPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            getBinMap(latitude, longitude);
        });
    }, []);

    useEffect(() => {
        const handleMouseUp = () => {
            if (!isDragging) {
                const mapCenter = mapRef.current.getCenter();
                const lat = mapCenter.getLat();
                const lng = mapCenter.getLng();
                setLatitude(lat);
                setLongitude(lng);

                const zoomLevel = mapRef.current.getLevel();
                getBinMap(lat, lng, zoomLevel);
            }
            setIsDragging(false);
        };

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, getBinMap]);

    const markers = useMemo(() => (
        arrayMap.map((pos) => (
            <CustomOverlayMap key={ uuid() } position={{ lat: pos.latitude, lng: pos.longitude }}>
                <img
                    style={{ width: "50px", height: "50px" }}
                    src='/images/Trash.png'
                    alt="Trash"
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                />
            </CustomOverlayMap>
        ))
    ), [arrayMap]);

    return (
        <Map
            center={{ lat: latitude, lng: longitude }}
            style={{ width: "390px", height: "480px" }}
            level={3}
            onCreate={(map) => {
                mapRef.current = map;
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
        >
        <MapMarker position={{ lat: latitude, lng: longitude }} />
            {markers}
        </Map>
    )
}
