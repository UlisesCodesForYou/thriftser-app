import useInput from "../../hooks";
import Link from "next/link";
import Modal from '../../UI/Modals/index'
import React, {useState} from 'react'


const isNotEmpty = (value: string) => value.trim() !== ''
const isEmail = (value: string) => value.includes('@')

export const SignUp = (props) => {
    const [modalOn, setModalOn] = useState<boolean>(false);
    const [choice, setChoice] = useState<boolean>(false);

    const clicked = () => {
        setModalOn(true)
    }

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        isValid: enteredEmailIsValid,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail)

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        isValid: enteredNameIsValid,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty)


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


    let formIsValid: boolean;
    formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid && enteredUserNameIsValid && enteredPasswordIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = (event: React.FormEvent) => {
        event.preventDefault()
        if (!enteredNameIsValid && !enteredEmailIsValid && !enteredUserNameIsValid && !enteredPasswordIsValid) {
            return;
        }
        setModalOn(true)
        resetNameInput();
        resetEmailInput();
        resetUserNameInput();
        resetPasswordInput();
    }
    // This might be the cause of the bug. Place it in the formhandler.

    return (
        <>
            <div>
                {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} title='welcome'/>}
                <h1 className="text-blue-700 text-2xl text-center font-extrabold font-loginpage mb-3 text-5xl">THRIFTSTER</h1>
                <h3 className="text-blue-700 text-center font-bold font-loginpage mb-3">Share your thrift store finds
                    and locations with others. </h3>
            </div>



            <div className="w-full max-w-xs text-center m-auto"> {/*This is the card that holds the login form */}
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 align-middle"
                      onSubmit={formSubmissionHandler}>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="email"
                            type="text"
                            placeholder="Email"
                            onChange={emailChangedHandler}
                            onBlur={emailBlurHandler}
                            value={enteredEmail}
                        />
                        {emailInputHasError && (
                            <p className="text-red-500 text-xs italic mt-2">Please Enter A Valid Email</p>)}
                    </div>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullname"
                            type="text"
                            placeholder="Full name"
                            onChange={nameChangedHandler}
                            onBlur={nameBlurHandler}
                            value={enteredName}
                        />
                        {nameInputHasError && (
                            <p className="text-red-500 text-xs italic mt-2">Please Enter Your name</p>)}
                    </div>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={userNameChangedHandler}
                            onBlur={userNameBlurHandler}
                            value={enteredUserName}
                        />
                        {userNameInputHasError && (
                            <p className="text-red-500 text-xs italic mt-2">Please Enter A Valid Username</p>)}
                    </div>
                    <div className="mb-6">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            onChange={passwordChangedHandler}
                            onBlur={passwordBlurHandler}
                            value={enteredPassword}/>
                        {passwordInputHasError && (
                            <p className="text-red-500 text-xs italic">Please Choose A Password.</p>)}
                    </div>
                    <div className="flex items-center justify-between">
                        {/*Create a modal that lets the user know to check their email for confirmation*/}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white m-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-60"
                            disabled={!formIsValid} onClick={clicked}>
                            Sign up!
                        </button>
                        <Link href='/loginPage'>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-auto">
                                Cancel
                            </button>
                        </Link>
                    </div>

                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Uli Corp. All rights reserved.
                </p>
            </div>

        </>
    )
}