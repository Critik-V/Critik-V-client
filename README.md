![Critik-V logo](./docs/assets/BANNER_README.png)

<h2 align="center">
Critik-V Client Side (Open-source project)
</h2>

[![GitHub stars](https://img.shields.io/github/stars/Critik-V/Critik-V.svg?style=social&label=Star)](https://github.com/Critik-V/Critik-V)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/Critik-V.svg?style=social)](https://github.com/sponsors/Critik-V)
[![GitHub contributors](https://img.shields.io/github/contributors/Critik-V/Critik-V.svg)](https://github.com/Critik-V/Critik-V/graphs/contributors)
![GitHub forks](https://img.shields.io/github/forks/Critik-V/Critik-V.svg)
![GitHub issues](https://img.shields.io/github/issues/Critik-V/Critik-V.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/Critik-V/Critik-V.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Critik-V/Critik-V.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr-closed/Critik-V/Critik-V.svg)
![GitHub license](https://img.shields.io/github/license/Critik-V/Critik-V.svg)

<p align="center">
    <a href="https://discord.gg/Bw9Aa7zC">Discord Community</a> | <a href="./docs/CONTRIBUTING.md">Contribution Guide</a>
</p>

## About this project

**ENGLISH:** Critik-V is a new platform for improving your resume and increasing your chances of finding the perfect job. What makes it special is that the reviews come from other members of the platform, all of whom remain anonymous.
Recruitment professionals, HR experts and other members of the community provide objective reviews while maintaining confidentiality. This guarantees fair, unbiased assessments. You will receive personalised advice on how to improve the presentation of your skills and experience.
This collaborative approach allows you to improve your resume confidentially, while benefiting from different perspectives. As well as feedback on your resume, the platform offers advice on job market trends, suggestions for adapting your resume to specific industries and tips on how to succeed at interviews. Opt for our resume review service based on anonymity and diversity of opinion to maximise your career opportunities.

**FRENCH:** Critik-V est une nouvelle plateforme pour améliorer votre CV et augmenter vos chances de trouver le job idéal. Ce qui la rend spéciale, c'est que les critiques proviennent d'autres membres de la plateforme, tous restant anonymes.
Des professionnels du recrutement, des experts en ressources humaines et d'autres membres de la communauté fournissent des critiques objectives tout en préservant la confidentialité. Cela garantit des évaluations justes, sans partialité. Vous recevrez des conseils personnalisés pour améliorer la présentation de vos compétences et de votre expérience.
Cette approche collaborative vous permet d'améliorer votre CV de manière confidentielle, tout en bénéficiant de différentes perspectives. En plus des retours sur votre CV, la plateforme propose des conseils sur les tendances du marché de l'emploi, des suggestions pour adapter votre CV à des industries spécifiques et des astuces pour réussir les entretiens. Optez pour notre service d'évaluation de CV basé sur l'anonymat et la diversité des avis pour maximiser vos opportunités professionnelles.

## Contributing

- To contribute, please see our <a href="./docs/CONTRIBUTING.md">contribution guide</a>

## Server side tech Stack

|                                                                                                                                                                 |                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="TypeScript" width="20"/> | [TypeScript](https://www.typescriptlang.org/) - Language                               |
| <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="20"/>                                                                | [React Js](https://reactjs.org/) - Language (https://tailwindcss.com/) - CSS Framework |
| <img src="https://cdn.freebiesupply.com/logos/large/2x/sass-1-logo-png-transparent.png" width="20"/>                                                            | [Sass/Scss](https://sass-lang.com/) - CSS Preprocessor                                 |
| <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" width="20"/>                                                                                 | [Node Js](https://nodejs.org/en/) - Development Environment                            |
| <img src="https://pnpm.io/img/pnpm.svg" width="20"/>                                                                                                            | [pnpm](https://pnpm.io/) - Dependency Manager                                          |
| <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" width="20"/>                                                | [Docker](https://www.docker.com/) - Containerization                                   |
| <img src="https://user-images.githubusercontent.com/11247099/145112184-a9ff6727-661c-439d-9ada-963124a281f7.png" width="20"/>                                   | [Vitest](https://vitest.dev/) - Test Tool                                              |

## Local Development

### Prerequisites

to run this project locally, you need to have the following tools installed on your machine:

- [Git](https://git-scm.com/) - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.
- [Node.js](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Docker](https://www.docker.com/) - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
- [Postgresql](https://www.postgresql.org/) - PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/Critik-V/Critik-V-client.git
   ```

2. Install pnpm

   ```sh
   npm install -g pnpm
   ```

3. Install dependencies

   ```sh
   pnpm install
   ```

4. Create a `.env` file in the root/server of the project and add the following variables

5. Start the server

   ```sh
   pnpm start
   ```

The server should be running on `http://localhost:5173`

(You can find the values of these variables in the `.env.example` file)

### License

Distributed under the GPL-3.0 License. See [LICENSE](/docs/LICENSE) for more information.
