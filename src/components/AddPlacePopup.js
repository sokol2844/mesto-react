import React from 'react'
import PopupWidthForm from './PopupWidthForm.js'

export default function AddPlacePopup(props) {
    const[name, setName] = React.useState('');
    const[link, setLink] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        props.onCardAdd({name, link});
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    return (
        <PopupWidthForm 
        name='card-add' 
        title='Новое место' 
        isOpen={props.isOpen} 
        onClose={props.onClose} 
        onSubmit={handleSubmit}
	children={(
		<>
			<input value={name} onChange={handleChangeName} type="text" className="popup__input popup__input_name" placeholder="Название" name="title" id="input-title" required minLength="2" maxLength="30"/>
			<span className='popup__error' id='input-title-error'></span>
			<input value={link} onChange={handleChangeLink} type="url" className="popup__input popup__input_about" placeholder="Ссылка на картинку" name="link" id="input-link" required/>
			<span className='popup__error' id='input-link-error'></span>
		</>
	)}/>
    )
}