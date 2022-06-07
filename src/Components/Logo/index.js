import imagenLogo from "../Logo/amigurumiImage.png";

function Logo({width, height}){
    return(

        <img
        className={`${width || "w-40"} ${height || "h-40"}`}
        alt="Amigurumis Paradise Logo"
        src={imagenLogo}
        />
    );

}
export default Logo;