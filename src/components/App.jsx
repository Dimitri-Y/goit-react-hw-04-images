import React,{useState,useEffect} from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ThreeDots} from 'react-loader-spinner'
import httpRequest from './httpRequest';
import Button from './Button/ButtonLoadMore';
import Modal from './Modal/Modal';

const App=()=>{
  const [searchName,setSearchName]=useState("");
  const [gallery,setGallery]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [isModal,setIsModal]=useState(false);
  const [page,setPage]=useState("1");
  const [totalHits,setTotalHits]=useState(0);
  const [error,setError]=useState(null);
  const [largeImageURL,setLargeImageURL]=useState("");
  const [alt,setAlt]=useState("");
  
   useEffect(()=>
  { 
    const addImages= async (searchName,page)=>{  
      if(!searchName)return;
      try {
        setIsLoading(true);
        const response =await httpRequest.fetchArticlesWithQuery(searchName,page);
        setGallery(gallery=>[...gallery,...response.data.hits]);
        setTotalHits(response.data.totalHits);
         } catch (error) {
          setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }  
    addImages(searchName,page);
  },[page,searchName]);
   
  const handlerOnSearch=search=>{
    if(search.trim()!=="" && search.trim()!==searchName)
    {setSearchName(search);
    setGallery([]);
    setPage(1);
  }
  }
  const onLoadMore=()=>{
    setPage(page=>page + 1);  
  }
  const onModal=(largeImageURL,alt)=>{
   setIsModal(true);
   setLargeImageURL(largeImageURL);
   setAlt(alt);
  }
  const onCloseModal=()=>{
    setIsModal(false);
    setLargeImageURL('');
    setAlt('');   
  }
  
  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: 16,
      paddingBottom: 24,
    }}
    >
    <Searchbar onSubmit={handlerOnSearch} isSubmitting={isLoading}></Searchbar>
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
        {gallery.length > 0 && <ImageGallery gallery={gallery} onModal={onModal}></ImageGallery>}
        {(gallery.length > 0 && gallery.length<totalHits )&&<Button onLoadMore={onLoadMore}></Button>}
        {isModal&&<Modal onCloseModal={onCloseModal} largeImageURL={largeImageURL} alt={alt}></Modal>}
    </div>
   
  );
}
export default App; 