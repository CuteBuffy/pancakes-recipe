import Nav from './components/navbar/Nav.jsx'
import Main from './components/main/Main.jsx'
import './components/navbar/Nav.css'
import './components/main/Main.css'
import './App.css'

function App() {
  return (
    <>
      <div className="page__wrapper">
        <div className="main__content">
          <Nav></Nav>
          <Main></Main>
        </div>
      </div>
    </>
  )
}

export default App
