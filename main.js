const BtnAdd = document.querySelector(".btn-add");
const WatchContainer = document.getElementById("watch");

if(BtnAdd){
BtnAdd.addEventListener("click", AddNew);
}

function AddNew() {
        const newDiv = document.createElement("div");
        

        console.log("add");

        newDiv.classList.add("watch");
       
            WatchContainer.appendChild(newDiv);
       
}
