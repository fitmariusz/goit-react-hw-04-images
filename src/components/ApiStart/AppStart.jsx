import { useEffect, useState } from "react";
import { SearchBar } from '../Search/SearchBar';
import axios from "axios";
import { Modal } from '../Modal/Modal';
import { ImageGallery } from '../ImageGallery/ImageGallery'
import { Loader } from "components/Loader/Loader";
import { BtmMoreImage } from "components/BtmMoreImage/BmMoreImage";

// const INITCONTACTS = {
//   urlSearch:"https://pixabay.com/api/?",
//   keyApiPixabay :"42443231-e69777d4d2b71e5eeb75f7bd2",
//   searchText: "",
//   page: 1,
//   perPage: 12,
//   maxPage: 0,
//   // loader: false,
// }

export const AppStart = () => { 
  // const [resultSearch, setResultSerch] = useState(INITCONTACTS);
  const keyApiPixabay = "42443231-e69777d4d2b71e5eeb75f7bd2";
  const [searchPhotos, setSearchPhotos] = useState([])
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [loader, setLoader] = useState(false) 

  const UpdateSerchText = (newText) => {
    setPage(1);
    setSearchText(newText.split(" ").join("+"));
    setSearchPhotos([]);
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      if (searchText === '') {
        return(1);
      }
      setLoader(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${searchText}&page=${page}&key=${keyApiPixabay}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setSearchPhotos((preValue) => [...preValue, ...response.data.hits]);
        setMaxPage(response.data.totalHits / 12);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoader(false)
    };
    fetchPhotos()
 
  }, [searchText, page]);
  
  const updatePage = () => {
     setPage(prev=>[
      prev+1,
    ])
  }

  const onImageClick = e => {
    setModalImg(e.target.getAttribute('data-large'));
    setShowModal(true);
  };

  const onImageCluse = () => { 
    setShowModal(false);
  };

    return <>
      <SearchBar UpdateSerchText={UpdateSerchText} />
      {loader ? <Loader/>: <ImageGallery images={searchPhotos} onClick={onImageClick}></ImageGallery>}
      {!loader && (maxPage > page) && <BtmMoreImage onClick={updatePage}>More image</BtmMoreImage>}
      {showModal && <Modal onClose={onImageCluse} imgSrc={modalImg}/>}
    </>

};