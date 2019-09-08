/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">

          <div>
            <h5>Community</h5>
            <a
              href="https://t.me/kirainterex"
              target="_blank"
              rel="noreferrer noopener">
              Telegram
            </a>
            <a
              href="https://twitter.com/kiraex"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/kiraex"
              target="_blank"
              rel="noreferrer noopener">
              LinkedIn
            </a>
            <a
              href="https://medium.com/kira-core"
              target="_blank"
              rel="noreferrer noopener">
              Medium
            </a>
            <a
              href="https://github.com/kira-ex"
              target="_blank"
              rel="noreferrer noopener">
              Github
            </a>

          </div>
          <div>
          <a
              href="https://kiraex.com/"
              target="_blank"
              rel="noreferrer noopener">
              Kira Exchange
            </a>
            <h5>Contact us</h5>
            <h5>hello@kiraex.com</h5>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
