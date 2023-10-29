import React from 'react';
function TopSection({ image, title, style,classnm}) {
  return (
    <div className={image}>
      <div className={classnm}>
        <h1 className='headtopBan'>Designing</h1>
        <h1 className='topheadtitle' style={{style}}>{title}</h1>
      </div>
    </div>
  );
}

export default TopSection;
