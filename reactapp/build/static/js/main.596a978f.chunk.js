(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),i=a.n(s);a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(7),o=a(8),l=a(10),u=a(9),p=a(1),h=a(11),m=a.n(h),v=a(15),d=a(12),f=(a(40),a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("p",{className:"name",onClick:this.props.onClick},this.props.title)}}]),a}(n.Component)),g=(a(42),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("p",{className:"movie",onClick:function(){return e.props.history.push("/movie",{id:e.props.show_id})}},this.props.title)}}]),a}(r.a.Component)),k=Object(p.f)(g),b=a(16),E=a.n(b),w={},y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={AllMovies:[],MovieList:[],selectedTup:[],userI:""},n.suggest=n.suggest.bind(Object(d.a)(n)),n.showSuggestions=n.showSuggestions.bind(Object(d.a)(n)),n.sugClick=n.sugClick.bind(Object(d.a)(n)),n.showCard=n.showCard.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api-tutorial4.herokuapp.com/movies?");case 2:t=e.sent,a=t.data,this.setState({AllMovies:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dataRequest",value:function(){var e=Object(v.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(t);case 2:a=e.sent,n=a.data,this.setState({MovieList:n});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"suggest",value:function(e){var t=e.target.value;this.setState({userI:t}),t.length>0?(this.setState({selectedTup:[]}),this.dataRequest("https://api-tutorial4.herokuapp.com/movies?title_like=.*"+t),w={borderRadius:"5px 5px 0 0",boxShadow:"inset 0 0 10px 4px darkcyan"}):(this.setState({MovieList:[]}),w={})}},{key:"showSuggestions",value:function(){var e=this;return 0===this.state.MovieList.length?null:r.a.createElement("div",{className:"listWrapper"},this.state.MovieList.map((function(t,a){return r.a.createElement(f,{onClick:e.sugClick,key:a,title:t.title})})))}},{key:"sugClick",value:function(e){w={},document.getElementById("userInput").value=e.target.innerText;var t=this.state.MovieList.filter((function(t){return t.title===e.target.innerText}));this.setState({MovieList:[],selectedTup:t})}},{key:"showCard",value:function(){return this.state.userI.length>0&&this.state.selectedTup.length>0?r.a.createElement("div",{className:"card-wrapper"},this.state.selectedTup.map((function(e,t){return r.a.createElement(k,{key:t,show_id:e.show_id,title:e.title})}))):null}},{key:"initialShow",value:function(){if(0===this.state.selectedTup.length||0===this.state.userI.length)return r.a.createElement("div",{className:"card-wrapper"},this.state.AllMovies.map((function(e,t){return r.a.createElement(k,{key:t,show_id:e.show_id,title:e.title})})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"searchBox"},r.a.createElement("p",{className:"header"},"Movies"),r.a.createElement("input",{type:"Search",id:"userInput",placeholder:"Search",className:"userInput",style:w,onChange:this.suggest}),this.showSuggestions()),this.initialShow(),this.showCard())}}]),a}(n.Component),j=(a(65),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={movie:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.state.id,a="https://api-tutorial4.herokuapp.com/movies?show_id="+t,e.next=4,E.a.get(a);case 4:n=e.sent,this.setState({movie:n.data[0]});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return e.props.history.push("/")},className:"back"}),r.a.createElement("div",{className:"spec-movie"},r.a.createElement("h1",null,"Selected Movie ID ",this.props.location.state.id),r.a.createElement("span",null,"Movie Name:"),r.a.createElement("p",null,this.state.movie.title),r.a.createElement("span",null,"Movie Description:"),r.a.createElement("p",null,this.state.movie.description),r.a.createElement("span",null,"Release Year:"),r.a.createElement("p",null,this.state.movie.release_year),r.a.createElement("span",null,"Duration:"),r.a.createElement("p",null,this.state.movie.duration),r.a.createElement("span",null,"Cast:"),r.a.createElement("p",null,this.state.movie.cast)))}}]),a}(n.Component)),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:y}),r.a.createElement(p.a,{exact:!0,path:"/movie",component:j}))}}]),a}(n.Component),C=a(17);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C.a,null,r.a.createElement(O,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.596a978f.chunk.js.map