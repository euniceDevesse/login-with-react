import './App.css'
import DescriptionLogin from './components/descriptionLogin/DescriptionLogin'
import Form from './components/form/form'
import Logo from './components/logo/logo'
import SignIn from './components/signIn/signIn'

function App() {
 

  return (
    <div className='applogo'>
        <Logo />
    <div className='main'>
      <DescriptionLogin />
      <Form />
    </div>
    </div>    
    
   
  )
}

export default App
