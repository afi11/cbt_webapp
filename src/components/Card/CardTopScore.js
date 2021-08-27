import React from "react";
import { urlPhoto } from "../../services/url";

export default function CardTopScore(props) {
  return (
    <div className="shadow bg-white w-full rounded px-2 py-3 mt-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <img
            src={urlPhoto + props.photo}
            className="rounded-full img-profil-card"
            alt="Image_Profile"
          />
          <div className="flex flex-col ml-3">
            <p className="text-lg font-semibold text-gray-600">{props.name}</p>
            <p className="text-md text-gray-600 -mt-2">{props.email}</p>
          </div>
        </div>
        <p
          className={
            "text-2xl font-bold " +
            (props.ishigh ? "text-green-400" : "text-red-400")
          }
        >
          {props.score}
        </p>
      </div>
    </div>
  );
}
