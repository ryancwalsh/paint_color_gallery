This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# TODO

Forget sorting, especially in 1 dimension. It's difficult and subjective and for these purposes unnecessary anyway.

The index.tsx should be a tool to find the closest colors (across all brand books) given a specific color code / brand color.

First, it will ask whether H, S, or L will be "fixed", and then the other 2 dimensions will be pickable via a 2D XY plot.

If hue is fixed, the 2D plot will be a square with white at the top left and black at the bottom left, and then a bright color at the top right. E.g. https://github.com/mrkite/colorpicker
If saturation is fixed, the 2D plot will be a color wheel varying from white in the center to black at the edge.
If lightness is fixed, the 2D plot will be a color wheel varying from ? in the center to saturated color at the edge.

There should be input sliders for % tolerance of H, S, and L. So all brand colors whose distances to the chosen color fall within those bounds will be shown.
