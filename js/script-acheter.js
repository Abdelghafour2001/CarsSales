(function () {'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()&& /^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(document.getElementById('validationCustomUsername').value)) {
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
  
 /* var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example2'
  })
  var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
  var scrollSpyContentEl = document.getElementById('content')
  var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl)  */
  //selectmodelId11
  function modeles2(){
    var x=document.getElementById('select_mark_search1').value;
    $('#selectmodelId1').empty();
    $('#selectmodelId1').append('<option>Modeles</option>');
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
        $('#selectmodelId1').append('<option value="' + alfaromeo[i]+ '">' + alfaromeo[i] + '</option>');
    }
    }else if(x==2)
    {
      $('#selectmodelId1').empty();
      for (var i = 0; i < audi.length; i++) {
        $('#selectmodelId1').append('<option value="' + audi[i]+ '">' + audi[i] + '</option>');
    }
  }else if(x==3)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < bmw.length; i++) {
      $('#selectmodelId1').append('<option value="' + bmw[i]+ '">' + bmw[i] + '</option>');
  }
  }else if(x==4)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < citroen.length; i++) {
      $('#selectmodelId1').append('<option value="' + citroen[i]+ '">' + citroen[i] + '</option>');
  }
  }else if(x==5)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < dacia.length; i++) {
      $('#selectmodelId1').append('<option value="' + dacia[i]+ '">' + dacia[i] + '</option>');
  }
  }else if(x==6)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < ford.length; i++) {
      $('#selectmodelId1').append('<option value="' + ford[i]+ '">' + ford[i] + '</option>');
  }
  }else if(x==7)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < hyundai.length; i++) {
      $('#selectmodelId1').append('<option value="' + hyundai[i]+ '">' + hyundai[i] + '</option>');
  }
  }else if(x==8)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < peugeot.length; i++) {
      $('#selectmodelId1').append('<option value="' + peugeot[i]+ '">' + peugeot[i] + '</option>');
  }
  }else if(x==9)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < renault.length; i++) {
      $('#selectmodelId1').append('<option value="' + renault[i]+ '">' + renault[i] + '</option>');
  }
  }else if(x==10)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < seat.length; i++) {
      $('#selectmodelId1').append('<option value="' + seat[i]+ '">' + seat[i] + '</option>');
  }
  }else if(x==11)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < skoda.length; i++) {
      $('#selectmodelId1').append('<option value="' + skoda[i]+ '">' + skoda[i] + '</option>');
  }
  }else if(x==12)
  {
    $('#selectmodelId1').empty();
    for (var i = 0; i < volkswagen.length; i++) {
      $('#selectmodelId1').append('<option value="' + volkswagen[i]+ '">' + volkswagen[i] + '</option>');
  }
  }
  }

  function clickchange1(){
     document.getElementById('old').className="desactivechoice";
     document.getElementById('new').className="activechoice";
  };
  function clickchange2(){
    document.getElementById('new').className="desactivechoice";
    document.getElementById('old').className="activechoice";
 };

 /////////////////////////////////////////:
