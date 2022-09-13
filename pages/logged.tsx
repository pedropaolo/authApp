import { useSession, signOut } from "next-auth/react"
import styles from '../styles/logged.module.css'

export default function Logged() {
  
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (

      <div className={styles.wrapper}>

        <div className={styles.container}>

        <div className={styles.header}>
           <strong className={styles.welcome}>Seja Bem-Vindo!</strong>
       </div>
          
          <div className={styles.card}>
            <img className={styles.avatarImage} src={session.user.image} />
            <strong className={styles.name}>{session.user.name}</strong>
            <strong className={styles.underText}>{session.user.email}</strong>
          </div>

          <div className={styles.footer}>
            <button 
               type="button" 
               className={styles.signOut}
               onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>
               SAIR
            </button>

       </div>
        </div>
      </div>

    )
  }

  return <a href="/api/auth/signin">Sign in</a>
}