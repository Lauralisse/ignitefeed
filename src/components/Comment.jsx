import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://64.media.tumblr.com/6485c03b235059bcd894980e935cf030/eb624a78c38743f0-98/s100x200/90b5b80210d5018efff40f2bbed70241a93afe86.pnj"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header></header>

                    <p></p>
                </div>

                <footer>

                </footer>
            </div>
        </div>
    )
}