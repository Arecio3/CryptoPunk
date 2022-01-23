import React from 'react'
import weth from '../assets/weth.png'
import '../styles/CollectionCard.css'

const CollectionCard = ({id, name, traits, image}) => {
    return <>
        { image ? <div className='collectionCard'>
            <img src={image} alt="" className='NFTImg'/>
            <div className="details">
            <div className="name">
                {name}
                <div className="id">•#{id}</div>
            </div>
            <div className="priceContainer">
                <img src={weth} className='wethImage' alt=""/>
                <div className="price">{traits[0]?.value}</div>
            </div>
            </div>
        </div> : <></>}
    </>
     
}
export default CollectionCard
