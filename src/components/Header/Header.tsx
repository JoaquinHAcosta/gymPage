import Link from 'next/link'
import { NavigationMenuDemo } from './Buttons'

export const Header = () => {
  return (
    <nav className="w-full flex justify-between bg-transparent">
      <div>Logo</div>
      <NavigationMenuDemo />
      <div>Join Us</div>
    </nav>
  )
}
