const btn=document.getElementById('themeBtn');
btn.onclick=()=>{document.body.classList.toggle('dark');btn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';};
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();
const n=name.value.trim(),em=email.value.trim(),m=message.value.trim();
const out=msg;
if(n===''||em===''||m===''){out.innerHTML='Please fill all fields';out.className='text-danger';}
else{out.innerHTML='Message submitted successfully!';out.className='text-success';e.target.reset();}
});