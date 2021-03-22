(function () {'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')}, false)
      })
  })()
  $(document).ready(function() {
    $(window).scroll(function() {
      console.log($(window).scrollTop())
      if ($(window).scrollTop() > 280) {
        $('.navbar').addClass('fixed-top');
      }
      if ($(window).scrollTop() < 281) {
        $('.navbar').removeClass('fixed-top');
      }
    });
  }); 
  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
        
function modeles(){
  var x=document.getElementById('select_mark_search').value;
  $('#selectmodelId').empty();
  $('#selectmodelId').append('<option>Modeles</option>');
  var alfaromeo=["Giullietta","147","Stelvio"];
  var audi=["A1","A3","A4","Q5","Q7"];
  var bmw=["Serie 1","Serie 3","X5","X6","M3"];
  var citroen=["C3","C4","C-elysee","Berlingo"];
  var dacia=["Sandero","Logan","Duster","Dokker"];
  var ford=["Kuga","Focus","Fiesta","Explorer","Jumper"];
  var hyundai=["i10","i20","i30","Elantra","Accent"];
  var peugeot=["208","3008","508","Landtrek","2008"];
  var renault=["Clio","Megane","Capture","Kadjar","Koleos"];
  var seat=["Leon","Ibiza","Ateca"];
  var skoda=["Octavia","Fabia","Superb","Karoq","Scalla"];
  var volkswagen=["Golf","Polo","Passat","Caddy","Jetta"];
  if(x==1)
  {
    for (var i = 0; i < alfaromeo.length; i++) {
      $('#selectmodelId').append('<option value="' + alfaromeo[i]+ '">' + alfaromeo[i] + '</option>');
  }
  }else if(x==2)
  {
    $('#selectmodelId').empty();
    for (var i = 0; i < audi.length; i++) {
      $('#selectmodelId').append('<option value="' + audi[i]+ '">' + audi[i] + '</option>');
  }
}else if(x==3)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < bmw.length; i++) {
    $('#selectmodelId').append('<option value="' + bmw[i]+ '">' + bmw[i] + '</option>');
}
}else if(x==4)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < citroen.length; i++) {
    $('#selectmodelId').append('<option value="' + citroen[i]+ '">' + citroen[i] + '</option>');
}
}else if(x==5)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < dacia.length; i++) {
    $('#selectmodelId').append('<option value="' + dacia[i]+ '">' + dacia[i] + '</option>');
}
}else if(x==6)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < ford.length; i++) {
    $('#selectmodelId').append('<option value="' + ford[i]+ '">' + ford[i] + '</option>');
}
}else if(x==7)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < hyundai.length; i++) {
    $('#selectmodelId').append('<option value="' + hyundai[i]+ '">' + hyundai[i] + '</option>');
}
}else if(x==8)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < peugeot.length; i++) {
    $('#selectmodelId').append('<option value="' + peugeot[i]+ '">' + peugeot[i] + '</option>');
}
}else if(x==9)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < renault.length; i++) {
    $('#selectmodelId').append('<option value="' + renault[i]+ '">' + renault[i] + '</option>');
}
}else if(x==10)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < seat.length; i++) {
    $('#selectmodelId').append('<option value="' + seat[i]+ '">' + seat[i] + '</option>');
}
}else if(x==11)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < skoda.length; i++) {
    $('#selectmodelId').append('<option value="' + skoda[i]+ '">' + skoda[i] + '</option>');
}
}else if(x==12)
{
  $('#selectmodelId').empty();
  for (var i = 0; i < volkswagen.length; i++) {
    $('#selectmodelId').append('<option value="' + volkswagen[i]+ '">' + volkswagen[i] + '</option>');
}
}
}

var colors=["grey","red","yellow","black","pink","white","orange","violet","green","light green"];
var years= document.getElementById("year");
for(var i =1950;i<=2021;i++)
{
  $('#year').append('<option value="' + i+ '">' + i + '</option>');
}
var color= document.getElementById("color");
for(var i =0;i<=colors.length;i++)
{
  $('#color').append('<option value="' + i+ '">' + colors[i] + '</option>');
}
var portes= document.getElementById("number_door");
for(var i =2;i<11;i++)
{
  $('#number_door').append('<option value="' + i+ '">' + i + '</option>');
}
var portes= document.getElementById("fiscal_power");
for(var i =2;i<=30;i++)
{
  $('#fiscal_power').append('<option value="' + i+ '">' + i + '</option>');
}