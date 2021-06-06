import React from "react";
import "./ui.css"

const Footer: React.FC = props => {

    return (
        <div className={"footer"}>
            Created by <a className={"footerLink"} href={"https://pratham.site"}>Pratham Rawat</a>
        </div>
    );
}

export default Footer;