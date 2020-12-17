import closePath from '../images/close.svg'
export default function ImagePopup(props) {
    const isOpened = !!props.card;
    return (
        <div className={isOpened?"popup image-popup popup_opened":"popup image-popup"}>
            <div className="image-popup__container">
                <img className="image-popup__image" src={isOpened?props.card.link:''}/>
                <p className="image-popup__title">{isOpened?props.card.name:''}</p>
                <button className="image-popup__button-reset popup__button-reset" type="reset" onClick={props.onClose}><img className="image-popup__img-reset" src={closePath} alt="Закрыть"/></button>
            </div>
        </div>
    )
}