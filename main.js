//функція клонування блоку з вмістом (Годинником)
/*const BtnAdd = document.querySelector(".btn-add");
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
*/

function changeLanguage(language) {
        var element = document.getElementById("url");
        element.value = language;
        element.innerHTML = language;
      }
      
      function showDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
      