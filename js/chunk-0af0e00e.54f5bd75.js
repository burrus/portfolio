(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0af0e00e"],{"4a66":function(e,t,a){},b0c0:function(e,t,a){var s=a("83ab"),i=a("5e77").EXISTS,n=a("9bf2").f,r=Function.prototype,o=r.toString,m=/^\s*function ([^ (]*)/,l="name";s&&!i&&n(r,l,{configurable:!0,get:function(){try{return o.call(this).match(m)[1]}catch(e){return""}}})},b8fa:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("Header",{attrs:{showBackButton:!0}}),a("div",{staticClass:"form-content"},[a("form",{attrs:{id:"contact"},on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[a("div",{staticClass:"fields"},[a("h3",[e._v("What's on your mind?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},e.validateForm]}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Email address"},domProps:{value:e.email},on:{input:[function(t){t.target.composing||(e.email=t.target.value)},e.validateForm]}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message",rows:"7",placeholder:"Message"},domProps:{value:e.message},on:{input:[function(t){t.target.composing||(e.message=t.target.value)},e.validateForm]}}),a("input",{attrs:{type:"submit",value:"Send",disabled:!e.isValidForm}})])])]),a("Footer")],1)},i=[];a("b0c0");const n={_origin:"https://api.emailjs.com"},r=(e,t="https://api.emailjs.com")=>{n._userID=e,n._origin=t},o=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e.status,this.text=e.responseText}}const l=(e,t,a={})=>new Promise((s,i)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:e})=>{const t=new m(e);200===t.status||"OK"===t.text?s(t):i(t)}),r.addEventListener("error",({target:e})=>{i(new m(e))}),r.open("POST",n._origin+e,!0),Object.keys(a).forEach(e=>{r.setRequestHeader(e,a[e])}),r.send(t)}),d=(e,t,a,s)=>{const i=s||n._userID;o(i,e,t);const r={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:a};return l("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},c=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},u=(e,t,a,s)=>{const i=s||n._userID,r=c(a);o(i,e,t);const m=new FormData(r);return m.append("lib_version","3.2.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",i),l("/api/v1.0/email/send-form",m)};var p={init:r,send:d,sendForm:u},h=a("fd2d"),f=a("0418"),v={name:"Contact",components:{Footer:h["a"],Header:f["a"]},data:function(){return{name:null,email:null,message:null,isValidForm:!1}},methods:{sendEmail:function(e){try{p.sendForm("service_g9chxwe","template_kiq6r9p",e.target,"user_FEcV7BFrGCIsYPA0PbtV6",{name:this.name,email:this.email,message:this.message}),this.name=null,this.email=null,this.message=null,this.isValidForm=!1,alert("Your message has been sent!")}catch(t){alert(t)}},validateForm:function(){if(this.name&&this.message){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.test(this.email)?this.isValidForm=!0:this.isValidForm=!1}else this.isValidForm=!1}}},g=v,b=(a("f771"),a("2877")),w=Object(b["a"])(g,s,i,!1,null,"666affdb",null);t["default"]=w.exports},f771:function(e,t,a){"use strict";a("4a66")}}]);
//# sourceMappingURL=chunk-0af0e00e.54f5bd75.js.map