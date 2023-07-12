import './Chart.scss'
import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Chart = () => {
  const data = [
    { "name": "Jan", "Total": 2400 },
    { "name": "Feb ", "Total": 4700 },
    { "name": "Mar", "Total": 1200 },
    { "name": "Apr", "Total": 380 },
    { "name": "May", "Total": 4890 },
    { "name": "Jun", "Total": 2310 },

  ]
  return (
    <div className='chart'>
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
{/* this is imp for showing color effect to chart  */}
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
{/* for xaxis  */}
          <XAxis dataKey="name" stroke='gray' />
    {/* cartesian grid is imp for width and shadow  */}
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' /> 

          <Tooltip />

          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>


      </ResponsiveContainer>
    </div >
  )
}
