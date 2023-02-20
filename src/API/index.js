import React, { useState, useEffect } from "react";


;
          
          export const Posts = () => {
            const [data, setData] = useState(null);
            const [searchTerm, setSearchTerm] = useState("");
          
            useEffect(() => {
              fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error(error));
            }, [searchTerm]);
          
            return (
              <div id="posts">
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <h2>
                {data === null ? "Loading..." : JSON.stringify(data, null, 3)}
                </h2>
              </div>
            );
          };
          
          export default Posts;
          
          
          
          