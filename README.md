## Architecture
```
.
├── README.md
├── __mocks__
│   ├── countries
│   │   └── index.tsx
│   ├── index.tsx
│   └── regions
│       └── index.tsx
├── components
│   ├── Detail
│   │   ├── BackButton
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   ├── CountryData
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── ErrorBoundary
│   │   └── index.tsx
│   ├── Home
│   │   ├── CountryCard
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   ├── Filter
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   ├── SearchInput
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── Layout
│   │   └── index.tsx
│   └── Navbar
│       └── index.tsx
├── hooks
│   ├── index.tsx
│   ├── useAllCountries
│   │   └── index.tsx
│   ├── useCountriesByName
│   │   └── index.tsx
│   └── useManageCountries
│       └── index.tsx
├── jest.config.js
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── Detail
│   │   └── [name].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── postcss.config.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── services
│   ├── getAllCountries
│   │   └── index.ts
│   ├── getCountriesByCode
│   │   └── index.ts
│   ├── getCountriesByName
│   │   └── index.ts
│   ├── getCountriesByRegion
│   │   └── index.ts
│   └── index.tsx
├── shared
│   ├── HttpClient
│   │   └── index.tsx
│   ├── errors
│   │   ├── HttpError.test.ts
│   │   ├── HttpError.ts
│   │   └── Interfaces.tsx
│   ├── helpers
│   │   ├── getBorderdes.tsx
│   │   ├── getRegions.tsx
│   │   └── index.tsx
│   └── interfaces
│       ├── ICountries.ts
│       └── index.ts
├── styles
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── utils
    └── createWrapper.tsx

34 directories, 51 files
```

### Architecture explanation

The architecture was created with main folders as **pages, componets, styles, shared, services, hooks, etc**. That's made it as simple way to find the main folders of the core.

Inside of components, all of them has its own folder, in order to create his own unit test inside the folder (*that's a easy way to understand the component functionality*).

Service's folder has the functions to obtain/call the API, so, the hook's folder had the way to manage gets on API and return an status, data, etc. It's used **ReactQuey** to allow a retry call to the service and return as the same time an status when calling the API, like **isLoading** (for example).

Mock's folder had some mocks in general, because sometines that's mocks will be rehused.

For the css classes, it's used TailwindCSS framework ([https://tailwindcss.com/]), it's really simple to change between dark theme and light theme, that's the reasson because I used it.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
