import Button from '../button'
import Input from '../input'
import InputPassword from '../password/input';
import './form.css'
export default function Form() {
    return (
        <form className='form'>
            <h2 id='sign'>Sign In</h2>
            <Input />
            <InputPassword />
            <div className='text'>Forgot Password?</div>
            <Button />
            <div className='sign-text'>or continue with</div>
            <div className='icons'>
                <img src='/images/Facebook.svg' />
                <img src='/images/apple.svg' />
                <img src='/images/google.svg' />
            </div>
        </form>
    )
} 