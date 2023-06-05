import React from "react";

export default function LoadingSpinner() {
  return (
    <article className="h-screen w-[90vw] mx-auto flex justify-center items-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </article>
  );
}
