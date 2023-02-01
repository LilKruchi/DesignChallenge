import React from "react";

import { homeData } from '../../services/home.service'

import topIcon from '../../assets/img/Group 11.svg'
import middleIcon from '../../assets/img/Group 12.svg'
import bottomIcon from '../../assets/img/Group 13.svg'


export function BuildManage() {
    return (
        <div className="build main-container">

            <h2>
                Build & manage distributed teams like no one else.
            </h2>
            <div className="infos">

                {homeData.map((service, idx) => {
                    return (
                        <div className="info" key={idx}>
                            <div className="img-container">
                                <img src={bottomIcon} alt="" />
                            </div>

                            <div className="info-container">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}