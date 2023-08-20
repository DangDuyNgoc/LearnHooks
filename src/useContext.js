import { useContext } from 'react';
import './App.css';
import UseContextContent from './useContextContent';
import { ThemeContext } from './useContextTheme'

function UseContext() {

    const theme = useContext(ThemeContext)

    return ( 
        <div style={{padding: 20}}>
            <span style={{color: 'red'}}>------Begin UseContext-------</span>
            <br />
            <button
                onClick={theme.handleTheme}
            >
                Toggle Theme
            </button>
            <UseContextContent />
            <br />
            <span style={{color: 'red'}}>------End UseContext-------</span>
        </div>
    );
}

export default UseContext;