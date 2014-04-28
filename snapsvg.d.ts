
interface SnapElement {
	constructor();
	getBBox():Object;
	transform(tstr:string):SnapElement;
	parent():SnapElement;
	add():void;

	appendTo(el:SnapElement):SnapElement;
	prepend(el:SnapElement):SnapElement;
	prependTo(el:SnapElement):SnapElement;
	before(el:SnapElement):SnapElement;
	after(el:SnapElement):SnapElement;
	insertBefore(el:SnapElement):SnapElement;
	insertAfter(el:SnapElement):SnapElement;
	remove():SnapElement;
	select(query:string):SnapElement;
	selectAll(query:string):any;
	asPX(attr:string,value?:string):SnapElement;
	use():SnapElement;
	clone():SnapElement;
	toDefs():SnapElement;
	pattern(x:any,y:any,width:any,height:any):SnapElement;
	marker(x:number,y:number,width:number,height:number,refX:number,refY:number):SnapElement;
	animation(attr:Object,duration:number,easing?:Function,callback?:Function):Object;
	inAnim():Object;
	animate(from:Array<number>,duration:number,easing:Function,callback:Function):Object;
	animate(from:number,duration:number,easing:Function,callback:Function):Object;
	stop():SnapElement;
	data(key:string,value?:any):any;
	removeData(key?:string):Object;
	outerSVG():string;
	innerSVG():string;

	click(handler:Function):Object;
	unclick(handler:Function):Object;
	dblclick(handler:Function):Object;
	undblclick(handler:Function):Object;
	mousedown(handler:Function):Object;
	unmousedown(handler:Function):Object;
	mousemove(handler:Function):Object;
	unmousemove(handler:Function):Object;
	mouseout(handler:Function):Object;
	unmouseout(handler:Function):Object;
	mouseover(handler:Function):Object;
	unmouseover(handler:Function):Object;
	mouseup(handler:Function):Object;
	unmouseup(handler:Function):Object;
	touchstart(handler:Function):Object;
	untouchstart(handler:Function):Object;
	touchmove(handler:Function):Object;
	untouchmove(handler:Function):Object;
	touchend(handler:Function):Object;
	untouchend(handler:Function):Object;
	touchcancel(handler:Function):Object;
	untouchcancel(handler:Function):Object;
	hover(f_in:Function,f_out:Function,icontext?:Object,ocontext?:Object):Object;
	unhover(f_in:Function,f_out:Function):Object;
	drag(onmove:Function,onstart:Function,onend:Function,mcontext?:Object,scontext?:Object,econtext?:Object):Object;
	undrag():void;

	getTotalLength():number;
	getPointAtLength(length:number):Object;
	getSubpath(from:number,to:number):string;
}

interface Filter {
	blur(x:number,y?:number):string;
	shadow(dx:number,dy:number,blur?:number,color?:string):string;
	grayscale(amount:number):string;
	sepia(amount:number):string;
	saturate(amount:number):string;
	hueRotate(angle:number):string;
	invert(amount:number):string;
	brightness(amount:number):string;
	contrast(amount:number):string;
}

interface Path {
	getTotalLength(path:string):number;
	getPointAtLength(path:string,length:number):Object;
	getSubpath(path:string,from:number,to:number):string;
	findDotsAtSegment(p1x:number,p1y:number,c1x:number,
	                  c1y:number,c2x:number,c2y:number,
	                  p2x:number,p2y:number,t:number):Object;
	bezierBBox(...args:number[]):Object;
	bezierBBox(bez:Array<number>):Object;
	isPointInsideBBox(bbox:string,x:string,y:string):boolean;
	isBBoxIntersect(bbox1:string,bbox2:string):boolean;
	intersection(path1:string,path2:string):Array<any>;
	isPointInside(path:string,x:number,y:number):boolean;
	getBBox(path:string):Object;
	toRelative(path:string):Array<any>;
	toAbsolute(path:string):Array<any>;
	toCubic(pathString:string):Array<any>;
	toCubic(pathString:Array<string>):Array<any>;
	map(path:string,matrix:Matrix):string;
	map(path:string,matrix:Object):string;
}

//interface Set<T> {
//	push(...args:any[]):SnapElement;
//	pop(...args:any[]):SnapElement;
//	forEach(callback:Function,thisArg:Object):Object;
//	clear();
//	splice(index:number,cont:number,insertion?:Object[]):Object;
//	exclude(element:SnapElement):boolean;
//}

