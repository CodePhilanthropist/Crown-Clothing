import React from 'react';
import "./collection-item.styles.scss";


export const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div>
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`,

            }}/>
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
        </div>
    )
}
