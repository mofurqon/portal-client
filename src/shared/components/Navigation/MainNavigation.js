import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import DehazeIcon from '@material-ui/icons/Dehaze';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} /> }
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-nav">
                <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <div className="main-navigation__menu-btn" onClick={openDrawer}>
                    {/* <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div> */}
                    <DehazeIcon className="main-navigation__burger"/>
                </div>
                <h1 className="main-navigation__title">
                    <Link to="/">Portal</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;