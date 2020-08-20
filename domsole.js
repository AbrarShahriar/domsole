
'use strict';

const div = document.createElement("div");
div.id = "log";

const domsole = output();

function output() {
				document.body.append(div);
				
				let dataType;
				const dataTypeFunction = {};
				
				const sole = {};
				
				sole.log = function(i) {
								if(typeof i === "") {
												
								} else if(typeof i === "string") {
												dataType = "string";
												dataTypeFunction.showString(i);
								} else if(typeof i === "object") {
												if(i.constructor.toString().indexOf("Array") > -1) {
																dataType = "array";
																dataTypeFunction.showArray(i);
												} else if(i.constructor.toString().indexOf("Date") > -1){
																dataType = "date";
																dataTypeFunction.showDate(i);
												} else {
																dataType = "object";
																dataTypeFunction.showObject(i);
												}
								} else if(typeof i === "undefined") {
												dataType = undefined;
												dataTypeFunction.showUndefined(i);
								} else if(typeof i === "number") {
												dataType = "number";
												dataTypeFunction.showNumber(i);
								} else if(typeof i === "boolean") {
												dataType = "boolean";
												dataTypeFunction.showBoolean(i);
								} else if(typeof i === "NaN") {
												dataType = "Nan";
												dataTypeFunction.showNan(i);
								} else if(typeof i === "function") {
												dataType = "function";
												dataTypeFunction.showFunction(i);
								}
				}
				
				sole.debug = function(i) {
					   console.log(i);
				}
				
				sole.clear = function() {
								div.textContent = "";
				}
				
				dataTypeFunction.showDate = function(date) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								var txt = "<kbd>" + date + "</kbd> <<==<br><br>";
								//document.write("<kbd>" + date + "</kbd> <<==<br><br>");
								div.append("<kbd>" + date + "</kbd> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>");
				}
				
				dataTypeFunction.showNan = function(nan) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
							 var kbd = document.createElement("div");
								var txt = "<kbd id='nan'>NaN</kbd> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								kbd.innerHTML = txt;
								div.append(kbd);
								//document.write("<kbd id='nan'>NaN</kbd> <<==<br><br>");
				} 
				
				dataTypeFunction.showNumber = function(number) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								var kbd = document.createElement("div");
								var txt = "<kbd>" + number + "</kbd> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								kbd.innerHTML = txt
								div.append(kbd);
								//document.write("<kbd>" + number + "</kbd> <<==<br><br>");
				}
				
				dataTypeFunction.showString = function(string) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								var kbd = document.createElement("div")
								var txt = "<kbd>" + string + "</kbd> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								
								kbd.innerHTML = txt;
								div.append(kbd);
								//document.write("<kbd>" + string + "</kbd> <<==<br><br>");
				}
				
				dataTypeFunction.showUndefined = function(undef) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								var samp = document.createElement("div");
								samp.innerHTML = "<samp>'" + undefined + "'</samp> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								div.append(samp);
							
								//document.write('<samp>"' + name + ' is not defined"</samp> <<==<br><br>');
				}
				
				dataTypeFunction.showArray = function(array) {
								//var arr = array.splice(",").join(", ");
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								var code = document.createElement("code");
								var arr = array;
								var txt = "<code id='array'>[ " + arr + " ]</code> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								
								code.innerHTML = txt;
								div.append(code);
								//document.write("<code id='array'>[ " + arr + " ]</code> <<==<br><br>");
				}
				
				dataTypeFunction.showFunction = function(func) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								func = func.toString();
								var t1 = func.split("{").join("{<br>");
								var t2 = t1.split("}").join("<br>}");
								
								var code = document.createElement("div");
								var txt = "<code id='function'>" + t2 + "</code> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								
								code.innerHTML = txt;
								div.append(code);
								//document.write("<code id='function'>" + t2 + "</code> <<==<br><br>");
				}
				
				dataTypeFunction.showBoolean = function(bool) {
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
								var code = document.createElement("div");
								let txt;
								if(bool == true) {
												txt = "<code id='boolTrue'>" + bool + "</code> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
												//document.write("<code id='boolTrue'>" + bool + "</code> <<==<br><br>");
								} else {
												txt = "<code id='boolFalse'>" + bool + "</code> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
												//document.write("<code id='boolFalse'>" + bool + "</code> <<==<br><br>");
								}
								code.innerHTML = txt;
								div.append(code)
				}
				
				dataTypeFunction.showObject = function(object, gap) {
								
								var e = new Error().stack;
								var errStart = e.lastIndexOf("/");
								var errEnd = e.lastIndexOf(":");
								var errFile = e.slice(errStart+1, errEnd);
								
	
								function convertToText(obj) {
												var string = [];
												
												if (typeof(obj) == "object" && (obj.join == undefined)) { 
																string.push("{"); 
																var prop;
																for (prop in obj) { 
																				string.push(prop, ": ", 
																    convertToText(obj[prop]), ","); 
																}; 
																string.push("}");
																
												 } else if (typeof(obj) == "object" && !(obj.join == undefined)) { 
																string.push("[") 
																for(prop in obj) { 
																				string.push(convertToText(obj[prop]), ","); 
																} 
																string.push("]")
																
													} else if (typeof(obj) == "function") { 
																string.push(obj.toString())
																
													} else { 
																string.push(JSON.stringify(obj)) 
												 } 
												return string.join("") 
												
				     
				    }
								
								var txt = convertToText(object);
								
								var index = txt.lastIndexOf(","); 
								var t = txt.substring(0, index) + txt.substring(index + 1);
								
								let o1 = t.split("{").join("{ <br>");
								let o2 = o1.split("}").join("<br>}");
								let o3 = o2.split(",").join(", <br>");
								
								var code = document.createElement("div");
								var o4 = "<code id='object'>" + o3 + "</code> <<== <kbd id='fileLine'>" + errFile + "</kbd><br><br>";
								//document.write("<code id='object'>" + o3 + "</code> <<==<br><br>");
								
								code.innerHTML = o4;
								div.append(code);
				}
				
				sole.undo = function() {
							 document.body.append(div);
				}
				
				return sole;
}

function cline(bool) {
								
		if(bool) {
				//alert("\nType '-help' to see available commands.");
								
				var footer = document.createElement("footer");
				
				var textArea = document.createElement("textarea");
				
				var btn = document.createElement("button");
				btn.innerText = "<<==";
				btn.onclick = run;
				
				footer.append(textArea);
				footer.append(btn);
				
				document.body.append(footer);

				function run() {
								var txt = textArea.value;
								console.log(txt);
								
								if(txt == "Cls" || txt == "clear" || txt == "Clear" || txt == "cls") {
												domsole.clear();
								} else if(txt == "-help" || txt == "-Help") {
												showHelp();
								}
				}
								
		} else {
								alert("Please, pass 'true' as cline parameter to access commands.\n\nType '-help' to see available commands.");
		}
			 
				function showHelp() {
								
				}
}

window.onerror = function(msg, url, line) {
				    	
				    var start = url.lastIndexOf("/");
				    var fileName = url.slice(start+1, url.length);
				
				    var divError = document.createElement("div");
								
								divError.innerHTML = "<span id='error'>'" + msg + "'</span> <<== <kbd id='fileLine'>" + fileName + ":" + line + "</kbd><br><br>";
								div.append(divError);
}
				
							


