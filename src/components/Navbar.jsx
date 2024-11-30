//Icon Imports
import redditIcon from "../assets/images/reddit_icon.svg"
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/posts/PostsSlice";
import { useSelector } from "react-redux";


const Navbar = () => {

  const searchTerm = useSelector((state) => state.posts.searchTerm);
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(setSearchTerm(e.target.value));
     // Update the search term in Redux
  }

  return (
    <div className='Navbar w-full shadow-md flex sm:grid grid-cols-2 lg:grid-cols-3 sm:px-10 justify-centercćć lg:px-20 py-5 mb-10'>
        <div className="flex items-center gap-3 sm:min-w-[230px]">
            <img className="h-8" src={redditIcon} alt="" />
            <p className="text-xl font-bold hidden sm:block"><span className="text-blue-600">Reddit</span> Alternate</p>
        </div>
        <div className="flex items-center gap-3">
            <input value={searchTerm} onChange={handleSearch} className="bg-gray-100 px-4 sm:min-w-[250px]" type="text" name="search" id="search" placeholder="Search" />
            <IoSearch className="text-xl text-gray-500"/>
        </div>
    </div>
  )
}

export default Navbar