import styles from './Post.module.css'
import '../global.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                    src="https://64.media.tumblr.com/935eca4d50267604a8428cb19fdc73a5/3683373eaadba914-af/s100x200/6e4b412610483848da1e78346c9ba699fd8fedec.pnj"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Villanelle Astankova</strong>
                        <span>Web Developer Junior</span>
                    </div>
                </div>

                <time title="31 de outubro às 13:20h" dateTime="2022-10-31 13:20:02">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
            <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketsear</a>
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentário'
                />

            <footer>
            <button type='submit'>Publicar</button>
            </footer>
            </form>
        </article>
    )
}