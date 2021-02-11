import React, { useContext, useState } from 'react';
import Button from '../../shared/components/FomElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';

import './PlaceItem.css';

const PlaceItem = props => {
    const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfimModal] = useState(false); 

    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => {
        setShowConfimModal(true);
    };

    const cancelDeletehandler = () => {
        setShowConfimModal(false);
    };

    const confirmDeleteHandler = () => {
        setShowConfimModal(false);
        console.log('Deleting ...');
    };

    return (
        <React.Fragment>
            <Modal 
            show={showMap} 
            onCancel={closeMapHandler} 
            header={props.address} 
            contentClass="place-item__modal-content"
            footerClass="plcae-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom="16" />
                </div>
            </Modal>
            <Modal 
            show={showConfirmModal}
            onCancel={cancelDeletehandler}
            header="Are you sure?" 
            footerClass="place-item__modal-actions" 
            footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeletehandler}>Cancel</Button>
                    <Button danger onClick={confirmDeleteHandler}>Delete</Button>
                </React.Fragment>
            }>
                <p>Do you want to proceed and delete this place?</p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}>View on Map</Button>
                    {auth.isLoggedIn && <Button to={`/places/${props.id}`}>Edit</Button>}
                    {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>Delete</Button>}
                </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;