(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(23),a(1)),s=a(4),m=a.n(s),i=a(3),u=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/movies").then((function(e){console.log(e),c(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"mt-5"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("tr",{className:"thead-dark"},l.a.createElement("th",null,"Movie Title"),l.a.createElement("th",null,"Avg. Rating"),l.a.createElement("th",null,"Actions")),r.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.rating),l.a.createElement("td",null,l.a.createElement(i.a,{className:"btn btn-outline-primary",to:"/movies/".concat(e._id)},"Read Reviews"),l.a.createElement(i.a,{className:"btn btn-outline-warning",to:"/movies/".concat(e._id,"/review")},"Add Review")))}))))},g=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),g=u[0],p=u[1],v=Object(n.useState)(),E=Object(o.a)(v,2),d=E[0],b=E[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),N=h[0],w=h[1],j=Object(n.useState)({}),O=Object(o.a)(j,2),y=O[0],S=O[1];return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col-sm-6 mt-5",onSubmit:function(e){e.preventDefault();var t={title:r,name:g,rating:d,review:N};m.a.post("http://localhost:8000/api/movies",t).then((function(e){e.data.errors?(S(e.data.errors),console.log(e.data.errors)):Object(i.c)("/")})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return c(e.target.value)}}),y.title?l.a.createElement("p",{className:"text-danger"},y.title.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Your Name"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return p(e.target.value)}}),y.name?l.a.createElement("p",{className:"text-danger"},y.name.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rating"),l.a.createElement("input",{type:"number",className:"form-control",onChange:function(e){return b(e.target.value)}}),y.rating?l.a.createElement("p",{className:"text-danger"},y.rating.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Review"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return w(e.target.value)}}),y.review?l.a.createElement("p",{className:"text-danger"},y.review.properties.message):""),l.a.createElement("input",{type:"submit",className:"btn btn-outline-primary",value:"Add Movie"})))},p=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),g=u[0],p=u[1];console.log("the props are loggin below"),console.log(e);Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/movies/".concat(e._id)).then((function(e){console.log(e),c(e.data.reviews),console.log(e.data)})).catch((function(e){return console.log(e)})),m.a.get("http://localhost:8000/api/movies/".concat(e._id)).then((function(e){p(e.data)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("div",{className:"mt-5"},l.a.createElement("h3",null,"Movie Title: ",g.title),l.a.createElement("h5",null,"Poster's Name: ",g.name),l.a.createElement("h5",null,"Poster's Rating: ",g.rating),l.a.createElement("h5",null,"Poster's Review: ",g.review),l.a.createElement("button",{className:"btn btn-outline-danger my-3",onClick:function(){m.a.delete("http://localhost:8000/api/movies/".concat(e._id,"/delete")).then((function(e){console.log(e),Object(i.c)("/")})).catch((function(e){return console.log(e)}))}},"Remove Movie"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("tr",{className:"thead-dark"},l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Rating"),l.a.createElement("th",null,"Review")),r.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.rating),l.a.createElement("td",null,e.review))}))))},v=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(),u=Object(o.a)(s,2),g=u[0],p=u[1],v=Object(n.useState)(""),E=Object(o.a)(v,2),d=E[0],b=E[1],f=Object(n.useState)({}),h=Object(o.a)(f,2),N=h[0],w=h[1];return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col-sm-6 mt-5",onSubmit:function(t,a){t.preventDefault(),console.log(e);var n={name:r,rating:g,review:d};console.log("logging new review below"),console.log(n),m.a.put("http://localhost:8000/api/movies/".concat(e._id,"/add_review"),n).then((function(t){console.log("logging res below"),console.log(t),t.data.errors?w(t.data.errors.reviews.errors):(Object(i.c)("/movies/".concat(e._id)),console.log("in the else"))})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return c(e.target.value)}}),N.name?l.a.createElement("p",{className:"text-danger"},N.name.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rating"),l.a.createElement("input",{type:"number",className:"form-control",onChange:function(e){return p(e.target.value)}}),N.rating?l.a.createElement("p",{className:"text-danger"},N.rating.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Review"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)}}),N.review?l.a.createElement("p",{className:"text-danger"},N.review.properties.message):""),l.a.createElement("input",{type:"submit",className:"btn btn-outline-primary",value:"Add Review"})))};var E=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(i.a,{className:"btn btn-info mt-3",to:"/"},"Movie(s) List"),l.a.createElement(i.a,{className:"btn btn-info mt-3",to:"/movies/new"},"Add a New Movie"),l.a.createElement(i.b,null,l.a.createElement(u,{path:"/"}),l.a.createElement(g,{path:"/movies/new"}),l.a.createElement(p,{path:"/movies/:_id"}),l.a.createElement(v,{path:"/movies/:_id/review"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8175d584.chunk.js.map