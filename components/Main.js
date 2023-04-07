import Head from "next/head";
import A from "./A";
import styles from "../styles/Main.module.scss";

const Main = ({ children, keywords, nav=true }) => {
    return (
        <main className={styles.main}>
            <Head>
                <meta keywords={"Mikhail the best" + keywords}></meta>
                <title>Main page</title>
            </Head>
            {nav && <nav className={styles.navbar}>
                <A href="/" text="Main" />
                <A href="/users" text="Users" />
            </nav>}

            {children}
        </main>
    );
};

export default Main;