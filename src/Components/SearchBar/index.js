const SearchBar = ({action}) => {
    return(
        <input className="outline-0 w-full border-2 p-1 border-r-2" onInput={action} placeholder="Buscar..."/>
    )
}

export default SearchBar;