import React from 'react';
import './grid.css';
const Cleansing = () => {
    return (
        <>
            <div className="MainConatiner">
                <p>Step 2/3</p>
                <div className="ChildContainer">
                    <div>
                        <img
                            src="https://www.freeiconspng.com/uploads/bottle-hair-liquid-shampoo-soap-icon-7.png"
                            alt="..."
                            width="80px"
                            className="imgStyle"
                        />
                    </div>
                    <div className="ChaildContainerTwo">
                        <div className="contOne">
                            <p className="para">Cleansing</p>
                            <span className="spanCon"><img src="https://c0.klipartz.com/pngpicture/365/563/gratis-png-iconos-de-la-computadora-tiempo-y-relojes-de-asistencia-tiempo-thumbnail.png" width={18} /> 60 sec</span>
                        </div>
                        <div className="coutTwo">
                            <span>How to do</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cleansing