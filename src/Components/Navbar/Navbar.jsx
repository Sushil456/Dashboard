import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FaceIcon from '@mui/icons-material/Face';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='Search ...' />
          <SearchIcon className='icon'/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            EN
          </div>

          <div className="item">
            <DarkModeIcon className='icon'/>
            
          </div>

          <div className="item">
            <MarkChatUnreadIcon className='icon'/>
            <div className="counter">2</div>
            
          </div>


          <div className="item">
            <NotificationsActiveIcon className='icon'/>
            
            <div className="counter">1</div>
          </div>

          <div className="item">
            <FormatListBulletedIcon className='icon'/>
            
          </div>


          <div className="item">
            <FaceIcon className='avatar'/>  
          </div>
          
        </div>


      </div>
    </div>
  )
}
