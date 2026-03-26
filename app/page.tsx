"use client";
import { Button } from "@/components/ui/button";
// @ts-ignore
import Typical from "react-typical";
import Navbar from "@/components/component/navbar";
import CommandPrompt from "@/components/component/commandPrompt";
import React from "react";
import { useTheme } from "@/components/context/themeContext";
import Footer from "@/components/component/footer/footer";
const Home = () => {
  const { color } = useTheme();
  const handleButtonClick = () => {
    window.location.href = "./work";
  };

  const openPdf = () => {
    window.open("/CV_CERDERA_Thomas_2024.pdf");
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isOnMainPage={true} />
      <main className="flex flex-col xl:flex-row gap-8 items-center justify-center flex-grow py-12 xl:mt-16 px-4">
        <section
          className={`w-full max-w-4xl bg-${color}-50 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-24 xl:mt-0`}
        >
          <div className="flex flex-col gap-8 text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Bonjour, je m'appelle Thomas{" "}
              <Typical
                steps={[
                  "C",
                  500,
                  "CE",
                  500,
                  "CER",
                  500,
                  "CERD",
                  500,
                  "CERDE",
                  500,
                  "CERDER",
                  500,
                  "CERDERA",
                ]}
                loop={1}
                wrapper="span"
              />
            </h1>
            <p className="text-lg text-gray-700 md:text-xl lg:text-2xl">
              Je suis un développeur Full-Stack, créatif avec le sens du détail, actuellement chez INFOTEL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button
                variant="outline"
                className={`w-full sm:w-auto text-white rounded-3xl flex items-center justify-center p-6 text-lg sm:text-2xl border border-azure-radiance-950 hover:bg-${color}-200 hover:text-${color}-950 button-hover`}
                onClick={handleButtonClick}
              >
                Mon travail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                className={`w-full sm:w-auto bg-${color}-950 text-${color}-50 rounded-3xl flex items-center justify-center p-6 text-lg sm:text-2xl border-0 hover:bg-${color}-950 hover:text-${color}-50 `} onClick={openPdf}
              >
                Télécharger mon CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <section
          className={`w-full max-w-2xl bg-${color}-50 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-12 xl:mt-0`}
        >
          <CommandPrompt />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
