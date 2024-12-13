import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className="col-span-4 hidden 2xl:flex items-center px-14">
            <label
                htmlFor="search-product"
                className="relative flex items-center w-full rounded-s-3xl"
            >
                <FaSearch className="absolute text-black left-4" />
                <input
                    className="w-full outline-0 rounded-s-3xl text-black pl-10 py-2 pr-1"
                    type="search"
                    placeholder="search for products keywords..."
                    name="search-product"
                    id="search-product"
                />
            </label>
            <button className="bg-black font-semibold px-8 py-2 rounded-e-3xl">
                Search
            </button>
        </div>
    );
};

export default Search;
