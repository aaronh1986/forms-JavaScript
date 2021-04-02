const website = document.getElementById('web').setAttribute('href', "https://www.toolband.com/news");

const websiteTool = "https://www.toolband.com/news"

document.getElementById('tool').innerHTML = `
                                             <h1>TOOL are a decent band</h1>
                                             <a target="_blank" href=${websiteTool}>The official TOOL band page</a>`;


 let h5 = document.querySelector('h5');
 
h5.addEventListener('mouseover', () => {
    h5.style.color = "green";
})
h5.addEventListener('mouseout', () => {
    h5.style.color = "black";
}) 


h5.addEventListener('click', function() {
    h5.style.fontSize = "4rem"
})


   

