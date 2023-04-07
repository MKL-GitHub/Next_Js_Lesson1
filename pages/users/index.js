import Link from "next/link";
import Main from "../../components/Main";

export default ({ users }) => {

    return <>
        <Main>
            <h1>User list</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link legacyBehavior href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </Main>

    </>
}

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: { users },
    }
}