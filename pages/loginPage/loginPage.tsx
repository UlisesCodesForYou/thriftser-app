import 'tailwindcss/tailwind.css'
import useInput from "../../hooks";
import CreateNewAccount from "../createNewAccount";

const isNotEmpty = value => value.trim() !== ""

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

    return (
        <>

            <div>
                <h1 className="text-blue-700 text-2xl text-center font-extrabold font-loginpage mb-3 text-5xl">THRIFTSTER</h1>
                <h3 className="text-blue-700 text-center font-bold font-loginpage mb-3">Share your thrift store finds
                    and locations with others. </h3>
            </div>
            <div className="w-full max-w-xs text-center m-auto"> {/*This is the card that holds the login form */}
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 align-middle">
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text"
                            placeholder="Username"
                            value={enteredUserName}
                            onChange={userNameChangedHandler}
                            onBlur={userNameBlurHandler}
                        />
                        {userNameInputHasError && (
                            <p className="text-red-500 text-xs italic mt-2">Please Enter Your Username</p>)}
                    </div>
                    <div className="mb-6">
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={enteredPassword}
                            onChange={passwordChangedHandler}
                            onBlur={passwordBlurHandler}
                        />
                        {passwordInputHasError && (<p className="text-red-500 text-xs italic mt-2">Please Enter Your Password</p>)}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                           href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <CreateNewAccount/>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Uli Corp. All rights reserved.
                </p>
            </div>

        </>
    )
}