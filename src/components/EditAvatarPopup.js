import React from 'react'
import PopupWidthForm from './PopupWidthForm.js'
import api from '../utils/Api.js'
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

export default function EditAvatarPopup (props) {
    const urlRef = React.useRef();
    const[url, setUrl] = React.useState('');

    function handleInputChange(e) {
        setUrl(urlRef.current.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: url,
        });
      }

    return (
        <PopupWidthForm 
        name='avatar-edit' 
        title='Обновить аватар' 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        onSubmit={handleSubmit}
	    children={(
            <>
                <input onChange={handleInputChange} ref={urlRef} type="url" className="popup__input" placeholder="Ссылка на картинку" name="avatar" id="input-avatar" required/>
                <span className='popup__error' id='input-avatar-error'></span>
            </>
            )}
        />
    )
}