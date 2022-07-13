const MenuButton = (props) => {
    return (<button
            onClick={props.action}
            className="px-2 py-1 ml-1 md:ml-4 lg:ml-6 cursor-pointer text-xs md:text-base hover:bg-pastelPink transition duration-300 rounded">{props.children}
        </button>)
}

export default MenuButton;