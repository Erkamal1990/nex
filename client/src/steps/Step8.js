import React,{useState} from "react";
import { Link ,Redirect,useHistory} from "react-router-dom";
import Moment from 'moment';
import {toast,Slide} from 'react-toastify';
toast.configure();

const Step8 = ({ setForm, formData, navigation }) => {
  const history = useHistory();
  const { budget} = formData;
  const { previous, next } = navigation;
  var api_Path = process.env.REACT_APP_API_PATH;
  const [open, setOpen] = useState(true);

  var SDate = Moment(formData.start,'DD-MM-YYYY'); //todays date
  var EDate = Moment(formData.end,'DD-MM-YYYY'); // another date
  var duration = Moment.duration(EDate.diff(SDate));
  var numDays = duration.asDays();
  // const params = new URLSearchParams(search);
  const onSubmit = async e => {
    e.preventDefault();
  const formDataImage = new FormData();  
    Object.entries(formData).forEach( 
      ([key, value]) => {
        // 
          if(typeof(value) === 'object') {
            Object.entries(value).forEach(([key1, value1]) => {
               formDataImage.append(key + '[' + key1 + ']', value[key1]);
              if(typeof(value1) === 'object'){
                  Object.entries(value1).forEach(([key2, value2]) => {
                    formDataImage.append(key + '[' + key1 + ']'+'['+key2+']', value1[key2]);
                    if(typeof(value2) === 'object'){
                      Object.entries(value2).forEach(([key3, value3]) => {
                        formDataImage.append(key + '[' + key1 + ']'+'['+key2+']'+'['+key3+']', value2[key3]);
                      })
                    }
                })
                formDataImage.append(key + '[' + key1 + ']', value[key1]);
              }
            })
          }else{
            formDataImage.append(key, value);
          }
          //  
        }
      );
        
      const options = {
        method: 'POST',
        body: formDataImage,
        mode: 'cors',
    };
    await fetch(api_Path+'user/createCampaigne', options).then(r => {
          r.json().then(user => {
            if(user.code == 200) {
              onSubmitUplodImage(user.campaign_id);
              toast.dark(user.message, { 
                position: toast.POSITION.BOTTOM_RIGHT,
                 autoClose:5000,hideProgressBar: true,transition: Slide,}
              );
              if(window.location.href.indexOf("Campaigns") != -1){
                history.push("/");
              }else{
                history.push("/Campaigns");
              }
            }
          });
      });
  };
  const onSubmitUplodImage = async (campaign_id) => {
    // e.preventDefault();
    // Working
      const uploadImage = new FormData();
      formData.campaign_id = campaign_id;
      Object.entries(formData).forEach( ([key, value]) => uploadImage.append(key, value));
    // Working;
    const options = {
      method: 'POST',
      body: uploadImage,
      mode: 'cors',
  };
  await fetch(api_Path+'user/uploadAdimage', options).then(r => { r.json().then(user => {});
    });
  }

  return (
    <>
    <fieldset>
			<br/><br/>
			<h4 style={{textAlign: "left", color: "#161c2d"}}>Payment</h4>
			<br/>
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
								<div className="form-group" style={{textAlign: "left"}}>
									<label htmlFor="exampleInputUsername1" style={{fontSize: "17px"}}>Amount</label>
									<input type="text" name="budget" value={budget*numDays} onChange={setForm} className="form-control"  placeholder="$"/>
								</div>
								<button type="button" onClick={onSubmit} className="btn btn-info btn-rounded btn-fw"
									style={{float: "left"}}>Launch Campaign</button>
						</div>
					</div>
				</div>
			</div>
			<input type="button" onClick={previous} name="previous" className="previous action-button-previous" value="Previous" />
		</fieldset>
   </>
  );
};

export default Step8;
