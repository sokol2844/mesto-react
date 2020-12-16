import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWidthForm from './PopupWidthForm.js'
import ImagePopup from './ImagePopup.js'
import api from '../utils/Api.js'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import AddPlacePopup from './AddPlacePopup.js'

function catchErr(err) {
	console.log(err);
}

function App() {
	const[currentUser, setCurrentUser] = React.useState({});
	const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const[selectedCard, setSelectedCard] = React.useState(undefined);
	const[cards, setCards] = React.useState([]);

	function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          
          setCards(newCards);
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then((res) => {
            const newCards = cards.filter((c) => c._id!==card._id);
            setCards(newCards);
		})
		.catch(catchErr);
	}
	
	function handleAddPlaceSubmit(newCard) {
		api.addNewCard(newCard.name, newCard.link)
		.then((res) => {
			setCards([res, ...cards]);
			closeAllPopups();
		})
		.catch(catchErr);
	}

	function handleUpdateUser(userInfo) {
		api.setUserInfo(userInfo.name, userInfo.about)
		.then((res) => {
			setCurrentUser(res);
			closeAllPopups();
		})
		.catch(catchErr);
	}

	function handleUpdateAvatar({avatar}) {
		api.setUserAvatar(avatar)
		.then((res) => {
			setCurrentUser(res);
			closeAllPopups();
		})
		.catch(catchErr);
	}

	React.useEffect(() => {
        api.getInitialCards()
        .then((res) => {
            setCards(res);
        })
        .catch(catchErr);
    });

	React.useEffect(() => {
        api.getUserInfo()
        .then((res) => {
			setCurrentUser(res);
        })
		.catch(catchErr);
    }, []);

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}
	
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}
	
	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(undefined);
	}

  return (
<CurrentUserContext.Provider value = {currentUser}>
	<Header />
	<Main onEditProfile={handleEditProfileClick} 
	      onAddPlace={handleAddPlaceClick} 
	      onEditAvatar={handleEditAvatarClick}
		  onCardClick={handleCardClick}
		  cards = {cards}
		  setCards = {setCards}
		  onCardLike = {handleCardLike}
		  onCardDelete = {handleCardDelete}/>
	<Footer />
	<EditProfilePopup isOpen={isEditProfilePopupOpen} 
					  onClose={closeAllPopups} 
					  onUpdateUser = {handleUpdateUser}
	/>
	
	<AddPlacePopup isOpen={isAddPlacePopupOpen}
	 			   onClose={closeAllPopups} 
				   onCardAdd={handleAddPlaceSubmit}/>
	<PopupWidthForm name='card-delete' title='Вы уверены?'/>
	<EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
					 onClose={closeAllPopups} 
					 onUpdateAvatar={handleUpdateAvatar}/>
	<ImagePopup card={selectedCard}
	onClose={closeAllPopups}/>
	<template id="template-list-item">
				<li className="elements__card">
					<img className="elements__foto" src="#" alt="фото"/>
					<div className="elements__title-group">
						<h2 className="elements__title"></h2>
						<div className="elements__like-block">
							<button className="elements__like-button" type="button"></button>
							<h3 className="elements__like-nr">2</h3>
						</div>
						
					</div>
					<button className="elements__delete-button" type="button"><img src="./images/delete.svg" alt="delete"/></button>
				</li>
	</template>
</CurrentUserContext.Provider>
  );
}

export default App;
