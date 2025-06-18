// src/components/Sidebar/index.tsx

import { HomeIcon, LogOutIcon, SearchIcon, UserSearchIcon } from "lucide-react"
import { useAuthStore } from "@/store/useAuthStore"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Link } from "react-router-dom"

// sidebar on mousehover sidebar will appear else it show's only icon
const Sidebar = () => {
  const { logout } = useAuthStore()
  return (
      <div className={`w-min sticky top-16 m-2 ml-4 rounded-3xl p-2 space-y-2 h-min bg-stone-300`}>
        {/* route to "/" */}
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Link to="/">
                <HomeIcon onClick={() => {}}/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Link to="/search-members">
                <UserSearchIcon/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Search Members</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Link to="/teams">
                <SearchIcon/>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Teams</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger>
        <LogOutIcon onClick={logout} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Logout</p>
          </TooltipContent>
        </Tooltip>
      </div>
  )
}

export default Sidebar