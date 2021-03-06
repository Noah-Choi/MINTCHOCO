/**
 * 담당 : 장세진
 */
var modify_mode = 0;
var chkbox_count = 0;

function searchbar(element) {
	var m = element;
	var list = document.getElementsByClassName('con-menu-list')[0];
	var searchInput = document.getElementsByClassName('con-menu-input')[0];
	var searchBack = document.getElementsByClassName('con-menu-search')[0];
	
	if (element == 'on') {
		document.getElementsByClassName("con-menu-input")[0].focus();
		searchInput.style.display = 'block';
		searchBack.style.display = 'block';
		list.style.display = 'none';
	} else if (element == 'off') {
		document.getElementsByClassName("con-menu-input")[0].value = "";
		search();
		searchInput.style.display = 'none';
		searchBack.style.display = 'none';
		list.style.display = 'block';
	}
}

function search(){

    var input, search_target, item, i;

    input = document.getElementsByClassName("con-menu-input")[0].value.toUpperCase();
    item = document.getElementsByTagName("article");

    for(i=0;i<item.length;i++){
    	search_target = item[i].getElementsByClassName("con-search-target");
	    if(search_target[0].innerHTML.toUpperCase().indexOf(input) > -1){
	      item[i].style.display = "flex";
	    } else {
	      item[i].style.display = "none";
	    }
    }
}

function textAlign(element) {
	var m = element;
	var text = document.getElementsByClassName('menu-description-subject')[0];
	if (m == 'reg') {
		text.innerText='회원님이 등록한 날짜 순으로 정렬합니다.';	
	} else if(m == 'rel') {
		text.innerText='영화 개봉 날짜 순으로 정렬합니다.';
	} else if(m == 'sub') {
		text.innerText='영화 제목 순으로 정렬합니다.';
	} else if(m == 'star') {
		text.innerText='부여한 점수 순으로 정렬합니다.';
	} 
	
}

function modifyOn() {
	var modifyon = document.getElementsByClassName('con-menu-modifyon')[0];
	var modifyoff = document.getElementsByClassName('con-menu-modifyoff')[0];
	modifyon.style.display = 'block';
	modifyoff.style.display = 'none';
	modify_mode = 1;
}

function modifyOff() {
	var modifyon = document.getElementsByClassName('con-menu-modifyon')[0];
	var modifyoff = document.getElementsByClassName('con-menu-modifyoff')[0];
	var chkbox = document.getElementsByName("chkbox");
	var leng = chkbox.length;
    for (i=0; i<leng; i++) {
    	document.getElementsByName("chkbox")[i].checked = false;
    }
    chkbox_count = 0;
	modifyoff.style.display = 'block';
	modifyon.style.display = 'none';
	modify_mode = 0;

    var display_cnt = document.getElementsByClassName('con-chkbox-cnt')[0];
    display_cnt.innerText = '0';
}

function allcheck() {
	chkbox_count = 0;
	var chkbox = document.getElementsByName("chkbox");    
	var leng = chkbox.length;    
	
    for (i=0; i<leng; i++) {
    	if (document.getElementsByName("chkbox")[i].checked == true) {
    		chkbox_count++;
    	}
    }
    
    if (leng == chkbox_count) {
    	for (i=0; i<leng; i++) {
    		document.getElementsByName("chkbox")[i].checked = false;
    	}
    	
    	chkbox_count = 0;
    } else {
    	for (i=0; i<leng; i++) {
    		document.getElementsByName("chkbox")[i].checked = true;
    	}
    	chkbox_count = leng;
    }
    
    var display_cnt = document.getElementsByClassName('con-chkbox-cnt')[0];
    display_cnt.innerText = chkbox_count;
}

function chk_enable(element) {
	if (modify_mode == 0) {
		return;
	}
	var m = element;
	var assess = m.children[0];
	if (assess.checked == true) {
		chkbox_count--;
		assess.checked = false;
	} else {
    	chkbox_count++;
		assess.checked = true;
	}
	
    var display_cnt = document.getElementsByClassName('con_chkbox_cnt')[0];
    display_cnt.innerText = chkbox_count;
}

function chk_cnt() {
    var chkbox = document.getElementsByName("chkbox");
    var leng = chkbox.length;
    var checked = 0;
    for (i=0; i<leng; i++) {
        if (chkbox[i].checked == true) {
            checked += 1;
        }
    }
    if (checked<1) {
        alert("항목을 1개 이상 선택해주세요.");
        return false;
    }
}

function modal(element){
	var m = element;
	var inf = document.getElementsByClassName('con-conf-modifyINF-wrap')[0];
	var pwd = document.getElementsByClassName('con-conf-modifyPW-wrap')[0];
	var bg = document.getElementsByClassName('con-modal-bg')[0];
	
	if (m == 'INF') {
		inf.style.display = 'block';
		pwd.style.display = 'none';
		bg.style.display = 'block';
	} else if(m == 'PWD') {
		inf.style.display = 'none';
		pwd.style.display = 'block';
		bg.style.display = 'block';
	} else if(m == 'X') {
		inf.style.display = 'none';
		pwd.style.display = 'none';	
		bg.style.display = 'none';
	}
}

