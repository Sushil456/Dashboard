
import { Chart } from '../../Components/Chart/Chart'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { BasicTable } from '../../Components/Table/Table'
import './Single.scss'
export const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="" alt="" className="itemimg" />
              <div className="details">
                <h1 className="itemtitle">Sushil kumar</h1>

                <div className="detailitem">
                  <span className="itemkey">Email:</span>
                  <span className="itemkey">Sushil@gmail.com</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemkey">9321876523</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Address:</span>
                  <span className="itemkey">Rohtas, Bihar</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Country:</span>
                  <span className="itemkey">India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title='User Spending ( Last 6 Months )' />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Information</h1>
          <BasicTable />
        </div>
      </div>
    </div>

  )
}
