

var btnScroll=document.getElementById("btnScroll");
window.onscroll=function(){
    if (scrollY>=30)
    {
        btnScroll.style.display='block';

    }
    else{
        btnScroll.style.display='none';
    }
}

btnScroll.addEventListener('click',function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })

})

function openWhatsApp() {
    // Replace 'your_message' with the message you want to share
    var message = encodeURIComponent('https://t.me/quraangroup');
  
    // Create the WhatsApp share link
    var whatsappLink = 'https://web.whatsapp.com/send?text=' + message;
  
    // Open WhatsApp Web in a new window/tab
    window.open(whatsappLink, '_blank');
  }

