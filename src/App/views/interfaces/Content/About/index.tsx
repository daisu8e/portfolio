import React, {FC, useEffect} from 'react';

import {Author} from 'App/models/entities/Author';

import {Body} from './index.styled';

interface Props {
  author: Author;
}

export const About: FC<Props> = props => {

  const {author} = props;

  function init() {
    window.scrollTo(0, 0);
    document.title = `About ${author.name}`;
  }

  useEffect(init, []);

  return (
    <Body>
      <h1>About</h1>
      <article>
        <h2>I'm a <em>front-end web developer</em> with <em>10 years</em> of experience.</h2>
        <p>
          Also, I have some experience in <em>UI/UX design</em> and <em>back-end web development</em>.
          I have designed, developed, launched, and maintained multiple SaaS from scratch.
          So, I can help you with the following jobs for your project:
        </p>
        <ul>
          <li>designing intuitive <em>UI/UX</em>,</li>
          <li>developing front-end like <em>SPA</em> with <em>React</em>, Angular, Vue, other JavaScript frameworks,</li>
          <li>in addition, user tracking scripts with plain JavaScript,</li>
          <li>developing back-end like <em>Web API</em>, Web App, asynchronous workers with <em>Ruby on Rails</em>,</li>
          <li>writing solid unit tests,</li>
          <li>configuring servers with Ansible,</li>
          <li>setting up CI/CD on CircleCI, Jenkins,</li>
          <li>operating <em>AWS</em> cloud resources on AWS console, Terraform,</li>
          <li>refactoring legacy code to beautiful code,</li>
          <li>solving problems users or team members have.</li>
        </ul>
      </article>
      <article>
        <h2>My ultimate goal is to create <em>beautiful experience</em> for all users.</h2>
        <p>
          Steve (2014) has said that "<em>Don't make me think!</em>" is his first law of usability.
          I totally agree with him.
          Then, my second law of usability would be "<em>Make me feel beautiful!</em>"
          Because, beautiful experience never bring about swearing.
        </p>
        <p>
          I can say most problems are caused by a lack of communication definitely.
          I think bad UX must have it between the application and the users.
          So, I put the most emphasis on designing <em>information architecture</em> to create beautiful experience.
          This is very complex and difficult topic, because it depends on various context of business and users.
          Thus, I think not only about users but also marketing deeply when I design it.
          I believe my goal is realizable when the business side and the user side have good communication each other.
        </p>
      </article>
      <article>
        <h2>My favorite motto is "<em>Divide and Conquer</em>."</h2>
        <p>
          Unfortunately, I'm not very smart and it can't be helped.
          Nevertheless, I have solved more or few problems until now.
          When I'm faced with a problem, I always use this approach.
          I'm sure I can solve most complex problems when I divide them properly.
          Besides, it always gives me a better solution.
        </p>
        <p>
          In my experience, intelligent people don't divide the difficult problem enough for ordinary people to understand.
          Because they can solve it with a bit dividing.
          Moreover, the code is huge.
          So, it's necessary to divide the problem and the code that solves it that every member can take over.
        </p>
        <p>
          Of course, I use divide and conquer when I develop a software with <em>domain-driven design</em>, <em>object-oriented programming</em>, and <em>design patterns</em>.
          Also, when I think about a business strategy, I make a <em>balanced scorecard</em>.
          This is also based on divide and conquer.
        </p>
        <p>
          If you have an unresolvable problem, you had better divide it more and you could find something.
        </p>
      </article>
      <article>
        <h2>My strongest skill is "<em>Refactoring</em>."</h2>
        <p>
          I always refactor code before and after I add a new feature, fix a bug, write an unit test.
          Refactoring tells me some good ideas where I should add the new feature, where the bug is, and even where the bad design is.
          I'm sure it must be essential skill for a software developer to make the software be strong, flexible, and sustainable.
        </p>
        <p>
          What I value when I refactor code is <em>abstraction</em>, <em>high cohesion</em>, and <em>loose coupling</em>.
          These are the most basic skills in object-oriented programming.
          But they are most important to do refactoring code.
          Eventually, refactoring is just to optimize code for the requirements at that time and they could be changed soon.
          So, it should be light task that doesn't take a long time.
          I think it's good enough that each module is just abstracted, collected, and isolated appropriately.
          It must be better not to have a debt.
        </p>
      </article>
      <article>
        <h2>I also have <em>weak points</em> to overcome.</h2>
        <p>
          <em>English</em> is the highest priority issue for me right now.
          If you require the person who can speak English fluently, I'm sorry I won't be able to help you yet.
          I hope I meet you someday when my english got improved more.
        </p>
        <p>
          I feel like my <em>UI design skill</em> is still immature.
          It's true to use a UI framework like Bootstrap, Material-UI, Semantic UI, or something is good solution.
          But I'd like to create original UI and visualization system. And I feel it might be possible through creating this portfolio with React.
        </p>
      </article>
    </Body>
  );
};
