import React, { Component } from 'react';
import './Main.css';

const Sprocket = (props) => {
    return (
        <div className="widgetItem">
            ⚙️ {props.name}
        </div>
    )
}

const Cog = (props) => {
    return (
        <div className="widgetItem">
            🔩 {props.name}
        </div>
    )
}

// to test, use $r.props.addSprocket() in the command line
class Main extends Component {
    render() {
        const sprockets = this.props.sprockets.map((sprocket, i) => {
            return <Sprocket key={i} name={sprocket}  />
        })

        const cogs = this.props.cogs.map((cog, i) => {
            return <Cog key={i} name={cog}  />
        })

        return (
            <div className="widgetContainer">{sprockets} {cogs}</div>
        )
    }
}

export default Main;
