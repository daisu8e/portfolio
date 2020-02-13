import React, {FC, useEffect} from 'react';

import {Time} from 'App/models/services/Time';
import {Author} from 'App/models/entities/Author';

import {LayeredArchitecture, Mvc, Flux, NestedMvc, ComponentMvc} from 'App/views/components/figures';
import {Body, Figure} from './index.styled';

interface Props {
  author: Author;
}

export const Theory: FC<Props> = props => {

  const {author} = props;

  function init() {
    window.scrollTo(0, 0);
    document.title = `Theory of ${author.name}`;
  }

  useEffect(init, []);

  return (
    <Body>
      <h1>Theory</h1>
      <article>
        <p>
          Here is totally my theory of application development based on my experience as a front-end developer at this time, {Time.now('MMM YYYY')}.
          I'm sure this is a good idea, but it could be changed or updated in the future.
          Also, you might be confused about the terms.
          I'm going to use the terms based on domain-driven design.
          Please don't be confused, even though my terms might be wrong.
        </p>
      </article>
      <article>
        <h2>Do you prefer <em>Flux</em> rather than <em>MVC</em>?</h2>
        <p>
          I support both of these architectures.
          Because, in my opinion, each architecture is used in different levels.
          MVC is used at software level.
          On the other hand, Flux is used at object level.
          Therefore, they can be used together.
        </p>
        <p>
          Eric (2003) has described a software system that has a good architecture is based on the following four layers.
        </p>
        <Figure><LayeredArchitecture/></Figure>
        <p>
          Here is each feature of the layers:
        </p>
        <ul>
          <li>the user interface layer presents information and accepts user actions,</li>
          <li>the application layer manages presentation logic and its state,</li>
          <li>the domain layer manages business logic and its state,</li>
          <li>the infrastructure layer manages technical logic and its state.</li>
        </ul>
        <p>
          In this figure, MVC is expressed as follows.
        </p>
        <Figure><Mvc/></Figure>
        <p>
          The models are in the domain layer and they must be loosely coupled with other objects.
          They are called domain objects.
          On the other hand, a view and controller are tight coupled with each other and this pair extends over the application layer and the user interface layer.
          These pairs are called presentation objects.
          In this way, MVC is the design pattern to divide code between domain objects and presentation objects clearly.
        </p>
        <p>
          Then, what kind of design pattern is Flux?
          As above mentioned, it's used at object level that means "presentation object" level.
          So, Flux is expressed as follows.
        </p>
        <Figure><Flux/></Figure>
        <p>
          Flux is the pattern about unidirectional data flow between a view and controller, not about dividing something.
          First, the action that means a user interaction occurs and is handled as an event in the view.
          Next, the dispatcher that should be a function of the controller just distributes the action to the stores.
          Then, the stores that are supposed to be variables that cache some domain objects in the controller process the business logic.
          Finally, the view feeds back the result of the process to the user.
        </p>
        <p>
          Therefore, MVC and Flux are completely different design patterns.
          I'm sure we should use these awesome patterns effectively together.
        </p>
      </article>
      <article>
        <h2>The great achievement of React was to nest "<em>VC</em>."</h2>
        <p>
          I suppose we should focus more attention on this point.
          Since the modern front-end of software is getting more complex, the VC was divided into some components by nesting like this.
        </p>
        <Figure><NestedMvc/></Figure>
        <p>
          Originally, MVC included unidirectional data flow but a derivative of it that includes bidirectional data flow was born.
          I guess Flux attracted a lot of attention because the bidirectional data flow was incompatible with the nested VC.
        </p>
        <p>
          The most important thing is the models are not affected at all.
          This is the great benefit of MVC and it means we don't have to depend on frameworks like React, Angular, Vue.js, or even Redux for modeling domain objects.
        </p>
      </article>
      <article>
        <h2>Wherever you go, you'll find "<em>MVC</em>."</h2>
        <p>
          So far, I wrote about the design patterns of software architecture.
          But this thing could apply to components that consist of a view and controller because we can think of them as very small software.
          So, a component is expressed as follows.
        </p>
        <Figure><ComponentMvc/></Figure>
        <p>
          In this case, the domain layer of the component would manage presentation logic for the software, because the presentation logic is the business logic for the component.
          But we don't always need to create the model for the component.
          We should create it only if the presentation logic is getting big, for example, calenders and color pickers.
        </p>
        <p>
          In conclusion, domain layer has been always the heart of software, but also user interface layer is getting more and more important.
          That's why we have to divide code between domain objects and presentation objects with MVC.
          I'm going to keep using MVC as always.
        </p>
      </article>
    </Body>
  );
};
