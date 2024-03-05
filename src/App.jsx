import Article from './pages/Article'
import Articles from './pages/Articles'
import Author from './pages/Author'
import Contact from './pages/Contact'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import MenuCustom from './components/MenuCustom'
import Footer from './components/Footer'
import 'tailwindcss/tailwind.css'
import './App.css'
// Faire votre système de pages, routes, route ici
// Toutes les routes à créer correspondent au dossier pages donc 4 routes à faire
const App = () =>  {

  return (
    <>
    <MenuCustom/>
   <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/articles" element={<Articles />} /> 
      <Route path="/article/:id" element={<Article/>} /> 

      <Route path="/auteur" element={<Author />} />




   </Routes>
   <Footer/>
   </>
  )
}

export default App
