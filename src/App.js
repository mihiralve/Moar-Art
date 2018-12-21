import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { Row, Col, Menu, Dropdown, Icon } from 'antd';
import signature from './images/signature.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const IMAGES =
  [{
          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
          caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
          src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
          thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212
  }]

  const workMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/work/oil">
          <div>
            Oil
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/work/pencil">
          <div>
            Pencil
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/work/watercolor">
          <div>
            Watercolor
          </div>
        </Link>
      </Menu.Item><Menu.Item>
        <Link to="/work/print">
          <div>
            Print
          </div>
        </Link>
      </Menu.Item>
    </Menu>
  );

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: <Home swapComponent={this.swapComponent.bind(this)}/>
    }
    
    this.swapComponent = this.swapComponent.bind(this);
  }

  swapComponent(newPage) {
    this.setState({
      activePage: newPage
    }); 

  }

  render() {
    return (
      <Router>
        <div>
          <div className="menubar">
            <Row>
              <Col span={6}>
                <img src={signature} alt="Meera"/>
              </Col>
              <Col span={6}>
                  <Link to="/" className="menutext">
                    <div className="menutext">
                      Home
                    </div>
                  </Link>
              </Col>
              <Col span={6}>
                <Link to="/work" className="menutext">
                  <Dropdown overlay={workMenu}>
                      <div className="menutext">
                        Work <Icon type="down" />
                      </div>
                  </Dropdown>
                </Link>
              </Col>
              <Col span={6}>
                  <Link to="/contact" className="menutext">
                    <div className="menutext">
                      Contact
                    </div>
                  </Link>
              </Col>
            </Row>
          </div>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/work" component={Work}/>
              <Route path="/contact" component={Contact}/>
            </div>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  constructor(props){
    super(props);
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  render(){
    return(
      <Router>
        <Gallery images={IMAGES}/>
      </Router>
    )
  }
}

class Work extends Component {
  constructor(props){
    super(props);
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  render(){
    return(
      <Router>
        <div>Work</div>
      </Router>
    )
  }
}

class Contact extends Component {
  constructor(props){
    super(props);
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  render(){
    return(
      <Router>
        <div>Contact</div>
      </Router>
    )
  }
}

export default App;

