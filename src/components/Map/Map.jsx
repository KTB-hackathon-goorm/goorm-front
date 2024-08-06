import React, { useEffect, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import uuid from 'react-uuid';


export default function KakaoMap() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const array = [
        { latitude: 33.4820872, longitude: 126.5317112 },
        { latitude: 33.4860792, longitude: 126.5378002 }
    ]

    useEffect(() => {
        navigator.geolocation.watchPosition(function (position) {
            console.log(position);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        console.log(latitude, longitude)
    }, [])
    return (
        <>
            <Map center={{ lat: latitude, lng: longitude }} style={{ width: "390px", height: "480px" }} >
                <MapMarker position={{ lat: latitude, lng: longitude }} />
                {array.map((pos) => (
                        <CustomOverlayMap key={uuid()} position={{ lat: pos.latitude, lng: pos.longitude }}>
                            <img style={{ width: "50px", height: "50px" }} src='/images/Trash.png' />
                        </CustomOverlayMap>
                ))}
            </Map>
        </>
    )
}