export const DOMAIN = "http://localhost:8000";

export const SUCCESSFULLY_CREATED = 201

export const TOKEN = "accessToken"

let skills = [
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "R",
    "Javascript",
    "ReactJS",
    "Vue",
    "Angular",
    "Typescript",
    "NestJS",
    "ExpressJS",
    "Flask",
    "Django",
    "Golang",
    "Rust",
    "NLP",
    "Computer Vision",
    "Machine Learning",
    "Redux",
    "DevOps",
    "Security",
    "Team player",
    "NextJS",
    "Agile",
    "Waterfall",
    ".Net Core",
    "PostgreSQL",
    "MySQL",
    "HTML",
    "CSS",
    "MongoDB",
    "GraphQL"
]

export const skillList = skills.filter((item, pos) => {
    return skills.indexOf(item) === pos;
})
