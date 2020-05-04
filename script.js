function $(tag) {
    return document.querySelector(tag);
  }
  
  function openPage(i) {
    $('.sections').style.transform = `translateX(-${i * 100}vw)`;
  }
  
  function openNav() {
    $('main').classList.add('navOpen');
    $('.nav-container').classList.add('navOpen');
    $('.overlay').style.opacity = 1;
    $('.overlay').style.pointerEvents = 'auto';
  }
  
  function closeNav() {
    $('main').classList.remove('navOpen');
    $('.nav-container').classList.remove('navOpen');
    $('.overlay').style.opacity = 0;
    $('.overlay').style.pointerEvents = 'none';
  }
  
  onload = function() {
    $('.loader').style.opacity = 0;
  };
  function agadary() {
    alert("لە ئێستادا بۆ ئایفۆن بەردەست نییە");
  }