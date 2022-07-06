const SearchBar = ({action}) => {
    return(
        <input className="focus:outline-none focus:shadow h-4 md:h-8 w-full p-2 border-2 border-r-2 rounded" onInput={action} placeholder="Buscar..."/>
    )
}

export default SearchBar;