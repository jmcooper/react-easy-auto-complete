import React from 'react'

import styles from './auto-complete.scss'

const AutoComplete = (props) => {

  return ( 
    <React.Fragment>
       <input type="text"></input>
       <div className={styles.autoCompleteList}>
         here are the results
       </div>
    </React.Fragment>
  )

}
export default AutoComplete