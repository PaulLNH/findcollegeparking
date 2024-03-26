import "./HostRegistration.css";
import Navbar from "./Navbar";
import { BrowserView, MobileView } from "react-device-detect";

function HostRegistration() {
  return (
    <fragment className="host-registration">
      <Navbar />
      <div className="FormPage">
        <BrowserView>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWHtG9l24kHnf2pFM75Iv65A7-1dgui8slOsBcQLPo_WI1Tg/viewform?embedded=true"
            height="3200"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Find College Parking Form"
            id="FCPForm"
          >
            Loading…
          </iframe>
        </BrowserView>
        <MobileView>
          Have a parking space you wish to rent out? Fill out the{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWHtG9l24kHnf2pFM75Iv65A7-1dgui8slOsBcQLPo_WI1Tg/viewform">
            host registration
          </a>{" "}
          form and we'll find students that match your criteria to rent from
          you.
        </MobileView>
      </div>
    </fragment>
  );
}

export default HostRegistration;
