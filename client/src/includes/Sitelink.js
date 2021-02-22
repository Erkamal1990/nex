import React from 'react';
class Sitelink extends React.Component {
    constructor(props){
        super(props);
        this.state={
            sitelinkdata:this.props.passSiteLinkData
        }
    }
    
  render() {
    return (
      <>
       {this.state.sitelinkdata.map((val, idx)=> {
        return (
        <>
            {idx < 4 ? (
            <div class="col-lg-6 col-md-6 col-6">
                <div class="row">
                    <p className="p_heading mb-1">{this.state.sitelinkdata[idx].site_heading}</p>
                </div>
                <div class="row">
                    <p className="p_dis">{this.state.sitelinkdata[idx].description1}</p>
                </div>
                <div class="row">
                    <p className="p_dis">{this.state.sitelinkdata[idx].description2}</p>
                </div>
            </div>
        ):null}
        </>
        )
    },this)}
      </>
    );
  }
}

export default Sitelink;