const CreateCars = (() => {
  // car data
  const cars = [];

  //car class

  class Car {
    constructor(idcar,puiss,make, model,img, used,price, year,trans, gas,img1,img2,img3,img4) {
      this.idcar=idcar; 
      this.puiss=puiss;
      this.make = make;
      this.model = model;
      this.img = img;
      this.used = used;
      this.price = price;
      this.year = year;
      this.trans=trans;
      this.gas = gas;
      this.img1 = img1;
      this.img2 = img2;
      this.img3 = img3;
      this.img4 = img4;
    }
  }

  //car creation function

  function makeCar(
    idcar=1,
    puiss=6,
    make="string",
    model="string",
    img = "img/car-default.jpeg",
    used = true,
    price = 50000,
    year = "2016",
    trans = "automatic",
    gas = "diesel",
    img1 = "img/car-default4.jpeg",
    img2 = "img/car-default1.jpeg",
    img3 = "img/car-default2.jpeg",
    img4 = "img/car-default3.jpeg"
  ) {
    const car = new Car(
      idcar,
      puiss,
      make,
      model,
      img,
      used,
      price,
      year,
      trans,
      gas,
      img1,
      img2,
      img3,
      img4
    );

    cars.push(car);
  }

  function produceCars() {  
    makeCar(3,8,"BMW","Serie 1","img/new/BMWS1/1.jpg",false,300000,"2019","manuel","diesel","img/new/BMWS1/1.jpg","img/new/BMWS1/2.jpg","img/new/BMWS1/3.jpg","img/new/BMWS1/4.jpg");
    makeCar(4,9,"Audi","Q3","img/used/Audiq32020/1.jpg",true,650000,"2020","automatic","diesel","img/used/Audiq32020/1.jpg","img/used/Audiq32020/2.jpg","img/used/Audiq32020/3.jpg","img/used/Audiq32020/4.jpg");
    makeCar(5,8,"BMW","Serie 4","img/new/BMWS3/2.jpg",false,622000,"2020","automatic","essence","img/new/BMWS3/1.jpg","img/new/BMWS3/2.jpg","img/new/BMWS3/3.jpg","img/new/BMWS3/4.jpg");
    makeCar(6,7,"Volkswagen","Arteon","img/new/VWArteon/3.jpg",false,350000,"2021","automatic","diesel","img/new/VWArteon/1.jpg","img/new/VWArteon/3.jpg","img/new/VWArteon/2.jpg","img/new/VWArteon/4.jpg");
    makeCar(7,8,"Volkswagen","Golf 7","img/new/VWGolf/3.jpg",false,283000,"2018","automatic","essence","img/new/VWGolf/3.jpg","img/new/VWGolf/2.jpg","img/new/VWGolf/1.jpg","img/new/VWGolf/4.jpg");
    makeCar(8,9,"Land Rover","Discovery","img/used/LRDiscovery2015/1.jpg",true,160000,"2015","automatic","diesel","img/used/LRDiscovery2015/1.jpg","img/used/LRDiscovery2015/2.jpg","img/used/LRDiscovery2015/3.jpg","img/used/LRDiscovery2015/4.jpg");
    makeCar(9,6,"Volkswagen","Passat","img/new/VWPassat/2.jpg",false,255500,"2020","manuel","diesel","img/new/VWPassat/2.jpg","img/new/VWPassat/1.jpg","img/new/VWPassat/3.jpg","img/new/VWPassat/4.jpg");
    makeCar(10,12,"Mercedes","CLS","img/used/MercedesCls2012/1.jpg",true,100000,"2012","manuel","essence","img/used/MercedesCls2012/1.jpg","img/used/MercedesCls2012/2.jpg","img/used/MercedesCls2012/3.jpg","img/used/MercedesCls2012/4.jpg");
    makeCar(11,6,"Renault","Clio 4","img/used/RenaultClio4/1.jpg",true,110000,"2018","manuel","diesel","img/used/RenaultClio4/1.jpg","img/used/RenaultClio4/2.jpg","img/used/RenaultClio4/3.jpg","img/used/RenaultClio4/4.jpg");
    makeCar(12,8,"Mercedes","Class A","img/new/MercedesA/1.jpg",false,385500,"2019","automatic","essence","img/new/MercedesA/1.jpg","img/new/MercedesA/2.jpg","img/new/MercedesA/3.jpg","img/new/MercedesA/4.jpg");
    makeCar(13,6,"Nissan","Micra","img/used/NissanMicra2019/1.jpg",true,93000,"2019","manuel","essence","img/used/NissanMicra2019/1.jpg","img/used/NissanMicra2019/2.jpg","img/used/NissanMicra2019/3.jpg","img/used/NissanMicra2019/4.jpg");
    makeCar(14,8,"Mercedes","Class C","img/new/MercedesC/1.jpg",false,400000,"2019","automatic","diesel","img/new/MercedesC/1.jpg","img/new/MercedesC/2.jpg","img/new/MercedesC/3.jpg","img/new/MercedesC/4.jpg");
    makeCar(15,6,"Renault","Clio","img/new/RenaultClio5/1.jpg",false,160000,"2020","manuel","diesel","img/new/RenaultClio5/1.jpg","img/new/RenaultClio5/2.jpg","img/new/RenaultClio5/3.jpg","img/new/RenaultClio5/4.jpg");
    makeCar(16,7,"Seat","Leon","img/new/SeatLeon/1.jpg",false,175000,"2018","manuel","diesel","img/new/SeatLeon/1.jpg","img/new/SeatLeon/2.jpg","img/new/SeatLeon/3.jpg","img/new/SeatLeon/4.jpg");
    makeCar(17,6,"Citroen","C-Elysee","img/used/CitroenCe2017/1.jpg",true,90000,"2017","manuel","essence","img/used/CitroenCe2017/1.jpg","img/used/CitroenCe2017/2.jpg","img/used/CitroenCe2017/3.jpg","img/used/CitroenCe2017/4.jpg");
    makeCar(18,8,"VolksWagen","Touran","img/used/VWTouran2016/1.jpg",true,130000,"2016","manuel","diesel","img/used/VWTouran2016/1.jpg","img/used/VWTouran2016/2.jpg","img/used/VWTouran2016/3.jpg","img/used/VWTouran2016/4.jpg");
    makeCar(1,6,"Ford","Fiesta","img/used/FordFiesta2017/1.jpg",true,80000,"2017","manuel","essence","img/used/FordFiesta2017/1.jpg","img/used/FordFiesta2017/2.jpg","img/used/FordFiesta2017/3.jpg","img/used/FordFiesta2017/4.jpg"); 
    makeCar(2,6,"Dacia","Duster","img/used/DaciaDuster2018/1.jpg",true,135000,"2018","manuel","diesel","img/used/DaciaDuster2018/1.jpg","img/used/DaciaDuster2018/2.jpg","img/used/DaciaDuster2018/3.jpg","img/used/DaciaDuster2018/4.jpg");

  }

  produceCars();

  //special

  const specialNew = cars.filter(car => car.used === false);

  return {
    cars,
    specialNew
  };
})();
const DispalyCars = (CreateCars => {
  let allCars = CreateCars.cars;
  let inventory = document.querySelector(".car-inventory");

  document.addEventListener("DOMContentLoaded", () => {
    inventory.innerHTML = "";
    let output = "";

    allCars.forEach(car => {
      output += `
      <div style="width:10%;"class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.used}">
            <div class="card car-card">
              <img
                src=${car.img}
                class="card-img-top car-img"
                alt=""
                height="200px"
              />
              <div class="card-body">
                <div class="car-info d-flex justify-content-between">
                  <!-- first flex child -->
                  <div class="car-text text-uppercase">
                    <h6 class="font-weight-bold">${car.make}</h6>
                    <h6>${car.model}</h6>
                  </div>
                  <!-- second flex child -->
                  <h5 class="car-value align-self-center py-2 px-3">
                    <span class="car-price">${car.price} DH</span>
                  </h5>
                </div>
              </div>
              <div
                class="card-footer text-capitalize d-flex justify-content-between"
              >
                <p>
                  <span><i class="fa fa-car"></i></span>${car.year}
                </p>
                <p>
                  <span><i class="fa fa-cogs"></i></span>${car.trans}
                </p>
                <p>
                  <span><i class="fa fa-gas-pump"></i></span>${car.gas}
                </p>
              </div>
            <a class="nav-link btn btn-primary text-white" type="button" href="#" data-toggle="modal" data-target="#displaycar${car.idcar}">Voir article</a>
            </div>
          </div>
          <!--Nav bar-->
              <!--Modals toggle-->
         <!-- The Modal -->
      <div class="modal" id="displaycar${car.idcar}">
          <div class="modal-dialog" >
              <div class="modal-content">
    
                  <!-- Modal Header -->
                  <div class="modal-header">
                      <h4 class="modal-title">${car.make} ${car.model}</h4>
                      <button type="button" class="close" data-dismiss="modal">×</button>
                  </div>
    
                  <!-- Modal body -->
                  <div class="modal-body" >
  <div id="demo${car.idcar}" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo${car.idcar}" data-slide-to="0" class="active"></li>
      <li data-target="#demo${car.idcar}" data-slide-to="1"></li>
      <li data-target="#demo${car.idcar}" data-slide-to="2"></li>
      <li data-target="#demo${car.idcar}" data-slide-to="3"></li>
    </ul>
    
    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./${car.img1}" alt="1" >
      </div>
      <div class="carousel-item">
        <img src="./${car.img2}" alt="2" >
      </div>
      <div class="carousel-item">
        <img src="./${car.img3}" alt="3" >
      </div>
    <div class="carousel-item">
        <img src="./${car.img4}" alt="4">
      </div>
    </div>
    
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo${car.idcar}" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo${car.idcar}" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
  <button class="accordion" >Fiche technique </button>
  <div class="panel"  style="display:block;">
    <div class="cat-opt-n">
                  <div class="row ls-opt">
            <div class="col-sm-6 col-md-6">
              <ul class="appliances">
                <li>
                  <span class="dot"></span>Année du modèle : <strong>${car.year}</strong>
                </li>
                <li>
                  <span class="dot"></span>Carburant : <strong>${car.gas}</strong>
                </li>
                <li><span class="dot"></span>Puissance fiscale : <strong>${car.puiss}</strong></li>
                <li><span class="dot"></span>Boite de vitesses : <strong>${car.trans}</strong></li>
                </ul>
            </div>
            <div class="col-sm-6 col-md-6 deprived-space">
              <ul class="appliances">
            <li><span class="dot"></span>Nombre de rapports : <strong>6</strong></li>
            <li><span class="dot"></span>Vitesse maxi : <strong>210 km/h</strong></li>
            <li><span class="dot"></span>Nombre de portes : <strong>4</strong></li>
  <li><span class="dot"></span>Prix (DH) : <strong>${car.price}</strong></li>
  
            </ul>
            </div>
          </div>
              </div>
  </div>
  
  <button class="accordion">Confort</button>
  <div class="panel" style="display:block;">
  <div class="cat-opt-n">
                  <div class="row ls-opt">
  <div class="col-sm-6 col-md-6 ">
  <ul class="appliances">
  <li><span class="dot"></span>Start-Stop : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Démarrage sans clé : <input type="checkbox" style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Camera de recul : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Radar de stationnement : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Rétroviseurs rabattables : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  </div>
  <div class="col-sm-6 col-md-6 deprived-space">
  <ul class="appliances">
  <li><span class="dot"></span>Rétroviseurs électrique : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Clim automatique : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Affichage tête haute : <input type="checkbox" style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Siège chauffant : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Coffre mains-libres : <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  </ul>
  </div>
  </div>
              </div></div>
  
  <button class="accordion">Esthétique</button>
  <div class="panel"  style="display:block;">
    <div class="cat-opt-n">
                  <div class="row ls-opt" >
  <div class="col-sm-6 col-md-6">
  <ul class="appliances">
  <li><span class="dot"></span>Jantes aluminium: <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Jantes en alliage: <input type="checkbox"  style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>
  Sellerie cuir: <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></span></li>
  <li><span class="dot"></span>
  Volant cuir: <input type="checkbox"  style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Phares en xénon: <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></span></li>
  <li><span class="dot"></span>Toit ouvrant ou panoramique: <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  </ul>
  </div>
  <div class="col-sm-6 col-md-6">
  <ul class="appliances">
  <li><span class="dot"></span>Feu du jour à LED: <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></span></li>
  <li><span class="dot"></span>
  Feu arrière a LED: <input type="checkbox" checked style="font-size: 24px; margin-top: 2px;position: baseline;"></span></li>
  <li><span class="dot"></span>
  Levier vitesse cuir: <input type="checkbox"  style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  <li><span class="dot"></span>Toit ouvrant: <input type="checkbox"  style="font-size: 24px; margin-top: 2px;position: baseline;"></li>
  </ul>
  </div>
  </div>
              </div>
  </div>
                    
  <div class="col-12">
  <div class="likebuttons">
            <button  class="btn" id="btn1${car.idcar}" onclick="jaime(${car.idcar});" ><i class="fa fa-thumbs-up fa-lg" aria-hidden="true"><span id="nl${car.idcar}">320</span></i></button>
<button class="btn"  id="btn2${car.idcar}" onclick="dislike(${car.idcar});"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true"><span id="nd${car.idcar}">100</span></i></button></div>
            </div>

  <h5>Laissez un commentaire</h5>
  <div class="bg-white p-2"><div class="d-flex flex-row user-info"><img class="rounded-circle" src="me.jpeg" width="40"><div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Abdelghafour</span><span class="date text-black-50">Partagée le 03/03/2021</span></div></div><div class="mt-2"><p class="comment-text">Je voudrais bien reserver un test pour cette voiture!</p></div></div>
  <div class="bg-light p-2" id="commentsection${car.idcar}">
            <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://cdn.onlinewebfonts.com/svg/img_173956.png" width="40">
  <input type="text" placeholder="Votre Pseudo" id="nomcmt${car.idcar}" style="display:block;width:35%;">
  <textarea placeholder="Votre Commentaire ici..." id="commenttext${car.idcar}" style="display:block ;position:relative;width:100%;"></textarea>
  </div>
            <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" onclick="comment(${car.idcar});" type="button">Poster</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" onclick="clearComments(${car.idcar})" type="button">Annuler</button></div>
        </div>
        </div>
      </div>
    </div>
  </div>
                  </div>           
              </div>
          </div>
      </div>
    </div>
          <!--End of modals toggle-->
              </nav>
          </div>
      `;
    });
    inventory.innerHTML = output;
  });
})(CreateCars);
$(":checkbox").on("click", false);
const FilterCars = (() => {
  const filter = document.querySelectorAll(".filter-btn");
  filter.forEach(btn => {
    btn.addEventListener("click", event => {
      const value = event.target.dataset.filter;
      const singleCar = document.querySelectorAll(".single-car");
      singleCar.forEach(car => {
        if (value === "all") {
          car.style.display = "block";
        } else {
          !car.classList.contains(value)
            ? (car.style.display = "none")
            : (car.style.display = "block");
        }
      });
    });
  });
})();
///////////////////////////::
function comment(id){
//var comment = document.getElementById("commentsection");
var nom = document.getElementById("nomcmt"+id).value;
var text = document.getElementById("commenttext"+id).value;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
$( `<div class="bg-white p-2"><div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://cdn.onlinewebfonts.com/svg/img_173956.png" width="40"><div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">${nom}</span><span class="date text-black-50">Partagée le ${today}</span></div></div><div class="mt-2"><p class="comment-text">${text}</p></div></div>`).insertBefore( "#commentsection"+id );
document.getElementById("nomcmt"+id).value="";
 document.getElementById("commenttext"+id).value="";
}

////////////////:::::

function jaime(id){
 var x= document.getElementById("nl"+id).innerText;
 var y= document.getElementById("nd"+id).innerText;
 x=321;
 document.getElementById("btn1"+id).style.backgroundColor="green";
 document.getElementById("btn2"+id).style.backgroundColor="white";
  if(y!=100)
  {
     y-=1; 
  }
 document.getElementById("nl"+id).innerHTML=x;
 document.getElementById("nd"+id).innerHTML=y;
 document.getElementById("nd"+id).classList.add("liked");
}
function dislike(id){
  var x= document.getElementById("nd"+id).innerText;
  var y= document.getElementById("nl"+id).innerText;
  x=101;
  document.getElementById("btn1"+id).style.backgroundColor="white";
  document.getElementById("btn2"+id).style.backgroundColor="red";
  if(y!=320)
  {
     y-=1; 
  }
  document.getElementById("nd"+id).innerHTML=x;
  document.getElementById("nl"+id).innerHTML=y;
  document.getElementById("nl"+id).classList.add("liked");
 }

 function clearComments(id){
 document.getElementById("nomcmt"+id).value="";
 document.getElementById("commenttext"+id).value="";
 }
///////////////:
