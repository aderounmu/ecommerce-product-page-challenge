import React, {useState} from 'react'
import ChangeButton from './ChangeButton'
import NextIcon from '../images/icon-next.svg'
import CloseIcon from '../images/icon-close.svg'
import PrevIcon from '../images/icon-previous.svg'
import ImageGrid from './ImageGrid'

const Lightbox = ({images , thumbnails , setShowLightBox}) => {
    const [SelectIndex, setSelectIndex] = useState(0)

  const nextImage  = () => {
    if(SelectIndex !== images.length - 1) setSelectIndex((prevState) => prevState + 1)
    else setSelectIndex(0) 
  }
  const prevImage  = () => {
    if(SelectIndex !== 0) setSelectIndex((prevState) => prevState - 1)
    else setSelectIndex(images.length - 1)
  }

  return (
    <div
    // className='absolute top-0 bottom-0 w-full'
    className='absolute left-0 top-0 h-full customModal-bg w-full z-50 hidden sm:block'
    >
        <div className='flex flex-column content-center items-center justify-center h-full w-full'>
            <div className='sm:flex sm:flex-col sm:items-center' >
                
                <div className='sm:w-[370px]'>
                    <div className='flex flex-row justify-end py-3'>
                        <button onClick={() => setShowLightBox(false)} className='close-btn w-auto '>
                            <img src={CloseIcon}/>
                        </button>
                    </div>
                    <div className= 'relative w-full h-[250px] sm:h-[350px] '>
                        <ChangeButton
                        className={'absolute top-[50%] left-0 -ml-5 h-8 w-8 customWhite-bg rounded-full flex flex-row justify-center items-center '}
                        imgClassName={'w-1/4'}
                        src={PrevIcon}
                        onClick={() => prevImage()}
                        />
                    <img className='w-full h-full object-cover sm:rounded-lg' src={images[SelectIndex]}/>
                    <ChangeButton
                        className={'absolute top-[50%] right-0 -mr-5 h-8 w-8 customWhite-bg rounded-full flex flex-row justify-center items-center  '}
                        imgClassName={'w-1/4'}
                        src={NextIcon}
                        onClick={() => nextImage()}
                    />
                    </div>
                    <ImageGrid
                    images={thumbnails}
                    className={'hidden sm:block'}
                    selectedIndex={SelectIndex}
                    setSelectIndex={setSelectIndex}
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Lightbox