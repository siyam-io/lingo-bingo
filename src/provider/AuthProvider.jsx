import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const provider = new GoogleAuthProvider();

  // Sign-up with email and password
  const handleSignUp = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Log-in with email and password
  const handleLogIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  // Log-out
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  // Password reset
  const handleForgotPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const handleUpdateProfile = async (name, photoUrl) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    handleSignUp,
    handleLogIn,
    handleSignOut,
    user,
    handleGoogleLogin,
    loading,
    handleForgotPassword,
    handleUpdateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
