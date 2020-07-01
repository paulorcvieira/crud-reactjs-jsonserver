import './Footer.css'
import React from 'react'

export default props =>
  <footer className="footer">
    Desenvolvido&nbsp;com&nbsp;<i className={`${props.by} text-danger`}></i>&nbsp;por
    <strong>&nbsp;P<span className="text-danger">a</span>ulo</strong>
  </footer>