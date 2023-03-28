const Heading = ({ description, className }) => {
    return ( 
        <div className="inline-block">
            <h1 className={`${className}`}>{description}</h1>
            <div className="w-1/2 h-2 bg-sky-800"></div>
        </div>
    );
}
 
export default Heading;