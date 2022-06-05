import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comments.module.css';

export function Comments(){
    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com/FelipeSakaguti.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime} >
                            <strong>Felipe Sakaguti</strong>
                            <time title="11 de Maio às 11:13" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom esse paranaueae!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}