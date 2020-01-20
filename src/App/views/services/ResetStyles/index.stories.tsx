import React from 'react';

import {ResetStyles} from './index';

export default {title: 'services/ResetStyles'};

const text = "I'm Daisuke Katsumata & Aug 22, 1981.";

export const Default = () => (
  <>
    <ResetStyles/>
    <div>{`<div>${text}</div>`}</div>
    <section>{`<section>${text}</section>`}</section>
    <header>{`<header>${text}</header>`}</header>
    <article>{`<article>${text}</article>`}</article>
    <footer>{`<footer>${text}</footer>`}</footer>
    <nav>{`<nav>${text}</nav>`}</nav>
    <h1>{`<h1>${text}</h1>`}</h1>
    <h2>{`<h2>${text}</h2>`}</h2>
    <h3>{`<h3>${text}</h3>`}</h3>
    <h4>{`<h4>${text}</h4>`}</h4>
    <h5>{`<h5>${text}</h5>`}</h5>
    <h6>{`<h6>${text}</h6>`}</h6>
    <p>{`<p>${text}</p>`}</p>
    <code>{`<code>${text}</code>`}</code>
    <div><strong>{`<strong>${text}</strong>`}</strong></div>
    <div><em>{`<em>${text}</em>`}</em></div>
    <div><mark>{`<mark>${text}</mark>`}</mark></div>
    <div><b>{`<b>${text}</b>`}</b></div>
    <div><i>{`<i>${text}</i>`}</i></div>
  </>
);
