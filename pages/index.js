import Head from 'next/head'

import LoginPage from "./loginPage";


export default function Home() {
    return (
        <>

            <Head>
                <title>Thriftster</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <LoginPage/>


        </>
    )
}
