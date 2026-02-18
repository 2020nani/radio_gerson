fetch('config.json').then(r=>r.json()).then(c=>{
  streamUrl.value=c.streamUrl;bannerText.value=c.banner.text;bannerLink.value=c.banner.link;
  scheduleJson.value=JSON.stringify(c.schedule,null,2);
});
function saveConfig(){
  alert('Edite o arquivo config.json no servidor para aplicar em produção.');
}
