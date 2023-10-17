import React from 'react';
function TopSection({ image, title, style }) {
  return (
    <div className={image}>
      <div>
        <h1 className='headtopBan'>Designing</h1>
        <h1 className={`topheadtitle`} style={{ color: style }}>{title}</h1>
      </div>
    </div>
  );
}

export default TopSection;
