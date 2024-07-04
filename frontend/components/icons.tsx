export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      width="38"
      height="28"
      viewBox="0 0 38 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.51603 0.134169L2.25889 1.20925V7.99575L5.51603 0.134169ZM2.25889 1.20925L0 2.0685L2.2613 7.99575V1.20925H2.25889ZM20.6726 9.68333L17.5657 15.5493L24.048 18.7472L20.6726 9.68333ZM36.2894 9.6285L38 0.123665L34.2374 3.93341L36.2894 9.6285ZM38 0.123665L34.7429 1.24717L34.2374 3.9305L38 0.123665ZM35.527 13.8542L36.287 9.62967L33.2741 9.0405L35.527 13.8542ZM36.287 9.62967L34.2362 3.93341L33.2765 9.04167L36.287 9.62967ZM35.527 13.8542L33.2765 9.04167L32.0955 15.3189L35.527 13.8542ZM25.454 22.5167L27.319 27.4668L30.8228 22.1002L25.454 22.5167ZM27.319 27.4668L32.1209 25.8078L30.8222 22.0967L27.319 27.4668ZM32.1209 25.8078L33.469 25.3639L30.8228 22.0972L32.1209 25.8078ZM24.0498 18.7495L25.454 22.5178L30.8222 22.0984L24.0498 18.7495ZM32.0973 15.3195L24.0498 18.7495L30.8222 22.0967L32.0973 15.3195ZM33.469 25.3651L35.527 13.8536L30.8222 22.0967L33.469 25.3651ZM35.527 13.8536L32.0931 15.3178L30.8222 22.0967L35.527 13.8536ZM20.6726 9.68333L24.0504 18.7472L27.6254 13.111L20.6726 9.68333ZM19.4234 6.32917L20.6726 9.68333L25.6584 7.58975L19.4234 6.32917ZM20.6726 9.68333L27.6254 13.1116L25.6609 7.58975L20.6726 9.68333ZM19.4234 6.32917L25.6584 7.58975L22.9568 0L19.4234 6.32917ZM19.4234 6.32917L22.9568 0L17.737 1.77508L19.4234 6.32917ZM17.5657 15.5499L20.6726 9.68333L17.7394 8.20575L17.5657 15.5499ZM20.6726 9.68333L19.4234 6.32917L17.7394 8.20633L20.6726 9.68333ZM19.4234 6.32917L17.7345 1.7745V8.20633L19.4234 6.32917ZM17.5657 15.5499L17.7394 8.20633L13.905 13.7439L17.5657 15.5499ZM5.61737 16.7598L9.89207 28L13.8953 20.8483L5.61737 16.7598ZM9.89207 28L13.8953 26.6257V20.8507L9.89207 28ZM13.9032 13.7439L5.61555 16.7598L13.8953 20.8483L13.9032 13.7439ZM17.5638 15.5523L13.9032 13.7439L13.8971 20.8483L17.5638 15.5523ZM5.51603 0.134169L2.25889 7.99575L9.91921 11.7781L5.51603 0.134169ZM2.25889 7.99575L5.61555 16.7603L9.91981 11.7787L2.25889 7.99575ZM5.61555 16.7603L13.9032 13.7445L9.92222 11.7787L5.61555 16.7603Z"
        fill="black">
      </path>
    </svg>
  );
}

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel logomark"
      height="64"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
