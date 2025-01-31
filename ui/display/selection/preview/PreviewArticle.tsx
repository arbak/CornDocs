import Layout from "#/ui/display/selection/preview/Layout";
import Image from "next/image";
import React, { useState } from "react";

interface PreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
  path: string;
}

function PreviewArticle(props: PreviewProps) {
  const { title, description, imageUrl, path } = props;
  const [fallbackImage, setFallbackImage] = useState(false);

  return (
    <Layout title={title} description={description} path={path}>
      {imageUrl ? (
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill={true}
          src={`${imageUrl}`}
          alt="This is the preview image of the component"
          onError={() => {
            setFallbackImage(true);
          }}
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-start p-6">
          <p className="whitespace-wrap leading-snug text-4xl font-black text-slate-400 dark:text-primary-500">
            {title}
          </p>
          <p className="whitespace-wrap text-2xl font-bold text-slate-400 dark:text-slate-400">
            {description}
          </p>
        </div>
      )}
    </Layout>
  );
}

export default PreviewArticle;
