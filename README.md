# Athletic Training Session — Frontend

Athletic Training Session (ATS) ke frontend ka yeh React + TypeScript web app hai. Iska initial product direction training videos se movement aur biomechanics insights dena, aur coaches/athletes ko progress dekhne ke liye dashboard dena hai.

> **Current stage:** Frontend ka setup ho chuka hai aur Home/Landing Page ka initial UI scaffold maujood hai. Landing page ko abhi complete product ya working video-analysis system na samjhein: kuch visuals placeholders hain aur baaki pages abhi pending hain.

## Step 1 — Frontend setup aur initial UI

Ab tak ke kaam ka record:

1. `frontend` ko alag npm package banaya gaya hai (`package.json` mein package name `frontend`, version `0.0.0`, aur ES module mode set hai).
2. React, TypeScript aur Vite par chalne wala frontend setup kiya gaya hai. Vite React plugin build/dev setup mein use hota hai.
3. `npm install` se dependencies install ki gayi hain. `package-lock.json` (lockfile version 3) exact dependency tree ko record karta hai; `node_modules` local installed packages rakhta hai aur Git se ignore hota hai.
4. `src/main.tsx` React app ko `#root` element mein mount karta hai, `StrictMode` use karta hai aur global stylesheet load karta hai.
5. `src/App.tsx` mein React Router set hai. Abhi `/` route Home Page render karta hai; Login, Signup, About aur Updates routes ke examples commented placeholders hain.
6. `src/pages/HomePage.tsx` landing-page sections ko is order mein jodta hai: Navbar, Hero, Pose Tracking, Dashboard Preview, Prevention & Rehab, How It Works, Final CTA aur Footer.
7. Reusable `src/components/common/Button.tsx` bana hai. Ismein `primary`, `secondary`, `outline` variants aur `sm`, `md`, `lg` sizes hain.
8. Global CSS aur CSS variables mein dark color palette, text colors, spacing, typography, borders, radii aur kuch utility-style classes define hain. Styling ke liye abhi alag Tailwind dependency listed nahin hai.
9. Kuch local UI interactions maujood hain: mobile navigation menu open/close hota hai, dashboard Coach/Athlete view badalta hai aur Prevention/Rehab tabs content badalte hain.
10. Landing page ke chart, video preview, skeleton overlay, sports image, theme toggle aur kuch CTA/link destinations abhi placeholders hain. `recharts` dependency installed hai, lekin visible chart areas abhi placeholder visuals hain.

### Current progress

`docs/FRONTEND_PROGRESS.md` mein darj progress ke mutabik:

- **Completed pages:** abhi koi page complete mark nahin hai.
- **In progress:** Home / Landing Page (starting).
- **Remaining:** Performance, Dashboards, Prevention & Rehab, How It Works, Updates, About, Login, Register, Athlete Profile aur Video Analysis.
- Existing landing-page components UI scaffold/prototype hain; isse yeh imply nahin hota ki listed pages ya end-to-end features complete hain.
- Frontend progress notes mein pehle CSS loading aur build/typecheck success note kiye gaye the. Is README update ke dauran `npm run build` dobara chalaya gaya aur successful raha.

### Landing page ke maujooda sections

| Component | Abhi kya dikhata/karta hai | Abhi ki seema |
| --- | --- | --- |
| `Navbar` | Brand, desktop/mobile navigation, section-scroll handlers, Log in aur Get Started links | Kuch scroll target IDs ya routes abhi page mein nahin hain; theme toggle visual placeholder hai |
| `Hero` | Product headline, supporting text aur Get Started / Try It Out links | Buttons abhi actual analysis/upload flow shuru nahin karte |
| `PoseTracking` | Phone video aur skeleton-overlay ke Capture/Skeleton cards | Dono preview areas placeholder hain; pose detection nahin chalti |
| `DashboardPreview` | Coach/Athlete toggle, sample stat cards, review-list rows aur chart area | Stats hard-coded sample values hain; chart placeholder hai |
| `PreventionRehab` | Prevention/Rehab tabs aur movement, ROM, pain, strength jaise sample information cards | Tab content static hai aur chart placeholder hai |
| `HowItWorks` | Coordinate, Record aur Analyze ke teen explanatory steps | Yeh informational section hai, actual processing workflow nahin |
| `FinalCTA` | Get Started aur Talk to Us CTA buttons | Buttons ke action handlers abhi nahin hain |
| `Footer` | Product, Coaches, Athletes, Clinicians aur Account link columns; current year | Kai links `#` placeholders hain |

Filhaal `src/App.tsx` mein sirf `/` app route wired hai. Isliye Navbar/Footer mein dikhne wale Login/Sign Up ya anya link labels apne-aap complete pages/routes ka matlab nahin hain. Frontend ke abhi ke components mein sample/local UI state hai; video upload, backend/API integration, authentication aur real biomechanical analysis implemented hone ka daava nahin hai.

