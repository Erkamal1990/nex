import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import { Router, browserHistory, Route, withRouter } from 'react-router';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';
import Comman from './includes/Comman';
import Sitelink from './includes/Sitelink';
import queryString from 'query-string';
import csc from 'country-state-city';
import Moment from 'moment';
var api_Path = process.env.REACT_APP_API_PATH;
class ViewCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        campaignDetail: [],
        userDetail: [],
        interest: [],
        sitelink: [],
        channel: [],
        numDays: '',
        CountryName:'',

    }
  }
  
  componentDidMount() {
    const search = document.location.search; 
    const params = new URLSearchParams(search);
    const id = params.get('id');
    var api_Path = process.env.REACT_APP_API_PATH;
    var sessioData = JSON.parse(sessionStorage.getItem('userData'));
    const userData = {
      user_type: sessioData.data.user_type,
      user_id: sessioData.data.id,
      campaigne_id:id
    }
    const tokenBlob = new Blob([JSON.stringify({userData}, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body:tokenBlob,
      mode: 'cors',
      cache: 'default',
      headers:{
        'x-access-token':sessioData.token
      }
  };
  fetch(api_Path+'user/ViewCampaigneDetails', options).then(r => {
        r.json().then(campaigneData => {
            var SDate = Moment(campaigneData.data[0].start_date,'DD-MM-YYYY'); //todays date
            var EDate = Moment(campaigneData.data[0].end_date,'DD-MM-YYYY'); // another date
            var duration = Moment.duration(EDate.diff(SDate));
            var Days = duration.asDays();
            var arr = [];

            campaigneData.sitelink.map((val, idx)=> {
                arr.push(val);
            })

          this.setState({
            campaignDetail: campaigneData.data[0],
            userDetail: campaigneData.userData[0],
            interest: campaigneData.interest,
            sitelink:arr,
            channel: campaigneData.data[0].channel.split(','),
            numDays:Days,
            CountryName:csc.getCountryByCode(campaigneData.data[0].country),
          })
        });
    })
    
  }

  render() {
    return(
      <div className="container-scroller">
        <Comman /> 
    <Header />
    <div className="container-fluid page-body-wrapper">
    <Sidebar />
<div className="main-panel">
  <div className="content-wrapper">
    <div className="page-header">
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title tatile2" style={{borderBottom: '1px solid #eee', paddingBottom: '10px'}}>Campaign Details</h4>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <div id="order-listing_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                      <div className="emp-profile">
                            <div className="row">
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body" style={{padding: '0rem'}}>
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active"  data-toggle="tab" href="#personal" role="tab"
                                                    aria-controls="personal" aria-selected="false">Personal Details</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"  data-toggle="tab" href="#Media_Objective" role="tab"
                                                    aria-controls="Media_Objective" aria-selected="true">Media Objective </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"  data-toggle="tab" href="#Target_Audience" role="tab"
                                                    aria-controls="Target_Audience" aria-selected="false">Target Audience </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"  data-toggle="tab" href="#channel" role="tab"
                                                    aria-controls="channel" aria-selected="false">Channel</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#Creative" role="tab"
                                                    aria-controls="Creative" aria-selected="false">Creative</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"  data-toggle="tab" href="#Budget" role="tab"
                                                    aria-controls="Budget" aria-selected="false">Budget & Forecasting</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link"  data-toggle="tab" href="#Forecasting" role="tab"
                                                    aria-controls="Forecasting" aria-selected="false">Forecasting</a>
                                            </li> */}

                                        </ul>
                                        <div className="tab-content">
                                        <div className="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal">
                                                <div className="media">
                                                    <div className="media-body">
                                                    <div className="col-md-5">
                                                    <h5 className="tabingcss">Personal</h5>
                                                    <table className="table table dark1">
                                                        <tr>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> Name </span>
                                                            </td>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> {this.state.userDetail.frist_name} {this.state.userDetail.last_name} </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> Mobile </span>
                                                            </td>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize">{this.state.userDetail.mobile} </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> Email </span>
                                                            </td>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> {this.state.userDetail.email}</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> Address </span>
                                                            </td>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> 2884  University Street, Seattle, Washington</span>
                                                            </td>
                                                        </tr>

                                                    </table>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="Media_Objective" role="tabpanel"
                                                aria-labelledby="home-tab">
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-lg-5 grid-margin stretch-card">
                                                            <div className="card">
                                                                <div className="card-body" style={{padding:'0rem'}}>
                                                                    
                                                                    <div className="table-responsive">

                                                                        {this.state.campaignDetail.media_objective == '1' ? (
                                                                            <div>
                                                                                <h5>Messages</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Platform Name </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.platform} </span>
                                                                                        </td>
                                                                                    </tr> 
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Handle or What's App Number </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.handle} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '2' ? (
                                                                            <div>
                                                                                <h5>Website Traffic</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Url </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.url} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '3' ? (
                                                                            <div>
                                                                                <h5>Phone Calls</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Phone Number </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.phone_number} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '4' ? (
                                                                            <div>
                                                                                <h5>Store Visits</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Store Name </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.store_name} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '5' ? (
                                                                            <div>
                                                                                <h5>Lead Generation</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Information </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.collect_lead} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '6' ? (
                                                                            <div>
                                                                                <h5 className="tabingcss">Followers or Fans</h5>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '7' ? (
                                                                            <div>
                                                                                <h5>Video Views</h5>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '8' ? (
                                                                            <div>
                                                                                <h5>Reach & Awareness</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Brand Name </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.brand_name} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                                
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective == '9' ? (
                                                                            <div>
                                                                                <h5>App Installation</h5>
                                                                                <table className="table table dark1">
                                                                                {this.state.campaignDetail.ios_link ? (
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> IOS App Link </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.ios_link} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    ): null}
                                                                                    {this.state.campaignDetail.android_link ? (
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Android App Link </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.android_link} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    ): null}
                                                                                </table>
                                                                            </div>
                                                                        ) : null}
                                                                        {this.state.campaignDetail.media_objective  == '10' ? (
                                                                            <div>
                                                                                <h5>Conversions</h5>
                                                                                <table className="table table dark1">
                                                                                    <tr>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> Url </span>
                                                                                        </td>
                                                                                        <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                                            <span className="colspanyu"> {this.state.campaignDetail.url} </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </div>
                                                                        ) : null}
                                                                    </div>                     
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="channel" role="tabpanel" aria-labelledby="channel">
                                                <div className="media">
                                                    <div className="media-body">
                                                    <div className="col-md-3">
                                                    <h5 className="tabingcss">Channel</h5>
                                                    <table className="table table dark1">
                                                    {this.state.channel.map(function(object, i){
                                                        return ( 
                                                            <>
                                                            <tr>
                                                                <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                    <span className="colspanyu text-capitalize"> {object} </span>
                                                                </td>
                                                            </tr>
                                                         </>
                                                         );})}
                                                        </table>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Target_Audience" role="tabpanel" aria-labelledby="Target_Audience">
                                                <div className="media">
                                                    <div className="media-body">
                                                    <div className="col-md-5">
                                                    <h5 className="tabingcss">Target Audience</h5>
                                                    <div className="table-responsive">
                                                        <table className="table table dark1">
                                                                <tr>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> Gender </span>
                                                                    </td>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> {this.state.campaignDetail.gender} </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> Language </span>
                                                                    </td>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> {this.state.campaignDetail.language} </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> Age Group</span>
                                                                    </td>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> {this.state.campaignDetail.age} </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> Country</span>
                                                                    </td>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> {this.state.CountryName.name} </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> City</span>
                                                                    </td>
                                                                    <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> {this.state.campaignDetail.city} </span>
                                                                    </td>
                                                                </tr>
                                                        </table>
                                                    </div>
                                                    <br/>
                                                    <h5>Interest</h5>
                                                    <table className="table table dark1">
                                                    {this.state.interest.map(function(object, i){
                                                      return ( 
                                                          <>
                                                            <tr>
                                                                <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                    <span className="colspanyu text-capitalize">{object.category}</span>
                                                                </td>
                                                                <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                    <span className="colspanyu text-capitalize"> {object.sub_category} </span>
                                                                </td>
                                                            </tr>
                                                            
                                                         </>
                                                        );})}
                                                         <tr>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu">Behaviour</span>
                                                            </td>
                                                            <td width="50%" style={{textAlign: "left", border: "1px solid #888"}}>
                                                                <span className="colspanyu text-capitalize"> {this.state.campaignDetail.behaviour} </span>
                                                            </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                   
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Creative" role="tabpanel" aria-labelledby="Creative">
                                                <div className="media">
                                                    <div className="media-body">
                                                    <div className="row">
                                                        
                                                {this.state.channel.map(function(object, i){
                                                      return ( 
                                                        <>
                                                        {/* Facebook Ad */}
                                                        {object == "facebook" && 
                                                        <div className="col-md-3">
                                                            <div className="sectionCenter">
                                                                <div>
                                                                    <img src="./img/facebook-header.png"
                                                                        width="100%"/>
                                                                </div>
                                                                <div className="mainPosts">
                                                                    <div className="mainPosts__title">
                                                                        <div className="mainPosts__title--profile">
                                                                            <div className="globalProfile__circleProfile" style={{backgroundImage: "url("+this.state.campaignDetail.fb_profile_image+")"}}>
                                                                                <span></span>
                                                                                </div>
                                                                            <div className="mainPosts__title--profile--name">
                                                                                <a href="#">{this.state.campaignDetail.fb_page_name ? this.state.campaignDetail.fb_page_name : 'Page Name'}</a>
                                                                                <span>1h <i className="fas fa-globe-americas"></i> </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mainPosts__description">
                                                                        {this.state.campaignDetail.fb_message}
                                                                        
                                                                        </div>
                                                                        <div className="mainPosts__post" style={{backgroundImage: "url("+api_Path+"uploads/"+this.state.campaignDetail.fb_image+")"}}></div>
                                                                    <div className="mainPosts__description">
                                                                    <p className="heading_data">{this.state.campaignDetail.fb_heading1 ? this.state.campaignDetail.fb_heading1 : 'Add a catchy headline 1 here'}</p>
                                                                    <p className="heading_data">{this.state.campaignDetail.fb_heading2 ? this.state.campaignDetail.fb_heading2 : 'Add a catchy headline 2 here'}</p>
                                                                    </div>
                                                                        
                                                                    <div className="mainPosts__reaction">
                                                                        <div className="mainPosts__reaction--icons">
                                                                            <div className="svg">
                                                                                <img src="svg/like.svg" alt="" />
                                                                            </div>
                                                                            <div className="svg">
                                                                                <img src="svg/heart.svg" alt="" />
                                                                            </div>
                                                                            <div className="svg">
                                                                                <img src="svg/care.svg" alt="" />
                                                                            </div>
                                                                            <a href="#">52k</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mainPosts__likeShare">
                                                                        <span>
                                                                            <div className="svg">
                                                                                <img src="svg/like_light.svg" alt="" />
                                                                            </div>
                                                                            <h3>Like</h3>
                                                                        </span>
                                                                        <span>
                                                                            <div className="svg">
                                                                                <img src="svg/comment.svg" alt="" />
                                                                            </div>
                                                                            <h3>Comment</h3>
                                                                        </span>
                                                                        <span>
                                                                            <div className="svg">
                                                                                <img src="svg/share.svg" alt="" />
                                                                            </div>
                                                                            <h3>Share</h3>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <img src="./img/facebook-footer.png"
                                                                        width="100%"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            }
                                                        {/* Instagram Ad */}
                                                        {object == "instagram" && 
                                                        <div className="col-md-3">
                                                            <div className="sectionCenter">
                                                                <div>
                                                                    <img src="./img/header-insta.png"
                                                                        width="100%"/>
                                                                </div>
                                                                <div className="mainPosts">
                                                                    <div className="mainPosts__title">
                                                                        <div className="mainPosts__title--profile">
                                                                            <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/profile.jpg)"}}>
                                                                                <span></span>
                                                                            </div>
                                                    
                                                                            <div className="mainPosts__title--profile--name">
                                                                                <a href="#">Business page</a>
                                                                                <span>22h <i className="fas fa-globe-americas"></i> </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                    
                                                                    
                                                                        <div className="mainPosts__description">
                                                                        {this.state.campaignDetail.insta_message ? this.state.campaignDetail.insta_message : 'Add a message to your customers here'}
                                                                        </div>
                                                                            <div className="mainPosts__post" style={{backgroundImage: "url("+api_Path+"uploads/"+this.state.campaignDetail.insta_image+")"}}></div>
                                                                    <div className="mainPosts__reaction">
                                                                        <div className="mainPosts__reaction--icons">
                                                                            <div className="svg">
                                                                                <img src="svg/like.svg" alt="" />
                                                                            </div>
                                                                            <div className="svg">
                                                                                <img src="svg/heart.svg" alt="" />
                                                                            </div>
                                                                            <div className="svg">
                                                                                <img src="svg/care.svg" alt="" />
                                                                            </div>
                                                                            <a href="#">105k</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mainPosts__likeShare">
                                                                        <span>
                                                                            <div className="svg">
                                                                                <img src="svg/like_light.svg" alt="" />
                                                                            </div>
                                                                            <h3>Like</h3>
                                                                        </span>
                                                                        <span>
                                                                            <div className="svg">
                                                                                <img src="svg/comment.svg" alt="" />
                                                                            </div>
                                                                            <h3>Comment</h3>
                                                                        </span>
                                                                        <span>
                                                                            <div className="svg">
                                                                                <img src="svg/share.svg" alt="" />
                                                                            </div>
                                                                            <h3>Share</h3>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <img src="./img/footer-insta.png"
                                                                        width="100%"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        }
                                                    {/* Instagram Ad */}
                                                    {/* google search Ad */}
                                                    {object == "google" && 
                                                        <div className="col-md-3">
                                                            <div className="sectionCenter">
                                                                <div>
                                                                    <img src="./img/ggogleSearchHeader.png"
                                                                        width="100%"/>
                                                                <div className="mainPosts" style={{marginTop:'0px'}}>
                                                                        <div className="mainPosts__title--profile">
                                                                        <img src="./img/new_google_search_head.png"
                                                                                width="100%"/>
                                                                        </div>
                                                                        
                                                                        <div className="searchAdContant pl-3 pt-3 pr-3 text-left">
                                                                            <small style={{float:"left",color:"#000"}}><strong>AD </strong>{this.state.campaignDetail.google_url ? this.state.campaignDetail.google_url : 'https://test.com'}</small>
                                                                            
                                                                            <div className="clearfix"></div>
                                                                            <div class="row pl-2">
                                                                                <p class="w-100 p_heading">
                                                                                    <span>{this.state.campaignDetail.google_heading1 ? this.state.campaignDetail.google_heading1 : 'Enter Headline 1'}</span>
                                                                                    <span class="pl-2">| </span>
                                                                                    <span>{this.state.campaignDetail.google_heading2 ? this.state.campaignDetail.google_heading2 : 'Enter Headline 2'}</span>
                                                                                    <span class="pl-2">|</span>
                                                                                    <span class=" pl-2">{this.state.campaignDetail.google_heading3 ? this.state.campaignDetail.google_heading3 : 'Enter Headline 3'}</span>
                                                                                </p>
                                                                            </div>
                                                                            <div class=" row pl-2 mt-2 w-100"> 
                                                                                <p class="mb-0 pr-2 p_dis"><span>{this.state.campaignDetail.google_message1 ? this.state.campaignDetail.google_message1 : 'Enter a message 1 to your customer.'}</span></p>
                                                                                <p className="p_dis"><span>{this.state.campaignDetail.google_message2 ? this.state.campaignDetail.google_message2 : 'Enter a message 2 to your customer.'}</span></p>
                                                                            </div>
                                                    
                                                                            <hr style={{marginTop:"0px"}} />
                                                                            <div class="row pl-2 ad-box">
                                                                                <Sitelink passSiteLinkData={this.state.sitelink}/>
                                                                            </div>
                                                                    </div>
                                                                        
                                                                <div>
                                                                    <img src="./img/blury_search_background.jpg"
                                                                        width="100%"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    {/* google search Ad */}
                                                    </div>
                                                    </div>
                                                    }
                                                    {/* You tube link Ad */}
                                                    {object == 'youtube'  && 
                                                        <div className="col-md-3">
                                                            <div className="sectionCenter">
                                                            <img src="./img/you_tube_header.png" width="100%"/>
                                                                <div className="mainPosts">
                                                                        <div className="mainPosts__description">
                                                                        {this.state.campaignDetail.youtube_link ? (
                                                                                <iframe width="100%" height="250px" src={this.state.campaignDetail.youtube_link}
                                                                                frameborder='0'
                                                                                allow='autoplay; encrypted-media'
                                                                                allowfullscreen
                                                                                title='video'
                                                                        />
                                                                        ) : ''}
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                    <img src="./img/you_tube_footer.png" width="100%"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        }
                                                    {/* You tube link Ad */}
                                                    </>
                                                        );},this)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Budget" role="tabpanel" aria-labelledby="Budget">
                                                <div className="media">
                                                    <div className="media-body">
                                                    <div className="col-md-5">
                                                    <h5 className="tabingcss" style={{textAlign: "left"}}>Budget & Forecasting</h5>
                                                    <p style={{textAlign: "left", fontSize: "16px"}}>Ad Will run from {this.state.campaignDetail.start_date} To {this.state.campaignDetail.end_date}</p>
                                                    <br/>
                                                    <div className="table-responsive">
                                                        <table className="table table dark1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> People Reached </span>
                                                                    </td>
                                                                    <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> 518 - 15K </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> Link Clicks </span>
                                                                    </td>
                                                                    <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> 20 - 57 </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> Budget</span>
                                                                    </td>
                                                                    <td style={{textAlign: "left", border: "1px solid #888"}}>
                                                                        <span className="colspanyu"> $ {this.state.campaignDetail.amount*this.state.numDays} USD </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="tab-pane fade" id="Forecasting" role="tabpanel" aria-labelledby="Forecasting">
                                                <div className="media">
                                                    <div className="media-body">
                                                    Forecasting
                                                    </div>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>        
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer />
  </div>
    );
}
}
// Exporting the component 
export default ViewCampaign; 