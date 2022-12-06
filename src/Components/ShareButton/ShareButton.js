import React from 'react';
import ".//ShareButton.css";
import {LinkedinShareButton, LinkedinIcon ,  FacebookIcon, TwitterIcon , FacebookShareButton, TwitterShareButton } from 'react-share';



const ShareButton = () => {
    
      const url = `https://ukaoha.github.io/BeautifulUI-Gradiants/`
      const title = 'Check out this awsome site '
    
    return ( 
        <div className='button-share'>
                    <button className='twiiter'> 
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={25} round />
          <span>share on Twitter</span>

        </TwitterShareButton>
        </button>

            <button className='facebook'>
        <FacebookShareButton url={url} quote={title}>

          <FacebookIcon size={25} round  />
          <span className='sapn-face'> share on facebook</span>




        </FacebookShareButton>
        </button>
        <span className='linkedin'>
        <LinkedinShareButton url={url} media={`${url}/${title}.jpg`}>
          <LinkedinIcon size={35} round />
        </LinkedinShareButton>
        </span>

        
      </div>
  
     );
}
 
export default ShareButton;
