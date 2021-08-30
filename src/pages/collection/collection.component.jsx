import React from 'react';
import { connect } from 'react-redux';

import {selectCollection} from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match}) => {
    const {title, items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>({
    colletion: selectCollection(ownProps.match.params.collectionId)(state)
}) 

export default connect(mapStateToProps)(CollectionPage);
