import React from 'react'
import Main from '../template/Main'

export default props => {
  return (
    <Main icon="fa fa-home" title="Início" subtitle="Is a new world!">
      <div className="display-4">Welcome!</div>
      <hr />
      <p className="mb-0">CRUD: Simple user control developed in React</p>
    </Main>
  )
}
