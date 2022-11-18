import useInput from "../../hooks";
import CreateNewAccount from "../createNewAccount";
import Link from "next/link";
import React from 'react'


const isEmail = (value: string) => value.includes('@')

export const ForgotPassword = () => {
    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        isValid: enteredEmailIsValid,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail)

    let formIsValid = false;
    if (enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = (event: React.FormEvent) => {
        event.preventDefault()
        if (!enteredEmailIsValid) {
            return;
        }
        resetEmailInput();
    }

    return (
        <>
            <div>
                <h1 className="text-blue-700 text-2xl text-center font-extrabold font-loginpage mb-3 text-5xl">Trouble
                    logging in? </h1>
                <h3 className="text-blue-700 text-center font-bold font-loginpage mb-3">Enter you email and we will send
                    you a link so you can log back in.</h3>
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

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white m-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-60"
                            disabled={!formIsValid}>
                            Send login link
                        </button>
                        <Link href='/loginPage'>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-auto">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
                <div className="inline-flex justify-center items-center w-full">
                    <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span
                        className="absolute left-1/2 px-3 font-medium text-gray-500 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">OR</span>
                </div>
                <CreateNewAccount/>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Uli Corp. All rights reserved.
                </p>
            </div>
        </>
    )
}