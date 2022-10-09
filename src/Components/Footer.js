import React from "react";
import ContactData from "../Components/contentData";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer({contact}) {
  return (
  <div id="footer">
    <div className="row">
      <a href={ContactData.Github} target="_blank" rel="noopener noreferrer" className="">
        <i class="bi bi-github"></i>
      </a>
    {/* <a href={ContactData.Github} target="_blank" rel="noopener noreferrer" className="mx-4"><i class="bi bi-github"></i></a> */}
    {/* <a href={ContactData.LinkedIn} target="_blank" rel="noopener noreferrer" className="mx-4">asdf</a> */}
    {/* <a href={ContactData.StackOverflow} target="_blank" rel="noopener noreferrer" className="mx-4">adf</a> */}
    </div>
    <pre><h3>Created with <span>  ❤  </span> by eljsteer</h3></pre>
    {/* <link id="" href=""/><span className="navArrow">&#10685;</span> */}
  </div>
  )
}

export default Footer;