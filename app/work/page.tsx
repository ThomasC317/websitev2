"use client";
// app/experiences/page.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/component/navbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/component/footer/footer";
import Trema from "@/components/component/trema";
import ParticleBackground from "@/components/component/particleBackground";
import { useTheme } from "@/components/context/themeContext";
import CustomSelect from "@/components/component/customSelect";

const Experiences = () => {
  const handleButtonClick = () => {
    window.location.href = "./about";
  };

  const projects = [
    // === Projets Professionnels ===
    {
      title: "InPact",
      company: "Infotel Blagnac - LABO",
      year: "Avril 2025 - Maintenant",
      description: `Refonte complète de l'application de tickets en Angular 20 en tant que Lead Front & ajout de fonctionnalités :<br/><br/>
  • Refonte de l’architecture et choix des composants front.<br/>
  • Design et intégration de nouvelles maquettes Figma.<br/>
  • Développement et optimisation de la plateforme (tickets, téléchargements, licences, utilisateurs, clients).<br/>
  • Point de contact principal côté front : démos, suivi et résolution de bugs.<br/>
  • Encadrement et accompagnement des développeurs et stagiaires.<br/>
  • Garant de la qualité, sécurité et maintenabilité du code.`,
      tags: ["Angular","Gitlab","Jira","Vitest","SonarCloud","Figma"],
    },
    {
      title: "MaJ License Manager",
      company: "Infotel Blagnac - LABO",
      year: "Fév - Avril 2025",
      description: `Mise à jour de l’application de gestion de tickets et licences :<br/><br/>
  • Analyse et correction des incompatibilités pour migration Angular.<br/>
  • Tests fonctionnels et mise à jour des librairies.<br/>
  • Défition de la liste des tâches à accomplir pour la réalisation de la migration.`,
      tags: ["Angular", "Gitlab", "Jira", "Vitest"],
    },
    {
      title: "Analyse d'impact",
      company: "Infotel Blagnac - BPCE",
      year: "Oct 2024 - Fév 2025",
      description: `Analyse d’impact d’un changement de code sur le projet BPCE :<br/><br/>
  • Identification des dépendances et risques.<br/>
  • Communication avec l’équipe et suivi de l’avancement.`,
      tags: ["Gitlab", "Bitbucket"],
    },
    {
      title: "Tales of Arcanum",
      company: "Projet Personnel",
      year: "Août - Dec 2024",
      description: `Création d'un Clicker game RPG fantasy :<br/><br/>
  • Listage des tâches et suivi via Trello.<br/>
  • Développement du lore et de l’architecture web & back.<br/>
  • Développement du jeu et intégration des fonctionnalités prévues.<br/>
  • Suivi et tests réguliers pour améliorer l’expérience utilisateur.`,
      tags: ["React", "TypeScript", "Framer-motion", "TailwindCS", "Emailjs", "NodeJS", "Express"],
    },
    {
      title: "Site Web V2",
      company: "Projet Personnel",
      year: "Juin 2024",
      description: `Création d'un portfolio personnel :<br/><br/>
  • Recherche d'inspiration et composants React pour un design original.<br/>
  • Développement du site et responsivité.<br/>
  • Création de composants customisés (CommandPrompt, formulaire de contact).`,
      tags: ["React", "TypeScript", "Framer-motion", "TailwindCS", "Emailjs"],
    },
    {
      title: "R&D IA",
      company: "Infotel Blagnac",
      year: "Mai - Oct 2024",
      description: `Mise en place de l'IA dans les projets de l'entreprise :<br/><br/>
  • Analyse des modèles et possibilités d'intégration.<br/>
  • Veille technologique et analyse des besoins.<br/>
  • Développement d’un MOC chatbot (React/Next.js).<br/>
  • Installation et apprentissage d’un modèle pour tests.`,
      tags: ["React", "Python", "NextJs"],
    },
    {
      title: "MRDB",
      company: "Infotel Blagnac",
      year: "Avril - Mai 2024",
      description: `Évolutions sur le projet MRDB :<br/><br/>
  • Analyse des datasets et besoins client.<br/>
  • Transformation et calcul des nouvelles données.<br/>
  • Communication continue avec le client.`,
      tags: ["Skywise", "JavaScript", "Pyspark"],
    },
    {
      title: "Athenaa",
      company: "Infotel Blagnac",
      year: "Mars - Avril 2024",
      description: `Application back-end calculant les moyennes d’heures et cycles de vol :<br/><br/>
  • Transformation des datasets et calcul des moyennes.<br/>
  • Intégration des données dans des diagrammes front.<br/>
  • Communication avec le client pour ajustement des besoins.`,
      tags: ["Skywise", "JavaScript", "Pyspark"],
    },
    {
      title: "Madness",
      company: "Infotel Blagnac",
      year: "Fév - Mars 2024",
      description: `Analyse d’un outil Contour pour la transformation de données :<br/><br/>
  • Optimisation des transformations de données.<br/>
  • Rédaction de documentation et chiffrage pour le développement back-end.`,
      tags: ["Skywise", "JavaScript", "Pyspark"],
    },
    {
      title: "Airframe Services",
      company: "Infotel Blagnac",
      year: "Déc 2023 - Fév 2024",
      description: `Application Slate pour le suivi des KPIs :<br/><br/>
  • Création et intégration des calculs de KPIs.<br/>
  • Optimisation des requêtes et stockage des données.<br/>
  • Communication avec le client pour évolution des besoins.`,
      tags: ["Skywise", "JavaScript", "Pyspark"],
    },
    {
      title: "ASN/AOG",
      company: "Infotel Blagnac",
      year: "Sept - Déc 2023",
      description: `Mise à niveau d'une application pour le suivi des incidents de flotte :<br/><br/>
  • Analyse des fonctionnalités existantes et développement des nouvelles.<br/>
  • Administration des incidents, abonnements et gestion des rôles.<br/>
  • Développement des fonctionnalités côté front et back.`,
      tags: ["Angular", "C#", "Gitlab", "JIRA", "SQL Server"],
    },
    {
      title: "LP ADV",
      company: "LP Promotion",
      year: "2022 - Mai 2023",
      description: `Refonte de l'outil d'administration des ventes :<br/><br/>
  • Analyse et migration de la base de données.<br/>
  • Développement de fonctionnalités de filtrage et intégration des maquettes Figma.<br/>
  • Refonte d'un microservice de génération et envoi de courriers (AR24).<br/>
  • Optimisation des appels API et tests fonctionnels utilisateurs.`,
      tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"],
    },
    {
      title: "LP WORKPLACE",
      company: "LP Promotion",
      year: "Juin - Déc 2021",
      description: `Création d’un outil interne de recherche et gestion inter-services :<br/><br/>
  • Développement d’une page Glossaire filtrable et d’une barre de recherche pour documents, processus et employés.<br/>
  • Mise en place d’un système de favoris pour un accès rapide aux contenus importants.<br/>
  • Tests fonctionnels et validation avec différents utilisateurs.`,
      tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"],
    },
    {
      title: "LP INSIDE",
      company: "LP Promotion",
      year: "Oct 2020 - Mai 2023",
      description: `Mise en place d'une plateforme interne recensant les projets sous forme de modules :<br/><br/>
  • Mise en place de méthodes agiles (SCRUM) et gestion des projets via Azure AD.<br/>
  • Conteneurisation des microservices (Docker) et pipelines CI/CD.<br/>
  • Process qualité du code (conventions, branch policies, SonarCloud).<br/>
  • Communication avec le service UX/UI et architecture des communications entre microservices et SPA.`,
      tags: ["Blazor", "C#", "Azure AD", "Docker", "SQL Server"],
    },
    {
      title: "Ui Framework",
      company: "LP Promotion",
      year: "Oct 2020 - Mai 2023",
      description: `Développement d'une librairie Blazor de composants réutilisables et customisables :<br/><br/>
  • Analyse des projets legacy pour identifier les composants à développer.<br/>
  • Développement et remplacement des composants sur les projets récents.<br/>
  • Mise en place de généricité et variables CSS pour la réutilisation.<br/>
  • Création d'un site de documentation avec cas d'utilisation et tutoriels.`,
      tags: ["Blazor", "C#", "Azure AD", "SQL Server"],
    },
    {
      title: "Flux Partenaire",
      company: "LP Promotion",
      year: "Oct 2019 - Sept 2020",
      description: `Refonte globale d'un projet de génération de flux XML :<br/><br/>
  • Architecture microservices multicouches.<br/>
  • Conception et développement d'une API REST.<br/>
  • Développement d'une interface d'administration et envoi de flux via FTP/sFTP.<br/>
  • Gestion des erreurs et validation des flux XML.`,
      tags: ["JavaScript", "C#", "SQL Server"],
    }
  ];

  const companyNames = projects.map((project) => project.company);
  const uniqueCompanyNames = [...new Set(companyNames)];
  const companyOptions = uniqueCompanyNames.map((company) => ({
    value: company,
    label: company,
  }));
  companyOptions.unshift({ value: "All", label: "Toutes les entreprises" });
  const date = new Date();

  const [selectedCompany, setSelectedCompany] = useState("All");
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [isSelectMounted, setIsSelectMounted] = useState(false);
  const { color } = useTheme();

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.value);
  };

  const openPdf = () => {
    window.open("/CV_CERDERA_Thomas_2024.pdf");
  };
  const handleToggle = (index: number) => {
    setExpandedIndices((prev) => {
      if (prev.includes(index)) {
        // Remove index from expandedIndices
        return prev.filter((i) => i !== index);
      } else {
        // Add index to expandedIndices
        return [...prev, index];
      }
    });
  };

  useEffect(() => setIsSelectMounted(true), []);

  return (
    <div className={`min-h-screen flex flex-col `}>
      <Navbar isOnMainPage={false} />
      <div className={`flex-grow relative bg-${color}-50`}>
        <ParticleBackground />
        <main className={`w-full  mx-auto px-4 sm:px-8 lg:px-24 py-12 mt-16 relative z-10`}>
            <div className="lg:px-8">
              <div className="text-lg sm:text-2xl">
                Ingénieur développeur Full-stack situé sur Toulouse, France.
                <br />
                <br /> Je suis un développeur full stack passionné travaillant
                actuellement chez Infotel. Mon rôle me permet de me concentrer
                pleinement sur la création de solutions web performantes qui
                répondront à vos besoins.
                <br />
                <br />
                <div className="flex md:flex-row flex-col gap-4 sm:items-center">
                  <Button
                    variant="outline"
                    className={`w-full sm:w-auto bg-${color}-950 text-${color}-50 rounded-3xl flex items-center justify-center p-6 text-lg sm:text-2xl border-0 hover:bg-${color}-950 hover:text-${color}-50`}
                    onClick={handleButtonClick}
                    
                  >
                    Plus d'infos & Contact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
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
                    className={`w-full sm:w-auto text-white rounded-3xl flex items-center justify-center p-6 text-lg sm:text-2xl border border-azure-radiance-950 hover:bg-${color}-200 hover:text-${color}-950 button-hover`}
                    style={{
                      borderWidth: "1px",
                    }} 
                    onClick={openPdf}
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
              <div className="pt-8">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">
                    Technologies
                  </h2>
                </div>
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Frontend:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        React, .NET, Angular.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Backend:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        .NET, Express/Nodejs.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        UI/Styling/Animations:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        shadcn/ui, TailwindCSS, framer-motion, Angular Material.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Databases:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        MySql, SqlServer.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Langages de programmation:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        C#, Typescript.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Versionning:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Git (Gitlab & Github), Gerrit.
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="py-2">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">
                    Compétences métier
                  </h2>
                </div>
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Méthodologies:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Méthodologies Agile (Scrum, Kanban).
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Documentation:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Rédaction de documentation utilisateur, de tests, de
                        light ARD.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Optimisation:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Réduction des temps de récupération des datas, sécurisation du code, optimisation de l’architecture.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Esprit d’analyse:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Analyse des besoins et/ou des problèmes.
                      </td>
                    </tr>
                    <tr>
                      <th className={`th-width py-2 text-sm xl:text-lg text-${color}-800`}>
                        Travail:
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Autonomie, collaboration, gestion du stress, créativité, sens du détail,
                        adaptabilité.
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="pt-4 flex items-center gap-2">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">Projets</h2>
                  {isSelectMounted ? (
                    <CustomSelect
                      handleCompanyChange={handleCompanyChange}
                      companyOptions={companyOptions}
                      ></CustomSelect>
                  ) : null}
                </div>
              </div>
              <div className="container">
                {projects.map((project, index) => {
                  if (
                    project.company !== selectedCompany &&
                    selectedCompany !== "All"
                  ) {
                    return null;
                  }

                  const isExpanded = expandedIndices.includes(index);

                  return (
                    <div
                      key={index}
                      className={`bg-hover-transition hover:bg-${color}-100 px-4 py-2 ${
                        isExpanded ? "border-b" : ""
                      } border-color-lightgray cursor-pointer relative`}
                      onClick={() => handleToggle(index)}
                    >
                      <div className="relative">
                        <div className="block lg:grid lg:grid-cols-5 lg:gap-4 w-full">
                          <div className="block lg:col-span-1 text-xs sm:text-sm lg:text-lg font-medium">
                            {project.title}
                          </div>
                          <div className="block lg:col-span-1 text-xs sm:text-sm lg:text-lg">
                            {project.year}
                          </div>
                          <div className="block lg:col-span-1 text-xs sm:text-sm lg:text-lg">
                            {project.company}
                          </div>
                          <div className="block lg:col-span-2 mt-2 lg:mt-0">
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`bg-${color}-800 px-2 py-1 rounded-lg text-xs sm:text-sm lg:text-md font-medium text-white-50`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`expanded-card ${
                            isExpanded ? "expanded" : "collapsed"
                          }`}
                        >
                          <p
                            className="text-gray-700 text-xs sm:text-md lg:text-lg mt-2"
                            dangerouslySetInnerHTML={{
                              __html: project.description,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
                        style={{ top: "22px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 cursor-pointer ${
                            isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => handleToggle(index)}
                          style={{ transition: "transform 0.3s ease" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="py-4">
                <div className="flex items-baseline">
                  <Trema />
                  <h2 className="text-xl sm:text-2xl mb-4 ml-4">
                    Applications/Outils
                  </h2>
                </div>
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        {" "}
                        <a
                          href="https://code.visualstudio.com/"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          VS Code
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Un des meilleurs éditeurs de code que j'ai pu tester,
                        très customisable.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://github.com/"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          GitHub
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        La feature des pages est assez folle pour hoster des
                        sites facilement, très pratique pour les portfolios
                        notamment.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://www.sonarsource.com/"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          Sonarlint/Cloud
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        L'intégration de SonarCloud dans les pipelines CI/CD est très utile pour assurer la qualité du code et éviter les bugs. J'ai beaucoup appris sur les bonnes manières de developpement grâce aux linters.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://azure.microsoft.com/fr-fr/products/devops"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          Azure DevOps
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        L'ensemble des features est très appréciable. Avoir
                        accès au Kanban, aux repositories, a la création
                        d'artifacts et aux pipelines sur la même plateforme...
                        ça m'a été très utile.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://www.google.com/intl/fr/drive/"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          Google Workspace
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Gratuit & très complet, pas besoin de dire grand chose
                        de plus.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://www.canva.com/"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          Canva
                        </a>
                      </th>
                      <td className="td-width py-2 px-2 text-sm xl:text-lg">
                        Très utile pour créer des schémas, des documents textes
                        en tout genre, ou même des présentations. Je ne suis pas
                        fan de la disparition des applications tierces
                        cependant.
                      </td>
                    </tr>
                    <tr>
                      <th className="th-width py-2 whitespace-nowrap text-sm xl:text-lg">
                        <a
                          href="https://v0.dev/"
                          className={`underline-link text-${color}-800 hover:text-${color}-500`}
                        >
                          V0 Dev
                        </a>
                      </th>
                      <td className="td-width y-2 px-2 text-sm xl:text-lg">
                        Génération par IA d'interfaces simples. Très utile pour
                        générer des composants en React.
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Experiences;
