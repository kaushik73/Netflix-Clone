import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  ValidateEmail,
  ValidateName,
  ValidatePassword,
  ValidatePhoneNumber,
} from "../utils/validations";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
// SignIn = LoginIn
const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const email = useRef(null);
  const userName = useRef(null);
  const phoneNumber = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState([]);

  const handleSignUpSignInButton = () => {
    setSignIn(!signIn);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let errors = [];

    // Validate Email
    const emailError = ValidateEmail(email.current.value);
    if (emailError) {
      errors.push(emailError);
    }

    // Validate Password
    const passwordError = ValidatePassword(password.current.value);
    if (passwordError) {
      errors.push(passwordError);
    }

    // If not signIn, validate additional fields
    if (!signIn) {
      const userNameError = ValidateName(userName.current.value);
      if (userNameError) {
        errors.push(userNameError);
      }

      const phoneNumberError = ValidatePhoneNumber(phoneNumber.current.value);
      if (phoneNumberError) {
        errors.push(phoneNumberError);
      }
    }
    setErrorMsg(errors);

    if (errors.length > 0) return;

    if (!signIn) {
      // signup in firebase :
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName })); // ...
            })
            .catch((err) => {
              const errorMessage = err.message;
              let error = [];
              error.push(errorMessage);
              setErrorMsg(error);
            });
        })
        .catch((err) => {
          const errorMessage = err.message;
          let error = [];
          error.push(errorMessage);
          setErrorMsg(error);
          // ..
        });
    } else {
      // signin  in firebase :
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((err) => {
          const errorMessage = err.message;
          let error = [];
          error.push(errorMessage);
          setErrorMsg(error);
        });
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-bgBody bg-cover bg-no-repeat flex flex-col justify-between">
        <div className=" bg-slate-900 z-30 w-full">
          <Header />
        </div>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleFormSubmit}
            className="bg-black py-10 px-5 h-full w-[70%] md:w-[30%] mx-2 flex flex-col gap-5 rounded-md bg-opacity-70"
          >
            <p className="text-white text-4xl mb-4">
              {signIn ? "Sign In" : "Sign Up"}
            </p>
            {!signIn ? (
              <input
                type="text"
                ref={userName}
                placeholder="Full name"
                className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
              />
            ) : null}
            {!signIn ? (
              <input
                type="number"
                ref={phoneNumber}
                placeholder="Mobile number"
                className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
              />
            ) : null}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="text-white placeholder:text-white p-2 bg-gray-500 mb-4 px-5 rounded-md"
            />

            <input
              ref={password}
              type="text"
              placeholder="Password"
              className="text-white placeholder:text-white p-2 mb-0 bg-gray-500 px-5 rounded-md"
            />
            {errorMsg.length !== 0 ? (
              <div className="text-red-500 text-lg text-center font-semibold">
                <p>{errorMsg[0]}</p>
              </div>
            ) : null}
            <button
              type="submit"
              className="font-semibold bg-[rgb(var(--red))] hover:bg-[rgb(var(--red-hover))]  mt-2 text-white rounded-md p-2"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-xl  text-white text-center">
              {signIn ? (
                <span>
                  New to Netflix GPT ? &nbsp;
                  <span
                    onClick={handleSignUpSignInButton}
                    className="ml-1 text-xl md:ml-0 cursor-pointer text-[rgb(var(--light-red))]"
                  >
                    Sign Up !
                  </span>
                </span>
              ) : (
                <span className="">
                  Already a User ?{" "}
                  <span
                    onClick={handleSignUpSignInButton}
                    className="text-[rgb(var(--light-red))]  cursor-pointer"
                  >
                    Sign In !
                  </span>
                </span>
              )}
            </p>
          </form>
        </div>
        <div className="overflow-hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
