import redditIcon from "../assets/images/reddit_icon.svg"

const Navbar = () => {
  return (
    <div className='Navbar w-full shadow-md grid grid-cols-3 px-10 py-5  mb-10'>
        <div className="flex items-center gap-3 min-w-[230px]">
            <img className="h-8" src={redditIcon} alt="" />
            <p className="text-xl font-bold"><span className="text-blue-600">Reddit</span> Alternate</p>
        </div>
        <input className="bg-gray-100 px-4 min-w-[250px]" type="text" name="search" id="search" placeholder="Search" />
    </div>
  )
}

export default Navbar