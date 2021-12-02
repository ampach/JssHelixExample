import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SectionHeader = ({ fields }) => {
  return (
    <div className="container">
      <Text field={fields.Text} tag="h2" className="title" />
    </div>
    );
  };

export default SectionHeader;
