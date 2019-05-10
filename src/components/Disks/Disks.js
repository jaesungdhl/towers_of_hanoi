import React from "react";
import "./Disks.css";

class Disks extends React.Component{

    dragDisk = (event) => {
        console.log("dragged");
    }

    render(){
        return (
            <div className="disk-container">
                <div className="disk disk1" onClick={this.dragDisk}></div>
                <div className="disk disk2" onClick={this.dragDisk}></div>
                <div className="disk disk3" onClick={this.dragDisk}></div>
                <div className="disk disk4" onClick={this.dragDisk}></div>
                <div className="disk disk5" onClick={this.dragDisk}></div>
            </div>
        )
    }
}

export default Disks;