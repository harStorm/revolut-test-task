//@flow
import React from 'react';

type RateProps = {
    saleSimbol: string,
    buySimbol: string,
    value: string,
}

const Rate = ({
    saleSimbol,
    buySimbol,
    value,
}: RateProps) => (
    <div className="currency__rate">
        <span className="currency__rate-icon"></span>
        {`1 ${saleSimbol} = ${value} ${buySimbol}`}
    </div>
)

export default Rate;