import { createPrismaClient } from "../src/lib/prisma";
import { generateUUID, VLADIMIR_CONTRACTOR_ID } from "../src/lib/utils";

const prisma = createPrismaClient();



const contractorAttrs = {
  name: "Vladimir Gordeev",
  description: "Backend Engineer",
  skills: ["python", "erlang", "postgresql", "typescript", "graphql"],
  githubUrl: "https://github.com/vladimir-vg",
  linkedinUrl: "https://www.linkedin.com/in/vladimir-g-b573a442/",
};



const experiencesAttrs = [
  {
    key: 'innopolis_lab_assistant',
    company: "Innpolis Univerity",
    position: "Lab Assistant",
    description: `Lab Assistant for Distributed and Networking Programming course. I helped out with teaching at my university for one semester. I was preparing assignments (e.g. description of Chord or Raft protocols and test cases for them). Working through lab sessions, checking students' homework. Assisting in midterm and final exams organization.`,
    from: new Date('2022-08-01'),
    to: new Date('2023-01-01'),
  },
  {
    key: 'codementor',
    company: "Codementor",
    position: "Mentor",
    description: `Was helping less experienced developers to debug their React and Ruby on Rails applications over Zoom. Tutoring to students topics like Lambda Calculus, Finite State Automata, Logic Programming, Functional Programming and Theoretical Computer Science in general. Teaching how to program in Erlang, Prolog, Scheme and Haskell programming languages.`,
    from: new Date('2021-04-01'),
    to: new Date('2023-04-01'),
  },
  {
    key: 'flocktory_clojure_developer',
    company: "Flocktory",
    position: "Clojure Developer",
    description: `Supported various services that process data for analytics team. Worked with column-based Vertica storage, maintained data processing. Supported legacy Clojure and Python code.`,
    from: new Date('2018-04-01'),
    to: new Date('2018-07-01'),
  },
  {
    key: 'space307_dataviz',
    company: "Space307",
    position: "Frontend DataViz Developer",
    description: `Maintained interactive financial charts. Worked with d3.js, React.js and SVG in browser.`,
    from: new Date('2017-12-01'),
    to: new Date('2018-01-01'),
  },
  {
    key: 'erlyvideo_erlang_developer',
    company: "Erlyvideo (Flussonic)",
    position: "Erlang Developer",
    description: `Worked on Fussonic Media Server written in Erlang/OTP. Worked on UDP packets emitter for MPEG-TS video streams. Implemented session accounting feature that smoothly handled differences between video protocols. Implemented a video archive replication procedure between videostreaming server nodes. Designed and developed admin panel for video streaming server in JavaScript using React. Optimized it for fast update of displayed information.`,
    from: new Date('2015-01-01'),
    to: new Date('2017-04-01'),
  },
  {
    key: 'clickavia_ror_developer',
    company: "Clickavia",
    position: "Ruby on Rails Developer",
    description: `Maintained backend for charter flights ticket service. Worked with legacy code, complicated models with long history.`,
    from: new Date('2014-05-01'),
    to: new Date('2014-11-01'),
  },
  {
    key: 'balticit_developer',
    company: "BalticIT",
    position: "Web Developer",
    description: `Developed backend code for different web projects ranging from promo sites to online shops. Mostly worked with Ruby on Rails and JavaScript, partly with PHP.`,
    from: new Date('2011-12-01'),
    to: new Date('2013-04-01'),
  },
];



const projectsAttrs = [
  {
    key: 'grasp_pl',
    name: "Grasp Programming Language",
    description: `An ongoing pet project: a declarative programming language (Datalog dialect) for distributed communication and automation.`,
    url: "https://github.com/vladimir-vg/grasp",
    from: new Date('2025-01-01'),
  },
  {
    key: 'generic_tree_editor',
    name: "Generic Tree Editor",
    description: `A web-based structure-based source code editor. This tool could be useful for experimental programming languages.`,
    url: "https://www.youtube.com/watch?v=KOHNUtw8h5o",
    from: new Date('2019-10-01'),
    to: new Date('2020-09-01'),
  },
  {
    key: 'batiscaph',
    name: "Batiscaph",
    description: `Batiscaph. An experimental tool that visualizes execution trace for Erlang/OTP program. Interactively displays execution of several actors on single timeline.`,
    url: "https://github.com/vladimir-vg/batiscaph",
    from: new Date('2017-04-01'),
    to: new Date('2018-11-01'),
  },
];



async function main() {
  const contractorId = VLADIMIR_CONTRACTOR_ID;
  await prisma.contractor.upsert({
    where: { id: contractorId },
    create: { ...contractorAttrs, id: contractorId },
    update: { ...contractorAttrs },
  });

  const promises = [];

  for (const attrs of experiencesAttrs) {
    const { key, ...rest } = attrs;
    const id = generateUUID(`contractorExperience:${key}`);
    promises.push(prisma.contractorExperience.upsert({
      where: { id },
      create: { ...rest, id, contractorId },
      update: { ...rest, contractorId },
    }))
  }

  for (const attrs of projectsAttrs) {
    const { key, ...rest } = attrs;
    const id = generateUUID(`contractorProject:${key}`);
    promises.push(prisma.contractorProject.upsert({
      where: { id },
      create: { ...rest, id, contractorId },
      update: { ...rest, contractorId },
    }))
  }

  await Promise.all(promises);
}



main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
