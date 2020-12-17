import React from 'react'
import Card from './Card.js'
import editPath from '../images/edit.svg'
import addPath from '../images/add.svg'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

export default function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
                    <img alt="Аватар" className='profile__avatar' src={currentUser.avatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__title-block">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}><img src={editPath} alt="Редактировать"/></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}><img src={addPath} alt="Добавить"/></button>
            </section>
            <section className="elements">
                <ul className="elements__cards">
                {props.cards.map((item) => {
                        return (
                            <Card card={item}
                            key={item._id}
                            onCardClick={()=>props.onCardClick(item)}
                            onCardLike={()=>props.onCardLike(item)}
                            onCardDelete={()=>props.onCardDelete(item)}/>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}