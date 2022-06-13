//функція клонування блоку з вмістом (Годинником)
const BtnAdd = document.querySelector(".btn-add");
const ClockFill = document.getElementById("watch-container");
let i = 1;

if(BtnAdd){
BtnAdd.addEventListener("click", AddNew);
}

function AddNew() {    
        
        console.log("add");
        ClockFill.onclick = onclick;
        const clone = ClockFill.cloneNode(true);
        i++;
        clone.id = 'watch${i}';
        clone.onclick = onclick;
        ClockFill.parentNode.appendChild(clone);

        ClockFill.classList.add("watch");
       
          
}
