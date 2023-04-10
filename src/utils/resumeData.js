import axios from 'axios';
import React, { useEffect, useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloudIcon from '@mui/icons-material/Cloud';

const data_url = 'https://krcx9bt1u8.execute-api.us-east-1.amazonaws.com/default/resify-data';

export const getData = async () => {
    let resp
       await axios
            .get(data_url)
            .then(response => {
                resp = response.data.user;
            })
            .catch(error => console.log('get error', error));
    resume_data = resp;
    return resp
    };

export const resume_data = {
        name : 'Omar Masri',
        title : 'Software Engineer',
        birthday : 'September 22, 2001',
        email : 'omar.m.2010masri@gmail.com',
        address: 'Minneapolis, MN',
        phone: '612 845 4390',
        socials: {
            instagram : 'https://www.instagram.com/omar.masri36/',
            linkedin : 'https://www.linkedin.com/in/omarmasri36/',
            github : 'https://github.com/JustOmar36'
        },
        about: "Hey there! I'm Omar, a software engineer with a passion for building scalable and efficient solutions. I'm currently a student at the University of Minnesota, where I'm studying Computer Science. I've had the wonderful opportunity to learn from and work with the brightest minds during my time at the university. I am happy to announce that I will be graduating as of May 2023 and I'm currently looking for a full-time position as a software engineer.\n\n Though being freshly graduated from college, I have had the wonderful opportunities to work on my software development skills. I've worked with companies such as SPS Commerce in Minneapolis and partaken in many hackathons and competitions.",
        experiences: [
            {
                title: 'Software Engineering Intern',
                years: 'Summer 2021',
                company: 'SPS Commerce',
                location: {
                    country: 'United States',
                    city: 'Minneapolis'
                },
                description: 'Worked as a member of the Corporate Systems team with the general responsibility of maintaing and modernizing legacy code.'
            }
        ],
        hackathons: [
            {
                title: 'Mentor Matcher',
                event: 'Tech Jam 2021',
                description: 'Worked alongside a team for an internal company hackathon. We created a web application that allows employees to communicate company wide regarding finding mentors. The goal was to provide a platform for employees to find mentors and for mentors to find mentees. The application was built using React, Node.js. My duties included constructing API calls and providing Front-End templates.',
            },
            {
                title: 'Foodie',
                event: 'SPS Commerce Hackathon 2019',
                description: 'Worked alongside classmates to create a web application that allows users to find recipes based on ingredients they have in their fridge. The application was built using Python and Python Front-End libraries. My duties included constructing the desiging the UI and creating a look-up functionality.',
            },
            {
                title: '2048',
                event: 'Side Project',
                description: 'I have an obsession with the game 2048! I decided to create my own version to hone my skills in HTML, CSS and Javascript. The game is fully playable from my GitHub!',
            },
        ],
        education: [
            {
                title: 'Pioneer\'s Baccalaureate School',
                years: '2015-2019',
                description: 'Graduated with a 4.0 and full tuiton scholarship to the University of Minnesota.'
            },
            {
                title: 'University of Minnesota',
                years: '2019-2023',
                description: 'Computer Science student in the college of Liberal Arts. GPA of 3.208 and an expected graduation of May 2023.'
            },
        ],
        services: [
            {
                title: 'Web Development',
                description: 'Website design and implementation',
                icon: <LanguageIcon/>
            },
            {
                title: 'Artificial Intelligence',
                description: 'Design custom ML and AI solutions',
                icon: <LightbulbIcon/>
            },
            {
                title: 'Cloud Solutions',
                description: 'Engineering built to scale seemlesly',
                icon: <CloudIcon/>
            }
        ],
        skills: [
            {
                title: 'Front-end',
                description: ['ReactJS', 'Javascript', 'CSS', 'Bootstrap']
            },
            {
                title: 'Databases',
                description: ['SQL', 'Liquibase', 'MySQL', 'Design']
            },
            {
                title: 'Backend',
                description: ['Python', 'Java', 'C/C++', 'NodeJS']
            }
        ],
        resume: 'https://docs.google.com/document/d/11iqV_b8o23KC0r5RfGVptIFGVQ3BO-hguCslUtPner8/edit?usp=sharing',
    }
