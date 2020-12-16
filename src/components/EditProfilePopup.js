import React from 'react'
import PopupWidthForm from './PopupWidthForm.js'
import api from '../utils/Api.js'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

export default function EditProfilePopup(props) {
    const[name, setName] = React.useState('');
    const[description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
      }

    return (<PopupWidthForm name='profile-edit' 
        title='Редактировать профиль' 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        onSubmit={handleSubmit}
        children={(
            <>
                <input value={name} onChange={handleChangeName} type="text" className="popup__input popup__input_name" placeholder="Имя" name="name" id='input-name' required minLength="2" maxLength="40"/>
                <span className='popup__error' id='input-name-error'></span>
                <input value={description} onChange={handleChangeDescription} type="text" className="popup__input popup__input_about" placeholder="Описание" name="about" id="input-about" required minLength="2" maxLength="200"/>
                <span className='popup__error' id='input-about-error'></span>
            </>)}/>)
}