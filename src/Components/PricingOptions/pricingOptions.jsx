import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPrising from '../DaisyPricing/DaisyPrising';

const PricingOptions = ({pricingPromise}) => {


    const pricingData=use(pricingPromise);
    

    

    return (
        <div>
           <h2 className='text-5xl mt-10 p-10'>Get out Membership</h2> 
        
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-6 p-4'>
                {/* {
                    pricingData.map(pricing=><PricingCard 
                        key={pricing.id} 
                            pricing={pricing}></PricingCard>)
                } */}


                {
                    pricingData.map(pricing=>
                    <DaisyPrising key={pricing.id}
                    pricing={pricing}
                    ></DaisyPrising>)
                }
            </div>
        </div>

    );
};

export default PricingOptions;

