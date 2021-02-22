import React,{useState} from "react";
import FacebookLogin from 'react-facebook-login';
import config from '../config.json';
const Step7 = ({ setForm, formData, navigation}) => {
  const {formStap } = formData;

  const { previous, next } = navigation;
  var [channelAutErr, setchannelAutErr] = useState();
  const facebookResponse = (response) => {
	  formData.fbPageName = response.name;
	  formData.fbUserImage = response.picture.data.url;
	  formData.fbUserId = response.id;
	  next();
  };
  const onSubmit = ()=>{
	// e.preventDefault();
	const isValid = formValidation();
	if(isValid){
		next();
	}
  }
  const formValidation = () => {
	let isValid = true;
	// channelAutErr = "Please authenticate the channel.";
	// if (formData.fbUserId) {
	// 	isValid = true;
	// }
	// setchannelAutErr(channelAutErr);
	return isValid;
}

if(formData.formStap == 10){
	if(!formData.chan_facebook && !formData.chan_instagram){
		next();

	  }
}
if(formData.formStap == 11){
	if(!formData.chan_facebook && !formData.chan_instagram){
		previous();
	  }
}

  return (
    <>
			<fieldset>
				<br/><br/>
				<h4 style={{textAlign: "left", color: "#161c2d"}}>Channel Authentication</h4>
				{channelAutErr ?(
				<div style={{textAlign: "left",color:'red'}}>{channelAutErr}</div>
			    ):null}
				<br/>
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6 grid-margin stretch-card" style={{border: "2px solid rgb(23 162 184)"}}>
						<div className="card text-center">
							<div className="card-body">
								<p className="mt-4 card-text" style={{fontSize: "23px", lineHeight: "34px"}}>
									To Advertise on Facebook or Instagram, You must have a Facebook page Please Link your
									page before starting to build your ads
								</p>
								{/* <button className="btn btn-info btn-sm mt-3 mb-4">Connect Facebook Page</button> */}
								<FacebookLogin
									appId={config.FACEBOOK_APP_ID}
									fields="name,email,picture"
									callback={facebookResponse} 
									textButton="Connect Facebook Page"
									tag="button"
									cssClass="btn btn-primary btn-sm mt-3 mb-4 "
									icon={<i className="fab fa-facebook-f mr-2"></i>}
									>
								</FacebookLogin>
							</div>
						</div>
					</div>
				</div>
				<input type="button" onClick={onSubmit}  className="next action-button" value="Next" />
				<input type="button" onClick={previous} name="previous" className="previous action-button-previous" value="Previous" />
			</fieldset>
    </>
  );
};

export default Step7;
