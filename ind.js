const Login=document.querySelector('.Login')
const LoginBtn=document.querySelector('.LoginBtn')
const Register=document.querySelector('.Register')
const RegisterBtn=document.querySelector('.RegisterBtn')
LoginBtn.addEventListener('click',()=>{
    Login.classList.add('active')
    Register.classList.add('active')
})
RegisterBtn.addEventListener('click',()=>{
    Login.classList.remove('active')
    Register.classList.remove('active')
})