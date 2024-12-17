
 
 const heading=React.createElement('div',
  {id:'parent'},React.createElement('div',{},
    [React.createElement('h1',{id:'heading'},'hello world!'),
      React.createElement('h2',{},'h2 tag')
    ]));
  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(heading);
