const illustrationDesktop=document.getElementById('desktop');
const illutrationMobile=document.getElementById('mobile');
let initialWidth=window.innerWidth;
const form = document.getElementById('form');
const alert= document.getElementById('success');
const main = document.getElementById('main');
const emailPlace=document.getElementById('emailPlace');
let email;
const exit=document.getElementById('exit');


handleClick=()=>{
  main.classList.remove('--is-off');
  alert.classList.add('--is-off');
  emailPlace.innerText='';
}

handleSubmit=(e)=>{
  e.preventDefault();
  const el=e.currentTarget;
  const formData=new FormData(el);
  const formObj=Object.fromEntries(formData);
  if(formObj.email){
    email=formObj.email;
    main.classList.add('--is-off');
    alert.classList.remove('--is-off');
    emailPlace.innerText=`${email}.`
  }
}



const app=()=>{
  if(initialWidth>=1200){
    illutrationMobile.classList.add('--is-off')
  }else{
    illustrationDesktop.classList.add('--is-off')
  }

  form.addEventListener('submit',handleSubmit);
  exit.addEventListener('click',handleClick);
}

document.addEventListener("DOMContentLoaded",app());