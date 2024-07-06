

```
```
api-aggregator
├─ LICENSE
├─ README.md
├─ README.pdf
├─ backend
│  ├─ .DS_Store
│  ├─ .env.local
│  ├─ .env.prod
│  ├─ .eslintrc.js
│  ├─ .prettierrc
│  ├─ README.md
│  ├─ dist
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ countries
│  │  │  ├─ countries.controller.d.ts
│  │  │  ├─ countries.controller.js
│  │  │  ├─ countries.controller.js.map
│  │  │  ├─ countries.module.d.ts
│  │  │  ├─ countries.module.js
│  │  │  ├─ countries.module.js.map
│  │  │  ├─ countries.repository.d.ts
│  │  │  ├─ countries.repository.js
│  │  │  ├─ countries.repository.js.map
│  │  │  ├─ countries.service.d.ts
│  │  │  ├─ countries.service.js
│  │  │  └─ countries.service.js.map
│  │  ├─ entities
│  │  │  ├─ country.entity.d.ts
│  │  │  ├─ country.entity.js
│  │  │  ├─ country.entity.js.map
│  │  │  ├─ league.entity.d.ts
│  │  │  ├─ league.entity.js
│  │  │  └─ league.entity.js.map
│  │  ├─ interfaces
│  │  │  ├─ api-country-league.interface.d.ts
│  │  │  ├─ api-country-league.interface.js
│  │  │  ├─ api-country-league.interface.js.map
│  │  │  ├─ api-country.interface.d.ts
│  │  │  ├─ api-country.interface.js
│  │  │  ├─ api-country.interface.js.map
│  │  │  ├─ country.interface.d.ts
│  │  │  ├─ country.interface.js
│  │  │  ├─ country.interface.js.map
│  │  │  ├─ league.interface.d.ts
│  │  │  ├─ league.interface.js
│  │  │  └─ league.interface.js.map
│  │  ├─ leagues
│  │  │  ├─ leagues.controller.d.ts
│  │  │  ├─ leagues.controller.js
│  │  │  ├─ leagues.controller.js.map
│  │  │  ├─ leagues.module.d.ts
│  │  │  ├─ leagues.module.js
│  │  │  ├─ leagues.module.js.map
│  │  │  ├─ leagues.repository.d.ts
│  │  │  ├─ leagues.repository.js
│  │  │  ├─ leagues.repository.js.map
│  │  │  ├─ leagues.service.d.ts
│  │  │  ├─ leagues.service.js
│  │  │  └─ leagues.service.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  ├─ services
│  │  │  ├─ api-football.service.d.ts
│  │  │  ├─ api-football.service.js
│  │  │  └─ api-football.service.js.map
│  │  ├─ tsconfig.build.tsbuildinfo
│  │  └─ utils
│  │     ├─ helpers.d.ts
│  │     ├─ helpers.js
│  │     └─ helpers.js.map
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.module.ts
│  │  ├─ countries
│  │  │  ├─ countries.controller.spec.ts
│  │  │  ├─ countries.controller.ts
│  │  │  ├─ countries.module.ts
│  │  │  ├─ countries.repository.ts
│  │  │  ├─ countries.service.spec.ts
│  │  │  └─ countries.service.ts
│  │  ├─ entities
│  │  │  ├─ country.entity.ts
│  │  │  └─ league.entity.ts
│  │  ├─ interfaces
│  │  │  ├─ api-country-league.interface.ts
│  │  │  ├─ api-country.interface.ts
│  │  │  ├─ country.interface.ts
│  │  │  └─ league.interface.ts
│  │  ├─ leagues
│  │  │  ├─ leagues.controller.spec.ts
│  │  │  ├─ leagues.controller.ts
│  │  │  ├─ leagues.module.ts
│  │  │  ├─ leagues.repository.ts
│  │  │  ├─ leagues.service.spec.ts
│  │  │  └─ leagues.service.ts
│  │  ├─ main.ts
│  │  ├─ services
│  │  │  └─ api-football.service.ts
│  │  └─ utils
│  │     └─ helpers.ts
│  ├─ test
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ frontend
   ├─ .DS_Store
   ├─ .env.local
   ├─ .next
   │  ├─ app-build-manifest.json
   │  ├─ app-path-routes-manifest.json
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ .tsbuildinfo
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_macos_x86_64_0.106.15
   │  │  └─ webpack
   │  │     ├─ client-production
   │  │     │  ├─ 0.pack
   │  │     │  ├─ 1.pack
   │  │     │  ├─ 2.pack
   │  │     │  ├─ index.pack
   │  │     │  └─ index.pack.old
   │  │     ├─ edge-server-production
   │  │     │  ├─ 0.pack
   │  │     │  └─ index.pack
   │  │     └─ server-production
   │  │        ├─ 0.pack
   │  │        ├─ 1.pack
   │  │        ├─ 2.pack
   │  │        ├─ 3.pack
   │  │        ├─ 4.pack
   │  │        ├─ 5.pack
   │  │        ├─ 6.pack
   │  │        ├─ index.pack
   │  │        └─ index.pack.old
   │  ├─ package.json
   │  ├─ prerender-manifest.js
   │  ├─ react-loadable-manifest.json
   │  ├─ routes-manifest.json
   │  ├─ server
   │  │  ├─ app
   │  │  │  └─ favicon.ico
   │  │  │     ├─ route.js
   │  │  │     └─ route.js.nft.json
   │  │  ├─ app-paths-manifest.json
   │  │  ├─ chunks
   │  │  │  ├─ 13.js
   │  │  │  ├─ 437.js
   │  │  │  ├─ 682.js
   │  │  │  ├─ 717.js
   │  │  │  └─ font-manifest.json
   │  │  ├─ font-manifest.json
   │  │  ├─ functions-config-manifest.json
   │  │  ├─ interception-route-rewrite-manifest.js
   │  │  ├─ middleware-build-manifest.js
   │  │  ├─ middleware-manifest.json
   │  │  ├─ middleware-react-loadable-manifest.js
   │  │  ├─ next-font-manifest.js
   │  │  ├─ next-font-manifest.json
   │  │  ├─ pages
   │  │  │  ├─ _app.js
   │  │  │  ├─ _app.js.nft.json
   │  │  │  ├─ _document.js
   │  │  │  ├─ _document.js.nft.json
   │  │  │  ├─ _error.js
   │  │  │  ├─ _error.js.nft.json
   │  │  │  ├─ api
   │  │  │  │  ├─ countries.js
   │  │  │  │  └─ countries.js.nft.json
   │  │  │  ├─ countries.js
   │  │  │  ├─ countries.js.nft.json
   │  │  │  ├─ error.js
   │  │  │  ├─ error.js.nft.json
   │  │  │  ├─ index.js
   │  │  │  ├─ index.js.nft.json
   │  │  │  ├─ infinite-scroll.js
   │  │  │  ├─ infinite-scroll.js.nft.json
   │  │  │  ├─ interfaces
   │  │  │  │  ├─ country.js
   │  │  │  │  └─ country.js.nft.json
   │  │  │  ├─ nav-item.js
   │  │  │  ├─ nav-item.js.nft.json
   │  │  │  ├─ page.js
   │  │  │  ├─ page.js.nft.json
   │  │  │  ├─ search.js
   │  │  │  └─ search.js.nft.json
   │  │  ├─ pages-manifest.json
   │  │  ├─ server-reference-manifest.js
   │  │  ├─ server-reference-manifest.json
   │  │  ├─ webpack-api-runtime.js
   │  │  └─ webpack-runtime.js
   │  ├─ static
   │  │  ├─ 69YXjy6nGqWdd4jzu-Azl
   │  │  │  ├─ _buildManifest.js
   │  │  │  └─ _ssgManifest.js
   │  │  ├─ chunks
   │  │  │  ├─ 19-a306b231822f8ae1.js
   │  │  │  ├─ 388-e5305b12954e7014.js
   │  │  │  ├─ fd9d1056-2821b0f0cabcd8bd.js
   │  │  │  ├─ framework-1ef4933fc9f10a4c.js
   │  │  │  ├─ main-1780185dceae811b.js
   │  │  │  ├─ main-app-82146dce940a1a74.js
   │  │  │  ├─ pages
   │  │  │  │  ├─ _app-e0c25201a961154b.js
   │  │  │  │  ├─ _error-1be831200e60c5c0.js
   │  │  │  │  ├─ countries-956295ee0275ec76.js
   │  │  │  │  ├─ error-6537db59898aa3b7.js
   │  │  │  │  ├─ index-c62ab539104c6935.js
   │  │  │  │  ├─ infinite-scroll-eea9b3a734d91685.js
   │  │  │  │  ├─ interfaces
   │  │  │  │  │  └─ country-e32dfeff8801fe8e.js
   │  │  │  │  ├─ nav-item-b3eaafe5e5de0078.js
   │  │  │  │  ├─ page-9ba7b781b64407fd.js
   │  │  │  │  └─ search-021a687cc8857c27.js
   │  │  │  ├─ polyfills-78c92fac7aa8fdd8.js
   │  │  │  └─ webpack-35b92941fc8726f9.js
   │  │  └─ css
   │  │     └─ cff98d7d2c614a7a.css
   │  ├─ trace
   │  └─ types
   │     └─ package.json
   ├─ .vercel
   │  ├─ README.txt
   │  └─ project.json
   ├─ .vscode
   │  └─ settings.json
   ├─ LICENSE.md
   ├─ README.md
   ├─ README.pdf
   ├─ app
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  └─ layout.tsx
   ├─ components
   │  ├─ CountryLeagues.tsx
   │  ├─ icons.tsx
   │  └─ ui
   │     ├─ button.tsx
   │     └─ input.tsx
   ├─ components.json
   ├─ lib
   │  └─ utils.ts
   ├─ next-env.d.ts
   ├─ next.config.js
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  ├─ _app.tsx
   │  ├─ api
   │  │  └─ countries.ts
   │  ├─ countries.tsx
   │  ├─ error.tsx
   │  ├─ index.tsx
   │  ├─ infinite-scroll.ts
   │  ├─ interfaces
   │  │  └─ country.ts
   │  ├─ nav-item.tsx
   │  ├─ page.tsx
   │  └─ search.tsx
   ├─ postcss.config.js
   ├─ tailwind.config.ts
   ├─ tsconfig.json
   └─ types.d.ts

```