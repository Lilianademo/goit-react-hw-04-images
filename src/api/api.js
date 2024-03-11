import axios from "axios";

const apiKey = "41071319-d60daeb8a39d55438ddb32e23";

async function getImages(searchTerm, page, perPage) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getImages };
