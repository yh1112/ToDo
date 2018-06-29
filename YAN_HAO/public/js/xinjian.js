function hide() {
	document.getElementById("all").style.display = "none";
	document.getElementById("xinjian").style.display = "none";
	document.getElementById("new_list").style.display = "none";
}

function show(xinjian) {
	document.getElementById("all").style.display = "block";
	document.getElementById(xinjian).style.display = "block";
}

function newList(xinjian) {
	var xin = document.getElementById(xinjian);
	if(xin.style.display == "none") xin.style.display = "block";
	else xin.style.display = "none";
}

function del(id, list) {
	location.href = "/delete?id=" + id + "&list=" + list;
}

function remove(id, list) {
	location.href = "/remove?id=" + id + "&list=" + list;
}

function search_check() {
	var search = document.getElementById("search");
	if(search.value == "") return false;
	return true;
}

function small_check() {
	var list = document.getElementById("listName");
	var small_tip = document.getElementById("small_tip");
	if(list.value == "") {
		small_tip.innerHTML = "请输入合法的列表名";
		return false;
	}
	return true;
}

function check() {
	var title = document.getElementById("title");
	var year = document.getElementById("year");
	var month = document.getElementById("month");
	var day = document.getElementById("day");
	var tip = document.getElementById("tip");
	if(title.value == "") {
		tip.innerHTML = "请输入合法的标题";
		return false;
	}
	if(year.value == "") {
		tip.innerHTML = "请输入合法的年份";
		return false;
	}
	if(month.value == "") {
		tip.innerHTML = "请输入合法的月份";
		return false;
	}
	if(day.value == "") {
		tip.innerHTML = "请输入合法的日期";
		return false;
	}
	return true;
}

function logout(event){
	var logout = document.getElementById("logout");
	event.preventDefault();
	logout.style.display = "block";
	logout.style.top = event.clientY + "px";
	logout.style.left = event.clientX + "px";
	document.getElementById("a_logout").href = "/logout";
	document.addEventListener("click", function(event) {
		logout.style.display = "none";
	});
}

function deleteList(id){
	location.href = "/deleteList?id="+id;
}
