import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [nftData, setNftData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xd6202790f9fB2a40F7DC4269914B89B4c0Cd5114&order_direction=asc')
      console.log(openSeaData.data.assets)
    }
    return getMyNfts()
  }, [])
  
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'BORED APE'} traits={[{'value': 7}]} image='https://lh3.googleusercontent.com/lxp1GoTos5uWeRXhtFj03i9GxGe9BgPoqeWJy-XstXErNpWa-m334WUO0knPj13SbCOS8AadyRkD4aVRj8CdXYgzD5FqslyyxJCgxaA=w278'/>
    </div>
  );
}

export default App;
