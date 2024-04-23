import React, { useState } from 'react';

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    
    const toggleDarkMode = () => {
        setIsDark(!isDark); 
    };

    return (
        <div>
            <h1>This is dark mode demo page</h1>
            <button onClick={toggleDarkMode}>
                {isDark ? "Disable dark mode" : "Enable dark mode"}
            </button>

            <style>{`
                body {
                    background-color: ${isDark ? 'black' : 'white'};
                    color: ${isDark ? 'white' : 'black'};
                }
            `}</style>
        </div>
    );
};

export default DarkMode;
