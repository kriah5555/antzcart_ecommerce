import Head from 'next/head'
import styles from '../styles/Login.module.css'
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <div className='bg-gray-200 rounded-2xl shadow-2xl flex w-2/3 text-center max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>Company</span>Name
            </div>
            <div className=''>
              <h2 className='text-3xl font-bold text-green-500 mb-2' >Sigh in to account</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2 rounded'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-white-200 rounded-full p-3 mx-1'>
                  <FaFacebook className='text-sm'> </FaFacebook>
                </a>
                <a href='#' className='border-2 border-white-200 rounded-full p-3 mx-1'>
                  <FaLinkedin className='text-sm'> </FaLinkedin>
                </a>
                <a href='#' className='border-2 border-white-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm'> </FaGoogle>
                </a>
              </div>
            </div> {/* social login section*/}
            <p className='text-gray-600-400 my-3'>or use your email account</p>
            <div className='flex flex-col items-center'>
              <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-grey-300 m-2'></FaRegEnvelope>
                <input type="email" name="email" placeholder="Email" className='bg-gray-300 outline-none test-sm flex-1'></input>
              </div>
              <div className='bg-gray-300 w-64 p-2 flex items-center'>
                <MdLockOutline className='text-grey-300 m-2'></MdLockOutline>
                <input type="password" name="password" placeholder="Password" className='bg-gray-300 outline-none test-sm flex-1'></input>
              </div>
              <div className='flex w-64 mb-5 justify-between'>
                <label className='flex items-center text-xs'><input type="checkbox" name="remember" className='mr-1'/>Remember me</label>
                <a href='#' className='text-xs'>Forgot password?</a>
              </div>
              <a href='#' className='rounded-full border-green-500 text-green-500 border-2 px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign in</a>
            </div>{/*input fields */}

          </div>
          <div className='w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Hello!</h2> 
            <div className='border-2 w-10 border-white inline-block mb-2 rounded'></div>
            <p className='mb-2'>Fill up some details and start using our application </p>
            <a href='#' className='rounded-full border-white border-2 px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign up</a>
          </div>  {/* Signin  section*/}
        </div>  {/* Main section*/}
      </main>
    </div>
  )
}
