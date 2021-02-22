import React,{useState} from "react";
import Moment from 'moment';
import {subDays,differenceInDays } from "date-fns";
const Step6 = ({ setForm, formData, navigation }) => {
	
  const {budget,formStap } = formData;
  const { previous, next } = navigation;

  var SDate = Moment(formData.start,'DD-MM-YYYY'); //todays date
  var EDate = Moment(formData.end,'DD-MM-YYYY'); // another date
  var duration = Moment.duration(EDate.diff(SDate));
  var numDays = duration.asDays();
		if(!formData.chan_facebook && !formData.chan_instagram){
			formData.formStap = 10;
		}else{
			formData.formStap = 6;
		}
  return (
    <>
    <fieldset>
			<div className="row">
				<div className="col-md-5">
					<br/><br/>
					<h4 style={{textAlign: "left", color: "#161c2d"}}>Forecasting</h4>
					<p style={{textAlign: "left", fontSize: "22px"}}>Estimated Daily Results</p>
					<br/>
					<div className="table-responsive">
						<table className="table table dark1">
							<tbody>
								<tr>
									<td style={{textAlign: "left", border: "1px solid #e0e0ef"}}>
										<span className="colspanyu"> People Reached </span>
									</td>
									<td style={{textAlign: "left", border: "1px solid #e0e0ef"}}>
										<span className="colspanyu"> 518 - 15K </span>
									</td>
								</tr>
								<tr>
									<td style={{textAlign: "left", border: "1px solid #e0e0ef"}}>
										<span className="colspanyu"> Link Clicks </span>
									</td>
									<td style={{textAlign: "left", border: "1px solid #e0e0ef"}}>
										<span className="colspanyu"> 20 - 57 </span>
									</td>
								</tr>
								<tr>
									<td style={{textAlign: "left", border: "1px solid #e0e0ef"}}>
										<span className="colspanyu"> Estimated Cost</span>
									</td>
									<td style={{textAlign: "left", border: "1px solid #e0e0ef"}}>
									{ (numDays > 0)? 
										<span className="colspanyu"> $ {formData.budget*numDays} USD </span>
										 : 
										 <span className="colspanyu"> $ 100 USD </span>
										}
										
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<input type="button" name="next" onClick={next} className="next action-button" value="Next" />
			<input type="button" name="previous" onClick={previous} className="previous action-button-previous" value="Previous" />
		</fieldset>
    </>
  );
};

export default Step6;
