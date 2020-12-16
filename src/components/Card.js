import React from 'react'
import deletePath from '../images/delete.svg'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

export default function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `elements__like-button ${isLiked && 'elements__like-button_liked'}`; 

    return (
        <li key={props.card._id} className="elements__card">
            <img className="elements__foto" src={props.card.link} alt="фото" onClick={props.onCardClick}/>
            <div className="elements__title-group">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-block">
                    <button className={cardLikeButtonClassName} onClick={props.onCardLike} type="button"></button>
                    <h3 className="elements__like-nr">{props.card.likes.length}</h3>
                 </div>
            </div>
            {isOwn?<button className="elements__delete-button" onClick={props.onCardDelete} type="button"><img src={deletePath} alt="delete"/></button>:''}
         </li>
    )
}