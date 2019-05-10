import React from "react";
import Board from "./components/Board/Board.js";
import Tower from "./components/Tower/Tower.js";
import "./App.css"

const App = () => {
    return (
        <div>
            <h1>Tower of Hanoi</h1>
            <div className="container">
                <div className="tower-container">
                    <Tower></Tower>
                    <Tower></Tower>
                    <Tower></Tower>
                </div>
                <Board/>
            </div>
        </div>
    )
}

export default App;