import React, { Fragment } from 'react';
import "./App.css";

// component

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";

function App() {
    return <Fragment>
        <div className="container">
          <InputTodo />
          <ListTodos />
        </div>
    </Fragment>
}

export default App;