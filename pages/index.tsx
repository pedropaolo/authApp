import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { useSession, signIn, getSession, signOut } from "next-auth/react"
import { GoogleChromeLogo , GithubLogo  } from "phosphor-react";

export default function Home() {

    const { data: session } = useSession();

    return session ? (

      <div className={styles.wrapper}>
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
                   onClick={() => signOut()}>
                   Entrou com GitHub
                   <GithubLogo  className={styles.logo} size={25}/>
               </button>


           </div>

           <div className={styles.footer}>
               <a href="https://github.com/pedropaolo">Acesse meu github!</a>
           </div>


       </div>
       </div>
   ) : (

    <div className={styles.wrapper}>
       <div className={styles.container}>
           
       <div className={styles.header}>
           <strong className={styles.welcome}>Crie sua conta :)</strong>
           <span className={styles.underText}>Escolha uma das opções de Login</span>
       </div>

       {/* Botões para autenticação */}

       <div className={styles.authButtons}>
           <button 
               type="button" 
               className={styles.signInButton}
               onClick={() => signIn('google' , { callbackUrl: 'http://localhost:3000/logged' })}>
               Entrar com Google
               <GoogleChromeLogo className={styles.logo} size={25}/>
           </button>

           <button 
               type="button" 
               className={styles.signInButton}
               onClick={() => signIn('github' , { callbackUrl: 'http://localhost:3000/logged' })}>
               Entrar com GitHub
               <GithubLogo  className={styles.logo} size={25}/>
           </button>


       </div>

       <div className={styles.footer}>
           <a href="https://github.com/pedropaolo">Acesse meu github!</a>
       </div>


   </div>
  </div>
  
   )
    
  
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context);
  console.log("Minha session" , session)
 
  return {
      props: {
          session,
      }
  }

}


