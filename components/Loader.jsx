import React, { ReactElement } from 'react';
import style from '@/assets/Loader.module.scss';

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center" style={{ height: height || '100vh' }}>
        <div className={style['lds-ellipsis']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;