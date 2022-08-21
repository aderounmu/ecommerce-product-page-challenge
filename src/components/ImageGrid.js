import React from 'react'

const ImageCell = ({num , total , image, isSelected , setSelectIndex}) => {
    // console.log(key)
    return (
    <div onClick={()=>setSelectIndex(num)} className={` rounded cursor-pointer customCustomDarkGrayishBlue-bg`}>
        <img className={`rounded ${isSelected && 'opacity-25 border-2 customOrangeBorder '}`} src={image}/>
    </div>)
}

const ImageGrid = ({images , selectedIndex ,setSelectIndex , className}) => {
  return (
    <div className={`mt-4 ${className}`}>
        <ul className='flex flex-row justify-between gap-4'>
           {images.map((item , key)=><li key={key}><ImageCell setSelectIndex={setSelectIndex} total={images.length - 1} num={key} key={key} image={item} isSelected={ selectedIndex === key ? true : false}></ImageCell></li>)}
        </ul>
    </div>
  )
}

export default ImageGrid