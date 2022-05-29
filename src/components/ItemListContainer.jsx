import React from 'react'

export default function ItemListContainer({greeting}) {
  return <p>{greeting}</p>
}

ItemListContainer.defaultProps = { greeting: 'ItemListContainer' };