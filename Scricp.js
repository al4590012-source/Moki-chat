const introScreen = document.getElementById('introScreen');
const roomCanvas = document.getElementById('roomCanvas');
const welcomeBox = document.getElementById('welcomeBox');
const blinkOverlay = document.querySelector('.blink-overlay');
const ctx = roomCanvas.getContext('2d');

// Resize canvas
function resizeCanvas(){
  roomCanvas.width = window.innerWidth;
  roomCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Vẽ cinematic trần nhà
function renderCinematic(){
  const gradient = ctx.createLinearGradient(0,0,0,roomCanvas.height);
  gradient.addColorStop(0,'#ffe4e1');
  gradient.addColorStop(0.5,'#fff0f5');
  gradient.addColorStop(1,'#ffe4e1');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,roomCanvas.width,roomCanvas.height);

  // Random đèn trên trần
  for(let i=0;i<5;i++){
    const x=Math.random()*roomCanvas.width;
    const y=Math.random()*roomCanvas.height/3;
    const r=20+Math.random()*10;
    const grad=ctx.createRadialGradient(x,y,0,x,y,r);
    grad.addColorStop(0,'rgba(255,255,255,0.8)');
    grad.addColorStop(1,'rgba(255,182,193,0)');
    ctx.fillStyle=grad;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill();
  }
}

// Click intro → chuyển cinematic
introScreen.addEventListener('click',()=>{
  // Ẩn intro
  introScreen.style.display='none';

  // Hiển thị canvas + overlay
  roomCanvas.style.display='block';
  blinkOverlay.style.display='block';

  // Render cinematic
  renderCinematic();

  setTimeout(()=>{
    welcomeBox.style.opacity=1; // show bảng chào
    setTimeout(()=>{
      welcomeBox.style.opacity=0;
      blinkOverlay.style.display='none';
      // Chỗ game chính để em làm tiếp
    },2500);
  },500);
});
