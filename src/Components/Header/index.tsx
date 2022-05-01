import './Header.scss'
import SearchIcon from '../../images/icons-header/Vector.png'
import NotificationIcon from '../../images/icons-header/Notification.png'
import UserIcon from '../../images/icons-header/User.png'




export function Header(){
    return(
        <header className="header">
            <div className="search">
               <img src={SearchIcon} alt="Pesquisar" /> <input type="text" placeholder='Pesquisar' />
            </div>

            <div className="user">
                <img src={NotificationIcon} alt="Notificações" />
                <img src={UserIcon} alt="Usuário" />
            </div>
        </header>
    )
}