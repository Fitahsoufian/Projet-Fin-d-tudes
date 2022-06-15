import React from "react";

import Header from "./Header";
import MenuContainer from "./MenuContainer";
import BannerName from "./BannerName";
import SubMenuContainer from "./SubMenuContainer";
import Footer from "./footer";

function Home() {
    return(
<div className="App">
<Header />
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName link={"/signin"} />
            <img
             src="https://www.freshbooks.com/wp-content/uploads/cost-accounting.jpg.optimal.jpg"
              className="deliveryPic"
            />
            <SubMenuContainer/>
            <MenuContainer/>
          </div>
          <Footer/>
        </div>
      </main>
      </div>
      )
}
export default Home;