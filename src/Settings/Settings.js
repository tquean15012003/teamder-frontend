export const DOMAIN = "http://localhost:8000";

export const USERNAME = "username"

export const SUCCESSFULLY_CREATED = 201

export const TOKEN = "accessToken"

const seed = Math.floor(Math.random() * (200 - 1 + 1) + 1)

const exception = [86, 97, 105, 138, 148, 150]

export const imageSrc = `https://unsplash.it/300/300?image=${exception.includes(seed) ? 1000 : seed}`

export let images = []

const getImage = () => {
    let i = 0
    while (i !== 100) {
        const seed = Math.floor(Math.random() * (200 - 1 + 1) + 1)
        if (!exception.includes(seed)) {
            images.push(`https://unsplash.it/300/300?image=${seed}`)
            i++
        }
    }
}

getImage()

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
