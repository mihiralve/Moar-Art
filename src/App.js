import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { Row, Col, Menu, Dropdown, Icon, Tooltip } from 'antd';
import signature from './images/signature.png'
import peacock from './images/peacock_feather_small.png'
import peacock_med from './images/peacock_feather_medium.png'
import peacock_logo from './peacock_logo.png'
import city from './images/city.JPG'
import ganapati_1 from './images/ganapati_1.JPG'
import ganapati_2 from './images/ganapati_2.jpg'
import ganapati_3 from './images/ganapati_3.jpg'
import headshot from './images/meera_headshot.jpg'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const IMAGES =
  [{
          id: 0,
          src: "https://moarart.net/images/ganapati_1.png",
          thumbnail: "https://moarart.net/images/ganapati_1.png",
          thumbnailWidth: 2448,
          thumbnailHeight: 3264,
          title: "Baby Ganesha",
          medium:"Pencil",
          price:"Sold ($350)",
          size: "8x10"
  },
  {
          id: 1,
          src: "https://moarart.net/images/ganapati_2.jpg",
          thumbnail: "https://moarart.net/images/ganapati_2.jpg",
          thumbnailWidth: 1620,
          thumbnailHeight: 2070,
          title: "Zen Ganesh",
          medium:"Mixed Media",
          price:"Sold ($200)",
          size: "8x10"
  },

  {
          id: 2,
          src: "https://moarart.net/images/ganapati_3.jpg",
          thumbnail: "https://moarart.net/images/ganapati_3.jpg",
          thumbnailWidth: 1280,
          thumbnailHeight: 960,
          title: "Blessings",
          medium:"Pastel",
          price:"Sold ($2000)",
          size: "20x28"
  },

  {
    id: 3,
    src: "https://moarart.net/images/tree_of_life_1.jpg",
    thumbnail: "https://moarart.net/images/tree_of_life_1.jpg",
    thumbnailWidth: 2461,
    thumbnailHeight: 3003,
    title: "Tree of Life",
    medium:"Mixed Media",
    price:"$800",
    size: "16x20"
  },

  {
    id: 4,
    src: "https://moarart.net/images/pensive_buddha.jpg",
    thumbnail: "https://moarart.net/images/pensive_buddha.jpg",
    thumbnailWidth: 2386,
    thumbnailHeight: 3393,
    title: "Pensive Buddha",
    medium:"Mixed Media",
    price:"$600",
    size: "12x16"
  },

  {
    id: 5,
    src: "https://moarart.net/images/tree_of_life_3.jpg",
    thumbnail: "https://moarart.net/images/tree_of_life_3.jpg",
    thumbnailWidth: 2235,
    thumbnailHeight: 3393,
    title: "Budding",
    medium:"Mixed Media",
    price:"$450",
    size: "12x18"
  },

  {
    id: 6,
    src: "https://moarart.net/images/blauet.jpg",
    thumbnail: "https://moarart.net/images/blauet.jpg",
    thumbnailWidth: 2333,
    thumbnailHeight: 3155,
    title: "Blauet",
    medium:"Pencil",
    price:"$350",
    size: "8x10"
  },

  {
    id: 7,
    src: "https://moarart.net/images/oriental_beauty.jpg",
    thumbnail: "https://moarart.net/images/oriental_beauty.jpg",
    thumbnailWidth: 2334,
    thumbnailHeight: 3024,
    title: "Oriental Beauty",
    medium:"Pencil",
    price:"$350",
    size:"8x10"
  },

  {
    id: 8,
    src: "https://moarart.net/images/gallant_fowl.jpg",
    thumbnail: "https://moarart.net/images/gallant_fowl.jpg",
    thumbnailWidth: 3399,
    thumbnailHeight: 2646,
    title: "Gallant Fowl",
    medium:"Mixed Media",
    price:"$175",
    size:"8x10"
  },

  {
    id: 9,
    src: "https://moarart.net/images/arrogant_display.jpg",
    thumbnail: "https://moarart.net/images/arrogant_display.jpg",
    thumbnailWidth: 2750,
    thumbnailHeight: 3462,
    title: "Arrogant Display",
    medium:"Mixed Media",
    price:"$250",
    size:"8x10"
  },

  {
    id: 10,
    src: "https://moarart.net/images/at_first_glance.jpg",
    thumbnail: "https://moarart.net/images/at_first_glance.jpg",
    thumbnailWidth: 2553,
    thumbnailHeight: 3243,
    title: "At First Glance",
    medium:"Pencil",
    price:"$275",
    size:"9x11"
  },

  {
    id: 11,
    src: "https://moarart.net/images/simha.jpg",
    thumbnail: "https://moarart.net/images/simha.jpg",
    thumbnailWidth: 3473,
    thumbnailHeight: 2679,
    title: "Simha",
    medium:"Mixed Media",
    price:"$375",
    size:"8x10"
  },

  {
    id: 12,
    src: "https://moarart.net/images/the_relaxing_buddha.jpg",
    thumbnail: "https://moarart.net/images/the_relaxing_buddha.jpg",
    thumbnailWidth: 2564,
    thumbnailHeight: 3287,
    title: "The Relaxing Buddha",
    medium:"Pencil",
    price:"$450",
    size:"8x10"
  },

  {
    id: 13,
    src: "https://moarart.net/images/magnolias.jpg",
    thumbnail: "https://moarart.net/images/magnolias.jpg",
    thumbnailWidth: 2619,
    thumbnailHeight: 3539,
    title: "Magnolias",
    medium:"Pencil",
    price:"$200",
    size:"8x10"
  },

  {
    id: 14,
    src: "https://moarart.net/images/taal.jpg",
    thumbnail: "https://moarart.net/images/taal.jpg",
    thumbnailWidth: 2597,
    thumbnailHeight: 3298,
    title: "Taal",
    medium:"Mixed Media",
    price:"$275",
    size:"8x10"
  },

  {
    id: 15,
    src: "https://moarart.net/images/cymbolic.jpg",
    thumbnail: "https://moarart.net/images/cymbolic.jpg",
    thumbnailWidth: 2520,
    thumbnailHeight: 3397,
    title: "Cymbolic",
    medium:"Pencil",
    price:"$275",
    size:"8x10"
  },
  
  ]

  const LOCALIMAGES = [city, ganapati_1]


  const workMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/gallery/all">
          <div>
            All
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/gallery/oil">
          <div>
            Oil
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/gallery/pencil">
          <div>
            Pencil
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/gallery/watercolor">
          <div>
            Watercolor
          </div>
        </Link>
      </Menu.Item><Menu.Item>
        <Link to="/gallery/print">
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
            <Row type="flex" justify="space-between" align="top">
              <Col span={8}>
                <img src={peacock_logo} alt="Meera"/>
              </Col>
              <Col span={8}>
                  <Link to="/" className="menutext">
                    <div className="menutext">
                      Home
                    </div>
                  </Link>
              </Col>
              <Col span={8}>
                  {/* <Dropdown overlay={workMenu}> */}
                    <Link to="/gallery/all">
                      <div className="menutext">
                        {/* Work <Icon type="down"/> */}
                        Gallery
                      </div>
                    </Link>
                  {/* </Dropdown> */}
              </Col>
              {/* <Col span={6}>
                  <Link to="/contact" className="menutext">
                    <div className="menutext">
                      Contact
                    </div>
                  </Link>
              </Col> */}
            </Row>
          </div>
          <div className="component">
              <Route exact path="/" component={Home}/>
              <Route path="/gallery/:medium" component={Work}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/detail/:id" component={Detail}/>
              <Route path="/image/:id" component={Image}/>
            </div>
        </div>
      </Router>
    );
  }
}

