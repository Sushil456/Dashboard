

import { Chart } from '../../Components/Chart/Chart'
import { Featured } from '../../Components/Featured/Featured'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { BasicTable } from '../../Components/Table/Table'
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
            <Chart title='Last 6 Month ( Revenue )' aspect={2 / 1} />
          </div>

          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <div className="table">
              <BasicTable />
            </div>
          </div>


        </div>
    </div>
  )
}
