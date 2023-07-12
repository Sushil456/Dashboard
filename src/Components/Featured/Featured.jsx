import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css' // to import for circular progress bar 
export const Featured = () => {
  return (
    <div className='featured'>

      <div className="top">
        <h2 className="title">Total Revenue</h2>
        <MoreVertIcon fontSize='small' />
      </div>
      
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text='70%' strokeWidth={3}  />
        </div>

          <p className='title'>Total sales made today</p>
          <p className='amount'>$15.6K</p>
          <p className='desc'>Previous transaction process is in pending</p>
      
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">$10.3k</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">$8k</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">$12k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

    </div>

  )
}
