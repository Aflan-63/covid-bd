import React, { Component } from 'react'
import '../../style.css'
export default class Who extends Component {
    render() {
        return (
            <div>
                <a title="World Health Organization" rel="noopener noreferrer" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" className="wholink">
                    <div className="whologo" />
                    <div className="who">WHO</div>
                </a>
            </div>
        )
    }
}
