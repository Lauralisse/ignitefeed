import styles from '../components/Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <img
                 className={styles.avatar}
                 src="https://i.pinimg.com/564x/ac/b0/76/acb076e76083681fcc442feced28745c.jpg"
                 />

                <strong>Elizabeth Woolridge</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}