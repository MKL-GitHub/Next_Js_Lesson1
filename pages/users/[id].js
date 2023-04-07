import Main from "../../components/Main";
import styles from "../../styles/user.module.scss";

export default ({ user }) => {
    return (
        <>
            <Main>
                <div className={styles.user}>
                    <h1>User with id {user.id}</h1>
                    <div>User name {user.name}</div>
                </div>
            </Main>
        </>

    );
};

export async function getServerSideProps({ params }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + params.id);
    const user = await response.json();

    return {
        props: { user },
    }
}