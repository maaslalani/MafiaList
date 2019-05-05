import React from 'react';

const Tag = ({content, color, label}) => (
  <span style={{backgroundColor: color}} className='tag'><span className='label'>{label}</span>{content}</span>
);

export default Tag;
