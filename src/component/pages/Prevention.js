import React, { Component } from 'react'
import '../../style.css'
export default class Prevention extends Component {
    render() {
        return (
            <div>
                <div className="symptomspreventioncomponent">
                    <div className="preventioncomponent">
                        <div className="washhandcomponent">
                            <div className="washhandicon" />
                            <div className="frequentlywashYourHands">FREQUENTLY<br />WASH YOUR HANDS</div>
                        </div>
                        <div className="avoidtouchingfacecomponent">
                            <div className="avoidtouchingfaceicon" />
                            <div className="avoidTouchingFace">AVOID <br />TOUCHING FACE</div>
                        </div>
                        <div className="wearmaskcomponent">
                            <div className="wearmaskicon" />
                            <div className="wearMask">WEAR MASK</div>
                        </div>
                        <div className="prevention">PREVENTION</div>
                    </div>
                </div>
            </div>
        )
    }
}
