$(document).ready(function() {
  $("#navMenu").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".nav").hasClass("small")) {
      $(".nav").removeClass("small");
	  $(".panel1").addClass("hide");
	  $(".panel2").addClass("hide");
	  $(".panel3").addClass("hide");
	  $(".panel4").addClass("hide");
	   $(".nav").addClass("big");
	   
	
    } else if($(".nav").hasClass("smallFast")) {
      $(".nav").removeClass("smallFast");
	  $(".panel1").addClass("hide");
	  $(".panel2").addClass("hide");
	  $(".panel3").addClass("hide");
	  $(".panel4").addClass("hide");
	   $(".nav").addClass("big");
	   $("#bmia").val('');
	   $("#bmia").addClass("hide");
	   $("#bmih").val('');
	   $("#bmiw").val('');
	   $("#wa").val('');
	   $("#ww").val('');
	   $("#watera").val('');
	   $("#watera").addClass("hide");
	   $("#hra").val('');
	   $("#hrr").val('');
	   $("#hras").val('');
	   $("#hras").addClass("hide");
	   $("#ra").val('');
	   $("#rw").val('');
	   $("#rr").val('');
	   $("#ra").addClass("hide");
    } else{
      $(".nav").addClass("small");
	  $(".nav").removeClass("big");
    }
  });
  
  //bmi panel select
  $("#nav1").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".panel1").hasClass("hide")) {
		$(".panel").addClass("big");
      $(".panel1").removeClass("hide");
	  $(".nav").removeClass("big");
	  $(".nav").addClass("smallFast");
    } else {
      $(".panel1").addClass("hide");
    }
  });
  
  //rmr panel select
   $("#nav2").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".panel2").hasClass("hide")) {
		$(".panel").addClass("big");
      $(".panel2").removeClass("hide");
	  $(".nav").removeClass("big");
	  $(".nav").addClass("smallFast");
    } else {
      $(".panel2").addClass("hide");
    }
  });
  
   $("#nav3").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".panel3").hasClass("hide")) {
		$(".panel").addClass("big");
      $(".panel3").removeClass("hide");
	  $(".nav").removeClass("big");
	  $(".nav").addClass("smallFast");
    } else {
      $(".panel3").addClass("hide");
    }
  });
  
  
  $("#nav4").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".panel4").hasClass("hide")) {
		$(".panel").addClass("big");
      $(".panel4").removeClass("hide");
	  $(".nav").removeClass("big");
	  $(".nav").addClass("smallFast");
    } else {
      $(".panel4").addClass("hide");
    }
  });
  
    $("#bmic").click(function() {
   //$(".nav").toggleClass("small");
	  $(".panel1").addClass("hide");
	  $("#bmia").removeClass("hide");
	  $("#bmia").addClass("big");
	 
    
  });
    $("#wc").click(function() {
   //$(".nav").toggleClass("small");
	  $(".panel2").addClass("hide");
	  $("#watera").removeClass("hide");
	  $("#watera").addClass("big");
	 
    
  });
  
    $("#hrc").click(function() {
   //$(".nav").toggleClass("small");
	  $(".panel3").addClass("hide");
	  $("#hras").removeClass("hide");
	  $("#hras").addClass("big");
	 
    
  });
  
   $("#rc").click(function() {
   //$(".nav").toggleClass("small");
	  $(".panel4").addClass("hide");
	  $("#ra").removeClass("hide");
	  $("#ra").addClass("big");
	 
    
  });
  
});


//bmi calculations
document.getElementById("bmic").onclick = function() {bmi()};

function bmi(){
	var h = document.getElementById('bmih').value;
	var w = document.getElementById('bmiw').value;
	
	var ht = h / 100;
	var bmi1 = w / ht;
	var bmi = Math.round(bmi1 / ht);
	document.getElementById('bmia').innerHTML = "Your BMI is:" + bmi;
}

//water calculations

document.getElementById("wc").onclick = function() {water()};

function water(){
	var wa = document.getElementById('wa').value;
	var ww = document.getElementById('ww').value;
	var water =0;
	if (wa < 16){
		var water1 = 40 * ww;
		var water = water1 / 1000;
	}else if(wa >= 16 && wa <= 30){
		var water1 = 35 * ww;
		water = water1 / 1000;
	}else if(wa >= 31 && wa <= 54){
		var water1 = 30 * ww;
		water = water1 / 1000;
	}else if(wa > 54){
		var water1 = 25 * ww;
		water = water1 / 1000;
	}
	
	document.getElementById('watera').innerHTML = "Your recommended minimum daily water intake is: " + water + " litres";
}

//heart calculations

document.getElementById("hrc").onclick = function() {hr()};

function hr(){
	var hra = document.getElementById('hra').value;
	var hrr = document.getElementById('hrr').value;
	var hrm = 220 - hra;
	var hrres = hrm - hrr;
	var hr1 = 0.7 * hrres;
	var hr2 = +hr1 + +hrr; 
	
	document.getElementById('hras').innerHTML = "Your ideal heart rate for fat burning is: " + hr2;
}

//rep calculations

document.getElementById("rc").onclick = function() {rep()};

function rep(){
	var rw = document.getElementById('rw').value;
	var rr = document.getElementById('rr').value;
	var r1 = 0.0278 * rr;
	var r2 = 1.0278 - r1;
	var rm1 = Math.round(+rw / +r2);
	
	document.getElementById('ra').innerHTML = "Your extimated 1 rep max is: " + rm1 + "kg";
}