import axios from "axios";


export const fetchPhotos = async ({searchText,page,keyApiPixabay,setSearchPhotos,setMaxPage,setLoader}) => {
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