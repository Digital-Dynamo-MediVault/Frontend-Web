import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navigate from './navigation';
import toast, { Toaster } from 'react-hot-toast';
import cookie from 'react-cookies';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoarding, setIsOnBoarding] = useState(true)
  useEffect(() => {
    if (cookie.load('metamaskAddress')) {
      setIsLoggedIn(true)
      setIsOnBoarding(false)
    }
  }, [])


  return (
    <div className="App">
      <Navigate isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
      <Toaster position="top-right"
        toastOptions={{
          style: {
            width: "20vw",
            border: '1px solid #000000',
            padding: '16px',
            color: '#000000',
            duration: 10000,
          },
        }} />
    </div>
  );
}

export default App;
