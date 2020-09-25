import React from 'react'

function Index (props) {
  if(props.staticContext){
    props.staticContext.resCode = 404
  }
  return (
    <div>NOT FOUND</div>
  )
}

export default Index
