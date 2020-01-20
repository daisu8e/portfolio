import React, {FC, useEffect} from 'react';

import css from './index.module.scss';

export const About: FC = () => {

  function init() {
    window.scrollTo(0, 0);
    document.title = 'About Daisuke Katsumata';
  }

  useEffect(init, []);

  return (
    <div className={css.body}>
      <h1>About</h1>
      <article>
        <h2>I'm a <em>front-end web developer</em> with <em>10 years</em> of experience.</h2>
        <p>
          Also, I have some experience in <em>UI/UX design</em> and <em>back-end web development</em>.
          I have maintained, developed and launched multiple SaaS from scratch.
          That's why I can help you with the following sides of your project:
        </p>
        <ul>
          <li>developing the UI with React, Angular, Vue, etc...,</li>
          <li>designing the UX</li>
          <li>developing the web api server</li>
          <li>setting up the CI/CD,</li>
        </ul>
      </article>
      <article>
        <h2>My ultimate goal is to create <em>beautiful experience</em> for all users.</h2>
        <p>
          Steve (2014) has said that "<em>Don't make me think!</em>" was his first law of usability.
          I totally agree with him.
          Then, my second law of usability is "<em>Make me feel beautiful!</em>"
          Because, beautiful experience never bring about swearing, does it?
        </p>
        <ul>
          <li>Information Architecture</li>
        </ul>
      </article>
      <article>
        <h2>My favorite motto is "<em>Divide and Conquer</em>."</h2>
        <p>
          Unfortunately, I'm not very smart.
          It can't be helped.
          So, I have to make the most of what I have.
          In my experience,
        </p>
      </article>
      <article>
        <h2>My strongest skill is "<em>Refactoring</em>."</h2>
        <p>
          I always refactor code when I add a new feature, fix a bug, write an unit test, and even finish coding.
          Refactoring gives me good ideas about what I should do next.
        </p>
      </article>
      <article>
        <h2>I also have <em>weak points</em> to overcome.</h2>
        <p>
          English is the highest priority issue for me right now.
          If you require the person who can speak English fluently, I'm sorry I won't be able to help you yet.
          I hope I meet you someday when my english got improved more.
        </p>
        <p>
          I think my visual design skill is still immature.
          I guess the style of it is not fixed enough.
        </p>
      </article>
    </div>
  );
};
