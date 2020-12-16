import closePath from '../images/close.svg'
export default function PopupWidthForm(props) {
    return (
        <div className={props.isOpen?`popup popup_type_${props.name} popup_opened `:`popup popup_type_${props.name}`}  >
            <form onSubmit={props.onSubmit} className="popup__container" method="get" name={props.name} noValidate>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button className="popup__button-save" type="submit">Сохранить</button>
                <button className="popup__button-reset popup__button-reset_form-edit" type="reset" onClick={props.onClose}><img className="popup__img-reset" src={closePath} alt="Закрыть"/></button>
            </form>
        </div>
    )
}