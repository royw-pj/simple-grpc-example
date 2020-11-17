import React from 'react';

function useLogger() {
    const [text, setText] = React.useState([]);
    function append(t) {
        setText(prevState => {
            return prevState.concat(new Date().toLocaleTimeString() + " " + t);
        })
    }
    function clear(){
        setText([]);
    }
    return { text, append, clear };
}
export default useLogger;