(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c79f0a6"],{"0f9a":function(e,r,t){},"37c6":function(e,r,t){"use strict";var i=t("8e36");r["a"]=i["a"]},4963:function(e,r,t){"use strict";t.r(r);var i=t("b0af"),s=t("62ad"),n=t("0fd9"),d=function(){var e=this,r=e._self._c;return r("div",{staticClass:"padding-wrapper"},[r(n["a"],[r(s["a"],[r("div",{staticClass:"category-list"},e._l(e.categories,(function(t){return r("div",{key:t.id,staticClass:"category",style:{backgroundColor:t.color}},[r("div",{staticClass:"category-header",on:{click:function(r){return e.toggleSubtopics(t)}}},[r("i",{class:[t.icon,"white--text"]}),r("span",{staticClass:"category-title white--text"},[e._v(e._s(t.title))]),r("i",{class:{"mdi mdi-chevron-down white--text":t.showSubtopics,"mdi mdi-chevron-up white--text":!t.showSubtopics}})]),t.showSubtopics?r("div",{staticClass:"subtopics"},e._l(t.subtopics,(function(i){return r("div",{key:i.id,staticClass:"subtopic",style:{backgroundColor:t.color},on:{click:function(r){return e.selectSubtopic(t,i)}}},[r("span",{staticClass:"subtopic-title white--text",style:{fontWeight:i===e.selectedSubtopic?"bold":"normal"}},[e._v(e._s(i.title))])])})),0):e._e()])})),0)]),r(s["a"],[r(i["a"],[r("category-details",{attrs:{category:e.selectedCategory,subtopic:e.selectedSubtopic}})],1)],1)],1)],1)},a=[],o=t("8e36"),l=function(){var e=this,r=e._self._c;return r("div",{staticClass:"category-details padding-wrapper"},[e.category&&e.subtopic?r("div",[r("h4",{staticClass:"margin"},[e._v(e._s(e.subtopic.title))]),r("h5",{staticClass:"margin"},[e._v("Indicador poblacional")]),r(o["a"],{staticClass:"margin",attrs:{color:"deep-purple",height:"10",value:e.subtopic.pob_value,rounded:""}}),r("h5",{staticClass:"margin"},[e._v("Indicador de distancia")]),r(n["a"],{staticClass:"padding-wrapper centered-col"},[r(s["a"],{staticClass:"centered-col"},[r("Grid",{attrs:{grid:e.subtopic.grid}})],1)],1)],1):e._e()])},c=[],g={props:{category:{type:Object,default:null},subtopic:{type:Object,default:null}},components:{Grid:()=>t.e("chunk-00f3b894").then(t.bind(null,"b9c4"))}},u=g,h=(t("b490"),t("2877")),p=Object(h["a"])(u,l,c,!1,null,"87bed3e2",null),b=p.exports,v={components:{CategoryDetails:b},data(){return{selectedCategory:null,selectedSubtopic:null,categories:[{id:1,title:"Salud",icon:"mdi mdi-hospital-building",showSubtopics:!1,subtopics:[{id:1,title:"Salud Primaria",pob_value:20,grid:[["green","green","green","green","red","red"],["green","red","red","red","green","red"],["green","red","red","green","red","red"],["red","red","green","red","green","red"],["green","red","red","red","red","red"]]}],color:"#c93b30"},{id:2,title:"Educación",icon:"mdi mdi-school",showSubtopics:!1,subtopics:[{id:1,title:"Educación Básica",pob_value:80,grid:[["red","red","green","red","green","red"],["red","green","red","green","red","green"],["green","green","red","red","red","red"],["green","green","red","green","red","green"],["red","red","green","red","red","red"]]},{id:2,title:"Educación Media",pob_value:75,grid:[["red","green","red","green","red","green"],["green","red","red","green","red","green"],["red","red","green","red","green","green"],["green","green","red","red","red","red"],["red","red","green","red","red","green"]]}],color:"#58329c"},{id:3,title:"Cultura",icon:"mdi mdi-theater",showSubtopics:!1,subtopics:[{id:1,title:"Bibliotecas",pob_value:50,grid:[["green","green","green","green","red","green"],["red","red","green","green","red","red"],["green","red","green","red","green","green"],["red","green","red","red","red","red"],["green","green","red","green","red","red"]]},{id:2,title:"Sedes Sociales",pob_value:65,grid:[["red","red","green","red","green","red"],["green","green","red","green","red","green"],["green","red","green","red","green","red"],["green","green","red","green","red","green"],["red","red","green","red","green","red"]]}],color:"#354394"},{id:4,title:"Deporte",icon:"mdi mdi-football",showSubtopics:!1,subtopics:[{id:1,title:"Gimnasios",pob_value:30,grid:[["red","green","red","red","green","red"],["green","red","red","green","red","green"],["green","green","red","red","red","red"],["green","green","red","green","green","green"],["red","green","red","red","green","green"]]},{id:2,title:"Multicanchas",pob_value:40,grid:[["red","red","green","red","red","red"],["red","green","red","green","red","green"],["green","green","green","red","green","red"],["red","red","green","green","green","red"],["green","red","red","red","green","red"]]},{id:3,title:"Canchas de Fútbol",pob_value:75,grid:[["red","green","red","green","green","red"],["red","red","green","green","red","green"],["green","green","red","red","red","red"],["green","green","red","red","red","red"],["red","red","red","green","green","green"]]}],color:"#1172bf"},{id:5,title:"Áreas Verdes",icon:"mdi mdi-forest",showSubtopics:!1,subtopics:[{id:1,title:"Áreas Verdes",pob_value:75,grid:[["green","red","green","red","green","red"],["green","green","red","green","red","green"],["green","red","green","red","green","red"],["green","green","red","green","red","green"],["red","red","green","red","green","red"]]},{id:2,title:"Parques",pob_value:75,grid:[["green","red","green","red","green","red"],["green","green","red","green","red","green"],["green","green","green","red","green","red"],["green","green","red","green","red","green"],["red","red","green","red","green","red"]]}],color:"#3a853d"},{id:6,title:"Movilidad",icon:"mdi mdi-bike",showSubtopics:!1,subtopics:[{id:1,title:"Subtopic 6.1",pob_value:75,grid:[["green","red","green","red","green","red"],["green","green","green","green","red","green"],["green","red","green","red","green","red"],["green","green","red","green","red","green"],["red","red","green","red","green","red"]]},{id:2,title:"Subtopic 6.2",pob_value:75,grid:[["green","green","green","red","green","red"],["green","green","red","green","red","green"],["green","red","green","red","green","red"],["green","red","green","red","green","red"],["red","red","green","red","green","red"]]}],color:"#a35105"}]}},methods:{toggleSubtopics(e){if(e.showSubtopics)return;this.categories.forEach(r=>{r!==e&&(r.showSubtopics=!1)}),e.showSubtopics=!0;const r=e.subtopics[0];this.selectSubtopic(e,r)},selectSubtopic(e,r){this.selectedCategory=e,r?this.selectedSubtopic=r:e.subtopics.length>0?this.selectedSubtopic=e.subtopics[0]:this.selectedSubtopic=null,this.$emit("categorySelected",this.selectedCategory,this.selectedSubtopic)}},mounted(){if(this.categories.length>0){const e=this.categories[0];this.toggleSubtopics(e)}}},m=v,f=(t("6df9"),Object(h["a"])(m,d,a,!1,null,"34f8d445",null));r["default"]=f.exports},"615b":function(e,r,t){},"6df9":function(e,r,t){"use strict";t("a8e6")},"6ece":function(e,r,t){},"8e36":function(e,r,t){"use strict";t("6ece");var i=t("0789"),s=t("90a2"),n=t("a9ad"),d=t("fe6c"),a=t("a452"),o=t("7560"),l=t("80d2"),c=t("58df");const g=Object(c["a"])(n["a"],Object(d["b"])(["absolute","fixed","top","bottom"]),a["a"],o["a"]);r["a"]=g.extend({name:"v-progress-linear",directives:{intersect:s["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(l["g"])(this.normalizedValue,"%"),width:Object(l["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i["b"]:i["c"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(l["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:r}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/r*100},onObserve(e,r,t){this.isVisible=t},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const r={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",r,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},a8e6:function(e,r,t){},b0af:function(e,r,t){"use strict";t("615b");var i=t("10d2"),s=t("2b0e"),n=t("37c6"),d=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),a=t("1c87"),o=t("58df");r["a"]=Object(o["a"])(d,a["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const e={...i["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=d.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:r,data:t}=this.generateRouteLink();return t.style=this.styles,this.isClickable&&(t.attrs=t.attrs||{},t.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,t),[this.genProgress(),this.$slots.default])}})},b490:function(e,r,t){"use strict";t("0f9a")}}]);
//# sourceMappingURL=chunk-5c79f0a6.719814fb.js.map