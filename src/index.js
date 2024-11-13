import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styles from "./components/CharacterEditor/CharacterEditor.module.css";

ReactDOM.render(
    <React.StrictMode>
        <div className={styles.differentColorBackground}/>
        <App/>

    </React.StrictMode>,
    document.getElementById('root')
);
