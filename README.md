# Getting Started

## Adding docs to your project

### Step 1: Change the environment variables

Go into the **.env.local** file and change the following variables to include your own.

```js
NEXT_PUBLIC_PRODUCTION_ROOT_URL = "https://www.corndocs.com";
NEXT_PUBLIC_GITHUB_PROFILE_URL = "https://github.com/dishwasher-detergent/CornDocs";
NEXT_PUBLIC_GITHUB_BRANCH="main"
NEXT_PUBLIC_PROJECT_NAME = "CornDocs";
NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY = "";
```

### Step 2: Change the images

Go into the **public/static** folder and change the 2 images. Add your own logo and picture there. The logo must be in SVG format.

### Step 3: Add the blog

Create a new file under the **\_posts** directory. Let's assume the new documentation file name is **getting-started.md**

You can nest files within folders.

#### Example:

```js
posts/
└── components/
    ├── Button
    ├── Link
    └── Etc
```

Be careful about the name because it will be the url (path) for the documentation.

Every documentation has a top section where you can specify some meta data about that blog

```js
---
title: "Getting Started"
description: "This is a short description of the documentation"
banner: "/images/getting-started.jpeg"
tags: ["Setup"]
date: 1 October 2022
---
```

### Step 4: Add an image for the documentation file and folder (Optional)

It is recommended the image is in the same file structure as the document that is referencing it.
So if the doc is in **Getting Started/Setup**, you should mirror this into the **public/images/** folder.

#### Documentation File Image

Add an image to the **public/images/** folder.

#### Folder Image

Add a image to the **public/images/(Folder Name)/(Folder Name.File Extension)**.

#### Example:

```js
public/
└── images/
    ├── sample.jpg
    └── Getting Started/
        ├── getting-started.jpg (This will give the folder getting started an image)
        └── setup.jpg (this will give the file setup.mdx an image if that was assigned in the frontmatter.)
```

## Setting up Favicon

Generate your favicon files through your favorite method, or use [https://www.favicon-generator.org/](https://www.favicon-generator.org/)

### Color customization

You can change the accent color to be whatever you like by going into **tailwind.config.js** and updating the primary color to your preference.

#### Example:

```js
const colors = require("tailwindcss/colors");

module.exports = {
  ...
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  ...
};
```

### Run the project to verify

If you want to test the project locally

```sh
npm run dev
```

and go to **http://localhost:3000/getting-started** to see the fruits of your labor!

## Deploy!

Once you're done, you can deploy to Vercel with the click of a button!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdishwasher-detergent%2FCornDocs&env=NEXT_PUBLIC_PRODUCTION_ROOT_URL,NEXT_PUBLIC_GITHUB_URL,NEXT_PUBLIC_PROJECT_NAME,NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY&envDescription=Getting%20CornDocs%20setup&envLink=corndocs.com%2FDocs%2FGetting-Started)

### Technologies Used

- NextJS
- Tailwind CSS
- Typescript
- Markdown
- Syntax Highlighter

### Github Repo

[https://github.com/dishwasher-detergent/CornDocs](https://github.com/dishwasher-detergent/CornDocs)

Built ontop of Mohammad-Faisal/nextjs-tailwindcss-beautiful-blog-template
