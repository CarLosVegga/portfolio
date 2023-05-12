const projectRegistry = [
    {
        title: "Code4U", 
        company: "Tec de Monterrey",
        img: "Code4U.png", 
        technologies: ["React", "Redux", "CSS", "Typescript", "Postgres"],
        startDate: "February 2023",
        endDate: "Current date",
        description: "Platform for Tecnológico de Monterrey to enhance the learning experience of Python3 in freshman students. Provides an environment for students to receive feedback on assignments categorized by topic/level, as well as a space for teachers to track their progress and find opportunity areas in their classes. Designed with scalability to host other courses as well."
    },
    {
        title: "AlertaCan", 
        company: "Tec de Monterrey, Kairen",
        img: "AlertaCan.png", 
        technologies: ["Swift", "Firebase", "GitHub", "Figma"],
        startDate: "August 2022",
        endDate: "November 2022",
        description: "Mobile application developed for Kairen AC, a NGO that looks after animal rights. This platform allowed owners to post information related to their lost pets, while inspiring citizens to post information of street animals. With their help feeding our database, and a matching algorithm, we used the physical characteristics to show users possible matches of their lost pets, and increase the possibilities of a reencounter"
    },
    {
        title: "Around Us", 
        company: "Meta Platforms, Inc.",
        img: "AroundUs.png", 
        technologies: ["React", "Node", "Express", "SQL", "Javascript", "Chakra UI"],
        startDate: "June 2022",
        endDate: "August 2022",
        description: "React-based platform where consumers and local restaurants are connected to promote a fairer and competitive market. Main features include filtering and matching algorithm to make recommendations for consumers according to preferences, get statistics on reviews, sign up as a new restaurant or claim an existing business from Google Places."
    },
    {
        title: "Naatik page", 
        company: "Tec de Monterrey, Naatik",
        img: "naatik.png", 
        technologies: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
        startDate: "February 2022",
        endDate: "May 2022",
        description: "Landing page proposal for a Naatik.ai, a ML company based in Cuernavaca, Mexico. Created by a team of 5. The application uses vanilla HTML, CSS and JS for the front-end, and for the back-end PHP and MySQL. Some features include contacting the company, seeing their projects and a CRUD backend for their main roles"
    },
    {
        title: "Syntax Highlighter", 
        company: "Tec de Monterrey",
        img: "syntax.gif", 
        technologies: ["Elixir", "Erlang", "HTML", "CSS"],
        startDate: "April 2022",
        endDate: "June 2022",
        description: "I developed an application that analyzes C++ source code files using regular expressions to determine lexical categories and convert them into HTML & CSS for the result. I used Erlang to create regular expressions for the different lexical categories and Elixir to add concurrency to improve performance on a test of 200 files by reducing waiting time by 80%."
    },
    {
        title: "Atenea",
        company: "TecBytes",
        img: "atenea.jpeg",
        technologies: ["Python3", "Flask", "Firebase", "Figma"],
        startDate: "August 2020",
        endDate: "December 2020",
        description: "I implemented a REST-API using Flask for a social project that addresses harassment against women. The API encrypts/decrypts sensitive data using an AES block cipher in CBC operation mode and finally uploads it to our database hosted in Firebase. "
    },
];
const imgPath = "./img/"

const projectsElement = document.getElementById('projects');


function flip() {
    cardElements.classList.toggle("flipCard")
}

function initializeProjectCards(projects) {
    projectsElement.innerHTML = "";
    projects.forEach(project => {addProjectCard(project)});
    const cardElements = Array.from(document.getElementsByClassName('innerCard'));
    cardElements.forEach((card) => {
        console.log("adding clickers")
        card.addEventListener('click', () => {
            card.classList.toggle("flipCard")
            console.log("fliped")
        })
    })
}

function addProjectCard(project){
    projectsElement.innerHTML += 
    `<div class="projectCard">
        <div class="innerCard">
            <div class="frontCard">     
                <span class="projectDates">
                    ${project.startDate} - ${project.endDate}
                </span>
                <img src="${imgPath + project.img }" alt="${'Photo for ' + project.title}"></img>
                <span class="projectTitle">
                    ${project.title}
                </span>
                <hr>
                <span class="projectSubtitle">
                    Associates
                </span>
                <span class="projectAssociate">
                    ${project.company}
                </span>
                <span class="projectSubtitle">
                    Technologies
                </span>
                <div class="projectTech"> 
                    ${(project.technologies).map((tech) => 
                        (
                        `<span class="tech">${tech}</span>`
                        )
                    ).join('')}
                </div>
            </div>
            <div class="backCard">
                <span class="projectDates">
                    ${project.startDate} - ${project.endDate}
                </span>
                <img src="${imgPath + project.img }" alt="${'Photo for ' + project.title}"></img>
                <span class="projectTitle">
                    ${project.title}
                </span>
                <hr>
                <span class="projectDescription">
                    ${project.description}
                </span>
            </div> 
        </div>
    </div>`;
}

window.onload = function () {
    initializeProjectCards(projectRegistry);
    // console.log(projectRegistry)
    // addEventListeners(loadMoreMoviesElement, searchFormElement, closeSearchButtonElement);
}



