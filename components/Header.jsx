import Link from 'next/link';

export default () => {
  return(
    <ul>
      <li>
        <Link href={'/'}>
          <a>首页</a>
        </Link>
      </li>
      <li>
        <Link href={'/movies'}>
          <a>电影</a>
        </Link>
      </li>
      <li>
        <Link href={'/movies/[id]'} as={'/movies/5'}>
          <a>电影详情</a>
        </Link>
      </li>
      <li>
        <Link href={'/movies/[...params]'} as={'/movies/a/b/d'}>
          <a>[...parmas]多段路由</a>
        </Link>
      </li>
    </ul>
  )
}
