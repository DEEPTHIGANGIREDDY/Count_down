const Cleansing=()=>{
    const mainDiv = {
        textAlign: "start",
        marginTop: "10%",
        fontSize: "18px",
        color: "#A82798",
        border: "1px transparent #A82798",
        borderRadius: "10px",
        backgroundColor: "#FCE2F9",
        padding: "10px",
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
      };
    return(
        <div style={mainDiv}>
        <p>Step 2/3</p>
        <div style={imgDivStyle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/cleaning-outlines/100/04-512.png"
            alt="..."
            width="80px"
            style={imgStyle}
          />
          <p>Cleansing</p>
        </div>
        <div style={bottomDiv}>
          <span>60 sec</span>
          <span>How to do</span>
        </div>
      </div>
    )
}