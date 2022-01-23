import React, {useState, useEffect} from 'react';
import punk from '../assets/owner/punk6.jpg'
import punk2 from '../assets/owner/punkhead.png'
import igLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import '../styles/Main.css'

const Main = ({nftData, selectedNft}) => {
    const [activeNft, setActiveNft] = useState(nftData[0])

    useEffect(() => {
        setActiveNft(nftData[selectedNft])
    }, [nftData, selectedNft]);

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='nftHighlight'>
                <div className="nftContainer">
                <img className="selectedNft" src={activeNft?.image_original_url} alt="" />
                </div>
            </div>
            <div className='nftDetails' style={{color: "#fff"}}>
                <div className="title">{activeNft.name}</div>
                <span className='itemNumber'>•#{activeNft.token_id}</span>
            </div>
            <div className="owner">
                <div className="ownerImageContainer">
                    <img src={activeNft.owner.profile_img_url} alt="" />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div style={{color: '#fff'}}>{activeNft.owner.address}</div>
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
