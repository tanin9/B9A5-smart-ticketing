
let count=0;
let totalSeat=16;
const addBtn = document.getElementsByClassName("add");
for(const btn of addBtn){
    btn.addEventListener('click',function(event)
    {
        if(count<4){
        event.target.disabled = true; 
        count = count+1;
        totalSeat = totalSeat-1;
       if( totalSeat>=0)
       {
        setInnerText('seat-count',count);
        setInnerText('seat-available',totalSeat);
       }
       

        const seatName = event.target.parentNode.childNodes[1].innerText;
        const seatClass='Economy';
        const seatPrice = 550 ;
        // console.log(typeof(seatPrice));
         
      
    // console.log(seatName,seatClass,seatPrice);
    const selectedSeatContainer = document.getElementById('selected-seat-container');
    const li = document.createElement('li');

    const p1 =document.createElement('p');
    p1.innerText = seatName;
    const p2 =document.createElement('p');
    p2.innerText = seatClass;
    const p3 =document.createElement('p');
    p3.innerText = seatPrice;


    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);

    selectedSeatContainer .appendChild(li);
    cost('total-cost',seatPrice);
    // grandCost('grand-total-price',seatPrice);
   
    document.getElementById('apply').addEventListener('click', function() {
        const couponCode = document.getElementById('coupon-input').value;
        let discount = 0;
        
        if (couponCode === 'NEW15') {
            discount = 15;
        } else if (couponCode === 'Couple 20' && (count>1)) {
            discount= 20;
        }
    
        const totalCost = parseFloat(document.getElementById('total-cost').innerText);
        const discountAmount = (totalCost * discount) / 100;
        const grandTotal = Math.round(totalCost - discountAmount);
     
    
        setInnerText('grand-total-price', grandTotal);
        hideElementById('coupon');
        
    });
    
   
    
    }
   
    else{

        alert("you can't select more than four seats!");
    }

    });

    
}

function cost(elementId,value) {
    const totalCost = document.getElementById(elementId).innerText;
    const numberTotalCost = parseInt(totalCost); 
    const sum = numberTotalCost + value;
    setInnerText(elementId, sum);
}
function hideElementById(elementId) {
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function setInnerText(elementId,value)
{
    document.getElementById(elementId,value).innerText= value;
}
