import deletePath from '../images/delete.svg'
export default function Card(props) {
    return (
        <li key={props.card._id} className="elements__card">
            <img className="elements__foto" src={props.card.link} alt="фото" onClick={props.onCardClick}/>
            <div className="elements__title-group">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-block">
                    <button className="elements__like-button" type="button"></button>
                    <h3 className="elements__like-nr">{props.card.likes.length}</h3>
                 </div>
            </div>
            <button className="elements__delete-button" type="button"><img src={deletePath} alt="delete"/></button>
         </li>
    )
}