// import './App.css'

import { useQuery } from 'react-query'
import { getPhoto } from '../utils/api/getPhoto'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
// import { useEffect } from 'react';

export const FetchPhoto = ({ resultSearch, updatePage, changeRefresch }) => {
  
 
  // console.log(resultSearch)
  
  // https://tanstack.com/query/v3/docs/framework/react/overview
  const { data: photos, isLoading, error } = useQuery({ queryKey: ['search-photo'], queryFn: getPhoto(resultSearch) });
   
  // const startTest = () => {
    // UpdateMaxImage(photos.totalHits)
  // }
  // changeRefresch();
  // startTest();   

  // console.log(photos.totalHits);
  return <>
    
    <p></p>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
    {!isLoading && !error &&<ImageGallery images={photos.hits} />}
    {!isLoading && !error && photos.totalHits > resultSearch.perPage ? <button onClick={updatePage}>More image</button> : <p></p>}
    
  </>
}