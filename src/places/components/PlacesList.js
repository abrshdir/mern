import React from 'react';
import './PlacesList.css';
import Card from "../../shared/components/UIElements/Card";
import PlacesItem from './PlacesItem';

const PlacesList = (props) => {
    if (props.item === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No places found. MAybe create one?</h2>
                <button>Share Place</button>
            </Card>
        </div>
    }

    return (<ul className="place-list">
        {props.item.map(place => (<PlacesItem key={place.id} id={place.id} image={place.imageUrl} title={place.title}
                                             description={place.description} address={place.address}
                                             creatorId={place.creator} coordinates={place.location}/>))}
    </ul>);
};

export default PlacesList;