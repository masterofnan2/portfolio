import React from "react";
import Section from "../../partials/Section/Section";
import SectionTitle from "../../partials/SectionTitle/SectionTitle";
import linkId from "../../core/helpers/linkId";
import { technologies } from "../../core/config/links/pages";
import TechnologiesItems from "../../partials/TechnologiesItems/TechnologiesItems";

// frontend
import html from "./options/logos/frontend/html.png";
import css from "./options/logos/frontend/css.png";
import js from "./options/logos/frontend/js.png";
import redux from "./options/logos/frontend/redux.png";
import axios from "./options/logos/frontend/axios.png";
import bootstrap from "./options/logos/frontend/bootstrap.png";
import framerMotion from "./options/logos/frontend/framerMotion.png";
import react from "./options/logos/frontend/react.png";
import sass from "./options/logos/frontend/sass.png";
import ts from "./options/logos/frontend/ts.png";

//backend
import php from "./options/logos/backend/php.png";
import laravel from "./options/logos/backend/laravel.png";
import mysql from "./options/logos/backend/mysql.png";
import ratchetWs from "./options/logos/backend/ratchetWs.png";

// server
import docker from "./options/logos/server/docker.png";
import git from "./options/logos/server/git.png";
import github from "./options/logos/server/github.png";
import ssh from "./options/logos/server/ssh.png";
import ubuntu from "./options/logos/server/ubuntu.png";

const frontTechnologies = [
    {
        name: 'html',
        logo: html,
    },
    {
        name: 'css',
        logo: css,
    },
    {
        name: 'javascript',
        logo: js,
    },
    {
        name: 'scss',
        logo: sass,
    },
    {
        name: 'typescript',
        logo: ts,
    },
    {
        name: 'react',
        logo: react,
    },
    {
        name: 'bootstrap',
        logo: bootstrap,
    },
    {
        name: 'redux',
        logo: redux,
    },
    {
        name: 'framer-motion',
        logo: framerMotion,
    },
    {
        name: 'axios',
        logo: axios,
    },
]

const backTechnologies = [
    {
        name: 'php',
        logo: php,
    },
    {
        name: 'laravel',
        logo: laravel,
    },
    {
        name: 'mysql',
        logo: mysql,
    },
    {
        name: 'ratchet websocket',
        logo: ratchetWs,
    }
]

const serverTechnologies = [
    {
        name: 'docker',
        logo: docker,
    },
    {
        name: 'git',
        logo: git,
    },
    {
        name: 'github',
        logo: github,
    },
    {
        name: 'ssh',
        logo: ssh,
    },
    {
        name: 'ubuntu',
        logo: ubuntu,
    },
]

const Technologies = React.memo(() => {
    return <>
        <Section id={linkId(technologies)} className="col-12" selfProps={{ className: "technologies-container-1" }}>
            <SectionTitle variant="dark">Technologies</SectionTitle>
            <h3 className="mb-5 mx-5 mt-2 text-dark">Frontend</h3>
            <TechnologiesItems technologies={frontTechnologies} />
        </Section>
        <Section className="col-12" id={linkId(technologies) + "2"} selfProps={{ className: "technologies-container-2" }}>
            <SectionTitle>Technologies</SectionTitle>
            <h3 className="mb-5 mx-5 mt-2 text-dark">Backend</h3>
            <TechnologiesItems technologies={backTechnologies} />
        </Section>
        <Section id={linkId(technologies) + "3"} className="col-12" selfProps={{ className: "technologies-container-3" }}>
            <SectionTitle variant="dark">Technologies</SectionTitle>
            <h3 className="mb-5 mx-5 mt-2">Server and Others</h3>
            <TechnologiesItems technologies={serverTechnologies} />
        </Section>
    </>
});

export default Technologies;