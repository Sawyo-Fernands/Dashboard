import DollarIcon from '../../images/icons-sidebar/dollar-sign.png'
import AddPedidosIcon from '../../images/icons-sidebar/file-plus.png'
import PeopleCommunityIcon from '../../images/icons-sidebar/fluent_people-community-16-filled.png'
import AdminPainel from '../../images/icons-sidebar/ic_sharp-admin-panel-settings.png'
import ProductsIcon from '../../images/icons-sidebar/emojione-monotone_sunglasses.png'
import DashboardIcon from '../../images/icons-sidebar/pie chart.png'
import LougoutIcon from '../../images/icons-sidebar/Vector.png'
import './sidebar.scss'

export function Sidebar(){
    return(
        <div className="menu">
        <aside>
            <h1>LOGO</h1>
            <div id="sidebar">
                <ul>
                    <li><a href=""><img src={DashboardIcon} alt="" /> Dashboard</a> </li>
                    <li><a href=""><img src={AddPedidosIcon} alt="" /> Pedidos</a></li>
                    <li><a href=""><img src={ProductsIcon} alt="" /> Produtos</a></li>
                    <li><a href=""><img src={PeopleCommunityIcon} alt="" /> Clientes</a></li>
                    <li><a href=""><img src={DollarIcon} alt="" /> Financeiro</a></li>
                    <li><a href=""><img src={AdminPainel} alt="" /> Usuários</a></li>
                </ul>
                
            </div>
            <div id="logout">
                <button><img src={LougoutIcon} alt="" /> Logout</button>
            </div>
        </aside>
    </div>
    )
}