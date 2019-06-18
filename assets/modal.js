var polya_reset = 0;

function scroll_stop() {
document.body.style.overflowY = 'hidden';
$('#all_blocks').addClass('blur_set');
document.onmousewheel=document.onwheel=function(){ 
	return false;
};
document.addEventListener("MozMousePixelScroll",function(){return false},false);
document.onkeydown=function(e) {
	if (e.keyCode>=33&&e.keyCode<=40) return false;
	if (e.keyCode==27) {$('#zzz_1').fadeOut(0); scroll_start(); knopka_reset();  polya_reset_func(); knopka_reset_all();};
}
}
function scroll_start() {
document.body.style.overflowY = 'auto';
$('#all_blocks').removeClass('blur_set');
document.onmousewheel=document.onwheel=function(){ 
	return true;
};
document.addEventListener("MozMousePixelScroll",function(){return true},true);
document.onkeydown=function(e) {
	if (e.keyCode>=33&&e.keyCode<=40) return true;
}
}

function knopka_reset() {
$(pole1_1).removeClass('no1_1').addClass('ok1_1');
$(pole1_2).removeClass('no1_2').addClass('ok1_2');
}
function knopka_reset_all() {
document.getElementById('zzz_info_in1').style.display = 'block';
document.getElementById('zzz_info_ok1').style.display = 'none';
}
function polya_reset_func() {
if (polya_reset == 1) {
polya_reset = 0;
document.getElementById('pole1_1').value = 'Ваше имя';
document.getElementById('pole1_2').value = 'Телефон';
}
}
function knopka_send1() {
if ($('#pole1_1').val() == 'Ваше имя' || $('#pole1_2').val() == 'Телефон') {
if ($('#pole1_1').val() == 'Ваше имя') {$(pole1_1).removeClass('ok1_1').addClass('no1_1');}
if ($('#pole1_2').val() == 'Телефон') {$(pole1_2).removeClass('ok1_2').addClass('no1_2');}
return false;
}

polya_reset = 1;

document.getElementById('zzz_info_in1').style.display = 'none';
document.getElementById('zzz_info_ok1').style.display = 'block';

var q1 	 = $('#pole1_1').val();
var q2 	 = $('#pole1_2').val();
$.ajax({url: "action.php", type: "post", dataType: "json", data: {

"q1": 	q1,
"q2": 	q2

},});

}







document.onclick = function(ev1)
{
  myDiv1_1 = document.getElementById('zzz_info_in1');
  myDiv1_2 = document.getElementById('zzz_info1');
  if (ev1.target.id != myDiv1_1.id && ev1.target.id ==  myDiv1_2.id) {$('#zzz_1').fadeOut(0); scroll_start(); knopka_reset(); polya_reset_func(); knopka_reset_all();};
}