var contentHien=document.querySelectorAll('.content2__hien')
var plus=document.querySelectorAll('.plus')
var contentcdc=document.querySelectorAll('.content__cdc')
var contentHidden=document.querySelectorAll('.content2__hidden')
var minus=document.querySelectorAll('.minus')
var contentImg=document.querySelectorAll('.content2__img')
var main=document.querySelector('#main')
for(let i=0;i<4;++i){
    contentcdc[i].onclick=function(e){
        for(let t=0;t<4;t++){
            if(t===i){
                contentHidden[t].style.display='flex';
                contentHien[t].style.display='none';
        contentImg[t].style.display='block';
            }
            else{
                contentHidden[t].style.display='none';
                contentHien[t].style.display='flex';
                contentImg[t].style.display='none';
            }
        }
        
        
    }
}

var modal=document.querySelector('.modal')
var nutdk=document.querySelectorAll('.dungthu__btn')
var nutclosee=document.querySelector('.modal__close')
for(let i=0;i<nutdk.length;i++){
    nutdk[i].onclick=function(){
      modal.style.display='block'; 
      main.style.display='none';
      console.log('sdfsd') 
    }
}
nutclosee.onclick=function(){
    modal.style.display='none'; 
    main.style.display='block';
}
for(let i=4;i<9;++i){
    contentcdc[i].onclick=function(e){
        for(let t=4;t<9;t++){
            if(t===i){
                contentHidden[t].style.display='flex';
                contentHien[t].style.display='none';
        
            }
            else{
                contentHidden[t].style.display='none';
                contentHien[t].style.display='flex';
                
            }
        }
        
        
    }
}
var thugonmo=document.querySelector('.thugon__content .open')
var thugondong=document.querySelector('.thugon__content .close')
var noidungcontent=document.querySelectorAll('.content__nd2-text p')
 thugonmo.addEventListener('click',function(){
     for(let i=0;i<4;i++){
        noidungcontent[i].style.display='block';
     }
     thugonmo.style.display='none';
     thugondong.style.display='block';
    
 })
 thugondong.addEventListener('click',function(){
    for(let i=0;i<4;i++){
       noidungcontent[i].style.display='none';
    }
    thugonmo.style.display='block';
    thugondong.style.display='none';
   
})
var thugonmo2=document.querySelector('.thugon2__content .open2')
var thugondong2=document.querySelector('.thugon2__content .close2')
var noidungcontent2=document.querySelectorAll('.contact__p2 p')
thugonmo2.addEventListener('click',function(){
    for(let i=0;i<3;i++){
       noidungcontent2[i].style.display='block';
    }
    thugonmo2.style.display='none';
    thugondong2.style.display='block';
   
})
thugondong2.addEventListener('click',function(){
   for(let i=0;i<3;i++){
      noidungcontent2[i].style.display='none';
   }
   thugonmo2.style.display='block';
   thugondong2.style.display='none';
  
})
var thugonmo3=document.querySelector('.thugon3__content .open3')
var thugondong3=document.querySelector('.thugon3__content .close3')
var noidungcontent3=document.querySelectorAll('.contact__p2-c.c2 p')
thugonmo3.addEventListener('click',function(){
    for(let i=0;i<3;i++){
       noidungcontent3[i].style.display='block';
    }
    thugonmo3.style.display='none';
    thugondong3.style.display='block';
   
})
thugondong3.addEventListener('click',function(){
   for(let i=0;i<3;i++){
      noidungcontent3[i].style.display='none';
   }
   thugonmo3.style.display='block';
   thugondong3.style.display='none';
  
})
var thugonmo4=document.querySelector('.thugon4__content .open4')
var thugondong4=document.querySelector('.thugon4__content .close4')

thugonmo4.addEventListener('click',function(){
    for(let i=3;i<6;i++){
       noidungcontent3[i].style.display='block';
    }
    thugonmo4.style.display='none';
    thugondong4.style.display='block';
   
})
thugondong4.addEventListener('click',function(){
   for(let i=3;i<6;i++){
      noidungcontent3[i].style.display='none';
   }
   thugonmo4.style.display='block';
   thugondong4.style.display='none';
  
})
var  contact__ndcCc=document.querySelectorAll('.contact__ndc-cc')
for(let i=4;i<contact__ndcCc.length;i++){
    contact__ndcCc[i].style.display='none'
}
var thugonmo6=document.querySelector('.thugon6__content .open6')
var thugondong6=document.querySelector('.thugon6__content .close6')

thugonmo6.addEventListener('click',function(){
    for(let i=4;i<contact__ndcCc.length;i++){
      contact__ndcCc[i].style.display='block';
    }
    thugonmo6.style.display='none';
    thugondong6.style.display='block';
   
})
thugondong6.addEventListener('click',function(){
   for(let i=4;i<contact__ndcCc.length;i++){
      contact__ndcCc[i].style.display='none';
   }
   thugonmo6.style.display='block';
   thugondong6.style.display='none';
  
})
var modal2=document.querySelector('.modal2')
var modal2Nd=document.querySelector('.modal2__nd')
var modalclose2=document.querySelector('.modal2 .header__close')
var modal2ty=document.querySelector('.modal2__ndc-p2 .ty')
var modal2spk=document.querySelector('.modal2__ndc-p2 .spk')
var lispk=document.querySelector('.lispk')
var lity=document.querySelector('.lity')
var headersubmenu=document.querySelector('.headersub__menu')
modal2.onclick=function(){
    modal2.style.display='none'
}
modal2Nd.addEventListener('click',function(e){
    e.stopPropagation();
})
headersubmenu.onclick=function(){
    modal2.style.display='block'
}
lispk.addEventListener('click', function(){
    modal2spk.classList.toggle('open')
    
})

lity.onclick=function(){
    modal2ty.classList.toggle('open')
}
modalclose2.addEventListener('click',function(){
    modal2.style.display='none';
})