function checkModify(){
	var btn = document.getElementsByClassName('st1-80-50')[0];
	var modifyINF = document.getElementsByClassName('con-conf-modifyINF-wrap')[0];
	var sfmodal = document.getElementsByClassName('con-modal-bg-check')[0];
	var successWindow = document.getElementsByClassName('con-conf-confirmed-ok')[0];
	var failWindow = document.getElementsByClassName('con-conf-confirmed-failed')[0];
	var nickname = document.getElementsByClassName('conf-modify-nickname')[0];
	var male = document.getElementsByClassName('conf-modify-male')[0];
	var female = document.getElementsByClassName('conf-modify-female')[0];
	var age = document.getElementsByClassName('conf-modify-age')[0];
	var text = document.getElementsByClassName('con-conf-status')[0];
	if(nickname.value==""){
		btn.disabled = true;
		sfmodal.style.display = 'block';
		failWindow.style.display = 'block';
		nickname.focus();
		text.innerText = "별명이 입력되지 않았습니다."; 
		hide('fail');
		return false;
	} else if(!male.checked && !female.checked){
		sfmodal.style.display = 'block';
		failWindow.style.display = 'block';
		text.innerText = "성별이 선택되지 않았습니다.";
		hide('fail');
		return false;
	} else if(age.value==""){
		sfmodal.style.display = 'block';
		failWindow.style.display = 'block';
		age.focus();
		text.innerText = "나이가 선택되지 않았습니다."; 
		hide('fail');
		return false;
	} else {
		successWindow.style.display = 'block'; 
		hide('success');
		return true;
	} 
}

function checkModifyPW(){
	var btn = document.getElementsByClassName('st1-80-50')[1];
	var modifyPW = document.getElementsByClassName('con-conf-modifyPW-wrap')[0];
	var sfmodal = document.getElementsByClassName('con-modal-bg-check')[1];
	var successWindow = document.getElementsByClassName('con-conf-confirmed-ok')[0];
	var failWindow = document.getElementsByClassName('con-conf-confirmed-failed')[0];
	var newPW = document.getElementsByClassName('conf-modify-newPW')[0];
	var newPWChk = document.getElementsByClassName('conf-modify-newPWChk')[0];
	var text = document.getElementsByClassName('con-conf-status')[0];
	if(newPW.value==""){
		btn.disabled = true;
		sfmodal.style.display = 'block';
		failWindow.style.display = 'block';
		newPW.focus();
		text.innerText = "새 비밀번호가 입력되지 않았습니다."; 
		hide('fail');
		return false;
	} else if(newPWChk.value==""){
		sfmodal.style.display = 'block';
		failWindow.style.display = 'block';
		newPWChk.focus();
		text.innerText = "확인용 비밀번호가 입력되지 않았습니다.";
		hide('fail');
		return false;
	} else if(newPW.value!=newPWChk.value){
		sfmodal.style.display = 'block';
		failWindow.style.display = 'block';
		newPWChk.focus();
		text.innerText = "비밀번호가 일치하지 않습니다."; 
		hide('fail');
		return false;
	} else {
		successWindow.style.display = 'block'; 
		hide('success');
		return true;
	} 
}

function hide(element){
	var btn = document.getElementsByClassName('st1-80-50')[0];
	var btn1 = document.getElementsByClassName('st1-80-50')[1];
	var sfmodal = document.getElementsByClassName('con-modal-bg-check')[0];
	var sfmodal1 = document.getElementsByClassName('con-modal-bg-check')[1];
	var e = element;
	var result;
	if (e == 'fail') {
		result = document.getElementsByClassName('con-conf-confirmed-failed')[0]
	} else if (e == 'success') {
		result = document.getElementsByClassName('con-conf-confirmed-ok')[0]
	}
	setTimeout(function() {
		result.style.display = 'none';
		sfmodal.style.display = 'none';
		sfmodal1.style.display = 'none';
		btn.disabled = false;
		btn1.disabled = false;
	},2000);
}

function ageCount() {
	for(var i=1; i<151; i++) {
		var age = document.createElement("option");
		var ageText = document.createTextNode(i);
		age.setAttribute('value',i);
		age.appendChild( ageText );
		document.getElementsByClassName("conf-modify-age")[0].appendChild(age);
	}
}

function sorting(element) {
	var e = element;
	var sort = document.getElementsByClassName("con-alignInput")[0];
	var sortForm = document.getElementsByClassName("con-sortList")[0];
	if (e=="rel") {
		sort.setAttribute('value','rel');
		sortForm.submit();
	} else if (e=="sub") {
		sort.setAttribute('value','sub');
		sortForm.submit();
	} else if (e=="reg") {
		sort.setAttribute('value','reg');
		sortForm.submit();
	} else if (e=="star") {
		sort.setAttribute('value','star');
		sortForm.submit();
	}
}