class Construction extends Component {
  constructor(props){
    super(props);
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  render(){
    return(
      <Router>
        <div className="construction">
          Moar Art is currrently under construction, please check back soon!
        </div>
      </Router>
    )
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
        <Row type="flex">
          <Col sm={24} lg={12}>
            <div>
              <p className="contact-name">
                Meera Alve
                (Artist)
              </p>
              <img src={headshot} className="home-img"/>
              <p className="contact-bio">
                After finishing my master’s in physics, I started my career as a telecommunication engineer, but I have always had an artistic flair and dabbled a little bit in art as a hobby. I am mostly self-taught, which has led me to experiment with many different mediums and styles of work. I particularly love creating Indian art like Madhubani and Gond. While living in India, I worked with the late artist Sachin Nath, who helped me refine my technique. I continue to incorporate his teachings and look to various other artists, cultures, and motifs for inspiration. I work in oils, pastels, pencils, and ink with various nature inspired subjects and pick engaging aspects of different forms to develop a diverse body of work.
              </p>
              <p className="contact-bio">
                Email: <a href="mailto:MeeraAlve@gmail.com">MeeraAlve@gmail.com</a>
              </p>
            </div>
          </Col>
          <Col sm={24} lg={12}>
            {/* <Gallery images={IMAGES} enableImageSelection={false} rowHeight={300}/> */}
            <img src={city} className="home-img"/>
            <img src={ganapati_2} className="home-img"/>
            <img src={ganapati_3} className="home-img"/>

          </Col>
        </Row>
      </Router>
    )
  }
}

