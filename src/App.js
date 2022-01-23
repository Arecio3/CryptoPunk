import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import NftList from './components/NftList';
import Main from './components/Main';

function App() {
  const [nftData, setNftData] = useState([])
  const [selectedNft, setSelectedNft] = useState(0)
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xd6202790f9fB2a40F7DC4269914B89B4c0Cd5114&order_direction=asc')
      console.log(openSeaData.data.assets)
      setNftData(openSeaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {nftData.length > 0 && (
          <>
        <Main nftData={nftData} selectedNft={selectedNft}/> 
        <NftList nftData={nftData} setSelectedNft={setSelectedNft}/>
          </>
        )}
    </div>
  );
}

export default App;
