document.addEventListener('DOMContentLoaded', () => {

    getPolish()
    
    
 })
 
 
 function getPolish(){
     let main = document.getElementById('main ul')
     let brandList = document.getElementById('brand-list')
 
   fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`)
   .then(resp => resp.json())
   .then(polishes => {
       polishes.map(polish => {
          
            const li = document.createElement("li")
            const a = document.createElement("a")
            a.dataset.id= polish.id
            a.href="#"
            a.textContent = polish.brand
            a.addEventListener('click', (e) => bottleCard(e,polish))
            li.append(a)
            brandList.append(li)
 
       })
 
   })
 
 }
   
 
 function bottleCard(e,polish){
     e.preventDefault()
     
     let card = document.getElementById('info-card')
     card.innerHTML=""
     
        card.innerHTML += `
     <div class="card">
     <h2>${polish.name}</h2>
     <img src="${polish.image_link}" class="bottle-image" />
     <p>${polish.price}</p>
     <p>${polish.description}</p>
     
   </div>
  `
     }

     //function to toggle between dark and light modes
     function toggleMode(){
      
      let element = document.body;

      element.classList.toggle("light-mode");   

      
     
    };

   
    
    // Get the buttons in the DOM
    const toggleButtons = document.querySelectorAll(".color-mode__btn");
    
    //event listeners
    toggleButtons.forEach(btn => {
        btn.addEventListener("click", toggleMode);
    });

    