class Image extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <img src={city}/>
      </Router>
    );
  }

}

// Pages showing thumbnails of all work (can be filtered by medium)
class Work extends Component {
  constructor(props){
    super(props);
    this.getImages = this.getImages.bind(this);
    this.filterImages = this.filterImages.bind(this);
    this.loadImage = this.loadImage.bind(this);

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
    return image["medium"].toLowerCase() === this.props.match.params.medium.toLowerCase()
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

    this.setState({toDetail:true, toDetailId:this.getImages()[ind].id})

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
            <Gallery images={filteredImages} enableLightbox={false} enableImageSelection={false} onClickThumbnail={(ind) => this.loadImage(ind)} rowHeight={300}/>
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
          <h1 className="detail-caption">{this.img.title}</h1>
          <img src={this.img.src} className="detail-img"/>
          <h2 className="detail-info">Price: {this.img.price}</h2>
          <h2 className="detail-info">Medium: {this.img.medium}</h2>
          <h2 className="detail-info">Size: {this.img.size}</h2>
          <h2 className="detail-info">To purchase contact <a href="mailto:MeeraAlve@gmail.com">MeeraAlve@gmail.com</a></h2>
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
        <Row type="flex">
          <Col span={12}>
            <div>
              <p className="contact-name">
                Meera Alve
                (Artist)
              </p>
              <p className="contact-bio">
                After finishing my master’s in physics, I started my career as a telecommunication engineer, but I have always had an artistic flair and dabbled a little bit in art as a hobby. I am mostly self-taught, which has led me to experiment with many different mediums and styles of work. I particularly love creating Indian art like Madhubani and Gond. While living in India, I worked with the late artist Sachin Nath, who helped me refine my technique. I continue to incorporate his teachings and look to various other artists, cultures, and motifs for inspiration. I work in oils, pastels, pencils, and ink with various nature inspired subjects and pick engaging aspects of different forms to develop a diverse body of work.
              </p>
              <p className="contact-bio">
                Email: <a href="mailto:MeeraAlve@gmail.com">MeeraAlve@gmail.com</a>
              </p>
            </div>
          </Col>
          <Col span={12}>
            <Gallery images={IMAGES} enableImageSelection={false}/>
          </Col>
        </Row>
      </Router>
    )
  }
}

export default App;

