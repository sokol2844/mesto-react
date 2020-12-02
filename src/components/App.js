import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWidthForm from './PopupWidthForm.js'
import ImagePopup from './ImagePopup.js'
function App() {

	const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const[selectedCard, setSelectedCard] = React.useState(undefined);

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleAddPlaceClick() {
		setIsEditProfilePopupOpen(true);
	}
	
	function handleEditAvatarClick() {
		setIsAddPlacePopupOpen(true);
	}
	
	function handleEditProfileClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(undefined);
	}

  return (
    <body className="page">
	<Header />
	<Main onEditProfile={handleEditProfileClick} 
	      onAddPlace={handleAddPlaceClick} 
	      onEditAvatar={handleEditAvatarClick}
		  onCardClick={handleCardClick}/>
	<Footer />
	<PopupWidthForm name='profile-edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
	children={(
		<>
			<input type="text" className="popup__input popup__input_name" placeholder="Имя" name="name" id='input-name' required minLength="2" maxLength="40"/>
			<span className='popup__error' id='input-name-error'></span>
			<input type="text" className="popup__input popup__input_about" placeholder="Описание" name="about" id="input-about" required minLength="2" maxLength="200"/>
			<span className='popup__error' id='input-about-error'></span>
		</>)}/>
	<PopupWidthForm name='card-add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
	children={(
		<>
			<input type="text" className="popup__input popup__input_name" placeholder="Название" name="title" id="input-title" required minLength="2" maxLength="30"/>
			<span className='popup__error' id='input-title-error'></span>
			<input type="url" className="popup__input popup__input_about" placeholder="Ссылка на картинку" name="link" id="input-link" required/>
			<span className='popup__error' id='input-link-error'></span>
		</>
	)}/>
	<PopupWidthForm name='card-delete' title='Вы уверены?'/>
	<PopupWidthForm name='avatar-edit' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
	children={(
		<>
			<input type="url" className="popup__input" placeholder="Ссылка на картинку" name="avatar" id="input-avatar" required/>
			<span className='popup__error' id='input-avatar-error'></span>
		</>
	)}/>
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
</body>
  );
}

export default App;
