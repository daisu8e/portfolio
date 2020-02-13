import React, {FC, useEffect} from 'react';

import {Author} from 'App/models/entities/Author';

import {Body, Year, Period, Before, Project} from './index.styled';

interface Props {
  author: Author;
}

export const Work: FC<Props> = props => {

  const {author} = props;

  function init() {
    window.scrollTo(0, 0);
    document.title = `Work of ${author.name}`;
  }

  useEffect(init, []);

  return (
    <Body>
      <h1>Work</h1>
      <Year><span>2020</span></Year>
      <Period>
        <Project>
          <h2>Portfolio</h2>
          <p>
            Dec 2019 - Feb 2020
          </p>
          <p>
            Just this site you are looking at right now.
            This is <em>the first React app</em> I have ever created.
            I learned how wonderful modern React that means Function Components and Hooks is.
            I also tried Redux and Redux Saga, but I couldn't see their good points with good domain layer.
            I adopted the following tools.
          </p>
          <ul>
            <li>React with TypeScript from Create React App</li>
            <li>styled-components</li>
            <li>AWS: Route53, ACM, CloudFront, S3</li>
            <li>Terraform</li>
            <li>CircleCI</li>
          </ul>
        </Project>
      </Period>
      <Year><span>2019</span></Year>
      <Period>
        <Project>
          <h2>Learning English & Mobile App Development</h2>
          <p>
            CICCC : Oct 2017 - Aug 2019
          </p>
          <p>
            I was taking the mobile app development program at Cornerstone International Community College of Canada.
            Besides mobile app development, it was very good for me to learn <em>C</em> and <em>algorithms</em>, and <em>Unreal Engine 4</em>.
          </p>
          <ul>
            <li>iOS app development with Swift</li>
            <li>Android app development with Java</li>
          </ul>
        </Project>
      </Period>
      <Year><span>2017</span></Year>
      <Period>
        <Project>
          <h2>Cart Recovery</h2>
          <p>
            e-Agency : Sep 2014 - Sep 2017
          </p>
          <p>
            This SaaS platform is a marketing automation tool that recovers opportunity loss of e-commerce sites by reminding customers
            who abandoned their cart to complete their purchase with emails and ads.
            The users who signed this up can check what products are in the carts and abandoned in real time.
          </p>
          <p>
            This is <em>the best product</em> I have ever developed.
            We started it up with 3 members from making the inception deck and developed from scratch, then launched.
            In this project, I learned a lot of things about <em>product management</em>, <em>marketing</em>, <em>UI/UX design</em>, <em>information architecture</em>, and <em>software architecture</em>.
          </p>
          <p>We adopted a microservice architecture and I developed following parts:</p>
          <ul>
            <li>Dashboard UI,</li>
            <ul>
              <li>Single-page application with AngularJS 1.3</li>
              <li>UI/UX design</li>
              <li>Intuitive report</li>
              <li>Real-time analytics</li>
              <li>Email automation</li>
              <li>Responsive email editor</li>
              <li>Demand-side platform integration</li>
              <li>4-role users</li>
              <li>Internationalization</li>
              <li>... and a lot more</li>
            </ul>
            <li>Dashboard Web API,</li>
            <ul>
              <li>JSON-formatted REST API with Ruby on Rails 4.2</li>
              <li>OAuth 2.0 client for the other microservice</li>
              <li>Internationalization</li>
            </ul>
            <li>Asynchronous worker,</li>
            <ul>
              <li>Ruby on Rails 4.2</li>
              <li>OAuth 2.0 client for the other microservice</li>
              <li>Automated email distribution</li>
              <li>Report processing</li>
              <li>Based on queuing chain pattern</li>
            </ul>
            <li>User tracking script.</li>
            <ul>
              <li>JavaScript ES5</li>
              <li>Manageable in Google Tag Manager and Yahoo! Tag Manager</li>
              <li>Piggybacking integrated AD tags</li>
            </ul>
          </ul>
        </Project>
      </Period>
      <Year><span>2014</span></Year>
      <Period>
        <Project>
          <h2>Submit! Recommendation</h2>
          <p>
            e-Agency : Oct 2012 - Sep 2014
          </p>
          <p>
            This SaaS is a cross-selling tool for e-commerce sites.
            When a customer visits an product page at an e-commerce site, it suggests related products that other customers who have visited the page have also checked or purchased.
          </p>
          <p>
            I joined this project to maintain and improve when it was at maturity.
            I was lucky it achieved 1,000 accounts, while I was in charge.
            Besides, I learned a lot of things about <em>back-end, infrastructure technologies</em>, <em>unit testing</em>, and <em>product management</em>.
            And I took charge of the following.
          </p>
          <ul>
            <li>Product Management</li>
            <ul>
              <li>Improved ticket management</li>
              <li>Introduced GitHub flow</li>
              <li>Proposed a good idea for product recommendation email</li>
            </ul>
            <li>Dashboard</li>
            <ul>
              <li>Ruby on Rails</li>
              <li>Introduced jQuery</li>
              <li>Added interactive recommendation templates with jQuery plug-ins</li>
              <li>Increased designed recommendation templates</li>
              <li>Added other types of recommendation such as new products and feature products</li>
              <li>Strengthened security against XSS, CSRF, etc.</li>
              <li>Introduced RSpec</li>
              <li>Wrote unit tests</li>
              <li>Updated Ruby and Ruby on Rails</li>
            </ul>
            <li>Asynchronous worker</li>
            <ul>
              <li>Ruby on Rails</li>
              <li>Added some batch processing for new features</li>
              <li>Introduced RSpec</li>
              <li>Wrote unit tests</li>
              <li>Updated Ruby and Ruby on Rails</li>
            </ul>
            <li>User tracking script & Recommendation rendering script</li>
            <ul>
              <li>JavaScript</li>
              <li>Enabled it to import jQuery and jQuery plug-ins</li>
            </ul>
            <li>Infrastructure</li>
            <ul>
              <li>Migrated from Subversion to Git</li>
              <li>Divided the monolithic repository into the each services</li>
              <li>Introduced CI/CD</li>
            </ul>
          </ul>
        </Project>
      </Period>
      <Year><span>2012</span></Year>
      <Period>
        <Project>
          <h2>A CRM software service</h2>
          <p>
            e-Agency : Nov 2011 - Sep 2012
          </p>
          <p>
            This SaaS was supposed to be a CRM tool but failed regrettably.
          </p>
          <p>
            I tried a serious challenge of developing a rich UI application like SPA, but I couldn't achieve it because I was inexperienced at all.
            Nevertheless, I learned a lot from the experience.
            I believe this pain made Cart Recovery a success.
            I tried the following.
          </p>
          <ul>
            <li>Dashboard</li>
            <ul>
              <li>CakePHP</li>
              <li>Backbone.js</li>
              <li>Underscore.js</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>UI/UX design</li>
            </ul>
          </ul>
        </Project>
        <Project>
          <h2>Submit! Form for Smartphone</h2>
          <p>
            e-Agency : Apr 2011 - Oct 2011
          </p>
          <p>
            This SaaS was a form builder that enabled users to build forms that specialized in smartphone without code
            and install them into their site with one {'<script>'} tag.
          </p>
          <p>
            I developed this product from scratch and launched.
            In this project, I learned about a lot of the basics of <em>front-end technologies</em> such as <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>.
            Looking back, this was the first work as a front-end developer.
            And I developed the following.
          </p>
          <ul>
            <li>Dashboard & Form building script</li>
            <ul>
              <li>CakePHP</li>
              <li>jQuery</li>
              <li>jQuery UI</li>
              <li>jQuery Mobile</li>
              <li>UX design</li>
              <li>Form editor</li>
              <li>Distribution of dynamic {'<script>'} tag</li>
              <li>... and a lot more</li>
            </ul>
          </ul>
        </Project>
      </Period>
      <Year><span>2011</span></Year>
      <Period>
        <Project>
          <h2>Submit! Mail</h2>
          <p>
            e-Agency : Oct 2010 - Mar 2011
          </p>
          <p>
            This SaaS is an email marketing tool that enables users to start and send emails easily at a low price.
          </p>
          <p>
            I joined this project to maintain and improve soon after it launched.
            In this project, I learned about importance of <em>refactoring</em>.
            And I took charge of the following.
          </p>
          <ul>
            <li>Dashboard</li>
            <ul>
              <li>CakePHP</li>
              <li>Introduced jQuery</li>
              <li>Improved UI</li>
              <li>Added open and click effect measurement</li>
              <li>Refactored and optimized code</li>
            </ul>
            <li>Asynchronous worker</li>
            <ul>
              <li>PHP</li>
              <li>Refactored and optimized code</li>
            </ul>
          </ul>
        </Project>
      </Period>
      <Year><span>2010</span></Year>
      <Period>
        <Project>
          <h2>EC.DRAGON</h2>
          <p>
            e-Agency : Jun 2009 - Sep 2010
          </p>
          <p>
            This was an e-commerce CMS that enabled developers to build e-commerce platforms quickly and store owners to manage their online businesses with ease.
          </p>
          <p>
            I joined this project from the middle to complete the initial version as a junior developer.
            After it completed, I actually built, launched, and maintained several e-commerce platforms with it.
            In these projects, I learned about <em>MVC architecture</em> in earnest.
            And I took charge of the following.
          </p>
          <ul>
            <li>Dashboard & E-commerce site</li>
            <ul>
              <li>CakePHP</li>
              <li>Customized for complex campaigns</li>
              <li>Built mobile site</li>
              <li>Integrated with some payment services</li>
              <li>Added automatic generation of PDF invoices</li>
            </ul>
          </ul>
        </Project>
      </Period>
      <Year><span>2009</span></Year>
      <Before/>
    </Body>
  );
};
