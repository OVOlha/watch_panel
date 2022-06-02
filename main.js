const BtnAdd = document.querySelector(".btn-add");
const WatchContainer = document.getElementById("watch-panel");
let i =1;

if(BtnAdd){
BtnAdd.addEventListener("click", AddNew);
}

function AddNew() {
        //const newDiv = document.createElement("div");
        WatchContainer.onclick = onclick;
         
        const cloneWatch = WatchContainer.cloneNode(true);
        i++;

        cloneWatch.id =  `watch-panel${i}`;
        cloneWatch.onclick = onclick;
        console.log("add");

       // newDiv.classList.add("watch");
       
       // cloneWatch.classList.add("watch");
        WatchContainer.parentNode.appendChild(cloneWatch);
           // WatchContainer.appendChild(newDiv);
       
}
