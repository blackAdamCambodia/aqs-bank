// Login button Event Handler
const loginBtn= document.getElementById('login');
loginBtn.addEventListener('click',function(){
    document.getElementById('login-area').style.display='none'
    document.getElementById('transaction-area').style.display='block'
})

// Deposit Button Event Handler

const depositBtn= document.getElementById('addDeposit');
depositBtn.addEventListener("click", function(){
        const depositNumber = getInputNumber("depositAmount")
        upgradeSpanText('currentDeposit',depositNumber)
        upgradeSpanText('totalBalance',depositNumber)
        document.getElementById('depositAmount').value = '';
    })
// Withdraw Button Event Handler 
const withdrawBtn= document.getElementById('addWithdrawAmount');
withdrawBtn.addEventListener("click", function(){
        const withdrawAmount = getInputNumber('withdrawAmount') 
        upgradeSpanText('withdrawBalance',withdrawAmount)
        upgradeSpanText('totalBalance',-1*withdrawAmount)     
        document.getElementById('withdrawAmount').value = '';
    })

    function getInputNumber(id){
        const inputAmount = document.getElementById(id).value;
        const inputNumber = parseFloat(inputAmount);
        return inputNumber;
      
       
    }
   
    function upgradeSpanText (id,AddedNumber){
        
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount= AddedNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }
    
    