## Installed npm packages

Neeche `frontend` ke andar `npm ls --depth=0` se verify kiye gaye direct packages aur installed versions hain. `package.json` version ranges declare karta hai; install kiye gaye exact versions lockfile mein lock hote hain. `package-lock.json` inke saath npm ke transitive dependencies bhi record karta hai.

### Runtime dependencies

| Package | Installed version | Project mein istemal |
| --- | --- | --- |
| `react` | `19.3.1` | React components aur UI |
| `react-dom` | `19.3.1` | Browser DOM mein React app render karna |
| `react-router-dom` | `7.18.4` | Client-side routes aur `Link` components |
| `lucide-react` | `1.59.0` | UI icons, jaise menu, close aur play icons |
| `recharts` | `3.10.1` | Charts ke liye library; filhaal chart sections placeholder hain |

### Development dependencies

| Package | Installed version | Project mein istemal |
| --- | --- | --- |
| `vite` | `8.3.4` | Development server aur production bundler |
| `@vitejs/plugin-react` | `6.1.2` | Vite mein React support |
| `typescript` | `6.0.3` | TypeScript compiler/type checking |
| `typescript-eslint` | `8.71.2` | ESLint ke saath TypeScript linting |
| `eslint` | `10.13.0` | Lint runner |
| `@eslint/js` | `10.0.1` | ESLint ke JavaScript recommended rules |
| `eslint-plugin-react-hooks` | `7.1.1` | React Hooks ke lint rules |
| `eslint-plugin-react-refresh` | `0.5.7` | Vite React Refresh ke lint rules |
| `globals` | `17.13.0` | ESLint config mein browser globals |
| `@types/react` | `19.3.0` | React TypeScript definitions |
| `@types/react-dom` | `19.3.0` | React DOM TypeScript definitions |
| `@types/node` | `24.19.2` | Node.js TypeScript definitions |

## Project structure

```text
frontend/
├── docs/
│   └── FRONTEND_PROGRESS.md    # Page status aur progress notes
├── public/
│   ├── favicon.svg             # Browser tab icon
│   └── icons.svg               # Public SVG asset
├── src/
│   ├── assets/                 # Hero image aur starter React/Vite SVGs
│   ├── components/
│   │   ├── common/
│   │   │   └── Button.tsx      # Reusable typed button
│   │   ├── landing/            # Landing page ke content sections
│   │   └── layout/             # Navbar aur Footer
│   ├── pages/
│   │   └── HomePage.tsx        # Landing page sections ka composition
│   ├── styles/
│   │   ├── global.css          # Global styles aur utility-style classes
│   │   └── variables.css       # Theme, spacing aur typography variables
│   ├── App.tsx                 # Router aur app shell
│   ├── App.css                 # Starter stylesheet
│   ├── index.css               # Starter stylesheet
│   └── main.tsx                # React entry point
├── index.html                  # Vite HTML entry point
├── package.json                # Scripts aur direct dependencies
├── package-lock.json           # Locked direct/transitive dependency tree
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # App TypeScript options
├── tsconfig.node.json          # Tooling TypeScript options
├── vite.config.ts              # Vite React plugin configuration
└── eslint.config.js            # JavaScript/TypeScript/React lint rules
```

## Local setup

Commands ko project ke `frontend` folder se run karein:

```bash
npm install
npm run dev
```

Vite terminal mein local development URL dikhayega. Development server band karne ke liye terminal mein `Ctrl+C` dabayein.

Windows PowerShell mein project root se folder mein jaane ka example:

```powershell
cd ".\frontend"
npm install
npm run dev
```

`npm install` existing `package-lock.json` ko use karke dependencies install/update karta hai. Reproducible install ke liye `npm ci` use kiya ja sakta hai; yeh lockfile ke mutabik install karta hai aur existing `node_modules` ko replace karta hai.

## Available npm scripts

| Command | Kaam |
| --- | --- |
| `npm run dev` | Vite development server start karta hai |
| `npm run build` | `tsc -b` type/build checks ke baad Vite production bundle banata hai `dist/` mein |
| `npm run lint` | ESLint ko project files par chalata hai |
| `npm run preview` | Pehle se banaye gaye `dist/` production bundle ka local preview deta hai |

Production build aur preview chalane ke liye:

```bash
npm run build
npm run preview
```

Lint chalane ke liye:

```bash
npm run lint
```

## Build verification

README update ke waqt frontend folder mein `npm run build` successful raha: TypeScript build step complete hua aur Vite ne `dist/` bundle generate kiya. Yeh build verification hai; isse placeholders, pending pages ya end-to-end video analysis complete hone ka daava nahin kiya ja raha.