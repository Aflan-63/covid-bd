import React, { Component } from 'react'

import Rongpur from '../divisions/Rongpur.js'
import Barishal from '../divisions/Barishal.js'
import Dhaka from '../divisions/Dhaka.js'
import Mymensingh from '../divisions/Mymensingh.js'
import Chittagong from '../divisions/Chittagong.js'
import Khulna from '../divisions/Khulna.js'
import Sylhet from '../divisions/Sylhet.js'
import Rajshahi from '../divisions/Rajshahi.js'

import DivisionalBorder from '../borders/DivisionalBorder'
import NationalBorder from '../borders/NationalBorder'

import '../../../style.css'
export default class BangladeshMap extends Component {
    render() {
        return (
            <div>
                <Rongpur></Rongpur>
                <Barishal></Barishal>
                <Dhaka></Dhaka>
                <Mymensingh></Mymensingh>
                <Chittagong></Chittagong>
                <Khulna></Khulna>
                <Sylhet></Sylhet>
                <Rajshahi></Rajshahi>
    
                <DivisionalBorder></DivisionalBorder>
                <NationalBorder></NationalBorder>
            </div>
        )
    }
}
