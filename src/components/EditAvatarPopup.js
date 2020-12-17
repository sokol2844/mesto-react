import React from 'react'
import PopupWithForm from './PopupWithForm.js'

export default function EditAvatarPopup (props) {
    const[url, setUrl] = React.useState('');

    function handleInputChange(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: url,
        });
      }

    return (
        <PopupWithForm 
        name='avatar-edit' 
        title='Обновить аватар' 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        onSubmit={handleSubmit}>
            <>
                <input onChange={handleInputChange} value={url} type="url" className="popup__input" placeholder="Ссылка на картинку" name="avatar" id="input-avatar" required/>
                <span className='popup__error' id='input-avatar-error'></span>
            </>
        </PopupWithForm>
    )
}