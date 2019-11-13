import React from "react";

export default function Profile({ name, subtitle}) {
    return (
        <div className={"profile"}>
            <div className="profile-content">
                <h1>{name}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}
