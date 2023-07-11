

import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { Widget } from '../../Components/Widgets/Widget'
import './home.scss'

export const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type='user' />
            <Widget type='order' />
            <Widget type='earning' />
            <Widget type='balance' />
            
          </div>
        </div>
    </div>
  )
}
