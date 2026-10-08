import "@fontsource-variable/red-hat-display";
import { cn } from "cn";

import illustration from "./assets/illustration-hero.svg";
import patternBackgroundDesktop from "./assets/pattern-background-desktop.svg";
import iconMusic from "./assets/icon-music.svg";

// ## Colors

// ### Primary

// - Blue 100: hsl(225, 100%, 94%)
// - Blue 700: hsl(245, 75%, 52%)

// ### Neutral

// - Blue 50: hsl(225, 100%, 98%)
// - Gray 600: hsl(224, 23%, 55%)
// - Blue 950: hsl(223, 47%, 23%)

export function App() {
  const style = {
    "bg-blue-50": "bg-[hsl(225,100%,98%)]",
    "bg-blue-100": "bg-[hsl(225,100%,94%)]",
    "bg-blue-700": "bg-[hsl(245,75%,52%)]",
    "text-blue-950": "text-[hsl(223,47%,23%)]",
    "text-gray-600": "text-[hsl(224,23%,55%)]",
    "text-blue-700": "text-[hsl(245,75%,52%)]",
    "shadow-gray-600": "shadow-2xl shadow-[hsl(224,23%,55%)]/50",
  };
  return (
    <main
      className={cn(
        style["bg-blue-100"],
        "w-screen min-h-screen flex items-center justify-center font-['Red_Hat_Display_Variable'] relative p-6",
      )}
    >
      <img
        src={patternBackgroundDesktop}
        className="absolute z-1 top-0 left-0 w-full"
      />
      <section className="max-w-100 mx-auto rounded-2xl overflow-hidden relative z-2 bg-white">
        <img src={illustration} />
        <div className="flex flex-col items-center justify-center gap-6 p-10">
          <h1
            className={cn(
              style["text-blue-950"],
              "font-black text-2xl text-center",
            )}
          >
            Order Summary
          </h1>
          <p
            className={cn(
              style["text-gray-600"],
              "text-lg sm:text-base font-medium text-center",
            )}
          >
            You can now listen to million of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div
            className={cn(
              style["bg-blue-50"],
              "p-4 rounded-md flex items-center w-full gap-4",
            )}
          >
            <img src={iconMusic} />
            <div>
              <p
                className={cn(
                  style["text-blue-950"],
                  "font-extrabold text-lg sm:text-base",
                )}
              >
                Annual Plan
              </p>
              <p className="opacity-60 font-medium text-base sm:text-sm">
                $59.99/year
              </p>
            </div>
            <a
              href="#"
              className={cn(
                style["text-blue-700"],
                "underline font-bold ml-auto text-sm hover:opacity-70",
              )}
            >
              Change
            </a>
          </div>
          <button
            className={cn(
              style["bg-blue-700"],
              style["shadow-gray-600"],
              "text-white w-full px-3 py-4 text-sm rounded-lg cursor-pointer hover:opacity-70",
            )}
          >
            <p className="font-extrabold text-lg sm:text-base">
              Proceed to Payment
            </p>
          </button>
          <a
            href="#"
            className="text-lg sm:text-base font-extrabold opacity-50 hover:opacity-100"
          >
            Cancel Order
          </a>
        </div>
      </section>
    </main>
  );
}
