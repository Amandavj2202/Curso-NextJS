import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Todos.module.css'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const todos = await data.json()

    return {
        props: { todos }
    }
}

export default function todos({ todos }) {
    return (
        <>
            <Head>
                <title>Next.js - To Do</title>
            </Head>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}><Link href={`/todos/${todo.id}`}><a>{todo.title}</a></Link></li>
                ))}
            </ul>
        </>
    )
}
