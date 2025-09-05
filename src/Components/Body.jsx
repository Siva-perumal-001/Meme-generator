import { useState } from 'react';
import '../styles/style.css'

function Body() {

  const [meme,setMeme] = useState({
    topText:"Shut up",
    bottomText:"And take my money",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sLmBgeKFMu2IfvJSNypbXk1l-EvdoeUYGw&s"
  }) 

  function keyChange(event){
    const {value,name} = event.currentTarget;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value
    }));
  }

  return (
    <main>
      <div className='form'>
        <div className='input-grp'>
          <label>Top text
            <input type="text" name='topText' placeholder="Shut up" onChange={keyChange} value={meme.topText} />
          </label>
          <label>Bottom text
            <input type="text" name='bottomText' placeholder="And take my money" onChange={keyChange} value={meme.bottomText} />
          </label>
        </div>
        <button>Get a new meme image🖼️</button>
      </div>

      <div className='meme'>
        <img src={meme.imgURL} alt="template" />
        <span className='top'>{meme.topText}</span>
        <span className='bottom'>{meme.bottomText}</span>
      </div>
    </main>
  )
}

export default Body;