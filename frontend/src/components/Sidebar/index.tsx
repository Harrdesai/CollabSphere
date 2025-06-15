

type Props = {}

// sidebar on mousehover sidebar will appear else it show's only icon
const Sidebar = (props: Props) => {
  
  return (
      <div className={`w-min sticky top-16 m-2 rounded-3xl p-2 space-y-4 h-min bg-stone-300`}>
        <div className="w-12">
          logo 1
        </div>
        <div>
          logo 1
        </div>
        <div>
          logo 1
        </div>
        <div>
          logo 1
        </div>
      </div>
  )
}

export default Sidebar