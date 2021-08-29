import React from 'react';
import "./collections-overview.styles.scss";

import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../preview-collection/preview-collection.component";

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(CollectionsOverview);