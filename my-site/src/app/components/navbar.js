"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";

function Navbar() {
    const [selectedItem, setSelectedItem] = useState("Inicio");

    const handleItemClick = (item) => {
        setSelectedItem(item);

    
    };
    return(
        <nav className={styles.navbar}> 
            <div 
            className={styles.navbarItem + ` ${selectedItem === "Inicio" ? styles.selected : ""}`}
            onClick={() => handleItemClick("Inicio")}>
                <a href="#header">Inicio</a>
            </div>
            <div 
            className={styles.navbarItem + ` ${selectedItem === "Habilidades" ? styles.selected : ""}`}
            onClick={() => handleItemClick("Habilidades")}>
                <a href= "#info">Habilidades</a>
            </div>
        </nav>
    );
}

export default Navbar;

