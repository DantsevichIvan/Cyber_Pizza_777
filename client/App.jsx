import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Hello World</h1>

            <span>{count}</span>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    );
};

export default App;
