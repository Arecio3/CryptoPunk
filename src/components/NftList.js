import React from 'react';
import CollectionCard from './CollectionCard';
import '../styles/NftList.css'

const NftList = ({ nftData }) => {
  return (
  <div className='nftList'>
      {nftData.map(nft => (
          <div>
              <CollectionCard 
              key={nft.token_id}
              id={nft.token_id}
              name={nft.name}
              traits={nft.traits}
              image={nft.image_original_url}
              />
              
          </div>
      ))}
  </div>
  )
};

export default NftList;
