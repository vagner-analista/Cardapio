
$( document ).ready(function() {
 
    console.log('chamou o JS');
    // scroll para as se��es
    let navBtn = $('.nav-item');
    let btnbanner1 = $('.btnBanner');
  
    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let cardapioSection = $('#cardapio-area');   
    let contactSection = $('#contact-area');
    let destaqueSection = $('#destaque-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'about-menu') {
        scrollTo = aboutSection;
      } else if(btnId == 'cardapio-menu') { 
        scrollTo = cardapioSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      } else if (btnId == 'home-menu'){
        scrollTo = bannerSection;
      } else if(btnId == 'destaque-menu'){
        scrollTo = destaqueSection;
      } else{
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 1500);
    });
  
  
    $(btnbanner1).click(function() {
      let btnId = $(this).attr('id');
      if(btnId == 'btnbanner01'){
        scrollTo = cardapioSection;
      }else if(btnId == 'btnbanner02'){
        scrollTo = cardapioSection;
      } else if(btnId == 'btnbanner03'){
        scrollTo = contactSection;
      }
      $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
      }, 1500);
    });
  
    
  
  });
