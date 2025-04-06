
jQuery(document).ready(function () {
   jQuery('.nav_mid_items').meanmenu({
       meanExpand: '<i class="fas fa-angle-down"></i>',
       meanContract: '<i class="fas fa-angle-up"></i>',
   });

//    Product Tabs
// function openDescription(evt, proDescription) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(proDescription).style.display = "block";
//   evt.currentTarget.className += " active";
// }
          
});