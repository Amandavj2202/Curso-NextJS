import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Next.js - Erro 404</title>
            </Head>
            <h1>404</h1><br/>
            <h2>Parece que está página não existe!</h2><br/>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    );
}