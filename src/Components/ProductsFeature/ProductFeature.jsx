import React from 'react';

const ProductFeature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2'><CircleCheckBig></CircleCheckBig> {feature}</p>
        </div>
    );
};

export default ProductFeature;