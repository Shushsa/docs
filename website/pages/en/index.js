/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
      
    );
    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
        <img src="img/Kira-Logo-Full.svg" width="500" height="500"></img>
          <PromoSection>
            <Button href={docUrl('general.html')}>FAQ</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {

  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        >
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const AboutProject = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'left'}}>
        <h2>About the Project</h2>
        <MarkdownBlock>Kira is a hyperscale decentralized exchange that enables trustless cross-chain token transfers and trading. Thanks to dual consensus mechanisms of Multi-Bonded Proof of Stake (MBPoS) that provides security and Multi-Bonded Proof of Authority (MBPoA) that delivers speed, users can trade in trustless manner whilst maintaining a user experience that matches or exceeds that of centralized exchanges.</MarkdownBlock>
        <MarkdownBlock>Connections to Internet of Blockchain (IoB) networks such as Cosmos, Polkadot and bridges to foreign public and private ledgers enable Kira users access to a variety of markets previously unreachable in a decentralized manner. Behind the scenes, the Tendermint consensus engine provides fast finality of trades, enabling liquidity providers to reduce risk, tighten spreads and deepen order books.</MarkdownBlock>
        <MarkdownBlock>Stakeholders and operators manage, govern and benefit from all aspects of exchange operations in a fully decentralized fashion, without any privileged participants deriving excessive power or tribute. Efficient operations and ongoing open-source development is incentivised via a novel economic model consisting of multiple self-sustaining positive feedback loops. Kira aims to offer the emerging Proof of Stake (PoS) ecosystem a number of fundamental advances in decentralisation that, taken together, will help ensure the future security of all interconnected PoS by delivering uncensorable and unstoppable market access.</MarkdownBlock>
        <MarkdownBlock>To learn more click here, or see Kira FAQ</MarkdownBlock>
      </div>
    );
    const TeamList = () => (

      <Block layout="threeColumn">
        {      

          [{
            content: 'Co-Founder & Chief Executive Officer',
            image: `${baseUrl}img/milanavalmont.jpg`,
            title: 'Milana Valmont',
          },
          {
            content: 'Founder & Chief Technology Officer',
            image: `${baseUrl}img/asmodat.png`,
            title: 'Mateusz Grzelak'
          },
          {
            content: 'Head of Engineering',
            image: `${baseUrl}img/ethan.jpg`,
            title: 'Ethan Frey',
          },          
        ]}
      </Block>

      
    );
    const TeamList2 = () => (
      <Block layout="threeColumn">
        {
          [{
            content: 'Advisor',
            image: `${baseUrl}img/niki.png`,
            title: 'Niki Wiles', 
          },
          {
            content: 'Security Advisor',
            image: `${baseUrl}img/jorge.jpg`,
            title: 'Jorge Rodriguez',
          },

          {
            content: 'Social Media Manager',
            image: `${baseUrl}img/lawrence.jpg`,
            title: 'Lawrence Stoican',
          },

        ]}
      </Block>

      
    );

    const FeatureCallout = () => (
      
      <div
        style={{textAlign: 'center'}}>
        <h2>Contact</h2>
        <p>hello@kiraex.com</p>
      </div>
      
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'left',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
          
        ]}
      </Block>
      
    );

 


    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">

        </div>
      </div>
    );
  }
}

module.exports = Index;
