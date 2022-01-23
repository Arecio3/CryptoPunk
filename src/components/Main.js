import React from 'react';
import punk from '../assets/owner/punk6.jpg'
import punk2 from '../assets/owner/punkhead.png'
import igLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import '../styles/Main.css'

const Main = ({nftData}) => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='nftHighlight'>
                <div className="nftContainer">
                <img className="selectedNft" src={punk} alt="" />
                </div>
            </div>
            <div className='nftDetails' style={{color: "#fff"}}>
                <div className="title">Drippy Hobo</div>
                <span className='itemNumber'>•#3</span>
            </div>
            <div className="owner">
                <div className="ownerImageContainer">
                    <img src={punk2} alt="" />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0xd6202790f9fB2a40F7DC4269914B89B4c0Cd5114</div>
                        <div className='ownerHandle'>@areciocodes</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={igLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) 
};

export default Main;
