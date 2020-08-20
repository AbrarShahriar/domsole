## Description

A Javascript library that allows you to display console error/text on the DOM.

Access the console directly using the DOM with text highlighting.

### Installation

First add the CSS file inside the head:
```<link rel="stylesheet" href="lib/domsole.css"/>```

Then add the script file inside the body but BEFORE any other tags:
```
<body>

   <script src="lib/domsole.js"></script>

   <!-- Put your code here -->


</body>
```

That's all you need!!

### Usage

Just call the `domsole.log()` function and pass whatever you want to display.

Right now it only accepts one parameter, the data.

Those of you getting `[object Object]` when trying to display an object to the console or DOM, this library takes care of that. You don't have to call `JSON.stringify` method.




