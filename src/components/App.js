import React, { useState } from 'react';
import { auth } from '../firebase';
import AppRouter from './Router';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  
  return ( 
   <>
   <AppRouter isLoggedIn={isLoggedIn} />
   <footer>&copy; {new Date().getFullYear()} Selah</footer>
   </>
  );
}
 
export default App;
 