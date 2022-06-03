import React from "react";

import Header from "./Header";
import MenuContainer from "./MenuContainer";
import BannerName from "./BannerName";
import SubMenuContainer from "./SubMenuContainer";
import Footer from "./footer";
import {
    AccountBalanceWalletRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded,
  } from "@mui/icons-material";

function Home() {
    return(
<div className="App">
<Header />

      {/* Main Container */}

      <main>
        <div className="mainContainer">
          
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Soufian"} discount={"20"} link={"/offers"} />
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