import 'tailwindcss/tailwind.css'
import useInput from "../../hooks";
import CreateNewAccount from "../createNewAccount";
import Link from 'next/link'
import React from 'react'

const isNotEmpty = (value: string) => value.trim() !== ''

export const LoginPage = () => {

    const {
        value: enteredUserName,
        hasError: userNameInputHasError,
        valueChangeHandler: userNameChangedHandler,
        isValid: enteredUserNameIsValid,
        inputBlurHandler: userNameBlurHandler,
        reset: resetUserNameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredPassword,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        isValid: enteredPasswordIsValid,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(isNotEmpty)

    let formIsValid = false;
    if (enteredUserNameIsValid && enteredPasswordIsValid) {
        formIsValid = true
    }

    const submissionHandler = (event: React.FormEvent) => {
        event.preventDefault()
        if (!enteredUserNameIsValid && !enteredPasswordIsValid) {
            return;
        }

        resetUserNameInput();
        resetPasswordInput();

    }

    return (
        <>

            <div>
                <h1 className="text-blue-700 text-2xl text-center font-extrabold font-loginpage mb-3 text-5xl">THRIFTSTER</h1>
                <h3 className="text-blue-700 text-center font-bold font-loginpage mb-3">Share your thrift store finds
                    and locations with others. </h3>
            </div>
            <div className="w-full max-w-xs text-center m-auto"> {/*This is the card that holds the login form */}
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 align-middle"
                      onSubmit={submissionHandler}>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text"
                            placeholder="Username"
                            onChange={userNameChangedHandler}
                            onBlur={userNameBlurHandler}
                            value={enteredUserName}
                        />
                        {userNameInputHasError && (
                            <p className="text-red-500 text-xs italic mt-2">Please Enter Your Username</p>)}
                    </div>
                    <div className="mb-6">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange={passwordChangedHandler}
                            onBlur={passwordBlurHandler}
                            value={enteredPassword}
                        />
                        {passwordInputHasError && (
                            <p className="text-red-500 text-xs italic mt-2">Please Enter Your Password</p>)}
                    </div>
                    <div className="flex items-center justify-between">
                        {/*This should sign in to the home page*/}
                       <Link href='/homePage'>
                           <button
                               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-60"
                               disabled={!formIsValid}>
                               Sign In
                           </button>
                       </Link>
                        {/*This should send you to the Forgot password page. */}
                        <Link href="/forgotPassword">
                            <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                Forgot Password?
                            </button>
                        </Link>
                    </div>
                </form>
                <CreateNewAccount/>
                <p className="text-center text-gray-500 text-xs">
                    &copy;PLEASE USE MOBILE VIEW FOR THIS APP IF VIEWING FROM A DESKTOP.
                </p>
            </div>

        </>
    )
}