fetch('config.json').then(r=>r.json()).then(c=>{
  document.getElementById('banner-top').innerHTML=`<a href="${c.banner.link}" target="_blank">${c.banner.text}</a>`;
  document.getElementById('radioPlayer').innerHTML=`<source src="${c.streamUrl}" type="audio/mpeg">`;
  const ul=document.getElementById('schedule');
  if(ul) ul.innerHTML=c.schedule.map(i=>`<li><strong>${i.time}</strong> - ${i.title}</li>`).join('');
});
let count=localStorage.getItem('listeners')||0;count++;localStorage.setItem('listeners',count);
const el=document.getElementById('listeners');if(el) el.innerText=count;
if('serviceWorker'in navigator){navigator.serviceWorker.register('sw.js');}
