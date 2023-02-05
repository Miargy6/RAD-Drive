const photos = childFile.url

class App extends React.Component{
  constructor(){             
    super();                 
    this.state = { currentImage: 0 }; 
    this.closeLightbox = this.closeLightbox.bind(this); 
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    console.log('open')
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });  
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    }); 
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,                                                           
    });  
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,                                            
    }); 
  }
  render(){
    return(
      <div>
        <Gallery photos={childFile.url} onClick={this.openLightbox} />
        <Lightbox images={childFile.url}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));