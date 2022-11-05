import React, { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import { Button } from "@/components";
import {HiInformationCircle} from "react-icons/hi"
export function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    console.log("accepring cookies");
  };
  const closePopup = () => {
    setConsent(true);
    console.log("Closed cookie consent");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("Denied cookie consent");
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`fixed bottom-0 w-full rounded-sm bg-blue-700 p-4 text-sm text-white ${
        consent ? "hidden" : ""
      }`}
    >
    <HiInformationCircle size={20}/>
      <p className="text-slate-200">
        Our website uses cookies, these are small files of letters and numbers
        that are put on your device to improve your experience on the site. To
        find out more about our use of cookies please visit our Privacy and
        cookies policy. By clicking any link on this page you are giving your
        consent for us to set cookies.
      </p>
      <div className="mt-4 flex justify-between align-middle">
        <Button
          className="text-bold"
          onClick={() => {
            closePopup();
          }}
          variant={"transparent"}
        >
          Close
        </Button>

        <Button
        className="shadow-md"
          onClick={() => {
            acceptCookie();
          }}
          variant={"white"}
        >
          Accept All
        </Button>
      </div>
    </div>
  );
}

export default Consent;
