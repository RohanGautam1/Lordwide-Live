import React from 'react';
import "./newNav.css";
const NewNav = () => {
  return (
    <div className='container ' style = {{height:"20vh"}}>
      <div className='row d-flex  '>
        <div className='col-6   '>
        <h1 className="heading " style = {{fontSize:"52px", color: "#000000" , fontWeight:800,}}>My Account</h1>          {/*{MenuData.menuheading}*/}
        <p className="para "style = {{fontSize:"20px", color: "#7A86A1" , fontWeight:800,
    }}>Hello Pizzeria Italiana, welcome back</p>
        </div>
        <div className='col-3 '>{}</div>
        <div className='col-3 '>
        
        <div className="search-icon " style = {{display: "flex", justifyContent: "space-between", position:"relative"}}>
           
                 <svg xmlns="http://www.w3.org/2000/svg" className='search-icon' width="19.816" height="19.862" viewBox="0 0 19.816 19.862">
                 <path id="search_icon" data-name="search icon" d="M1196.5,71.527,1193.1,68.19h0l-.08-.122a.8.8,0,0,0-1.126,0h0a8.026,8.026,0,0,1-10.422.338,7.635,7.635,0,0,1-1.69-10.08,7.992,7.992,0,0,1,9.984-2.947,7.691,7.691,0,0,1,4.274,9.318.774.774,0,0,0,.18.766.814.814,0,0,0,.767.23.793.793,0,0,0,.588-.536h0a9.274,9.274,0,0,0-4.954-11.17,9.652,9.652,0,0,0-12.016,3.122,9.2,9.2,0,0,0,1.347,12.108,9.684,9.684,0,0,0,12.42.511l3.016,2.955a.81.81,0,0,0,1.127,0,.78.78,0,0,0,.011-1.1l-.011-.011h0Z" transform="translate(-1176.928 -53.049)"/>
                  </svg>
                    </div>
                    <div className="seach-box position-fixed">
                      <input
                        type="search"
                        className="search"
                        placeholder="Search everything"
                        
                      />
                    </div>
        </div>
      </div>
    </div>
  );
}

export default NewNav;
