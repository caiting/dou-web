import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './commpontent/demo.js'

function App(props) {
    return (
        <main>
            <Demo />
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))