import{ memo } from 'react'

function Content() {

    console.log('re-render');
    return ( 
        <div>
            <h1 style={{margin: 0}}>React.memo HOC(Higher Order Component)</h1>
        </div>
    );
}
 
export default memo(Content);