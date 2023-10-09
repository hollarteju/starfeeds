import React from "react";

function Integration(){
    return(
        <section class="intro">
  <div class="bg-image h-100">
    <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
           
              <div class="card-body p-0">
                <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "700px"}}>
                  <table class="table mb-0">
                    <thead >
                      <tr id="tr">
                        <th scope="col" className="px-3">Name Of Application</th>
                        <th scope="col">Company</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date Of Registration</th>
                        <th scope="col">Last Visited</th>
                        <th scope="col">Action</th>
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
  </div>
</section>
    )
   
};

export default Integration;