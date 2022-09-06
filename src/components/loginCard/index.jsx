import styles from './loginCard.module.css'
import { GoogleChromeLogo , GithubLogo  } from "phosphor-react";
import { useSession, signIn,  getSession } from "next-auth/react"
import { GetServerSideProps } from 'next'


export function LoginCard() {

    return(
        <div className={styles.container}>
            
            <div className={styles.header}>
                <strong className={styles.welcome}>Crie sua conta  :)</strong>
                <span className={styles.underText}>Escolha uma das opções de Login</span>
            </div>

            {/* Botões para autenticação */}

            <div className={styles.authButtons}>
                <button 
                    type="button" 
                    className={styles.signInButton}
                    onClick={() => {}}>
                    Entrar com Google
                    <GoogleChromeLogo className={styles.logo} size={25}/>
                </button>

                <button 
                    type="button" 
                    className={styles.signInButton}
                    onClick={() => signIn('github')}>
                    Entrar com GitHub
                    <GithubLogo  className={styles.logo} size={25}/>
                </button>


            </div>

            <div className={styles.footer}>
                <a href="https://github.com/pedropaolo">Acesse meu github!</a>
            </div>


        </div>
    )
}

export const getserverSideProps = async (context) => {


    const session = await getSession(context);
    console.log("WOOOOOOOOOOOOOOOOW" , session)

    if ( session ) {
        return {
            redirect: {
                destination: '/home',
                permanent: false
            }
        }
    }

    return {
        props: {
            user: "Paolo"
        }
    }

}