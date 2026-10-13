(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9430,e=>{"use strict";var t=e.i(43476),r=e.i(75056),i=e.i(95393),n=e.i(71645),o=e.i(90072),s=e.i(9579);let a=`
  attribute vec3 aColor;
  uniform float uSize;
  uniform float uTime;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vTwinkle;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    vTwinkle = 0.62 + 0.38 * sin(uTime * 1.4 + position.x * 12.3 + position.y * 7.1 + position.z * 3.7);
    vColor = aColor;
    gl_PointSize = uSize * uPixelRatio * vTwinkle / -viewPosition.z;
  }
`,l=`
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vTwinkle;

  void main() {
    float falloff = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
    gl_FragColor = vec4(vColor, falloff * falloff * falloff * uOpacity * vTwinkle);
  }
`,u=`
  varying vec3 vNormal;
  varying vec3 vView;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`,c=`
  uniform vec3 uColor;
  uniform float uStrength;
  varying vec3 vNormal;
  varying vec3 vView;

  void main() {
    float rim = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 4.0);
    gl_FragColor = vec4(uColor, rim * uStrength);
  }
`,f=(e,t)=>({uSize:{value:e},uTime:{value:0},uPixelRatio:{value:1},uOpacity:{value:t}}),h="#00e6a0",m="#54e8d2",d=[{radius:1.5,tilt:[1.15,.2,0],speed:.55,phase:0},{radius:1.8,tilt:[.5,.9,.3],speed:-.4,phase:2.1},{radius:2.1,tilt:[1.9,-.5,.6],speed:.3,phase:4.2}];function v(e,t,r,i){let n,s=(n=i>>>0,()=>{let e=n=n+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}),a=new Float32Array(3*e),l=new Float32Array(3*e),u=[new o.Es(h),new o.Es(m),new o.Es("#f2f5f2")];for(let i=0;i<e;i++){let e=s()*Math.PI*2,n=Math.acos(2*s()-1),o=t+(r-t)*s();a[3*i]=o*Math.sin(n)*Math.cos(e),a[3*i+1]=o*Math.sin(n)*Math.sin(e),a[3*i+2]=o*Math.cos(n);let c=u[Math.floor(s()*u.length)],f=.35+.65*s();l[3*i]=c.r*f,l[3*i+1]=c.g*f,l[3*i+2]=c.b*f}return{positions:a,colors:l}}function p({lowPower:e,animate:r}){let x=(0,n.useRef)(null),g=(0,n.useRef)(null),y=(0,n.useRef)(null),j=(0,n.useRef)(null),w=(0,n.useRef)(null),M=(0,n.useRef)([]),b=(0,n.useRef)([]),R=(0,n.useRef)(null),P=(0,n.useRef)(null),S=(0,n.useRef)(null),C=(0,n.useRef)(null),T=(0,n.useRef)(null),z=(0,n.useRef)(null),E=(0,n.useRef)({x:0,y:0}),G=(0,n.useRef)(0),B=(0,n.useRef)(0),A=(0,n.useRef)(-1),L=(0,n.useMemo)(()=>v(e?260:900,2.4,4.6,7),[e]),V=(0,n.useMemo)(()=>v(e?140:420,.95,1.25,23),[e]),[F]=(0,n.useState)(()=>({field:f(95,1),burst:f(120,0),halo:{uColor:{value:new o.Es(h)},uStrength:{value:.3}}}));return(0,n.useEffect)(()=>{if(!r)return;let e=e=>{E.current.x=e.clientX/window.innerWidth*2-1,E.current.y=e.clientY/window.innerHeight*2-1};return window.addEventListener("pointermove",e,{passive:!0}),()=>window.removeEventListener("pointermove",e)},[r]),(0,i.f)((e,t)=>{let i=x.current;if(!i)return;let n=s.P;B.current<1&&(B.current=r?Math.min(1,B.current+Math.min(t,.05)/1.6):1);let a=1-(1-B.current)**3,l=n.opacity*a;Math.abs(l-A.current)>.002&&(A.current=l,e.gl.domElement.style.opacity=l.toFixed(3));let u=l>.01;if(i.visible!==u&&(i.visible=u,e.gl.domElement.style.visibility=u?"visible":"hidden"),!u)return;r&&(G.current+=Math.min(t,.05));let c=G.current,{width:f,height:h}=e.viewport,m=o.rB.clamp(f/8,.5,1.1);i.position.set(n.x*f*.5,n.y*h*.5,0),i.scale.setScalar(n.scale*m*(.72+.28*a));let v=.18+.22*E.current.y,p=.32*E.current.x+(r?.0011*window.scrollY:0)+-((1-a)*1.4);i.rotation.x+=(v-i.rotation.x)*.06,i.rotation.y+=(p-i.rotation.y)*.06,g.current&&g.current.scale.setScalar(Math.max(.001,1-n.dissolve)),y.current&&y.current.rotation.set(.12*c,.25*c,0),j.current&&j.current.rotation.set(0,-(.12*c),.05*c),w.current&&w.current.rotation.set(.06*c,0,.08*c);let L=1+.5*n.spread+1.4*n.dissolve;d.forEach((e,t)=>{let r=M.current[t];r&&(r.scale.setScalar(L),r.rotation.z=e.tilt[2]+.05*c*(t%2==0?1:-1));let i=b.current[t];if(i){let t=e.phase+c*e.speed;i.position.set(Math.cos(t)*e.radius,Math.sin(t)*e.radius,0)}});let V=e.gl.getPixelRatio();T.current&&(T.current.uniforms.uStrength.value=.3+.08*Math.sin(1.1*c)),C.current&&(C.current.uniforms.uTime.value=c,C.current.uniforms.uPixelRatio.value=V),R.current&&(R.current.rotation.y=.02*c,R.current.scale.setScalar(1+.6*n.dissolve)),P.current&&S.current&&(P.current.scale.setScalar(1+3.2*n.dissolve),P.current.rotation.y=.1*c,S.current.uniforms.uOpacity.value=Math.sin(Math.PI*Math.min(1,n.dissolve)),S.current.uniforms.uTime.value=c,S.current.uniforms.uPixelRatio.value=V),z.current&&z.current.position.set(3+2*E.current.x,2-2*E.current.y,4)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("ambientLight",{intensity:.2}),(0,t.jsx)("pointLight",{ref:z,position:[3,2,4],intensity:26,color:h}),(0,t.jsx)("pointLight",{position:[-4,-2,2],intensity:22,color:m}),(0,t.jsx)("directionalLight",{position:[-2,4,3],intensity:.35}),(0,t.jsxs)("group",{ref:x,children:[(0,t.jsxs)("group",{ref:g,children:[(0,t.jsxs)("mesh",{ref:y,children:[(0,t.jsx)("icosahedronGeometry",{args:[.78,0]}),(0,t.jsx)("meshStandardMaterial",{color:"#04130e",emissive:h,emissiveIntensity:.07,metalness:.6,roughness:.34,flatShading:!0})]}),(0,t.jsxs)("mesh",{ref:j,children:[(0,t.jsx)("icosahedronGeometry",{args:[1.05,1]}),(0,t.jsx)("meshBasicMaterial",{color:h,wireframe:!0,transparent:!0,opacity:.34})]}),(0,t.jsxs)("mesh",{ref:w,children:[(0,t.jsx)("octahedronGeometry",{args:[1.32,0]}),(0,t.jsx)("meshBasicMaterial",{color:m,transparent:!0,opacity:.05,side:o.Vs,depthWrite:!1})]}),(0,t.jsxs)("mesh",{children:[(0,t.jsx)("sphereGeometry",{args:[1.42,e?24:48,e?24:48]}),(0,t.jsx)("shaderMaterial",{ref:T,uniforms:F.halo,vertexShader:u,fragmentShader:c,transparent:!0,depthWrite:!1,blending:o.tq})]}),(0,t.jsxs)("mesh",{rotation:[.4,.6,0],children:[(0,t.jsx)("octahedronGeometry",{args:[1.32,0]}),(0,t.jsx)("meshBasicMaterial",{color:m,wireframe:!0,transparent:!0,opacity:.22})]})]}),d.map((r,i)=>(0,t.jsx)("group",{rotation:[r.tilt[0],r.tilt[1],r.tilt[2]],children:(0,t.jsxs)("group",{ref:e=>{M.current[i]=e},children:[(0,t.jsxs)("mesh",{children:[(0,t.jsx)("torusGeometry",{args:[r.radius,.006,6,e?96:180]}),(0,t.jsx)("meshBasicMaterial",{color:1===i?m:h,transparent:!0,opacity:.5})]}),(0,t.jsxs)("group",{ref:e=>{b.current[i]=e},children:[(0,t.jsxs)("mesh",{children:[(0,t.jsx)("sphereGeometry",{args:[.05,16,16]}),(0,t.jsx)("meshBasicMaterial",{color:"#eafff8"})]}),(0,t.jsxs)("mesh",{children:[(0,t.jsx)("sphereGeometry",{args:[.13,16,16]}),(0,t.jsx)("meshBasicMaterial",{color:1===i?m:h,transparent:!0,opacity:.2,depthWrite:!1})]})]})]})},r.radius)),(0,t.jsxs)("points",{ref:P,children:[(0,t.jsxs)("bufferGeometry",{children:[(0,t.jsx)("bufferAttribute",{attach:"attributes-position",args:[V.positions,3]}),(0,t.jsx)("bufferAttribute",{attach:"attributes-aColor",args:[V.colors,3]})]}),(0,t.jsx)("shaderMaterial",{ref:S,uniforms:F.burst,vertexShader:a,fragmentShader:l,transparent:!0,depthWrite:!1,blending:o.tq})]}),(0,t.jsxs)("points",{ref:R,children:[(0,t.jsxs)("bufferGeometry",{children:[(0,t.jsx)("bufferAttribute",{attach:"attributes-position",args:[L.positions,3]}),(0,t.jsx)("bufferAttribute",{attach:"attributes-aColor",args:[L.colors,3]})]}),(0,t.jsx)("shaderMaterial",{ref:C,uniforms:F.field,vertexShader:a,fragmentShader:l,transparent:!0,depthWrite:!1,blending:o.tq})]})]})]})}e.s(["default",0,function({lowPower:e,animate:i,onFail:n}){return(0,t.jsx)(r.f,{dpr:e?[1,1.5]:[1,2],camera:{position:[0,0,8],fov:35},gl:{antialias:!e,alpha:!0,powerPreference:"high-performance"},frameloop:i?"always":"demand",onCreated:({gl:e})=>{e.domElement.addEventListener("webglcontextlost",e=>{e.preventDefault(),n()},{once:!0})},children:(0,t.jsx)(p,{lowPower:e,animate:i})})}],9430)},91245,function(e){e.n(e.i(9430))}]);