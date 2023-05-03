import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListConteiner from './components/Navbar/ItemListConteiner/ItemListConteiner'

function App() {
  

  return (
    <>
      <NavBar />
      <ItemListConteiner greeting={"Bienvenido"} />
    </>
  )
}

export default App
