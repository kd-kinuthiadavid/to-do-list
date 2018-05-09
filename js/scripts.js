/business logic
function Dolist(first){
 this.firstList = first;
}
//user interface
$(document).ready(function(){
 $("form#list").submit(function (event) {
   event.preventDefault();

   var inputtedFirstList = $("input#new-list-name").val();

   var newDolist = new Dolist(inputtedFirstList);

   $("ol#tolist").append("<li>" + newDolist.firstList + "<button class='rem'>X </button>" + "</li>")

   $('.rem').on("click", function(){
     $(this).parent().remove();
   })



   $("input#new-list-name").val();
 });
});

// $(".a").click(function(){
//  $(".b").show();
// });
// $(".c").click(function(){
//  $(".d").show();
// });
// $(".e").click(function(){
//  $(".f").show();
// });
// $(".g").click(function(){
//  $(".h").show();
// });
