import Navbar from './components/NavBar'
import TextArea from './components/textArea'
function App() {
  return (
    <>
      <Navbar title='Text Utils' aboutText='About' />
      {/* <Navbar></Navbar> */}
      <div className='container'>
        <TextArea heading='Text' />
      </div>
    </>
  )
}

export default App
