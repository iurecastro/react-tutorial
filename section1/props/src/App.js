import React from 'react';
import Book from "./Book";
import MasteringReact from './masteringReact.svg';
import ReactInAction from './reactInAction.svg';
import PracticalReact from './practicalReact.svg';
import './style.css';

const App = ()=>{
    return (
        <main>
            <h1>Favorite book</h1>
            <div className='book-list'>
                <Book title="Mastering React" author="Anthoy Pham" cover={MasteringReact} />
                <Book title="Practical React" author="Alex Johnson" cover={ReactInAction} />
                <Book title="React in Action" author="Bob Climo" cover={PracticalReact}/>
            </div>
        </main>
    );
};

export default App;