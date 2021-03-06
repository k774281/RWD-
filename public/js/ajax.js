function ajax({
	url, 
	type,
	data,
	dataType
}){
  return new Promise(
		function(resolve,reject){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				if(dataType!==undefined
					&&dataType.toLowerCase()==="json")
					var res=JSON.parse(xhr.responseText)
				else
					var res=xhr.responseText
					
				resolve(res);
			}
		}
		if(type.toLowerCase()=="get"&&data!=undefined){
			url+="?"+data;
		}
		xhr.open(type,url,true);
		if(type.toLowerCase()==="post")
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		if(type.toLowerCase()=="post"&&data!==undefined)
			xhr.send(data);
		else
			xhr.send(null);
  })
}
/*
(async function(){
	//ES7
	var res=await ajax({
		url:"http://localhost:3000/index/",
		type:"get",
		dataType:"json"
	})
	//ES6
	.then(res=>{
		... ...
	})
})();
*/