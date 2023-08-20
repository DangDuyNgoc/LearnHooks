import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseState from './useState';
import TwoBinding from './twoWayBinding';
import ToDoList from './ToDoList';
import Component from './useEffect';
import LayoutEffect from './useLayoutEffect';

import reportWebVitals from './reportWebVitals';
import UseRef from './useRef';
import Memo from './Memo';
import UseCallback from './useCallback';
import UseMemo from './useMemo';
import UseReducer from './useReducer';
import UseContext from './useContext';
import { ThemeProvider } from './useContextTheme';
import { ProviderStore } from './ContextAndUseReducer';
import ContextReducer from './ContextAndUseReducer/ContextReducer';
import UseImperativeHandle from './useImperativeHandle';

const root = ReactDOM.createRoot(document.getElementById('root'));

function emmitComment(id) {
  setInterval(()=> {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung conmment của lesson ${id}`
      })
    )
  }, 2000)
};

emmitComment(1);
emmitComment(2);
emmitComment(3);

root.render(
  <React.StrictMode>
    <UseState />
    <UseRef />
    <Memo />
    <UseMemo />
    <UseReducer />
    <UseCallback />
    <UseImperativeHandle />
    
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>

    <ProviderStore>
      <ContextReducer /> 
    </ProviderStore>
    <TwoBinding />
    <ToDoList />
    <LayoutEffect />
    <Component />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
