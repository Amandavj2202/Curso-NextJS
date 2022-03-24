import Link from 'next/link';

import {useRouter} from 'next/router';

export default function Comment() {

    const router = useRouter();
    const todoId = router.query.todoId
    const commentId = router.query.commentId

    return (
        <>
            <h1>Exibindo comentario: {commentId}</h1>
            <Link href={`/todos/${todoId}`}>
                <a>Voltar</a>
            </Link>
        </>
    );
}