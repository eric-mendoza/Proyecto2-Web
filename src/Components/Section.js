import React from "react";

export default function Section({ title, subtitle, dark, id, link, logo }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content text-center" id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row justify-content-center">
                            <a className="row justify-content-center" href={link}>
                                <button className="card" style={{width: 150 + 'px'}} >
                                    <div className="p-2">
                                        <img src={logo}
                                             className="card-img-top"
                                             alt="..."
                                        />
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
