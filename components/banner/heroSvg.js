import React, { useContext } from "react";
import { themeContext } from "../../pages/_app";

function HeroSvg() {
  const { toggleDarkMode, theme } = useContext(themeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="Illustration Hero__svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 374.47 469.64"
    >
      <defs>
        <clipPath id="clippy">
          <path
            fill="none"
            d="M133.98 248.2H186.35999999999999V330.03999999999996H133.98z"
          ></path>
        </clipPath>
        <clipPath id="screen">
          <path
            fill="none"
            d="M128.39 240.73H312.67999999999995V336.46999999999997H128.39z"
          ></path>
        </clipPath>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g data-name="1">
          <g>
            <g>
              <path
                fill="#56af96"
                d="M21 212.33a32.58 32.58 0 008 15 32.55 32.55 0 001.58-16.92 32.41 32.41 0 00-8-15A32.47 32.47 0 0021 212.33z"
                className="leaf"
              ></path>
              <path
                fill="#6fdcbf"
                d="M41.55 215.6c-1.88 8.82-9.17 15-9.17 15s-4.23-8.14-2.34-17 9.17-15 9.17-15 4.23 8.18 2.34 17zM11.43 229.36c5.38 12.16 14.92 26.25 14.92 26.25s.82-19.62-4.56-31.78a52.9 52.9 0 00-14.92-19.25 59.1 59.1 0 004.56 24.78zM49.8 229C45.15 241.5 36 256.26 36 256.26s-1.55-19.54 3.1-32a54 54 0 0113.8-20.33A59.54 59.54 0 0149.8 229z"
                className="leaf"
                data-name="leaf"
              ></path>
              <path
                fill="#6fdcbf"
                d="M18.89 226.43c2.66 11.21 9.58 25.93 9.58 25.93s2.62-17.45 0-28.66a47.6 47.6 0 00-9.59-18.92 51.12 51.12 0 00.01 21.65z"
                className="leaf"
                data-name="leaf"
              ></path>
              <path
                fill="#52b292"
                d="M18.73 229.91c2.26 9.55 8.87 22.92 8.87 22.92s2.93-16.1.67-25.65a35.83 35.83 0 00-8.87-15.92 38.82 38.82 0 00-.67 18.65z"
                className="leaf"
                data-name="leaf"
              ></path>
              <path
                fill="#56af96"
                d="M29.87 228.72c-1.23 11.64 4.06 29.89 4.06 29.89s7.31-16.63 8.55-28.27-4.06-21.88-4.06-21.88-7.3 8.62-8.55 20.26z"
                className="leaf"
                data-name="leaf"
              ></path>
              <path
                fill="#a4d3ba"
                d="M25.51 238.91a32.56 32.56 0 004.88 16.28 32.51 32.51 0 004.89-16.28c0-9-4.89-23.28-4.89-23.28s-4.88 14.29-4.88 23.28z"
                className="leaf"
                data-name="leaf"
              ></path>
            </g>
            <path
              fill="#ad998a"
              d="M41.62 244.68c-.09-.81-23.24-4.2-23.15-3.37l2.82 25.17a.68.68 0 00.23.44.58.58 0 00.49.25h18.24c.45 0 .64-.1.76-.41a3.8 3.8 0 00.18-.82q1.06-10.6 1.72-21.26c.09-.83-1.24-.82-1.29 0z"
            ></path>
            <path
              fill="#c1ab9d"
              d="M45.54 240.37c-.5-.54-1.54-.64-3.54-.64H20.21c-2 0-3 .06-3.47.57s-.41 1.12-.36 2.23v2.29c0 1.55 0 2.4.5 2.92s1.56.58 3.3.58H42c2 0 2.93 0 3.44-.55s.42-1.13.38-2.35v-1.39c0-.53 0-1.14.06-1.59.05-.97.12-1.61-.34-2.07z"
            ></path>
            <path
              fill="#fff"
              d="M17.93 240.84a8.43 8.43 0 00-.25 3.39c.07.52.89.53.82 0a7.94 7.94 0 01.22-3.18.41.41 0 00-.79-.21zm.54 5.04a.41.41 0 000-.82.41.41 0 000 .82zm20.84 8.6c-.17.74-.37 1.85.57 2.16s1.43-.49 1.48-1.23a1.75 1.75 0 00-1-1.89 1.09 1.09 0 00-1.13.47 1.57 1.57 0 00-.18.42c-.06.25 0 .47 0 .71a.86.86 0 00.58 1 .83.83 0 001-.58 4.2 4.2 0 000-.51v-.19c0-.25-.11-.17-.31.26h-.44c-.17-.06-.28-.24-.16.08s-.32 0 .27-.12h.44c.24.05.33.83.4.25a1.89 1.89 0 01.08-.4c.24-1-1.35-1.47-1.59-.44zm1.59-1.25a.82.82 0 000-1.64.82.82 0 000 1.64zm-.27 5.21a.82.82 0 000-1.64.82.82 0 000 1.64z"
              opacity="0.49"
            ></path>
          </g>
          <g>
            <path
              fill="#6fdcbf"
              d="M68.68 267.43l9.62-34.51a1.4 1.4 0 00-1.09-1.82l-6.44-2a1.39 1.39 0 00-1.91.91l-9.62 34.52a.44.44 0 00.26.56.43.43 0 00.52-.32l.12-.37 7.86 2.43"
            ></path>
            <path
              fill="#d2d8db"
              d="M71 230.48a1.37 1.37 0 00-1.65 1l-9.14 32.95 3.79 1.19 9.56-34.33z"
            ></path>
            <path
              fill="#e2e6e8"
              d="M68 266.83l9.13-32.95a1.38 1.38 0 00-.8-1.76l-2.74-.83L64 265.62l4 1.21"
            ></path>
            <path
              fill="#a3aeb2"
              d="M70.43 246.27s2.09-9.92 4.2-14c-.55 2.54-.63 3.73-4.2 14z"
            ></path>
            <path
              fill="#af91db"
              d="M72.53 238.97L75.58 239.9 75.36 237.98 76.72 236.55 73.56 235.59 72.53 238.97z"
            ></path>
            <path
              fill="#a3d9e8"
              d="M89.09 267.77L89.09 218.01 100.3 218.01 100.3 267.77"
            ></path>
            <path fill="#6fdcbf" d="M89.1 224.33H100.3V226.12H89.1z"></path>
            <path fill="#6fdcbf" d="M89.1 226.93H100.3V228.72H89.1z"></path>
            <path
              fill="#dd859c"
              d="M78.38 267.77L78.38 222.37 88.97 222.37 88.97 267.77"
            ></path>
            <path
              fill="#fff"
              d="M78.38 232.29H88.97V233.91H78.38z"
              opacity="0.54"
            ></path>
            <path
              fill="#fff"
              d="M78.38 234.64H88.97V236.26H78.38z"
              opacity="0.54"
            ></path>
          </g>
          <g>
            <path
              fill="#babcbe"
              fillRule="evenodd"
              d="M292.27 379.94h-14.49c-1.9-6.55 16.34-6.73 14.49 0z"
            ></path>
            <path
              fill="#e5e6e7"
              fillRule="evenodd"
              d="M277.81 378c1.46-4.11 12.87-4.36 14.42 0a18.53 18.53 0 01-14.42 0z"
            ></path>
            <path
              fill="#424243"
              fillRule="evenodd"
              d="M285.72 375.08a.09.09 0 01-.09.09h-1.22a.09.09 0 01-.09-.09v-.37c0-.11.26-.2.57-.2h.26c.31 0 .57.09.57.2z"
            ></path>
            <rect
              width="25.52"
              height="0.81"
              x="272.26"
              y="379.9"
              fill="#b2b2d8"
              rx="0.3"
            ></rect>
          </g>
          <path fill="#404040" d="M10.16 266.81H109.99V271.04H10.16z"></path>
          <g id="light" onClick={toggleDarkMode}>
            <path
              id="bulb"
              fill="#fff9cc"
              d="M181.07 121.86c0 7.11-5.26 12.88-11.75 12.88s-11.74-5.77-11.74-12.88S162.84 109 169.32 109s11.75 5.74 11.75 12.86z"
            ></path>
            <path
              fill="#fff4c5"
              style={{ mixBlendMode: "luminosity" }}
              d="M142.97 121.86L48.99 380.3 297.78 380.3 195.57 121.86 142.97 121.86z"
              className={["beam", theme.beamAnimate].join(" ")}
              opacity={theme.beamOpacity}
            ></path>
            <path
              fill="#af91db"
              d="M168.26 -21.21H170.39999999999998V69.87H168.26z"
            ></path>
            <path
              fill="#b2b2d8"
              d="M172.27 72.32v-2.79a2.38 2.38 0 00-2.27-2.47h-1.37a2.38 2.38 0 00-2.26 2.47v2.79a7.77 7.77 0 015.89 0z"
            ></path>
            <path
              fill="#af91db"
              d="M178 81.25V90l-.36-.08a54.11 54.11 0 00-15.25-.19l-1.36.19-.37.08v-8.75a10.88 10.88 0 01.1-1.41 9.69 9.69 0 01.32-1.48c0-.06 0-.12.05-.18a7.23 7.23 0 01.26-.7.42.42 0 010-.12l.18-.41c.07-.15.14-.3.22-.44a10.34 10.34 0 011-1.51 9.67 9.67 0 011.43-1.43c.16-.12.32-.25.5-.36a4.93 4.93 0 01.54-.34 6 6 0 01.55-.31l.56-.24a7.77 7.77 0 012.93-.58 7.87 7.87 0 013 .58 9.19 9.19 0 015.3 6 10.2 10.2 0 01.4 2.93z"
            ></path>
            <path
              fill="#af91db"
              d="M195.67 121.86H143l1.58-12.67c1-7.93 8.11-17.48 16.1-19.2l.37-.08 1.43-.2a54.74 54.74 0 0115.18.2l.34.09c8 1.72 15.14 11.27 16.11 19.2z"
            ></path>
            <path
              fill="#b2b2d8"
              d="M178 81.25h-17.35a10.88 10.88 0 01.1-1.41 9.69 9.69 0 01.32-1.48h16.5a10.2 10.2 0 01.43 2.89zm0 5.95V90l-.36-.08a54.11 54.11 0 00-15.25-.19l-1.36.19-.37.08v-2.67c3-.3 6.17-.46 9.38-.46 2.7 0 5.36.13 7.96.33z"
            ></path>
            <path
              fill="#b2b2d8"
              d="M195.67 119.86L142.98 119.86 140.94 119.86 140.94 123.62 197.71 123.62 197.71 119.86 195.67 119.86z"
            ></path>
          </g>
          <rect
            width="282"
            height="10"
            x="37.83"
            y="380.3"
            fill="#404040"
            rx="5"
          ></rect>
          <g>
            <path
              fill="#cc7d96"
              d="M90.8 362a.87.87 0 01-1.74 0 2.14 2.14 0 00-.27-.89 3.33 3.33 0 00-.91-1.11 1.87 1.87 0 00-1.16-.41 1.79 1.79 0 00-.72.2l-.16.09a2.23 2.23 0 00-1 1.61 4.56 4.56 0 00.58 2.75c.08.16.18.34.29.52a17.28 17.28 0 002.71 3c1.79 1.72 3.65 3.51 4.2 6a.87.87 0 11-1.69.38c-.44-1.95-2.11-3.55-3.71-5.1a18.07 18.07 0 01-3-3.38c-.12-.2-.24-.41-.35-.63a6.31 6.31 0 01-.75-3.82 4 4 0 011.85-2.83l.28-.15a3.5 3.5 0 011.46-.39 3.6 3.6 0 012.25.76 5 5 0 011.41 1.71 4 4 0 01.43 1.69z"
            ></path>
            <path
              fill="#dd859c"
              fillRule="evenodd"
              d="M107.54 356.89c.08 4.69-1.07 19.42-4.84 23.22h-8.08c-3.77-3.8-4.92-18.53-4.84-23.22z"
            ></path>
          </g>
          <g>
            <path
              fill="#d2cfd6"
              d="M238.13 377.72L235.66 361.98 205.21 361.98 202.74 377.72 238.13 377.72z"
            ></path>
            <path
              fill="#fff"
              d="M124.59 363.8a3.31 3.31 0 01-3.3-3.31v-18.76h198.29v18.76a3.32 3.32 0 01-3.31 3.31z"
            ></path>
            <path
              fill="#404040"
              d="M319.33 342v18.51a3.06 3.06 0 01-3.06 3.06H124.59a3.06 3.06 0 01-3-3.06V342h197.74m.5-.5H121v19a3.56 3.56 0 003.55 3.56h191.72a3.56 3.56 0 003.56-3.56v-19z"
            ></path>
            <path
              fill="#404040"
              d="M314.36 234.24H126.51a5.45 5.45 0 00-5.47 5.43v103.2h198.79v-103.2a5.45 5.45 0 00-5.47-5.43z"
            ></path>
            <path
              fill="#e3d1e5"
              d="M128.39 240.73H312.67999999999995V336.46999999999997H128.39z"
            ></path>
            <path
              fill="#eaeaea"
              d="M188.3 377.72H252.57V380.08000000000004H188.3z"
            ></path>
            <ellipse
              cx="220.43"
              cy="353.63"
              fill="#333"
              rx="3.84"
              ry="3.81"
            ></ellipse>
            <g clipPath="url(#screen)">
              <g>
                <path
                  fill="#565266"
                  d="M193.2 240.73H312.75V336.46999999999997H193.2z"
                ></path>
                <path
                  fill="#b0baea"
                  d="M193.2 240.73H312.75V247.17999999999998H193.2z"
                ></path>
                <ellipse
                  cx="198.98"
                  cy="243.95"
                  fill="#e84d4d"
                  rx="1.4"
                  ry="1.38"
                ></ellipse>
                <ellipse
                  cx="204.19"
                  cy="243.95"
                  fill="#f2dd77"
                  rx="1.4"
                  ry="1.38"
                ></ellipse>
                <ellipse
                  cx="209.14"
                  cy="243.95"
                  fill="#4eb785"
                  rx="1.4"
                  ry="1.38"
                ></ellipse>
                <path
                  fill="#706d84"
                  d="M200.08 252.61c1.17-.07 1.49-.16 1.49-.37s-.33-.43-1.24-.55v-.34l1.11-.86h-1.3v-.68h2.05l.06.68-1.06.8c.83.18 1.15.51 1.15.9 0 .6-.67 1.05-2.21 1.13zm3.05.63l-.07-.61c1-.7 1.5-1.16 1.5-1.61s-.32-.5-1.4-.53l.07-.72c1.63 0 2.11.46 2.11 1s-.5 1.14-1.32 1.76h1.39v.67zm-3.05 6.02c1.17-.07 1.49-.17 1.49-.38s-.33-.42-1.24-.54V258l1.11-.87h-1.3v-.67h2.05l.06.67-1.06.81c.83.17 1.15.51 1.15.89 0 .61-.67 1.06-2.21 1.14zm3.05.63l-.07-.61c1-.71 1.5-1.16 1.5-1.61s-.32-.5-1.4-.53l.07-.73c1.63 0 2.11.47 2.11 1s-.5 1.15-1.32 1.77h1.39v.67zm-3.05 6.02c1.17-.07 1.49-.17 1.49-.38s-.33-.42-1.24-.54v-.34l1.11-.87h-1.3v-.67h2.05l.06.67-1.06.81c.83.17 1.15.51 1.15.89 0 .61-.67 1.06-2.21 1.14zm5.15.09v.59h-.73V266h-1.44a11.57 11.57 0 01.33-2.88l.84.05-.55 2.16h.82v-1.13l.73-.08v1.16h.37l-.07.67zm-5.15 6.56c1.17-.08 1.49-.17 1.49-.38s-.33-.43-1.24-.54v-.35l1.11-.86h-1.3v-.68h2.05l.06.68-1.06.81c.83.17 1.15.51 1.15.89 0 .6-.67 1.06-2.21 1.13zm3.09.71v-.72c1.17-.09 1.53-.2 1.53-.49s-.39-.42-1.44-.54l.11-1.77h2l-.06.69H204v.59c1.11.17 1.44.56 1.44 1-.04.63-.7 1.15-2.27 1.24zm-3.09 5.93c1.17-.07 1.49-.16 1.49-.37s-.33-.43-1.24-.55v-.34l1.11-.86h-1.3v-.68h2.05l.06.68-1.06.81c.83.17 1.15.51 1.15.89 0 .6-.67 1.05-2.21 1.13zm2.92-.65c0-1 .56-1.73 1.83-2.27l.32.65c-.84.31-1.19.61-1.33 1 .78-.45 1.67-.08 1.67.8a1.25 1.25 0 11-2.49-.17zm1.76.23c0-.48-.41-.67-1-.4v.09c0 .59.25.83.56.83s.44-.17.44-.52zm-4.68 7.07c1.17-.07 1.49-.16 1.49-.37s-.33-.43-1.24-.55v-.34l1.11-.86h-1.3v-.68h2.05l.06.68-1.06.8c.83.18 1.15.51 1.15.9 0 .6-.67 1.05-2.21 1.13zm3.31.6a13.46 13.46 0 011.31-2.67h-1.6l.06-.7h2.33v.68a14.72 14.72 0 00-1.3 2.8zm-3.31 6.05c1.17-.07 1.49-.17 1.49-.38s-.33-.42-1.24-.54v-.34l1.11-.87h-1.3v-.67h2.05l.06.67-1.06.81c.83.17 1.15.51 1.15.89 0 .61-.67 1.06-2.21 1.14zm2.92-.17a.92.92 0 00.05-1.74c0-.48.42-1 1.22-1 .63 0 1.13.33 1.13.84a1 1 0 01-.61.86c.36.21.68.47.68.89s-.49 1-1.3 1-1.17-.32-1.17-.85zm1.71 0c0-.25-.32-.44-.68-.64a.67.67 0 00-.29.52c0 .25.15.44.5.44s.48-.17.48-.35zm-.32-1.21a.63.63 0 00.27-.48c0-.23-.12-.4-.44-.4s-.42.14-.42.29.28.39.6.56zm-4.31 8.03c1.17-.07 1.49-.17 1.49-.38s-.33-.43-1.24-.54v-.35l1.11-.86h-1.3v-.67h2.05l.06.67-1.06.81c.83.17 1.15.51 1.15.89 0 .6-.67 1.06-2.21 1.14zm3.25.1c.84-.32 1.19-.61 1.33-1-.78.44-1.67.08-1.67-.8a1.25 1.25 0 112.49.17c0 1-.56 1.73-1.83 2.27zm1.41-1.45v-.09c0-.59-.25-.83-.56-.83s-.46.17-.46.51c0 .49.41.67 1.02.41zm-2.58 8.04v.59h-.73v-.59H200a11.57 11.57 0 01.33-2.88l.84.05-.55 2.16h.82v-1.08l.73-.08v1.16h.36l-.06.67zm.78-1.07c0-1.11.51-1.85 1.34-1.85s1.26.65 1.26 1.73-.51 1.85-1.35 1.85-1.25-.65-1.25-1.73zm.75-.07l1.05-.54c-.08-.38-.25-.61-.51-.61s-.54.38-.54 1.08zm1.1.09l-1 .53c.08.37.24.59.5.59s.5-.42.5-1.12zm-2.63 7.7v.58h-.73v-.58H200a11.47 11.47 0 01.33-2.88l.84.05-.55 2.16h.82v-1.08l.73-.08v1.16h.36l-.06.67zm.93.58v-.65h.91v-1.76h-.81v-.57l.81-.09v-.41l.76-.06v2.88h.82l-.06.65zm-.93 6.06v.59h-.73v-.59H200a11.44 11.44 0 01.33-2.87l.84.05-.55 2.15h.82v-1.07l.73-.08v1.15h.36l-.06.67zm.97.59l-.07-.61c1-.71 1.5-1.16 1.5-1.61s-.32-.5-1.4-.53l.07-.73c1.63 0 2.11.47 2.11 1.05s-.5 1.14-1.32 1.76h1.39v.67zm-.97 6.06v.59h-.73v-.59H200a11.57 11.57 0 01.33-2.88l.84.05-.55 2.16h.82V324l.73-.07v1.15h.36l-.06.67zm.99-.04c1.17-.07 1.49-.17 1.49-.38s-.33-.42-1.24-.54v-.34l1.11-.87h-1.3v-.67h2l.06.67-1.06.81c.83.17 1.15.51 1.15.89 0 .61-.67 1.06-2.21 1.14zm-.99 6.69v.57h-.73v-.59H200a11.57 11.57 0 01.33-2.88l.84.05-.55 2.16h.82v-1.08l.73-.08v1.16h.36l-.06.67zm3.07 0v.57h-.73v-.59h-1.44a11.57 11.57 0 01.33-2.88l.84.05-.55 2.16h.82v-1.08l.73-.08v1.16h.37l-.07.67z"
                ></path>
                <g>
                  <path
                    fill="#a3848d"
                    d="M210.54 250.33H281.5V253.4H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 250.3300018310547"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#a58492"
                    d="M210.54 256.92H286.1V259.99H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 256.9200134277344"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#a284a3"
                    d="M210.54 263.57H272.12V266.64H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 263.57000732421875"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#9084a0"
                    d="M210.54 270.28H263.21999999999997V273.34999999999997H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 270.2799987792969"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#83859e"
                    d="M210.54 276.86H254.22V279.93H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 276.8599853515625"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#83929b"
                    d="M210.54 283.56H283.62V286.63H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 283.55999755859375"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#829995"
                    d="M210.54 290.42H296.26V293.49H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 290.4200134277344"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#84998b"
                    d="M210.54 296.86H282.08V299.93H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 296.8599853515625"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#899985"
                    d="M210.54 303.51H278.06V306.58H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 303.510009765625"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#979987"
                    d="M210.54 310.1H242.64V313.17H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 310.1000061035156"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#999488"
                    d="M210.54 316.75H304.02V319.82H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 316.75"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#998e8a"
                    d="M210.54 323.4H278.06V326.46999999999997H210.54z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.5399932861328 323.3999938964844"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.54 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                  <path
                    fill="#998c8c"
                    d="M210.42 330.05H260.45V333.12H210.42z"
                    className="line"
                    data-name="line"
                    data-svg-origin="210.4199981689453 330.04998779296875"
                    opacity="0.39"
                    transform="matrix(0 0 0 1 210.42 0)"
                    style={{
                      WebkitTransformOrigin: 0,
                      MsTransformOrigin: 0,
                      transformOrigin: 0,
                    }}
                  ></path>
                </g>
              </g>
              <g className="webpage" clipPath="url(#clippy)">
                <g>
                  <rect
                    width="52.47"
                    height="242.13"
                    x="133.88"
                    y="243.41"
                    fill="#f0f0f2"
                    rx="3.57"
                  ></rect>
                  <path
                    fill="none"
                    stroke="#dd859c"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M141.67 256.81L174.02 256.81"
                  ></path>
                  <path
                    fill="none"
                    stroke="#dd859c"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M141.67 262.1L179.77 262.1"
                  ></path>
                  <path
                    fill="none"
                    stroke="#dd859c"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M141.67 267.4L174.02 267.4"
                  ></path>
                  <rect
                    width="40.59"
                    height="28.15"
                    x="139.83"
                    y="275.67"
                    fill="#f2c5c2"
                    rx="3.22"
                  ></rect>
                  <path
                    fill="#fff"
                    d="M154.57 284.27a5.58 5.58 0 11-5.58-5.35 5.46 5.46 0 015.58 5.35z"
                    opacity="0.48"
                    style={{ mixBlendMode: "overlay" }}
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M144.8 299.31L161.56 299.31"
                    opacity="0.68"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M144.8 294.69L169.32 294.69"
                    opacity="0.68"
                  ></path>
                  <rect
                    width="37.69"
                    height="49.32"
                    x="139.83"
                    y="308.41"
                    fill="#bdc0f4"
                    rx="3.34"
                  ></rect>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M146.12 333.39L157.69 333.39"
                    opacity="0.81"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M146.12 328.77L163.05 328.77"
                    opacity="0.81"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M146.12 323.91L168.46 323.91"
                    opacity="0.81"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M146.12 318.62L172.42 318.62"
                    opacity="0.81"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M146.12 313.32L168.46 313.32"
                    opacity="0.81"
                  ></path>
                  <g>
                    <rect
                      width="40.59"
                      height="58.46"
                      x="139.83"
                      y="363.82"
                      fill="#c2e7ef"
                      rx="3.22"
                    ></rect>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M144.98 414.13L158.87 414.13"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M144.85 410.5L163.18 410.5"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M144.62 406.69L166.2 406.69"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M144.68 402.92L164.8 402.92"
                      opacity="0.68"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M144.75 399.16L158.5 399.16"
                      opacity="0.68"
                    ></path>
                    <rect
                      width="29.22"
                      height="23.21"
                      x="144.8"
                      y="368.54"
                      fill="#fff"
                      opacity="0.48"
                      rx="6.86"
                      style={{ mixBlendMode: "overlay" }}
                    ></rect>
                  </g>
                  <g>
                    <rect
                      width="39.82"
                      height="40.46"
                      x="140.38"
                      y="433.67"
                      fill="#d0b6d1"
                      rx="3.34"
                    ></rect>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 467.66L170.62 467.66"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 463.31L174.81 463.31"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 458.97L170.62 458.97"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 454.16L159.25 454.16"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 450.37L164.91 450.37"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 446.39L170.62 446.39"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 442.04L174.81 442.04"
                      opacity="0.81"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.2"
                      d="M147.03 437.7L170.62 437.7"
                      opacity="0.81"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
            <path
              fill="#ddd"
              d="M133.98 243.95H186.35999999999999V248.2H133.98z"
            ></path>
            <ellipse
              cx="136.91"
              cy="246.08"
              fill="#afafaf"
              rx="0.93"
              ry="0.92"
            ></ellipse>
            <ellipse
              cx="140.38"
              cy="246.08"
              fill="#eaeaea"
              rx="0.93"
              ry="0.92"
            ></ellipse>
            <ellipse
              cx="143.69"
              cy="246.08"
              fill="#afafaf"
              rx="0.93"
              ry="0.92"
            ></ellipse>
            <path
              fill="#eaeaea"
              d="M133.88 330.05H186.35V332.90000000000003H133.88z"
            ></path>
            <path
              fill="#fff"
              d="M182.52 248.2H186.36V330.03999999999996H182.52z"
            ></path>
            <rect
              width="2.4"
              height="22.21"
              x="183.24"
              y="249.77"
              fill="#ddd"
              rx="1.02"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default HeroSvg;
