import React from 'react';

import s from './Container.module.scss';

export const Container = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};
