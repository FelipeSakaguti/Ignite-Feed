import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/FelipeSakaguti.png',
      name: 'Felipe Sakaguti',
      role: 'Chefe da porra toda'
    },
    content: [
      { 
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      { 
        type: 'paragraph',
        content: 'Sei la man'
      },
      {
        type: 'link',
        content: 'saka.guti'
      }
    ],
    publishedAt: new Date('2022-06-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'data:image/jpeg;base64,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',
      name: 'Philip Kaskargud',
      role: 'Nordic Fake'
    },
    content: [
      { 
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      { 
        type: 'paragraph',
        content: 'Sei la man'
      },
      {
        type: 'link',
        content: 'Kaskargud'
      }
    ],
    publishedAt: new Date('2022-06-03 22:00:00'),
  }
];

export function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map( post => {
              return(
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }

        </main>
      </div>

    </>
  )
}
