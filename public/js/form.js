$(function(){
  $('#loginModal').submit(function(e){
    return false;
  });
  
  $('#loginTrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });

  $('#signUpModel').submit(function(e){
    return false;
  });
  
  $('#signUpTrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});