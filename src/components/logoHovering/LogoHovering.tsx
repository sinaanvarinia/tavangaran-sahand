import React from 'react'
import styles from './LogoHovering.module.css'

const LogoHovering = () => {
    return (
      <div dir='ltr'>
        <button className={styles.button} data-text="Awesome">
          <span className={styles.actualtext}>
            &nbsp;Tavangaran &nbsp;
          </span>
          <span aria-hidden="true" className={styles.hovertext}>
            &nbsp;Tavangaran&nbsp;
          </span>
        </button>
      </div>
    );
}

export default LogoHovering