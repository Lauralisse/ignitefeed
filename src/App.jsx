import { Post } from "./components/Post"
import { Header } from "./components/Header";

import './global.css';
import styles from '../src/App.module.css'
import { Sidebar } from "./components/Sidebar";


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
          author="Laura"
          content="testando"
          />
        </main>

      </div>
    </div>
    )
  }


  

