(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396b6516"],{"39c4":function(e,t,r){e.exports=r.p+"img/header-bg-2.3583843e.jpg"},"979c":function(e,t,r){"use strict";r("a27f")},a27f:function(e,t,r){},b8fa:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=!0;function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function l(e){return s(e)||f(e)||b(e)||v()}function s(e){if(Array.isArray(e))return d(e)}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function b(e,t){if(e){if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce((function(r,a){return t.includes(a)||(r[a]=Object(n["I"])(e[a])),r}),{})}function p(e){return"function"===typeof e}function j(e){return Object(n["m"])(e)||Object(n["n"])(e)}function O(e,t,r){if(r)return t?t(e()):e();try{var n=Promise.resolve(e());return t?n.then(t):n}catch(a){return Promise.reject(a)}}var y="__root";function m(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(n){return Promise.reject(n)}}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n["I"])(e),r=Object.keys(t),a={},o={},c={};return r.forEach((function(e){var r=t[e];switch(!0){case p(r.$validator):a[e]=r;break;case p(r):a[e]={$validator:r};break;case e.startsWith("$"):c[e]=r;break;default:o[e]=r}})),{rules:a,nestedValidators:o,config:c}}function g(e,t,r){var a=Object(n["I"])(t);return e.call(r,a,r)}function x(e){return void 0!==e.$valid?!e.$valid:!e}function I(e,t,r,a,c,u,i){var l=c.$lazy,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],f=Object(n["D"])(!!a.value),b=Object(n["D"])(0);r.value=!1;var d=Object(n["L"])([t,a].concat(s),(function(){if(l&&!a.value)return!1;var n;try{n=g(e,t,i)}catch(o){n=Promise.reject(o)}b.value++,r.value=!!b.value,f.value=!0,Promise.resolve(n).then((function(e){b.value--,r.value=!!b.value,u.value=e,f.value=x(e)}))["catch"]((function(e){b.value--,r.value=!!b.value,u.value=e,f.value=!0}))}),{immediate:!0,deep:"object"===o(t)});return{$invalid:f,$unwatch:d}}function w(e,t,r,a,o,c){var u=a.$lazy,i=function(){return{}},l=Object(n["b"])((function(){if(u&&!r.value)return!1;try{var n=g(e,t,c);return o.value=n,x(n)}catch(a){o.value=a}return!0}));return{$unwatch:i,$invalid:l}}function A(e,t,r,a,o,c,u,i){var l,s,f=Object(n["D"])(!1),b=e.$params||{},d=Object(n["D"])(null);if(e.$async){var v=I(e.$validator,t,f,r,a,d,o,e.$watchTargets);l=v.$invalid,s=v.$unwatch}else{var j=w(e.$validator,t,r,a,d,o);l=j.$invalid,s=j.$unwatch}var O=e.$message,y=p(O)?Object(n["b"])((function(){return O($({$pending:f,$invalid:l,$params:$(b),$model:t,$response:d,$validator:c,$propertyPath:i,$property:u}))})):O||"";return{$message:y,$params:b,$pending:f,$invalid:l,$response:d,$unwatch:s}}function k(e,t,r,a,o,c,u,i){var l=Object.keys(e),s=a.get(o,e),f=Object(n["D"])(!1);if(s){if(!s.$partial)return s;s.$unwatch(),f.value=s.$dirty.value}var b={$dirty:f,$path:o,$touch:function(){f.value||(f.value=!0)},$reset:function(){f.value&&(f.value=!1)}};return l.length?(l.forEach((function(n){b[n]=A(e[n],t,b.$dirty,c,u,n,r,o)})),b.$externalResults=Object(n["b"])((function(){return i.value?[].concat(i.value).map((function(e,t){return{$propertyPath:o,$property:r,$validator:"$externalResults",$uid:"".concat(o,"-").concat(t),$message:e,$params:{},$response:null,$pending:!1}})):[]})),b.$invalid=Object(n["b"])((function(){return!!b.$externalResults.value.length||l.some((function(e){return Object(n["I"])(b[e].$invalid)}))})),b.$pending=Object(n["b"])((function(){return l.some((function(e){return Object(n["I"])(b[e].$pending)}))})),b.$error=Object(n["b"])((function(){return b.$invalid.value&&b.$dirty.value})),b.$silentErrors=Object(n["b"])((function(){return l.filter((function(e){return Object(n["I"])(b[e].$invalid)})).map((function(e){var t=b[e];return Object(n["C"])({$propertyPath:o,$property:r,$validator:e,$uid:"".concat(o,"-").concat(e),$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(b.$externalResults.value)})),b.$errors=Object(n["b"])((function(){return b.$dirty.value?b.$silentErrors.value:[]})),b.$unwatch=function(){return l.forEach((function(e){b[e].$unwatch()}))},a.set(o,e,b),b):(s&&a.set(o,e,b),b)}function C(e,t,r,n,a,o,c){var u=Object.keys(e);return u.length?u.reduce((function(u,i){return u[i]=S({validations:e[i],state:t,key:i,parentKey:r,resultsCache:n,globalConfig:a,instance:o,externalResults:c}),u}),{}):{}}function E(e,t,r){var a=Object(n["b"])((function(){return[t,r].filter((function(e){return e})).reduce((function(e,t){return e.concat(Object.values(Object(n["I"])(t)))}),[])})),o=Object(n["b"])({get:function(){return e.$dirty.value||!!a.value.length&&a.value.every((function(e){return e.$dirty}))},set:function(t){e.$dirty.value=t}}),c=Object(n["b"])((function(){var t=Object(n["I"])(e.$silentErrors)||[],r=a.value.filter((function(e){return(Object(n["I"])(e).$silentErrors||[]).length})).reduce((function(e,t){return e.concat.apply(e,l(t.$silentErrors))}),[]);return t.concat(r)})),u=Object(n["b"])((function(){var t=Object(n["I"])(e.$errors)||[],r=a.value.filter((function(e){return(Object(n["I"])(e).$errors||[]).length})).reduce((function(e,t){return e.concat.apply(e,l(t.$errors))}),[]);return t.concat(r)})),i=Object(n["b"])((function(){return a.value.some((function(e){return e.$invalid}))||Object(n["I"])(e.$invalid)||!1})),s=Object(n["b"])((function(){return a.value.some((function(e){return Object(n["I"])(e.$pending)}))||Object(n["I"])(e.$pending)||!1})),f=Object(n["b"])((function(){return a.value.some((function(e){return e.$dirty}))||a.value.some((function(e){return e.$anyDirty}))||o.value})),b=Object(n["b"])((function(){return i.value&&o.value||!1})),d=function(){e.$touch(),a.value.forEach((function(e){e.$touch()}))},v=function(){e.$reset(),a.value.forEach((function(e){e.$reset()}))};return a.value.length&&a.value.every((function(e){return e.$dirty}))&&d(),{$dirty:o,$errors:u,$invalid:i,$anyDirty:f,$error:b,$pending:s,$touch:d,$reset:v,$silentErrors:c}}function S(e){var t=e.validations,r=e.state,a=e.key,o=e.parentKey,c=e.childResults,u=e.resultsCache,i=e.globalConfig,l=void 0===i?{}:i,s=e.instance,f=e.externalResults,b=o?"".concat(o,".").concat(a):a,d=h(t),v=d.rules,$=d.nestedValidators,p=d.config,j=Object.assign({},l,p),g=a?Object(n["b"])((function(){var e=Object(n["I"])(r);return e?Object(n["I"])(e[a]):void 0})):r,x=Object.assign({},Object(n["I"])(f)||{}),I=Object(n["b"])((function(){var e=Object(n["I"])(f);return a?e?Object(n["I"])(e[a]):void 0:e})),w=k(v,g,a,u,b,j,s,I),A=C($,g,b,u,j,s,I),S=E(w,A,c),R=S.$dirty,L=S.$errors,P=S.$invalid,z=S.$anyDirty,_=S.$error,T=S.$pending,V=S.$touch,D=S.$reset,M=S.$silentErrors,N=a?Object(n["b"])({get:function(){return Object(n["I"])(g)},set:function(e){R.value=!0;var t=Object(n["I"])(r);Object(n["o"])(t[a])?t[a].value=e:t[a]=e}}):null;if(a&&j.$autoDirty)var U=Object(n["L"])(g,(function(){var e="_".concat(b,"_$watcher_"),t=u.get(e,{});R.value||V(),t&&t.$unwatch(),u.set(e,{},{$unwatch:U})}),{flush:"sync"});function q(){return new Promise(m((function(e){return R.value||V(),O(n["p"],(function(){if(!T.value)return e(!P.value);var t=Object(n["L"])(T,(function(){e(!P.value),t()}))}))})))}function K(e){return(c.value||{})[e]}function F(){Object(n["o"])(f)?f.value=x:0===Object.keys(x).length?Object.keys(f).forEach((function(e){delete f[e]})):Object.assign(f,x)}return Object(n["C"])(Object.assign({},w,{$model:N,$dirty:R,$error:_,$errors:L,$invalid:P,$anyDirty:z,$pending:T,$touch:V,$reset:D,$path:b||y,$silentErrors:M},c&&{$getResultsForChild:K,$validate:q,$clearExternalResults:F},A))}var R=function(){function e(){c(this,e),this.storage=new Map}return i(e,[{key:"set",value:function(e,t,r){this.storage.set(e,{rules:t,result:r})}},{key:"checkRulesValidity",value:function(e,t,r){var a=Object.keys(r),o=Object.keys(t);if(o.length!==a.length)return!1;var c=o.every((function(e){return a.includes(e)}));return!!c&&o.every((function(e){return!t[e].$params||Object.keys(t[e].$params).every((function(a){return Object(n["I"])(r[e].$params[a])===Object(n["I"])(t[e].$params[a])}))}))}},{key:"get",value:function(e,t){var r=this.storage.get(e);if(r){var n=r.rules,a=r.result,o=this.checkRulesValidity(e,t,n),c=a.$unwatch?a.$unwatch:function(){return{}};return o?a:{$dirty:a.$dirty,$partial:!0,$unwatch:c}}}}]),e}(),L=Symbol("vuelidate#injectChiildResults"),P=Symbol("vuelidate#removeChiildResults"),z={COLLECT_ALL:!0,COLLECT_NONE:!1};function _(e){var t=e.$scope,r={},a=Object(n["D"])([]),o=Object(n["b"])((function(){return a.value.reduce((function(e,t){return e[t]=Object(n["I"])(r[t]),e}),{})}));function c(e,n){var o=n.$registerAs,c=n.$scope,u=n.$stopPropagation;u||t===z.COLLECT_NONE||c===z.COLLECT_NONE||t!==z.COLLECT_ALL&&t!==c||(r[o]=e,a.value.push(o))}function u(e){a.value=a.value.filter((function(t){return t!==e})),delete r[e]}var i=Object(n["l"])(L,(function(){}));Object(n["A"])(L,c);var l=Object(n["l"])(P,(function(){}));return Object(n["A"])(P,u),{childResults:o,sendValidationResultsToParent:i,removeValidationResultsFromParent:l}}function T(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(r=e,e=void 0,t=void 0);var c=r,u=c.$registerAs,i=c.$scope,l=void 0===i?z.COLLECT_ALL:i,s=c.$stopPropagation,f=c.$externalResults,b=Object(n["j"])(),d=b?a?b.type:b.proxy.$options:{};if(!u&&b){var v=b.uid||b._uid;u="_vuelidate_".concat(v)}var $=Object(n["D"])({}),O=new R,y=b?_({$scope:l}):{childResults:Object(n["D"])({})},m=y.childResults,h=y.sendValidationResultsToParent,g=y.removeValidationResultsFromParent;if(!e&&d.validations){var x=d.validations;t=Object(n["D"])({}),Object(n["r"])((function(){function e(t){return new Proxy(t,{get:function(t,r,a){return"object"===o(t[r])?e(t[r]):Object(n["b"])((function(){return t[r]}))}})}t.value=b.proxy,Object(n["L"])((function(){return p(x)?x.call(t.value,new e(t.value)):x}),(function(e){$.value=S({validations:e,state:t,childResults:m,resultsCache:O,globalConfig:r,instance:b.proxy,externalResults:b.proxy.vuelidateExternalResults})}),{immediate:!0})})),r=d.validationsConfig||{}}else{var I=Object(n["o"])(e)||j(e)?e:Object(n["C"])(e||{});Object(n["L"])(I,(function(e){$.value=S({validations:e,state:t,childResults:m,resultsCache:O,globalConfig:r,instance:b?b.proxy:{},externalResults:f})}),{immediate:!0})}return b&&(h($,{$registerAs:u,$scope:l,$stopPropagation:s}),Object(n["s"])((function(){return g(u)}))),Object(n["b"])((function(){return Object.assign({},Object(n["I"])($.value),m.value)}))}var V=T;function D(e){return D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function M(e,t){return N(e)||U(e,t)||q(e,t)||F()}function N(e){if(Array.isArray(e))return e}function U(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done);n=!0)if(r.push(c.value),t&&r.length===t)break}catch(i){a=!0,o=i}finally{try{n||null==u["return"]||u["return"]()}finally{if(a)throw o}}return r}}function q(e,t){if(e){if("string"===typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(e){return"function"===typeof e}function J(e){return null!==e&&"object"===D(e)&&!Array.isArray(e)}function Z(e){return H(e.$validator)?Object.assign({},e):{$validator:e}}function B(e){return"object"===D(e)?e.$valid:e}function G(e){return e.$validator||e}function W(e,t){if(!J(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '.concat(D(e)));if(!J(t)&&!H(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");var r=Z(t);return r.$params=Object.assign({},r.$params||{},e),r}function Q(e,t){if(!H(e)&&"string"!==typeof Object(n["I"])(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '.concat(D(e)));if(!J(t)&&!H(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");var r=Z(t);return r.$message=e,r}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Z(e);return Object.assign({},r,{$async:!0,$watchTargets:t})}function Y(e){return{$validator:function(t){for(var r=this,a=arguments.length,o=new Array(a>1?a-1:0),c=1;c<a;c++)o[c-1]=arguments[c];return Object(n["I"])(t).reduce((function(t,n){var a=Object.entries(n).reduce((function(t,n){var a=M(n,2),c=a[0],u=a[1],i=e[c],l=Object.entries(i).reduce((function(e,t){var n=M(t,2),a=n[0],i=n[1],l=G(i),s=l.call.apply(l,[r,u].concat(o)),f=B(s);if(e.$data[a]=s,!f){var b=i.$message||"",d=i.$params||{};"function"===typeof b&&(b=b({$pending:!1,$invalid:!f,$params:d,$model:u,$response:s})),e.$errors.push({$property:c,$message:b,$params:d,$response:s,$model:u,$pending:!1,$validator:a})}return{$valid:e.$valid&&f,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[c]=l.$data,t.$errors[c]=l.$errors,{$valid:t.$valid&&l.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&a.$valid,$data:t.$data.concat(a.$data),$errors:t.$errors.concat(a.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:function(e){var t=e.$response;return t?t.$errors.map((function(e){return Object.values(e).map((function(e){return e.map((function(e){return e.$message}))})).reduce((function(e,t){return e.concat(t)}),[])})):[]}}}var ee=function(e){if(e=Object(n["I"])(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===D(e)){for(var t in e)return!0;return!1}return!!String(e).length},te=function(e){return e=Object(n["I"])(e),Array.isArray(e)?e.length:"object"===D(e)?Object.keys(e).length:String(e).length};function re(e){return function(t){return t=Object(n["I"])(t),!ee(t)||e.test(t)}}n["I"],re(/^[a-zA-Z]*$/),re(/^[a-zA-Z0-9]*$/),re(/^\d*(\.\d+)?$/);var ne=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,ae=re(ne),oe={$validator:ae,$message:"Value is not a valid email address",$params:{type:"email"}};function ce(e){return"string"===typeof e&&(e=e.trim()),ee(e)}var ue={$validator:ce,$message:"Value is required",$params:{type:"required"}};var ie=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;re(ie);re(/(^[0-9]*$)|(^-[0-9]+$)/),re(/^[-]?\d*(\.\d+)?$/);var le=r("c36e"),se=r("3204");Object(n["B"])("data-v-33c0052a");var fe=Object(n["f"])('<div class="col-span-3 hidden lg:block text-purplish-grey" data-v-33c0052a><label for="asunto" class="mb-6 inline-block mt-4 py-1" data-v-33c0052a>Address: Lorem ipsum dolor</label><label for="email" class="mb-8 inline-block py-1" data-v-33c0052a>Correo: yourmail@gmail.com</label><label for="phone" class="mb-10 inline-block py-1" data-v-33c0052a>Phone: +57 345 7953 32453</label><label for="message" class="mb-4 inline-block py-1" data-v-33c0052a>Message: Lorem ipsum dolor, voluptatem tempora.</label></div>',1),be={class:"col-span-12 lg:col-span-9"},de={key:0,class:"error"},ve={key:1,class:"error"},$e={key:2,class:"error pt-2"},pe={class:"mt-8"},je=Object(n["h"])("span",{class:"ml-4"},"Términos y condiciones",-1),Oe={key:3,class:"error pt-2"};Object(n["z"])();var ye={setup:function(e){var t=Object(n["C"])({asunto:"",email:"",phone:"",message:"",termsAccepted:!1}),r=Object(n["b"])((function(){return{asunto:{required:ue},email:{required:ue,email:oe},message:{required:ue},termsAccepted:{accepted:function(e){return!0===e}}}})),a=V(r,t),o=function(e){e.preventDefault(),a.value.$validate().then((function(e){e&&alert(JSON.stringify(t,null,3))}))};return function(e,r){return Object(n["y"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(se["a"],{class:"mt-12",text:"Get in touch"}),Object(n["h"])("form",{onSubmit:o,class:"pt-12 grid grid-cols-12 mb-16"},[fe,Object(n["h"])("div",be,[Object(n["M"])(Object(n["h"])("input",{class:["w-full bg-gray-100 py-3 px-4 mb-4 border border-transparent",Object(n["I"])(a).asunto.$error?"!border-red-500 border":null],type:"text","onUpdate:modelValue":r[1]||(r[1]=function(e){return Object(n["I"])(t).asunto=e}),name:"asunto",placeholder:"Asunto",id:"asunto"},null,2),[[n["K"],Object(n["I"])(t).asunto]]),Object(n["I"])(a).asunto.$error?(Object(n["y"])(),Object(n["d"])("div",de,Object(n["H"])(Object(n["I"])(a).asunto.$errors[0].$message),1)):Object(n["e"])("",!0),Object(n["M"])(Object(n["h"])("input",{class:["w-full bg-gray-100 py-3 px-4 mb-4 border border-transparent",Object(n["I"])(a).email.$error?"!border-red-500 border":null],type:"text","onUpdate:modelValue":r[2]||(r[2]=function(e){return Object(n["I"])(t).email=e}),name:"email",placeholder:"Correo",id:"email"},null,2),[[n["K"],Object(n["I"])(t).email]]),Object(n["I"])(a).email.$error?(Object(n["y"])(),Object(n["d"])("div",ve,Object(n["H"])(Object(n["I"])(a).email.$errors[0].$message),1)):Object(n["e"])("",!0),Object(n["M"])(Object(n["h"])("input",{class:"w-full bg-gray-100 py-3 px-4 mb-4 border border-transparent",type:"text","onUpdate:modelValue":r[3]||(r[3]=function(e){return Object(n["I"])(t).phone=e}),name:"phone",placeholder:"Teléfono",id:"phone"},null,512),[[n["K"],Object(n["I"])(t).phone]]),Object(n["M"])(Object(n["h"])("textarea",{class:["h-52 bg-gray-100 p-4 w-full border border-transparent",Object(n["I"])(a).message.$error?"!border-red-500 border":null],placeholder:"Mensaje","onUpdate:modelValue":r[4]||(r[4]=function(e){return Object(n["I"])(t).message=e}),id:"message"},null,2),[[n["K"],Object(n["I"])(t).message]]),Object(n["I"])(a).message.$error?(Object(n["y"])(),Object(n["d"])("div",$e,Object(n["H"])(Object(n["I"])(a).message.$errors[0].$message),1)):Object(n["e"])("",!0),Object(n["h"])("div",pe,[Object(n["M"])(Object(n["h"])("input",{type:"checkbox","onUpdate:modelValue":r[5]||(r[5]=function(e){return Object(n["I"])(a).termsAccepted.$model=e})},null,512),[[n["J"],Object(n["I"])(a).termsAccepted.$model]]),je]),Object(n["I"])(a).termsAccepted.$error?(Object(n["y"])(),Object(n["d"])("div",Oe," This field is required ")):Object(n["e"])("",!0),Object(n["h"])(le["a"],{class:"mt-10",type:"submit",label:"Send",color:"dark"})])],32)],64)}}};r("979c");ye.__scopeId="data-v-33c0052a";var me=ye,he=r("fa2f"),ge={class:"container pt-[100px]"},xe={setup:function(e){return function(e,t){return Object(n["y"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(he["a"]),Object(n["h"])("div",ge,[Object(n["h"])(me)])],64)}}};t["default"]=xe},fa2f:function(e,t,r){"use strict";r("b0c0");var n=r("7a23"),a=r("39c4"),o=r.n(a),c=r("6c02"),u={class:"w-full relative"},i=Object(n["h"])("img",{class:"object-cover h-[445px] w-full object-left",src:o.a,alt:"header"},null,-1),l={class:"absolute bottom-1/4 left-40 text-[82px] font-bold text-white"},s=Object(n["h"])("span",{class:"text-pear"},".",-1),f={setup:function(e){var t=Object(c["d"])(),r=t.currentRoute;return function(e,t){return Object(n["y"])(),Object(n["d"])("div",u,[i,Object(n["h"])("h1",l,[Object(n["g"])(Object(n["H"])(Object(n["I"])(r).name)+" ",1),s])])}}};t["a"]=f}}]);
//# sourceMappingURL=chunk-396b6516.71fb5ac7.js.map