import { siteConfig } from "@/site.config";
import Image from "next/image";
import React, { FC } from "react";

const Bio = () => {
  return (
    <div className="flex items-center">
      <Image
        className="flex-shrink-0 mb-3 mr-3 rounded-full w-14 h-14"
        src={require("../public/profile_logo.png")}
        alt="Profile"
      />
      <p className="text-base leading-7">
        Linkedin:{" "}
        <a
          href={siteConfig.linkedinUrl}
          className="font-semibold hover:underline"
        >
          Yuichi Kojima
        </a>
        <br></br>
        Github:{" "}
        <a
          href={siteConfig.githubUrl}
          className="font-semibold hover:underline"
        >
          samuraikun
        </a>
        <br></br>
        Twitter:{" "}
        <a
          href={siteConfig.twitterUrl}
          className="font-semibold hover:underline"
        >
          YuxBeta
        </a>
        <br></br>
        Portfolio:{" "}
        <a
          href="https://yuichi-kojima-portfolio.vercel.app/"
          className="font-semibold hover:underline"
        >
          yuichi-kojima-portfolio
        </a>
      </p>
    </div>
  );
};

export default Bio;
