import {FaPlayCircle} from 'react-icons/fa'


const Display = ({title, url, img}) => {

    return (
        <div className="new" style={{
            background: `${img != null ? "url("+img+")" : "pink"}`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            overflow: "hidden",
        }}>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(5px)",
            }}></div>
            <h1 style={{
                position: "relative",
                zIndex: "10",
            }}>{title}</h1>
            <a target="_blank" href={url} style={{
                position: "relative",
                zIndex: "10",
            }}><FaPlayCircle/></a>
        </div>
    )
}

export default Display
