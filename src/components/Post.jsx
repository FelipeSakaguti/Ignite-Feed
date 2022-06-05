import { Avatar } from './Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date;
// content: string;

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/FelipeSakaguti.png" />
                    <div className={styles.authorInfo}>
                        <strong>Felipe Sakaguti</strong>
                        <span>FullStack Dev</span>
                    </div>
                </div>

                <time title="11 de Maio às 11:13" dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum at aliquet volutpat sagittis suspendisse quisque sem, interdum eu metus senectus nulla eleifend velit, risus pharetra class placerat quis suscipit pulvinar. cursus sodales ligula ac aliquam suspendisse suscipit aenean arcu etiam hendrerit, risus himenaeos mi sit nisi tristique fames suspendisse suscipit, lobortis dui pretium nec pellentesque cras quisque varius etiam. ultricies fringilla hac fringilla eget iaculis vel, cursus habitasse nunc rutrum libero mi, blandit est hendrerit interdum tempus. odio vitae massa ut est dui rhoncus est id phasellus, netus odio aliquet cras blandit erat semper euismod, elementum erat est posuere augue eu tortor lacus.</p>

                <p><a href="#">linked.com/FelipeSakaguti</a></p> 
                <p>
                    <a href=''>#Lorem</a>{' '}
                    <a href=''>#Ipsum</a>{' '}
                    <a href=''>#Aliquet</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm} >
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList} >
                <Comments />
                <Comments />
                <Comments />
            </div>
        </article>
    )
}