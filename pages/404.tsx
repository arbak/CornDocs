import React from "react";

function NotFoundPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="rounded-md bg-amber-300/20 p-4 text-9xl font-black text-amber-600">
        404
      </h1>
      <div className="text-center text-xl">
        <p>
          Looks like the documentation you were looking for is nowhere to be
          found
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
