import React from 'react'
import ImageSection from './ImageSection'
import Image1 from '../images/image-product-1.jpg'
import Image2 from '../images/image-product-2.jpg'
import Image3 from '../images/image-product-3.jpg'
import Image4 from '../images/image-product-4.jpg'
//
import Thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import TextSection from './TextSection'


const Content = () => {
  const images = [Image1, Image2, Image3, Image4]
  const thumbnails = [Thumbnail1, Thumbnail2 , Thumbnail3, Thumbnail4]
  return (
    <div className='flex flex-col sm:items-center sm:flex-row sm:px-10 lg:px-20 sm:mt-28'>
      <div className='sm:w-1/2'>
        <ImageSection images={images} thumbnails={thumbnails}/>
      </div>
      <div className='sm:w-1/2'>
        <TextSection/>
      </div>
    </div>
  )
}

export default Content