import React ,{useState} from 'react'
import Sresult from './Sresult';

export default function Search() {
  const [img, setImg] = useState("");
  const eventHandler = (e)=>{
      const data = e.target.value;
      console.log(data)
      setImg(data)
  }
  return (
    <div className='srch'>
        <input  type="search" name="type here....."
        value={img}  onChange={eventHandler} />
        <br /> <br />
       {img===""?null : <Sresult images = {img} />} 
    </div>
  )
}
