import React, {FC, useEffect} from 'react';

import css from './index.module.scss';

export const Work: FC = () => {

  function init() {
    window.scrollTo(0, 0);
    document.title = 'Work of Daisuke Katsumata';
  }

  useEffect(init, []);

  return (
    <div className={css.body}>
      <h1>Work</h1>
      <h2>2019 - 2020 : Portfolio</h2>
      <p>
        This portfolio is made with React.
        It's the first React App for me to create.
      </p>
      <h2>2014 - 2017 : Cart Recovery</h2>
      <p>
        Cart Recovery is a marketing automation tool that delivers emails or ads to customers who abandoned their cart on the e-commerce site.
        It was made with Ruby on Rails, Angular.js and Java on AWS.
        Just a back end developer and I developed it from scratch, and launched it.
        I made the dashboard with Angular.js and Ruby on Rails, including UI/UX.
        This is divided into SPA and JSON API.
        Also I made the user tracking tag with JavaScript.
      </p>
      <h2>2012 - 2014 : Submit! Recommendation</h2>
      <p>
        Submit! Recommend is a service that provides recommendation areas for an e-commerce site with the recommendation engine.
        It was made with Ruby on Rails.
        I was assigned as a operation engineer.
        While I was taking charge of this, we achieved 1,000 accounts.
      </p>
      <h2>2011 - 2012 : Submit! Form for Smartphone</h2>
      <p>
        Submit! Form for smartphone was a service that privided simple Web forms like Wufoo.
        It was made with CakePHP, jQuery, jQuery mobile.
        I developed it from scratch alone and launched.
      </p>
      <h2>2010 - 2011 : Submit! Mail</h2>
      <p>
        Submit! Mail is an e-mail delivery service like MailChimp.
        It was made with CakePHP.
        I was assigned as a operation engineer.
      </p>
      <h2>2009 - 2010 : EC.DRAGON</h2>
      <p>
        In the first year and a half, I was assigned to the solutions section.
        At that time, they were developing EC Dragon that is a Content Management System for e-commerce site like Magento or EC Cube.
        It was made with CakePHP.
        I joined the project from the middle until the first version release as a junior programmer.
        After that, I released a few e-commerce sites with EC Dragon.
        Also I helped other troubled projects.
      </p>
    </div>
  );
};
