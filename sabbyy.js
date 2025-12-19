// Language selection
const langOverlay = document.getElementById('langSelectOverlay');
const langBtns = document.querySelectorAll('.langBtn');
let isKorean = false;

langBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        langOverlay.style.display = 'none';
        isKorean = btn.dataset.lang === 'kr';
        updateLanguage();
        preIntroStart();
    });
});

function updateLanguage() {
    // Pre-intro text
    document.querySelector('.celebrateText').textContent = isKorean ? '🎉 사비나 예서 첫 번째 생일! 🎉' : '🎉 Sabbyna Yeseo\'s 1st Birthday! 🎉';

    // Intro text
    document.getElementById('introText').innerHTML = isKorean ?
        '가족, 친구, 대부모님께,<br><br> 사랑스러운 <strong>사비나 예서</strong>의 <strong>첫 번째 생일</strong>을 함께 축하해 주세요!<br> 당신의 참여로 이 날이 특별해집니다.' :
        'Dear Family, Friends, and Godparents,<br><br> You are especially invited to celebrate the <strong>1st Birthday</strong> of our beloved <strong>Sabbyna Yeseo</strong>!<br> Your presence will make this day unforgettable.';

    // Tabs labels
    tabs[0].textContent = isKorean ? '언제' : 'When';
    tabs[1].textContent = isKorean ? '어디서' : 'Where';
    tabs[2].textContent = isKorean ? '갤러리' : 'Gallery';

    // When section
    document.getElementById('whenTitle').textContent = isKorean ? '📅 언제' : '📅 When';
    document.getElementById('birthdayDate').innerHTML = isKorean ? '<strong>생일:</strong> 2026년 1월 13일' : '<strong>Date of Birthday:</strong> January 13, 2026';
    document.getElementById('celebrationDate').innerHTML = isKorean ? '<strong>축하 행사:</strong> 2026년 1월 17일' : '<strong>Celebration Date:</strong> January 17, 2026';
    document.getElementById('time').innerHTML = isKorean ? '<strong>시간:</strong> 오후 2시' : '<strong>Time:</strong> 2:00 PM';

    // Where section
    document.getElementById('whereTitle').textContent = isKorean ? '📍 어디서' : '📍 Where';
    document.getElementById('venue').innerHTML = isKorean ? '<strong>장소:</strong> 베스타 프리미엄 뷔페' : '<strong>Venue:</strong> Vesta Premium Buffet';
    document.getElementById('address').innerHTML = isKorean ? '<strong>주소:</strong> 대전 서구 만년로 70' : '<strong>Address:</strong> 70 Mannyeon-ro, Seo-gu, Daejeon';
    document.getElementById('room').innerHTML = isKorean ? '<strong>룸:</strong> ORION' : '<strong>Room:</strong> ORION';
    document.getElementById('openMaps').textContent = isKorean ? '구글 지도에서 열기' : 'Open in Google Maps';

    // Gallery titles
    document.getElementById('galleryTitle').textContent = isKorean ? '📸 갤러리' : '📸 Gallery';
    document.getElementById('caption1').textContent = isKorean ? '💗 귀여운 미소!' : '💗 Cute Smile!';
    document.getElementById('caption2').textContent = isKorean ? '🎀 사랑스러운 순간' : '🎀 Adorable Moments';
    document.getElementById('caption3').textContent = isKorean ? '💞 사랑스러운 아기' : '💞 Loving Baby';
    document.getElementById('caption4').textContent = isKorean ? '✨ 귀여워!' : '✨ Adorable!';
    document.getElementById('caption5').textContent = isKorean ? '예쁘다!' : 'Pretty!';
}


// Pre-intro + intro overlay
const preIntro = document.getElementById('preIntro');
const introOverlay = document.getElementById('introOverlay');
const okBtn = document.getElementById('okBtn');

function preIntroStart() {
    setTimeout(() => {
        preIntro.style.display='none';
        introOverlay.style.display='flex';
    }, 3000);
}

okBtn.addEventListener('click', () => {
    introOverlay.style.display='none';
    launchConfetti();
});

// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-target');
        sections.forEach(s=>s.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// Countdown
const countdownEl = document.getElementById('countdown');
const targetDate = new Date('January 17, 2026 14:00:00').getTime();
function updateCountdown(){
    const now = new Date().getTime();
    const diff = targetDate - now;
    if(diff<=0){
        countdownEl.innerHTML = isKorean ? '🎉 오늘이 생일이에요! 🎂' : '🎉 It\'s her birthday today! 🎂';
        return;
    }
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor((diff/(1000*60*60))%24);
    const mins=Math.floor((diff/(1000*60))%60);
    const secs=Math.floor((diff/1000)%60);
    countdownEl.innerHTML = `⏳ ${days}d ${hours}h ${mins}m ${secs}s to go!`;
}
setInterval(updateCountdown,1000);
updateCountdown();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click',()=>{
        lightboxImg.src=img.src;
        lightbox.style.display='flex';
    });
});
lightbox.addEventListener('click',()=>{ lightbox.style.display='none'; });

// Sparkles
const container=document.getElementById('sparkles-container');
function createSparkle(){
    const s=document.createElement('div');
    s.style.position='absolute';
    s.style.width=s.style.height=4+Math.random()*6+'px';
    s.style.left=Math.random()*window.innerWidth+'px';
    s.style.top=Math.random()*window.innerHeight+'px';
    s.style.background='radial-gradient(circle,#ff69b4,#ffc0cb)';
    s.style.borderRadius='50%';
    s.style.opacity=0;
    s.style.pointerEvents='none';
    s.style.animation=`sparkleMove ${2+Math.random()*2}s linear forwards`;
    container.appendChild(s);
    setTimeout(()=>s.remove(),4000);
}
setInterval(createSparkle,200);
const style=document.createElement('style');
style.innerHTML=`@keyframes sparkleMove {0%{transform:translateY(0) scale(0.5);opacity:1;}50%{transform:translateY(-50px) scale(1);opacity:0.7;}100%{transform:translateY(-150px) scale(0.5);opacity:0;}}`;
document.head.appendChild(style);

// Confetti
const confettiCanvas=document.getElementById('confettiCanvas');
const ctx=confettiCanvas.getContext('2d');
confettiCanvas.width=window.innerWidth;
confettiCanvas.height=window.innerHeight;
let confettis=[];
function Confetti(){
    this.x=Math.random()*confettiCanvas.width;
    this.y=Math.random()*-confettiCanvas.height;
    this.size=5+Math.random()*5;
    this.speed=1+Math.random()*3;
    this.color=`hsl(${Math.random()*360},100%,70%)`;
}
function launchConfetti(){for(let i=0;i<150;i++){confettis.push(new Confetti());} animateConfetti();}
function animateConfetti(){
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    confettis.forEach((c,i)=>{
        ctx.fillStyle=c.color;
        ctx.fillRect(c.x,c.y,c.size,c.size);
        c.y+=c.speed;
        if(c.y>confettiCanvas.height) confettis.splice(i,1);
    });
    if(confettis.length>0) requestAnimationFrame(animateConfetti);
}
window.addEventListener('resize',()=>{
    confettiCanvas.width=window.innerWidth;
    confettiCanvas.height=window.innerHeight;
});
