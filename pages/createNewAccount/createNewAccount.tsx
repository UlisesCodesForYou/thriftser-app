import Link from 'next/link'

export const createNewAccount = () => {
    return (
        <>
            <div className="w-full max-w-xs text-center m-auto">
                <div className="bg-gray-200 font-bold shadow-md rounded px-8 pt-6 pb-8 mb-4 align-middle mt-2.5">
                    {/*This should link to the Sign-up page*/}
                    <p>Don&apos;t have an account?
                        <Link href="/signUp">
                            <button
                                className="inline-block ml-3align-baseline ml-1.5 font-bold text-blue-500 hover:text-blue-800"> Sign
                                up!
                            </button>

                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}