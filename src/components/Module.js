const Module = ({slide,toggleModule}) => {
  return (
    <div className='module'>
      <div className="inner-container">
      <button className='close-btn' onClick={()=> toggleModule()}>Close</button>
      <img src={`.${slide.img}`} alt={slide.title} />
      </div>
    </div>
  )
}

export default Module
