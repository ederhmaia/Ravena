import * as React from 'react'

type Props = {
  if: boolean
}

const ShouldRender: React.FC<Props> = ({ if: condition, children }) => {
  return <>{!!condition ? children : null}</>
}

export default ShouldRender
