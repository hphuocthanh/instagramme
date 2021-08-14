import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const isInvalid = emailAddress === '' || password === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagramme';
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="Iphone with Instagramme" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center w-full">
          <img src="/images/logo.png" alt="Instagramme" className="mt-2 w-6/12" />
        </h1>
        {err && <p className="mb-4 text-xs text-red-primary">{err}</p>}

        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base"
          />
        </form>
      </div>
    </div>
  );
}
