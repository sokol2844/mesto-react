import logoPath from '../images/header-logo.svg'
export default function Header() {
    return (
        <header className="header">
		    <img alt="Mesto" className='header__logo' src={logoPath}/>
	    </header>
    )
}