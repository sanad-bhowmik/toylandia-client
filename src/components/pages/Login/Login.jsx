import React, { useContext, useEffect, useRef, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProviders';
import { AuthErrorCodes, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Toaster, toast } from 'react-hot-toast';
import Tabsection from '../../Home/Tabsection/Tabsection';
import open from '../../../assets/openeye.png'
import close from '../../../assets/closeeye.png'

const Login = () => {
  // Set the title of the page to 'login'
  useTitle('login');

  // Import necessary dependencies and components
  const { signIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (from !== '/') {
      toast('You have to log in first to view details', {
        style: {
          borderRadius: '10px',
          background: 'linear-gradient(to right, #ff00cc, #3333ff)',
          color: '#fff',
        },
      });
    }
  }, []);

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Login successful! Welcome to our family');
        setUser(loggedUser);
      })
      .catch((error) => {
        toast.error('error', error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Login successful! Welcome Back');
        setUser(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        toast.success('Login successful! Welcome to our family');
      })
      .catch((error) => {
        console.log(error);
        if (error.code === AuthErrorCodes.WRONG_PASSWORD) {
          toast.error('Invalid email or password.');
        } else {
          toast.error('Invalid email or password!');
        }
      });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/2 relative">
          {/* Login form */}
          <div className="flex justify-center items-center h-full">
            <form
              onSubmit={handleLogin}
              className="w-3/4 p-8 bg-white shadow-md rounded-lg relative bg-gradient-to-br from-blue-200 to-red-100"
            >
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    ref={passwordRef}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <img src={close} className='h-6' alt="" />
                    ) : (
                      <img src={open} className='h-6' alt="" />

                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300"
              >
                Login
              </button>
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm text-gray-600">or</span>
                <button onClick={handleGoogleSignIn} className="ml-2 p-2 bg-white border rounded-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google Logo"
                    className="h-5 w-5"
                  />
                </button>
              </div>
              <div className="text-center mt-4">
                <Link to="/registration" className="text-blue-500 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="absolute top-0 left-0 h-6 w-6 bg-green-300"></div>
              <div className="absolute top-[95%] left-[97%] h-6 w-6 bg-purple-500"></div>
            </form>
          </div>
        </div>
        <div className="w-1/2 bg-gray-300">
          {/* GIF image */}
          <img
            src="https://financeadvisoras.com/assets/images/secure-login.gif"
            alt="GIF"
            className="h-screen object-cover"
          />
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Login;
