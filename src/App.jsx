
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import Counter from './component/Counter'
import Model from './component/Model'


const getModels = async () => {
  const response = await fetch('/models.json')
  const data = await response.json()
  return data
}

const modelPromise = getModels()

function App() {
  return (
    <>
     <NavBar />
     <Banner />
      <Counter />
      <Model modelPromise={modelPromise} />
      
    </>

  )
}

export default App
