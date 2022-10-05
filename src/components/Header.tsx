import Link from 'next/link'

export function Header() {
  return (
    <header className="p-7 flex justify-between text-white">
      <Link href="/">
        <a>Home</a>
      </Link>
      <div className="flex gap-5 text-white">
        <Link href="/pageTeste1">
          <a>Go to page 1</a>
        </Link>
        <Link href="/pageTeste2">
          <a>Go to page 2</a>
        </Link>
      </div>
    </header>
  )
}
