import React, { Component } from 'react'
import '../../style.css'
export default class VirusSpread extends Component {
    render() {
        return (
            <div>
                <div className="spreadinfographiccomponent">
            <div className="virusinfocomponent">
              <div className="virusiconwithbackground" />
              <div className="virusicon">
                <div className="virusMaySpreathroughAirbornedwhenTinyDropletsremainInTheAir">VIRUS MAY SPREA<br />THROUGH AIRBORNED<br />WHEN TINY DROPLETS<br />REMAIN IN THE AIR</div>
              </div>
            </div>
            <div className="spreadinfocomponent">
              <div className="spreadtext">
                <div className="virusSpreadFromclosePersonToPersonContacttroughDroplets">VIRUS SPREAD FROM<br />CLOSE PERSON <br />TO PERSON CONTACT<br />TROUGH DROPLETS</div>
              </div>
              <div className="spreadiconwithbackground" />
            </div>
            <div className="calenderinfocomponent">
              <div className="calendericonwithbackground" />
              <div className="calendertext">
                <div className="symptomsMaydevelopWithin14daysOfExposuretoTheIllness">SYMPTOMS MAY<br />DEVELOP WITHIN 14<br />DAYS OF EXPOSURE<br />TO THE ILLNESS<br /></div>
              </div>
            </div>
            <div className="howDoesItSpread">HOW DOES IT SPREAD?</div>
          </div>
            </div>
        )
    }
}
