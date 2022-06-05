import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://media-exp1.licdn.com/dms/image/C4D16AQHI7zTsNobbtQ/profile-displaybackgroundimage-shrink_350_1400/0/1651467381148?e=1659571200&v=beta&t=5B2yKutsnoAyiPRpPpIj890GgJfaOEnebNKS9SxdP1A" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/FelipeSakaguti.png" />

                <strong>Felipe Sakaguti</strong>
                <span>FullStack Developer</span>
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