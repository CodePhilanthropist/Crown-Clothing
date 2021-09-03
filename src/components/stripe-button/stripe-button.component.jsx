import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JVJ6wBDiM79ZwHNmCIq0xYV6g2Codxs4MKnvtDJYiXaQeezCp9KlWPwiTvDknNEQ44o1BVtCZRcJVnk7UmvQxjQ007UeWmrhz";
    return (
        <div>
            
        </div>
    )
}

export default StripeCheckoutButton;
