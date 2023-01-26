import { useState } from 'react';
import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Main from './Main';


function Sidebar() {
  const [currentLink, setCurrentLink] = useState(0);

  const handleClick = (index) => {
    setCurrentLink(index);
  }

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/main" className={currentLink === 0 ? 'active' : ''}
                 onClick={() => handleClick(0)}>Asked Questions</Link></li>
          <li><Link to="/new" className={currentLink === 1 ? 'active' : ''} 
                  onClick={() => handleClick(1)}>Ask Questions</Link></li>
        </ul>
      </nav>
      <div className="footer">
        <p>Copyright ©2022</p>
      </div>
{/* <div className='main'>
<Main />
</div> */}
      
    </div>
  ); 
}

export default Sidebar;
