import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import './Widget.scss'
export const Widget = ({type}) => {

    let data;
    const amount = 100;
    const diff = 20;


    switch(type){
        case 'user':
            data={
                title:'USERS',
                isMoney:false,
                link:'see all users',
                icon: <PersonOutlineOutlinedIcon className='icon' style={{color:"gray"}} />,
            };
            break;

            case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' style={{backgroundColor:"lightpink", color: "crimson"}} />,
            };
            break;

            case 'earning':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:'View net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' style={{backgroundColor:"lightblue", color:"blue"}} />,
            };
            break;

            case 'balance':
            data={
                title:'BALANCE',
                isMoney:true,
                link:'Total balance',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor:"lightgreen" ,color:"green"}} />,
            };
            break;

            default:
                break;
    }


  return (
    <div className="widget">
        <div className="left">
            {/* <span className="title">{data.title}</span> */}
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowUpwardIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
    )
}
