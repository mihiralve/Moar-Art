import React, { Component } from 'react';
import './App.css';
import { Row, Col, Form, Input, Button} from 'antd';
import headshot from './images/meera_headshot.jpg'
import IMAGES from './images.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect, 
  withRouter
} from 'react-router-dom';

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
              <Route exact path="/" component={withRouter(Home)}/>
              <Route exact path="/home" component={withRouter(Home)}/>
              <Route path="/gallery/:medium" component={withRouter(Work)}/>
              <Route path="/form" component={withRouter(ContactForm)}/>
              <Route path="/detail/:id" component={withRouter(Detail)}/>
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
            <Gallery images={filteredImages}  onClickThumbnail={(ind) => this.loadImage(ind)} rowHeight={300}/>
            <div>{emptyMessage}</div>
          </div>
      </Router>
    )
  }
}

class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: document.getElementById('gallery').clientWidth, height: document.getElementById('gallery').clientHeight });
  }

  renderImage(img){

    let imgHeight = this.props.rowHeight;
    let imgWidth = (this.props.rowHeight/img.thumbnailHeight) * img.thumbnailWidth;

    if (this.state.width != 0 && imgWidth > this.state.width){
      console.log(this.state.width)
      console.log(imgHeight)
      console.log(imgWidth)

      imgHeight = (this.state.width/imgWidth) * imgHeight;
      imgWidth = this.state.width;
     
      console.log(imgHeight)
      console.log(imgWidth)
    }

    // add 4 to width to leave room for the margins
    return {img:<img src={img.thumbnail} height={imgHeight} width={imgWidth} onClick={() => this.props.onClickThumbnail(img.id)}/>, width:imgWidth+6}
  }

  renderGallery(){

    let images = this.props.images;
    

    let rows = [];
    let row = [];
    let rowSpace = this.state.width;

    for (var i=0; i < images.length; i++){
      let rendered = this.renderImage(images[i])
      if (rendered.width < rowSpace){
        row.push(rendered.img);
        rowSpace -= rendered.width;
      } else {
        rows.push(row);
        row = [];
        row.push(rendered.img);
        rowSpace = this.state.width-rendered.width;
      }
    }
    rows.push(row)

    return rows

  }

  render(){
    return(
        <div id="gallery" className="gallery">
          {this.renderGallery().map((rows) => <div className="gallery-row">{rows.map((img) => <div className="gallery-img">{img}</div>)}</div>)}
        </div>
    )
  }
}

// Page showing larger image and more details about each image
class Detail extends Component {
  constructor(props){
    super(props);

    this.img = this.getImage(this.props.match.params.id)
    this.checkSold = this.checkSold.bind(this)
  }

  changeComponent(newComponent){
    this.props.swapComponent(newComponent);
  }

  getImage(id){
    return IMAGES[id]
  }

  checkSold(){
    if (!this.img.sold){
      return(
        <div>
          <h2 className="detail-info">For inquiries email <a href="mailto:contact@moarart.net">contact@moarart.net</a> or fill out the form below.</h2>
          <ContactForm pieceName={this.img.title}/>
        </div>
      )
    }
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
              {this.checkSold()}
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

