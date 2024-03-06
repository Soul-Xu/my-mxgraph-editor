import React from 'react';
import ReactDOM from 'react-dom';
import MyEditor from './editor/my-editor';
import MyDrill from './drill/my-drill';
import './index.less';

const App = () => {
  console.log("app", window.location.href)
  const isDrill = window.location.href.includes('detail');

  return (
    <div className="mxgraph-editor-container">
      {!isDrill ? <MyEditor /> : <MyDrill />}
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
