//Check if libraryName is already a global variable in global object
//If it is, don't do anything, if not assign it Lib 2
//var libraryName = "Lib 2";
window.libraryName = window.libraryName || "Lib 2";