interface Matrix {
	add(a:number,b:number,c:number,d:number,e:number,f:number):void;
	add(matrix:Matrix):void;
	add(matrix:Object):void;

	invert():Matrix;
	clone():Matrix;
	translate(x:number,y:number):void;
	scale(x:number,y?:number,cx?:number,cy?:number):void;
	rotate(a:number,x:number,y:number):void;
	x(x:number,y:number):number;
	y(x:number,y:number):number;

	split():Object;
	toTransformString():string;

}



interface Fragment {
	select():SnapElement;
	selectAll():SnapElement;
}

interface Paper {
	el(name:string, attr:Object):SnapElement;
	rect(x:number,y:number,width:number,height:number,rx?:number,ry?:number):Object;
	circle(x:number,y:number,r:number):Object;
	image(src:string,x:number,y:number,width:number,height:number):Object;
	ellipse(x:number,y:number,rx:number,ry:number):Object;
	path(pathString?:string):void;
	g(varargs:any):Object;
	group(varargs:any):Object;
	text(x:number,y:number,text:string):Object;
	text(x:number,y:number,text:Array<string>):Object;
	line(x1:number,y1:number,x2:number,y2:number):Object;
	polyline(varargs:any[]):Object;
	polygon(varargs:any[]):Object;
	gradient(gradient:string):Object;
	clear():void;
	select(query:string):SnapElement;
	selectAll(query:string):any;
}

interface mina {
	constructor(a:number, A:number, b:number, B:number, get:Function, set:Function, easing?:Function);

	time():number;
	getById(id:string):Object;
	linear(n:number):number;
	easeout(n:number):number;
	easein(n:number):number;
	easeinout(n:number):number;
	backin(n:number):number;
	backout(n:number):number;
	elastic(n:number):number;
	bounce(n:number):number;
	filter(filstr:string):Object;
}

declare class Snap {
	constructor(width:number,height:number);
	constructor(query:string);
	constructor(DOM:any);
	filter:Filter;
	path:Path;

	format(token:string,json:Object):string;
	rad(deg:number):number;
	deg(rad:number):number;
	angle(x1:number,y1:number,x2:number,y2:number,x3?:number,y3?:number):number;
	is(o:any,type:string):boolean;
	snapTo(values:Array<number>,value:number,tolerance?:number):number;

	Matrix(a:number,b:number,c:number,d:number,e:number,f:number):Matrix;
	Matrix(svgMatrix:SVGMatrix):Matrix;

	getRGB(color:string):Object;
	hsb(h:number,s:number,b:number):string;
	hsl(h:number,s:number,l:number):string;
	rgb(r:number,g:number,b:number):string;
	color(clr:string):Object;
	hsb2rgb(h:number,s:number,v:number):Object;
	hsl2rgb(h:number,s:number,l:number):Object;
	rgb2hsb(r:number,g:number,b:number):Object;
	rgb2hsl(r:number,g:number,b:number):Object;

	parsePathString(pathString:string):Array<any>;
	parsePathString(pathString:Array<string>):Array<any>;
	parseTransformString(TString:string):Array<any>;
	parseTransformString(TString:Array<string>):Array<any>;
	select(query:string):SnapElement;
	selectAll(query:string):any;
	attr(params:string):any;
	attr(params:Object):any;
	animate(from:number,to:number,setter:Function,duration:number,easing:Function,callback:Function):Object;
	animate(from:Array<number>,to:Array<number>,setter:Function,duration:number,easing:Function,callback:Function):Object;
	animate(from:number,to:Array<number>,setter:Function,duration:number,easing:Function,callback:Function):Object;
	animate(from:Array<number>,to:number,setter:Function,duration:number,easing:Function,callback:Function):Object;
	parse(svg:string):Fragment;
	fragment(varargs:any):Fragment;
	ajax(url:string,postData:string,callback:Function,scope?:Object):XMLHttpRequest;
	ajax(url:string,postData:Object,callback:Function,scope?:Object):XMLHttpRequest;
	ajax(url:string,callback:Function,scope?:Object):XMLHttpRequest;
	load(url:string,callback:Function,scope?:Object):XMLHttpRequest;
	getElementByPoint(x:number,y:number):Object;
	plugin(f:Function):void;
}