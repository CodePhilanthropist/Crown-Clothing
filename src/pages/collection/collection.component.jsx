import React from 'react';
import { connect } from 'react-redux';

import "./category.styles.scss";

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match}) => {
    return (
        <div className="category">
            <h1>collection page</h1>
        </div>
    )
}

export default CollectionPage;
