initialize()
window.onresize=function(){
	let wb = window.innerWidth;
	let hb = window.innerHeight;
	let ob=document.getElementById("out");
	let ob2=document.getElementById("main")
	let ob3=document.getElementById("txtDiv");
	let ob4=document.getElementById("txt")
	let ob5=document.getElementById("bt");
	ob.style.width=wb+"px";
	ob.style.height=hb+"px";
	ob.style.backgroundSize.width=wb+"px";
	ob.style.backgroundSize.width=hb+"px";
	ob2.style.width=(wb/2)+"px"
	ob2.style.height=(hb/2)+"px"
	ob2.style.left=(wb/4)+"px"
	ob2.style.top=(hb/4)+"px"
	ob3.style.height=((Number(ob2.style.height.substr(0,ob2.style.height.length-2)))-80)+"px"
	ob4.style.height=ob3.style.height
	ob5.style.height=(hb/10)+"px"
	ob5.style.lineHeight=ob5.style.height
	document.getElementById("cTxt").style.height=ob5.style.height;
	
};
	 function initialize(){
		 let wb = window.innerWidth;
		 let hb = window.innerHeight;
		 let ob=document.getElementById("out");
		 let ob2=document.getElementById("main")
		 let ob3=document.getElementById("txtDiv");
		 let ob4=document.getElementById("txt");
		 let ob5=document.getElementById("bt");
		 ob.style.width=wb+"px";
		 ob.style.height=hb+"px";
		 ob.style.backgroundSize.width=wb+"px";
		 ob.style.backgroundSize.width=hb+"px";
		 ob2.style.width=(wb/2)+"px"
		 ob2.style.height=(hb/2)+"px"
		 ob2.style.left=(wb/4)+"px"
		 ob2.style.top=(hb/4)-50+"px"
		 ob3.style.height=((Number(ob2.style.height.substr(0,ob2.style.height.length-2)))-80)+"px"
		 ob5.style.height=(hb/10)+"px"
		 ob5.style.lineHeight=ob5.style.height
		 ob4.style.height=ob3.style.height
		 document.getElementById("cTxt").style.height=ob5.style.height;
		 
	 }
function txtBorder(){
	let ob=document.getElementById("main");
	ob.style.backgroundColor="rgba(153, 153, 153, 0.8)"
}
function txtBorder2(){
	let ob=document.getElementById("main");
	ob.style.backgroundColor="rgba(255,255,255,0.5)"
}

function encrypt(){

	let ob=document.getElementById("txt");
	let str = ob.value;
	str=str.replaceAll("enter","e")
	str=str.replaceAll("imes","i")
	str=str.replaceAll("ai","a")
	str=str.replaceAll("ober","o")
	str=str.replaceAll("ufat","u")
	document.getElementById("cTxt").innerText=str;
}
function decode(){
	let ob=document.getElementById("txt");
	let str = ob.value;
	str=str.replaceAll("e","enter")
	str=str.replaceAll("i","imes")
	str=str.replaceAll("a","ai")
	str=str.replaceAll("o","ober")
	str=str.replaceAll("u","ufat")
	document.getElementById("cTxt").innerText=str;
	}
function copy(){
	var selection = window.getSelection();
	selection.removeAllRanges();
	var ele = document.getElementById('cTxt')
	var range = new Range();
	range.selectNodeContents(ele);
	selection.addRange(range);
	document.execCommand('copy')
}