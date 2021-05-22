import React from 'react';

export default function MessageBox({ content, variant }) {
  return (
    <div className={`alert alert-${variant || 'info'}`}>
      {content}
      HEY, I'm THE MESSAGE BOX
    </div>
  );
}