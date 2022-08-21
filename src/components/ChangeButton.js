import React from 'react'

const ChangeButton = ({className, imgClassName , src , onClick}) => {
  return (
    <>

      <button onClick={onClick} className={className} >
        <img className={imgClassName} src={src}/>
      </button>
    </>
  )
}

export default ChangeButton