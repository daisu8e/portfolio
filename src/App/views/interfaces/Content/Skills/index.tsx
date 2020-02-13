import React, {FC, useEffect} from 'react';

import {Author} from 'App/models/entities/Author';

import {Body, Field, Layer, Columns2} from './index.styled';

interface Props {
  author: Author;
}

export const Skills: FC<Props> = props => {

  const {author} = props;

  function init() {
    window.scrollTo(0, 0);
    document.title = `Skills of ${author.name}`;
  }

  useEffect(init, []);

  return (
    <Body>
      <h1>Skills</h1>
      <Field>
        <h2><span>Software Development</span></h2>
        <ul>
          <li>Inception Deck</li>
          <li>Scrum</li>
          <li>Kanban Board</li>
          <li>GitHub Flow</li>
          <li><em>Domain-driven Design</em></li>
          <li><em>Object-oriented Programming</em></li>
          <li><em>Design Patterns</em></li>
          <li><em>Unit Testing</em></li>
          <li><em>Code Refactoring</em></li>
          <li><em>Infrastructure as Code</em></li>
          <li>Microservices</li>
        </ul>
        <Columns2>
          <Field>
            <h3>Front-end Web Development</h3>
            <ul>
              <li><em>MVC + Flux Architecture</em></li>
              <li>Single-page Application</li>
              <li><em>UI/UX Design</em></li>
            </ul>
            <Layer>
              <h4>Application</h4>
              <ul>
                <li>JavaScript</li>
                <li><em>TypeScript</em></li>
                <li><em>React</em></li>
                <li>AngularJS 1.x</li>
                <li><em>lodash</em></li>
                <li>jQuery</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>CSS Modules</li>
                <li>Sass</li>
                <li>Bootstrap</li>
              </ul>
            </Layer>
            <Layer>
              <h4>Middleware</h4>
              <ul>
                <li>Node.js</li>
                <li>Create React App</li>
                <li>Storybook</li>
                <li>Gulp</li>
                <li>Webpack</li>
                <li>Bower</li>
              </ul>
            </Layer>
            <Layer>
              <h4>Infrastructure</h4>
              <ul>
                <li><em>AWS</em></li>
                <ul>
                  <li>Route53</li>
                  <li>ACM</li>
                  <li>CloudFront</li>
                  <li>S3</li>
                  <li>CloudWatch</li>
                </ul>
                <li>Terraform</li>
              </ul>
            </Layer>
          </Field>
          <Field>
            <h3>Back-end Web Development</h3>
            <ul>
              <li><em>MVC Architecture</em></li>
              <li>Web API</li>
              <li>Web Application</li>
              <li>Asynchronous Worker</li>
            </ul>
            <Layer>
              <h4>Application</h4>
              <ul>
                <li><em>Ruby</em></li>
                <li><em>Ruby on Rails</em></li>
              </ul>
            </Layer>
            <Layer>
              <h4>Middleware</h4>
              <ul>
                <li>Apache</li>
                <li>MySQL</li>
                <li>Supervisor</li>
              </ul>
            </Layer>
            <Layer>
              <h4>Infrastructure</h4>
              <ul>
                <li><em>AWS</em></li>
                <ul>
                  <li>Route53</li>
                  <li>ACM</li>
                  <li>Application Load Balancer</li>
                  <li>EC2</li>
                  <li>RDS</li>
                  <li>S3</li>
                  <li>SES</li>
                  <li>SQS</li>
                  <li>SNS</li>
                  <li>CloudWatch</li>
                </ul>
                <li>Ansible</li>
                <li>Terraform</li>
              </ul>
            </Layer>
          </Field>
        </Columns2>
        <Field>
          <h2>CI/CD</h2>
          <ul>
            <li>Jenkins</li>
            <li>CircleCI</li>
          </ul>
        </Field>
      </Field>
      <Field>
        <h2>Marketing</h2>
        <ul>
          <li>Balanced Scorecard</li>
        </ul>
      </Field>
    </Body>
  );
};
