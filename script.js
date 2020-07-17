// TODO: add code here
window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    }).then(function(jsonArray){
        console.log("before sort:", jsonArray);
        jsonArray.sort((a, b) => {
            console.log(a.hoursInSpace);
            console.log(b.hoursInSpace);
            return (a.hoursInSpace - b.hoursInSpace);
        })
        console.log("after sort:", jsonArray);
        const container = document.getElementById("container");
        let astronauts="";
        for (astronaut of jsonArray){
            astronauts +=
        `
        <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                 <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <liclass='activeText'> active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                 </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
        </div>"
        `
        }
        container.innerHTML=astronauts
    })
})