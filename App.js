import React from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
import Main from './components/main';



function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="headerColor" title="MY POTFOLIO" scroll>
            <Navigation>
                <a href="/Contact">FIND ME</a>
                <a href="/About">About</a>
                <a href="/Projects"><i className="fab fa-studiovinari">Projects</i></a>
                <a href="/Cv">CV</a>
            </Navigation>
        </Header>
        <Drawer className="drawarColor" title="MENU">
            <Navigation >
                <a href="/"><i className="fas fa-home"></i>Home</a>
                <a href="/Projects"><i className="fab fa-studiovinari"></i>Projects</a>
                <a href="/Contact"><i className="fas fa-address-book"></i>Contact</a>
                <a href="/About"><i className="fas fa-question"></i>About</a>
                <a href="/Cv">CV</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
