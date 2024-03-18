import React from 'react';
import Navber from '../Navber/Navber';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className='headerContent'>
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;