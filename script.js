let loc=document.getElementById('peopleId');
const catg=["all","agri","ld","up","civil"];
let imghtml="";
let slctd="all";

document.getElementById(slctd).style.color='black';
for (let j=1;j<=3;j++) {
  for(let i = 1; i < catg.length; i++){
      imghtml+='<img src="img/'+catg[i]+'/'+j+'.jpeg" class="all '+catg[i]+' peopleImg" >';
  }
}
loc.innerHTML=imghtml;
function filterImg(val) {
  document.getElementById(slctd).style.color='white';
  document.getElementById(val).style.color='black';


  let elements=document.getElementsByClassName(slctd);
  for(let i=0;i<elements.length;i++){
    elements[i].style.display="none";
  }
  elements=document.getElementsByClassName(val);
  for(let i=0;i<elements.length;i++){
    elements[i].style.display="block";
  }

  slctd=val;
}
