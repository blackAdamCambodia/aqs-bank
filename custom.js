const loginBtn= document.getElementById('login');
loginBtn.addEventListener('click',function(){
    document.getElementById('login-area').style.display='none'
    document.getElementById('transaction-area').style.display='block'
})