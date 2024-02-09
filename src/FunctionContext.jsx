import React, {useContext} from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

export function FunctionContext() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
        padding: '2rem',
        margin: '2rem'
    };

    const generalStyle = {
        margin: '1rem'
    }

    return <>
        <button style={generalStyle} onClick={() => toggleTheme(prevDark => !prevDark)}>Toggle Theme</button>
        <div style={themeStyles}>Function Theme</div>
    </>
}