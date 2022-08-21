import React , {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input , setInput] = useState('')

  const onInputChange = (ev) => {
     setInput(ev.target.value)
  }

  const onSeach = () => {
      //https://api.tvmaze.com/search/shows?q=girls
      fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(res => res.json()).then(result => 
      console.log(result) )
  }

  const onKeyDown = (ev) =>{
    if(ev.keyCode === 13){
      onSeach()
    }
  }

  return (
    <MainPageLayout>
      <input type='text' onChange={onInputChange} onKeyDown={onKeyDown}  value={input}/>
      <button type='button' onClick={onSeach}>Search</button>
   
    </MainPageLayout>
  )
}

export default Home