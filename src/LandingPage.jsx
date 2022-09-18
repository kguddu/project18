import React from 'react'
import me from './image/me.jpg'
import './landingpage.css'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmailIcon from '@mui/icons-material/Email';



const LandingPage = () => {
    return (
        <main className='main_container'>
            <div className='left'>
           
                <div className='profile'>
                    <img src={me} alt="me" />
                    <h3>Guddu kumar</h3>
                </div> 
               
                     <div className='sidebar'>
                        <h3><HomeIcon />home</h3>
                        <h3><InsertDriveFileIcon />Deposite</h3>
                        <h3><CardGiftcardIcon />Offer</h3>
                        <h3><AccountBalanceIcon />Payment</h3>
                        <h3>< SettingsIcon />Setting</h3>
                    </div>
                    </div> 
               
            
            <div className='right'>
            <div className='header'>
            <EmailIcon/>
            <img src={me} alt="me" />
            </div>
            <div className='active_page'>
                <h2>Active Deposite<span>2</span></h2>
                <button>+</button>
            </div>
            <div className='table_container'>
                <div className='head'>
                <h2>Payment</h2>
                <h2>Pay Date</h2>
                <h2>Pay</h2>
                <h2>Deposite</h2>
                <h2>Bank</h2>
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                   
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                   
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                </div>
                <button className='btn'>All active Depposite</button>
            </div>
              {/* 2nd page */}
              <div className='active_page'>
                <h2>Closed Deposite<span>2</span></h2>
                
            </div>
            <div className='table_container'>
                <div className='head'>
                <h2>Payment</h2>
                <h2>Pay Date</h2>
                <h2>Pay</h2>
                <h2>Deposite</h2>
                <h2>Bank</h2>
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                   
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                   
                </div>
                <div className='data_container'>
                    <div className='payment'>
                    <img src={me} alt="me"/>
                    <h4>Guddu kumar</h4>
                    </div>
                   <h3>19 septtember 2022</h3>
                   <h3>$3000</h3>
                   <h3>$3000</h3>
                   <h3>Account Processingg</h3>
                </div>
                <button className='btn'>All Closed Depposite</button>
            </div>
            
            
            </div>
           
        </main>
    )
}

export default LandingPage