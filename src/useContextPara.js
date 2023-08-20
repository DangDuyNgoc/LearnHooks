import { useContext } from 'react';
import {ThemeContext} from './useContextTheme';

function Paragraph() {

    const themeChange = useContext(ThemeContext);

    return ( 
        <p className={themeChange.theme}>
            Context providers a way to pass data through the component tree 
            without having to pass props down manually at every level
        </p>
    );
}

export default Paragraph;