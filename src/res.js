const WIDTH = 375;//页面尺寸
const setView = () =>{
	// 设置html的fontsize
	document.documentElement.style.fontSize = 
	(100 * document.documentElement.clientWidth) / WIDTH + 'px';
}
window.onresize = setView;
setView();