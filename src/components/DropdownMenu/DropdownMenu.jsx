import React, { useState } from 'react';

const regions = ["한경", "한림", "애월", "제주", "조천", "구좌", "대정", "안덕", "중문", "서귀포", "남원", "표선", "성산"];

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("지역별");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (region) => {
        setSelectedRegion(region);
        setIsOpen(false);
    };

    return (
        <p>뀨</p>
    )
}

export default DropdownMenu;