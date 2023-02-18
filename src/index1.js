import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';

const App = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() =>{
        const fetchPosts = async () => {
            const resp = await fetch()
        }
    }, [])
} 

ReactDOM.render(<App />, document.getElementById('app'))