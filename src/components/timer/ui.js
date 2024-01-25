const Cleansing = () => {
    const mainDiv = {
        textAlign: "start",
        marginTop: "10%",
        fontSize: "18px",
        color: "#A82798",
        border: "1px transparent #A82798",
        borderRadius: "10px",
        backgroundColor: "#eae1eb",
        padding: "10px",
        width:"300px"

    };
    const imgDivStyle = {
        color: "#A82798",
        display: "flex",
    };
    const imgStyle = {
        marginRight: "20px",
    };
    const bottomDiv = {
        color: "#A82798",
        fontSize: "16px",
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft:"65px",
        marginTop:"65px"
    };
    return (
        <>
        
        <div style={mainDiv}>
        <p>Step 2/3</p>
            <div style={{display:"flex"}}>
            <div>
                <img
                    src="https://www.freeiconspng.com/uploads/bottle-hair-liquid-shampoo-soap-icon-7.png"
                    alt="..."
                    width="80px"
                    style={imgStyle}
                />
            </div>
            <div style={imgDivStyle}>
                <div style={{marginLeft:"-18px"}}>
                    <p style={{ color: "black" }}>Cleansing</p>
                    <span style={{fontSize:"15px"}}><img src="https://c0.klipartz.com/pngpicture/365/563/gratis-png-iconos-de-la-computadora-tiempo-y-relojes-de-asistencia-tiempo-thumbnail.png" width={18}/> 60 sec</span>
                </div>
                <div style={bottomDiv}>
                    <span>How to do</span>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}
export default Cleansing