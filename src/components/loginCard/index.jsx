import styles from './loginCard.module.css'
export function LoginCard() {
    return(
        <div className={styles.container}>
            
            <div className={styles.header}>
                <strong className={styles.welcome}>Crie sua conta :)</strong>
                <span className={styles.underText}>Escolha uma das opções de Login</span>
            </div>

            <div className={styles.authButtons}>

            </div>

            <div className={styles.footer}>
                <a href="https://github.com/pedropaolo">Acesse meu github</a>
            </div>


        </div>
    )
}