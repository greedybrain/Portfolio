const buttonWrapper = document.createElement('div')
buttonWrapper.classList.add('button-wrapper')
const aboutMeBtn = document.createElement('button')
aboutMeBtn.classList.add('choice-btn', 'btn-about', 'hide-this')
aboutMeBtn.textContent = "Learn About Me"
const projectsBtn = document.createElement('button')
projectsBtn.classList.add('choice-btn', 'btn-projects', 'hide-this')
projectsBtn.textContent = "View My Projects"
const contactBtn = document.createElement('button')
contactBtn.classList.add('choice-btn', 'btn-contact', 'hide-this')
contactBtn.textContent = "Contact Me"
buttonWrapper.append(aboutMeBtn, projectsBtn, contactBtn)

function handleButtonRender() {
    setTimeout(() => {
        messageCont.append(buttonWrapper)
    }, 7000);
    buttonAnimation()
}

function buttonAnimation() {
    setAnimationTime(aboutMeBtn, 'animate__zoomIn', 7000)
    setAnimationTime(projectsBtn, 'animate__zoomIn', 7100)
    setAnimationTime(contactBtn, 'animate__zoomIn', 7200)
}

function setAnimationTime(element, effect, time) {
    setTimeout(() => {
        element.classList.add('animate__animated', effect, 'animate__faster', 'show-this')

    }, time);
}

function buttonHover() {
    setTimeout(() => {
        const buttons = document.querySelectorAll('.choice-btn')
        Array.from(buttons).forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.classList.remove('animate__zoomIn', 'animate__faster')
                button.classList.add('animate__pulse', 'animate__infinite')
            })
            button.addEventListener('mouseleave', () => {
                button.classList.remove('animate__pulse', 'animate__infinite')
            })
        })
    }, 7500);
}

function handleAboutClick() {
    aboutMeBtn.addEventListener('click', () => {
        handleMessageCreation("Ok, sure!")
        setTimeout(() => {
            let message = "I am from Pennsylvania and I have a strong passion for the Healthcare world. I got into Software Engineering because there is a strong need for developers in the Healthcare profession. I believe the two worlds need to collide and I would like to be on the frontlines of future endeavors linking them."
            handleMessageCreation(message)
            setTimeout(() => {
                handleButtonRender()
            }, 500);
        }, 3000);
    })
}

function handleProjectsClick() {
    projectsBtn.addEventListener('click', () => {
        handleMessageCreation("Projects it is!")
        setTimeout(() => {
            let message = "So far, I have a total of 5 projects. I've put a lot of work into them and I hope you'll like them!"
            handleMessageCreation(message)
            setTimeout(() => {
                handleButtonRender()
            }, 500);
        }, 3000);
    })
}