import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {

    const {name, price, information, features}=pricing;
    

    return (
        <div className='border flex flex-col bg-amber-600 rounded-2xl p-4 text-white'>

            {/* Card header */}

            <div>
                <h1 className='text-5xl'>{name}</h1>
                <h4 className="text-2xl">${price}</h4>
            </div>

            <div className='bg-amber-400 p-4  rounded-2xl'>
                <p className='text-2xl rounded-2xl p-3 flex-1 text-white font-semibold bg-gray-700'>{information}</p>

                {
                    features.map((feature, index)=><PricingFeatures 
                    key={index}
                    feature={feature}></PricingFeatures>)
                }
                <button className='btn w-full rounded-2xl mt-4'>Subscribe</button>
            </div>
            
        </div>
    );
};

export default PricingCard;