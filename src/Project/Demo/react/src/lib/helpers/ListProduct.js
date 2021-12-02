import { mediaApi } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

const ListProduct = ({ url, imageSrc, children }) => {
  const figureStyle = imageSrc
    ? {
        backgroundImage: `url(${mediaApi.updateImageUrl(imageSrc, { mw: 480 })})`,
      }
    : {};
  return (
    <a href={url} className="column product-list-column is-4-desktop is-6-tablet">
      <div className="card">
        <div className="card-image">
          <figure style={figureStyle}></figure>
        </div>
        <div className="card-content">
          <div className="content">{children}</div>
        </div>
      </div>
    </a>
  );
};

export default ListProduct;
