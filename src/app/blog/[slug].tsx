import { useRouter } from 'next/router'
import React from 'react'

function SinglePost() {
    const { slug } = useRouter().query;
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost