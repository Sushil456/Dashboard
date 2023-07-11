import './Sidebar.scss'
import PersonIcon from '@mui/icons-material/Person';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FitbitIcon from '@mui/icons-material/Fitbit';
import LogoutIcon from '@mui/icons-material/Logout';
import QueryStatsIcon from '@mui/icons-material/QueryStats';


export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <div className="log">Tools Team</div>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardCustomizeIcon/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonIcon  />
                    <span>Users</span>
                </li>
                <li>
                    <AccountBoxIcon/>
                    <span>Products</span>
                </li>
                <li>
                    <ShoppingCartIcon/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon/>
                    <span>System Health</span>
                </li>
                <li>
                    <FitbitIcon/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <LowPriorityIcon/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
