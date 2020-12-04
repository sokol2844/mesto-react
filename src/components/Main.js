import React from 'react'
import api from '../utils/Api.js'
import Card from './Card.js'
import editPath from '../images/edit.svg'
import addPath from '../images/add.svg'

function catchErr(err) {
	console.log(err);
}

export default function Main(props) {
    const[userName,setUserName] = React.useState('');
    const[userDescription ,setUserDescription ] = React.useState('');
    const[userAvatar,setUserAvatar] = React.useState('');
    const[cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        })
        .catch(catchErr);
    })

    React.useEffect(() => {
        api.getInitialCards()
        .then((res) => {
            setCards(res);
        })
        .catch(catchErr);
    })

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
                    <img alt="Аватар" className='profile__avatar' src={userAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__title-block">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}><img src={editPath} alt="Редактировать"/></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}><img src={addPath} alt="Добавить"/></button>
            </section>
            <section className="elements">
                <ul className="elements__cards">
                {cards.map((item) => {
                        return (
                            <Card card={item}
                            onCardClick={()=>props.onCardClick(item)}/>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}