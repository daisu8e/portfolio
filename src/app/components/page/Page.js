import React from 'react';
import './Page.scss';

function Page() {
  return (
    <div className="Page">
      <div className="container">
        <header>
          <div className="row">
            <div className="col-8">
              <h1>Daisuke Katsumata</h1>
            </div>
            <div className="col-4">
              <div className="navigation">
                <nav>
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link" href="https://github.com/daisu8e/" target="_blank"><i className="fab fa-github"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.linkedin.com/in/daisu8e/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/documents/daisuke-katsumata.pdf" target="_blank"><i className="far fa-file-pdf"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="body">
          <div className="row">
            <div className="col">
              <div>
                <h2>Works</h2>
                <div className="work">
                  <img src="/images/cart-recovery-site.png" alt="Cart Recovery" />
                  <h3><a href="https://www.cart-rcv.jp/" target="_blank">Cart Recovery</a></h3>
                  <p className="description">
                    Cart Recovery is a marketing automation tool that delivers emails or ads to customers who abandoned their cart on the e-commerce site.
                    It was made with Ruby on Rails, Angular.js and Java on AWS.
                    Just a back end developer and I developed it from scratch, and launched it.
                    I made the dashboard with Angular.js and Ruby on Rails, including UI/UX.
                    This is divided into SPA and JSON API.
                    Also I made the user tracking tag with JavaScript.
                  </p>
                </div>
                <div className="work">
                  <img src="/images/submit-recommend-site.png" alt="Submit! Recommend" />
                  <h3><a href="https://recommend.submit.ne.jp/" target="_blank">Submit! Recommend</a></h3>
                  <p className="description">
                    Submit! Recommend is a service that provides recommendation areas for an e-commerce site with the recommendation engine.
                    It was made with Ruby on Rails.
                    I was assigned as a operation engineer.
                    While I was taking charge of this, we achieved 1,000 accounts.
                  </p>
                </div>
                <div className="work">
                  <img src="/images/submit-form-site.png" alt="Submit! Form for smartphone" />
                  <h3>Submit! Form for smartphone</h3>
                  <p className="description">
                    Submit! Form for smartphone was a service that privided simple Web forms like Wufoo.
                    It was made with CakePHP, jQuery, jQuery mobile.
                    I developed it from scratch alone and launched.
                  </p>
                </div>
                <div className="work">
                  <img src="/images/submit-mail-site.png" alt="Submit! Mail" />
                  <h3><a href="https://www.submit.ne.jp/mail/" target="_blank">Submit! Mail</a></h3>
                  <p className="description">
                    Submit! Mail is an e-mail delivery service like MailChimp.
                    It was made with CakePHP.
                    I was assigned as a operation engineer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*
          <div className="row">
            <div className="col">
              <div>
                <h2>About</h2>
              </div>
            </div>
          </div>
          */}
        </div>
        <footer>
          <div className="row">
            <div className="col">
                <p className="text-center">© 2019 daisu8e</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Page;
