import React,{Component} from 'react';
import Searcbar from './Searchbar/Searcbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ThreeDots} from 'react-loader-spinner'
import httpRequest from './httpRequest';
import Button from './Button/ButtonLoadMore';
import Modal from './Modal/Modal';
class App extends Component {
 
  state={
    searchName:"",
    gallery:[],
    isLoading: false,
    error:null,
    page:"1",
    totalHits:0,
    isModal:false,
    largeImageURL:"",
    alt:"",
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchName !== this.state.searchName
    ) 
        this.addImages(this.state.searchName, this.state.page);
  }

  addImages=async (searchName,page)=>{
    try {
      this.setState({ isLoading: true });
      const response =await httpRequest.fetchArticlesWithQuery(searchName,page);
      this.setState(prevState=>({ gallery: [...prevState.gallery,...response.data.hits],totalHits:response.data.totalHits}));
    } catch (error) {
    this.setState({ error:error.message });
  } finally {
    this.setState({ isLoading: false });
  }
  }

  handlerOnSearch=search=>{
    if(search.trim()!=="" && search.trim()!==this.state.searchName)
    this.setState({searchName:search,gallery:[],page:1});
  }
  onLoadMore=()=>{
      this.setState(prevState=>({page:prevState.page+1}))
  }
  onModal=(largeImageURL,alt)=>{
    this.setState({ largeImageURL:largeImageURL,alt:alt,isModal:true})
  }
  onCloseModal=()=>{
    this.setState({ isModal:false,largeImage: '',alt: '',});
  }
  render(){
    const {isLoading,gallery,error,totalHits,isModal,largeImageURL,alt} =this.state;
    return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: 16,
      paddingBottom: 24,
    }}
    >
    <Searcbar onSubmit={this.handlerOnSearch} isSubmitting={isLoading}></Searcbar>
    {error && <p>Whoops, something went wrong: {error.message}</p>}
         {isLoading && <div style={{display:'flex',alignContent:"center",justifyContent:"center"}}>
          <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#ed3469" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
          </div>}
        {gallery.length > 0 && <ImageGallery gallery={gallery} onModal={this.onModal}></ImageGallery>}
        {(gallery.length > 0 && gallery.length<totalHits )&&<Button onLoadMore={this.onLoadMore}></Button>}
        {isModal&&<Modal onCloseModal={this.onCloseModal} largeImageURL={largeImageURL} alt={alt}></Modal>}
    </div>
   
  );
};
}
export default App; 