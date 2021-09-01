import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, images, size }) => (
  <div className={`${size} menu-item`}
  >
    <div style={{
      backgroundImage: `url(${images})`
    }}
      className="background-image"
    />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
)

export default MenuItem;