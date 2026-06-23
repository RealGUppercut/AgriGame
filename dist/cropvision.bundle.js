(()=>{var Ud=Object.defineProperty;var Fd=(r,e)=>{for(var t in e)Ud(r,t,{get:e[t],enumerable:!0})};var iu=0,Nl=1,nu=2;var cs=1,Ka=2,cr=3,hr=0,kt=1,wi=2,ii=0,hs=1,us=2,Ul=3,Fl=4,ru=5;var ur=100,su=101,au=102,ou=103,lu=104,cu=200,hu=201,uu=202,du=203,pu=204,mu=205,fu=206,gu=207,_u=208,vu=209,xu=210,yu=211,Mu=212,Su=213,bu=214,Ol=0,Bl=1,zl=2,$a=3,kl=4,Gl=5,Vl=6,Hl=7,Tu=0,wu=1,Eu=2,hi=0,ds=1,ps=2,ms=3,Tn=4,fs=5,gs=6,_s=7;var Wl=300,dr=301,wn=302,Qa=303,eo=304,vs=306,xn=1e3,$i=1001,ha=1002,Kt=1003,Au=1004;var xs=1005;var It=1006,to=1007;var En=1008;var jt=1009,Xl=1010,jl=1011,pr=1012,io=1013,ki=1014,ni=1015,St=1016,no=1017,ro=1018,mr=1020,ql=35902,Yl=35899,Cu=1021,Ru=1022,ui=1023,on=1026,An=1027,so=1028,ao=1029,Cn=1030,Zl=1031;var Jl=1033,oo=33776,lo=33777,co=33778,ho=33779,Kl=35840,$l=35841,Ql=35842,ec=35843,tc=36196,ic=37492,nc=37496,rc=37488,sc=37489,uo=37490,ac=37491,oc=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,pc=37814,mc=37815,fc=37816,gc=37817,_c=37818,vc=37819,xc=37820,yc=37821,Mc=36492,Sc=36494,bc=36495,Tc=36283,wc=36284,po=36285,Ec=36286;var Nr=2300,ua=2301,la=2302,Sl=2303,bl=2400,Tl=2401,wl=2402;var Ac=0,Pu=1,Rn="",Rt="srgb",Ur="srgb-linear",Fr="linear",Je="srgb";var vn=7680;var Iu=512,Lu=513,Du=514,mo=515,Nu=516,Uu=517,fo=518,Fu=519,El=35044;var Cc="300 es",Fi=2e3,Jn=2001;function Od(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ou(){let r=Or("canvas");return r.style.display="block",r}var Eh={},Kn=null;function Rc(...r){let e="THREE."+r.shift();Kn?Kn("log",e,...r):console.log(e,...r)}function Bu(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function we(...r){let e="THREE."+(r=Bu(r)).shift();if(Kn)Kn("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ee(...r){let e="THREE."+(r=Bu(r)).shift();if(Kn)Kn("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function da(...r){let e=r.join(" ");e in Eh||(Eh[e]=!0,we(...r))}function zu(r,e,t){return new Promise(function(i,n){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}var ku={[Ol]:1,[zl]:6,[kl]:7,[$a]:5,[Bl]:0,[Vl]:2,[Hl]:4,[Gl]:3},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ca=Math.PI/180,pa=180/Math.PI;function fr(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(At[255&r]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[255&e]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[63&t|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[255&i]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Ve(r,e,t){return Math.max(e,Math.min(t,r))}function Bd(r,e){return(r%e+e)%e}function Yo(r,e,t){return(1-t)*r+t*e}function Tr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Nc=class Nc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nc.prototype.isVector2=!0;var Q=Nc,$t=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],m=s[a+0],p=s[a+1],_=s[a+2],d=s[a+3];if(u!==d||l!==m||c!==p||h!==_){let v=l*m+c*p+h*_+u*d;v<0&&(m=-m,p=-p,_=-_,d=-d,v=-v);let f=1-o;if(v<.9995){let g=Math.acos(v),y=Math.sin(g);f=Math.sin(f*g)/y,l=l*f+m*(o=Math.sin(o*g)/y),c=c*f+p*o,h=h*f+_*o,u=u*f+d*o}else{l=l*f+m*o,c=c*f+p*o,h=h*f+_*o,u=u*f+d*o;let g=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=g,c*=g,h*=g,u*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],m=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+h*u+l*p-c*m,e[t+1]=l*_+h*m+c*u-o*p,e[t+2]=c*_+h*p+o*m-l*u,e[t+3]=h*_-o*u-l*m-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),m=l(i/2),p=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=m*h*u+c*p*_,this._y=c*p*u-m*h*_,this._z=c*h*_+m*p*u,this._w=c*h*u-m*p*_;break;case"YXZ":this._x=m*h*u+c*p*_,this._y=c*p*u-m*h*_,this._z=c*h*_-m*p*u,this._w=c*h*u+m*p*_;break;case"ZXY":this._x=m*h*u-c*p*_,this._y=c*p*u+m*h*_,this._z=c*h*_+m*p*u,this._w=c*h*u-m*p*_;break;case"ZYX":this._x=m*h*u-c*p*_,this._y=c*p*u+m*h*_,this._z=c*h*_-m*p*u,this._w=c*h*u+m*p*_;break;case"YZX":this._x=m*h*u+c*p*_,this._y=c*p*u+m*h*_,this._z=c*h*_-m*p*u,this._w=c*h*u-m*p*_;break;case"XZY":this._x=m*h*u-c*p*_,this._y=c*p*u-m*h*_,this._z=c*h*_+m*p*u,this._w=c*h*u+m*p*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],m=i+o+u;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uc=class Uc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uc.prototype.isVector3=!0;var A=Uc,Zo=new A,Ah=new $t,Fc=class Fc{constructor(e,t,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],m=i[2],p=i[5],_=i[8],d=n[0],v=n[3],f=n[6],g=n[1],y=n[4],T=n[7],E=n[2],M=n[5],N=n[8];return s[0]=a*d+o*g+l*E,s[3]=a*v+o*y+l*M,s[6]=a*f+o*T+l*N,s[1]=c*d+h*g+u*E,s[4]=c*v+h*y+u*M,s[7]=c*f+h*T+u*N,s[2]=m*d+p*g+_*E,s[5]=m*v+p*y+_*M,s[8]=m*f+p*T+_*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,m=o*l-h*s,p=c*s-a*l,_=t*u+i*m+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/_;return e[0]=u*d,e[1]=(n*c-h*i)*d,e[2]=(o*i-n*a)*d,e[3]=m*d,e[4]=(h*t-n*l)*d,e[5]=(n*s-o*t)*d,e[6]=p*d,e[7]=(i*l-c*t)*d,e[8]=(a*t-i*s)*d,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fc.prototype.isMatrix3=!0;var Fe=Fc,Jo=new Fe,Ch=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zd(){let r={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(n,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Je&&(n.r=Ui(n.r),n.g=Ui(n.g),n.b=Ui(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===""?Fr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Ur]:{primaries:e,whitePoint:i,transfer:Fr,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),r}var Ge=zd();function Ui(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Zn(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var On,ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{On===void 0&&(On=Or("canvas")),On.width=e.width,On.height=e.height;let n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=On}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Ui(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ui(t[i]/255)):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kd=0,$n=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Ko(n[a].image)):s.push(Ko(n[a]))}else s=Ko(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ko(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ma.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var Gd=0,$o=new A,Nt=class r extends Si{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=fr(),this.name="",this.source=new $n(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i:we(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=Wl,Nt.DEFAULT_ANISOTROPY=1;var Oc=class Oc{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],m=l[1],p=l[5],_=l[9],d=l[2],v=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(u-d)<.01&&Math.abs(_-v)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+d)<.1&&Math.abs(_+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(p+1)/2,E=(f+1)/2,M=(h+m)/4,N=(u+d)/4,F=(_+v)/4;return y>T&&y>E?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=M/i,s=N/i):T>E?T<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(T),i=M/n,s=F/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=N/s,n=F/s),this.set(i,n,s,t),this}let g=Math.sqrt((v-_)*(v-_)+(u-d)*(u-d)+(m-h)*(m-h));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(u-d)/g,this.z=(m-h)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oc.prototype.isVector4=!0;var Ke=Oc,fa=class extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new Nt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $n(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},lt=class extends fa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Br=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ja=class Ja{constructor(e,t,i,n,s,a,o,l,c,h,u,m,p,_,d,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,m,p,_,d,v)}set(e,t,i,n,s,a,o,l,c,h,u,m,p,_,d,v){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=m,f[3]=p,f[7]=_,f[11]=d,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ja().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),a=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let m=a*h,p=a*u,_=o*h,d=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=m-d*c,t[9]=-o*l,t[2]=d-m*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let m=l*h,p=l*u,_=c*h,d=c*u;t[0]=m+d*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=d+m*o,t[10]=a*l}else if(e.order==="ZXY"){let m=l*h,p=l*u,_=c*h,d=c*u;t[0]=m-d*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=d-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let m=a*h,p=a*u,_=o*h,d=o*u;t[0]=l*h,t[4]=_*c-p,t[8]=m*c+d,t[1]=l*u,t[5]=d*c+m,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let m=a*l,p=a*c,_=o*l,d=o*c;t[0]=l*h,t[4]=d-m*u,t[8]=_*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+_,t[10]=m-d*u}else if(e.order==="XZY"){let m=a*l,p=a*c,_=o*l,d=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=m*u+d,t[5]=a*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=d*u+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Hd)}lookAt(e,t,i){let n=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Wi.crossVectors(i,Vt),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Wi.crossVectors(i,Vt)),Wi.normalize(),Fs.crossVectors(Vt,Wi),n[0]=Wi.x,n[4]=Fs.x,n[8]=Vt.x,n[1]=Wi.y,n[5]=Fs.y,n[9]=Vt.y,n[2]=Wi.z,n[6]=Fs.z,n[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],m=i[9],p=i[13],_=i[2],d=i[6],v=i[10],f=i[14],g=i[3],y=i[7],T=i[11],E=i[15],M=n[0],N=n[4],F=n[8],P=n[12],I=n[1],H=n[5],O=n[9],j=n[13],k=n[2],z=n[6],q=n[10],X=n[14],oe=n[3],ue=n[7],Te=n[11],xe=n[15];return s[0]=a*M+o*I+l*k+c*oe,s[4]=a*N+o*H+l*z+c*ue,s[8]=a*F+o*O+l*q+c*Te,s[12]=a*P+o*j+l*X+c*xe,s[1]=h*M+u*I+m*k+p*oe,s[5]=h*N+u*H+m*z+p*ue,s[9]=h*F+u*O+m*q+p*Te,s[13]=h*P+u*j+m*X+p*xe,s[2]=_*M+d*I+v*k+f*oe,s[6]=_*N+d*H+v*z+f*ue,s[10]=_*F+d*O+v*q+f*Te,s[14]=_*P+d*j+v*X+f*xe,s[3]=g*M+y*I+T*k+E*oe,s[7]=g*N+y*H+T*z+E*ue,s[11]=g*F+y*O+T*q+E*Te,s[15]=g*P+y*j+T*X+E*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],m=e[10],p=e[14],_=e[3],d=e[7],v=e[11],f=e[15],g=l*p-c*m,y=o*p-c*u,T=o*m-l*u,E=a*p-c*h,M=a*m-l*h,N=a*u-o*h;return t*(d*g-v*y+f*T)-i*(_*g-v*E+f*M)+n*(_*y-d*E+f*N)-s*(_*T-d*M+v*N)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],m=e[10],p=e[11],_=e[12],d=e[13],v=e[14],f=e[15],g=t*o-i*a,y=t*l-n*a,T=t*c-s*a,E=i*l-n*o,M=i*c-s*o,N=n*c-s*l,F=h*d-u*_,P=h*v-m*_,I=h*f-p*_,H=u*v-m*d,O=u*f-p*d,j=m*f-p*v,k=g*j-y*O+T*H+E*I-M*P+N*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/k;return e[0]=(o*j-l*O+c*H)*z,e[1]=(n*O-i*j-s*H)*z,e[2]=(d*N-v*M+f*E)*z,e[3]=(m*M-u*N-p*E)*z,e[4]=(l*I-a*j-c*P)*z,e[5]=(t*j-n*I+s*P)*z,e[6]=(v*T-_*N-f*y)*z,e[7]=(h*N-m*T+p*y)*z,e[8]=(a*O-o*I+c*F)*z,e[9]=(i*I-t*O-s*F)*z,e[10]=(_*M-d*T+f*g)*z,e[11]=(u*T-h*M-p*g)*z,e[12]=(o*P-a*H-l*F)*z,e[13]=(t*H-i*P+n*F)*z,e[14]=(d*y-_*E-v*g)*z,e[15]=(h*E-u*y+m*g)*z,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,m=s*c,p=s*h,_=s*u,d=a*h,v=a*u,f=o*u,g=l*c,y=l*h,T=l*u,E=i.x,M=i.y,N=i.z;return n[0]=(1-(d+f))*E,n[1]=(p+T)*E,n[2]=(_-y)*E,n[3]=0,n[4]=(p-T)*M,n[5]=(1-(m+f))*M,n[6]=(v+g)*M,n[7]=0,n[8]=(_+y)*N,n[9]=(v-g)*N,n[10]=(1-(m+d))*N,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Bn.set(n[0],n[1],n[2]).length(),o=Bn.set(n[4],n[5],n[6]).length(),l=Bn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,u=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-n),m=(t+e)/(t-e),p=(i+n)/(i-n),_,d;if(l)_=s/(a-s),d=a*s/(a-s);else if(o===Fi)_=-(a+s)/(a-s),d=-2*a*s/(a-s);else{if(o!==Jn)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);_=-a/(a-s),d=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=d,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),m=-(t+e)/(t-e),p=-(i+n)/(i-n),_,d;if(l)_=1/(a-s),d=a/(a-s);else if(o===Fi)_=-2/(a-s),d=-(a+s)/(a-s);else{if(o!==Jn)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);_=-1/(a-s),d=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=d,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ja.prototype.isMatrix4=!0;var Be=Ja,Bn=new A,oi=new Be,Vd=new A(0,0,0),Hd=new A(1,1,1),Wi=new A,Fs=new A,Vt=new A,Ph=new Be,Ih=new $t,Oi=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],m=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Wd=0,Lh=new A,zn=new $t,Ri=new Be,Os=new A,wr=new A,Xd=new A,jd=new $t,Dh=new A(1,0,0),Nh=new A(0,1,0),Uh=new A(0,0,1),Fh={type:"added"},qd={type:"removed"},kn={type:"childadded",child:null},Qo={type:"childremoved",child:null},ft=class r extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new Oi,i=new $t,n=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Os.copy(e):Os.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(wr,Os,this.up):Ri.lookAt(Os,wr,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),zn.setFromRotationMatrix(Ri),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ee("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),kn.child=e,this.dispatchEvent(kn),kn.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),m=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};ft.DEFAULT_UP=new A(0,1,0),ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},Qn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let d of e.hand.values()){let v=t.getJointPose(d,i),f=this._getHandJoint(c,d);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],m=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&m>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function el(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=Bd(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=el(a,s,e+1/3),this.g=el(a,s,e),this.b=el(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,n),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=Gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ge.workingToColorSpace(Ct.copy(this),e),65536*Math.round(Ve(255*Ct.r,0,255))+256*Math.round(Ve(255*Ct.g,0,255))+Math.round(Ve(255*Ct.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Ct.copy(this),t);let i=Ct.r,n=Ct.g,s=Ct.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Rt){Ge.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,i=Ct.g,n=Ct.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Bs);let i=Yo(Xi.h,Bs.h,t),n=Yo(Xi.s,Bs.s,t),s=Yo(Xi.l,Bs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Ce;Ce.NAMES=Gu;var kr=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Gr=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new A,Pi=new A,tl=new A,Ii=new A,Gn=new A,Vn=new A,Oh=new A,il=new A,nl=new A,rl=new A,sl=new Ke,al=new Ke,ol=new Ke,Ni=class r{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),li.subVectors(e,t),n.cross(li);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){li.subVectors(n,t),Pi.subVectors(i,t),tl.subVectors(e,t);let a=li.dot(li),o=li.dot(Pi),l=li.dot(tl),c=Pi.dot(Pi),h=Pi.dot(tl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let m=1/u,p=(c*l-o*h)*m,_=(a*h-o*l)*m;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ii)!==null&&Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return sl.setScalar(0),al.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(sl,s.x),a.addScaledVector(al,s.y),a.addScaledVector(ol,s.z),a}static isFrontFacing(e,t,i,n){return li.subVectors(i,t),Pi.subVectors(e,t),li.cross(Pi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),.5*li.cross(Pi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Gn.subVectors(n,i),Vn.subVectors(s,i),il.subVectors(e,i);let l=Gn.dot(il),c=Vn.dot(il);if(l<=0&&c<=0)return t.copy(i);nl.subVectors(e,n);let h=Gn.dot(nl),u=Vn.dot(nl);if(h>=0&&u<=h)return t.copy(n);let m=l*u-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Gn,a);rl.subVectors(e,s);let p=Gn.dot(rl),_=Vn.dot(rl);if(_>=0&&p<=_)return t.copy(s);let d=p*c-l*_;if(d<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Vn,o);let v=h*_-p*u;if(v<=0&&u-h>=0&&p-_>=0)return Oh.subVectors(s,n),o=(u-h)/(u-h+(p-_)),t.copy(n).addScaledVector(Oh,o);let f=1/(v+d+m);return a=d*f,o=m*f,t.copy(i).addScaledVector(Gn,a).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),ks.subVectors(this.max,Er),Hn.subVectors(e.a,Er),Wn.subVectors(e.b,Er),Xn.subVectors(e.c,Er),ji.subVectors(Wn,Hn),qi.subVectors(Xn,Wn),mn.subVectors(Hn,Xn);let t=[0,-ji.z,ji.y,0,-qi.z,qi.y,0,-mn.z,mn.y,ji.z,0,-ji.x,qi.z,0,-qi.x,mn.z,0,-mn.x,-ji.y,ji.x,0,-qi.y,qi.x,0,-mn.y,mn.x,0];return!!ll(t,Hn,Wn,Xn,ks)&&(t=[1,0,0,0,1,0,0,0,1],!!ll(t,Hn,Wn,Xn,ks)&&(Gs.crossVectors(ji,qi),t=[Gs.x,Gs.y,Gs.z],ll(t,Hn,Wn,Xn,ks)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ci).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new A,new A,new A,new A,new A,new A,new A,new A],ci=new A,zs=new Qt,Hn=new A,Wn=new A,Xn=new A,ji=new A,qi=new A,mn=new A,Er=new A,ks=new A,Gs=new A,fn=new A;function ll(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){fn.fromArray(r,s);let o=n.x*Math.abs(fn.x)+n.y*Math.abs(fn.y)+n.z*Math.abs(fn.z),l=e.dot(fn),c=t.dot(fn),h=i.dot(fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _f=Zd();function Zd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var mt=new A,Vs=new Q,Jd=0,Bt=class extends Si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=El,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Hr=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var be=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Kd=new Qt,Ar=new A,cl=new A,ei=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Kd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Ar,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(cl)),this.expandByPoint(Ar.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$d=0,Jt=new Be,hl=new ft,jn=new A,Ht=new Qt,Cr=new Qt,yt=new A,$e=class r extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?Hr:Vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ht.min,Cr.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,Cr.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(Cr.min),Ht.expandByPoint(Cr.max))}Ht.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(jn.fromBufferAttribute(e,c),yt.add(jn)),n=Math.max(n,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new A,l[F]=new A;let c=new A,h=new A,u=new A,m=new Q,p=new Q,_=new Q,d=new A,v=new A;function f(F,P,I){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,I),m.fromBufferAttribute(s,F),p.fromBufferAttribute(s,P),_.fromBufferAttribute(s,I),h.sub(c),u.sub(c),p.sub(m),_.sub(m);let H=1/(p.x*_.y-_.x*p.y);isFinite(H)&&(d.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(H),v.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(H),o[F].add(d),o[P].add(d),o[I].add(d),l[F].add(v),l[P].add(v),l[I].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let F=0,P=g.length;F<P;++F){let I=g[F],H=I.start;for(let O=H,j=H+I.count;O<j;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new A,T=new A,E=new A,M=new A;function N(F){E.fromBufferAttribute(n,F),M.copy(E);let P=o[F];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),T.crossVectors(M,P);let I=T.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,I)}for(let F=0,P=g.length;F<P;++F){let I=g[F],H=I.start;for(let O=H,j=H+I.count;O<j;O+=3)N(e.getX(O+0)),N(e.getX(O+1)),N(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);let n=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let m=0,p=e.count;m<p;m+=3){let _=e.getX(m+0),d=e.getX(m+1),v=e.getX(m+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let m=0,p=t.count;m<p;m+=3)n.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,m=new c.constructor(l.length*h),p=0,_=0;for(let d=0,v=l.length;d<v;d++){p=o.isInterleavedBufferAttribute?l[d]*o.data.stride+o.offset:l[d]*h;for(let f=0;f<h;f++)m[_++]=c[p++]}return new Bt(m,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let m=e(c[h],i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,m=c.length;u<m;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let m=0,p=u.length;m<p;m++)h.push(u[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vf=new A;var Qd=0,Qi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vn,this.stencilZFail=vn,this.stencilZPass=vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:we(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xf=new A,yf=new A,Mf=new A,Sf=new Q,bf=new Q,Tf=new Be,wf=new A,Ef=new A,Af=new A,Cf=new Q,Rf=new Q,Pf=new Q;var If=new A,Lf=new A;var Di=new A,ul=new A,Hs=new A,Yi=new A,dl=new A,Ws=new A,pl=new A,yn=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ul.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(ul);let s=.5*e.distanceTo(t),a=-this.direction.dot(Hs),o=Yi.dot(this.direction),l=-Yi.dot(Hs),c=Yi.lengthSq(),h=Math.abs(1-a*a),u,m,p,_;if(h>0)if(u=a*l-o,m=a*o-l,_=s*h,u>=0)if(m>=-_)if(m<=_){let d=1/h;u*=d,m*=d,p=u*(u+a*m+2*o)+m*(a*u+m+2*l)+c}else m=s,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;else m=-s,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;else m<=-_?(u=Math.max(0,-(-a*s+o)),m=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+m*(m+2*l)+c):m<=_?(u=0,m=Math.min(Math.max(-s,-l),s),p=m*(m+2*l)+c):(u=Math.max(0,-(a*s+o)),m=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+m*(m+2*l)+c);else m=a>0?-s:s,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ul).addScaledVector(Hs,m),p}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),n=Di.dot(Di)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,n=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,n=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-m.z)*u,l=(e.max.z-m.z)*u):(o=(e.max.z-m.z)*u,l=(e.min.z-m.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,n,s){dl.subVectors(t,e),Ws.subVectors(i,e),pl.crossVectors(dl,Ws);let a,o=this.direction.dot(pl);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Yi.subVectors(this.origin,e);let l=a*this.direction.dot(Ws.crossVectors(Yi,Ws));if(l<0)return null;let c=a*this.direction.dot(dl.cross(Yi));if(c<0||l+c>o)return null;let h=-a*Yi.dot(pl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bh=new Be,gn=new yn,Xs=new ei,zh=new A,js=new A,qs=new A,Ys=new A,ml=new A,Zs=new A,kh=new A,Js=new A,Oe=class extends ft{constructor(e=new $e,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ml.fromBufferAttribute(u,e),a?Zs.addScaledVector(ml,h):Zs.addScaledVector(ml.sub(t),h))}t.add(Zs)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),gn.copy(e.ray).recast(e.near),Xs.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Xs,zh)===null||gn.origin.distanceToSquared(zh)>(e.far-e.near)**2))return;Bh.copy(s).invert(),gn.copy(e.ray).applyMatrix4(Bh),i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,gn)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,m=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,d=m.length;_<d;_++){let v=m[_],f=a[v.materialIndex];for(let g=Math.max(v.start,p.start),y=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));g<y;g+=3)n=Ks(this,f,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let _=Math.max(0,p.start),d=Math.min(o.count,p.start+p.count);_<d;_+=3)n=Ks(this,a,e,i,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let _=0,d=m.length;_<d;_++){let v=m[_],f=a[v.materialIndex];for(let g=Math.max(v.start,p.start),y=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));g<y;g+=3)n=Ks(this,f,e,i,c,h,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=v.materialIndex,t.push(n))}else for(let _=Math.max(0,p.start),d=Math.min(l.count,p.start+p.count);_<d;_+=3)n=Ks(this,a,e,i,c,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}};function Ks(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,js),r.getVertexPosition(l,qs),r.getVertexPosition(c,Ys);let h=(function(u,m,p,_,d,v,f,g){let y;if(y=m.side===1?_.intersectTriangle(f,v,d,!0,g):_.intersectTriangle(d,v,f,m.side===0,g),y===null)return null;Js.copy(g),Js.applyMatrix4(u.matrixWorld);let T=p.ray.origin.distanceTo(Js);return T<p.near||T>p.far?null:{distance:T,point:Js.clone(),object:u}})(r,e,t,i,js,qs,Ys,kh);if(h){let u=new A;Ni.getBarycoord(kh,js,qs,Ys,u),n&&(h.uv=Ni.getInterpolatedAttribute(n,o,l,c,u,new Q)),s&&(h.uv1=Ni.getInterpolatedAttribute(s,o,l,c,u,new Q)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new A,materialIndex:0};Ni.getNormal(js,qs,Ys,m.normal),h.face=m,h.barycoord=u}return h}var Df=new Ke,Nf=new Ke,Uf=new Ke,Ff=new Ke,Of=new Be,Bf=new A,zf=new ei,kf=new Be,Gf=new yn;var Wr=class extends Nt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=1003,h=1003,u,m){super(null,a,o,l,c,h,n,s,u,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vf=new Be,Hf=new Be;var Xr=class extends Bt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qn=new Be,Gh=new Be,$s=[],Vh=new Qt,ep=new Be,Rr=new Oe,Pr=new ei,bi=class extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(16*i),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ep)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Vh.copy(e.boundingBox).applyMatrix4(qn),this.boundingBox.union(Vh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Pr.copy(e.boundingSphere).applyMatrix4(qn),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=n[s+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(i),e.ray.intersectsSphere(Pr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,qn),Gh.multiplyMatrices(i,qn),Rr.matrixWorld=Gh,Rr.raycast(e,$s);for(let a=0,o=$s.length;a<o;a++){let l=$s[a];l.instanceId=s,l.object=this,t.push(l)}$s.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(n*this.count),n,this.count,so,ni));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fl=new A,tp=new A,ip=new Fe,yi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=fl.subVectors(i,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ip.getNormalMatrix(e),n=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_n=new ei,np=new Q(.5,.5),Qs=new A,en=class{constructor(e=new yi,t=new yi,i=new yi,n=new yi,s=new yi,a=new yi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],m=s[6],p=s[7],_=s[8],d=s[9],v=s[10],f=s[11],g=s[12],y=s[13],T=s[14],E=s[15];if(n[0].setComponents(c-a,p-h,f-_,E-g).normalize(),n[1].setComponents(c+a,p+h,f+_,E+g).normalize(),n[2].setComponents(c+o,p+u,f+d,E+y).normalize(),n[3].setComponents(c-o,p-u,f-d,E-y).normalize(),i)n[4].setComponents(l,m,v,T).normalize(),n[5].setComponents(c-l,p-m,f-v,E-T).normalize();else if(n[4].setComponents(c-l,p-m,f-v,E-T).normalize(),t===Fi)n[5].setComponents(c+l,p+m,f+v,E+T).normalize();else{if(t!==Jn)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(l,m,v,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){_n.center.set(0,0,0);let t=np.distanceTo(e.center);return _n.radius=.7071067811865476+t,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Qs.x=n.normal.x>0?e.max.x:e.min.x,Qs.y=n.normal.y>0?e.max.y:e.min.y,Qs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_i=new Be,vi=new en,_a=class r{constructor(){this.coordinateSystem=Fi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(_i.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),vi.setFromProjectionMatrix(_i,n.coordinateSystem,n.reversedDepth),vi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(_i.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),vi.setFromProjectionMatrix(_i,n.coordinateSystem,n.reversedDepth),vi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(_i.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),vi.setFromProjectionMatrix(_i,n.coordinateSystem,n.reversedDepth),vi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(_i.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),vi.setFromProjectionMatrix(_i,n.coordinateSystem,n.reversedDepth),vi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let i=0;i<t.cameras.length;i++){let n=t.cameras[i];if(_i.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),vi.setFromProjectionMatrix(_i,n.coordinateSystem,n.reversedDepth),vi.containsPoint(e))return!0}return!1}clone(){return new r}};var Al=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Wf=new Be,Xf=new Ce(1,1,1),jf=new en,qf=new _a,Yf=new Qt,Zf=new ei,Jf=new A,Kf=new A,$f=new A,Qf=new Al,eg=new Oe;var tg=new A,ig=new A,ng=new Be,rg=new yn,sg=new ei,ag=new A,og=new A;var lg=new A,cg=new A;var hg=new Be,ug=new yn,dg=new ei,pg=new A;var jr=class extends Nt{constructor(e=[],t=301,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},er=class extends Nt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends Nt{constructor(e,t,i=1014,n,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==on&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $n(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},va=class extends Bi{constructor(e,t=1014,i=301,n,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qr=class extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class r extends $e{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],m=0,p=0;function _(d,v,f,g,y,T,E,M,N,F,P){let I=T/N,H=E/F,O=T/2,j=E/2,k=M/2,z=N+1,q=F+1,X=0,oe=0,ue=new A;for(let Te=0;Te<q;Te++){let xe=Te*H-j;for(let ve=0;ve<z;ve++){let te=ve*I-O;ue[d]=te*g,ue[v]=xe*y,ue[f]=k,c.push(ue.x,ue.y,ue.z),ue[d]=0,ue[v]=0,ue[f]=M>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ve/N),u.push(1-Te/F),X+=1}}for(let Te=0;Te<F;Te++)for(let xe=0;xe<N;xe++){let ve=m+xe+z*Te,te=m+xe+z*(Te+1),ae=m+(xe+1)+z*(Te+1),ne=m+(xe+1)+z*Te;l.push(ve,te,ne),l.push(te,ae,ne),oe+=6}o.addGroup(p,oe,P),p+=oe,m+=X}_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xa=class r extends $e{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,m=t,p=2*u+m,_=2*i+s,d=n+1,v=new A,f=new A;for(let g=0;g<=_;g++){let y=0,T=0,E=0,M=0;if(g<=i){let P=g/i,I=P*Math.PI/2;T=-h-e*Math.cos(I),E=e*Math.sin(I),M=-e*Math.cos(I),y=P*u}else if(g<=i+s){let P=(g-i)/s;T=P*t-h,E=e,M=0,y=u+P*m}else{let P=(g-i-s)/i,I=P*Math.PI/2;T=h+e*Math.sin(I),E=e*Math.cos(I),M=e*Math.sin(I),y=u+m+P*u}let N=Math.max(0,Math.min(1,y/p)),F=0;g===0?F=.5/n:g===_&&(F=-.5/n);for(let P=0;P<=n;P++){let I=P/n,H=I*Math.PI*2,O=Math.sin(H),j=Math.cos(H);f.x=-E*j,f.y=T,f.z=E*O,o.push(f.x,f.y,f.z),v.set(-E*j,M,E*O),v.normalize(),l.push(v.x,v.y,v.z),c.push(I+F,N)}if(g>0){let P=(g-1)*d;for(let I=0;I<n;I++){let H=P+I,O=P+I+1,j=g*d+I,k=g*d+I+1;a.push(H,O,j),a.push(O,k,j)}}}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},tn=class r extends $e{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,m=3;u<=t;u++,m+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[m]/e+1)/2,h.y=(a[m+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mn=class r extends $e{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],m=[],p=[],_=0,d=[],v=i/2,f=0;function g(y){let T=_,E=new Q,M=new A,N=0,F=y===!0?e:t,P=y===!0?1:-1;for(let H=1;H<=n;H++)u.push(0,v*P,0),m.push(0,P,0),p.push(.5,.5),_++;let I=_;for(let H=0;H<=n;H++){let O=H/n*l+o,j=Math.cos(O),k=Math.sin(O);M.x=F*k,M.y=v*P,M.z=F*j,u.push(M.x,M.y,M.z),m.push(0,P,0),E.x=.5*j+.5,E.y=.5*k*P+.5,p.push(E.x,E.y),_++}for(let H=0;H<n;H++){let O=T+H,j=I+H;y===!0?h.push(j,j+1,O):h.push(j+1,j,O),N+=3}c.addGroup(f,N,y===!0?1:2),f+=N}(function(){let y=new A,T=new A,E=0,M=(t-e)/i;for(let N=0;N<=s;N++){let F=[],P=N/s,I=P*(t-e)+e;for(let H=0;H<=n;H++){let O=H/n,j=O*l+o,k=Math.sin(j),z=Math.cos(j);T.x=I*k,T.y=-P*i+v,T.z=I*z,u.push(T.x,T.y,T.z),y.set(k,M,z).normalize(),m.push(y.x,y.y,y.z),p.push(O,1-P),F.push(_++)}d.push(F)}for(let N=0;N<n;N++)for(let F=0;F<s;F++){let P=d[F][N],I=d[F+1][N],H=d[F+1][N+1],O=d[F][N+1];(e>0||F!==0)&&(h.push(P,I,O),E+=3),(t>0||F!==s-1)&&(h.push(I,H,O),E+=3)}c.addGroup(f,E,0),f+=E})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(m,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class r extends Mn{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nn=class r extends $e{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(p,_,d,v){let f=v+1,g=[];for(let y=0;y<=f;y++){g[y]=[];let T=p.clone().lerp(d,y/f),E=_.clone().lerp(d,y/f),M=f-y;for(let N=0;N<=M;N++)g[y][N]=N===0&&y===f?T:T.clone().lerp(E,N/M)}for(let y=0;y<f;y++)for(let T=0;T<2*(f-y)-1;T++){let E=Math.floor(T/2);T%2==0?(l(g[y][E+1]),l(g[y+1][E]),l(g[y][E])):(l(g[y][E+1]),l(g[y+1][E+1]),l(g[y+1][E]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,_){let d=3*p;_.x=e[d+0],_.y=e[d+1],_.z=e[d+2]}function h(p,_,d,v){v<0&&p.x===1&&(a[_]=p.x-1),d.x===0&&d.z===0&&(a[_]=v/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let _=new A,d=new A,v=new A;for(let f=0;f<t.length;f+=3)c(t[f+0],_),c(t[f+1],d),c(t[f+2],v),o(_,d,v,p)})(n),(function(p){let _=new A;for(let d=0;d<s.length;d+=3)_.x=s[d+0],_.y=s[d+1],_.z=s[d+2],_.normalize().multiplyScalar(p),s[d+0]=_.x,s[d+1]=_.y,s[d+2]=_.z})(i),(function(){let p=new A;for(let _=0;_<s.length;_+=3){p.x=s[_+0],p.y=s[_+1],p.z=s[_+2];let d=u(p)/2/Math.PI+.5,v=m(p)/Math.PI+.5;a.push(d,1-v)}(function(){let _=new A,d=new A,v=new A,f=new A,g=new Q,y=new Q,T=new Q;for(let E=0,M=0;E<s.length;E+=9,M+=6){_.set(s[E+0],s[E+1],s[E+2]),d.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),g.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),f.copy(_).add(d).add(v).divideScalar(3);let N=u(f);h(g,M+0,_,N),h(y,M+2,d,N),h(T,M+4,v,N)}})(),(function(){for(let _=0;_<a.length;_+=6){let d=a[_+0],v=a[_+2],f=a[_+4],g=Math.max(d,v,f),y=Math.min(d,v,f);g>.9&&y<.1&&(d<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),f<.2&&(a[_+4]+=1))}})()})(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},ya=class r extends nn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ea=new A,ta=new A,gl=new A,ia=new Ni,Ma=class extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(ca*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),m={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:d,b:v,c:f}=ia;if(d.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),ia.getNormal(gl),u[0]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,u[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,T=u[g],E=u[y],M=ia[h[g]],N=ia[h[y]],F=`${T}_${E}`,P=`${E}_${T}`;P in m&&m[P]?(gl.dot(m[P].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(N.x,N.y,N.z)),m[P]=null):F in m||(m[F]={index0:c[g],index1:c[y],normal:gl.clone()})}}for(let _ in m)if(m[_]){let{index0:d,index1:v}=m[_];ea.fromBufferAttribute(o,d),ta.fromBufferAttribute(o,v),p.push(ea.x,ea.y,ea.z),p.push(ta.x,ta.y,ta.z)}this.setAttribute("position",new be(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Xt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new Q:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,n=[],s=[],a=[],o=new A,l=new Be;for(let p=0;p<=e;p++){let _=p/e;n[p]=this.getTangentAt(_,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),m=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),m<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Ve(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Ve(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(n[_],p*_)),a[_].crossVectors(n[_],s[_])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},tr=class extends Xt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Q){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),m=l-this.aX,p=c-this.aY;l=m*h-p*u+this.aX,c=m*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sa=class extends tr{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pc(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let m=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;m*=h,p*=h,n(a,o,m,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Hh=new A,Wh=new A,_l=new Pc,vl=new Pc,xl=new Pc,ba=class extends Xt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(Wh.subVectors(n[0],n[1]).add(n[0]),o=Wh);let u=n[c%s],m=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(Hh.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Hh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(o.distanceToSquared(u),p),d=Math.pow(u.distanceToSquared(m),p),v=Math.pow(m.distanceToSquared(l),p);d<1e-4&&(d=1),_<1e-4&&(_=d),v<1e-4&&(v=d),_l.initNonuniformCatmullRom(o.x,u.x,m.x,l.x,_,d,v),vl.initNonuniformCatmullRom(o.y,u.y,m.y,l.y,_,d,v),xl.initNonuniformCatmullRom(o.z,u.z,m.z,l.z,_,d,v)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(o.x,u.x,m.x,l.x,this.tension),vl.initCatmullRom(o.y,u.y,m.y,l.y,this.tension),xl.initCatmullRom(o.z,u.z,m.z,l.z,this.tension));return i.set(_l.calc(h),vl.calc(h),xl.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xh(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Lr(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function Dr(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var Yr=class extends Xt{constructor(e=new Q,t=new Q,i=new Q,n=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Q){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Dr(e,n.x,s.x,a.x,o.x),Dr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends Xt{constructor(e=new A,t=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Dr(e,n.x,s.x,a.x,o.x),Dr(e,n.y,s.y,a.y,o.y),Dr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zr=class extends Xt{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Xt{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends Xt{constructor(e=new Q,t=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Q){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Lr(e,n.x,s.x,a.x),Lr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Xt{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Lr(e,n.x,s.x,a.x),Lr(e,n.y,s.y,a.y),Lr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Xt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Xh(o,l.x,c.x,h.x,u.x),Xh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Q().fromArray(n))}return this}},Ea=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:ba,CubicBezierCurve:Yr,CubicBezierCurve3:Ta,EllipseCurve:tr,LineCurve:Zr,LineCurve3:wa,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Kr,SplineCurve:$r}),Aa=class extends Xt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ea[n.type]().fromJSON(n))}return this}},Qr=class extends Aa{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Zr(this.currentPoint.clone(),new Q(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Jr(this.currentPoint.clone(),new Q(e,t),new Q(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Yr(this.currentPoint.clone(),new Q(e,t),new Q(i,n),new Q(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $r(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new tr(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},es=class extends Qr{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Qr().fromJSON(n))}return this}};function rp(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=jh(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=(function(h,u,m,p){let _=[];for(let d=0,v=u.length;d<v;d++){let f=jh(h,u[d]*p,d<v-1?u[d+1]*p:h.length,p,!1);f===f.next&&(f.steiner=!0),_.push(dp(f))}_.sort(cp);for(let d=0;d<_.length;d++)m=hp(_[d],m);return m})(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let m=t;m<n;m+=t){let p=r[m],_=r[m+1];p<o&&(o=p),_<l&&(l=_),p>h&&(h=p),_>u&&(u=_)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ts(s,a,t,o,l,c,0),a}function jh(r,e,t,i,n){let s;if(n===(function(a,o,l,c){let h=0;for(let u=o,m=l-c;u<l;u+=c)h+=(a[m]-a[u])*(a[u+1]+a[m+1]),m=u;return h})(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=qh(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=qh(a/i|0,r[a],r[a+1],s);return s&&ir(s,s.next)&&(ns(s),s=s.next),s}function Sn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ir(i,i.next)&&at(i.prev,i,i.next)!==0)i=i.next;else{if(ns(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ts(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let m=l;do m.z===0&&(m.z=Cl(m.x,m.y,c,h,u)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==l);m.prevZ.nextZ=null,m.prevZ=null,(function(p){let _,d=1;do{let v,f=p;p=null;let g=null;for(_=0;f;){_++;let y=f,T=0;for(let M=0;M<d&&(T++,y=y.nextZ,y);M++);let E=d;for(;T>0||E>0&&y;)T!==0&&(E===0||!y||f.z<=y.z)?(v=f,f=f.nextZ,T--):(v=y,y=y.nextZ,E--),g?g.nextZ=v:p=v,v.prevZ=g,g=v;f=y}g.nextZ=null,d*=2}while(_>1)})(m)})(r,i,n,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?ap(r,i,n,s):sp(r))e.push(l.i,r.i,c.i),ns(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?ts(r=op(Sn(r),e),e,t,i,n,s,2):a===2&&lp(r,e,t,i,n,s):ts(Sn(r),e,t,i,n,s,1);break}}}function sp(r){let e=r.prev,t=r,i=r.next;if(at(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,s,a),u=Math.min(o,l,c),m=Math.max(n,s,a),p=Math.max(o,l,c),_=i.next;for(;_!==e;){if(_.x>=h&&_.x<=m&&_.y>=u&&_.y<=p&&Ir(n,o,s,l,a,c,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ap(r,e,t,i){let n=r.prev,s=r,a=r.next;if(at(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,m=a.y,p=Math.min(o,l,c),_=Math.min(h,u,m),d=Math.max(o,l,c),v=Math.max(h,u,m),f=Cl(p,_,e,t,i),g=Cl(d,v,e,t,i),y=r.prevZ,T=r.nextZ;for(;y&&y.z>=f&&T&&T.z<=g;){if(y.x>=p&&y.x<=d&&y.y>=_&&y.y<=v&&y!==n&&y!==a&&Ir(o,h,l,u,c,m,y.x,y.y)&&at(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=p&&T.x<=d&&T.y>=_&&T.y<=v&&T!==n&&T!==a&&Ir(o,h,l,u,c,m,T.x,T.y)&&at(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=d&&y.y>=_&&y.y<=v&&y!==n&&y!==a&&Ir(o,h,l,u,c,m,y.x,y.y)&&at(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=g;){if(T.x>=p&&T.x<=d&&T.y>=_&&T.y<=v&&T!==n&&T!==a&&Ir(o,h,l,u,c,m,T.x,T.y)&&at(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function op(r,e){let t=r;do{let i=t.prev,n=t.next.next;!ir(i,n)&&Hu(i,t,t.next,n)&&is(i,n)&&is(n,i)&&(e.push(i.i,t.i,n.i),ns(t),ns(t.next),t=r=n),t=t.next}while(t!==r);return Sn(t)}function lp(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pp(a,o)){let l=Wu(a,o);return a=Sn(a,a.next),l=Sn(l,l.next),ts(a,e,t,i,n,s,0),void ts(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function cp(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function hp(r,e){let t=(function(n,s){let a=s,o=n.x,l=n.y,c,h=-1/0;if(ir(n,a))return a;do{if(ir(n,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let d=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(d<=o&&d>h&&(h=d,c=a.x<a.next.x?a:a.next,d===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,m=c.x,p=c.y,_=1/0;a=c;do{if(o>=a.x&&a.x>=m&&o!==a.x&&Vu(l<p?o:h,l,m,p,l<p?h:o,l,a.x,a.y)){let d=Math.abs(l-a.y)/(o-a.x);is(a,n)&&(d<_||d===_&&(a.x>c.x||a.x===c.x&&up(c,a)))&&(c=a,_=d)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let i=Wu(t,r);return Sn(i,i.next),Sn(t,t.next)}function up(r,e){return at(r.prev,r,e.prev)<0&&at(e.next,r,r.next)<0}function Cl(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function dp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Vu(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Ir(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&Vu(r,e,t,i,n,s,a,o)}function pp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Hu(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(is(r,e)&&is(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(at(r.prev,r,e.prev)||at(r,e.prev,e))||ir(r,e)&&at(r.prev,r,r.next)>0&&at(e.prev,e,e.next)>0)}function at(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ir(r,e){return r.x===e.x&&r.y===e.y}function Hu(r,e,t,i){let n=ra(at(r,e,t)),s=ra(at(r,e,i)),a=ra(at(t,i,r)),o=ra(at(t,i,e));return n!==s&&a!==o||!(n!==0||!na(r,t,e))||!(s!==0||!na(r,i,e))||!(a!==0||!na(t,r,i))||!(o!==0||!na(t,e,i))}function na(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ra(r){return r>0?1:r<0?-1:0}function is(r,e){return at(r.prev,r,r.next)<0?at(r,e,r.next)>=0&&at(r,r.prev,e)>=0:at(r,e,r.prev)<0||at(r,r.next,e)<0}function Wu(r,e){let t=Rl(r.i,r.x,r.y),i=Rl(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function qh(r,e,t,i){let n=Rl(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Rl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Pl=class{static triangulate(e,t,i=2){return rp(e,t,i)}},Mi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Yh(e),Zh(i,e);let a=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Zh(i,t[l]);let o=Pl.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Yh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Zh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ca=class r extends $e{constructor(e=new es([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,m=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:mp,y,T,E,M,N,F=!1;if(f){y=f.getSpacedPoints(h),F=!0,m=!1;let C=!!f.isCatmullRomCurve3&&f.closed;T=f.computeFrenetFrames(h,C),E=new A,M=new A,N=new A}m||(v=0,p=0,_=0,d=0);let P=o.extractPoints(c),I=P.shape,H=P.holes;if(!Mi.isClockWise(I)){I=I.reverse();for(let C=0,U=H.length;C<U;C++){let x=H[C];Mi.isClockWise(x)&&(H[C]=x.reverse())}}function O(C){let U=10000000000000001e-36,x=C[0];for(let L=1;L<=C.length;L++){let D=L%C.length,w=C[D],V=w.x-x.x,W=w.y-x.y,K=V*V+W*W,ee=Math.max(Math.abs(w.x),Math.abs(w.y),Math.abs(x.x),Math.abs(x.y));K<=U*ee*ee?(C.splice(D,1),L--):x=w}}O(I),H.forEach(O);let j=H.length,k=I;for(let C=0;C<j;C++){let U=H[C];I=I.concat(U)}function z(C,U,x){return U||Ee("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(U,x)}let q=I.length;function X(C,U,x){let L,D,w,V=C.x-U.x,W=C.y-U.y,K=x.x-C.x,ee=x.y-C.y,de=V*V+W*W,Z=V*ee-W*K;if(Math.abs(Z)>Number.EPSILON){let me=Math.sqrt(de),ce=Math.sqrt(K*K+ee*ee),pe=U.x-W/me,se=U.y+V/me,ye=((x.x-ee/ce-pe)*ee-(x.y+K/ce-se)*K)/(V*ee-W*K);L=pe+V*ye-C.x,D=se+W*ye-C.y;let We=L*L+D*D;if(We<=2)return new Q(L,D);w=Math.sqrt(We/2)}else{let me=!1;V>Number.EPSILON?K>Number.EPSILON&&(me=!0):V<-Number.EPSILON?K<-Number.EPSILON&&(me=!0):Math.sign(W)===Math.sign(ee)&&(me=!0),me?(L=-W,D=V,w=Math.sqrt(de)):(L=V,D=W,w=Math.sqrt(de/2))}return new Q(L/w,D/w)}let oe=[];for(let C=0,U=k.length,x=U-1,L=C+1;C<U;C++,x++,L++)x===U&&(x=0),L===U&&(L=0),oe[C]=X(k[C],k[x],k[L]);let ue=[],Te,xe,ve=oe.concat();for(let C=0,U=j;C<U;C++){let x=H[C];Te=[];for(let L=0,D=x.length,w=D-1,V=L+1;L<D;L++,w++,V++)w===D&&(w=0),V===D&&(V=0),Te[L]=X(x[L],x[w],x[V]);ue.push(Te),ve=ve.concat(Te)}if(v===0)xe=Mi.triangulateShape(k,H);else{let C=[],U=[];for(let x=0;x<v;x++){let L=x/v,D=p*Math.cos(L*Math.PI/2),w=_*Math.sin(L*Math.PI/2)+d;for(let V=0,W=k.length;V<W;V++){let K=z(k[V],oe[V],w);ge(K.x,K.y,-D),L===0&&C.push(K)}for(let V=0,W=j;V<W;V++){let K=H[V];Te=ue[V];let ee=[];for(let de=0,Z=K.length;de<Z;de++){let me=z(K[de],Te[de],w);ge(me.x,me.y,-D),L===0&&ee.push(me)}L===0&&U.push(ee)}}xe=Mi.triangulateShape(C,U)}let te=xe.length,ae=_+d;for(let C=0;C<q;C++){let U=m?z(I[C],ve[C],ae):I[C];F?(M.copy(T.normals[0]).multiplyScalar(U.x),E.copy(T.binormals[0]).multiplyScalar(U.y),N.copy(y[0]).add(M).add(E),ge(N.x,N.y,N.z)):ge(U.x,U.y,0)}for(let C=1;C<=h;C++)for(let U=0;U<q;U++){let x=m?z(I[U],ve[U],ae):I[U];F?(M.copy(T.normals[C]).multiplyScalar(x.x),E.copy(T.binormals[C]).multiplyScalar(x.y),N.copy(y[C]).add(M).add(E),ge(N.x,N.y,N.z)):ge(x.x,x.y,u/h*C)}for(let C=v-1;C>=0;C--){let U=C/v,x=p*Math.cos(U*Math.PI/2),L=_*Math.sin(U*Math.PI/2)+d;for(let D=0,w=k.length;D<w;D++){let V=z(k[D],oe[D],L);ge(V.x,V.y,u+x)}for(let D=0,w=H.length;D<w;D++){let V=H[D];Te=ue[D];for(let W=0,K=V.length;W<K;W++){let ee=z(V[W],Te[W],L);F?ge(ee.x,ee.y+y[h-1].y,y[h-1].x+x):ge(ee.x,ee.y,u+x)}}}function ne(C,U){let x=C.length;for(;--x>=0;){let L=x,D=x-1;D<0&&(D=C.length-1);for(let w=0,V=h+2*v;w<V;w++){let W=q*w,K=q*(w+1);ie(U+L+W,U+D+W,U+D+K,U+L+K)}}}function ge(C,U,x){l.push(C),l.push(U),l.push(x)}function He(C,U,x){R(C),R(U),R(x);let L=n.length/3,D=g.generateTopUV(i,n,L-3,L-2,L-1);S(D[0]),S(D[1]),S(D[2])}function ie(C,U,x,L){R(C),R(U),R(L),R(U),R(x),R(L);let D=n.length/3,w=g.generateSideWallUV(i,n,D-6,D-3,D-2,D-1);S(w[0]),S(w[1]),S(w[3]),S(w[1]),S(w[2]),S(w[3])}function R(C){n.push(l[3*C+0]),n.push(l[3*C+1]),n.push(l[3*C+2])}function S(C){s.push(C.x),s.push(C.y)}(function(){let C=n.length/3;if(m){let U=0,x=q*U;for(let L=0;L<te;L++){let D=xe[L];He(D[2]+x,D[1]+x,D[0]+x)}U=h+2*v,x=q*U;for(let L=0;L<te;L++){let D=xe[L];He(D[0]+x,D[1]+x,D[2]+x)}}else{for(let U=0;U<te;U++){let x=xe[U];He(x[2],x[1],x[0])}for(let U=0;U<te;U++){let x=xe[U];He(x[0]+q*h,x[1]+q*h,x[2]+q*h)}}i.addGroup(C,n.length/3-C,0)})(),(function(){let C=n.length/3,U=0;ne(k,U),U+=k.length;for(let x=0,L=H.length;x<L;x++){let D=H[x];ne(D,U),U+=D.length}i.addGroup(C,n.length/3-C,1)})()}this.setAttribute("position",new be(n,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ea[n.type]().fromJSON(n)),new r(i,e.options)}},mp={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new Q(s,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],m=e[3*n],p=e[3*n+1],_=e[3*n+2],d=e[3*s],v=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(m,1-_),new Q(d,1-f)]:[new Q(o,1-l),new Q(h,1-u),new Q(p,1-_),new Q(v,1-f)]}},rn=class r extends nn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ra=class r extends $e{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ve(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,m=new Q,p=new A,_=new A,d=new A,v=0,f=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:v=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=1*f,p.y=-v,p.z=0*f,d.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(d.x,d.y,d.z);break;default:v=e[g+1].x-e[g].x,f=e[g+1].y-e[g].y,p.x=1*f,p.y=-v,p.z=0*f,_.copy(p),p.x+=d.x,p.y+=d.y,p.z+=d.z,p.normalize(),l.push(p.x,p.y,p.z),d.copy(_)}for(let g=0;g<=t;g++){let y=i+g*h*n,T=Math.sin(y),E=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*T,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),m.x=g/t,m.y=M/(e.length-1),o.push(m.x,m.y);let N=l[3*M+0]*T,F=l[3*M+1],P=l[3*M+0]*E;c.push(N,F,P)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let T=y+g*e.length,E=T,M=T+e.length,N=T+e.length+1,F=T+1;s.push(E,M,F),s.push(N,F,M)}this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},nr=class r extends nn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zi=class r extends $e{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,m=t/l,p=[],_=[],d=[],v=[];for(let f=0;f<h;f++){let g=f*m-a;for(let y=0;y<c;y++){let T=y*u-s;_.push(T,-g,0),d.push(0,0,1),v.push(y/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){let y=g+c*f,T=g+c*(f+1),E=g+1+c*(f+1),M=g+1+c*f;p.push(y,T,M),p.push(T,E,M)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Pa=class r extends $e{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,m=(t-e)/(n=Math.max(1,n)),p=new A,_=new Q;for(let d=0;d<=n;d++){for(let v=0;v<=i;v++){let f=s+v/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}u+=m}for(let d=0;d<n;d++){let v=d*(i+1);for(let f=0;f<i;f++){let g=f+v,y=g,T=g+i+1,E=g+i+2,M=g+1;o.push(y,T,M),o.push(T,E,M)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ia=class r extends $e{constructor(e=new es([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,m=h.extractPoints(t),p=m.shape,_=m.holes;Mi.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,f=_.length;v<f;v++){let g=_[v];Mi.isClockWise(g)===!0&&(_[v]=g.reverse())}let d=Mi.triangulateShape(p,_);for(let v=0,f=_.length;v<f;v++){let g=_[v];p=p.concat(g)}for(let v=0,f=p.length;v<f;v++){let g=p[v];n.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let v=0,f=d.length;v<f;v++){let g=d[v],y=g[0]+u,T=g[1]+u,E=g[2]+u;i.push(y,T,E),l+=3}}this.setIndex(i),this.setAttribute("position",new be(n,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},La=class r extends $e{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,m=new A,p=[],_=[],d=[],v=[];for(let f=0;f<=i;f++){let g=[],y=f/i,T=0;f===0&&a===0?T=.5/t:f===i&&l===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){let M=E/t;u.x=-e*Math.cos(n+M*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(n+M*s)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),m.copy(u).normalize(),d.push(m.x,m.y,m.z),v.push(M+T,1-y),g.push(c++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){let y=h[f][g+1],T=h[f][g],E=h[f+1][g],M=h[f+1][g+1];(f!==0||a>0)&&p.push(y,T,M),(f!==i-1||l<Math.PI)&&p.push(T,E,M)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},rr=class r extends nn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},bn=class r extends $e{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],m=new A,p=new A,_=new A;for(let d=0;d<=i;d++){let v=a+d/i*o;for(let f=0;f<=n;f++){let g=f/n*s;p.x=(e+t*Math.cos(v))*Math.cos(g),p.y=(e+t*Math.cos(v))*Math.sin(g),p.z=t*Math.sin(v),c.push(p.x,p.y,p.z),m.x=e*Math.cos(g),m.y=e*Math.sin(g),_.subVectors(p,m).normalize(),h.push(_.x,_.y,_.z),u.push(f/n),u.push(d/i)}}for(let d=1;d<=i;d++)for(let v=1;v<=n;v++){let f=(n+1)*d+v-1,g=(n+1)*(d-1)+v-1,y=(n+1)*(d-1)+v,T=(n+1)*d+v;l.push(f,g,T),l.push(g,y,T)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Da=class r extends $e{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new A,m=new A,p=new A,_=new A,d=new A,v=new A,f=new A;for(let y=0;y<=i;++y){let T=y/i*s*Math.PI*2;g(T,s,a,e,p),g(T+.01,s,a,e,_),v.subVectors(_,p),f.addVectors(_,p),d.crossVectors(v,f),f.crossVectors(d,v),d.normalize(),f.normalize();for(let E=0;E<=n;++E){let M=E/n*Math.PI*2,N=-t*Math.cos(M),F=t*Math.sin(M);u.x=p.x+(N*f.x+F*d.x),u.y=p.y+(N*f.y+F*d.y),u.z=p.z+(N*f.z+F*d.z),l.push(u.x,u.y,u.z),m.subVectors(u,p).normalize(),c.push(m.x,m.y,m.z),h.push(y/i),h.push(E/n)}}for(let y=1;y<=i;y++)for(let T=1;T<=n;T++){let E=(n+1)*(y-1)+(T-1),M=(n+1)*y+(T-1),N=(n+1)*y+T,F=(n+1)*(y-1)+T;o.push(E,M,F),o.push(M,N,F)}function g(y,T,E,M,N){let F=Math.cos(y),P=Math.sin(y),I=E/T*y,H=Math.cos(I);N.x=M*(2+H)*.5*F,N.y=M*(2+H)*P*.5,N.z=M*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Na=class r extends $e{constructor(e=new Kr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new Q,h=new A,u=[],m=[],p=[],_=[];function d(v){h=e.getPointAt(v/t,h);let f=a.normals[v],g=a.binormals[v];for(let y=0;y<=n;y++){let T=y/n*Math.PI*2,E=Math.sin(T),M=-Math.cos(T);l.x=M*f.x+E*g.x,l.y=M*f.y+E*g.y,l.z=M*f.z+E*g.z,l.normalize(),m.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)d(v);d(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let f=0;f<=n;f++)c.x=v/t,c.y=f/n,p.push(c.x,c.y)})(),(function(){for(let v=1;v<=t;v++)for(let f=1;f<=n;f++){let g=(n+1)*(v-1)+(f-1),y=(n+1)*v+(f-1),T=(n+1)*v+f,E=(n+1)*(v-1)+f;_.push(g,y,E),_.push(y,T,E)}})()})(),this.setIndex(_),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(m,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ea[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ua=class extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],m=u.start;for(let p=m,_=m+u.count;p<_;p+=3)for(let d=0;d<3;d++){let v=o.getX(p+d),f=o.getX(p+(d+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,f),Jh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Jh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Jh(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var mg=Object.freeze({__proto__:null,BoxGeometry:zt,CapsuleGeometry:xa,CircleGeometry:tn,ConeGeometry:Ti,CylinderGeometry:Mn,DodecahedronGeometry:ya,EdgesGeometry:Ma,ExtrudeGeometry:Ca,IcosahedronGeometry:rn,LatheGeometry:Ra,OctahedronGeometry:nr,PlaneGeometry:zi,PolyhedronGeometry:nn,RingGeometry:Pa,ShapeGeometry:Ia,SphereGeometry:La,TetrahedronGeometry:rr,TorusGeometry:bn,TorusKnotGeometry:Da,TubeGeometry:Na,WireframeGeometry:Ua});function Pn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(Kh(n))n.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Kh(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Lt(r){let e={};for(let t=0;t<r.length;t++){let i=Pn(r[t]);for(let n in i)e[n]=i[n]}return e}function Kh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ic(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Gi={clone:Pn,merge:Lt},ct=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},sr=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ar=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fa=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oa=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}var sn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ba=class extends sn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:s=e,o=2*t-i;break;case wl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:a=e,l=2*i-t;break;case wl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,m=this._weightPrev,p=this._weightNext,_=(i-t)/(n-t),d=_*_,v=d*_,f=-m*v+2*m*d-m*_,g=(1+m)*v+(-1.5-2*m)*d+(-.5+m)*_+1,y=(-1-p)*v+(1.5+p)*d+.5*_,T=p*v-p*d;for(let E=0;E!==o;++E)s[E]=f*a[h+E]+g*a[c+E]+y*a[l+E]+T*a[u+E];return s}},za=class extends sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let m=0;m!==o;++m)s[m]=a[c+m]*u+a[l+m]*h;return s}},ka=class extends sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ga=class extends sn{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,m=h.outTangents;if(!u||!m){let d=(i-t)/(n-t),v=1-d;for(let f=0;f!==o;++f)s[f]=a[c+f]*v+a[l+f]*d;return s}let p=2*o,_=e-1;for(let d=0;d!==o;++d){let v=a[c+d],f=a[l+d],g=_*p+2*d,y=m[g],T=m[g+1],E=e*p+2*d,M=u[E],N=u[E+1],F,P,I,H,O,j=(i-t)/(n-t);for(let k=0;k<8;k++){F=j*j,P=F*j,I=1-j,H=I*I,O=H*I;let z=O*t+3*H*j*y+3*I*F*M+P*n-i;if(Math.abs(z)<1e-10)break;let q=3*H*(y-t)+6*I*j*(M-y)+3*F*(n-M);if(Math.abs(q)<1e-10)break;j-=z/q,j=Math.max(0,Math.min(1,j))}s[d]=O*v+3*H*j*T+3*I*F*N+P*f}return s}},Wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ga(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case Sl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ee("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ee("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ee("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Od(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ee("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===la,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,m=h+i;for(let p=0;p!==i;++p){let _=t[h+p];if(_!==t[u+p]||_!==t[m+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.ValueTypeName="",Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=ua;var Ji=class extends Wt{constructor(e,t,i){super(e,t,i)}};Ji.prototype.ValueTypeName="bool",Ji.prototype.ValueBufferType=Array,Ji.prototype.DefaultInterpolation=Nr,Ji.prototype.InterpolantFactoryMethodLinear=void 0,Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends Wt{constructor(e,t,i,n){super(e,t,i,n)}};Va.prototype.ValueTypeName="color";var Ha=class extends Wt{constructor(e,t,i,n){super(e,t,i,n)}};Ha.prototype.ValueTypeName="number";var Wa=class extends sn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(s,0,a,c-o,a,c,l);return s}},rs=class extends Wt{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName="quaternion",rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Wt{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="string",Ki.prototype.ValueBufferType=Array,Ki.prototype.DefaultInterpolation=Nr,Ki.prototype.InterpolantFactoryMethodLinear=void 0,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends Wt{constructor(e,t,i,n){super(e,t,i,n)}};Xa.prototype.ValueTypeName="vector";var ja=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,m=c.length;u<m;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xu=new ja,qa=class{constructor(e){this.manager=e!==void 0?e:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ss=class extends or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yl=new Be,$h=new A,Qh=new A,Il=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new en,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Jn||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aa=new A,oa=new $t,xi=new A,lr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(aa,oa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new A,eu=new Q,tu=new Q,Pt=class extends lr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*pa*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ca*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*pa*Math.atan(Math.tan(.5*ca*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ca*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var an=class extends lr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ll=class extends Il{constructor(){super(new an(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},os=class extends or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var fg=new Be,gg=new Be,_g=new Be;var Yn=-90,Ya=class extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pt(Yn,1,e,t);n.layers=this.layers,this.add(n);let s=new Pt(Yn,1,e,t);s.layers=this.layers,this.add(s);let a=new Pt(Yn,1,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Yn,1,e,t);o.layers=this.layers,this.add(o);let l=new Pt(Yn,1,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Yn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Jn)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,m,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Za=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ls=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=fp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function fp(){this._document.hidden===!1&&this.reset()}var vg=new A,xg=new $t,yg=new A,Mg=new A,Sg=new A;var bg=new A,Tg=new $t,wg=new A,Eg=new A;var Lc="\\[\\]\\.:\\/",gp=new RegExp("["+Lc+"]","g"),Ml="[^"+Lc+"]",_p="[^"+Lc.replace("\\.","")+"]",vp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ml)+/(WCOD+)?/.source.replace("WCOD",_p)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml)+"$"),xp=["material","materials","bones","map"],et=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(e){let t=vp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);xp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void we("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0)return void Ee("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+n+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=class{constructor(r,e,t){let i=t||et.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray],et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ag=new Float32Array(1);var Cg=new Be;var Bc=class Bc{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};Bc.prototype.isMatrix2=!0;var Dl=Bc,Rg=new Q;var Pg=new A,Ig=new A,Lg=new A,Dg=new A,Ng=new A,Ug=new A,Fg=new A;var Og=new A;var Bg=new A,zg=new Be,kg=new Be;var Gg=new A,Vg=new Ce,Hg=new Ce;var Wg=new A,Xg=new A,jg=new A;var qg=new A,Yg=new lr;var Zg=new Qt;var Jg=new A;function Dc(r,e,t,i){let n=(function(s){switch(s){case jt:case Xl:return{byteLength:1,components:1};case pr:case jl:case St:return{byteLength:2,components:1};case no:case ro:return{byteLength:2,components:4};case ki:case io:case ni:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case 1021:return r*e;case so:case ao:return r*e/n.components*n.byteLength;case 1030:case 1031:return r*e*2/n.components*n.byteLength;case 1022:return r*e*3/n.components*n.byteLength;case ui:case 1033:return r*e*4/n.components*n.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}})),typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function md(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Mp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<c.length;u++){let m=c[h],p=c[u];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,m=c.length;u<m;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ai={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ai.physical={uniforms:Lt([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var go={r:0,b:0,g:0},Sp=new Be,fd=new Fe;function bp(r,e,t,i,n,s){let a=new Ce(0),o,l,c=n===!0?0:1,h=null,u=0,m=null;function p(d){let v=d.isScene===!0?d.background:null;if(v&&v.isTexture){let f=d.backgroundBlurriness>0;v=e.get(v,f)}return v}function _(d,v){d.getRGB(go,Ic(r)),t.buffers.color.setClear(go.r,go.g,go.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(d,v=1){a.set(d),c=v,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,_(a,c)},render:function(d){let v=!1,f=p(d);f===null?_(a,c):f&&f.isColor&&(_(f,1),v=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?t.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(d,v){let f=p(v);f&&(f.isCubeTexture||f.mapping===vs)?(l===void 0&&(l=new Oe(new zt(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Pn(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(g,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(v.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fd),l.material.toneMapped=Ge.getTransfer(f.colorSpace)!==Je,h===f&&u===f.version&&m===r.toneMapping||(l.material.needsUpdate=!0,h=f,u=f.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Oe(new zi(2,2),new ct({name:"BackgroundMaterial",uniforms:Pn(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=Ge.getTransfer(f.colorSpace)!==Je,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&u===f.version&&m===r.toneMapping||(o.material.needsUpdate=!0,h=f,u=f.version,m=r.toneMapping),o.layers.enableAll(),d.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Tp(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null),s=n,a=!1;function o(f){return r.bindVertexArray(f)}function l(f){return r.deleteVertexArray(f)}function c(f){let g=[],y=[],T=[];for(let E=0;E<t;E++)g[E]=0,y[E]=0,T[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:y,attributeDivisors:T,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let g=0,y=f.length;g<y;g++)f[g]=0}function u(f){m(f,0)}function m(f,g){let y=s.newAttributes,T=s.enabledAttributes,E=s.attributeDivisors;y[f]=1,T[f]===0&&(r.enableVertexAttribArray(f),T[f]=1),E[f]!==g&&(r.vertexAttribDivisor(f,g),E[f]=g)}function p(){let f=s.newAttributes,g=s.enabledAttributes;for(let y=0,T=g.length;y<T;y++)g[y]!==f[y]&&(r.disableVertexAttribArray(y),g[y]=0)}function _(f,g,y,T,E,M,N){N===!0?r.vertexAttribIPointer(f,g,y,E,M):r.vertexAttribPointer(f,g,y,T,E,M)}function d(){v(),a=!0,s!==n&&(s=n,o(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,g,y,T,E){let M=!1,N=(function(F,P,I,H){let O=H.wireframe===!0,j=i[P.id];j===void 0&&(j={},i[P.id]=j);let k=F.isInstancedMesh===!0?F.id:0,z=j[k];z===void 0&&(z={},j[k]=z);let q=z[I.id];q===void 0&&(q={},z[I.id]=q);let X=q[O];return X===void 0&&(X=c(r.createVertexArray()),q[O]=X),X})(f,T,y,g);s!==N&&(s=N,o(s.object)),M=(function(F,P,I,H){let O=s.attributes,j=P.attributes,k=0,z=I.getAttributes();for(let q in z)if(z[q].location>=0){let X=O[q],oe=j[q];if(oe===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),X===void 0||X.attribute!==oe||oe&&X.data!==oe.data)return!0;k++}return s.attributesNum!==k||s.index!==H})(f,T,y,E),M&&(function(F,P,I,H){let O={},j=P.attributes,k=0,z=I.getAttributes();for(let q in z)if(z[q].location>=0){let X=j[q];X===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(X=F.instanceColor));let oe={};oe.attribute=X,X&&X.data&&(oe.data=X.data),O[q]=oe,k++}s.attributes=O,s.attributesNum=k,s.index=H})(f,T,y,E),E!==null&&e.update(E,r.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(F,P,I,H){h();let O=H.attributes,j=I.getAttributes(),k=P.defaultAttributeValues;for(let z in j){let q=j[z];if(q.location>=0){let X=O[z];if(X===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(X=F.instanceColor)),X!==void 0){let oe=X.normalized,ue=X.itemSize,Te=e.get(X);if(Te===void 0)continue;let xe=Te.buffer,ve=Te.type,te=Te.bytesPerElement,ae=ve===r.INT||ve===r.UNSIGNED_INT||X.gpuType===io;if(X.isInterleavedBufferAttribute){let ne=X.data,ge=ne.stride,He=X.offset;if(ne.isInstancedInterleavedBuffer){for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie,ne.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<q.locationSize;ie++)u(q.location+ie);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let ie=0;ie<q.locationSize;ie++)_(q.location+ie,ue/q.locationSize,ve,oe,ge*te,(He+ue/q.locationSize*ie)*te,ae)}else{if(X.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)m(q.location+ne,X.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<q.locationSize;ne++)u(q.location+ne);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let ne=0;ne<q.locationSize;ne++)_(q.location+ne,ue/q.locationSize,ve,oe,ue*te,ue/q.locationSize*ne*te,ae)}}else if(k!==void 0){let oe=k[z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(q.location,oe);break;case 3:r.vertexAttrib3fv(q.location,oe);break;case 4:r.vertexAttrib4fv(q.location,oe);break;default:r.vertexAttrib1fv(q.location,oe)}}}}p()})(f,g,y,T),E!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:d,resetDefaultState:v,dispose:function(){d();for(let f in i){let g=i[f];for(let y in g){let T=g[y];for(let E in T){let M=T[E];for(let N in M)l(M[N].object),delete M[N];delete T[E]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let g=i[f.id];for(let y in g){let T=g[y];for(let E in T){let M=T[E];for(let N in M)l(M[N].object),delete M[N];delete T[E]}}delete i[f.id]},releaseStatesOfObject:function(f){for(let g in i){let y=i[g],T=f.isInstancedMesh===!0?f.id:0,E=y[T];if(E!==void 0){for(let M in E){let N=E[M];for(let F in N)l(N[F].object),delete N[F];delete E[M]}delete y[T],Object.keys(y).length===0&&delete i[g]}}},releaseStatesOfProgram:function(f){for(let g in i){let y=i[g];for(let T in y){let E=y[T];if(E[f.id]===void 0)continue;let M=E[f.id];for(let N in M)l(M[N].object),delete M[N];delete E[f.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function wp(r,e,t){let i;this.setMode=function(n){i=n},this.render=function(n,s){r.drawArrays(i,n,s),t.update(s,i,1)},this.renderInstances=function(n,s,a){a!==0&&(r.drawArraysInstanced(i,n,s,a),t.update(s,i,a))},this.renderMultiDraw=function(n,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,n,0,s,0,a);let o=0;for(let l=0;l<a;l++)o+=s[l];t.update(o,i,1)}}function Ep(r,e,t,i){let n;function s(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(we("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&c===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(h){return h===ui||i.convert(h)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===St&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==jt&&i.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==ni&&!u)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function Ap(r){let e=this,t=null,i=0,n=!1,s=!1,a=new yi,o=new Fe,l={value:null,needsUpdate:!1};function c(h,u,m,p){let _=h!==null?h.length:0,d=null;if(_!==0){if(d=l.value,p!==!0||d===null){let v=m+4*_,f=u.matrixWorldInverse;o.getNormalMatrix(f),(d===null||d.length<v)&&(d=new Float32Array(v));for(let g=0,y=m;g!==_;++g,y+=4)a.copy(h[g]).applyMatrix4(f,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let m=h.length!==0||u||i!==0||n;return n=u,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,m){let p=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,v=r.get(h);if(!n||p===null||p.length===0||s&&!d)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,g=4*f,y=v.clippingState||null;l.value=y,y=c(p,u,g,m);for(let T=0;T!==g;++T)y[T]=t[T];v.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=f}}}fd.set(-1,0,0,0,1,0,0,0,1);var ju=[.125,.215,.35,.446,.526,.582],ys=20,Ms=new an,qu=new Ce,zc=null,kc=0,Gc=0,Vc=!1,Cp=new A,vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=Cp}=s;zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,kc,Gc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:St,format:ui,colorSpace:Ur,depthBuffer:!1},n=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+ju.length;for(let m=0;m<u;m++){let p=Math.pow(2,h);o.push(p);let _=1/p;m>a-4?_=ju[m-a+4-1]:m===0&&(_=0),l.push(_);let d=1/(p-2),v=-d,f=1+d,g=[v,v,f,v,f,f,v,v,f,f,v,f],y=6,T=6,E=3,M=2,N=1,F=new Float32Array(E*T*y),P=new Float32Array(M*T*y),I=new Float32Array(N*T*y);for(let O=0;O<y;O++){let j=O%3*2/3-1,k=O>2?0:-1,z=[j,k,0,j+2/3,k,0,j+2/3,k+1,0,j,k,0,j+2/3,k+1,0,j,k+1,0];F.set(z,E*T*O),P.set(g,M*T*O);let q=[O,O,O,O,O,O];I.set(q,N*T*O)}let H=new $e;H.setAttribute("position",new Bt(F,E)),H.setAttribute("uv",new Bt(P,M)),H.setAttribute("faceIndex",new Bt(I,N)),c.push(new Oe(H,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(ys),h=new A(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Oe(new $e,e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,i,n,s){let a=new Pt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(qu),c.toneMapping=hi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(n),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new zt,new ti({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let m=this._backgroundBox,p=m.material,_=!1,d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,_=!0):(p.color.copy(qu),_=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[v],s.y,s.z)):f===1?(a.up.set(0,0,o[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[v],s.z)):(a.up.set(0,o[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[v]));let g=this._cubeSize;gr(n,f*g,v>2?g:0,g,g),c.setRenderTarget(n),_&&c.render(m,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===dr||e.mapping===wn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;gr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Ms)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:m}=this,p=this._sizeLods[i],_=3*p*(i>m-4?i-m+4:0),d=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=m-t,gr(s,_,d,3*p,2*p),n.setRenderTarget(s),n.render(o,Ms),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,gr(e,_,d,3*p,2*p),n.setRenderTarget(e),n.render(o,Ms)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[n];h.material=c;let u=c.uniforms,m=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/39,_=s/p,d=isFinite(s)?1+Math.floor(3*_):ys;d>ys&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to 20`);let v=[],f=0;for(let T=0;T<ys;++T){let E=T/_,M=Math.exp(-E*E/2);v.push(M),T===0?f+=M:T<d&&(f+=2*M)}for(let T=0;T<v.length;T++)v[T]=v[T]/f;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-i;let y=this._sizeLods[n];gr(t,3*y*(n>g-4?n-g+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,Ms)}};function Yu(r,e,t){let i=new lt(r,e,t);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Zu(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ju(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var yo=class extends lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new jr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zt(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:Pn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ii});s.uniforms.tEquirect.value=t;let a=new Oe(n,s),o=t.minFilter;return t.minFilter===En&&(t.minFilter=It),new Ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Rp(r){let e=new WeakMap,t=new WeakMap,i=null;function n(o,l){return l===Qa?o.mapping=dr:l===eo&&(o.mapping=wn),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Qa||h===eo,m=h===dr||h===wn;if(u||m){let p=t.get(c),_=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return i===null&&(i=new vo(r)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let d=c.image;return u&&d&&d.height>0||m&&d&&(function(v){let f=0,g=6;for(let y=0;y<g;y++)v[y]!==void 0&&f++;return f===g})(d)?(i===null&&(i=new vo(r)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Qa||h===eo){if(e.has(c))return n(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let m=new yo(u.height);return m.fromEquirectangularTexture(r,c),e.set(c,m),c.addEventListener("dispose",s),n(m.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Pp(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&da("WebGLRenderer: "+i+" extension not supported."),n}}}function Ip(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,m=0;if(u===void 0)return;if(h!==null){let d=h.array;m=h.version;for(let v=0,f=d.length;v<f;v+=3){let g=d[v+0],y=d[v+1],T=d[v+2];c.push(g,y,y,T,T,g)}}else{let d=u.array;m=u.version;for(let v=0,f=d.length/3-1;v<f;v+=3){let g=v+0,y=v+1,T=v+2;c.push(g,y,y,T,T,g)}}let p=new(u.count>=65535?Hr:Vr)(c,1);p.version=m;let _=s.get(l);_&&e.remove(_),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Lp(r,e,t){let i,n,s;this.setMode=function(a){i=a},this.setIndex=function(a){n=a.type,s=a.bytesPerElement},this.render=function(a,o){r.drawElements(i,o,n,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(r.drawElementsInstanced(i,o,n,a*s,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,n,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,i,1)}}function Dp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:Ee("WebGLInfo: Unknown draw mode:",i)}}}}function Np(r,e,t){let i=new WeakMap,n=new Ke;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let F=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],g=0;m===!0&&(g=1),p===!0&&(g=2),_===!0&&(g=3);let y=a.attributes.position.count*g,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*h),M=new Br(E,y,T,h);M.type=ni,M.needsUpdate=!0;let N=4*g;for(let P=0;P<h;P++){let I=d[P],H=v[P],O=f[P],j=y*T*4*P;for(let k=0;k<I.count;k++){let z=k*N;m===!0&&(n.fromBufferAttribute(I,k),E[j+z+0]=n.x,E[j+z+1]=n.y,E[j+z+2]=n.z,E[j+z+3]=0),p===!0&&(n.fromBufferAttribute(H,k),E[j+z+4]=n.x,E[j+z+5]=n.y,E[j+z+6]=n.z,E[j+z+7]=0),_===!0&&(n.fromBufferAttribute(O,k),E[j+z+8]=n.x,E[j+z+9]=n.y,E[j+z+10]=n.z,E[j+z+11]=O.itemSize===4?n.w:1)}}u={count:h,texture:M,size:new Q(y,T)},i.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let p=a.morphTargetsRelative?1:1-m;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Up(r,e,t,i,n){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=n.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var Fp={[ds]:"LINEAR_TONE_MAPPING",[ps]:"REINHARD_TONE_MAPPING",[ms]:"CINEON_TONE_MAPPING",[Tn]:"ACES_FILMIC_TONE_MAPPING",[gs]:"AGX_TONE_MAPPING",[_s]:"NEUTRAL_TONE_MAPPING",[fs]:"CUSTOM_TONE_MAPPING"};function Op(r,e,t,i,n){let s=new lt(e,t,{type:r,depthBuffer:i,stencilBuffer:n,depthTexture:i?new Bi(e,t):void 0}),a=new lt(e,t,{type:St,depthBuffer:!1,stencilBuffer:!1}),o=new $e;o.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new be([0,2,0,0,2,0],2));let l=new sr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Oe(o,l),h=new an(-1,1,1,-1,0,1),u,m=null,p=null,_=!1,d=null,v=[],f=!1;this.setSize=function(g,y){s.setSize(g,y),a.setSize(g,y);for(let T=0;T<v.length;T++){let E=v[T];E.setSize&&E.setSize(g,y)}},this.setEffects=function(g){v=g,f=v.length>0&&v[0].isRenderPass===!0;let y=s.width,T=s.height;for(let E=0;E<v.length;E++){let M=v[E];M.setSize&&M.setSize(y,T)}},this.begin=function(g,y){if(_||g.toneMapping===hi&&v.length===0)return!1;if(d=y,y!==null){let T=y.width,E=y.height;s.width===T&&s.height===E||this.setSize(T,E)}return f===!1&&g.setRenderTarget(s),u=g.toneMapping,g.toneMapping=hi,!0},this.hasRenderPass=function(){return f},this.end=function(g,y){g.toneMapping=u,_=!0;let T=s,E=a;for(let M=0;M<v.length;M++){let N=v[M];if(N.enabled!==!1&&(N.render(g,E,T,y),N.needsSwap!==!1)){let F=T;T=E,E=F}}if(m!==g.outputColorSpace||p!==g.toneMapping){m=g.outputColorSpace,p=g.toneMapping,l.defines={},Ge.getTransfer(m)===Je&&(l.defines.SRGB_TRANSFER="");let M=Fp[p];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,g.setRenderTarget(d),g.render(c,h),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var gd=new Nt,Xc=new Bi(1,1),_d=new Br,vd=new ga,xd=new jr,Ku=[],$u=[],Qu=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function vr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Ku[n];if(s===void 0&&(s=new Float32Array(n),Ku[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function vt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function So(r,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Bp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function kp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function Gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function Vp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;td.set(i),r.uniformMatrix2fv(this.addr,!1,td),xt(t,i)}}function Hp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;ed.set(i),r.uniformMatrix3fv(this.addr,!1,ed),xt(t,i)}}function Wp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Qu.set(i),r.uniformMatrix4fv(this.addr,!1,Qu),xt(t,i)}}function Xp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function qp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function Yp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function Zp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Jp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function Kp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function $p(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function Qp(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Xc.compareFunction=t.isReversedDepthBuffer()?fo:mo,s=Xc):s=gd,t.setTexture2D(e||s,n)}function em(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||vd,n)}function tm(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||xd,n)}function im(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||_d,n)}function nm(r,e){r.uniform1fv(this.addr,e)}function rm(r,e){let t=vr(e,this.size,2);r.uniform2fv(this.addr,t)}function sm(r,e){let t=vr(e,this.size,3);r.uniform3fv(this.addr,t)}function am(r,e){let t=vr(e,this.size,4);r.uniform4fv(this.addr,t)}function om(r,e){let t=vr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lm(r,e){let t=vr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cm(r,e){let t=vr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hm(r,e){r.uniform1iv(this.addr,e)}function um(r,e){r.uniform2iv(this.addr,e)}function dm(r,e){r.uniform3iv(this.addr,e)}function pm(r,e){r.uniform4iv(this.addr,e)}function mm(r,e){r.uniform1uiv(this.addr,e)}function fm(r,e){r.uniform2uiv(this.addr,e)}function gm(r,e){r.uniform3uiv(this.addr,e)}function _m(r,e){r.uniform4uiv(this.addr,e)}function vm(r,e,t){let i=this.cache,n=e.length,s=So(t,n),a;vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s)),a=this.type===r.SAMPLER_2D_SHADOW?Xc:gd;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function xm(r,e,t){let i=this.cache,n=e.length,s=So(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||vd,s[a])}function ym(r,e,t){let i=this.cache,n=e.length,s=So(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||xd,s[a])}function Mm(r,e,t){let i=this.cache,n=e.length,s=So(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||_d,s[a])}var jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Bp;case 35664:return zp;case 35665:return kp;case 35666:return Gp;case 35674:return Vp;case 35675:return Hp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return im}})(t.type)}},qc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return nm;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return fm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}})(t.type)}},Yc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function id(r,e){r.seq.push(e),r.map[e.id]=e}function Sm(r,e,t){let i=r.name,n=i.length;for(Hc.lastIndex=0;;){let s=Hc.exec(i),a=Hc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){id(t,c===void 0?new jc(o,r,e):new qc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Yc(o),id(t,h)),t=h}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Sm(o,e.getUniformLocation(t,o.name),this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function nd(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var bm=0,rd=new Fe;function sd(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),m=Math.min(l+6,c.length);for(let p=u;p<m;p++){let _=p+1;h.push(`${_===l?">":" "} ${_}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function Tm(r,e){let t=(function(i){Ge._getMatrix(rd,Ge.workingColorSpace,i);let n=`mat3( ${rd.elements.map(s=>s.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Fr:return[n,"LinearTransferOETF"];case Je:return[n,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var wm={[ds]:"Linear",[ps]:"Reinhard",[ms]:"Cineon",[Tn]:"ACESFilmic",[gs]:"AgX",[_s]:"Neutral",[fs]:"Custom"};function Em(r,e){let t=wm[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _o=new A;function Am(){return Ge.getLuminanceCoefficients(_o),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${_o.x.toFixed(4)}, ${_o.y.toFixed(4)}, ${_o.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ss(r){return r!==""}function ad(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(r){return r.replace(Cm,Pm)}var Rm=new Map;function Pm(r,e){let t=ze[e];if(t===void 0){let i=Rm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=ze[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Zc(t)}var Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(r){return r.replace(Im,Lm)}function Lm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function cd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Dm={[cs]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"},Nm={[dr]:"ENVMAP_TYPE_CUBE",[wn]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"},Um={[wn]:"ENVMAP_MODE_REFRACTION"},Fm={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Eu]:"ENVMAP_BLENDING_ADD"};function Om(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(H){return Dm[H.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(H){return H.envMap===!1?"ENVMAP_TYPE_CUBE":Nm[H.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(H){return H.envMap===!1?"ENVMAP_MODE_REFLECTION":Um[H.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(H){return H.envMap===!1?"ENVMAP_BLENDING_NONE":Fm[H.combine]||"ENVMAP_BLENDING_NONE"})(t),m=(function(H){let O=H.envMapCubeUVHeight;if(O===null)return null;let j=Math.log2(O)-2,k=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:k,maxMip:j}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)})(t),_=(function(H){let O=[];for(let j in H){let k=H[j];k!==!1&&O.push("#define "+j+" "+k)}return O.join(`
`)})(s),d=n.createProgram(),v,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(v=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?ze.tonemapping_pars_fragment:"",t.toneMapping!==hi?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Tm("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Zc(a),a=ad(a,t),a=od(a,t),o=Zc(o),o=ad(o,t),o=od(o,t),a=ld(a),o=ld(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=g+v+a,T=g+f+o,E=nd(n,n.VERTEX_SHADER,y),M=nd(n,n.FRAGMENT_SHADER,T);function N(H){if(r.debug.checkShaderErrors){let O=n.getProgramInfoLog(d)||"",j=n.getShaderInfoLog(E)||"",k=n.getShaderInfoLog(M)||"",z=O.trim(),q=j.trim(),X=k.trim(),oe=!0,ue=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,d,E,M);else{let Te=sd(n,E,"vertex"),xe=sd(n,M,"fragment");Ee("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+z+`
`+Te+`
`+xe)}else z!==""?we("WebGLProgram: Program Info Log:",z):q!==""&&X!==""||(ue=!1);ue&&(H.diagnostics={runnable:oe,programLog:z,vertexShader:{log:q,prefix:v},fragmentShader:{log:X,prefix:f}})}n.deleteShader(E),n.deleteShader(M),F=new _r(n,d),P=(function(O,j){let k={},z=O.getProgramParameter(j,O.ACTIVE_ATTRIBUTES);for(let q=0;q<z;q++){let X=O.getActiveAttrib(j,q),oe=X.name,ue=1;X.type===O.FLOAT_MAT2&&(ue=2),X.type===O.FLOAT_MAT3&&(ue=3),X.type===O.FLOAT_MAT4&&(ue=4),k[oe]={type:X.type,location:O.getAttribLocation(j,oe),locationSize:ue}}return k})(n,d)}let F,P;n.attachShader(d,E),n.attachShader(d,M),t.index0AttributeName!==void 0?n.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),this.getUniforms=function(){return F===void 0&&N(this),F},this.getAttributes=function(){return P===void 0&&N(this),P};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(d,37297)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=M,this}var Bm=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Kc(e),t.set(e,i)),i}},Kc=class{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}};function zm(r,e,t,i,n,s){let a=new zr,o=new Jc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,m=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(d){return l.add(d),d===0?"uv":`uv${d}`}return{getParameters:function(d,v,f,g,y,T){let E=g.fog,M=y.geometry,N=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?g.environment:null,F=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,P=e.get(d.envMap||N,F),I=P&&P.mapping===vs?P.image.height:null,H=p[d.type];d.precision!==null&&(m=i.getMaxPrecision(d.precision),m!==d.precision&&we("WebGLProgram.getParameters:",d.precision,"not supported, using",m,"instead."));let O=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,j=O!==void 0?O.length:0,k,z,q,X,oe=0;if(M.morphAttributes.position!==void 0&&(oe=1),M.morphAttributes.normal!==void 0&&(oe=2),M.morphAttributes.color!==void 0&&(oe=3),H){let Ft=Ai[H];k=Ft.vertexShader,z=Ft.fragmentShader}else k=d.vertexShader,z=d.fragmentShader,o.update(d),q=o.getVertexShaderID(d),X=o.getFragmentShaderID(d);let ue=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),xe=y.isInstancedMesh===!0,ve=y.isBatchedMesh===!0,te=!!d.map,ae=!!d.matcap,ne=!!P,ge=!!d.aoMap,He=!!d.lightMap,ie=!!d.bumpMap,R=!!d.normalMap,S=!!d.displacementMap,C=!!d.emissiveMap,U=!!d.metalnessMap,x=!!d.roughnessMap,L=d.anisotropy>0,D=d.clearcoat>0,w=d.dispersion>0,V=d.iridescence>0,W=d.sheen>0,K=d.transmission>0,ee=L&&!!d.anisotropyMap,de=D&&!!d.clearcoatMap,Z=D&&!!d.clearcoatNormalMap,me=D&&!!d.clearcoatRoughnessMap,ce=V&&!!d.iridescenceMap,pe=V&&!!d.iridescenceThicknessMap,se=W&&!!d.sheenColorMap,ye=W&&!!d.sheenRoughnessMap,We=!!d.specularMap,tt=!!d.specularColorMap,Ye=!!d.specularIntensityMap,it=K&&!!d.transmissionMap,Dt=K&&!!d.thicknessMap,Me=!!d.gradientMap,ke=!!d.alphaMap,Pe=d.alphaTest>0,Qe=!!d.alphaHash,Et=!!d.extensions,pi=hi;d.toneMapped&&(ue!==null&&ue.isXRRenderTarget!==!0||(pi=r.toneMapping));let Yt={shaderID:H,shaderType:d.type,shaderName:d.name,vertexShader:k,fragmentShader:z,defines:d.defines,customVertexShaderID:q,customFragmentShaderID:X,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:m,batching:ve,batchingColor:ve&&y._colorsTexture!==null,instancing:xe,instancingColor:xe&&y.instanceColor!==null,instancingMorph:xe&&y.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:te,matcap:ae,envMap:ne,envMapMode:ne&&P.mapping,envMapCubeUVHeight:I,aoMap:ge,lightMap:He,bumpMap:ie,normalMap:R,displacementMap:S,emissiveMap:C,normalMapObjectSpace:R&&d.normalMapType===Pu,normalMapTangentSpace:R&&d.normalMapType===Ac,packedNormalMap:R&&d.normalMapType===Ac&&(gt=d.normalMap.format,gt===Cn||gt===uo||gt===po),metalnessMap:U,roughnessMap:x,anisotropy:L,anisotropyMap:ee,clearcoat:D,clearcoatMap:de,clearcoatNormalMap:Z,clearcoatRoughnessMap:me,dispersion:w,iridescence:V,iridescenceMap:ce,iridescenceThicknessMap:pe,sheen:W,sheenColorMap:se,sheenRoughnessMap:ye,specularMap:We,specularColorMap:tt,specularIntensityMap:Ye,transmission:K,transmissionMap:it,thicknessMap:Dt,gradientMap:Me,opaque:d.transparent===!1&&d.blending===hs&&d.alphaToCoverage===!1,alphaMap:ke,alphaTest:Pe,alphaHash:Qe,combine:d.combine,mapUv:te&&_(d.map.channel),aoMapUv:ge&&_(d.aoMap.channel),lightMapUv:He&&_(d.lightMap.channel),bumpMapUv:ie&&_(d.bumpMap.channel),normalMapUv:R&&_(d.normalMap.channel),displacementMapUv:S&&_(d.displacementMap.channel),emissiveMapUv:C&&_(d.emissiveMap.channel),metalnessMapUv:U&&_(d.metalnessMap.channel),roughnessMapUv:x&&_(d.roughnessMap.channel),anisotropyMapUv:ee&&_(d.anisotropyMap.channel),clearcoatMapUv:de&&_(d.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(d.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(d.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(d.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(d.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(d.sheenRoughnessMap.channel),specularMapUv:We&&_(d.specularMap.channel),specularColorMapUv:tt&&_(d.specularColorMap.channel),specularIntensityMapUv:Ye&&_(d.specularIntensityMap.channel),transmissionMapUv:it&&_(d.transmissionMap.channel),thicknessMapUv:Dt&&_(d.thicknessMap.channel),alphaMapUv:ke&&_(d.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||L),vertexNormals:!!M.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!M.attributes.uv&&(te||ke),fog:!!E,useFog:d.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:y.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:T.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:r.shadowMap.enabled&&f.length>0,shadowMapType:r.shadowMap.type,toneMapping:pi,decodeVideoTexture:te&&d.map.isVideoTexture===!0&&Ge.getTransfer(d.map.colorSpace)===Je,decodeVideoTextureEmissive:C&&d.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(d.emissiveMap.colorSpace)===Je,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===wi,flipSided:d.side===kt,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Et&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&d.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};var gt;return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt},getProgramCacheKey:function(d){let v=[];if(d.shaderID?v.push(d.shaderID):(v.push(d.customVertexShaderID),v.push(d.customFragmentShaderID)),d.defines!==void 0)for(let f in d.defines)v.push(f),v.push(d.defines[f]);return d.isRawShaderMaterial===!1&&((function(f,g){f.push(g.precision),f.push(g.outputColorSpace),f.push(g.envMapMode),f.push(g.envMapCubeUVHeight),f.push(g.mapUv),f.push(g.alphaMapUv),f.push(g.lightMapUv),f.push(g.aoMapUv),f.push(g.bumpMapUv),f.push(g.normalMapUv),f.push(g.displacementMapUv),f.push(g.emissiveMapUv),f.push(g.metalnessMapUv),f.push(g.roughnessMapUv),f.push(g.anisotropyMapUv),f.push(g.clearcoatMapUv),f.push(g.clearcoatNormalMapUv),f.push(g.clearcoatRoughnessMapUv),f.push(g.iridescenceMapUv),f.push(g.iridescenceThicknessMapUv),f.push(g.sheenColorMapUv),f.push(g.sheenRoughnessMapUv),f.push(g.specularMapUv),f.push(g.specularColorMapUv),f.push(g.specularIntensityMapUv),f.push(g.transmissionMapUv),f.push(g.thicknessMapUv),f.push(g.combine),f.push(g.fogExp2),f.push(g.sizeAttenuation),f.push(g.morphTargetsCount),f.push(g.morphAttributeCount),f.push(g.numDirLights),f.push(g.numPointLights),f.push(g.numSpotLights),f.push(g.numSpotLightMaps),f.push(g.numHemiLights),f.push(g.numRectAreaLights),f.push(g.numDirLightShadows),f.push(g.numPointLightShadows),f.push(g.numSpotLightShadows),f.push(g.numSpotLightShadowsWithMaps),f.push(g.numLightProbes),f.push(g.shadowMapType),f.push(g.toneMapping),f.push(g.numClippingPlanes),f.push(g.numClipIntersection),f.push(g.depthPacking)})(v,d),(function(f,g){a.disableAll(),g.instancing&&a.enable(0),g.instancingColor&&a.enable(1),g.instancingMorph&&a.enable(2),g.matcap&&a.enable(3),g.envMap&&a.enable(4),g.normalMapObjectSpace&&a.enable(5),g.normalMapTangentSpace&&a.enable(6),g.clearcoat&&a.enable(7),g.iridescence&&a.enable(8),g.alphaTest&&a.enable(9),g.vertexColors&&a.enable(10),g.vertexAlphas&&a.enable(11),g.vertexUv1s&&a.enable(12),g.vertexUv2s&&a.enable(13),g.vertexUv3s&&a.enable(14),g.vertexTangents&&a.enable(15),g.anisotropy&&a.enable(16),g.alphaHash&&a.enable(17),g.batching&&a.enable(18),g.dispersion&&a.enable(19),g.batchingColor&&a.enable(20),g.gradientMap&&a.enable(21),g.packedNormalMap&&a.enable(22),g.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),g.numLightProbeGrids>0&&a.enable(22),f.push(a.mask)})(v,d),v.push(r.outputColorSpace)),v.push(d.customProgramCacheKey),v.join()},getUniforms:function(d){let v=p[d.type],f;if(v){let g=Ai[v];f=Gi.clone(g.uniforms)}else f=d.uniforms;return f},acquireProgram:function(d,v){let f=h.get(v);return f!==void 0?++f.usedTimes:(f=new Om(r,v,d,n),c.push(f),h.set(v,f)),f},releaseProgram:function(d){if(--d.usedTimes===0){let v=c.indexOf(d);c[v]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}},releaseShaderCache:function(d){o.remove(d)},programs:c,dispose:function(){o.dispose()}}}function km(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function hd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ud(){let r=[],e=0,t=[],i=[],n=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,m){let p=r[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:m},r[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=m),e++,p}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,l,c,h,u,m){let p=a(o,l,c,h,u,m);c.transmission>0?i.push(p):c.transparent===!0?n.push(p):t.push(p)},unshift:function(o,l,c,h,u,m){let p=a(o,l,c,h,u,m);c.transmission>0?i.unshift(p):c.transparent===!0?n.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=r.length;o<l;o++){let c=r[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||Gm),i.length>1&&i.sort(l||hd),n.length>1&&n.sort(l||hd)}}}function Vm(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new ud,r.set(e,[n])):t>=i.length?(n=new ud,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Hm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ce};break;case"SpotLight":t={position:new A,direction:new A,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var Wm=0;function Xm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jm(r){let e=new Hm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let n=new A,s=new Be,a=new Be;return{setup:function(o){let l=0,c=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let u=0,m=0,p=0,_=0,d=0,v=0,f=0,g=0,y=0,T=0,E=0;o.sort(Xm);for(let N=0,F=o.length;N<F;N++){let P=o[N],I=P.color,H=P.intensity,O=P.distance,j=null;if(P.shadow&&P.shadow.map&&(j=P.shadow.map.texture.format===Cn?P.shadow.map.texture:P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)l+=I.r*H,c+=I.g*H,h+=I.b*H;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],H);E++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,i.directionalShadow[u]=q,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=P.shadow.matrix,v++}i.directional[u]=k,u++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(H),k.distance=O,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[p]=k;let z=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[p]=z.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=j,g++}p++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(I).multiplyScalar(H),k.halfWidth.set(.5*P.width,0,0),k.halfHeight.set(0,.5*P.height,0),i.rectArea[_]=k,_++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let z=P.shadow,q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=P.shadow.matrix,f++}i.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(H),k.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[d]=k,d++}}_>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let M=i.hash;M.directionalLength===u&&M.pointLength===m&&M.spotLength===p&&M.rectAreaLength===_&&M.hemiLength===d&&M.numDirectionalShadows===v&&M.numPointShadows===f&&M.numSpotShadows===g&&M.numSpotMaps===y&&M.numLightProbes===E||(i.directional.length=u,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=g+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,M.directionalLength=u,M.pointLength=m,M.spotLength=p,M.rectAreaLength=_,M.hemiLength=d,M.numDirectionalShadows=v,M.numPointShadows=f,M.numSpotShadows=g,M.numSpotMaps=y,M.numLightProbes=E,i.version=Wm++)},setupView:function(o,l){let c=0,h=0,u=0,m=0,p=0,_=l.matrixWorldInverse;for(let d=0,v=o.length;d<v;d++){let f=o[d];if(f.isDirectionalLight){let g=i.directional[c];g.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),g.direction.sub(n),g.direction.transformDirection(_),c++}else if(f.isSpotLight){let g=i.spot[u];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),g.direction.sub(n),g.direction.transformDirection(_),u++}else if(f.isRectAreaLight){let g=i.rectArea[m];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(_),a.identity(),s.copy(f.matrixWorld),s.premultiply(_),a.extractRotation(s),g.halfWidth.set(.5*f.width,0,0),g.halfHeight.set(0,.5*f.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),m++}else if(f.isPointLight){let g=i.point[h];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(_),h++}else if(f.isHemisphereLight){let g=i.hemi[p];g.direction.setFromMatrixPosition(f.matrixWorld),g.direction.transformDirection(_),p++}}},state:i}}function dd(r){let e=new jm(r),t=[],i=[],n=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,n.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){n.push(a)}}}function qm(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new dd(r),e.set(t,[s])):i>=n.length?(s=new dd(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var Ym=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Zm=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],pd=new Be,bs=new A,Wc=new A;function Jm(r,e,t){let i=new en,n=new Q,s=new Q,a=new Ke,o=new Fa,l=new Oa,c={},h=t.maxTextureSize,u={[hr]:kt,[kt]:hr,[wi]:wi},m=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let _=new $e;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new Oe(_,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let f=this.type;function g(M,N){let F=e.update(d);m.defines.VSM_SAMPLES!==M.blurSamples&&(m.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new lt(n.x,n.y,{format:Cn,type:St})),m.uniforms.shadow_pass.value=M.map.depthTexture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(N,null,F,m,d,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(N,null,F,p,d,null)}function y(M,N,F,P){let I=null,H=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(H!==void 0)I=H;else if(I=F.isPointLight===!0?l:o,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let O=I.uuid,j=N.uuid,k=c[O];k===void 0&&(k={},c[O]=k);let z=k[j];z===void 0&&(z=I.clone(),k[j]=z,N.addEventListener("dispose",E)),I=z}return I.visible=N.visible,I.wireframe=N.wireframe,I.side=P===cr?N.shadowSide!==null?N.shadowSide:N.side:N.shadowSide!==null?N.shadowSide:u[N.side],I.alphaMap=N.alphaMap,I.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,I.map=N.map,I.clipShadows=N.clipShadows,I.clippingPlanes=N.clippingPlanes,I.clipIntersection=N.clipIntersection,I.displacementMap=N.displacementMap,I.displacementScale=N.displacementScale,I.displacementBias=N.displacementBias,I.wireframeLinewidth=N.wireframeLinewidth,I.linewidth=N.linewidth,F.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(r.properties.get(I).light=F),I}function T(M,N,F,P,I){if(M.visible===!1)return;if(M.layers.test(N.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===cr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let O=e.update(M),j=M.material;if(Array.isArray(j)){let k=O.groups;for(let z=0,q=k.length;z<q;z++){let X=k[z],oe=j[X.materialIndex];if(oe&&oe.visible){let ue=y(M,oe,P,I);M.onBeforeShadow(r,M,N,F,O,ue,X),r.renderBufferDirect(F,null,O,ue,M,X),M.onAfterShadow(r,M,N,F,O,ue,X)}}}else if(j.visible){let k=y(M,j,P,I);M.onBeforeShadow(r,M,N,F,O,k,null),r.renderBufferDirect(F,null,O,k,M,null),M.onAfterShadow(r,M,N,F,O,k,null)}}let H=M.children;for(let O=0,j=H.length;O<j;O++)T(H[O],N,F,P,I)}function E(M){M.target.removeEventListener("dispose",E);for(let N in c){let F=c[N],P=M.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}this.render=function(M,N,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===Ka&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cs);let P=r.getRenderTarget(),I=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let j=f!==this.type;j&&N.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=M.length;k<z;k++){let q=M[k],X=q.shadow;if(X===void 0){we("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let oe=X.getFrameExtents();n.multiply(oe),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/oe.x),n.x=s.x*oe.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/oe.y),n.y=s.y*oe.y,X.mapSize.y=s.y));let ue=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ue,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===cr){if(q.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new lt(n.x,n.y,{format:Cn,type:St,minFilter:It,magFilter:It,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Bi(n.x,n.y,ni),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=on,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Kt,X.map.depthTexture.magFilter=Kt}else q.isPointLight?(X.map=new yo(n.x),X.map.depthTexture=new va(n.x,ki)):(X.map=new lt(n.x,n.y),X.map.depthTexture=new Bi(n.x,n.y,ki)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=on,this.type===cs?(X.map.depthTexture.compareFunction=ue?fo:mo,X.map.depthTexture.minFilter=It,X.map.depthTexture.magFilter=It):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Kt,X.map.depthTexture.magFilter=Kt);X.camera.updateProjectionMatrix()}let Te=X.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Te;xe++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(X.map),r.clear());let ve=X.getViewport(xe);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(a)}if(q.isPointLight){let ve=X.camera,te=X.matrix,ae=q.distance||ve.far;ae!==ve.far&&(ve.far=ae,ve.updateProjectionMatrix()),bs.setFromMatrixPosition(q.matrixWorld),ve.position.copy(bs),Wc.copy(ve.position),Wc.add(Ym[xe]),ve.up.copy(Zm[xe]),ve.lookAt(Wc),ve.updateMatrixWorld(),te.makeTranslation(-bs.x,-bs.y,-bs.z),pd.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),X._frustum.setFromProjectionMatrix(pd,ve.coordinateSystem,ve.reversedDepth)}else X.updateMatrices(q);i=X.getFrustum(),T(N,F,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===cr&&g(X,F),X.needsUpdate=!1}f=this.type,v.needsUpdate=!1,r.setRenderTarget(P,I,H)}}function Km(r,e){let t=new function(){let x=!1,L=new Ke,D=null,w=new Ke(0,0,0,0);return{setMask:function(V){D===V||x||(r.colorMask(V,V,V,V),D=V)},setLocked:function(V){x=V},setClear:function(V,W,K,ee,de){de===!0&&(V*=ee,W*=ee,K*=ee),L.set(V,W,K,ee),w.equals(L)===!1&&(r.clearColor(V,W,K,ee),w.copy(L))},reset:function(){x=!1,D=null,w.set(-1,0,0,0)}}},i=new function(){let x=!1,L=!1,D=null,w=null,V=null;return{setReversed:function(W){if(L!==W){let K=e.get("EXT_clip_control");W?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),L=W;let ee=V;V=null,this.setClear(ee)}},getReversed:function(){return L},setTest:function(W){W?ne(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(W){D===W||x||(r.depthMask(W),D=W)},setFunc:function(W){if(L&&(W=ku[W]),w!==W){switch(W){case Ol:r.depthFunc(r.NEVER);break;case Bl:r.depthFunc(r.ALWAYS);break;case zl:r.depthFunc(r.LESS);break;case $a:r.depthFunc(r.LEQUAL);break;case kl:r.depthFunc(r.EQUAL);break;case Gl:r.depthFunc(r.GEQUAL);break;case Vl:r.depthFunc(r.GREATER);break;case Hl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}w=W}},setLocked:function(W){x=W},setClear:function(W){V!==W&&(V=W,L&&(W=1-W),r.clearDepth(W))},reset:function(){x=!1,D=null,w=null,V=null,L=!1}}},n=new function(){let x=!1,L=null,D=null,w=null,V=null,W=null,K=null,ee=null,de=null;return{setTest:function(Z){x||(Z?ne(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(Z){L===Z||x||(r.stencilMask(Z),L=Z)},setFunc:function(Z,me,ce){D===Z&&w===me&&V===ce||(r.stencilFunc(Z,me,ce),D=Z,w=me,V=ce)},setOp:function(Z,me,ce){W===Z&&K===me&&ee===ce||(r.stencilOp(Z,me,ce),W=Z,K=me,ee=ce)},setLocked:function(Z){x=Z},setClear:function(Z){de!==Z&&(r.clearStencil(Z),de=Z)},reset:function(){x=!1,L=null,D=null,w=null,V=null,W=null,K=null,ee=null,de=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],m=null,p=!1,_=null,d=null,v=null,f=null,g=null,y=null,T=null,E=new Ce(0,0,0),M=0,N=!1,F=null,P=null,I=null,H=null,O=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,z=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=z>=2);let X=null,oe={},ue=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),xe=new Ke().fromArray(ue),ve=new Ke().fromArray(Te);function te(x,L,D,w){let V=new Uint8Array(4),W=r.createTexture();r.bindTexture(x,W),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let K=0;K<D;K++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(L,0,r.RGBA,1,1,w,0,r.RGBA,r.UNSIGNED_BYTE,V):r.texImage2D(L+K,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,V);return W}let ae={};function ne(x){o[x]!==!0&&(r.enable(x),o[x]=!0)}function ge(x){o[x]!==!1&&(r.disable(x),o[x]=!1)}ae[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),ne(r.DEPTH_TEST),i.setFunc($a),S(!1),C(Nl),ne(r.CULL_FACE),R(ii);let He={[ur]:r.FUNC_ADD,[su]:r.FUNC_SUBTRACT,[au]:r.FUNC_REVERSE_SUBTRACT};He[ou]=r.MIN,He[lu]=r.MAX;let ie={[cu]:r.ZERO,[hu]:r.ONE,[uu]:r.SRC_COLOR,[pu]:r.SRC_ALPHA,[xu]:r.SRC_ALPHA_SATURATE,[_u]:r.DST_COLOR,[fu]:r.DST_ALPHA,[du]:r.ONE_MINUS_SRC_COLOR,[mu]:r.ONE_MINUS_SRC_ALPHA,[vu]:r.ONE_MINUS_DST_COLOR,[gu]:r.ONE_MINUS_DST_ALPHA,[yu]:r.CONSTANT_COLOR,[Mu]:r.ONE_MINUS_CONSTANT_COLOR,[Su]:r.CONSTANT_ALPHA,[bu]:r.ONE_MINUS_CONSTANT_ALPHA};function R(x,L,D,w,V,W,K,ee,de,Z){if(x!==ii){if(p===!1&&(ne(r.BLEND),p=!0),x===ru)V=V||L,W=W||D,K=K||w,L===d&&V===g||(r.blendEquationSeparate(He[L],He[V]),d=L,g=V),D===v&&w===f&&W===y&&K===T||(r.blendFuncSeparate(ie[D],ie[w],ie[W],ie[K]),v=D,f=w,y=W,T=K),ee.equals(E)!==!1&&de===M||(r.blendColor(ee.r,ee.g,ee.b,de),E.copy(ee),M=de),_=x,N=!1;else if(x!==_||Z!==N){if(d===ur&&g===ur||(r.blendEquation(r.FUNC_ADD),d=ur,g=ur),Z)switch(x){case hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case us:r.blendFunc(r.ONE,r.ONE);break;case Ul:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ee("WebGLState: Invalid blending: ",x)}else switch(x){case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ul:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",x)}v=null,f=null,y=null,T=null,E.set(0,0,0),M=0,_=x,N=Z}}else p===!0&&(ge(r.BLEND),p=!1)}function S(x){F!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),F=x)}function C(x){x!==iu?(ne(r.CULL_FACE),x!==P&&(x===Nl?r.cullFace(r.BACK):x===nu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),P=x}function U(x,L,D){x?(ne(r.POLYGON_OFFSET_FILL),H===L&&O===D||(H=L,O=D,i.getReversed()&&(L=-L),r.polygonOffset(L,D))):ge(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:ne,disable:ge,bindFramebuffer:function(x,L){return c[x]!==L&&(r.bindFramebuffer(x,L),c[x]=L,x===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=L),x===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(x,L){let D=u,w=!1;if(x){D=h.get(L),D===void 0&&(D=[],h.set(L,D));let V=x.textures;if(D.length!==V.length||D[0]!==r.COLOR_ATTACHMENT0){for(let W=0,K=V.length;W<K;W++)D[W]=r.COLOR_ATTACHMENT0+W;D.length=V.length,w=!0}}else D[0]!==r.BACK&&(D[0]=r.BACK,w=!0);w&&r.drawBuffers(D)},useProgram:function(x){return m!==x&&(r.useProgram(x),m=x,!0)},setBlending:R,setMaterial:function(x,L){x.side===wi?ge(r.CULL_FACE):ne(r.CULL_FACE);let D=x.side===kt;L&&(D=!D),S(D),x.blending===hs&&x.transparent===!1?R(ii):R(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),i.setFunc(x.depthFunc),i.setTest(x.depthTest),i.setMask(x.depthWrite),t.setMask(x.colorWrite);let w=x.stencilWrite;n.setTest(w),w&&(n.setMask(x.stencilWriteMask),n.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),n.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),U(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:C,setLineWidth:function(x){x!==I&&(k&&r.lineWidth(x),I=x)},setPolygonOffset:U,setScissorTest:function(x){x?ne(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+j-1),X!==x&&(r.activeTexture(x),X=x)},bindTexture:function(x,L,D){D===void 0&&(D=X===null?r.TEXTURE0+j-1:X);let w=oe[D];w===void 0&&(w={type:void 0,texture:void 0},oe[D]=w),w.type===x&&w.texture===L||(X!==D&&(r.activeTexture(D),X=D),r.bindTexture(x,L||ae[x]),w.type=x,w.texture=L)},unbindTexture:function(){let x=oe[X];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},pixelStorei:function(x,L){l[x]!==L&&(r.pixelStorei(x,L),l[x]=L)},getParameter:function(x){return l[x]!==void 0?l[x]:r.getParameter(x)},updateUBOMapping:function(x,L){let D=a.get(L);D===void 0&&(D=new WeakMap,a.set(L,D));let w=D.get(x);w===void 0&&(w=r.getUniformBlockIndex(L,x.name),D.set(x,w))},uniformBlockBinding:function(x,L){let D=a.get(L).get(x);s.get(L)!==D&&(r.uniformBlockBinding(L,D,x.__bindingPointIndex),s.set(L,D))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(x){Ee("WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(x){Ee("WebGLState:",x)}},scissor:function(x){xe.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),xe.copy(x))},viewport:function(x){ve.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),ve.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},l={},X=null,oe={},c={},h=new WeakMap,u=[],m=null,p=!1,_=null,d=null,v=null,f=null,g=null,y=null,T=null,E=new Ce(0,0,0),M=0,N=!1,F=null,P=null,I=null,H=null,O=null,xe.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function $m(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u=new Set,m,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,S){return _?new OffscreenCanvas(R,S):Or("canvas")}function v(R,S,C){let U=1,x=ie(R);if((x.width>C||x.height>C)&&(U=C/Math.max(x.width,x.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let L=Math.floor(U*x.width),D=Math.floor(U*x.height);m===void 0&&(m=d(L,D));let w=S?d(L,D):m;return w.width=L,w.height=D,w.getContext("2d").drawImage(R,0,0,L,D),we("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+L+"x"+D+")."),w}return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),R}return R}function f(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(R,S,C,U,x,L=!1){if(R!==null){if(r[R]!==void 0)return r[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let D;U&&(D=e.get("EXT_texture_norm16"),D||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=S;if(S===r.RED&&(C===r.FLOAT&&(w=r.R32F),C===r.HALF_FLOAT&&(w=r.R16F),C===r.UNSIGNED_BYTE&&(w=r.R8),C===r.UNSIGNED_SHORT&&D&&(w=D.R16_EXT),C===r.SHORT&&D&&(w=D.R16_SNORM_EXT)),S===r.RED_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.R8UI),C===r.UNSIGNED_SHORT&&(w=r.R16UI),C===r.UNSIGNED_INT&&(w=r.R32UI),C===r.BYTE&&(w=r.R8I),C===r.SHORT&&(w=r.R16I),C===r.INT&&(w=r.R32I)),S===r.RG&&(C===r.FLOAT&&(w=r.RG32F),C===r.HALF_FLOAT&&(w=r.RG16F),C===r.UNSIGNED_BYTE&&(w=r.RG8),C===r.UNSIGNED_SHORT&&D&&(w=D.RG16_EXT),C===r.SHORT&&D&&(w=D.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.RG8UI),C===r.UNSIGNED_SHORT&&(w=r.RG16UI),C===r.UNSIGNED_INT&&(w=r.RG32UI),C===r.BYTE&&(w=r.RG8I),C===r.SHORT&&(w=r.RG16I),C===r.INT&&(w=r.RG32I)),S===r.RGB_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.RGB8UI),C===r.UNSIGNED_SHORT&&(w=r.RGB16UI),C===r.UNSIGNED_INT&&(w=r.RGB32UI),C===r.BYTE&&(w=r.RGB8I),C===r.SHORT&&(w=r.RGB16I),C===r.INT&&(w=r.RGB32I)),S===r.RGBA_INTEGER&&(C===r.UNSIGNED_BYTE&&(w=r.RGBA8UI),C===r.UNSIGNED_SHORT&&(w=r.RGBA16UI),C===r.UNSIGNED_INT&&(w=r.RGBA32UI),C===r.BYTE&&(w=r.RGBA8I),C===r.SHORT&&(w=r.RGBA16I),C===r.INT&&(w=r.RGBA32I)),S===r.RGB&&(C===r.UNSIGNED_SHORT&&D&&(w=D.RGB16_EXT),C===r.SHORT&&D&&(w=D.RGB16_SNORM_EXT),C===r.UNSIGNED_INT_5_9_9_9_REV&&(w=r.RGB9_E5),C===r.UNSIGNED_INT_10F_11F_11F_REV&&(w=r.R11F_G11F_B10F)),S===r.RGBA){let V=L?Fr:Ge.getTransfer(x);C===r.FLOAT&&(w=r.RGBA32F),C===r.HALF_FLOAT&&(w=r.RGBA16F),C===r.UNSIGNED_BYTE&&(w=V===Je?r.SRGB8_ALPHA8:r.RGBA8),C===r.UNSIGNED_SHORT&&D&&(w=D.RGBA16_EXT),C===r.SHORT&&D&&(w=D.RGBA16_SNORM_EXT),C===r.UNSIGNED_SHORT_4_4_4_4&&(w=r.RGBA4),C===r.UNSIGNED_SHORT_5_5_5_1&&(w=r.RGB5_A1)}return w!==r.R16F&&w!==r.R32F&&w!==r.RG16F&&w!==r.RG32F&&w!==r.RGBA16F&&w!==r.RGBA32F||e.get("EXT_color_buffer_float"),w}function E(R,S){let C;return R?S===null||S===ki||S===mr?C=r.DEPTH24_STENCIL8:S===ni?C=r.DEPTH32F_STENCIL8:S===pr&&(C=r.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===mr?C=r.DEPTH_COMPONENT24:S===ni?C=r.DEPTH_COMPONENT32F:S===pr&&(C=r.DEPTH_COMPONENT16),C}function M(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==It?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function N(R){let S=R.target;S.removeEventListener("dispose",N),(function(C){let U=i.get(C);if(U.__webglInit===void 0)return;let x=C.source,L=p.get(x);if(L){let D=L[U.__cacheKey];D.usedTimes--,D.usedTimes===0&&P(C),Object.keys(L).length===0&&p.delete(x)}i.remove(C)})(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function F(R){let S=R.target;S.removeEventListener("dispose",F),(function(C){let U=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(U.__webglFramebuffer[L]))for(let D=0;D<U.__webglFramebuffer[L].length;D++)r.deleteFramebuffer(U.__webglFramebuffer[L][D]);else r.deleteFramebuffer(U.__webglFramebuffer[L]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[L])}else{if(Array.isArray(U.__webglFramebuffer))for(let L=0;L<U.__webglFramebuffer.length;L++)r.deleteFramebuffer(U.__webglFramebuffer[L]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let L=0;L<U.__webglColorRenderbuffer.length;L++)U.__webglColorRenderbuffer[L]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[L]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let x=C.textures;for(let L=0,D=x.length;L<D;L++){let w=i.get(x[L]);w.__webglTexture&&(r.deleteTexture(w.__webglTexture),a.memory.textures--),i.remove(x[L])}i.remove(C)})(S)}function P(R){let S=i.get(R);r.deleteTexture(S.__webglTexture);let C=R.source;delete p.get(C)[S.__cacheKey],a.memory.textures--}let I=0;function H(R,S){let C=i.get(R);if(R.isVideoTexture&&(function(U){let x=a.render.frame;h.get(U)!==x&&(h.set(U,x),U.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let U=R.image;if(U===null)we("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void oe(C,R,S);we("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,C.__webglTexture,r.TEXTURE0+S)}let O={[xn]:r.REPEAT,[$i]:r.CLAMP_TO_EDGE,[ha]:r.MIRRORED_REPEAT},j={[Kt]:r.NEAREST,[Au]:r.NEAREST_MIPMAP_NEAREST,[xs]:r.NEAREST_MIPMAP_LINEAR,[It]:r.LINEAR,[to]:r.LINEAR_MIPMAP_NEAREST,[En]:r.LINEAR_MIPMAP_LINEAR},k={[Iu]:r.NEVER,[Fu]:r.ALWAYS,[Lu]:r.LESS,[mo]:r.LEQUAL,[Du]:r.EQUAL,[fo]:r.GEQUAL,[Nu]:r.GREATER,[Uu]:r.NOTEQUAL};function z(R,S){if(S.type!==ni||e.has("OES_texture_float_linear")!==!1||S.magFilter!==It&&S.magFilter!==to&&S.magFilter!==xs&&S.magFilter!==En&&S.minFilter!==It&&S.minFilter!==to&&S.minFilter!==xs&&S.minFilter!==En||we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,O[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,O[S.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,O[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,j[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,k[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==xs&&S.minFilter!==En||S.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(R,S){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",N));let U=S.source,x=p.get(U);x===void 0&&(x={},p.set(U,x));let L=(function(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()})(S);if(L!==R.__cacheKey){x[L]===void 0&&(x[L]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,C=!0),x[L].usedTimes++;let D=x[R.__cacheKey];D!==void 0&&(x[R.__cacheKey].usedTimes--,D.usedTimes===0&&P(S)),R.__cacheKey=L,R.__webglTexture=x[L].texture}return C}function X(R,S,C){return Math.floor(Math.floor(R/C)/S)}function oe(R,S,C){let U=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(U=r.TEXTURE_3D);let x=q(R,S),L=S.source;t.bindTexture(U,R.__webglTexture,r.TEXTURE0+C);let D=i.get(L);if(L.version!==D.__version||x===!0){if(t.activeTexture(r.TEXTURE0+C),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){let se=Ge.getPrimaries(Ge.workingColorSpace),ye=S.colorSpace===Rn?null:Ge.getPrimaries(S.colorSpace),We=S.colorSpace===Rn||se===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let w=v(S.image,!1,n.maxTextureSize);w=He(S,w);let V=s.convert(S.format,S.colorSpace),W=s.convert(S.type),K,ee=T(S.internalFormat,V,W,S.normalized,S.colorSpace,S.isVideoTexture);z(U,S);let de=S.mipmaps,Z=S.isVideoTexture!==!0,me=D.__version===void 0||x===!0,ce=L.dataReady,pe=M(S,w);if(S.isDepthTexture)ee=E(S.format===An,S.type),me&&(Z?t.texStorage2D(r.TEXTURE_2D,1,ee,w.width,w.height):t.texImage2D(r.TEXTURE_2D,0,ee,w.width,w.height,0,V,W,null));else if(S.isDataTexture)if(de.length>0){Z&&me&&t.texStorage2D(r.TEXTURE_2D,pe,ee,de[0].width,de[0].height);for(let se=0,ye=de.length;se<ye;se++)K=de[se],Z?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,K.width,K.height,V,W,K.data):t.texImage2D(r.TEXTURE_2D,se,ee,K.width,K.height,0,V,W,K.data);S.generateMipmaps=!1}else Z?(me&&t.texStorage2D(r.TEXTURE_2D,pe,ee,w.width,w.height),ce&&(function(se,ye,We,tt){let Ye=se.updateRanges;if(Ye.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye.width,ye.height,We,tt,ye.data);else{Ye.sort((Pe,Qe)=>Pe.start-Qe.start);let it=0;for(let Pe=1;Pe<Ye.length;Pe++){let Qe=Ye[it],Et=Ye[Pe],pi=Qe.start+Qe.count,Yt=X(Et.start,ye.width,4),gt=X(Qe.start,ye.width,4);Et.start<=pi+1&&Yt===gt&&X(Et.start+Et.count-1,ye.width,4)===Yt?Qe.count=Math.max(Qe.count,Et.start+Et.count-Qe.start):(++it,Ye[it]=Et)}Ye.length=it+1;let Dt=t.getParameter(r.UNPACK_ROW_LENGTH),Me=t.getParameter(r.UNPACK_SKIP_PIXELS),ke=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,ye.width);for(let Pe=0,Qe=Ye.length;Pe<Qe;Pe++){let Et=Ye[Pe],pi=Math.floor(Et.start/4),Yt=Math.ceil(Et.count/4),gt=pi%ye.width,Ft=Math.floor(pi/ye.width),Ln=Yt;t.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ft),t.texSubImage2D(r.TEXTURE_2D,0,gt,Ft,Ln,1,We,tt,ye.data)}se.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(r.UNPACK_SKIP_ROWS,ke)}})(S,w,V,W)):t.texImage2D(r.TEXTURE_2D,0,ee,w.width,w.height,0,V,W,w.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Z&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ee,de[0].width,de[0].height,w.depth);for(let se=0,ye=de.length;se<ye;se++)if(K=de[se],S.format!==ui)if(V!==null)if(Z){if(ce)if(S.layerUpdates.size>0){let We=Dc(K.width,K.height,S.format,S.type);for(let tt of S.layerUpdates){let Ye=K.data.subarray(tt*We/K.data.BYTES_PER_ELEMENT,(tt+1)*We/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,tt,K.width,K.height,1,V,Ye)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,w.depth,V,K.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,ee,K.width,K.height,w.depth,0,K.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,w.depth,V,W,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,ee,K.width,K.height,w.depth,0,V,W,K.data)}else{Z&&me&&t.texStorage2D(r.TEXTURE_2D,pe,ee,de[0].width,de[0].height);for(let se=0,ye=de.length;se<ye;se++)K=de[se],S.format!==ui?V!==null?Z?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,K.width,K.height,V,K.data):t.compressedTexImage2D(r.TEXTURE_2D,se,ee,K.width,K.height,0,K.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,K.width,K.height,V,W,K.data):t.texImage2D(r.TEXTURE_2D,se,ee,K.width,K.height,0,V,W,K.data)}else if(S.isDataArrayTexture)if(Z){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ee,w.width,w.height,w.depth),ce)if(S.layerUpdates.size>0){let se=Dc(w.width,w.height,S.format,S.type);for(let ye of S.layerUpdates){let We=w.data.subarray(ye*se/w.data.BYTES_PER_ELEMENT,(ye+1)*se/w.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,w.width,w.height,1,V,W,We)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,V,W,w.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,w.width,w.height,w.depth,0,V,W,w.data);else if(S.isData3DTexture)Z?(me&&t.texStorage3D(r.TEXTURE_3D,pe,ee,w.width,w.height,w.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,V,W,w.data)):t.texImage3D(r.TEXTURE_3D,0,ee,w.width,w.height,w.depth,0,V,W,w.data);else if(S.isFramebufferTexture){if(me)if(Z)t.texStorage2D(r.TEXTURE_2D,pe,ee,w.width,w.height);else{let se=w.width,ye=w.height;for(let We=0;We<pe;We++)t.texImage2D(r.TEXTURE_2D,We,ee,se,ye,0,V,W,null),se>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),w.parentNode!==se)return se.appendChild(w),u.add(S),se.onpaint=it=>{let Dt=it.changedElements;for(let Me of u)Dt.includes(Me.image)&&(Me.needsUpdate=!0)},void se.requestPaint();let ye=0,We=r.RGBA,tt=r.RGBA,Ye=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,ye,We,tt,Ye,w),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(Z&&me){let se=ie(de[0]);t.texStorage2D(r.TEXTURE_2D,pe,ee,se.width,se.height)}for(let se=0,ye=de.length;se<ye;se++)K=de[se],Z?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,V,W,K):t.texImage2D(r.TEXTURE_2D,se,ee,V,W,K);S.generateMipmaps=!1}else if(Z){if(me){let se=ie(w);t.texStorage2D(r.TEXTURE_2D,pe,ee,se.width,se.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,W,w)}else t.texImage2D(r.TEXTURE_2D,0,ee,V,W,w);f(S)&&g(U),D.__version=L.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ue(R,S,C,U,x,L){let D=s.convert(C.format,C.colorSpace),w=s.convert(C.type),V=T(C.internalFormat,D,w,C.normalized,C.colorSpace),W=i.get(S),K=i.get(C);if(K.__renderTarget=S,!W.__hasExternalTextures){let ee=Math.max(1,S.width>>L),de=Math.max(1,S.height>>L);x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?t.texImage3D(x,L,V,ee,de,S.depth,0,D,w,null):t.texImage2D(x,L,V,ee,de,0,D,w,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,x,K.__webglTexture,0,ne(S)):(x===r.TEXTURE_2D||x>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,x,K.__webglTexture,L),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(R,S,C){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let U=S.depthTexture,x=U&&U.isDepthTexture?U.type:null,L=E(S.stencilBuffer,x),D=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne(S),L,S.width,S.height):C?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne(S),L,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,L,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,D,r.RENDERBUFFER,R)}else{let U=S.textures;for(let x=0;x<U.length;x++){let L=U[x],D=s.convert(L.format,L.colorSpace),w=s.convert(L.type),V=T(L.internalFormat,D,w,L.normalized,L.colorSpace);ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne(S),V,S.width,S.height):C?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne(S),V,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,V,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(R,S,C){let U=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let x=i.get(S.depthTexture);if(x.__renderTarget=S,x.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U){if(x.__webglInit===void 0&&(x.__webglInit=!0,S.depthTexture.addEventListener("dispose",N)),x.__webglTexture===void 0){x.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture),z(r.TEXTURE_CUBE_MAP,S.depthTexture);let W=s.convert(S.depthTexture.format),K=s.convert(S.depthTexture.type),ee;S.depthTexture.format===on?ee=r.DEPTH_COMPONENT24:S.depthTexture.format===An&&(ee=r.DEPTH24_STENCIL8);for(let de=0;de<6;de++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ee,S.width,S.height,0,W,K,null)}}else H(S.depthTexture,0);let L=x.__webglTexture,D=ne(S),w=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+C:r.TEXTURE_2D,V=S.depthTexture.format===An?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===on)ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,w,L,0,D):r.framebufferTexture2D(r.FRAMEBUFFER,V,w,L,0);else{if(S.depthTexture.format!==An)throw new Error("Unknown depthTexture format");ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,w,L,0,D):r.framebufferTexture2D(r.FRAMEBUFFER,V,w,L,0)}}function ve(R){let S=i.get(R),C=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),U){let x=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,U.removeEventListener("dispose",x)};U.addEventListener("dispose",x),S.__depthDisposeCallback=x}S.__boundDepthTexture=U}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(C)for(let U=0;U<6;U++)xe(S.__webglFramebuffer[U],R,U);else{let U=R.texture.mipmaps;U&&U.length>0?xe(S.__webglFramebuffer[0],R,0):xe(S.__webglFramebuffer,R,0)}else if(C){S.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[U]),S.__webglDepthbuffer[U]===void 0)S.__webglDepthbuffer[U]=r.createRenderbuffer(),Te(S.__webglDepthbuffer[U],R,!1);else{let x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=S.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,L)}}else{let U=R.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Te(S.__webglDepthbuffer,R,!1);else{let x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,x,r.RENDERBUFFER,L)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let te=[],ae=[];function ne(R){return Math.min(n.maxSamples,R.samples)}function ge(R){let S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(R,S){let C=R.colorSpace,U=R.format,x=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==Ur&&C!==Rn&&(Ge.getTransfer(C)===Je?U===ui&&x===jt||we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",C)),S}function ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=I;return R>=n.maxTextures&&we("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),I+=1,R},this.resetTextureUnits=function(){I=0},this.getTextureUnits=function(){return I},this.setTextureUnits=function(R){I=R},this.setTexture2D=H,this.setTexture2DArray=function(R,S){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?oe(C,R,S):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,C.__webglTexture,r.TEXTURE0+S))},this.setTexture3D=function(R,S){let C=i.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?oe(C,R,S):t.bindTexture(r.TEXTURE_3D,C.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(R,S){let C=i.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(U,x,L){if(x.image.length!==6)return;let D=q(U,x),w=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+L);let V=i.get(w);if(w.version!==V.__version||D===!0){t.activeTexture(r.TEXTURE0+L);let W=Ge.getPrimaries(Ge.workingColorSpace),K=x.colorSpace===Rn?null:Ge.getPrimaries(x.colorSpace),ee=x.colorSpace===Rn||W===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let de=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,me=[];for(let Me=0;Me<6;Me++)me[Me]=de||Z?Z?x.image[Me].image:x.image[Me]:v(x.image[Me],!0,n.maxCubemapSize),me[Me]=He(x,me[Me]);let ce=me[0],pe=s.convert(x.format,x.colorSpace),se=s.convert(x.type),ye=T(x.internalFormat,pe,se,x.normalized,x.colorSpace),We=x.isVideoTexture!==!0,tt=V.__version===void 0||D===!0,Ye=w.dataReady,it,Dt=M(x,ce);if(z(r.TEXTURE_CUBE_MAP,x),de){We&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,ye,ce.width,ce.height);for(let Me=0;Me<6;Me++){it=me[Me].mipmaps;for(let ke=0;ke<it.length;ke++){let Pe=it[ke];x.format!==ui?pe!==null?We?Ye&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,Pe.width,Pe.height,pe,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ye,Pe.width,Pe.height,0,Pe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,Pe.width,Pe.height,pe,se,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ye,Pe.width,Pe.height,0,pe,se,Pe.data)}}}else{if(it=x.mipmaps,We&&tt){it.length>0&&Dt++;let Me=ie(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Dt,ye,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Z){We?Ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me[Me].width,me[Me].height,pe,se,me[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,me[Me].width,me[Me].height,0,pe,se,me[Me].data);for(let ke=0;ke<it.length;ke++){let Pe=it[ke].image[Me].image;We?Ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,Pe.width,Pe.height,pe,se,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ye,Pe.width,Pe.height,0,pe,se,Pe.data)}}else{We?Ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe,se,me[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,pe,se,me[Me]);for(let ke=0;ke<it.length;ke++){let Pe=it[ke];We?Ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,pe,se,Pe.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ye,pe,se,Pe.image[Me])}}}f(x)&&g(r.TEXTURE_CUBE_MAP),V.__version=w.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version})(C,R,S):t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(R,S,C){let U=i.get(R);S!==void 0&&ue(U.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),C!==void 0&&ve(R)},this.setupRenderTarget=function(R){let S=R.texture,C=i.get(R),U=i.get(S);R.addEventListener("dispose",F);let x=R.textures,L=R.isWebGLCubeRenderTarget===!0,D=x.length>1;if(D||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=S.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let w=0;w<6;w++)if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer[w]=[];for(let V=0;V<S.mipmaps.length;V++)C.__webglFramebuffer[w][V]=r.createFramebuffer()}else C.__webglFramebuffer[w]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer=[];for(let w=0;w<S.mipmaps.length;w++)C.__webglFramebuffer[w]=r.createFramebuffer()}else C.__webglFramebuffer=r.createFramebuffer();if(D)for(let w=0,V=x.length;w<V;w++){let W=i.get(x[w]);W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){C.__webglMultisampledFramebuffer=r.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let w=0;w<x.length;w++){let V=x[w];C.__webglColorRenderbuffer[w]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,C.__webglColorRenderbuffer[w]);let W=s.convert(V.format,V.colorSpace),K=s.convert(V.type),ee=T(V.internalFormat,W,K,V.normalized,V.colorSpace,R.isXRRenderTarget===!0),de=ne(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,de,ee,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+w,r.RENDERBUFFER,C.__webglColorRenderbuffer[w])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),z(r.TEXTURE_CUBE_MAP,S);for(let w=0;w<6;w++)if(S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)ue(C.__webglFramebuffer[w][V],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+w,V);else ue(C.__webglFramebuffer[w],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);f(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let w=0,V=x.length;w<V;w++){let W=x[w],K=i.get(W),ee=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),z(ee,W),ue(C.__webglFramebuffer,R,W,r.COLOR_ATTACHMENT0+w,ee,0),f(W)&&g(ee)}t.unbindTexture()}else{let w=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(w=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(w,U.__webglTexture),z(w,S),S.mipmaps&&S.mipmaps.length>0)for(let V=0;V<S.mipmaps.length;V++)ue(C.__webglFramebuffer[V],R,S,r.COLOR_ATTACHMENT0,w,V);else ue(C.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,w,0);f(S)&&g(w),t.unbindTexture()}R.depthBuffer&&ve(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let C=0,U=S.length;C<U;C++){let x=S[C];if(f(x)){let L=y(R),D=i.get(x).__webglTexture;t.bindTexture(L,D),g(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(ge(R)===!1){let S=R.textures,C=R.width,U=R.height,x=r.COLOR_BUFFER_BIT,L=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=i.get(R),w=S.length>1;if(w)for(let W=0;W<S.length;W++)t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer);let V=R.texture.mipmaps;V&&V.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let W=0;W<S.length;W++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(x|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(x|=r.STENCIL_BUFFER_BIT)),w){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,D.__webglColorRenderbuffer[W]);let K=i.get(S[W]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,C,U,0,0,C,U,x,r.NEAREST),l===!0&&(te.length=0,ae.length=0,te.push(r.COLOR_ATTACHMENT0+W),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(L),ae.push(L),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),w)for(let W=0;W<S.length;W++){t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,D.__webglColorRenderbuffer[W]);let K=i.get(S[W]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D,K,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qm(r,e){return{convert:function(t,i=Rn){let n,s=Ge.getTransfer(i);if(t===jt)return r.UNSIGNED_BYTE;if(t===no)return r.UNSIGNED_SHORT_4_4_4_4;if(t===ro)return r.UNSIGNED_SHORT_5_5_5_1;if(t===ql)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Yl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===Xl)return r.BYTE;if(t===jl)return r.SHORT;if(t===pr)return r.UNSIGNED_SHORT;if(t===io)return r.INT;if(t===ki)return r.UNSIGNED_INT;if(t===ni)return r.FLOAT;if(t===St)return r.HALF_FLOAT;if(t===Cu)return r.ALPHA;if(t===Ru)return r.RGB;if(t===ui)return r.RGBA;if(t===on)return r.DEPTH_COMPONENT;if(t===An)return r.DEPTH_STENCIL;if(t===so)return r.RED;if(t===ao)return r.RED_INTEGER;if(t===Cn)return r.RG;if(t===Zl)return r.RG_INTEGER;if(t===Jl)return r.RGBA_INTEGER;if(t===oo||t===lo||t===co||t===ho)if(s===Je){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===oo)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===lo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===co)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ho)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===oo)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===lo)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===co)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ho)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Kl||t===$l||t===Ql||t===ec){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Kl)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===$l)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ql)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ec)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===tc||t===ic||t===nc||t===rc||t===sc||t===uo||t===ac){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===tc||t===ic)return s===Je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===nc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(t===rc)return n.COMPRESSED_R11_EAC;if(t===sc)return n.COMPRESSED_SIGNED_R11_EAC;if(t===uo)return n.COMPRESSED_RG11_EAC;if(t===ac)return n.COMPRESSED_SIGNED_RG11_EAC}if(t===oc||t===lc||t===cc||t===hc||t===uc||t===dc||t===pc||t===mc||t===fc||t===gc||t===_c||t===vc||t===xc||t===yc){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===oc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===lc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===cc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===hc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===uc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===dc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===pc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===mc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===fc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===gc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===_c)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===vc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===xc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===yc)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Mc||t===Sc||t===bc){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Mc)return s===Je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Sc)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===bc)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Tc||t===wc||t===po||t===Ec){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Tc)return n.COMPRESSED_RED_RGTC1_EXT;if(t===wc)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===po)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ec)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===mr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var $c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new qr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ct({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends Si{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,m=null,p=null,_=null,d=typeof XRWebGLBinding<"u",v=new $c,f={},g=t.getContextAttributes(),y=null,T=null,E=[],M=[],N=new Q,F=null,P=new Pt;P.viewport=new Ke;let I=new Pt;I.viewport=new Ke;let H=[P,I],O=new Za,j=null,k=null;function z(te){let ae=M.indexOf(te.inputSource);if(ae===-1)return;let ne=E[ae];ne!==void 0&&(ne.update(te.inputSource,te.frame,c||a),ne.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",X);for(let te=0;te<E.length;te++){let ae=M[te];ae!==null&&(M[te]=null,E[te].disconnect(ae))}j=null,k=null,v.reset();for(let te in f)delete f[te];e.setRenderTarget(y),p=null,m=null,u=null,n=null,T=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}function X(te){for(let ae=0;ae<te.removed.length;ae++){let ne=te.removed[ae],ge=M.indexOf(ne);ge>=0&&(M[ge]=null,E[ge].disconnect(ne))}for(let ae=0;ae<te.added.length;ae++){let ne=te.added[ae],ge=M.indexOf(ne);if(ge===-1){for(let ie=0;ie<E.length;ie++){if(ie>=M.length){M.push(ne),ge=ie;break}if(M[ie]===null){M[ie]=ne,ge=ie;break}}if(ge===-1)break}let He=E[ge];He&&He.connect(ne)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=E[te];return ae===void 0&&(ae=new Qn,E[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=E[te];return ae===void 0&&(ae=new Qn,E[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=E[te];return ae===void 0&&(ae=new Qn,E[te]=ae),ae.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return u===null&&d&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(te){if(n=te,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",q),n.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),d&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ne=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?An:on,ne=g.stencil?mr:ki);let He={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};u=this.getBinding(),m=u.createProjectionLayer(He),n.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new lt(m.textureWidth,m.textureHeight,{format:ui,type:jt,depthTexture:new Bi(m.textureWidth,m.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new lt(p.framebufferWidth,p.framebufferHeight,{format:ui,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ve.setContext(n),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let oe=new A,ue=new A;function Te(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(n===null)return;let ae=te.near,ne=te.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(ne=v.depthFar)),O.near=I.near=P.near=ae,O.far=I.far=P.far=ne,j===O.near&&k===O.far||(n.updateRenderState({depthNear:O.near,depthFar:O.far}),j=O.near,k=O.far),O.layers.mask=6|te.layers.mask,P.layers.mask=-5&O.layers.mask,I.layers.mask=-3&O.layers.mask;let ge=te.parent,He=O.cameras;Te(O,ge);for(let ie=0;ie<He.length;ie++)Te(He[ie],ge);He.length===2?(function(ie,R,S){oe.setFromMatrixPosition(R.matrixWorld),ue.setFromMatrixPosition(S.matrixWorld);let C=oe.distanceTo(ue),U=R.projectionMatrix.elements,x=S.projectionMatrix.elements,L=U[14]/(U[10]-1),D=U[14]/(U[10]+1),w=(U[9]+1)/U[5],V=(U[9]-1)/U[5],W=(U[8]-1)/U[0],K=(x[8]+1)/x[0],ee=L*W,de=L*K,Z=C/(-W+K),me=Z*-W;if(R.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(me),ie.translateZ(Z),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),U[10]===-1)ie.projectionMatrix.copy(R.projectionMatrix),ie.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let ce=L+Z,pe=D+Z,se=ee-me,ye=de+(C-me),We=w*D/pe*ce,tt=V*D/pe*ce;ie.projectionMatrix.makePerspective(se,ye,We,tt,ce,pe),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}})(O,P,I):O.projectionMatrix.copy(P.projectionMatrix),(function(ie,R,S){S===null?ie.matrix.copy(R.matrixWorld):(ie.matrix.copy(S.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(R.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(R.projectionMatrix),ie.projectionMatrixInverse.copy(R.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=2*pa*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)})(te,O,ge)},this.getCamera=function(){return O},this.getFoveation=function(){if(m!==null||p!==null)return l},this.setFoveation=function(te){l=te,m!==null&&(m.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(te){return f[te]};let xe=null,ve=new md;ve.setAnimationLoop(function(te,ae){if(h=ae.getViewerPose(c||a),_=ae,h!==null){let ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ge=!1;ne.length!==O.cameras.length&&(O.cameras.length=0,ge=!0);for(let ie=0;ie<ne.length;ie++){let R=ne[ie],S=null;if(p!==null)S=p.getViewport(R);else{let U=u.getViewSubImage(m,R);S=U.viewport,ie===0&&(e.setRenderTargetTextures(T,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(T))}let C=H[ie];C===void 0&&(C=new Pt,C.layers.enable(ie),C.viewport=new Ke,H[ie]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(S.x,S.y,S.width,S.height),ie===0&&(O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ge===!0&&O.cameras.push(C)}let He=n.enabledFeatures;if(He&&He.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&d){u=i.getBinding();let ie=u.getDepthInformation(ne[0]);ie&&ie.isValid&&ie.texture&&v.init(ie,n.renderState)}if(He&&He.includes("camera-access")&&d){e.state.unbindTexture(),u=i.getBinding();for(let ie=0;ie<ne.length;ie++){let R=ne[ie].camera;if(R){let S=f[R];S||(S=new qr,f[R]=S);let C=u.getCameraImage(R);S.sourceTexture=C}}}}for(let ne=0;ne<E.length;ne++){let ge=M[ne],He=E[ne];ge!==null&&He!==void 0&&He.update(ge,ae,c||a)}xe&&xe(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}),this.setAnimationLoop=function(te){xe=te},this.dispose=function(){}}},ef=new Be,yd=new Fe;function tf(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===kt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===kt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,n.envMapRotation.value.setFromMatrix4(ef.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&n.envMapRotation.value.premultiply(yd),n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Ic(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(n,s):s.isMeshLambertMaterial?(i(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s),s.envMap&&(n.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===kt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,u,m){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*m,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function nf(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,m,p,_){let d=u.value,v=m+"_"+p;if(_[v]===void 0)return typeof d=="number"||typeof d=="boolean"?_[v]=d:ArrayBuffer.isView(d)?_[v]=d.slice():_[v]=d.clone(),!0;{let f=_[v];if(typeof d=="number"||typeof d=="boolean"){if(f!==d)return _[v]=d,!0}else{if(ArrayBuffer.isView(d))return!0;if(f.equals(d)===!1)return f.copy(d),!0}}return!1}function c(u){let m={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(m.boundary=4,m.storage=4):u.isVector2?(m.boundary=8,m.storage=8):u.isVector3||u.isColor?(m.boundary=16,m.storage=12):u.isVector4?(m.boundary=16,m.storage=16):u.isMatrix3?(m.boundary=48,m.storage=48):u.isMatrix4?(m.boundary=64,m.storage=64):u.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(m.boundary=16,m.storage=u.byteLength):we("WebGLRenderer: Unsupported uniform value type.",u),m}function h(u){let m=u.target;m.removeEventListener("dispose",h);let p=a.indexOf(m.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[m.id]),delete n[m.id],delete s[m.id]}return{bind:function(u,m){let p=m.program;i.uniformBlockBinding(u,p)},update:function(u,m){let p=n[u.id];p===void 0&&((function(v){let f=v.uniforms,g=0,y=16;for(let E=0,M=f.length;E<M;E++){let N=Array.isArray(f[E])?f[E]:[f[E]];for(let F=0,P=N.length;F<P;F++){let I=N[F],H=Array.isArray(I.value)?I.value:[I.value];for(let O=0,j=H.length;O<j;O++){let k=c(H[O]),z=g%y,q=z%k.boundary,X=z+q;g+=q,X!==0&&y-X<k.storage&&(g+=y-X),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=g,g+=k.storage}}}let T=g%y;T>0&&(g+=y-T),v.__size=g,v.__cache={}})(u),p=(function(v){let f=(function(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();v.__bindingPointIndex=f;let g=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,g),g})(u),n[u.id]=p,u.addEventListener("dispose",h));let _=m.program;i.updateUBOMapping(u,_);let d=e.render.frame;s[u.id]!==d&&((function(v){let f=n[v.id],g=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let T=0,E=g.length;T<E;T++){let M=Array.isArray(g[T])?g[T]:[g[T]];for(let N=0,F=M.length;N<F;N++){let P=M[N];if(l(P,T,N,y)===!0){let I=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],O=0;for(let j=0;j<H.length;j++){let k=H[j],z=c(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+O,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):ArrayBuffer.isView(k)?P.__data.set(new k.constructor(k.buffer,k.byteOffset,P.__data.length)):(k.toArray(P.__data,O),O+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=d)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}yd.set(-1,0,0,0,1,0,0,0,1);var rf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null,Mo=class{constructor(e={}){let{canvas:t=Ou(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:m=!1,outputBufferType:p=jt}=e,_;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let d=p,v=new Set([Jl,Zl,ao]),f=new Set([jt,ki,pr,mr,no,ro]),g=new Uint32Array(4),y=new Int32Array(4),T=new A,E=null,M=null,N=[],F=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,H=!1,O=null;this._outputColorSpace=Rt;let j=0,k=0,z=null,q=-1,X=null,oe=new Ke,ue=new Ke,Te=null,xe=new Ce(0),ve=0,te=t.width,ae=t.height,ne=1,ge=null,He=null,ie=new Ke(0,0,te,ae),R=new Ke(0,0,te,ae),S=!1,C=new en,U=!1,x=!1,L=new Be,D=new A,w=new Ke,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},W=!1;function K(){return z===null?ne:1}let ee,de,Z,me,ce,pe,se,ye,We,tt,Ye,it,Dt,Me,ke,Pe,Qe,Et,pi,Yt,gt,Ft,Ln,B=i;function ch(b,G){return t.getContext(b,G)}try{let b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"184"}`),t.addEventListener("webglcontextlost",uh,!1),t.addEventListener("webglcontextrestored",dh,!1),t.addEventListener("webglcontextcreationerror",ph,!1),B===null){let G="webgl2";if(B=ch(G,b),B===null)throw ch(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ee("WebGLRenderer: "+b.message),b}function hh(){ee=new Pp(B),ee.init(),gt=new Qm(B,ee),de=new Ep(B,ee,e,gt),Z=new Km(B,ee),de.reversedDepthBuffer&&m&&Z.buffers.depth.setReversed(!0),me=new Dp(B),ce=new km,pe=new $m(B,ee,Z,ce,de,gt,me),se=new Rp(I),ye=new Mp(B),Ft=new Tp(B,ye),We=new Ip(B,ye,me,Ft),tt=new Up(B,We,ye,Ft,me),Et=new Np(B,de,pe),ke=new Ap(ce),Ye=new zm(I,se,ee,de,Ft,ke),it=new tf(I,ce),Dt=new Vm,Me=new qm(ee),Qe=new bp(I,se,Z,tt,_,l),Pe=new Jm(I,tt,de),Ln=new nf(B,me,de,Z),pi=new wp(B,ee,me),Yt=new Lp(B,ee,me),me.programs=Ye.programs,I.capabilities=de,I.extensions=ee,I.properties=ce,I.renderLists=Dt,I.shadowMap=Pe,I.state=Z,I.info=me}hh(),d!==jt&&(P=new Op(d,t.width,t.height,n,s));let ut=new Qc(I,B);function uh(b){b.preventDefault(),Rc("WebGLRenderer: Context Lost."),H=!0}function dh(){Rc("WebGLRenderer: Context Restored."),H=!1;let b=me.autoReset,G=Pe.enabled,Y=Pe.autoUpdate,$=Pe.needsUpdate,J=Pe.type;hh(),me.autoReset=b,Pe.enabled=G,Pe.autoUpdate=Y,Pe.needsUpdate=$,Pe.type=J}function ph(b){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mh(b){let G=b.target;G.removeEventListener("dispose",mh),(function(Y){(function($){let J=ce.get($).programs;J!==void 0&&(J.forEach(function(re){Ye.releaseProgram(re)}),$.isShaderMaterial&&Ye.releaseShaderCache($))})(Y),ce.remove(Y)})(G)}function fh(b,G,Y){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=kt,b.needsUpdate=!0,Ns(b,G,Y),b.side=hr,b.needsUpdate=!0,Ns(b,G,Y),b.side=wi):Ns(b,G,Y)}this.xr=ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(te,ae,!1))},this.getSize=function(b){return b.set(te,ae)},this.setSize=function(b,G,Y=!0){ut.isPresenting?we("WebGLRenderer: Can't change size while VR device is presenting."):(te=b,ae=G,t.width=Math.floor(b*ne),t.height=Math.floor(G*ne),Y===!0&&(t.style.width=b+"px",t.style.height=G+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,G))},this.getDrawingBufferSize=function(b){return b.set(te*ne,ae*ne).floor()},this.setDrawingBufferSize=function(b,G,Y){te=b,ae=G,ne=Y,t.width=Math.floor(b*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,b,G)},this.setEffects=function(b){if(d!==jt){if(b){for(let G=0;G<b.length;G++)if(b[G].isOutputPass===!0){we("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])}else Ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(b){return b.copy(oe)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,G,Y,$){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,G,Y,$),Z.viewport(oe.copy(ie).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,G,Y,$){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,G,Y,$),Z.scissor(ue.copy(R).multiplyScalar(ne).round())},this.getScissorTest=function(){return S},this.setScissorTest=function(b){Z.setScissorTest(S=b)},this.setOpaqueSort=function(b){ge=b},this.setTransparentSort=function(b){He=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,Y=!0){let $=0;if(b){let J=!1;if(z!==null){let re=z.texture.format;J=v.has(re)}if(J){let re=z.texture.type,he=f.has(re),fe=Qe.getClearColor(),_e=Qe.getClearAlpha(),Ie=fe.r,je=fe.g,qe=fe.b;he?(g[0]=Ie,g[1]=je,g[2]=qe,g[3]=_e,B.clearBufferuiv(B.COLOR,0,g)):(y[0]=Ie,y[1]=je,y[2]=qe,y[3]=_e,B.clearBufferiv(B.COLOR,0,y))}else $|=B.COLOR_BUFFER_BIT}G&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",uh,!1),t.removeEventListener("webglcontextrestored",dh,!1),t.removeEventListener("webglcontextcreationerror",ph,!1),Qe.dispose(),Dt.dispose(),Me.dispose(),ce.dispose(),se.dispose(),tt.dispose(),Ft.dispose(),Ln.dispose(),Ye.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",gh),ut.removeEventListener("sessionend",_h),dn.stop()},this.renderBufferDirect=function(b,G,Y,$,J,re){G===null&&(G=V);let he=J.isMesh&&J.matrixWorld.determinant()<0,fe=(function(Xe,rt,wt,Le,Ue){rt.isScene!==!0&&(rt=V),pe.resetTextureUnits();let ri=rt.fog,Vo=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial?rt.environment:null,Us=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ge.workingColorSpace,br=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial&&!Le.envMap||Le.isMeshPhongMaterial&&!Le.envMap,mi=se.get(Le.envMap||Vo,br),Dn=Le.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,Ci=!!wt.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),Ho=!!wt.morphAttributes.position,Nn=!!wt.morphAttributes.normal,Ld=!!wt.morphAttributes.color,bh=hi;Le.toneMapped&&(z!==null&&z.isXRRenderTarget!==!0||(bh=I.toneMapping));let Th=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,Dd=Th!==void 0?Th.length:0,Ne=ce.get(Le),pn=M.state.lights;if(U===!0&&(x===!0||Xe!==X)){let pt=Xe===X&&Le.id===q;ke.setState(Le,Xe,pt)}let si=!1;Le.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==pn.state.version||Ne.outputColorSpace!==Us||Ue.isBatchedMesh&&Ne.batching===!1?si=!0:Ue.isBatchedMesh||Ne.batching!==!0?Ue.isBatchedMesh&&Ne.batchingColor===!0&&Ue.colorTexture===null||Ue.isBatchedMesh&&Ne.batchingColor===!1&&Ue.colorTexture!==null||Ue.isInstancedMesh&&Ne.instancing===!1?si=!0:Ue.isInstancedMesh||Ne.instancing!==!0?Ue.isSkinnedMesh&&Ne.skinning===!1?si=!0:Ue.isSkinnedMesh||Ne.skinning!==!0?Ue.isInstancedMesh&&Ne.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&Ne.instancingColor===!1&&Ue.instanceColor!==null||Ue.isInstancedMesh&&Ne.instancingMorph===!0&&Ue.morphTexture===null||Ue.isInstancedMesh&&Ne.instancingMorph===!1&&Ue.morphTexture!==null||Ne.envMap!==mi||Le.fog===!0&&Ne.fog!==ri?si=!0:Ne.numClippingPlanes===void 0||Ne.numClippingPlanes===ke.numPlanes&&Ne.numIntersection===ke.numIntersection?(Ne.vertexAlphas!==Dn||Ne.vertexTangents!==Ci||Ne.morphTargets!==Ho||Ne.morphNormals!==Nn||Ne.morphColors!==Ld||Ne.toneMapping!==bh||Ne.morphTargetsCount!==Dd||!!Ne.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(si=!0):si=!0:si=!0:si=!0:si=!0:(si=!0,Ne.__version=Le.version);let Hi=Ne.currentProgram;si===!0&&(Hi=Ns(Le,rt,Ue),O&&Le.isNodeMaterial&&O.onUpdateProgram(Le,Hi,Ne));let wh=!1,Un=!1,Wo=!1,st=Hi.getUniforms(),Zt=Ne.uniforms;if(Z.useProgram(Hi.program)&&(wh=!0,Un=!0,Wo=!0),Le.id!==q&&(q=Le.id,Un=!0),Ne.needsLights){let pt=(function(gi,jo){if(gi.length===0)return null;if(gi.length===1)return gi[0].texture!==null?gi[0]:null;T.setFromMatrixPosition(jo.matrixWorld);for(let Fn=0,Nd=gi.length;Fn<Nd;Fn++){let qo=gi[Fn];if(qo.texture!==null&&qo.boundingBox.containsPoint(T))return qo}return null})(M.state.lightProbeGridArray,Ue);Ne.lightProbeGrid!==pt&&(Ne.lightProbeGrid=pt,Un=!0)}if(wh||X!==Xe){Z.buffers.depth.getReversed()&&Xe.reversedDepth!==!0&&(Xe._reversedDepth=!0,Xe.updateProjectionMatrix()),st.setValue(B,"projectionMatrix",Xe.projectionMatrix),st.setValue(B,"viewMatrix",Xe.matrixWorldInverse);let pt=st.map.cameraPosition;pt!==void 0&&pt.setValue(B,D.setFromMatrixPosition(Xe.matrixWorld)),de.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&st.setValue(B,"isOrthographic",Xe.isOrthographicCamera===!0),X!==Xe&&(X=Xe,Un=!0,Wo=!0)}if(Ne.needsLights&&(pn.state.directionalShadowMap.length>0&&st.setValue(B,"directionalShadowMap",pn.state.directionalShadowMap,pe),pn.state.spotShadowMap.length>0&&st.setValue(B,"spotShadowMap",pn.state.spotShadowMap,pe),pn.state.pointShadowMap.length>0&&st.setValue(B,"pointShadowMap",pn.state.pointShadowMap,pe)),Ue.isSkinnedMesh){st.setOptional(B,Ue,"bindMatrix"),st.setOptional(B,Ue,"bindMatrixInverse");let pt=Ue.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),st.setValue(B,"boneTexture",pt.boneTexture,pe))}Ue.isBatchedMesh&&(st.setOptional(B,Ue,"batchingTexture"),st.setValue(B,"batchingTexture",Ue._matricesTexture,pe),st.setOptional(B,Ue,"batchingIdTexture"),st.setValue(B,"batchingIdTexture",Ue._indirectTexture,pe),st.setOptional(B,Ue,"batchingColorTexture"),Ue._colorsTexture!==null&&st.setValue(B,"batchingColorTexture",Ue._colorsTexture,pe));let Xo=wt.morphAttributes;if(Xo.position===void 0&&Xo.normal===void 0&&Xo.color===void 0||Et.update(Ue,wt,Hi),(Un||Ne.receiveShadow!==Ue.receiveShadow)&&(Ne.receiveShadow=Ue.receiveShadow,st.setValue(B,"receiveShadow",Ue.receiveShadow)),(Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial)&&Le.envMap===null&&rt.environment!==null&&(Zt.envMapIntensity.value=rt.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=(Ei===null&&(Ei=new Wr(rf,16,16,Cn,St),Ei.name="DFG_LUT",Ei.minFilter=It,Ei.magFilter=It,Ei.wrapS=$i,Ei.wrapT=$i,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei)),Un){if(st.setValue(B,"toneMappingExposure",I.toneMappingExposure),Ne.needsLights&&(ai=Wo,(fi=Zt).ambientLightColor.needsUpdate=ai,fi.lightProbe.needsUpdate=ai,fi.directionalLights.needsUpdate=ai,fi.directionalLightShadows.needsUpdate=ai,fi.pointLights.needsUpdate=ai,fi.pointLightShadows.needsUpdate=ai,fi.spotLights.needsUpdate=ai,fi.spotLightShadows.needsUpdate=ai,fi.rectAreaLights.needsUpdate=ai,fi.hemisphereLights.needsUpdate=ai),ri&&Le.fog===!0&&it.refreshFogUniforms(Zt,ri),it.refreshMaterialUniforms(Zt,Le,ne,ae,M.state.transmissionRenderTarget[Xe.id]),Ne.needsLights&&Ne.lightProbeGrid){let pt=Ne.lightProbeGrid;Zt.probesSH.value=pt.texture,Zt.probesMin.value.copy(pt.boundingBox.min),Zt.probesMax.value.copy(pt.boundingBox.max),Zt.probesResolution.value.copy(pt.resolution)}_r.upload(B,Mh(Ne),Zt,pe)}var fi,ai;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(_r.upload(B,Mh(Ne),Zt,pe),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&st.setValue(B,"center",Ue.center),st.setValue(B,"modelViewMatrix",Ue.modelViewMatrix),st.setValue(B,"normalMatrix",Ue.normalMatrix),st.setValue(B,"modelMatrix",Ue.matrixWorld),Le.uniformsGroups!==void 0){let pt=Le.uniformsGroups;for(let gi=0,jo=pt.length;gi<jo;gi++){let Fn=pt[gi];Ln.update(Fn,Hi),Ln.bind(Fn,Hi)}}return Hi})(b,G,Y,$,J);Z.setMaterial($,he);let _e=Y.index,Ie=1;if($.wireframe===!0){if(_e=We.getWireframeAttribute(Y),_e===void 0)return;Ie=2}let je=Y.drawRange,qe=Y.attributes.position,Ae=je.start*Ie,Ze=(je.start+je.count)*Ie;re!==null&&(Ae=Math.max(Ae,re.start*Ie),Ze=Math.min(Ze,(re.start+re.count)*Ie)),_e!==null?(Ae=Math.max(Ae,0),Ze=Math.min(Ze,_e.count)):qe!=null&&(Ae=Math.max(Ae,0),Ze=Math.min(Ze,qe.count));let _t=Ze-Ae;if(_t<0||_t===1/0)return;let dt;Ft.setup(J,$,fe,Y,_e);let nt=pi;if(_e!==null&&(dt=ye.get(_e),nt=Yt,nt.setIndex(dt)),J.isMesh)$.wireframe===!0?(Z.setLineWidth($.wireframeLinewidth*K()),nt.setMode(B.LINES)):nt.setMode(B.TRIANGLES);else if(J.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),Z.setLineWidth(Xe*K()),J.isLineSegments?nt.setMode(B.LINES):J.isLineLoop?nt.setMode(B.LINE_LOOP):nt.setMode(B.LINE_STRIP)}else J.isPoints?nt.setMode(B.POINTS):J.isSprite&&nt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Xe=J._multiDrawStarts,rt=J._multiDrawCounts,wt=J._multiDrawCount,Le=_e?ye.get(_e).bytesPerElement:1,Ue=ce.get($).currentProgram.getUniforms();for(let ri=0;ri<wt;ri++)Ue.setValue(B,"_gl_DrawID",ri),nt.render(Xe[ri]/Le,rt[ri])}else if(J.isInstancedMesh)nt.renderInstances(Ae,_t,J.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,rt=Math.min(Y.instanceCount,Xe);nt.renderInstances(Ae,_t,rt)}else nt.render(Ae,_t)},this.compile=function(b,G,Y=null){Y===null&&(Y=b),M=Me.get(Y),M.init(G),F.push(M),Y.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),b!==Y&&b.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights();let $=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let re=J.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let fe=re[he];fh(fe,Y,J),$.add(fe)}else fh(re,Y,J),$.add(re)}),M=F.pop(),$},this.compileAsync=function(b,G,Y=null){let $=this.compile(b,G,Y);return new Promise(J=>{function re(){$.forEach(function(he){ce.get(he).currentProgram.isReady()&&$.delete(he)}),$.size!==0?setTimeout(re,10):J(b)}ee.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ko=null;function gh(){dn.stop()}function _h(){dn.start()}let dn=new md;function Go(b,G,Y,$){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||C.intersectsSprite(b)){$&&w.setFromMatrixPosition(b.matrixWorld).applyMatrix4(L);let re=tt.update(b),he=b.material;he.visible&&E.push(b,re,he,Y,w.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||C.intersectsObject(b))){let re=tt.update(b),he=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),w.copy(b.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),w.copy(re.boundingSphere.center)),w.applyMatrix4(b.matrixWorld).applyMatrix4(L)),Array.isArray(he)){let fe=re.groups;for(let _e=0,Ie=fe.length;_e<Ie;_e++){let je=fe[_e],qe=he[je.materialIndex];qe&&qe.visible&&E.push(b,re,qe,Y,w.z,je)}}else he.visible&&E.push(b,re,he,Y,w.z,null)}}let J=b.children;for(let re=0,he=J.length;re<he;re++)Go(J[re],G,Y,$)}function vh(b,G,Y,$){let{opaque:J,transmissive:re,transparent:he}=b;M.setupLightsView(Y),U===!0&&ke.setGlobalState(I.clippingPlanes,Y),$&&Z.viewport(oe.copy($)),J.length>0&&Ds(J,G,Y),re.length>0&&Ds(re,G,Y),he.length>0&&Ds(he,G,Y),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function xh(b,G,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[$.id]===void 0){let qe=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[$.id]=new lt(1,1,{generateMipmaps:!0,type:qe?St:jt,minFilter:En,samples:Math.max(4,de.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let J=M.state.transmissionRenderTarget[$.id],re=$.viewport||oe;J.setSize(re.z*I.transmissionResolutionScale,re.w*I.transmissionResolutionScale);let he=I.getRenderTarget(),fe=I.getActiveCubeFace(),_e=I.getActiveMipmapLevel();I.setRenderTarget(J),I.getClearColor(xe),ve=I.getClearAlpha(),ve<1&&I.setClearColor(16777215,.5),I.clear(),W&&Qe.render(Y);let Ie=I.toneMapping;I.toneMapping=hi;let je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),M.setupLightsView($),U===!0&&ke.setGlobalState(I.clippingPlanes,$),Ds(b,Y,$),pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J),ee.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ae=0,Ze=G.length;Ae<Ze;Ae++){let _t=G[Ae],{object:dt,geometry:nt,material:Xe,group:rt}=_t;if(Xe.side===wi&&dt.layers.test($.layers)){let wt=Xe.side;Xe.side=kt,Xe.needsUpdate=!0,yh(dt,Y,$,nt,Xe,rt),Xe.side=wt,Xe.needsUpdate=!0,qe=!0}}qe===!0&&(pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J))}I.setRenderTarget(he,fe,_e),I.setClearColor(xe,ve),je!==void 0&&($.viewport=je),I.toneMapping=Ie}function Ds(b,G,Y){let $=G.isScene===!0?G.overrideMaterial:null;for(let J=0,re=b.length;J<re;J++){let he=b[J],{object:fe,geometry:_e,group:Ie}=he,je=he.material;je.allowOverride===!0&&$!==null&&(je=$),fe.layers.test(Y.layers)&&yh(fe,G,Y,_e,je,Ie)}}function yh(b,G,Y,$,J,re){b.onBeforeRender(I,G,Y,$,J,re),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(I,G,Y,$,b,re),J.transparent===!0&&J.side===wi&&J.forceSinglePass===!1?(J.side=kt,J.needsUpdate=!0,I.renderBufferDirect(Y,G,$,J,b,re),J.side=hr,J.needsUpdate=!0,I.renderBufferDirect(Y,G,$,J,b,re),J.side=wi):I.renderBufferDirect(Y,G,$,J,b,re),b.onAfterRender(I,G,Y,$,J,re)}function Ns(b,G,Y){G.isScene!==!0&&(G=V);let $=ce.get(b),J=M.state.lights,re=M.state.shadowsArray,he=J.state.version,fe=Ye.getParameters(b,J.state,re,G,Y,M.state.lightProbeGridArray),_e=Ye.getProgramCacheKey(fe),Ie=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=se.get(b.envMap||$.environment,je),$.envMapRotation=$.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",mh),Ie=new Map,$.programs=Ie);let qe=Ie.get(_e);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===he)return Sh(b,fe),qe}else fe.uniforms=Ye.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,Y,fe),b.onBeforeCompile(fe,I),qe=Ye.acquireProgram(fe,_e),Ie.set(_e,qe),$.uniforms=fe.uniforms;let Ae=$.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Ae.clippingPlanes=ke.uniform),Sh(b,fe),$.needsLights=(function(Ze){return Ze.isMeshLambertMaterial||Ze.isMeshToonMaterial||Ze.isMeshPhongMaterial||Ze.isMeshStandardMaterial||Ze.isShadowMaterial||Ze.isShaderMaterial&&Ze.lights===!0})(b),$.lightsStateVersion=he,$.needsLights&&(Ae.ambientLightColor.value=J.state.ambient,Ae.lightProbe.value=J.state.probe,Ae.directionalLights.value=J.state.directional,Ae.directionalLightShadows.value=J.state.directionalShadow,Ae.spotLights.value=J.state.spot,Ae.spotLightShadows.value=J.state.spotShadow,Ae.rectAreaLights.value=J.state.rectArea,Ae.ltc_1.value=J.state.rectAreaLTC1,Ae.ltc_2.value=J.state.rectAreaLTC2,Ae.pointLights.value=J.state.point,Ae.pointLightShadows.value=J.state.pointShadow,Ae.hemisphereLights.value=J.state.hemi,Ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ae.spotLightMatrix.value=J.state.spotLightMatrix,Ae.spotLightMap.value=J.state.spotLightMap,Ae.pointShadowMatrix.value=J.state.pointShadowMatrix),$.lightProbeGrid=M.state.lightProbeGridArray.length>0,$.currentProgram=qe,$.uniformsList=null,qe}function Mh(b){if(b.uniformsList===null){let G=b.currentProgram.getUniforms();b.uniformsList=_r.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Sh(b,G){let Y=ce.get(b);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}dn.setAnimationLoop(function(b){ko&&ko(b)}),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(b){ko=b,ut.setAnimationLoop(b),b===null?dn.stop():dn.start()},ut.addEventListener("sessionstart",gh),ut.addEventListener("sessionend",_h),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0)return void Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(H===!0)return;O!==null&&O.renderStart(b,G);let Y=ut.enabled===!0&&ut.isPresenting===!0,$=P!==null&&(z===null||Y)&&P.begin(I,z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ut.enabled!==!0||ut.isPresenting!==!0||P!==null&&P.isCompositing()!==!1||(ut.cameraAutoUpdate===!0&&ut.updateCamera(G),G=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,G,z),M=Me.get(b,F.length),M.init(G),M.state.textureUnits=pe.getTextureUnits(),F.push(M),L.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),C.setFromProjectionMatrix(L,Fi,G.reversedDepth),x=this.localClippingEnabled,U=ke.init(this.clippingPlanes,x),E=Dt.get(b,N.length),E.init(),N.push(E),ut.enabled===!0&&ut.isPresenting===!0){let re=I.xr.getDepthSensingMesh();re!==null&&Go(re,G,-1/0,I.sortObjects)}Go(b,G,0,I.sortObjects),E.finish(),I.sortObjects===!0&&E.sort(ge,He),W=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,W&&Qe.addToRenderList(E,b),this.info.render.frame++,U===!0&&ke.beginShadows();let J=M.state.shadowsArray;if(Pe.render(J,b,G),U===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&P.hasRenderPass())===!1){let re=E.opaque,he=E.transmissive;if(M.setupLights(),G.isArrayCamera){let fe=G.cameras;if(he.length>0)for(let _e=0,Ie=fe.length;_e<Ie;_e++)xh(re,he,b,fe[_e]);W&&Qe.render(b);for(let _e=0,Ie=fe.length;_e<Ie;_e++){let je=fe[_e];vh(E,b,je,je.viewport)}}else he.length>0&&xh(re,he,b,G),W&&Qe.render(b),vh(E,b,G)}z!==null&&k===0&&(pe.updateMultisampleRenderTarget(z),pe.updateRenderTargetMipmap(z)),$&&P.end(I),b.isScene===!0&&b.onAfterRender(I,b,G),Ft.resetDefaultState(),q=-1,X=null,F.pop(),F.length>0?(M=F[F.length-1],pe.setTextureUnits(M.state.textureUnits),U===!0&&ke.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),E=N.length>0?N[N.length-1]:null,O!==null&&O.renderEnd()},this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,G,Y){let $=ce.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ce.get(b.texture).__webglTexture=G,ce.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){let Y=ce.get(b);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};let Rd=B.createFramebuffer();this.setRenderTarget=function(b,G=0,Y=0){z=b,j=G,k=Y;let $=null,J=!1,re=!1;if(b){let he=ce.get(b);if(he.__useDefaultFramebuffer!==void 0)return Z.bindFramebuffer(B.FRAMEBUFFER,he.__webglFramebuffer),oe.copy(b.viewport),ue.copy(b.scissor),Te=b.scissorTest,Z.viewport(oe),Z.scissor(ue),Z.setScissorTest(Te),void(q=-1);if(he.__webglFramebuffer===void 0)pe.setupRenderTarget(b);else if(he.__hasExternalTextures)pe.rebindTextures(b,ce.get(b.texture).__webglTexture,ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ie=b.depthTexture;if(he.__boundDepthTexture!==Ie){if(Ie!==null&&ce.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(b)}}let fe=b.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(re=!0);let _e=ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?($=Array.isArray(_e[G])?_e[G][Y]:_e[G],J=!0):$=b.samples>0&&pe.useMultisampledRTT(b)===!1?ce.get(b).__webglMultisampledFramebuffer:Array.isArray(_e)?_e[Y]:_e,oe.copy(b.viewport),ue.copy(b.scissor),Te=b.scissorTest}else oe.copy(ie).multiplyScalar(ne).floor(),ue.copy(R).multiplyScalar(ne).floor(),Te=S;if(Y!==0&&($=Rd),Z.bindFramebuffer(B.FRAMEBUFFER,$)&&Z.drawBuffers(b,$),Z.viewport(oe),Z.scissor(ue),Z.setScissorTest(Te),J){let he=ce.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,he.__webglTexture,Y)}else if(re){let he=G;for(let fe=0;fe<b.textures.length;fe++){let _e=ce.get(b.textures[fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+fe,_e.__webglTexture,Y,he)}}else if(b!==null&&Y!==0){let he=ce.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,he.__webglTexture,Y)}q=-1},this.readRenderTargetPixels=function(b,G,Y,$,J,re,he,fe=0){if(!b||!b.isWebGLRenderTarget)return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){Z.bindFramebuffer(B.FRAMEBUFFER,_e);try{let Ie=b.textures[fe],je=Ie.format,qe=Ie.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!de.textureFormatReadable(je))return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(qe))return void Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=b.width-$&&Y>=0&&Y<=b.height-J&&B.readPixels(G,Y,$,J,gt.convert(je),gt.convert(qe),re)}finally{let Ie=z!==null?ce.get(z).__webglFramebuffer:null;Z.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,G,Y,$,J,re,he,fe=0){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){if(G>=0&&G<=b.width-$&&Y>=0&&Y<=b.height-J){Z.bindFramebuffer(B.FRAMEBUFFER,_e);let Ie=b.textures[fe],je=Ie.format,qe=Ie.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe),!de.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ae),B.bufferData(B.PIXEL_PACK_BUFFER,re.byteLength,B.STREAM_READ),B.readPixels(G,Y,$,J,gt.convert(je),gt.convert(qe),0);let Ze=z!==null?ce.get(z).__webglFramebuffer:null;Z.bindFramebuffer(B.FRAMEBUFFER,Ze);let _t=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zu(B,_t,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ae),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,re),B.deleteBuffer(Ae),B.deleteSync(_t),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,Y=0){let $=Math.pow(2,-Y),J=Math.floor(b.image.width*$),re=Math.floor(b.image.height*$),he=G!==null?G.x:0,fe=G!==null?G.y:0;pe.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,he,fe,J,re),Z.unbindTexture()};let Pd=B.createFramebuffer(),Id=B.createFramebuffer();this.copyTextureToTexture=function(b,G,Y=null,$=null,J=0,re=0){let he,fe,_e,Ie,je,qe,Ae,Ze,_t,dt=b.isCompressedTexture?b.mipmaps[re]:b.image;if(Y!==null)he=Y.max.x-Y.min.x,fe=Y.max.y-Y.min.y,_e=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,je=Y.min.y,qe=Y.isBox3?Y.min.z:0;else{let mi=Math.pow(2,-J);he=Math.floor(dt.width*mi),fe=Math.floor(dt.height*mi),_e=b.isDataArrayTexture?dt.depth:b.isData3DTexture?Math.floor(dt.depth*mi):1,Ie=0,je=0,qe=0}$!==null?(Ae=$.x,Ze=$.y,_t=$.z):(Ae=0,Ze=0,_t=0);let nt=gt.convert(G.format),Xe=gt.convert(G.type),rt;G.isData3DTexture?(pe.setTexture3D(G,0),rt=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(pe.setTexture2DArray(G,0),rt=B.TEXTURE_2D_ARRAY):(pe.setTexture2D(G,0),rt=B.TEXTURE_2D),Z.activeTexture(B.TEXTURE0),Z.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),Z.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Z.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let wt=Z.getParameter(B.UNPACK_ROW_LENGTH),Le=Z.getParameter(B.UNPACK_IMAGE_HEIGHT),Ue=Z.getParameter(B.UNPACK_SKIP_PIXELS),ri=Z.getParameter(B.UNPACK_SKIP_ROWS),Vo=Z.getParameter(B.UNPACK_SKIP_IMAGES);Z.pixelStorei(B.UNPACK_ROW_LENGTH,dt.width),Z.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt.height),Z.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),Z.pixelStorei(B.UNPACK_SKIP_ROWS,je),Z.pixelStorei(B.UNPACK_SKIP_IMAGES,qe);let Us=b.isDataArrayTexture||b.isData3DTexture,br=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){let mi=ce.get(b),Dn=ce.get(G),Ci=ce.get(mi.__renderTarget),Ho=ce.get(Dn.__renderTarget);Z.bindFramebuffer(B.READ_FRAMEBUFFER,Ci.__webglFramebuffer),Z.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ho.__webglFramebuffer);for(let Nn=0;Nn<_e;Nn++)Us&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.get(b).__webglTexture,J,qe+Nn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ce.get(G).__webglTexture,re,_t+Nn)),B.blitFramebuffer(Ie,je,he,fe,Ae,Ze,he,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);Z.bindFramebuffer(B.READ_FRAMEBUFFER,null),Z.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||ce.has(b)){let mi=ce.get(b),Dn=ce.get(G);Z.bindFramebuffer(B.READ_FRAMEBUFFER,Pd),Z.bindFramebuffer(B.DRAW_FRAMEBUFFER,Id);for(let Ci=0;Ci<_e;Ci++)Us?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mi.__webglTexture,J,qe+Ci):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mi.__webglTexture,J),br?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dn.__webglTexture,re,_t+Ci):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dn.__webglTexture,re),J!==0?B.blitFramebuffer(Ie,je,he,fe,Ae,Ze,he,fe,B.COLOR_BUFFER_BIT,B.NEAREST):br?B.copyTexSubImage3D(rt,re,Ae,Ze,_t+Ci,Ie,je,he,fe):B.copyTexSubImage2D(rt,re,Ae,Ze,Ie,je,he,fe);Z.bindFramebuffer(B.READ_FRAMEBUFFER,null),Z.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else br?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(rt,re,Ae,Ze,_t,he,fe,_e,nt,Xe,dt.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(rt,re,Ae,Ze,_t,he,fe,_e,nt,dt.data):B.texSubImage3D(rt,re,Ae,Ze,_t,he,fe,_e,nt,Xe,dt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,re,Ae,Ze,he,fe,nt,Xe,dt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,re,Ae,Ze,dt.width,dt.height,nt,dt.data):B.texSubImage2D(B.TEXTURE_2D,re,Ae,Ze,he,fe,nt,Xe,dt);Z.pixelStorei(B.UNPACK_ROW_LENGTH,wt),Z.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le),Z.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),Z.pixelStorei(B.UNPACK_SKIP_ROWS,ri),Z.pixelStorei(B.UNPACK_SKIP_IMAGES,Vo),re===0&&G.generateMipmaps&&B.generateMipmap(rt),Z.unbindTexture()},this.initRenderTarget=function(b){ce.get(b).__webglFramebuffer===void 0&&pe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pe.setTextureCube(b,0):b.isData3DTexture?pe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pe.setTexture2DArray(b,0):pe.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){j=0,k=0,z=null,Z.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Se={round:{durationSec:60,idleReturnSec:20,countdownSec:3},difficulty:{speedStart:11,speedEnd:21,gapStart:24,gapEnd:13,rampCurve:.6},zone:{centerZ:-7,halfDepth:5.2},scoring:{basePoints:100,missPenalty:0,streakBonusEvery:5,streakBonusStep:20,streakBonusMax:120},streak:{speedPerStreak:.01,speedMaxMul:1.3,intensityFull:18},spawn:{weedChance:.45,lanesX:[-2.5,0,2.5],startZ:-62,despawnZ:9},battle:{bobPhaseOffset:Math.PI,bobAmpScale:[1,.82],bobHzScale:[1,1.12],keysP1:{harvest:["a","A"],remove:["d","D"]},keysP2:{harvest:["ArrowLeft"],remove:["ArrowRight"]}}},eh=["Lettuce-go!","On a roll!","Outstanding in your field!","A-maize-ing!","Unbe-leaf-able!","Kale yeah!","Turnip the heat!","You're a-peeling!","Plant-tastic!","Soil good!"],ht={skyTop:3965636,skyHorizon:16177568,sun:16773839,fog:15324328,soilBase:8016437,soilDark:5847074,soilLight:9856575,carrot:15894046,carrotShade:14051858,carrotTop:7123775,weed:4613676,weedDark:3493919,weedFlower:12732282,cab:2830886,cabDark:1909529,cabAccent:16041282,cabMetal:4871235,grass:7251517,grassDark:5471788,treeLeaf:5212730,treeTrunk:7031343,hills:8367699,fence:10255183,zoneGlow:16769946,sparkle:16774338},bt={fov:55,near:.1,far:220,basePos:{x:0,y:2.45,z:2.2},lookAt:{x:0,y:.45,z:-22},bobAmpY:.05,bobAmpX:.025,bobBaseHz:1.4},ln={maxPixelRatio:1.5,bloomStrength:.62,bloomRadius:.5,bloomThreshold:.82,exposure:1.04},cn={carrots:14,weeds:14,chunks:240,sparkles:120,floaters:14},th=["Modern harvesters use cameras and AI to tell crops from weeds \u2014 many times every second.","Smart 'see &amp; spray' sprayers can cut weedkiller use by over 90% by hitting only the weeds they see.","Some farm robots pluck or zap weeds mechanically, so no chemicals are needed at all.","GPS-guided tractors can follow crop rows to within a couple of centimetres.","Sorting cameras can grade thousands of carrots a minute by shape, size and colour.","Machine vision checks each plant on its own \u2014 a tiny decision repeated millions of times a day.","Drones with special cameras can spot thirsty or sick crops before a human eye ever could."],ih=[{min:0,label:"Seedling Scout"},{min:800,label:"Field Hand"},{min:2e3,label:"Crop Spotter"},{min:4e3,label:"Precision Pro"},{min:7e3,label:"Harvest Hero"},{min:11e3,label:"Master Harvester!"}];var Ut=(r,e,t)=>r<e?e:r>t?t:r,xr=(r,e,t)=>r+(e-r)*t,bo=(r,e,t,i)=>xr(r,e,1-Math.exp(-t*i));var nh=r=>1-Math.pow(1-r,3);var Md=r=>1+2.70158*Math.pow(r-1,3)+1.70158*Math.pow(r-1,2),Re=(r,e)=>r+Math.random()*(e-r);var Vi=r=>Math.round(r).toLocaleString("en-GB"),yr=()=>typeof performance<"u"?performance.now():Date.now();var To=class{constructor(){this.geo={},this.mat={},this.tex={},this._built=!1}build(){this._built||(this._built=!0,this._buildMaterials(),this._buildGeometries())}_stdMat(e,t={}){return new ar({color:e,flatShading:!0,roughness:t.roughness??.85,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,...t.extra||{}})}_buildMaterials(){let e=ht,t=this.mat;t.carrotBody=this._stdMat(e.carrot,{roughness:.6,emissive:e.carrotShade,emissiveIntensity:.12}),t.carrotTop=this._stdMat(e.carrotTop,{roughness:.7}),t.weed=this._stdMat(e.weed,{roughness:.9}),t.weedDark=this._stdMat(e.weedDark,{roughness:.95}),t.weedFlower=this._stdMat(e.weedFlower,{roughness:.5,emissive:e.weedFlower,emissiveIntensity:.18}),t.cab=this._stdMat(e.cab,{roughness:.7,metalness:.25}),t.cabDark=this._stdMat(e.cabDark,{roughness:.6,metalness:.3}),t.cabAccent=this._stdMat(e.cabAccent,{roughness:.5,metalness:.2,emissive:e.cabAccent,emissiveIntensity:.15}),t.cabMetal=this._stdMat(e.cabMetal,{roughness:.4,metalness:.55}),t.dialFace=this._stdMat(1316879,{roughness:.5,metalness:.2}),t.dialTick=this._stdMat(12174502,{roughness:.6}),t.needle=this._stdMat(16765514,{roughness:.4,emissive:16756736,emissiveIntensity:.5}),t.soil=this._stdMat(16777215,{roughness:1}),t.grass=this._stdMat(e.grass,{roughness:.95}),t.treeLeaf=this._stdMat(e.treeLeaf,{roughness:.95}),t.treeTrunk=this._stdMat(e.treeTrunk,{roughness:.9}),t.hills=this._stdMat(e.hills,{roughness:1}),t.fence=this._stdMat(e.fence,{roughness:.9}),t.sun=new ti({color:e.sun,fog:!1}),t.zoneFill=new ti({color:e.zoneGlow,transparent:!0,opacity:.16,depthWrite:!1}),t.zoneEdge=new ti({color:e.zoneGlow,transparent:!0,opacity:.9}),t.chunk=new ar({vertexColors:!0,flatShading:!0,roughness:.8}),t.sparkle=new ti({color:e.sparkle,vertexColors:!0})}_buildGeometries(){let e=this.geo;e.carrotBody=new Ti(.34,1.15,8),e.carrotLeaf=new Ti(.075,.7,5),e.weedBulb=new rn(.27,0),e.weedBlade=new Ti(.055,.7,4),e.weedFlower=new rn(.1,0),e.bush=new rn(.45,0),e.post=new zt(.12,1,.12),e.rail=new zt(2.2,.08,.06),e.trunk=new Mn(.12,.16,1.2,6),e.leaf=new Ti(.95,1.9,7),e.hill=new Ti(9,4.5,7),e.box=new zt(1,1,1),e.dial=new bn(.17,.03,8,22),e.dialFace=new tn(.16,22),e.dialHub=new tn(.04,14),e.dialTick=new zt(.02,.05,.01),e.needle=new zt(.028,.17,.022),e.wheel=new bn(.32,.05,8,22),e.chunk=new rr(.12,0),e.sparkle=new nr(.09,0),e.sun=new tn(5.5,24)}createCarrot(){let e=new Mt,t=new Oe(this.geo.carrotBody,this.mat.carrotBody);t.rotation.x=Math.PI,t.position.y=.19,t.castShadow=!0,e.add(t);let i=.19+1.15/2,n=new Mt;n.position.y=i-.06;let s=9;for(let o=0;o<s;o++){let l=new Oe(this.geo.carrotLeaf,this.mat.carrotTop),c=o/s*Math.PI*2+Re(-.18,.18),h=Re(.45,.95);l.position.set(Math.cos(c)*.08,.2,Math.sin(c)*.08),l.rotation.z=Math.cos(c)*h,l.rotation.x=-Math.sin(c)*h,l.scale.set(Re(.85,1.15),Re(.9,1.35),Re(.85,1.15)),l.castShadow=!0,n.add(l)}let a=5;for(let o=0;o<a;o++){let l=new Oe(this.geo.carrotLeaf,this.mat.carrotTop),c=Re(0,Math.PI*2);l.position.set(Math.cos(c)*.035,.16,Math.sin(c)*.035),l.rotation.z=Math.cos(c)*.28,l.rotation.x=-Math.sin(c)*.28,l.scale.set(.8,Re(.6,.95),.8),n.add(l)}return e.add(n),e.userData.type="carrot",e.userData.spinAxis="y",e}createWeed(){let e=new Mt,t=new Oe(this.geo.weedBulb,this.mat.weedDark);t.scale.y=.65,t.position.y=.18,t.castShadow=!0,e.add(t);let i=8;for(let n=0;n<i;n++){let s=new Oe(this.geo.weedBlade,n%2?this.mat.weed:this.mat.weedDark),a=n/i*Math.PI*2+Re(-.3,.3),o=Re(.5,1),l=Re(.7,1.15);s.position.set(Math.cos(a)*.14,.35,Math.sin(a)*.14),s.rotation.z=Math.cos(a)*o,s.rotation.x=-Math.sin(a)*o,s.scale.y=l,s.castShadow=!0,e.add(s)}for(let n=0;n<2;n++){let s=new Oe(this.geo.weedFlower,this.mat.weedFlower),a=Re(0,Math.PI*2);s.position.set(Math.cos(a)*.18,Re(.7,.95),Math.sin(a)*.18),e.add(s)}return e.userData.type="weed",e.userData.spinAxis="y",e}createCab(){let e=new Mt;e.userData.dist=1.4;let t=this.mat,i=new Oe(this.geo.box,t.cab),n=new Oe(this.geo.box,t.cab),s=new Oe(this.geo.box,t.cab),a=new Oe(this.geo.box,t.cabDark),o=new Oe(this.geo.box,t.cab),l=new Oe(this.geo.box,t.cabAccent);e.add(i,n,s,a,o,l);let c=new Mt;for(let u=0;u<2;u++){let m=new Mt,p=new Oe(this.geo.dialFace,t.dialFace),_=new Oe(this.geo.dial,t.cabMetal);_.position.z=.015;for(let g=0;g<5;g++){let y=new Oe(this.geo.dialTick,t.dialTick),T=-2.1+g*1.05;y.position.set(Math.sin(T)*.125,Math.cos(T)*.125,.02),y.rotation.z=-T,m.add(y)}let d=new Mt;d.position.z=.045;let v=new Oe(this.geo.needle,t.needle);v.position.y=.06,d.add(v);let f=new Oe(this.geo.dialHub,t.cabMetal);f.position.z=.06,m.add(p,_,d,f),m.position.x=u===0?-.55:.55,m.userData.needle=d,m.userData.phase=u*1.3,c.add(m)}let h=new Oe(this.geo.wheel,t.cabDark);return h.rotation.x=1.15,c.add(h),c.userData.wheel=h,e.add(c),e.userData.parts={pillL:i,pillR:n,header:s,dash:a,dashTop:o,accent:l,dials:c},e.renderOrder=5,e}layoutCab(e,t,i){let n=e.userData.dist,s=Math.tan(t*Math.PI/180/2)*n,a=s*i,o=.14*n,l=e.userData.parts;l.pillL.position.set(-(a+o*.1),-s*.15,-n),l.pillR.position.set(+(a+o*.1),-s*.15,-n),l.pillL.scale.set(o*1.5,s*2.4,o),l.pillR.scale.set(o*1.5,s*2.4,o),l.pillL.rotation.z=.05,l.pillR.rotation.z=-.05,l.header.position.set(0,s*1.02,-n),l.header.scale.set((a+o)*2.1,o*1.3,o),l.dash.position.set(0,-s*.92,-n*.86),l.dash.scale.set((a+o)*2.1,s*.7,o*2.2),l.dash.rotation.x=-.42,l.dashTop.position.set(0,-s*.6,-n*.95),l.dashTop.scale.set((a+o)*2.1,o*.5,o*3),l.dashTop.rotation.x=-.42,l.accent.position.set(0,-s*.66,-n*.78),l.accent.scale.set((a+o)*2.1,o*.28,o*.3),l.accent.rotation.x=-.42,l.dials.position.set(0,-s*.72,-n*.7),l.dials.rotation.x=-.42;let c=Math.max(.7,Math.min(1.2,a/1.6));l.dials.scale.setScalar(c)}createSkyTexture(){let e=document.createElement("canvas");e.width=16,e.height=256;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256),n="#"+ht.skyTop.toString(16).padStart(6,"0"),s="#"+ht.skyHorizon.toString(16).padStart(6,"0");i.addColorStop(0,n),i.addColorStop(.55,"#7fb0d8"),i.addColorStop(.82,s),i.addColorStop(1,s),t.fillStyle=i,t.fillRect(0,0,16,256);let a=new er(e);return a.colorSpace=Rt,this.tex.sky=a,a}createGround(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),i="#"+ht.soilBase.toString(16).padStart(6,"0"),n="#"+ht.soilDark.toString(16).padStart(6,"0"),s="#"+ht.soilLight.toString(16).padStart(6,"0");t.fillStyle=i,t.fillRect(0,0,256,256);for(let c=0;c<256;c+=32)t.fillStyle=n,t.globalAlpha=.5,t.fillRect(c,0,6,256),t.fillStyle=s,t.globalAlpha=.35,t.fillRect(c+14,0,4,256);t.globalAlpha=1;for(let c=0;c<900;c++){let h=Math.random();t.fillStyle=h<.5?n:s,t.globalAlpha=.18+Math.random()*.22;let u=1+Math.random()*3;t.fillRect(Math.random()*256,Math.random()*256,u,u)}t.globalAlpha=1;let a=new er(e);a.colorSpace=Rt,a.wrapS=xn,a.wrapT=xn,a.repeat.set(7,26),a.anisotropy=4,this.tex.soil=a,this.mat.soil.map=a,this.mat.soil.needsUpdate=!0;let o=new zi(70,260,1,1),l=new Oe(o,this.mat.soil);return l.rotation.x=-Math.PI/2,l.position.z=-110,l.receiveShadow=!0,l.userData.geo=o,l}createSun(){let e=new Oe(this.geo.sun,this.mat.sun);return e.position.set(-34,30,-150),e}createZoneMarker(e,t,i){let n=new Mt,s=Math.abs(i[i.length-1]-i[0])+4.5,a=new Oe(new zi(s,t*2),this.mat.zoneFill);a.rotation.x=-Math.PI/2,a.position.set(0,.02,e),n.add(a);let o=new zt(s,.06,.18),l=new Oe(o,this.mat.zoneEdge),c=new Oe(o,this.mat.zoneEdge);return l.position.set(0,.06,e+t),c.position.set(0,.06,e-t),n.add(l,c),n.userData.fill=a,n.userData.edges=[l,c],n.userData.edgeGeo=o,n}dispose(){var e,t,i,n,s,a;for(let o in this.geo)(t=(e=this.geo[o])==null?void 0:e.dispose)==null||t.call(e);for(let o in this.mat)(n=(i=this.mat[o])==null?void 0:i.dispose)==null||n.call(i);for(let o in this.tex)(a=(s=this.tex[o])==null?void 0:s.dispose)==null||a.call(s)}};var Mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var qt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sf=new an(-1,1,1,-1,0,1),rh=class extends $e{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}},af=new rh,hn=class{constructor(e){this._mesh=new Oe(af,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wo=class extends qt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gi.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ws=class extends qt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Eo=class extends qt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ao=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Q);this._width=i.width,this._height=i.height,t=new lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:St}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wo(Mr),this.copyPass.material.blending=ii,this.timer=new ls}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ws!==void 0&&(a instanceof ws?i=!0:a instanceof Eo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Co=class extends qt{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ce}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var Sd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Sr=class r extends qt{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new lt(s,a,{type:St}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new lt(s,a,{type:St});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let m=new lt(s,a,{type:St});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}let o=Sd;this.highPassUniforms=Gi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Gi.clone(Mr.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,premultipliedAlpha:!0,blending:us,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new ti,this._fsQuad=new hn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Q(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(i*i))/i);return new ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Sr.BlurDirectionX=new Q(1,0);Sr.BlurDirectionY=new Q(0,1);var Es={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ro=class extends qt{constructor(){super(),this.isOutputPass=!0,this.uniforms=Gi.clone(Es.uniforms),this.material=new sr({name:Es.name,uniforms:this.uniforms,vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader}),this._fsQuad=new hn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===Je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ds?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Po=class{constructor(e){this.canvas=e,this.contextLost=!1,this.bloomPulse=0,this.intensity=0,this.mode="solo",this.viewports=null,this._resizeCbs=[],this.renderer=new Mo({canvas:e,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,ln.maxPixelRatio)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ka,this.renderer.toneMapping=Tn,this.renderer.toneMappingExposure=ln.exposure,this.scene=new Gr,this.scene.fog=new kr(ht.fog,.013),this.camera=this._makeCamera(1),this.scene.add(this.camera),this.baseQuaternion=this.camera.quaternion.clone(),this.camera2=null,this._buildLights(),this._buildComposer(),this._bindContextLoss(),this.resize()}_makeCamera(e){let t=new Pt(bt.fov,1.6,bt.near,bt.far);return t.position.set(bt.basePos.x,bt.basePos.y,bt.basePos.z),t.lookAt(bt.lookAt.x,bt.lookAt.y,bt.lookAt.z),t.layers.enable(e),t}ensureCamera2(){return this.camera2?this.camera2:(this.camera2=this._makeCamera(2),this.scene.add(this.camera2),this.camera2)}_buildLights(){let e=new as(ht.sun,2.7);e.position.set(-20,28,10),e.target.position.set(0,0,-8),e.castShadow=!0,e.layers.enable(1),e.shadow.mapSize.set(1024,1024);let t=e.shadow.camera;t.near=1,t.far=80,t.left=-12,t.right=12,t.top=14,t.bottom=-10,e.shadow.bias=-6e-4,e.shadow.normalBias=.025,t.updateProjectionMatrix(),this.scene.add(e,e.target),this.sun=e;let i=new ss(12376575,ht.soilBase,.8);this.scene.add(i);let n=new os(16777215,.18);this.scene.add(n)}_buildComposer(){if(this.composer){try{this.composer.dispose()}catch{}this.composer=null}try{let e=window.innerWidth,t=window.innerHeight,i=new lt(e,t,{type:St,samples:2}),n=new Ao(this.renderer,i);n.addPass(new Co(this.scene,this.camera)),this.bloom=new Sr(new Q(e,t),ln.bloomStrength,ln.bloomRadius,ln.bloomThreshold),n.addPass(this.bloom),n.addPass(new Ro),this.composer=n}catch(e){console.warn("[CropVision] Post-processing unavailable, using direct render.",e),this.composer=null,this.bloom=null}}_bindContextLoss(){this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.contextLost=!0},!1),this.canvas.addEventListener("webglcontextrestored",()=>{this._buildComposer(),this.resize(),this.contextLost=!1},!1)}setMode(e){this.mode=e,e==="battle"&&this.ensureCamera2(),this.resize()}onResize(e){this._resizeCbs.push(e)}resize(){let e=window.innerWidth,t=window.innerHeight;if(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,ln.maxPixelRatio)),this.renderer.setSize(e,t,!1),this.mode==="battle"){let i=Math.floor(e/2);this.camera.aspect=i/t,this.camera.updateProjectionMatrix(),this.camera2&&(this.camera2.aspect=i/t,this.camera2.updateProjectionMatrix()),this.viewports=[{cam:this.camera,x:0,y:0,w:i,h:t},{cam:this.camera2,x:e-i,y:0,w:i,h:t}]}else this.viewports=null,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t));for(let i of this._resizeCbs)try{i(e,t)}catch{}}pulseBloom(e){this.bloomPulse=Math.min(this.bloomPulse+e,1.6)}setIntensity(e){this.intensity=Ut(e,0,1)}update(e){this.bloom&&(this.bloomPulse=bo(this.bloomPulse,0,6,e),this.bloom.strength=ln.bloomStrength+this.intensity*.25+this.bloomPulse)}render(){if(!this.contextLost)try{if(this.viewports){let e=this.renderer;e.setScissorTest(!0);for(let t of this.viewports)e.setViewport(t.x,t.y,t.w,t.h),e.setScissor(t.x,t.y,t.w,t.h),e.render(this.scene,t.cam);e.setScissorTest(!1),e.setViewport(0,0,window.innerWidth,window.innerHeight)}else this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}catch{}}add(e){this.scene.add(e)}};var As=new ft,of=(r,e)=>(r%e+e)%e,lf=(r,e)=>r.traverse(t=>t.layers.set(e)),Cs=class{constructor(e,t,i){this.bases=e,this.span=t,this.zStart=i,this.layers=[]}addLayer(e,t=0){return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,this.layers.push({mesh:e,yOffset:t}),e}update(e){for(let t=0;t<this.bases.length;t++){let i=this.bases[t],n=this.zStart+of(i.z-this.zStart+e,this.span);for(let s of this.layers)As.position.set(i.x,i.y+s.yOffset*i.s,n),As.rotation.set(0,i.r,0),As.scale.setScalar(i.s),As.updateMatrix(),s.mesh.setMatrixAt(t,As.matrix)}for(let t of this.layers)t.mesh.instanceMatrix.needsUpdate=!0}},Io=class{constructor(e,t){this.sceneMgr=e,this.assets=t,this.scroll=0,this.groundScroll=0,this.intensity=0,this.fields=[],this.rigs=new Map,this.activeRigs=[],e.scene.background=t.createSkyTexture(),this.ground=t.createGround(),e.add(this.ground),e.add(t.createSun()),this._buildHills(),this.zone=t.createZoneMarker(Se.zone.centerZ,Se.zone.halfDepth,Se.spawn.lanesX),e.add(this.zone),this._buildGrass(),this._buildFence(),this._buildTrees();for(let i of this.fields)i.update(0)}_buildHills(){let e=new Mt,t=9;for(let i=0;i<t;i++){let n=new Oe(this.assets.geo.hill,this.assets.mat.hills);n.position.set(xr(-60,60,i/(t-1))+Re(-6,6),-1.5,Re(-140,-120)),n.scale.set(Re(1.2,2.4),Re(.7,1.2),1),n.rotation.y=Re(0,Math.PI),e.add(n)}this.sceneMgr.add(e)}_makeBases(e,t){let i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n);return i}_buildGrass(){let n=this._makeBases(150,()=>({x:(Math.random()<.5?-1:1)*Re(5.5,24),y:.18,z:Re(-130,20),r:Re(0,Math.PI*2),s:Re(.5,1.3)})),s=new Cs(n,150,-130);s.addLayer(new bi(this.assets.geo.bush,this.assets.mat.grass,150),0),this.sceneMgr.add(s.layers[0].mesh),this.fields.push(s)}_buildFence(){let s=this._makeBases(44,o=>{let l=o<22?-1:1,c=o%22;return{x:l*16,y:.5,z:-130+c/22*150,r:0,s:Re(.9,1.1)}}),a=new Cs(s,150,-130);a.addLayer(new bi(this.assets.geo.post,this.assets.mat.fence,44),0),this.sceneMgr.add(a.layers[0].mesh),this.fields.push(a)}_buildTrees(){let n=this._makeBases(16,()=>({x:(Math.random()<.5?-1:1)*Re(22,36),y:0,z:Re(-150,10),r:Re(0,Math.PI*2),s:Re(1,1.9)})),s=new Cs(n,160,-150);s.addLayer(new bi(this.assets.geo.trunk,this.assets.mat.treeTrunk,16),.6),s.addLayer(new bi(this.assets.geo.leaf,this.assets.mat.treeLeaf,16),2);for(let a of s.layers)this.sceneMgr.add(a.mesh);this.fields.push(s)}_getRig(e,t){let i=this.rigs.get(e);if(!i){let n=this.assets.createCab();lf(n,t+1),e.add(n);let s=Se.battle.bobAmpScale&&Se.battle.bobAmpScale[t]||1,a=Se.battle.bobHzScale&&Se.battle.bobHzScale[t]||1,o=t===0?0:Se.battle.bobPhaseOffset||0;i={camera:e,cab:n,index:t,bobAcc:Re(0,6),bobPhase:o,bobAmp:s,bobHz:a,shake:0,intensity:0},this.rigs.set(e,i)}return i}setRigs(e){this.activeRigs=e.map((t,i)=>this._getRig(t,i)),this.layoutRigs()}layoutRigs(){for(let e of this.activeRigs)this.assets.layoutCab(e.cab,bt.fov,e.camera.aspect||1.6)}setIntensity(e,t){let i=this.activeRigs[e];i&&(i.intensity=Ut(t,0,1)),this.intensity=this.activeRigs.reduce((n,s)=>Math.max(n,s.intensity),0)}addShake(e,t){let i=this.activeRigs[e];i&&(i.shake=Math.min(i.shake+t,1.2))}update(e,t){let i=Ut(t/Se.difficulty.speedStart,.6,2.4);this.groundScroll+=t*e,this.assets.tex.soil&&(this.assets.tex.soil.offset.y=-this.groundScroll*.045),this.scroll+=t*e;for(let s of this.fields)s.update(this.scroll);for(let s of this.activeRigs){s.bobAcc+=e*bt.bobBaseHz*s.bobHz*i,s.shake=bo(s.shake,0,5,e);let a=s.bobAmp*(1+s.intensity*.5),o=s.bobAcc*Math.PI*2+s.bobPhase,l=Math.sin(o)*bt.bobAmpY*a,c=Math.sin(o*.5)*bt.bobAmpX*a,h=s.shake,u=(Math.random()-.5)*h*.12,m=(Math.random()-.5)*h*.12,p=(Math.random()-.5)*h*.03+c*.15,_=s.camera;_.position.set(bt.basePos.x+c+u,bt.basePos.y+l+m,bt.basePos.z),_.quaternion.copy(this.sceneMgr.baseQuaternion),_.rotateZ(p),_.rotateX(l*.12);let d=s.cab.userData.parts.dials;for(let v of d.children)if(v.userData&&v.userData.needle){let f=v.userData.phase||0;v.userData.needle.rotation.z=Math.sin(s.bobAcc*7+f)*.28-.15-(i-1)*.18}d.userData.wheel&&(d.userData.wheel.rotation.z=Math.sin(s.bobAcc*4)*.12+p*2)}let n=.5+.5*Math.sin(this.scroll*.25);if(this.zone){this.zone.userData.fill.material.opacity=.12+n*.12+this.intensity*.1;for(let a of this.zone.userData.edges)a.material.opacity=.6+n*.4;let s=1+this.intensity*.04*n;this.zone.scale.set(s,1,1)}}reset(){this.scroll=0,this.groundScroll=0,this.intensity=0;for(let e of this.rigs.values())e.shake=0,e.intensity=0}};function bd(r,e){r.traverse(t=>t.layers.set(e))}var Lo=class{constructor(e,t,i=1){this.assets=t,this.layer=i,this.active=[],this.freeCarrots=[],this.freeWeeds=[];for(let n=0;n<cn.carrots;n++){let s=t.createCarrot();s.visible=!1,bd(s,i),e.add(s),this.freeCarrots.push(s)}for(let n=0;n<cn.weeds;n++){let s=t.createWeed();s.visible=!1,bd(s,i),e.add(s),this.freeWeeds.push(s)}this.zNear=Se.zone.centerZ-Se.zone.halfDepth,this.zFar=Se.zone.centerZ+Se.zone.halfDepth}setShadow(e){let t=i=>i.traverse(n=>{n.isMesh&&(n.castShadow=e)});this.freeCarrots.forEach(t),this.freeWeeds.forEach(t),this.active.forEach(i=>t(i.mesh))}get zoneCenter(){return Se.zone.centerZ}spawn(e,t,i={}){let s=(e==="weed"?this.freeWeeds:this.freeCarrots).pop();if(!s)return null;let a=Se.spawn.lanesX[t],o=i.z!=null?i.z:Se.spawn.startZ,l=!!i.instant;s.visible=!0,s.position.set(a,0,o),s.rotation.set(0,0,0),s.scale.setScalar(l?1:.001);let c={type:e,mesh:s,x:a,z:o,handled:!1,state:"alive",age:l?1:0,animT:0,swayPhase:Math.random()*6.28,passedReported:!1};return this.active.push(c),c}frontmostInZone(){let e=null;for(let t of this.active)t.handled||t.state!=="alive"||t.z>=this.zNear&&t.z<=this.zFar&&(!e||t.z>e.z)&&(e=t);return e}popSuccess(e){e.handled=!0,e.state="success",e.animT=0}popFail(e){e.handled=!0,e.state="fail",e.animT=0}update(e,t,i){for(let n=this.active.length-1;n>=0;n--){let s=this.active[n];if(s.age+=e,s.age<.35&&s.state==="alive"?s.mesh.scale.setScalar(Ut(Md(s.age/.35),.001,1)):s.state==="alive"&&s.mesh.scale.setScalar(1),s.state==="alive"){if(s.z+=t*e,s.mesh.position.z=s.z,s.mesh.rotation.z=Math.sin(s.age*2+s.swayPhase)*.06,s.mesh.position.y=Math.sin(s.age*3+s.swayPhase)*.012,!s.passedReported&&s.z>this.zFar&&(s.passedReported=!0,s.handled||(s.handled=!0,i&&i(s))),s.z>Se.spawn.despawnZ){this._recycle(n);continue}}else if(s.state==="success"){s.animT+=e;let a=Ut(s.animT/.45,0,1);s.z+=t*e*.4,s.mesh.position.z=s.z,s.mesh.position.y=nh(a)*2.2,s.mesh.rotation.y+=e*10;let o=(1+Math.sin(a*Math.PI)*.6)*(1-nh(a));if(s.mesh.scale.setScalar(Math.max(.001,o)),a>=1){this._recycle(n);continue}}else if(s.state==="fail"){s.animT+=e;let a=Ut(s.animT/.5,0,1);if(s.z+=t*e,s.mesh.position.z=s.z,s.mesh.rotation.z=a*1.4,s.mesh.position.y=-a*.25,s.mesh.scale.setScalar(Math.max(.001,1-a)),a>=1||s.z>Se.spawn.despawnZ){this._recycle(n);continue}}}}_recycle(e){let t=this.active[e];t.mesh.visible=!1,t.mesh.scale.setScalar(1),t.mesh.rotation.set(0,0,0),t.mesh.position.y=0,(t.type==="weed"?this.freeWeeds:this.freeCarrots).push(t.mesh),this.active.splice(e,1)}reset(){for(let e=this.active.length-1;e>=0;e--)this._recycle(e)}get liveCount(){let e=0;for(let t of this.active)t.state==="alive"&&!t.passedReported&&e++;return e}};var Tt=new ft,Td=new Ce,Do=class{constructor(e,t,i){this.mesh=new bi(e,t,i),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.count=i,this.cursor=0,this.p=new Array(i);for(let n=0;n<i;n++)this.p[n]={active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,drx:0,dry:0,drz:0,life:0,maxLife:1,size:1},this.mesh.setColorAt(n,Td.set(16777215)),Tt.position.set(0,-9999,0),Tt.scale.setScalar(0),Tt.updateMatrix(),this.mesh.setMatrixAt(n,Tt.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}emit(e,t,i,n,s){let a=this.cursor;this.cursor=(this.cursor+1)%this.count;let o=this.p[a];o.active=!0,o.x=e,o.y=t,o.z=i,o.vx=s.vx,o.vy=s.vy,o.vz=s.vz,o.rx=Re(0,6.28),o.ry=Re(0,6.28),o.rz=Re(0,6.28),o.drx=Re(-8,8),o.dry=Re(-8,8),o.drz=Re(-8,8),o.life=s.life,o.maxLife=s.life,o.size=s.size,this.mesh.setColorAt(a,Td.set(n)),this._colorsDirty=!0}update(e,t){let i=!1;for(let n=0;n<this.count;n++){let s=this.p[n];if(!s.active)continue;if(i=!0,s.life-=e,s.life<=0){s.active=!1,Tt.position.set(0,-9999,0),Tt.scale.setScalar(0),Tt.rotation.set(0,0,0),Tt.updateMatrix(),this.mesh.setMatrixAt(n,Tt.matrix);continue}s.vy-=t*e,s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.y<.06&&s.vy<0&&(s.y=.06,s.vy*=-.42,s.vx*=.7,s.vz*=.7),s.rx+=s.drx*e,s.ry+=s.dry*e,s.rz+=s.drz*e;let a=s.life/s.maxLife,o=a>.8?(1-a)/.2:1,l=a<.3?a/.3:1,c=s.size*Math.min(o,l);Tt.position.set(s.x,s.y,s.z),Tt.rotation.set(s.rx,s.ry,s.rz),Tt.scale.setScalar(c),Tt.updateMatrix(),this.mesh.setMatrixAt(n,Tt.matrix)}i&&(this.mesh.instanceMatrix.needsUpdate=!0),this._colorsDirty&&this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0,this._colorsDirty=!1)}reset(){for(let e=0;e<this.count;e++){let t=this.p[e];t.active=!1,Tt.position.set(0,-9999,0),Tt.scale.setScalar(0),Tt.updateMatrix(),this.mesh.setMatrixAt(e,Tt.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.dispose()}},No=class{constructor(e,t,i=1){this.chunks=new Do(t.geo.chunk,t.mat.chunk,cn.chunks),this.sparkles=new Do(t.geo.sparkle,t.mat.sparkle,cn.sparkles),this.chunks.mesh.layers.set(i),this.sparkles.mesh.layers.set(i),e.add(this.chunks.mesh),e.add(this.sparkles.mesh)}burst(e,t,i,n,s=1){let a=n==="weed"?[ht.weed,ht.weedDark,ht.weedFlower,ht.soilLight]:[ht.carrot,ht.carrotShade,ht.carrotTop,ht.soilLight],o=Math.round(Re(10,14)*s);for(let c=0;c<o;c++){let h=Re(0,Math.PI*2),u=Re(2.5,6.5)*s;this.chunks.emit(e,t+.3,i,a[Math.random()*a.length|0],{vx:Math.cos(h)*u,vy:Re(3.5,7.5)*s,vz:Math.sin(h)*u,life:Re(.5,.95),size:Re(.7,1.3)})}let l=Math.round(Re(6,10)*s);for(let c=0;c<l;c++){let h=Re(0,Math.PI*2),u=Re(3,8)*s;this.sparkles.emit(e,t+.5,i,ht.sparkle,{vx:Math.cos(h)*u,vy:Re(4,9)*s,vz:Math.sin(h)*u,life:Re(.4,.8),size:Re(.6,1.1)})}}update(e){this.chunks.update(e,18),this.sparkles.update(e,9)}reset(){this.chunks.reset(),this.sparkles.reset()}dispose(){this.chunks.dispose(),this.sparkles.dispose()}};var Uo=new A,Fo=class{constructor(e,t){this.layer=e,this.getCamera=t,this.nodes=[];for(let i=0;i<cn.floaters;i++){let n=document.createElement("div");n.className="floater",n.style.display="none",this.layer.appendChild(n),this.nodes.push({el:n,free:!0,timer:0})}this.cursor=0}_acquire(){for(let t of this.nodes)if(t.free)return t;let e=this.nodes[this.cursor];return this.cursor=(this.cursor+1)%this.nodes.length,e}spawn(e,t,i){let n=this.getCamera();if(!n||(Uo.set(e.x,e.y,e.z).project(n),Uo.z>1))return;let s=this.layer.clientWidth||window.innerWidth,a=this.layer.clientHeight||window.innerHeight,o=(Uo.x*.5+.5)*s,l=(-Uo.y*.5+.5)*a,c=this._acquire();c.timer&&clearTimeout(c.timer);let h=c.el;h.textContent=t,h.className="floater"+(i?" "+i:""),h.style.left=o+"px",h.style.top=l+"px",h.style.display="block",h.style.animation="none",h.offsetWidth,h.style.animation="",c.free=!1,c.timer=setTimeout(()=>{h.style.display="none",c.free=!0,c.timer=0},950)}reset(){for(let e of this.nodes)e.timer&&clearTimeout(e.timer),e.timer=0,e.free=!0,e.el.style.display="none"}};var De=r=>document.getElementById(r);function cf(r){r&&(r.style.animation="none",r.offsetWidth,r.style.animation="")}var Rs=class{constructor(){this.screens={loading:De("loading-screen"),attract:De("attract-screen"),mode:De("mode-screen"),hud:De("hud"),results:De("results-screen"),battleResults:De("battle-results"),error:De("error-screen")},this.score=[De("p1-score"),De("p2-score")],this.streakBox=[De("p1-streak"),De("p2-streak")],this.streakVal=[De("p1-streak-val"),De("p2-streak-val")],this.toast=[De("p1-toast"),De("p2-toast")],this.flash=[De("p1-flash"),De("p2-flash")],this.btnHarvest=[De("p1-harvest"),De("p2-harvest")],this.btnRemove=[De("p1-remove"),De("p2-remove")],this._lastStreak=[0,0],this.timerFill=De("timer-fill"),this.soundLabel=De("sound-label"),this.soundToggle=De("sound-toggle"),this.nameEntry=De("name-entry"),this.nameInput=De("name-input"),this.orgInput=De("org-input"),document.body.classList.add("show-sound"),this.countdownEl=document.createElement("div"),this.countdownEl.id="countdown",this.countdownEl.className="hidden",De("ui-root").appendChild(this.countdownEl)}showScreen(e){for(let t in this.screens){let i=this.screens[t];i&&i.classList.toggle("hidden",t!==e)}}showCountdown(e){this.countdownEl.textContent=e,this.countdownEl.classList.remove("hidden"),cf(this.countdownEl)}hideCountdown(){this.countdownEl.classList.add("hidden")}setMode(e){document.body.classList.toggle("mode-battle",e==="battle"),document.body.classList.toggle("mode-solo",e!=="battle");let t=(i,n)=>{let s=i&&i.querySelector(".btn-key");s&&(s.innerHTML=n)};e==="battle"?(t(this.btnHarvest[0],"A"),t(this.btnRemove[0],"D"),t(this.btnHarvest[1],"&#9664;"),t(this.btnRemove[1],"&#9654;")):(t(this.btnHarvest[0],"&#9664; / A"),t(this.btnRemove[0],"&#9654; / L"));for(let i=0;i<2;i++)this.setScore(i,0),this.resetStreak(i)}setScore(e,t){let i=this.score[e];i&&(i.textContent=Vi(t),i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"))}setStreak(e,t){let i=this.streakBox[e];if(!i)return;let n=t>=2;i.classList.toggle("hidden",!n),n&&(this.streakVal[e].textContent=t,t>this._lastStreak[e]&&(i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"))),this._lastStreak[e]=t}resetStreak(e){this.streakBox[e]&&this.streakBox[e].classList.add("hidden"),this._lastStreak[e]=0}streakToast(e,t,i){let n=this.toast[e];n&&(n.innerHTML=`<span class="st-pts">+${i}</span> ${t}`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}setTimer(e){e=Math.max(0,Math.min(1,e)),this.timerFill.style.transform=`scaleX(${e})`,this.timerFill.classList.toggle("low",e<.25)}flashGood(e){let t=this.flash[e];t&&(t.className="pflash",t.offsetWidth,t.className="pflash good")}flashBad(e){let t=this.flash[e];t&&(t.className="pflash",t.offsetWidth,t.className="pflash bad")}buttonFeedback(e,t){let i=(t==="harvest"?this.btnHarvest:this.btnRemove)[e];i&&(i.classList.remove("flash"),i.offsetWidth,i.classList.add("flash"))}setLoading(e,t){let i=De("loading-bar");if(i&&(i.style.width=Math.round(e*100)+"%"),t){let n=De("loading-text");n&&(n.textContent=t)}}setSoundLabel(e){this.soundLabel.innerHTML=e?"SOUND&nbsp;OFF":"SOUND&nbsp;ON",this.soundToggle.classList.toggle("on",!e)}ratingFor(e){let t=ih[0].label;for(let i of ih)e>=i.min&&(t=i.label);return t}showResults({score:e,bestStreak:t,isBest:i,scores:n,highlightTs:s,madeBoard:a}){De("results-rating").textContent=this.ratingFor(e),De("results-score").textContent=Vi(e),De("results-combo").textContent=Vi(t),De("results-newbest").classList.toggle("hidden",!i),De("dyk-text").innerHTML=th[Math.random()*th.length|0],this.nameEntry&&this.nameEntry.classList.toggle("hidden",!a),this.nameInput&&(this.nameInput.value=""),this.orgInput&&(this.orgInput.value=""),this.renderTopScores(De("results-scores"),n,s),a&&this.nameInput&&setTimeout(()=>{try{this.nameInput.focus()}catch{}},350)}refreshResultsBoard(e,t){this.renderTopScores(De("results-scores"),e,t)}showBattleResults({p1:e,p2:t,winner:i}){De("br-p1-score").textContent=Vi(e.score),De("br-p2-score").textContent=Vi(t.score),De("br-p1-streak").textContent=Vi(e.bestStreak),De("br-p2-streak").textContent=Vi(t.bestStreak);let n=i===0?"PLAYER 1 WINS!":i===1?"PLAYER 2 WINS!":"IT'S A DRAW!";De("br-headline").textContent=n,De("br-col1").classList.toggle("winner",i===0),De("br-col2").classList.toggle("winner",i===1)}showAttractScores(e){this.renderTopScores(De("attract-scores"),e,null)}renderTopScores(e,t,i){if(!e)return;e.textContent="";let n=document.createElement("div");if(n.className="ts-title",n.textContent="TODAY'S TOP SCORES",e.appendChild(n),!t||t.length===0){let s=document.createElement("div");s.className="ts-empty",s.textContent="Be the first on the board!",e.appendChild(s);return}for(let s=0;s<t.length;s++){let a=t[s],o=document.createElement("div");o.className="ts-row"+(i&&a.ts===i?" you":"");let l=document.createElement("span");l.className="ts-rank",l.textContent=s+1+".";let c=document.createElement("span");if(c.className="ts-name",c.textContent=a.name?a.name:"\u2014",a.org){let u=document.createElement("span");u.className="ts-org",u.textContent=a.org,c.appendChild(document.createTextNode(" ")),c.appendChild(u)}let h=document.createElement("span");h.className="ts-score",h.textContent=Vi(a.score),o.append(l,c,h),e.appendChild(o)}}showError(e){let t=De("error-text");t&&(t.textContent=e||"Please reload the page."),this.showScreen("error")}};var Oo=class{constructor(e){this.scene=e.sceneMgr,this.world=e.world,this.hud=e.hud,this.audio=e.audio,this.storage=e.storage,this.input=e.input,this.allPlayers=e.players,this._now=e.now||yr,this.mode="solo",this.players=[this.allPlayers[0]],this.state="attract",this.roundTime=0,this.spawnTimer=0,this.demoTimer=0,this.countdownT=0,this._goShown=!1,this.pendingTs=null,this.lastInput=this._now()}noteInput(){this.lastInput=this._now()}_cameras(e){return e==="battle"?[this.scene.camera,this.scene.ensureCamera2()]:[this.scene.camera]}_configureMode(e){this.mode=e;let t=this._cameras(e);this.scene.setMode(e),this.world.setRigs(t),this.input.setMode(e),this.hud.setMode(e),this.players=e==="battle"?[this.allPlayers[0],this.allPlayers[1]]:[this.allPlayers[0]],this.allPlayers[0].items.setShadow(e!=="battle"),this.allPlayers[1]&&this.allPlayers[1].items.setShadow(!1),this._clearField(),this.world.reset()}_clearField(){for(let e of this.allPlayers)e.items.reset(),e.particles.reset(),e.floaters.reset(),e.score=0,e.streak=0,e.bestStreak=0}enterAttract(){this._configureMode("solo"),this.state="attract",this.hud.showAttractScores(this.storage.getTopScores()),this.hud.showScreen("attract"),this.hud.hideCountdown(),this.demoTimer=.6,this.noteInput()}enterMenu(){this.state="menu",this.hud.showScreen("mode"),this.noteInput()}advance(){this.state==="attract"?this.enterMenu():(this.state==="results"||this.state==="battleResults")&&this.startRound(this.mode)}selectMode(e){(this.state==="menu"||this.state==="attract")&&this.startRound(e)}goHome(){this.enterAttract()}startRound(e){typeof document<"u"&&document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),this.pendingTs=null,this._configureMode(e),this.audio.unlock(),this.audio.start();for(let t of this.players)this.hud.setScore(t.index,0),this.hud.resetStreak(t.index);this.hud.setTimer(1),this.hud.showScreen("hud"),this.state="countdown",this.countdownT=Se.round.countdownSec,this._goShown=!1,this._lastCount=null,this.noteInput()}_beginPlaying(){this.state="playing",this.roundTime=0,this.spawnTimer=0,this._prefill()}endRound(){if(this.mode==="battle")return this._endBattle();this._endSolo()}_endSolo(){this.state="results";let e=this.players[0];e.bestStreak=Math.max(e.bestStreak,e.streak),this.world.setIntensity(0,0),this.scene.setIntensity(0);let t=this.storage.addScore(e.score,e.bestStreak,"","");this.pendingTs=t.rank>0?t.ts:null,this.hud.showResults({score:e.score,bestStreak:e.bestStreak,isBest:t.isBest,scores:t.scores,highlightTs:t.ts,madeBoard:t.rank>0}),this.hud.showScreen("results"),this.audio.results(),e.items.reset(),this.noteInput()}_endBattle(){this.state="battleResults";let[e,t]=this.players;e.bestStreak=Math.max(e.bestStreak,e.streak),t.bestStreak=Math.max(t.bestStreak,t.streak);let i=e.score===t.score?-1:e.score>t.score?0:1;this.hud.showBattleResults({p1:{score:e.score,bestStreak:e.bestStreak},p2:{score:t.score,bestStreak:t.bestStreak},winner:i}),this.hud.showScreen("battleResults"),this.audio.results(),e.items.reset(),t.items.reset(),this.noteInput()}updatePending(e,t){if(!this.pendingTs)return;let i=this.storage.updateScore(this.pendingTs,e,t);this.hud.refreshResultsBoard(i,this.pendingTs)}_ramp(){let e=Ut(this.roundTime/Se.round.durationSec,0,1);return Math.pow(e,1+Se.difficulty.rampCurve)}_speed(){return xr(Se.difficulty.speedStart,Se.difficulty.speedEnd,this._ramp())}_gap(){return xr(Se.difficulty.gapStart,Se.difficulty.gapEnd,this._ramp())}_decideSpawn(){return{type:Math.random()<Se.spawn.weedChance?"weed":"carrot",lane:Math.random()*Se.spawn.lanesX.length|0}}_spawnAll(e,t,i,n){for(let s of this.players)s.items.spawn(e,t,{z:i,instant:n})}_prefill(){let e=this._speed(),t=this._gap(),n=this.players[0].items.zNear-e*1.3;for(;n>Se.spawn.startZ;){let s=this._decideSpawn();this._spawnAll(s.type,s.lane,n,!0),n-=t}this.spawnTimer=t/e}action(e,t){if(this.state!=="playing"){this.advance();return}let i=this.players[e];if(!i)return;this.hud.buttonFeedback(i.index,t);let n=i.items.frontmostInZone();if(!n)return;t==="harvest"&&n.type==="carrot"||t==="remove"&&n.type==="weed"?this._success(i,n,t):this._wrong(i,n,t)}_success(e,t,i){e.streak+=1,e.bestStreak=Math.max(e.bestStreak,e.streak);let n=Se.scoring.basePoints,s=0;if(e.streak%Se.scoring.streakBonusEvery===0){let o=e.streak/Se.scoring.streakBonusEvery;s=Math.min(Se.scoring.streakBonusMax,Se.scoring.streakBonusStep*o),n+=s;let l=eh[(o-1)%eh.length];e.floaters.spawn({x:t.x,y:2.2,z:t.z},l+"  +"+s,"bonus"),this.audio.streakBonus(o),this.world.addShake(e.index,.35),this.scene.pulseBloom(.4)}e.score+=n,e.items.popSuccess(t);let a=Ut(e.streak/Se.streak.intensityFull,0,1);e.particles.burst(t.x,.4,t.z,t.type,1+a*.5),e.floaters.spawn({x:t.x,y:1.2,z:t.z},"+"+Se.scoring.basePoints),this.hud.setScore(e.index,e.score),this.hud.setStreak(e.index,e.streak),this.hud.flashGood(e.index),i==="harvest"?this.audio.harvest():this.audio.remove(),this.world.setIntensity(e.index,a),e.index===0&&this.scene.setIntensity(a),this.scene.pulseBloom(.18+a*.3),s===0&&a>.4&&this.world.addShake(e.index,.1*a)}_wrong(e,t,i){e.items.popFail(t),this._breakStreak(e),Se.scoring.missPenalty>0&&(e.score=Math.max(0,e.score-Se.scoring.missPenalty),this.hud.setScore(e.index,e.score)),e.floaters.spawn({x:t.x,y:1.3,z:t.z},"oops!","bad"),this.hud.flashBad(e.index),this.audio.miss()}_onPass(e,t){this._breakStreak(e),t&&e.floaters.spawn({x:t.x,y:1.3,z:t.z},"oops!","bad"),this.hud.flashBad(e.index),this.audio.miss()}_breakStreak(e){e.streak=0,this.hud.resetStreak(e.index),this.world.setIntensity(e.index,0),e.index===0&&this.scene.setIntensity(0)}update(e){if(this.state!=="attract"&&(this._now()-this.lastInput)/1e3>Se.round.idleReturnSec){this.enterAttract();return}switch(this.state){case"attract":case"menu":this._updateIdle(e);break;case"countdown":this._updateCountdown(e);break;case"playing":this._updatePlaying(e);break;case"results":case"battleResults":this._updateResults(e);break}}_updateIdle(e){let t=this.allPlayers[0],i=Se.difficulty.speedStart*.55;if(this.world.update(e,i),this.demoTimer-=e,this.demoTimer<=0){let s=this._decideSpawn();t.items.spawn(s.type,s.lane,{z:Se.spawn.startZ}),this.demoTimer=1.1+Math.random()*1}t.items.update(e,i,null),t.particles.update(e);let n=t.items.frontmostInZone();n&&n.z>=t.items.zoneCenter&&(t.items.popSuccess(n),t.particles.burst(n.x,.4,n.z,n.type,1))}_updateCountdown(e){this.world.update(e,Se.difficulty.speedStart*.4);for(let t of this.players)t.particles.update(e);if(this.countdownT-=e,this.countdownT>0){let t=Math.ceil(this.countdownT);t!==this._lastCount&&(this._lastCount=t,this.hud.showCountdown(String(t)),this.audio.tick())}else this._goShown||(this._goShown=!0,this.hud.showCountdown("GO!"),this.audio.go(),this._beginPlaying(),clearTimeout(this._goTimer),this._goTimer=setTimeout(()=>this.hud.hideCountdown(),600))}_updatePlaying(e){this.roundTime+=e;let t=this._speed(),i=this._gap();if(this.spawnTimer-=e,this.spawnTimer<=0){let n=this._decideSpawn();this._spawnAll(n.type,n.lane,Se.spawn.startZ,!1),this.spawnTimer+=i/t,this.spawnTimer<0&&(this.spawnTimer=i/t)}for(let n of this.players)n.items.update(e,t,s=>this._onPass(n,s)),n.particles.update(e);this.world.update(e,t),this.hud.setTimer(Ut(1-this.roundTime/Se.round.durationSec,0,1)),this.roundTime>=Se.round.durationSec&&this.endRound()}_updateResults(e){let t=Se.difficulty.speedStart*.4;this.world.update(e,t);for(let i of this.players)i.particles.update(e)}};function wd(r){let e={},t=(i,n,s)=>i.forEach(a=>{e[a]=[n,s]});return r==="battle"?(t(Se.battle.keysP1.harvest,0,"harvest"),t(Se.battle.keysP1.remove,0,"remove"),t(Se.battle.keysP2.harvest,1,"harvest"),t(Se.battle.keysP2.remove,1,"remove")):(t(["a","A","ArrowLeft"],0,"harvest"),t(["l","L","ArrowRight"],0,"remove")),e}function Ed(r){let e=r,t=()=>e.onAnyInput&&e.onAnyInput(),i=wd("solo");window.addEventListener("keydown",a=>{if(a.repeat)return;let o=document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA")){t(),a.key==="Enter"&&(a.preventDefault(),o.blur(),e.onStart&&e.onStart());return}if(a.key==="Escape"){a.preventDefault(),t(),e.onEscape&&e.onEscape();return}let l=i[a.key];if(l){a.preventDefault(),t(),e.onAction&&e.onAction(l[0],l[1]);return}if(a.key==="1"){t(),e.onSelectMode&&e.onSelectMode("solo");return}if(a.key==="2"){t(),e.onSelectMode&&e.onSelectMode("battle");return}if(a.key===" "||a.key==="Enter"||a.key==="Spacebar"){a.preventDefault(),t(),e.onStart&&e.onStart();return}t(),e.onStart&&e.onStart()},{passive:!1});let n=(a,o)=>{let l=document.getElementById(a);l&&l.addEventListener("pointerdown",c=>{c.preventDefault(),t(),o()})};n("p1-harvest",()=>e.onAction&&e.onAction(0,"harvest")),n("p1-remove",()=>e.onAction&&e.onAction(0,"remove")),n("p2-harvest",()=>e.onAction&&e.onAction(1,"harvest")),n("p2-remove",()=>e.onAction&&e.onAction(1,"remove")),n("btn-start",()=>e.onStart&&e.onStart()),n("btn-again",()=>e.onStart&&e.onStart()),n("btn-rematch",()=>e.onStart&&e.onStart()),n("btn-solo",()=>e.onSelectMode&&e.onSelectMode("solo")),n("btn-battle",()=>e.onSelectMode&&e.onSelectMode("battle")),n("btn-mode-back",()=>e.onHome&&e.onHome()),n("btn-results-menu",()=>e.onHome&&e.onHome()),n("btn-battle-menu",()=>e.onHome&&e.onHome());let s=document.getElementById("attract-screen");return s&&s.addEventListener("pointerdown",()=>{t(),e.onStart&&e.onStart()}),window.addEventListener("contextmenu",a=>a.preventDefault()),window.addEventListener("dragstart",a=>a.preventDefault()),{setMode(a){i=wd(a)}}}var ot=null,In=null,Bo=null,un=!0,ah=typeof window<"u"&&!!(window.AudioContext||window.webkitAudioContext);function di(){if(!ah||un)return!1;try{if(!ot){let r=window.AudioContext||window.webkitAudioContext;ot=new r,In=ot.createGain(),In.gain.value=.5,In.connect(ot.destination);let e=Math.floor(ot.sampleRate*.4);Bo=ot.createBuffer(1,e,ot.sampleRate);let t=Bo.getChannelData(0);for(let i=0;i<e;i++)t[i]=Math.random()*2-1}return ot.state==="suspended"&&ot.resume(),!0}catch{return ah=!1,!1}}function Gt(r,e,{type:t="sine",gain:i=.3,when:n=0,glideTo:s=null}={}){if(!ot)return;let a=ot.currentTime+n,o=ot.createOscillator(),l=ot.createGain();o.type=t,o.frequency.setValueAtTime(r,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(1,s),a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(In),o.start(a),o.stop(a+e+.02)}function sh(r,{gain:e=.3,when:t=0,type:i="highpass",freq:n=1200}={}){if(!ot||!Bo)return;let s=ot.currentTime+t,a=ot.createBufferSource();a.buffer=Bo;let o=ot.createBiquadFilter();o.type=i,o.frequency.value=n;let l=ot.createGain();l.gain.setValueAtTime(e,s),l.gain.exponentialRampToValueAtTime(1e-4,s+r),a.connect(o).connect(l).connect(In),a.start(s),a.stop(s+r+.02)}var Ps={get muted(){return un},get available(){return ah},unlock(){un||di()},setMuted(r){if(un=!!r,!un)di();else if(ot&&In)try{In.gain.value=.5}catch{}},toggle(){return this.setMuted(!un),un},resume(){if(!un&&ot&&ot.state==="suspended")try{ot.resume()}catch{}},harvest(){if(di())try{Gt(520,.16,{type:"triangle",gain:.32,glideTo:880}),sh(.1,{gain:.18,type:"bandpass",freq:1800})}catch{}},remove(){if(di())try{sh(.16,{gain:.26,type:"highpass",freq:900}),Gt(220,.14,{type:"sawtooth",gain:.16,glideTo:130})}catch{}},combo(r){if(di())try{let e=540+Math.min(r,24)*26;Gt(e,.12,{type:"square",gain:.18,glideTo:e*1.5})}catch{}},streakBonus(r){if(di())try{let e=523+Math.min(r,8)*40;Gt(e,.1,{type:"triangle",gain:.26}),Gt(e*1.26,.1,{type:"triangle",gain:.24,when:.07}),Gt(e*1.5,.16,{type:"triangle",gain:.26,when:.14}),sh(.08,{gain:.1,type:"bandpass",freq:5e3,when:.14})}catch{}},miss(){if(di())try{Gt(180,.22,{type:"sine",gain:.22,glideTo:90})}catch{}},start(){if(di())try{Gt(440,.12,{type:"triangle",gain:.28}),Gt(660,.16,{type:"triangle",gain:.28,when:.1})}catch{}},tick(){if(di())try{Gt(660,.07,{type:"square",gain:.18})}catch{}},go(){if(di())try{Gt(880,.22,{type:"triangle",gain:.32,glideTo:1320})}catch{}},results(){if(di())try{Gt(523,.18,{type:"triangle",gain:.3,when:0}),Gt(659,.18,{type:"triangle",gain:.3,when:.14}),Gt(784,.28,{type:"triangle",gain:.32,when:.28})}catch{}}};var lh={};Fd(lh,{addScore:()=>df,getTopScores:()=>uf,updateScore:()=>pf});var Ad="cropvision.scores.v1";var Is=null;function hf(){let r=new Date;return`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`}function zo(r,e){return String(r??"").replace(/\s+/g," ").trim().slice(0,e)}function oh(){let r=hf();try{let e=window.localStorage.getItem(Ad);if(e){let t=JSON.parse(e);if(t&&t.day===r&&Array.isArray(t.scores))return t}}catch{}return Is&&Is.day===r?Is:{day:r,scores:[]}}function Cd(r){try{window.localStorage.setItem(Ad,JSON.stringify(r)),Is=null}catch{Is=r}}function uf(){return oh().scores.slice(0,5)}function df(r,e,t="",i=""){let n=oh(),s={score:Math.round(r),combo:Math.round(e),name:zo(t,14),org:zo(i,28),ts:Date.now()};n.scores.push(s),n.scores.sort((o,l)=>l.score-o.score),n.scores=n.scores.slice(0,5),Cd(n);let a=0;for(let o=0;o<n.scores.length;o++)if(n.scores[o].ts===s.ts){a=o+1;break}return{rank:a,isBest:a===1,ts:s.ts,scores:n.scores.slice()}}function pf(r,e,t){let i=oh(),n=i.scores.find(s=>s.ts===r);return n&&(n.name=zo(e,14),n.org=zo(t,28),Cd(i)),i.scores.slice(0,5)}var Ls=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));async function mf(){try{document.fonts&&document.fonts.load&&await Promise.race([Promise.all([document.fonts.load("700 40px Fredoka"),document.fonts.load("500 20px Fredoka")]),new Promise(r=>setTimeout(r,2500))])}catch{}}async function ff(){let r=new Rs;r.showScreen("loading"),r.setLoading(.05,"Warming up the harvester\u2026"),await Ls();let e=document.getElementById("scene-canvas"),t=new To;t.build(),r.setLoading(.3,"Carving carrots\u2026"),await Ls();let i=new Po(e);r.setLoading(.5,"Raising the sun\u2026"),await Ls();let n=new Io(i,t);i.onResize(()=>n.layoutRigs()),r.setLoading(.72,"Planting the field\u2026"),await Ls();let s=(f,g,y,T)=>({index:f,items:new Lo(i,t,g),particles:new No(i,t,g),floaters:new Fo(document.getElementById(y),T),score:0,streak:0,bestStreak:0}),a=s(0,1,"p1-floaters",()=>i.camera),o=s(1,2,"p2-floaters",()=>i.camera2);r.setLoading(.9,"Calibrating the crop camera\u2026"),await mf();let l,c=Ed({onAction:(f,g)=>l.action(f,g),onStart:()=>l.advance(),onEscape:()=>l.goHome(),onSelectMode:f=>l.selectMode(f),onHome:()=>l.goHome(),onAnyInput:()=>l.noteInput()});l=new Oo({sceneMgr:i,world:n,hud:r,audio:Ps,storage:lh,input:c,players:[a,o]}),r.setSoundLabel(Ps.muted);let h=document.getElementById("sound-toggle");h&&h.addEventListener("pointerdown",f=>{f.preventDefault(),l.noteInput(),r.setSoundLabel(Ps.toggle())});let u=document.getElementById("name-input"),m=document.getElementById("org-input"),p=()=>{l.noteInput(),l.updatePending(u?u.value:"",m?m.value:"")};u&&u.addEventListener("input",p),m&&m.addEventListener("input",p),window.addEventListener("resize",()=>i.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>i.resize(),200));let _=!1,d=yr();document.addEventListener("visibilitychange",()=>{document.hidden?_=!0:(_=!1,d=yr(),l.noteInput(),Ps.resume())}),r.setLoading(1,"Ready!"),await Ls(),l.enterAttract();function v(){requestAnimationFrame(v);let f=yr(),g=(f-d)/1e3;if(d=f,g=Ut(g,0,.05),!_)try{l.update(g)}catch(y){console.error(y)}i.update(g),i.render()}requestAnimationFrame(v)}ff().catch(r=>{console.error("[CropVision] Fatal during boot:",r);try{new Rs().showError(String(r&&r.message||r))}catch{document.body.innerHTML='<div style="color:#fff;font-family:sans-serif;padding:40px">Failed to start. Please reload.</div>'}});})();
