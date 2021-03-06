module.exports = (function() {

  var COOKIE = '_lwa_subcribe';
  
  function subscribe(ev) {
    ev.preventDefault();
    
    $.getJSON(this.action + '?callback=?', $(this).serialize(), function(data) {
      CoverPop.close();
     
      // error
      if (data.Status === 400) {
        updateCookie(COOKIE, 1);
      } else {
        updateCookie(COOKIE, 180);
      }
    });
  }
  
  function updateCookie(name, days) {
    var date = new Date();
    date.setTime(+ date + (days * 86400000));
    document.cookie = name + '=true; expires=' + date.toUTCString() + '; path=/';
  }
  
  function alreadySubscribed() {
    CoverPop.close();
    updateCookie(COOKIE, 30);
  }

  function init() {
    CoverPop.start({
      coverId: 'modal-suggest-subscribe',
      expires: 1,
      cookieName: COOKIE,
      closeOnEscape: true,
      delay: 5000
    });

    // events
    $('#js-subscribed').click(alreadySubscribed);
    $('#js-subscribe-form').submit(subscribe);
  }

  return {
    init: init
  };
  
})();