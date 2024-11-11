let buttom = document.getElementById('btn');
let tagH4 = document.getElementById("tag");
let tagH1 = document.getElementById("title");
let tagH5 = document.getElementById("message");
let bnImg = document.getElementById("banner-image");


//  for the image 
let pageStatus = "original";


buttom.addEventListener("click", function(){

  if(pageStatus == "original"){

  let newH1 = "ACCESS YOUR OFFERS WITH THE GGA APP";
  let newH5 = "Check your Scène+ points balance and activate your personalized offers at any time using the app.";
  
  tagH4.style.color = "yellow";
  tagH1.innerText = newH1;
  tagH1.style.fontSize = "38px";
  tagH5.innerText = newH5;
  bnImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

  pageStatus = "changed";

} else {

  let changedH1 = "GET EVEN MORE POINTS";
  let changedH4="PERSONALIZED OFFERS TO SUIT YOUR TASTE";
  let changedH5 = "At participating grocery stores when shopping with a Scotiabank debit or credit card.";
  

  tagH4.style.color = changedH4;
  tagH4.style.color = "white";
  tagH1.innerText = changedH1;
  tagH1.style.fontSize = "45px";
  tagH5.innerText = changedH5;
  
  bnImg.style.backgroundImage = "url('https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  pageStatus = "original";

}
})