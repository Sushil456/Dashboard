

import { Chart } from '../../Components/Chart/Chart'
import { Featured } from '../../Components/Featured/Featured'
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

          {/* Charts Container  */}
          <div className="charts">
            <Featured />
            <Chart />
          </div>

        </div>
    </div>
  )
}
