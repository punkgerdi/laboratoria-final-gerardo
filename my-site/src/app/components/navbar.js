"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    const [selectedItem, setSelectedItem] = useState("Inicio");

    const handleItemClick = (item) => {
        setSelectedItem(item);

    
    };
    return(
        <nav className={styles.Navbar}> 
            <div 
                className={styles.NavbarItem + ` ${selectedItem === "Inicio" ? styles.selected : ""}`}
                onClick={() => handleItemClick("Inicio")}
            >
                <a href="#header">Inicio</a>
            </div>
            <div 
                className={styles.NavbarItem + ` ${selectedItem === "Habilidades" ? styles.selected : ""}`}
                onClick={() => handleItemClick("Habilidades")}
            >
                <a href= "#info">Habilidades</a>
            </div>
        </nav>
    );
}

export default Navbar;

