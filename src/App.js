import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import CovidComponent from './component/header/CovidComponent';
import Information from './component/footer/Information';
import VirusSpread from './component/pages/VirusSpread';
import Prevention from './component/pages/Prevention';
import BangladeshMap from './component/bdmap/map/BangladeshMap';
import Who from './component/footer/Who';
import Iedcr from './component/footer/Iedcr';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('https://corona-bd.herokuapp.com/district')
      .then(response => {
        console.log(response.data.data);
        this.setState({ data: response.data.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
  countByCity(id) {
    const myList = this.state.data;
    let total = 0;
    Object.keys(myList).forEach(function (key, index) {

      if (myList[key].id === id) {
        total = myList[key].count;
        console.log("Total ", total);
        return total;
      }

    });
    return total;
  }

  countDhaka() {
    // Index number of each district, under Dhaka Division - index(ID)
    // DhakaDisctrict: 2(28), DhakaCity: 0(27), Faridpur: null(null), 
    // Gazipur: 14(29), Gopalganj: null(null),
    // Kishoreganj: 22(31), Madaripur: 3(32), Manikganj: 10(33), Munshiganj: null(null),
    // Narayanganj: 1(34), Narsingdi: 7(35), Rajbari: 16(36), Shariatpur: 17(38),
    // Tangail: 11(37)
    let dhakaDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '0' || key === '1' || key === '2' || key === '7'
        || key === '9' || key === '10' || key === '11'|| key === '14' 
        || key === '16' || key === '17' || key === '22') {
        dhakaDivision = dhakaDivision + myList[key].count;
      }
    });
    return dhakaDivision;
  }

  countRangpur() {
    // Index number of each district, under Rangpur Division - index(ID)
    // rangpurDivision: null(null), // Dinajpur: null(null), // Gaibandha: 5(46),
    // Kurigram: null(null), // Lalmonirhat: null(null), // Nilphamari: 21(47), 
    // Panchagarh: null(null), // Rangpur: 12(45), // Thakurgaon: null(null)
    let rangpurDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '5' || key === '12' || key === '21') {
        rangpurDivision = rangpurDivision + myList[key].count;
      }
    });
    return rangpurDivision;
  }

  countRajshahi() { 
    // Index number of each district, under Rajshahi Division - index(ID)
    // rajshahiDivision: null(null), // Bogura: null(null), // Jaipurhat: null(null), 
    // Naogaon: null(null), // Natore: null(null), // ChapaiNawabganj: null(null), 
    // Pabna: null(null), // Rajshahi: null(null),// Sirajganj: null(null)
    let rajshahiDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '-1') {
        rajshahiDivision = rajshahiDivision + myList[key].count;
      }
    });
    return rajshahiDivision;

  }

  countMymensingh() {
    // Index number of each district, under Mymensingh Division - index(ID)
    // mymensinghDivision: null(null),
    // Jamalpur: 9(30), // Mymensingh: 8(49), // Netrokona: null(null),
    // Sherpur: 13(39)
    let mymensinghDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '9' || key === '8' || key === '13') {
        mymensinghDivision = mymensinghDivision + myList[key].count;
      }
    });
    return mymensinghDivision;
  }

  countSylhet() {

    // Index number of each district, under Sylhet Division - index(ID)
    // sylhetDivision: 0, // Habiganj: null(null), // Moulvibazar: 19(43),
    // Sunamganj: null(null), // Sylhet: 20(44),
    let sylhetDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '19' || key === '20') {
        sylhetDivision = sylhetDivision + myList[key].count;
      }
    });
    return sylhetDivision;

  }

  countKhulna() {
    // Index number of each district, under Khulna Division - index(ID)
    // khulnaDivision: 0, // Bagerhat: null(null), // Chuadanga: null(null),
    // Jashore: null(null), // Jhenaidah: null(null), // Khulna: null(null),
    // Kushtia: null(null), // Magura: null(null), // Meherpur: null(null), 
    // Narail: null(null), // Satkhira: null(null),

    let khulnaDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '-1') {
        khulnaDivision = khulnaDivision + myList[key].count;
      }
    });
    return khulnaDivision;
  }

  countBarishal() {

    // Index number of each district, under Chittagong Division - index(ID)
    // barisalDivision: 0, // Barguna: null(null), // Barishal: null(null),
    // Bhola: null(null), // Jhalokathi: null(null), // Patuakhali: null(null),
    // Pirojpur: null(null),
    
    let barisalDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '-1') {
        barisalDivision = barisalDivision + myList[key].count;
      }
    });
    return barisalDivision;

  }

  countChittagong()
  {
    // Index number of each district, under Chittagong Division - index(ID)
    // chittagongDivision: 0, // Bandarban: null(null), // Brahmanbaria: null(null),
    // Chandpur: null(null), // Chattogram: 4(40), // Cumilla: 6(42), 
    // CoxsBazar: 18(41), // Feni: null(null), // Khagrachhari: null(null), 
    // Lakshmipur: null(null), // Noakhali: null(null), // Rangamati: null(null)
    let chittagongDivision = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      if (key === '4' || key === '6' || key === '18') {
        chittagongDivision = chittagongDivision + myList[key].count;
      }
    });
    return chittagongDivision;

  }

  // Used in side "totalinfectedcomponent" 
  countTotal() {
    let total = 0;
    const myList = this.state.data;
    Object.keys(myList).forEach(function (key, index) {
      total = total + myList[key].count;
    });
    return total;
  }


  // Todo: 
  countInArea()
  {
      let location = this.getCurrentLocation();
  }

  // Todo:
  getCurrentLocation()
  {

  }

  render() {
    return (
      <div>
        <div className="covid19">
          {/* Header Component */}
          <CovidComponent></CovidComponent>

          {/* Information Component */}
          <VirusSpread></VirusSpread>
          <Prevention></Prevention>

          {/* Bangladesh Map Component */}
          <BangladeshMap></BangladeshMap>

          {/* Footer Component */}
          <Information></Information>
          <Who></Who>
          <Iedcr></Iedcr>
          {/* Infected Component - Uses API - INCOMPLETE */}
          {/* Todo: ask user for location permission, show data based on location.*/}

          <div className="infectedinareacomponent">
            <div className="infectedrect0171dfe5" />
            <div className="x100000d654ca6c">~SOON~</div>
            <div className="infectedInYourArea">
              <span className="infectedInYourArea-0">infected in </span>
              <span className="infectedInYourArea-12">your area</span></div>
          </div>


          {/* Infected Component - Uses API - COMPLETED */}
          <div className="totalinfectedcomponent">
            <div className="infectedrect" />
            <div className="x100000">000{this.countTotal()}</div>
            <div className="totalInfectedInBd">
              <span className="totalInfectedInBd-0">Total Infected</span>
              <span className="totalInfectedInBd-14"> in BD</span></div>
          </div>


          <div className="districtName">

            {/* Mymensignh - USES API */}
            <div className="infomymensingh">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="mymensigncircle">
                <path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="mymensignh" />
              <div className="amount828f38a0">000{this.countMymensingh()}</div>
            </div>

            {/* Dhaka - USES API */}
            <div className="infodhaka">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="dhakacircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="dhaka785b8fea" />
              <div className="amount4c769d46"> 0{this.countDhaka()}</div>
            </div>

            {/* Sylhet - USES API */}
            <div className="infosylhet">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="sylhetcircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="sylhet323cde02" />
              <div className="amount50cc2835"> 000{this.countSylhet()}</div>
            </div>

            {/* Chittagong - USES API */}
            <div className="infochittagong">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="chittagongcircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="chittagon" />
              <div className="amount9551aef0"> 00{this.countChittagong()}</div>
            </div>

            {/* Barishal - USES API */}
            <div className="infobarishal">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="barishalcircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="barishal" />
              <div className="amount943ede59">000{this. countBarishal()}</div>
            </div>

            {/* Khulna - USES API */}
            <div className="infokhulna">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="khulnacircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="khulna933b61e7" />
              <div className="amounte4ca49d7">000{this.countKhulna()}</div>
            </div>

            {/* Rajshahi - USES API */}
            <div className="inforajshahi">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="rajshahicircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="rajshahi6782963a" />
              <div className="amount4d729371">000{this.countRajshahi()}</div>
            </div>

            {/* Rangpur - USES API */}
            <div className="inforangpur">
              {/* Todo: Change the SVG color based on numbers */}
              <svg preserveAspectRatio="none" viewBox="0 0 67 67" className="rangpurcircle"><path d="M 33.5 0 C 52.00154113769531 0 67 14.99846076965332 67 33.5 C 67 52.00154113769531 52.00154113769531 67 33.5 67 C 14.99846076965332 67 0 52.00154113769531 0 33.5 C 0 14.99846076965332 14.99846076965332 0 33.5 0 Z" />
              </svg>
              <div className="rangpur" />
              <div className="amount">000{this.countRangpur()}</div>
            </div>
          </div>


        </div>
      </div>


    );
  }
}

export default App;
