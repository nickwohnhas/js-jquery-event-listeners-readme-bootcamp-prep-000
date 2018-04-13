//define functions here
function getIt(){
  $('p').on('click',function(){
    alert(`Hey!`)
  })
}
function frameIt(){
  $('img').on('load', function(){
 $('img').addClass('tasy')})
}
function pressIt(){
  $('#typing').on('keydown',function(key){
    if (key.which == 71 ){
      alert(`G has been pressed.`)
    }
  })
}

$(document).ready(function(){

// call functions here

});
