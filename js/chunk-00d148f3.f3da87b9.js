(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d148f3"],{"7a79":function(t,e,u){"use strict";u.r(e);u("a4d3"),u("e01a");var n=u("7a23"),i={key:0,class:"edit-form"},o=Object(n["f"])("h4",null,"Tutorial",-1),r={class:"form-group"},l=Object(n["f"])("label",{for:"title"},"Title",-1),c={class:"form-group"},a=Object(n["f"])("label",{for:"description"},"Description",-1),s={class:"form-group"},d=Object(n["f"])("label",null,[Object(n["f"])("strong",null,"Status:")],-1),b={key:1},f=Object(n["f"])("br",null,null,-1),p=Object(n["f"])("p",null,"Please click on a Tutorial...",-1);function h(t,e,u,h,g,T){return g.currentTutorial?(Object(n["o"])(),Object(n["d"])("div",i,[o,Object(n["f"])("form",null,[Object(n["f"])("div",r,[l,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return g.currentTutorial.title=t})},null,512),[[n["x"],g.currentTutorial.title]])]),Object(n["f"])("div",c,[a,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[2]||(e[2]=function(t){return g.currentTutorial.description=t})},null,512),[[n["x"],g.currentTutorial.description]])]),Object(n["f"])("div",s,[d,Object(n["e"])(" "+Object(n["v"])(g.currentTutorial.published?"Published":"Pending"),1)])]),g.currentTutorial.published?(Object(n["o"])(),Object(n["d"])("button",{key:0,class:"badge badge-primary mr-2",onClick:e[3]||(e[3]=function(t){return T.updatePublished(!1)})}," UnPublish ")):(Object(n["o"])(),Object(n["d"])("button",{key:1,class:"badge badge-primary mr-2",onClick:e[4]||(e[4]=function(t){return T.updatePublished(!0)})}," Publish ")),Object(n["f"])("button",{class:"badge badge-danger mr-2",onClick:e[5]||(e[5]=function(){return T.deleteTutorial&&T.deleteTutorial.apply(T,arguments)})}," Delete "),Object(n["f"])("button",{type:"submit",class:"badge badge-success",onClick:e[6]||(e[6]=function(){return T.updateTutorial&&T.updateTutorial.apply(T,arguments)})}," Update "),Object(n["f"])("p",null,Object(n["v"])(g.message),1)])):(Object(n["o"])(),Object(n["d"])("div",b,[f,p]))}var g=u("f652"),T={name:"tutorial",data:function(){return{currentTutorial:null,message:""}},methods:{getTutorial:function(t){var e=this;g["a"].get(t).then((function(t){e.currentTutorial=t.data,console.log(t.data)})).catch((function(t){console.log(t)}))},updatePublished:function(t){var e=this,u={id:this.currentTutorial.id,title:this.currentTutorial.title,description:this.currentTutorial.description,published:t};g["a"].update(this.currentTutorial.id,u).then((function(u){console.log(u.data),e.currentTutorial.published=t,e.message="The status was updated successfully!"})).catch((function(t){console.log(t)}))},updateTutorial:function(){var t=this;g["a"].update(this.currentTutorial.id,this.currentTutorial).then((function(e){console.log(e.data),t.message="The tutorial was updated successfully!"})).catch((function(t){console.log(t)}))},deleteTutorial:function(){var t=this;g["a"].delete(this.currentTutorial.id).then((function(e){console.log(e.data),t.$router.push({name:"tutorials"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getTutorial(this.$route.params.id)}};u("c2dd");T.render=h;e["default"]=T},c2dd:function(t,e,u){"use strict";u("f270")},f270:function(t,e,u){}}]);