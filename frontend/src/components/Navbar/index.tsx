// src/components/Navbar/index.tsx
import { ModeToggle } from "../Thems/mode-toggle"

const Navbar = () => {
  return (
    <div className='sticky flex items-center justify-between top-4 h-12 border-4 m-4 ml-2 mb-0 p-2 pl-4 rounded-full pr-1 bg-white dark:bg-black'>
      <span className="flex">Navbar</span>

      <ModeToggle />
      </div>
  )
}

export default Navbar