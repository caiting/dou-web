import React from 'react'
import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from './app.css'

function Demo( props) {

    const { route } = props

    return (
        <div styleName='demo'>
            <button styleName='button blue'>press me</button>
        </div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )