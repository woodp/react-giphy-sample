const apiKey = 'eC71549EVDbEJNtsy7e9kDt6WOdiH95p';
const searchUrl = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async (category) => { 
  const resp = await fetch(` ${searchUrl}?api_key=${apiKey}&q=${ encodeURI(category) }&limit=10`);
  const { data } = await resp.json();
  // console.log(data);
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url
    };
  });
  
  // console.log(gifs);

  return gifs;
};