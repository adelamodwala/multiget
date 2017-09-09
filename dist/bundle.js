#!/usr/bin/env node
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===E.call(e)}function o(e){return"[object ArrayBuffer]"===E.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function p(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===E.call(e)}function l(e){return"[object File]"===E.call(e)}function h(e){return"[object Blob]"===E.call(e)}function d(e){return"[object Function]"===E.call(e)}function m(e){return p(e)&&d(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function x(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?_(t,n):t}),e}var _=n(4),k=n(24),E=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:k,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:p,isUndefined:c,isDate:f,isFile:l,isBlob:h,isFunction:d,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:w,merge:b,extend:x,trim:v}},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(0),s=n(26),i={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(27):"undefined"!=typeof process&&(e=n(32)),e}(),transformRequest:[function(e,t){return s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(i)}),e.exports=a},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(3);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,n){"use strict";function r(e,t){u.call(this),this._options=e,this._redirectCount=0,this._bufferedWrites=[],t&&this.on("response",t);var n=this;if(this._onNativeResponse=function(e){n._processResponse(e)},!e.pathname&&e.path){var r=e.path.indexOf("?");r<0?e.pathname=e.path:(e.pathname=e.path.substring(0,r),e.search=e.path.substring(r))}this._performRequest()}var o=n(11),s=n(33),i=n(8),a=n(9),u=n(34).Writable,c=n(35)("follow-redirects"),p={"http:":i,"https:":a},f={},t=e.exports={maxRedirects:21},l={GET:!0,HEAD:!0,OPTIONS:!0,TRACE:!0},h=Object.create(null);["abort","aborted","error","socket"].forEach(function(e){h[e]=function(t){this._redirectable.emit(e,t)}}),r.prototype=Object.create(u.prototype),r.prototype._performRequest=function(){var e=this._options.protocol;this._options.agents&&(this._options.agent=this._options.agents[f[e]]);var t=p[e],n=this._currentRequest=t.request(this._options,this._onNativeResponse);this._currentUrl=o.format(this._options),n._redirectable=this;for(var r in h)r&&n.on(r,h[r]);if(this._isRedirect){var s=this._bufferedWrites;if(0===s.length)n.end();else{var i=0;!function e(){if(i<s.length){var t=s[i++];n.write(t.data,t.encoding,e)}else n.end()}()}}},r.prototype._processResponse=function(e){var t=e.headers.location;if(t&&!1!==this._options.followRedirects&&e.statusCode>=300&&e.statusCode<400){if(++this._redirectCount>this._options.maxRedirects)return this.emit("error",new Error("Max redirects exceeded."));var n,r=this._options.headers;if(307!==e.statusCode&&!(this._options.method in l)){this._options.method="GET",this._bufferedWrites=[];for(n in r)/^content-/i.test(n)&&delete r[n]}if(!this._isRedirect)for(n in r)/^host$/i.test(n)&&delete r[n];var s=o.resolve(this._currentUrl,t);c("redirecting to",s),Object.assign(this._options,o.parse(s)),this._isRedirect=!0,this._performRequest()}else e.responseUrl=this._currentUrl,this.emit("response",e),delete this._options,delete this._bufferedWrites},r.prototype.abort=function(){this._currentRequest.abort()},r.prototype.flushHeaders=function(){this._currentRequest.flushHeaders()},r.prototype.setNoDelay=function(e){this._currentRequest.setNoDelay(e)},r.prototype.setSocketKeepAlive=function(e,t){this._currentRequest.setSocketKeepAlive(e,t)},r.prototype.setTimeout=function(e,t){this._currentRequest.setTimeout(e,t)},r.prototype.write=function(e,t,n){this._currentRequest.write(e,t,n),this._bufferedWrites.push({data:e,encoding:t})},r.prototype.end=function(e,t,n){this._currentRequest.end(e,t,n),e&&this._bufferedWrites.push({data:e,encoding:t})},Object.keys(p).forEach(function(e){var n=f[e]=e.substr(0,e.length-1),i=p[e],a=t[n]=Object.create(i);a.request=function(n,i){return"string"==typeof n?(n=o.parse(n),n.maxRedirects=t.maxRedirects):n=Object.assign({maxRedirects:t.maxRedirects,protocol:e},n),s.equal(n.protocol,e,"protocol mismatch"),c("options",n),new r(n,i)},a.get=function(e,t){var n=a.request(e,t);return n.end(),n}})},function(e,t){e.exports=require("url")},function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(c||r);e.diff=o,e.prev=c,e.curr=r,c=r;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;a++;var o=t.formatters[r];if("function"==typeof o){var i=s[a];n=o.call(e,i),s.splice(a,1),a--}return n}),t.formatArgs.call(e,s);(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function s(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function a(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=u,t.disable=i,t.enable=s,t.enabled=a,t.humanize=n(37),t.names=[],t.skips=[],t.formatters={};var c},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r,o=n(16),s=n(20);o.version("0.1.0").arguments("<url>").action(function(e){r=e}),o.parse(process.argv),void 0===r&&(console.error("no url given!"),process.exit(1)),console.log("File:",r),s.multiGet(r)},function(e,t,n){function r(e,t){this.flags=e,this.required=~e.indexOf("<"),this.optional=~e.indexOf("["),this.bool=!~e.indexOf("-no-"),e=e.split(/[ ,|]+/),e.length>1&&!/^[[<]/.test(e[1])&&(this.short=e.shift()),this.long=e.shift(),this.description=t||""}function o(e){this.commands=[],this.options=[],this._execs={},this._allowUnknownOption=!1,this._args=[],this._name=e||""}function s(e){return e.split("-").reduce(function(e,t){return e+t[0].toUpperCase()+t.slice(1)})}function i(e,t){var n=Math.max(0,t-e.length);return e+Array(n+1).join(" ")}function a(e,t){t=t||[];for(var n=0;n<t.length;n++)"--help"!=t[n]&&"-h"!=t[n]||(e.outputHelp(),process.exit(0))}function u(e){var t=e.name+(!0===e.variadic?"...":"");return e.required?"<"+t+">":"["+t+"]"}function c(e){try{if(m.statSync(e).isFile())return!0}catch(e){return!1}}var p=n(17).EventEmitter,f=n(18).spawn,l=n(19),h=l.dirname,d=l.basename,m=n(1);t=e.exports=new o,t.Command=o,t.Option=r,r.prototype.name=function(){return this.long.replace("--","").replace("no-","")},r.prototype.is=function(e){return e==this.short||e==this.long},o.prototype.__proto__=p.prototype,o.prototype.command=function(e,t,n){n=n||{};var r=e.split(/ +/),s=new o(r.shift());return t&&(s.description(t),this.executables=!0,this._execs[s._name]=!0,n.isDefault&&(this.defaultExecutable=s._name)),s._noHelp=!!n.noHelp,this.commands.push(s),s.parseExpectedArgs(r),s.parent=this,t?this:s},o.prototype.arguments=function(e){return this.parseExpectedArgs(e.split(/ +/))},o.prototype.addImplicitHelpCommand=function(){this.command("help [cmd]","display help for [cmd]")},o.prototype.parseExpectedArgs=function(e){if(e.length){var t=this;return e.forEach(function(e){var n={required:!1,name:"",variadic:!1};switch(e[0]){case"<":n.required=!0,n.name=e.slice(1,-1);break;case"[":n.name=e.slice(1,-1)}n.name.length>3&&"..."===n.name.slice(-3)&&(n.variadic=!0,n.name=n.name.slice(0,-3)),n.name&&t._args.push(n)}),this}},o.prototype.action=function(e){var t=this,n=function(n,r){n=n||[],r=r||[];var o=t.parseOptions(r);a(t,o.unknown),o.unknown.length>0&&t.unknownOption(o.unknown[0]),o.args.length&&(n=o.args.concat(n)),t._args.forEach(function(e,r){e.required&&null==n[r]?t.missingArgument(e.name):e.variadic&&(r!==t._args.length-1&&t.variadicArgNotLast(e.name),n[r]=n.splice(r))}),t._args.length?n[t._args.length]=t:n.push(t),e.apply(t,n)},r=this.parent||this,o=r===this?"*":this._name;return r.on("command:"+o,n),this._alias&&r.on("command:"+this._alias,n),this},o.prototype.option=function(e,t,n,o){var i=this,a=new r(e,t),u=a.name(),c=s(u);if("function"!=typeof n)if(n instanceof RegExp){var p=n;n=function(e,t){var n=p.exec(e);return n?n[0]:t}}else o=n,n=null;return(0==a.bool||a.optional||a.required)&&(0==a.bool&&(o=!0),void 0!==o&&(i[c]=o)),this.options.push(a),this.on("option:"+u,function(e){null!==e&&n&&(e=n(e,void 0===i[c]?o:i[c])),"boolean"==typeof i[c]||void 0===i[c]?i[c]=null==e?!!a.bool&&(o||!0):e:null!==e&&(i[c]=e)}),this},o.prototype.allowUnknownOption=function(e){return this._allowUnknownOption=0===arguments.length||e,this},o.prototype.parse=function(e){this.executables&&this.addImplicitHelpCommand(),this.rawArgs=e,this._name=this._name||d(e[1],".js"),this.executables&&e.length<3&&!this.defaultExecutable&&e.push("--help");var t=this.parseOptions(this.normalize(e.slice(2))),n=this.args=t.args,r=this.parseArgs(this.args,t.unknown),o=r.args[0],s=null;return o&&(s=this.commands.filter(function(e){return e.alias()===o})[0]),this._execs[o]&&"function"!=typeof this._execs[o]?this.executeSubCommand(e,n,t.unknown):s?(n[0]=s._name,this.executeSubCommand(e,n,t.unknown)):this.defaultExecutable?(n.unshift(this.defaultExecutable),this.executeSubCommand(e,n,t.unknown)):r},o.prototype.executeSubCommand=function(e,t,n){t=t.concat(n),t.length||this.help(),"help"==t[0]&&1==t.length&&this.help(),"help"==t[0]&&(t[0]=t[1],t[1]="--help");var r,o=e[1],s=d(o,".js")+"-"+t[0],i=m.lstatSync(o).isSymbolicLink()?m.readlinkSync(o):o;i!==o&&"/"!==i.charAt(0)&&(i=l.join(h(o),i)),r=h(i);var a=l.join(r,s),u=!1;c(a+".js")?(s=a+".js",u=!0):c(a)&&(s=a),t=t.slice(1);var p;"win32"!==process.platform?u?(t.unshift(s),t=(process.execArgv||[]).concat(t),p=f("node",t,{stdio:"inherit",customFds:[0,1,2]})):p=f(s,t,{stdio:"inherit",customFds:[0,1,2]}):(t.unshift(s),p=f(process.execPath,t,{stdio:"inherit"})),["SIGUSR1","SIGUSR2","SIGTERM","SIGINT","SIGHUP"].forEach(function(e){process.on(e,function(){!1===p.killed&&null===p.exitCode&&p.kill(e)})}),p.on("close",process.exit.bind(process)),p.on("error",function(e){"ENOENT"==e.code?console.error("\n  %s(1) does not exist, try --help\n",s):"EACCES"==e.code&&console.error("\n  %s(1) not executable. try chmod or run with root\n",s),process.exit(1)}),this.runningCommand=p},o.prototype.normalize=function(e){for(var t,n,r,o=[],s=0,i=e.length;s<i;++s){if(t=e[s],s>0&&(n=this.optionFor(e[s-1])),"--"===t){o=o.concat(e.slice(s));break}n&&n.required?o.push(t):t.length>1&&"-"==t[0]&&"-"!=t[1]?t.slice(1).split("").forEach(function(e){o.push("-"+e)}):/^--/.test(t)&&~(r=t.indexOf("="))?o.push(t.slice(0,r),t.slice(r+1)):o.push(t)}return o},o.prototype.parseArgs=function(e,t){var n;return e.length?(n=e[0],this.listeners("command:"+n).length?this.emit("command:"+e.shift(),e,t):this.emit("command:*",e)):(a(this,t),t.length>0&&this.unknownOption(t[0])),this},o.prototype.optionFor=function(e){for(var t=0,n=this.options.length;t<n;++t)if(this.options[t].is(e))return this.options[t]},o.prototype.parseOptions=function(e){for(var t,n,r,o=[],s=e.length,i=[],a=0;a<s;++a)if(r=e[a],t)o.push(r);else if("--"!=r)if(n=this.optionFor(r))if(n.required){if(null==(r=e[++a]))return this.optionMissingArgument(n);this.emit("option:"+n.name(),r)}else n.optional?(r=e[a+1],null==r||"-"==r[0]&&"-"!=r?r=null:++a,this.emit("option:"+n.name(),r)):this.emit("option:"+n.name());else r.length>1&&"-"==r[0]?(i.push(r),e[a+1]&&"-"!=e[a+1][0]&&i.push(e[++a])):o.push(r);else t=!0;return{args:o,unknown:i}},o.prototype.opts=function(){for(var e={},t=this.options.length,n=0;n<t;n++){var r=s(this.options[n].name());e[r]="version"===r?this._version:this[r]}return e},o.prototype.missingArgument=function(e){console.error(),console.error("  error: missing required argument `%s'",e),console.error(),process.exit(1)},o.prototype.optionMissingArgument=function(e,t){console.error(),t?console.error("  error: option `%s' argument missing, got `%s'",e.flags,t):console.error("  error: option `%s' argument missing",e.flags),console.error(),process.exit(1)},o.prototype.unknownOption=function(e){this._allowUnknownOption||(console.error(),console.error("  error: unknown option `%s'",e),console.error(),process.exit(1))},o.prototype.variadicArgNotLast=function(e){console.error(),console.error("  error: variadic arguments must be last `%s'",e),console.error(),process.exit(1)},o.prototype.version=function(e,t){return 0==arguments.length?this._version:(this._version=e,t=t||"-V, --version",this.option(t,"output the version number"),this.on("option:version",function(){process.stdout.write(e+"\n"),process.exit(0)}),this)},o.prototype.description=function(e){return 0===arguments.length?this._description:(this._description=e,this)},o.prototype.alias=function(e){var t=this;return 0!==this.commands.length&&(t=this.commands[this.commands.length-1]),0===arguments.length?t._alias:(t._alias=e,this)},o.prototype.usage=function(e){var t=this._args.map(function(e){return u(e)}),n="[options]"+(this.commands.length?" [command]":"")+(this._args.length?" "+t.join(" "):"");return 0==arguments.length?this._usage||n:(this._usage=e,this)},o.prototype.name=function(e){return 0===arguments.length?this._name:(this._name=e,this)},o.prototype.largestOptionLength=function(){return this.options.reduce(function(e,t){return Math.max(e,t.flags.length)},0)},o.prototype.optionHelp=function(){var e=this.largestOptionLength();return this.options.map(function(t){return i(t.flags,e)+"  "+t.description}).concat([i("-h, --help",e)+"  output usage information"]).join("\n")},o.prototype.commandHelp=function(){if(!this.commands.length)return"";var e=this.commands.filter(function(e){return!e._noHelp}).map(function(e){var t=e._args.map(function(e){return u(e)}).join(" ");return[e._name+(e._alias?"|"+e._alias:"")+(e.options.length?" [options]":"")+" "+t,e._description]}),t=e.reduce(function(e,t){return Math.max(e,t[0].length)},0);return["","  Commands:","",e.map(function(e){var n=e[1]?"  "+e[1]:"";return i(e[0],t)+n}).join("\n").replace(/^/gm,"    "),""].join("\n")},o.prototype.helpInformation=function(){var e=[];this._description&&(e=["  "+this._description,""]);var t=this._name;this._alias&&(t=t+"|"+this._alias);var n=["","  Usage: "+t+" "+this.usage(),""],r=[],o=this.commandHelp();o&&(r=[o]);var s=["","  Options:","",""+this.optionHelp().replace(/^/gm,"    "),""];return n.concat(e).concat(s).concat(r).join("\n")},o.prototype.outputHelp=function(e){e||(e=function(e){return e}),process.stdout.write(e(this.helpInformation())),this.emit("--help")},o.prototype.help=function(e){this.outputHelp(e),process.exit()}},function(e,t){e.exports=require("events")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";function r(e,t,n){return u.http({method:"get",url:e,headers:{Range:"bytes="+t+"-"+(t+n-1)},responseType:"arraybuffer"}).then(function(e){return console.log("found response"),o(e),e}).catch(function(e){throw console.log(e),new Error("error")})}function o(e){console.log(e.headers["content-range"]),console.log(e.headers["content-length"]),console.log(e.headers["content-type"])}function s(e,t,n){void 0===t&&(t=4),void 0===n&&(n=c);for(var s=[],a=0;a<t;a++)s.push(r(e,a*n,n));u.httpResolveAllInOrder(s).then(function(e){console.log("done!");var t=i.createWriteStream("out.jar");e.map(function(e,n){o(e);var r=new Buffer(e.data);t.write(r)}),t.end()})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=n(21),u=a.initNetworkUtils(),c=1048576;t.multiGet=s},function(e,t,n){"use strict";function r(){return new s(o.default)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(22),s=function(){function e(e){this.httpApi=e}return e.prototype.http=function(e){return this.httpApi(e)},e.prototype.httpResolveAllInOrder=function(e){return this.httpApi.all(e)},e}();t.NetworkUtils=s,t.initNetworkUtils=r},function(e,t,n){e.exports=n(23)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(0),s=n(4),i=n(25),a=n(2),u=r(a);u.Axios=i,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n(14),u.CancelToken=n(49),u.isCancel=n(13),u.all=function(e){return Promise.all(e)},u.spread=n(50),e.exports=u,e.exports.default=u},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(2),s=n(0),i=n(44),a=n(45),u=n(47),c=n(48);r.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(s.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(0),o=n(5),s=n(7),i=n(28),a=n(29),u=n(3),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(30);e.exports=function(e){return new Promise(function(t,p){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var h=new XMLHttpRequest,d="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||a(e.url)||(h=new window.XDomainRequest,d="onload",m=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";l.Authorization="Basic "+c(g+":"+v)}if(h.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[d]=function(){if(h&&(4===h.readyState||m)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?i(h.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?h.response:h.responseText,s={data:r,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:n,config:e,request:h};o(t,p,s),h=null}},h.onerror=function(){p(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){p(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var y=n(31),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(l[e.xsrfHeaderName]=w)}if("setRequestHeader"in h&&r.forEach(l,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),p(e),h=null)}),void 0===f&&(f=null),h.send(f)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+", "+n:n)}),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",a=0,u=s;o.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;t=t<<8|n}return i}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";var r=n(0),o=n(5),s=n(7),i=n(8),a=n(9),u=n(10).http,c=n(10).https,p=n(11),f=n(42),l=n(43),h=n(3),d=n(6);e.exports=function(e){return new Promise(function(t,n){var m,g=e.data,v=e.headers,y=!1;if(v["User-Agent"]||v["user-agent"]||(v["User-Agent"]="axios/"+l.version),g&&!r.isStream(g)){if(Buffer.isBuffer(g));else if(r.isArrayBuffer(g))g=new Buffer(new Uint8Array(g));else{if(!r.isString(g))return n(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e));g=new Buffer(g,"utf-8")}v["Content-Length"]=g.length}var w=void 0;if(e.auth){w=(e.auth.username||"")+":"+(e.auth.password||"")}var b=p.parse(e.url),x=b.protocol||"http:";if(!w&&b.auth){var _=b.auth.split(":");w=(_[0]||"")+":"+(_[1]||"")}w&&delete v.Authorization;var k="https:"===x,E=k?e.httpsAgent:e.httpAgent,C={hostname:b.hostname,port:b.port,path:s(b.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method,headers:v,agent:E,auth:w},A=e.proxy;if(!A){var R=x.slice(0,-1)+"_proxy",O=process.env[R]||process.env[R.toUpperCase()];if(O){var j=p.parse(O);if(A={host:j.hostname,port:j.port},j.auth){var S=j.auth.split(":");A.auth={username:S[0],password:S[1]}}}}if(A&&(C.hostname=A.host,C.host=A.host,C.headers.host=b.hostname+(b.port?":"+b.port:""),C.port=A.port,C.path=x+"//"+b.hostname+(b.port?":"+b.port:"")+C.path,A.auth)){var q=new Buffer(A.auth.username+":"+A.auth.password,"utf8").toString("base64");C.headers["Proxy-Authorization"]="Basic "+q}var U;0===e.maxRedirects?U=k?a:i:(e.maxRedirects&&(C.maxRedirects=e.maxRedirects),U=k?c:u);var T=U.request(C,function(r){if(!y){clearTimeout(m),m=null;var s=r;switch(r.headers["content-encoding"]){case"gzip":case"compress":case"deflate":s=s.pipe(f.createUnzip()),delete r.headers["content-encoding"]}var i=r.req||T,a={status:r.statusCode,statusText:r.statusMessage,headers:r.headers,config:e,request:i};if("stream"===e.responseType)a.data=s,o(t,n,a);else{var u=[];s.on("data",function(t){u.push(t),e.maxContentLength>-1&&Buffer.concat(u).length>e.maxContentLength&&n(h("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,i))}),s.on("error",function(t){y||n(d(t,e,null,i))}),s.on("end",function(){var r=Buffer.concat(u);"arraybuffer"!==e.responseType&&(r=r.toString("utf8")),a.data=r,o(t,n,a)})}}});T.on("error",function(t){y||n(d(t,e,null,T))}),e.timeout&&!m&&(m=setTimeout(function(){T.abort(),n(h("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",T)),y=!0},e.timeout)),e.cancelToken&&e.cancelToken.promise.then(function(e){y||(T.abort(),n(e),y=!0)}),r.isStream(g)?g.pipe(T):T.end(g)})}},function(e,t){e.exports=require("assert")},function(e,t){e.exports=require("stream")},function(e,t,n){"undefined"!=typeof process&&"renderer"===process.type?e.exports=n(36):e.exports=n(38)},function(e,t,n){function r(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function o(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function a(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}t=e.exports=n(12),t.log=s,t.formatArgs=o,t.save=i,t.load=a,t.useColors=r,t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(a())},function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=c?Math.round(e/c)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return s(e,c,"day")||s(e,u,"hour")||s(e,a,"minute")||s(e,i,"second")||e+" ms"}function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,a=60*i,u=60*a,c=24*u,p=365.25*c;e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return n(e);if("number"===s&&!1===isNaN(e))return t.long?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,n){function r(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):c.isatty(f)}function o(e){var n=this.namespace;if(this.useColors){var r=this.color,o="  [3"+r+";1m"+n+" [0m";e[0]=o+e[0].split("\n").join("\n"+o),e.push("[3"+r+"m+"+t.humanize(this.diff)+"[0m")}else e[0]=(new Date).toUTCString()+" "+n+" "+e[0]}function s(){return l.write(p.format.apply(p,arguments)+"\n")}function i(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e}function a(){return process.env.DEBUG}function u(e){e.inspectOpts={};for(var n=Object.keys(t.inspectOpts),r=0;r<n.length;r++)e.inspectOpts[n[r]]=t.inspectOpts[n[r]]}var c=n(39),p=n(40);t=e.exports=n(12),t.init=u,t.log=s,t.formatArgs=o,t.save=i,t.load=a,t.useColors=r,t.colors=[6,2,3,4,5,1],t.inspectOpts=Object.keys(process.env).filter(function(e){return/^debug_/i.test(e)}).reduce(function(e,t){var n=t.substring(6).toLowerCase().replace(/_([a-z])/g,function(e,t){return t.toUpperCase()}),r=process.env[t];return r=!!/^(yes|on|true|enabled)$/i.test(r)||!/^(no|off|false|disabled)$/i.test(r)&&("null"===r?null:Number(r)),e[n]=r,e},{});var f=parseInt(process.env.DEBUG_FD,10)||2;1!==f&&2!==f&&p.deprecate(function(){},"except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();var l=1===f?process.stdout:2===f?process.stderr:function(e){var t;switch(process.binding("tty_wrap").guessHandleType(e)){case"TTY":t=new c.WriteStream(e),t._type="tty",t._handle&&t._handle.unref&&t._handle.unref();break;case"FILE":t=new(n(1).SyncWriteStream)(e,{autoClose:!1}),t._type="fs";break;case"PIPE":case"TCP":t=new(n(41).Socket)({fd:e,readable:!1,writable:!0}),t.readable=!1,t.read=null,t._type="pipe",t._handle&&t._handle.unref&&t._handle.unref();break;default:throw new Error("Implement me. Unknown stream file type!")}return t.fd=e,t._isStdio=!0,t}(f);t.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,p.inspect(e,this.inspectOpts).replace(/\s*\n\s*/g," ")},t.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,p.inspect(e,this.inspectOpts)},t.enable(a())},function(e,t){e.exports=require("tty")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("net")},function(e,t){e.exports=require("zlib")},function(e,t){e.exports={_args:[["axios@^0.16.2","/Users/adel/Development/multiget"]],_from:"axios@>=0.16.2 <0.17.0",_id:"axios@0.16.2",_inCache:!0,_installable:!0,_location:"/axios",_nodeVersion:"6.10.1",_npmOperationalInternal:{host:"s3://npm-registry-packages",tmp:"tmp/axios-0.16.2.tgz_1496518163672_0.8309127793181688"},_npmUser:{email:"nick.uraltsev@gmail.com",name:"nickuraltsev"},_npmVersion:"3.10.10",_phantomChildren:{},_requested:{name:"axios",raw:"axios@^0.16.2",rawSpec:"^0.16.2",scope:null,spec:">=0.16.2 <0.17.0",type:"range"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/axios/-/axios-0.16.2.tgz",_shasum:"ba4f92f17167dfbab40983785454b9ac149c3c6d",_shrinkwrap:null,_spec:"axios@^0.16.2",_where:"/Users/adel/Development/multiget",author:{name:"Matt Zabriskie"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},bugs:{url:"https://github.com/mzabriskie/axios/issues"},dependencies:{"follow-redirects":"^1.2.3","is-buffer":"^1.1.5"},description:"Promise based HTTP client for the browser and node.js",devDependencies:{coveralls:"^2.11.9","es6-promise":"^4.0.5",grunt:"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0","phantomjs-prebuilt":"^2.1.7",sinon:"^1.17.4",typescript:"^2.0.3","url-search-params":"^0.6.1",webpack:"^1.13.1","webpack-dev-server":"^1.14.1"},directories:{},dist:{shasum:"ba4f92f17167dfbab40983785454b9ac149c3c6d",tarball:"https://registry.npmjs.org/axios/-/axios-0.16.2.tgz"},gitHead:"46e275c407f81c44dd9aad419b6e861d8a936580",homepage:"https://github.com/mzabriskie/axios",keywords:["xhr","http","ajax","promise","node"],license:"MIT",main:"index.js",maintainers:[{email:"mzabriskie@gmail.com",name:"mzabriskie"},{email:"nick.uraltsev@gmail.com",name:"nickuraltsev"}],name:"axios",optionalDependencies:{},readme:"ERROR: No README data found!",repository:{type:"git",url:"git+https://github.com/mzabriskie/axios.git"},scripts:{build:"NODE_ENV=production grunt build",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",examples:"node ./examples/server.js",postversion:"git push && git push --tags",preversion:"npm test",start:"node ./sandbox/server.js",test:"grunt test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},typings:"./index.d.ts",version:"0.16.2"}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),s=n(46),i=n(13),a=n(2);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(14);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}]);
//# sourceMappingURL=bundle.js.map