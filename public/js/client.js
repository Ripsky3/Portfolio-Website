const launchButtonTags = document.querySelectorAll(".project-launch-button");
const leftButtons = document.querySelectorAll(".display-left-button");
const rightButtons = document.querySelectorAll(".display-right-button");

const projectContainerOne = document.querySelector(".project-container-one");
const projectContainerTwo = document.querySelector(".project-container-two");
const projectContainerThree = document.querySelector(".project-container-three");


for (let buttons of leftButtons) {
    buttons.addEventListener("click", (e) => {
        //console.log(e.target.parentElement.offsetLeft);
        console.log(e.target.parentElement)
        if (e.target.parentElement.classList.contains("project-container-one")) {
            projectContainerOne.classList.add("translate-left")
            projectContainerThree.classList.remove("translate-right");
            projectContainerThree.classList.remove("translate-left")
            projectContainerTwo.classList.remove("transition");
            projectContainerTwo.classList.add("translate-right");
            setTimeout(() => {
                projectContainerTwo.classList.add("transition");
            }, 1);
        }
        
        if (e.target.parentElement.classList.contains("project-container-three")) {
            projectContainerThree.classList.add("translate-left")
            projectContainerTwo.classList.remove("translate-left");
            projectContainerTwo.classList.remove("translate-right")
            projectContainerOne.classList.remove("transition");
            projectContainerOne.classList.add("translate-right");
            setTimeout(() => {
                projectContainerOne.classList.add("transition");
            }, 1);
        }
        if (e.target.parentElement.classList.contains("project-container-two")) {
            projectContainerTwo.classList.add("translate-left")
            projectContainerOne.classList.remove("translate-left");
            projectContainerOne.classList.remove("translate-right")
            projectContainerThree.classList.remove("transition");
            projectContainerThree.classList.add("translate-right");
            setTimeout(() => {
                projectContainerThree.classList.add("transition");
            }, 1);
        }
    })
}

for (let buttons of rightButtons) {
    buttons.addEventListener("click", (e) => {
        //console.log(e.target.parentElement.offsetLeft);
        if (e.target.parentElement.classList.contains("project-container-one")) {
            projectContainerOne.classList.add("translate-right");
            projectContainerTwo.classList.remove("translate-left");
            projectContainerTwo.classList.remove("translate-right")
            projectContainerThree.classList.remove("transition");
            projectContainerThree.classList.remove("translate-right");
            projectContainerThree.classList.add("translate-left");
            setTimeout(() => {
                projectContainerThree.classList.add("transition");
            }, 1);
        }
        if (e.target.parentElement.classList.contains("project-container-three")) {
            projectContainerThree.classList.add("translate-right")
            projectContainerOne.classList.remove("translate-right");
            projectContainerOne.classList.remove("translate-left")
            projectContainerTwo.classList.remove("transition");
            projectContainerTwo.classList.remove("translate-right");
            projectContainerTwo.classList.add("translate-left");
            setTimeout(() => {
                projectContainerTwo.classList.add("transition");
            }, 1);
        }
        if (e.target.parentElement.classList.contains("project-container-two")) {
            projectContainerTwo.classList.add("translate-right")
            projectContainerThree.classList.remove("translate-right");
            projectContainerThree.classList.remove("translate-left")
            projectContainerOne.classList.remove("transition");
            projectContainerOne.classList.add("translate-left");
            projectContainerOne.classList.remove("translate-right");
            setTimeout(() => {
                projectContainerOne.classList.add("transition");
            }, 1);
        }
    })
}

for (let launchButtonTag of launchButtonTags) {
    launchButtonTag.addEventListener("click", (e) => {
        
        if (e.target.parentElement.parentElement.classList.contains("project-container-one")) {
            document.location.href += "projectManagementApp";
        }
        if (e.target.parentElement.parentElement.classList.contains("project-container-two")) {
            
        }
        if (e.target.parentElement.parentElement.classList.contains("project-container-three")) {
            
        }
   
    })
}