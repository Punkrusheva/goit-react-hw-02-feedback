(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={stat:"Statistics_stat__35NV-"}},,,,,,function(e,t,a){e.exports={layout:"Section_layout__1g-Vu"}},function(e,t,a){e.exports={button:"FeedbackOptions_button__36J17"}},function(e,t,a){e.exports={message:"Notification_message__CuSfA"}},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(4),o=a.n(c),i=a(5),r=a(6),u=a(7),l=a(12),b=a(11),d=a(8),j=a.n(d);function p(e){var t=e.children,a=e.title;return Object(n.jsxs)("div",{className:j.a.layout,children:[a&&Object(n.jsx)("h2",{children:a}),t]})}p.defaultProps={title:"",children:""};var f=p,h=a(9),v=a.n(h);function O(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(n.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return a(e)},children:e.slice(0,1).toUpperCase()+e.slice(1)},e)}))}O.defaultProps={options:[]};var k=O,x=a(2),m=a.n(x);function g(e){var t=e.options,a=e.state,s=e.total,c=e.positiveFeedback;return Object(n.jsxs)(n.Fragment,{children:[t.map((function(e){return Object(n.jsxs)("p",{className:m.a.stat,children:[e.slice(0,1).toUpperCase()+e.slice(1)," : ",a[e]]},e)})),Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{className:m.a.stat,children:["Total: ",s]}),Object(n.jsxs)("p",{className:m.a.stat,children:["Positive feedback: ",c,"%"]})]})]})}g.defaultProps={options:[],state:""};var F=g,_=a(10),y=a.n(_);function P(e){var t=e.message;return Object(n.jsx)("h2",{className:y.a.message,children:t})}P.defaultProps={message:""};var N=P,S=(a(18),function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState(Object(i.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=Math.round(100*e.state.good/e.countTotalFeedback());return t>0?t:0},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{title:"Pleas leave feedback",children:Object(n.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),e>0&&Object(n.jsx)(f,{title:"Statistics",children:Object(n.jsx)(F,{options:Object.keys(this.state),state:this.state,total:e,positiveFeedback:t})}),0===e&&Object(n.jsx)(N,{message:"No feedback given"})]})}}]),a}(s.Component));a(19),a(20);o.a.render(Object(n.jsx)(S,{}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.417fe5ad.chunk.js.map