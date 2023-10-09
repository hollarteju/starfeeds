import React from "react";

function Integration(){
    return(
    <div className="container-fluid px-1 overflow-hidden int-container">
      <div class="container-fluid-int p-0">
        <div class="row justify-content-center">
          <div >
           
              <div class="card-body p-0">
                <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "700px"}}>
                  <table class="table mb-0">
                    <thead >
                      <tr id="tr">
                        <th  className="px-3">Name Of Application</th>
                        <th >Company</th>
                        <th >Category</th>
                        <th >Date Of Registration</th>
                        <th >Last Visited</th>
                        <th >Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="d-flex gap-2 align-items-center px-3">
                            <div className="profile-pics">
                                <img src="StarFeeds.png" alt="" />
                            </div>
                            <span> Like a butterfly</span>
                        </td>
                        <td><span>Boxing</span> </td>
                        <td>9:00 AM - 11:00 AM</td>
                        <td>Aaron Chapman</td>
                        <td>10</td>
                        <div class="delete-btn">Delete <i class="bx bxs-delete"></i></div>
                      </tr>
                      <tr>
                        <td class="d-flex gap-2 align-items-center px-3">
                            <div className="profile-pics">
                                <img src="StarFeeds.png" alt="" />
                            </div>
                            <span> Like a butterfly</span>
                        </td>
                        <td> Boxing</td>
                        <td>9:00 AM - 11:00 AM</td>
                        <td>Aaron Chapman</td>
                        <td>10</td>
                        <div class="delete-btn">Delete <i class="bx bxs-delete"></i></div>
                      </tr>
                      <tr>
                        <td class="d-flex gap-2 align-items-center px-3">
                            <div className="profile-pics">
                                <img src="StarFeeds.png" alt="" />
                            </div>
                            <span> Like a butterfly</span>
                        </td>
                        <td> Boxing</td>
                        <td>9:00 AM - 11:00 AM</td>
                        <td>Aaron Chapman</td>
                        <td>10</td>
                        <div class="delete-btn">Delete <i class="bx bxs-delete"></i></div>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
    )
   
};

export default Integration;