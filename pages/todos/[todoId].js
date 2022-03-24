import Link from 'next/link';
import styles from '../../styles/Todos.module.css'

export async function getStaticProps(context) {

    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

    const todo = await data.json()

    return {
        props: { todo }
    }
}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    const paths = data.map((todo) => {
        return { 
            params: { 
                todoId: `${todo.id}`,
            }
        }
    })

    return { paths, fallback: false }

}


export default function Todo({todo}) {


    return (
        <>
            <h1>Exibindo o to do: {todo.id}</h1><br/>
            <p>Tarefa: {todo.title}</p><br/>
            <p>Completa: {todo.completed}</p><br/>
            <p>
                Comentarios: ls ijefnrdv...
                <Link href={`/todos/${todo.id}/comments/1`}><a>Detalhes</a></Link>
            </p><br/>
            <Link href="/todos">
                <a>Voltar</a>
            </Link>
        </>
    );
}