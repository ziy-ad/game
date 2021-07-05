const startBtn = document.querySelector(".on");
startBtn.addEventListener("click", () => 
{
document.querySelector(".off-line").style.display = "none";
  
const nintendoLogo = document.querySelector(".animation");
  document.querySelector(".battery").className = "battery-on";
  nintendoLogo.style.display = "block";
  
const stopBtn = document.querySelector(".off");
  stopBtn.addEventListener("click", () => {
    nintendoLogo.style.display = "none";
    document.querySelector(".battery-on").className = "battery";
    document.querySelector(".off-line").style.display = "block";
  });
});
