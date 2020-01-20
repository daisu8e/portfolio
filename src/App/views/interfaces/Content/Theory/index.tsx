import React, {FC, useEffect} from 'react';

import css from './index.module.scss';

export const Theory: FC = () => {

  function init() {
    window.scrollTo(0, 0);
    document.title = 'Theory of Daisuke Katsumata';
  }

  useEffect(init, []);

  return (
    <div className={css.body}>
      <h1>Theory</h1>
      <h2>Do you prefer Flux rather than MVC?</h2>
      <p>
      </p>
    </div>
  );
};
