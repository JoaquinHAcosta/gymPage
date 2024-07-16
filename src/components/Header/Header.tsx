import Link from 'next/link'
import { NavButtons } from './NavButtons'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <nav className=" w-full flex justify-between bg-transparent p-4 absolute">
      <div className="text-white">Logo</div>
      <NavButtons />
      <div className="items-center bg-red-600 w-max">
        <Button variant={'style1'} size={'mainsize'}>
          Join Us
        </Button>
      </div>
    </nav>
  )
}
