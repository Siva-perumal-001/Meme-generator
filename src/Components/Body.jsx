import { useState } from 'react';
import '../styles/style.css'

function Body() {

  const [meme,setMeme] = useState({
    topText:"Shut up",
    bottomText:"And take my money",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sLmBgeKFMu2IfvJSNypbXk1l-EvdoeUYGw&s"
  }) 

  return (
    <main>
      <div className='form'>
        <div className='input-grp'>
          <label>Top text
            <input type="text" name='topText' placeholder="Shut up" />
          </label>
          <label>Bottom text
            <input type="text" name='bottomText' placeholder="And take my money"/>
          </label>
        </div>
        <button>Get a new meme image</button>
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