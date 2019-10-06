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
  Link,
  Redirect
} from 'react-router-dom';

const IMAGES =
  [{
          id: 0,
          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "After Rain (Jeshu John - designerspics.com)",
          medium:"oil",
          price:"$100"
  },
  {
          id: 1,
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
          caption: "Boats (Jeshu John - designerspics.com)", 
          medium:"watercolor",
          price:"$100"
  },

  {
          id: 2,
          src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
          thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          medium:"pencil",
          price:"$100"
  }]

  const workMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/work/all">
          <div>
            All
          </div>
        </Link>
      </Menu.Item>
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
                  <Dropdown overlay={workMenu}>
                      <div className="menutext">
                        Work <Icon type="down" />
                      </div>
                  </Dropdown>
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
          <div className="component">
              <Route exact path="/" component={Home}/>
              <Route path="/work/:medium" component={Work}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/detail/:id" component={Detail}/>
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
        <Gallery images={IMAGES} enableImageSelection={false}/>
      </Router>
    )
  }
}

// Pages showing thumbnails of all work (can be filtered by medium)
class Work extends Component {
  constructor(props){
    super(props);
    this.getImages = this.getImages.bind(this);
    this.filterImages = this.filterImages.bind(this);

    this.state = {
      toDetail: false,
      toDetailId: -1
    }
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  // filter images by medium
  filterImages(image){
    return image["medium"] === this.props.match.params.medium
  }

  // Either return all images or call filterImages
  getImages(){
    
    if (this.props.match.params.medium === "all") {
      return IMAGES;
    } else {
      return IMAGES.filter(this.filterImages)
    }
  }

  loadImage(ind){
    this.setState({toDetail:true, toDetailId:ind})
  }

  render(){

    if (this.state.toDetail === true){
      return <Redirect to={'/detail/' + this.state.toDetailId} />
    }

    var filteredImages = this.getImages();
    var emptyMessage = "";
    if (filteredImages.length === 0) {
      emptyMessage = "No Images to Display.";
    }

    return(
      <Router>
          <div>
            <Gallery images={filteredImages} enableLightbox={false} enableImageSelection={false} onClickThumbnail={(ind) => {this.loadImage(ind)}}/>
            <div>{emptyMessage}</div>
          </div>
      </Router>
    )
  }
}

// Page showing larger image and more details about each image
class Detail extends Component {
  constructor(props){
    super(props);

    this.img = this.getImage(this.props.match.params.id)
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  getImage(id){
    return IMAGES[id]
  }

  render(){
    return(
      <Router>
        <div>
          <h1 className="detail-caption">{this.img.caption}</h1>
          <img src={this.img.src} className="detail-img"/>
          
        </div>
      </Router>
    )
  }

}

// Contact Page
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

