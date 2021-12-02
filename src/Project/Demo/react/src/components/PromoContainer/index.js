import React from 'react';
import { Placeholder, useSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const PromoContainer = ({ rendering }) => {
  const isEditing = useSitecoreContext({ updatable: true }).sitecoreContext?.pageEditing;
  const placeholder = rendering?.placeholders?.promos;
  const isEmpty = placeholder?.filter((x) => x.componentName).length == 0;

  return (
      <div className="container">
        <div className="columns">
          {isEmpty && isEditing && (
            <div
              className="column"
              style={{ padding: '20px', border: '1px dotted black', textAlign: 'center' }}
            >
              <em>Add new promo components here.</em>
            </div>
          )}
          <Placeholder name="promos" rendering={rendering} />
        </div>
      </div>
    );
  };

export default PromoContainer;
