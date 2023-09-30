import React from "react";

function Links() {
  return (
    <div className="links">
      <div className="linksbdy text-black container-d">
        <div className="linkscontent flex flex-col md:flex-row flex-wrap justify-between">
          <div className="linkconstructure lkcdiv">
            <div className="lconstructurecontent flex flex-col">
              <div className="flex sm:h-16 flexrow">
                <div>
                  <img src="./buil.svg" alt="buil" />
                </div>
                <div className="flex flex-col mt-2 ml-2">
                  <span className="lkconstru">Constructure</span>
                  <span>Phlox Group</span>
                </div>
              </div>
              <span className="my-4 l1txt">
                In a professional context, it often happens that private or
                corporate clients corder a publication to be made and presented
                with the actual content still not being ready.
              </span>
              <div className="sociallinks">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className=" lkcdiv">
            <div className="flex flex-col">
              <div className="sm:h-16 flex">
                <span className="usflnks mt-2 my-auto ml-g"> Useful Links</span>
              </div>
              <div className="sociallinks my-4 flex litxt flex-col">
                <li>General information for Users</li>
                <li>Interactive Fairy tales</li>
                <li>Official storybook maker website</li>
                <li>Everyday Mathematics link</li>
              </div>
            </div>
          </div>
          <div className=" lkcdiv">
            <div className="flex flex-col">
              <div className="sm:h-16 flex">
                <span className="usflnks mt-2 my-auto ml-g"> Contact Us</span>
              </div>
              <div className="sociallinks my-4 flex litxt flex-col">
                <li>General information for Users</li>
                <li>Interactive Fairy tales</li>
                <li>Official storybook maker website</li>
                <li>Everyday Mathematics link</li>
              </div>
            </div>
          </div>
          <div className=" lkcdiv">
            <div className="flex flex-col">
              <div className="sm:h-16 flex">
                <span className="usflnks mt-2 my-auto"> Newsletter</span>
              </div>
              <span className="mt-4 mb-2 l1txt">
                Subscribe to our MailChimp newsletter and stay up to date with
                all events coming straight in your mailbox:
              </span>
              <div className="linkquote rounded-full text-white flex">
                <input
                  className="bg-transparent w-full"
                  type="text"
                  placeholder="Enter Email Address"
                />
                <span className="quoteicon block ml-auto">
                  <img src="./dbright.svg" alt="" />
                </span>
              </div>
              {/* <div className="linkquote rounded-full text-white flex">
                <span className="my-auto">Your Email Address</span>
                <span className="quoteicon block ml-auto">
                  <img src="./dbright.svg" alt="" />
                </span>
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Links;
