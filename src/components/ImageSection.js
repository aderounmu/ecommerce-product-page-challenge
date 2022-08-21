import React, {useState} from 'react'
import ChangeButton from './ChangeButton'
import NextIcon from '../images/icon-next.svg'
import PrevIcon from '../images/icon-previous.svg'
import ImageGrid from './ImageGrid'
import Lightbox from './Lightbox'


const ImageSection = ({images , thumbnails}) => {
  
  const [SelectIndex, setSelectIndex] = useState(0)
  const [showLightBox , setShowLightBox] = useState(false)

  const nextImage  = () => {
    if(SelectIndex !== images.length - 1) setSelectIndex((prevState) => prevState + 1)
    else setSelectIndex(0) 
  }
  const prevImage  = () => {
    if(SelectIndex !== 0) setSelectIndex((prevState) => prevState - 1)
    else setSelectIndex(images.length - 1)
  }

  return (
    <>
      <div className='relative sm:flex sm:flex-col sm:items-center' >
          <ChangeButton
            className={'sm:hidden absolute top-[50%] left-0 ml-5 h-8 w-8 customWhite-bg rounded-full flex flex-row justify-center items-center '}
            imgClassName={'w-1/4'}
            src={PrevIcon}
            onClick={() => prevImage()}
          />
          <div className='sm:w-[350px]'>
            <div className='w-full h-[250px] sm:h-[350px] '>
              <img onClick={()=>setShowLightBox(true)} className='w-full h-full object-cover sm:rounded-lg sm:cursor-pointer' src={images[SelectIndex]}/>
            </div>
            <ImageGrid
            images={thumbnails}
            className={'hidden sm:block'}
            selectedIndex={SelectIndex}
            setSelectIndex={setSelectIndex}
            />
          </div>

          <ChangeButton
            className={'sm:hidden absolute top-[50%] right-0 mr-5 h-8 w-8 customWhite-bg rounded-full flex flex-row justify-center items-center  '}
            imgClassName={'w-1/4'}
            src={NextIcon}
            onClick={() => nextImage()}
          />
      </div>
      {showLightBox && <Lightbox
        images={images}
        thumbnails={thumbnails}
        setShowLightBox={setShowLightBox}
      />}
    </>
  )
}

export default ImageSection