import React from 'react';
import './style.css';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB62B-keB2V3KgeJlUwCxUb9dtFiqRTuX4',
  authDomain: 'test-1326d.firebaseapp.com',
  projectId: 'test-1326d',
  storageBucket: 'test-1326d.appspot.com',
  messagingSenderId: '669857463268',
  appId: '1:669857463268:web:b2fae914c662dd8e47e5f1',
  measurementId: 'G-56CN1G5HEQ',
};

const app = initializeApp(firebaseConfig);
export default function App() {
  const emailRef = React.createRef(null);
  const passwordRef = React.createRef(null);

  function handleSignup() {
    // console.log(emailRef.current.value)
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="text" placeholder="password" ref={passwordRef} />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
