import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { Row, Col, Form, Input, Button} from 'antd';
// import signature from './images/signature.png'
// import peacock from './images/peacock_feather_small.png'
// import peacock_med from './images/peacock_feather_medium.png'
// import peacock_logo from './peacock_logo.png'
// import city from './images/city.JPG'
// import ganapati_1 from './images/ganapati_1.JPG'
// import ganapati_2 from './images/ganapati_2.jpg'
// import ganapati_3 from './images/ganapati_3.jpg'
import headshot from './images/meera_headshot.jpg'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { jsonToString } from 'webpack/lib/Stats';

const IMAGES =
  [
    {
      id: 0,
      src: "https://moarart.net/images/ganapati_1.png",
      thumbnail: "https://moarart.net/images/ganapati_1_thumb.png",
      thumbnailWidth: 375,
      thumbnailHeight: 500,
      title: "Baby Ganesha",
      medium:"Colored Pencil",
      price:"Sold ($350)",
      size: "8x10"
    },

    {
      id: 1,
      src: "https://moarart.net/images/ganapati_2.jpg",
      thumbnail: "https://moarart.net/images/ganapati_2_thumb.jpg",
      thumbnailWidth: 391,
      thumbnailHeight: 500,
      title: "Zen Ganesh",
      medium:"Mixed Media",
      price:"Sold ($200)",
      size: "8x10"
    },

    {
      id: 2,
      src: "https://moarart.net/images/ganapati_3.jpg",
      thumbnail: "https://moarart.net/images/ganapati_3_thumb.jpg",
      thumbnailWidth: 667,
      thumbnailHeight: 500,
      title: "Blessings",
      medium:"Pastel",
      price:"Sold ($2000)",
      size: "20x28"
    },

    {
      id: 3,
      src: "https://moarart.net/images/tree_of_life_1.jpg",
      thumbnail: "https://moarart.net/images/tree_of_life_1_thumb.jpg",
      thumbnailWidth: 410,
      thumbnailHeight: 500,
      title: "Tree of Life",
      medium:"Mixed Media",
      price:"$800",
      size: "16x20"
    },

    {
      id: 4,
      src: "https://moarart.net/images/pensive_buddha.jpg",
      thumbnail: "https://moarart.net/images/pensive_buddha_thumb.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      title: "Pensive Buddha",
      medium:"Mixed Media",
      price:"$600",
      size: "12x16"
    },

    {
      id: 5,
      src: "https://moarart.net/images/tree_of_life_3.jpg",
      thumbnail: "https://moarart.net/images/tree_of_life_3_thumb.jpg",
      thumbnailWidth: 329,
      thumbnailHeight: 500,
      title: "Budding",
      medium:"Mixed Media",
      price:"$450",
      size: "12x18"
    },

    {
      id: 6,
      src: "https://moarart.net/images/blauet.jpg",
      thumbnail: "https://moarart.net/images/blauet_thumb.jpg",
      thumbnailWidth: 370,
      thumbnailHeight: 500,
      title: "Blauet",
      medium:"Colored Pencil",
      price:"$350",
      size: "8x10"
    },

    {
      id: 7,
      src: "https://moarart.net/images/oriental_beauty.jpg",
      thumbnail: "https://moarart.net/images/oriental_beauty_thumb.jpg",
      thumbnailWidth: 386,
      thumbnailHeight: 500,
      title: "Oriental Beauty",
      medium:"Colored Pencil",
      price:"$350",
      size:"8x10"
    },

    {
      id: 8,
      src: "https://moarart.net/images/gallant_fowl.jpg",
      thumbnail: "https://moarart.net/images/gallant_fowl_thumb.jpg",
      thumbnailWidth: 642,
      thumbnailHeight: 500,
      title: "Gallant Fowl",
      medium:"Mixed Media",
      price:"$175",
      size:"8x10"
    },

    {
      id: 9,
      src: "https://moarart.net/images/arrogant_display.jpg",
      thumbnail: "https://moarart.net/images/arrogant_display_thumb.jpg",
      thumbnailWidth: 397,
      thumbnailHeight: 500,
      title: "Arrogant Display",
      medium:"Mixed Media",
      price:"$250",
      size:"8x10"
    },

    {
      id: 10,
      src: "https://moarart.net/images/at_first_glance.jpg",
      thumbnail: "https://moarart.net/images/at_first_glance_thumb.jpg",
      thumbnailWidth: 394,
      thumbnailHeight: 500,
      title: "At First Glance",
      medium:"Colored Pencil",
      price:"$275",
      size:"9x11"
    },

    {
      id: 11,
      src: "https://moarart.net/images/simha.jpg",
      thumbnail: "https://moarart.net/images/simha_thumb.jpg",
      thumbnailWidth: 648,
      thumbnailHeight: 500,
      title: "Simha",
      medium:"Mixed Media",
      price:"$375",
      size:"8x10"
    },

    {
      id: 12,
      src: "https://moarart.net/images/the_relaxing_buddha.jpg",
      thumbnail: "https://moarart.net/images/the_relaxing_buddha_thumb.jpg",
      thumbnailWidth: 390,
      thumbnailHeight: 500,
      title: "The Relaxing Buddha",
      medium:"Colored Pencil",
      price:"$450",
      size:"8x10"
    },

    {
      id: 13,
      src: "https://moarart.net/images/magnolias.jpg",
      thumbnail: "https://moarart.net/images/magnolias_thumb.jpg",
      thumbnailWidth: 370,
      thumbnailHeight: 500,
      title: "Magnolias",
      medium:"Colored Pencil",
      price:"$200",
      size:"8x10"
    },

    {
      id: 14,
      src: "https://moarart.net/images/taal.jpg",
      thumbnail: "https://moarart.net/images/taal_thumb.jpg",
      thumbnailWidth: 394,
      thumbnailHeight: 500,
      title: "Taal",
      medium:"Mixed Media",
      price:"$275",
      size:"8x10"
    },

    {
      id: 15,
      src: "https://moarart.net/images/cymbolic.jpg",
      thumbnail: "https://moarart.net/images/cymbolic_thumb.jpg",
      thumbnailWidth: 371,
      thumbnailHeight: 500,
      title: "Cymbolic",
      medium:"Colored Pencil",
      price:"$275",
      size:"8x10"
    },

    {
      id: 16,
      src: "https://moarart.net/images/matsya.jpg",
      thumbnail: "https://moarart.net/images/matsya_thumb.jpg",
      thumbnailWidth: 399,
      thumbnailHeight: 500,
      title: "Matsya",
      medium:"Mixed Media",
      price:"$800",
      size:"12x16"
    },

    {
      id: 17,
      src: "https://moarart.net/images/tree_of_life_2.jpg",
      thumbnail: "https://moarart.net/images/tree_of_life_2_thumb.jpg",
      thumbnailWidth: 389,
      thumbnailHeight: 500,
      title: "Tree of Life",
      medium:"Mixed Media",
      price:"Held for show",
      size:"12x16"
    },

    {
      id: 18,
      src: "https://moarart.net/images/moksha.jpg",
      thumbnail: "https://moarart.net/images/moksha_thumb.jpg",
      thumbnailWidth: 400,
      thumbnailHeight: 500,
      title: "Moksha",
      medium:"Colored Pencil",
      price:"$1500",
      size:"11x14"
    },

    {
      id: 19,
      src: "https://moarart.net/images/peaches.jpg",
      thumbnail: "https://moarart.net/images/peaches_thumb.jpg",
      thumbnailWidth: 385,
      thumbnailHeight: 500,
      title: "Peaches",
      medium:"Mixed Media",
      price:"$120",
      size:"8x10"
    },

    {
      id: 20,
      src: "https://moarart.net/images/perched.jpg",
      thumbnail: "https://moarart.net/images/perched_thumb.jpg",
      thumbnailWidth: 394,
      thumbnailHeight: 500,
      title: "Perched",
      medium:"Colored Pencel",
      price:"$75",
      size:"8x10"
    },

    {
      id: 21,
      src: "https://moarart.net/images/the_couple.jpg",
      thumbnail: "https://moarart.net/images/the_couple_thumb.jpg",
      thumbnailWidth: 844,
      thumbnailHeight: 500,
      title: "The Couple",
      medium:"Pastels",
      price:"Sold",
      size:"10x13 Each"
    },

    {
      id: 22,
      src: "https://moarart.net/images/sunrise.jpg",
      thumbnail: "https://moarart.net/images/sunrise_thumb.jpg",
      thumbnailWidth: 385,
      thumbnailHeight: 500,
      title: "Sunrise",
      medium:"Oil",
      price:"Sold",
      size:"30x40"
    },

    {
      id: 23,
      src: "https://moarart.net/images/moar.jpg",
      thumbnail: "https://moarart.net/images/moar_thumb.jpg",
      thumbnailWidth: 503,
      thumbnailHeight: 500,
      title: "Moar",
      medium:"Oil",
      price:"Sold",
      size:"18x18"
    },
  
  ]


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
              <Col span={24}>
                <a href="https://moarart.net/"><h1 className="website-head">Moar Art</h1></a>
              </Col>
            </Row>
            <Row type="flex" justify="space-between" align="top">
              <Col span={12}>
                  <Link to="/home" className="menutext">
                    <div className="menutext">
                      Home
                    </div>
                  </Link>
              </Col>
              <Col span={12}>
                    <Link to="/gallery/all">
                      <div className="menutext">
                        Gallery
                      </div>
                    </Link>
              </Col>
            </Row>
          </div>
          <div className="component">
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home}/>
              <Route path="/gallery/:medium" component={Work}/>
              <Route path="/form" component={ContactForm}/>
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
          <div className="home-div">
            <Row type="flex">
              <Col sm={24} lg={12} className="home-col">
                <div>
                  <p className="contact-name">
                    Meera Alve
                    (Artist)
                  </p>
                  <img src={headshot} className="bio-img" align="left"/>
                  <p className="contact-bio">
                    After finishing my master’s in physics, I started my career as a telecommunication engineer, but have always had an artistic flair and dabbled a little bit in art as a hobby. I am mostly self-taught, which has led me to experiment with many different mediums and styles of work. I particularly love creating Indian art like Madhubani, Gond and Pichwai. While living in India, I worked with the late artist Sachin Nath, who helped me refine my technique. I continue to incorporate his teachings and look to various other cultures and motifs for inspiration. I work in oils, pastels, pencils, and ink with various nature inspired subjects and pick engaging aspects of different forms to develop a diverse body of work.
                  </p>
                  <p className="contact-bio">
                    Email: <a href="mailto:contact@moarart.net">contact@moarart.net</a>
                  </p>
                </div>
              </Col>
              <Col sm={24} lg={12} className="home-col">
              <a href="https://moarart.net/detail/23"><img src="https://moarart.net/images/moar.jpg" className="home-img"/></a>

              <a href="https://moarart.net/detail/2"><img src="https://moarart.net/images/ganapati_3.jpg" className="home-img"/></a>

              </Col>
            </Row>
          </div>  
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
          <Row>
            <h1 className="detail-caption">{this.img.title}</h1>
          </Row>
          <Row>
            <Col sm={24} lg={12} className="detail-col">
              <img src={this.img.src} className="detail-img"/>
            </Col>
            <Col sm={24} lg={12} className="detail-col">
              <h2 className="detail-info">Size: {this.img.size}</h2>
              <h2 className="detail-info">Medium: {this.img.medium}</h2>
              <h2 className="detail-info">Price: {this.img.price}</h2>
              <h2 className="detail-info">To purchase contact <a href="mailto:contact@moarart.net">contact@moarart.net</a></h2>
              <ContactForm pieceName={this.img.title}/>
            </Col>
          </Row>
        </div>
      </Router>
    )
  }

}

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      formState: "0",
      buttonText: "Submit",
      postError:"0",
      postResponse:0
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch("https://api.mihiralve.com/form",{
          method: 'POST', 
          body: JSON.stringify(values)
        }).then((response) => {
          // handle HTTP response
          if (response.status == 200){
            this.setState({formState:"1", buttonText:"Submitted", postResponse:response, postError:"0"})
          }
          else{
            this.setState({postError:"1", postResponse:response})
          }
        }).catch((error) => {
          if (this.state.postResponse.status != 200) {
            this.setState({postError:"1"})
          }
        });
      }
    });


  }

  handleChange(){
    this.setState({formState:"0", buttonText:"Submit"})
  }

  render(){

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const { TextArea } = Input;
    const formSubmitted = this.state.formState === '1'

    return(
      <Router>
        <div className="contact-form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail:">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input onChange={this.handleChange}/>)}
            </Form.Item>
            <Form.Item label="Name:">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ],
              })(<Input onChange={this.handleChange}/>)}
            </Form.Item>
            <Form.Item label="Zip Code (for shipping price estimation):">
              {getFieldDecorator('zip_code', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your zip code',
                  },
                ],
              })(<Input onChange={this.handleChange}/>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('piece_name',{initialValue: this.props.pieceName})}
            </Form.Item>
            <Form.Item label="Comments or Questions:">
              {getFieldDecorator('message', {initialValue: ""})(<TextArea rows={4} onChange={this.handleChange}/>)}
            </Form.Item>
            <Button type="primary" htmlType="submit" disabled={formSubmitted}>{this.state.buttonText}</Button>
            <div className="submit-error">{this.state.postError === "1" ? "Error Submitting, please try again later." : ""}</div>
          </Form>
          
        </div>
      </Router>
    )
  }

}

const ContactForm = Form.create()(Contact);
export default App;

