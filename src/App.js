// import React from 'react';
import './App.css';
import React, {Component} from 'react';
import { Grid, Cell, Layout, Header, Navigation,Drawer, Content,Footer, FooterSection, FooterDropDownSection, FooterLinkList   } from 'react-mdl';
import main from './Components/main';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
// import  '/.JaaScript.js';

class App extends Component{
  render() {
  return (
<div className="demo-big-content">
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header title="WebSite" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Project</Link>
            </Navigation></Header>
       
        <Drawer title="List">
            <Navigation>
               <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Project</Link>
            </Navigation>
        </Drawer>
        <Content>



            <div class="page-content" />
           <main/>
    




<div className="info">
  <h1>Zebra Facts</h1>
  <p>Zebras <span className="yellow">(/ˈziːbrə/ ZEE-brə, /ˈzɛbrə/ ZEB-rə)</span> are several species of African equids (horse family) united by their distinctive black-and-white striped coats. Their stripes come in different patterns, unique to each individual. They are generally social animals that live in small harems to large herds. Unlike their closest relatives, horses and donkeys, zebras have never been truly domesticated.</p>

  <p>There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra and the mountain zebra belong to the subgenus Hippotigris, while Grévy's zebra is the sole species of subgenus Dolichohippus. The latter resembles an ass, to which zebras are closely related, while the former two look more horse-like. All three belong to the genus Equus, along with other living equids.</p>

  <p>The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga, became extinct in the late 19th century – though there is currently a plan, called the Quagga Project, that aims to breed zebras that are phenotypically similar to the quagga in a process called breeding back.</p>
  
  <small>src: <a href="https://en.wikipedia.org/wiki/Zebra" target="_blank">Wikipedia</a></small>
  </div>
  

           <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
</Content>
    </Layout>
    </div>

  );
}
}

export default App;
