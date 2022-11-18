"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var accessibility;"undefined"!=typeof document&&"undefined"!=typeof window&&"function"!=typeof Element.prototype.contains&&(Element.prototype.contains=function(a){return this.compareDocumentPosition(a)%16},document.contains=function(a){return document.body.contains(a)});var a11yGroup=function(a,b){var c,d,f=this,g=!1,h=!1;this.mod=function(a,b){return(a%b+b)%b},this.init=function(a,b){var e=b||{},g=e.preventClickDefault,h=e.allowTabbing,i=e.doKeyChecking,j=e.ariaCheckedCallback,k=e.setState,l=e.radioFocusCallback,m=e.focusCallback,n=e.doSelectFirstOnInit,o=e.visuallyHiddenClass,p=e.activatedEventName,q=e.deactivatedEventName;f.allowTabbing=!!h,f.doKeyChecking=!!i,f.preventClickDefault=!!g,f.setState=!1!==k,f.role=a.getAttribute("role"),f.visuallyHiddenClass=o||"sr-only",f.activatedEventName=p,f.deactivatedEventName=q;var r=/(group$|list$|^listbox$)/;(c=a.dataset.keyboardOnlyInstructions,d=c?document.getElementById(c):null,null!==f.role&&r.test(f.role))&&(f.groupType="listbox"===f.role?"option":f.role.replace(r,""),f.ariaCheckedCallback=j,f.focusCallback=m||l,f.checkedAttribute="tab"===f.groupType||"option"===f.groupType?"aria-selected":"aria-checked",a.addEventListener("keydown",f.onKeyUp.bind(f),!0),a.addEventListener("click",f.onClick.bind(f),!0),n&&f.select(null,a.querySelector("[role=\"".concat(f.groupType,"\"]"))),d&&(a.addEventListener("mousedown",f.mousedownEvent),a.addEventListener("focusout",f.focusoutEvent)),document.addEventListener("keydown",f.keydownEvent),a.addEventListener("focusin",f.focusinEvent))},this.mousedownEvent=function(){g=!0},this.keydownEvent=function(){h=!0},this.focusinEvent=function(a){var b=a.currentTarget.querySelectorAll("[role=\"".concat(f.groupType,"\"]"));if(d&&!g&&h&&d.classList.remove(f.visuallyHiddenClass),!g&&h&&!f.allowTabbing&&"option"!==f.groupType)for(var c,e=0;e<b.length;e++)if(c=b[e],"true"===c.getAttribute(f.checkedAttribute)){c.focus();break}g=!1,h=!1},this.focusoutEvent=function(){!g&&h&&d.classList.add(f.visuallyHiddenClass)},this.select=function(a,b,c){for(var d,e,g,h=f.ariaCheckedCallback,j=f.setState,k=f.checkedAttribute,l=f.allowTabbing,m=b.closest("[role=".concat(f.role,"]")),n=Array.from(m.querySelectorAll("[role=\"".concat(f.groupType,"\"]"))),o=0;o<n.length;o++){var p=n[o],q="false";"true"===p.getAttribute(k)&&(d=p),p===b&&(j&&(q="true"),e=p,g=o),j&&(p.setAttribute(k,q),p.dispatchEvent(new CustomEvent("true"===q?f.activatedEventName:f.deactivatedEventName,{bubbles:!0,detail:{group:function group(){return m}}})),p===b&&document.activeElement!==document.body&&p.focus()),l||("true"===q?p.setAttribute("tabIndex","0"):p.setAttribute("tabIndex","-1"))}l&&!c&&accessibility.refocusCurrentElement(),h&&h(a,e,g,d,n)},this.onClick=function(a){var b=a.target;f.preventClickDefault&&a.preventDefault(),b.getAttribute("role")===f.groupType&&(f.select(a,b),b.focus())},this.onFocus=function(a){var b=a.target,c=a.currentTarget;if(c){var d=f.focusCallback,e=Array.from(c.querySelectorAll("[role=\"".concat(f.groupType,"\"]"))),g=e.indexOf(b);d&&d(a,b,g,c)}},this.onKeyUp=function(a){var b=a.key,c=a.target,d=a.currentTarget,e=c.getAttribute("role"),g=f.doKeyChecking;if(e===f.groupType){var h,i=Array.from(d.querySelectorAll("[role=\"".concat(f.groupType,"\"]"))),j=i.indexOf(c),k="option"===e;if(0<=j){switch(b){case"ArrowUp":case"ArrowLeft":h=i[f.mod(j-1,i.length)],k||f.select(a,h,!0);break;case"ArrowDown":case"ArrowRight":h=i[f.mod(j+1,i.length)],k||f.select(a,h,!0);break;case"Home":a.preventDefault(),h=i[0],k||f.select(a,h,!0);break;case"End":a.preventDefault(),h=i[i.length-1],k||f.select(a,h,!0);break;case" ":case"Enter":g&&(f.select(a,c),a.preventDefault());break;default:}h&&(a.preventDefault(),requestAnimationFrame(function(){h.focus(),"Tab"===b&&requestAnimationFrame(function(){f.onFocus(a)},{useRealRAF:!0})}))}}},this.init(a,b)};accessibility={tempFocusElement:null,tempFocusElementText:" select ",tabbableSelector:"a[href]:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     area[href]:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     details:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     iframe:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     keygen:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     [contentEditable=true]:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     :enabled:not(fieldset):not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     object:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     embed:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     [tabindex]:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     video[controls]:not([tabindex=\"-1\"]):not([disabled]):not([hidden]),\n     audio[controls]:not([tabindex=\"-1\"]):not([disabled]):not([hidden])",htmlTagRegex:/(<([^>]+)>)/gi,hasSecondaryNavSkipTarget:!1,mainContentSelector:"",activeSubdocument:null,oldAriaHiddenVal:"data-old-aria-hidden",groups:[],focusAndScrollToView:function focusAndScrollToView(a){a.focus();var b=a.getBoundingClientRect(),c=document.elementFromPoint(b.left,b.top);if(c&&c!==a){var d=c.getBoundingClientRect();window.scrollBy(0,d.top-d.bottom)}},applyFormFocus:function applyFormFocus(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=c.firstValid,f=c.isAjaxForm,g=c.e,e=!1;if(f&&g.preventDefault(),a instanceof window.HTMLElement){for(var h,j=a.elements,k=function(a){var c=j[a];if("FIELDSET"!==c.nodeName&&(d||"true"===c.getAttribute("aria-invalid")))return e=!0,document.activeElement===c?(b.focusAndScrollToView(j[a+1]),setTimeout(function(){c&&b.focusAndScrollToView(c)},500)):b.focusAndScrollToView(c),"break"},l=0;l<j.length&&(h=k(l),"break"!==h);l+=1);e||requestAnimationFrame(function(){var c=a.querySelector(".form-error__error-text");c&&b.focusAndScrollToView(c)})}return e},refocusCurrentElement:function refocusCurrentElement(a){var b=this,c=document,d=c.activeElement,e=!1,f=null;if(d&&"function"==typeof Element.prototype.closest&&(f=d.closest("[role=\"dialog\"], dialog"),f&&(e=!0)),(!this.tempFocusElement||e)&&document){var h=document.createElement("div");h.setAttribute("tabindex","-1"),h.className="sr-only",h.style.cssText="position:fixed;top:0;left:0;",h.setAttribute("aria-label",this.tempFocusElementText),h.innerHTML=this.tempFocusElementText,e&&f?f.appendChild(h):document.body.appendChild(h),this.tempFocusElement=h}if(this.tempFocusElement&&d){var g=this.tempFocusElement;g.role=d.role?d.role:"button",g.focus(),setTimeout(function(){d&&(d.focus(),b.tempFocusElement.role=null,e&&(b.tempFocusElement=null),a&&a())},500)}},doIfBlurred:function doIfBlurred(a,b){requestAnimationFrame(this.doIfBlurredHelper.bind(this,a.currentTarget,a.relatedTarget,b))},doIfBlurredHelper:function doIfBlurredHelper(a,b,c){var d=b||document.activeElement,e=d.parentNode===document.body||d===document.body||null===d;e||a.contains(d)||c()},removeHTML:function removeHTML(a){return a.replace(this.htmlTagRegex,"")},toLowerCase:function toLowerCase(a){var b="";return a&&(a.toString?b=this.removeHTML(a.toString().toLowerCase()):a.toLowerCase&&(b=this.removeHTML(a.toLowerCase()))),b},createKeyboardTrap:function createKeyboardTrap(){var a=document.createElement("div");return a.classList.add("enable-tabtrap"),a.classList.add("sr-only"),a.setAttribute("tabindex","0"),a},removeKeyboardFocusLoop:function removeKeyboardFocusLoop(){var a=this;document.querySelectorAll(".enable-tabtrap").forEach(function(b){b.classList.contains("enable-tabtrap__first")?b.removeEventListener("focus",a.focusLastElement):b.removeEventListener("focus",a.focusFirstElement),b.parentElement.removeChild(b)})},setKeyboardFocusLoop:function setKeyboardFocusLoop(a){var b=this.createKeyboardTrap(),c=this.createKeyboardTrap();this.applyKeyboardTraps(a,b,c)},focusFirstElement:function focusFirstElement(){var a=this.activeSubdocument,b=this.tabbableSelector,c=this.getAlTabbableEls(a);c[1].focus()},focusLastElement:function focusLastElement(){var a=this.activeSubdocument,b=this.tabbableSelector,c=this.getAlTabbableEls(a);c[c.length-2].focus()},getAlTabbableEls:function getAlTabbableEls(a){return _toConsumableArray(a.querySelectorAll(this.tabbableSelector)).filter(function(a){return 0!==a.offsetWidth&&0!==a.offsetHeight&&"none"!==a.style.display})},applyKeyboardTraps:function applyKeyboardTraps(a,b,c){b.classList.add("enable-tabtrap__first"),b.addEventListener("focus",this.focusLastElement.bind(this)),c.classList.add("enable-tabtrap__last"),c.addEventListener("focus",this.focusFirstElement.bind(this)),a.insertBefore(b,a.firstChild),a.appendChild(c)},setMobileFocusLoop:function setMobileFocusLoop(a){var b=document,c=b.body,d=a,e=document.querySelector("[".concat(this.oldAriaHiddenVal,"]"));if(null!==e)return void console.warn("Attempted to run setMobileFocusLoop() twice in a row.  removeMobileFocusLoop() must be executed before it run again. Bailing.");do{for(var f,g=d.parentNode.childNodes,h=0;h<g.length;h++)f=g[h],f!==d&&f.setAttribute&&(f.setAttribute(this.oldAriaHiddenVal,f.ariaHidden||"null"),f.setAttribute("aria-hidden","true"),f.classList.add("enable-aria-hidden"));d=d.parentNode}while(d!==c);requestAnimationFrame(this.fixChromeAriaHiddenBug)},fixChromeAriaHiddenBug:function fixChromeAriaHiddenBug(){for(var a=document.querySelectorAll(".enable-aria-hidden"),b=0;b<a.length;b++)a[b].classList.remove("enable-aria-hidden")},removeMobileFocusLoop:function removeMobileFocusLoop(){for(var a=document.querySelectorAll("[".concat(this.oldAriaHiddenVal,"]")),b=0;b<a.length;b++){var c=a[b],d=c.getAttribute(this.oldAriaHiddenVal);"null"===d?c.removeAttribute("aria-hidden"):c.setAttribute("aria-hidden",d),c.removeAttribute(this.oldAriaHiddenVal)}},setKeepFocusInside:function setKeepFocusInside(a,b){var c=document,d=c.body;b?(this.activeSubdocument&&accessibility.setKeepFocusInside(this.activeSubdocument,!1),this.activeSubdocument=a,this.setKeyboardFocusLoop(a),this.setMobileFocusLoop(a)):(this.activeSubdocument=null,this.removeKeyboardFocusLoop(a),this.removeMobileFocusLoop(a))},normalizedKey:function normalizedKey(a){return"Space"===a||"SpaceBar"===a?" ":"OS"===a?"Meta":"Scroll"===a?"ScrollLock":"Left"===a||"Right"===a||"Up"===a||"Down"===a?"Arrow"+a:"Del"===a?"Delete":"Crsel"===a?"CrSel":"Essel"===a?"EsSel":"Esc"===a?"Escape":"Apps"===a?"ContextMenu":"AltGraph"===a?"ModeChange":"MediaNextTrack"===a?"MediaTrackNext":"MediaPreviousTrack"===a?"MediaTrackPrevious":"FastFwd"===a?"MediaFastForward":"VolumeUp"===a||"VolumeDown"===a||"VolumeMute"===a?"Audio"+a:"Decimal"===a?".":"Add"===a?"+":"Subtract"===a?"-":"Multiply"===a?"*":"Divide"===a?"/":a},getAriaControllerEl:function getAriaControllerEl(a){var b=document.querySelector("[aria-controls=\""+a.id+"\"]");if(!b)throw"Error: There is no element that has aria-controls set to "+a.id;return b},getAriaControlsEl:function getAriaControlsEl(a){var b=document.getElementById(a.getAttribute("aria-controls"));if(!b)throw"Error: aria-controls on button must be set to id of flyout menu.";return b},isInViewport:function isInViewport(a){var b=a.getBoundingClientRect();return 0<=b.top&&0<=b.left&&b.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)},resetZoom:function resetZoom(){var a=document.querySelector("meta[name=\"viewport\"]"),b=a.getAttribute("content");-1<b.indexOf("user-scalable=no")&&console.warn("user-scalable=no is set in the <meta name=\"viewport\">.  You must fix this in order for the page to be accessible");var c=document.createElement("meta");c.setAttribute("name","viewport"),c.setAttribute("content","width=device-width, initial-scale=1, user-scalable=no");var d=document.documentElement.style.zoom;document.documentElement.style.zoom=.99,document.head.appendChild(c),window.requestAnimationFrame(function(){if(document.documentElement.style.zoom=d,document.head.removeChild(c),0!==window.visualViewport){var a=window,b=a.pageYOffset,e=a.innerHeight,f=document,g=f.activeElement,h=b+g.getBoundingClientRect().top;b+e/2<=h&&h<=b+e&&setTimeout(function(){window.scrollTo(0,h-e/4)},100)}})},setDebugMode:function setDebugMode(){HTMLElement.prototype.oldFocus=HTMLElement.prototype.focus,HTMLElement.prototype.focus=function(){this.oldFocus()}},initGroup:function initGroup(a,b){this.groups.push(new a11yGroup(a,b))},setArrowKeyRadioGroupEvents:function setArrowKeyRadioGroupEvents(a,b){console.warn("Note: this method is deprecated.  Please use .initGroup instead."),this.initGroup(a,b)}};var _default=accessibility;exports["default"]=_default;
