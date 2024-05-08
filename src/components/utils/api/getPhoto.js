
// const form = document.querySelector("#search-form");
// const gallery = document.querySelector(".gallery");
// const nextPageBtn = document.querySelector("#nextPage");
// const pInfo = document.querySelector('#pInfo');


export const getPhoto = resultSearch => async () => {
    const { searchText, urlSearch, keyApiPixabay, page, perPage } = resultSearch;


    const query = `${urlSearch}q=${searchText}&page=1&key=${keyApiPixabay}&image_type=photo&orientation=horizontal&per_page=${perPage*page}`;
    console.log("feach")
    console.log(query)
    // console.log(page, per_page);
    // const query = `https://pixabay.com/api/?key=42443231-e69777d4d2b71e5eeb75f7bd2&q=yellow+flowers&image_type=photo`
    // https://pixabay.com/api/?q=cat&page=1&key=42443231-e69777d4d2b71e5eeb75f7bd2&image_type=photo&orientation=horizontal&per_page=12
    const response = await fetch(query)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    return response.json ()
  }