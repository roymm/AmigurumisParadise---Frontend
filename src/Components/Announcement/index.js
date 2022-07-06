const Announcement = ({children}) => {
    return (
        <div className="h-8 bg-pastelYellow flex items-center justify-center font-bold">
            {children}
        </div>
    );
};

export default Announcement;