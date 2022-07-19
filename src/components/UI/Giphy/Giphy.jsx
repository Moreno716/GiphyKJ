import React, { useEffect, useState } from 'react';
import Gif from '../../UI/Gif/Gif'


const Giphy = () => {
  const key = '4ZpXSrt0mM3hkEWxW6R3vT4WlP5qyRh5';
  const [gifs, setGif] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('random');
  const [gifCIP, setGifCIP] = useState(false); //CIP = Call in process
  
  useEffect(() => {
    getGif().then(all => setGif(all));
  }, [query])
  
  const getGif = async (position = 1) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4ZpXSrt0mM3hkEWxW6R3vT4WlP5qyRh5&q=${query}&limit=20&pos=${position}`);
    const data = await response.json();
    data.data.forEach(element => {
        
    });
    return data.data;
  }
  const updateSearch = e => {
    setSearch(e.target.value);
    
  }
  console.log(query)
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div className='sectionTenor'>
      <form onSubmit={getSearch} className="sectionTenor">
        <input className="inputSearch" type="text" value={search} onChange={updateSearch} placeholder="Search..." />
      </form>
      <hr />
      <div className="ContainerTenor">
        {gifs.map(gif => (
          <Gif
            img={gif.images.downsized_medium.url}
            key={gif.id}
          />
        ))}
      </div>
    </div>
  );
}


export default Giphy;