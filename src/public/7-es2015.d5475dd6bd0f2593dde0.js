(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{X3zk:function(e,t,r){"use strict";r.r(t),r.d(t,"LoginModule",(function(){return b}));var a=r("tyNb"),n=r("ofXK"),o=r("thzI"),i=r("OQGK"),s=r("fXoL");const c=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.appStateService=t,this.state={isArthurTaken:!1,isArthurReady:!1,isStarmantaken:!1,isStarmanReady:!1,phoneCall:{arthurToken:null,starmanToken:null,arthurCallingStarman:!1,starmanCallingArthur:!1,phoneCallActive:!1,roomsid:null,roomUniqueName:null}}}ngOnInit(){this.appStateService.state$.subscribe(e=>{this.state=Object.assign(Object.assign({},this.state),e)}),this.appStateService.selectedCharacter===i.a.ARTHUR&&this.appStateService.toggleCharacterTaken(o.b.ARTHUR_AVAILABLE),this.appStateService.selectedCharacter===i.a.STARMAN&&this.appStateService.toggleCharacterTaken(o.b.STARMAN_AVAILABLE)}takeArthur(){this.appStateService.toggleCharacterTaken(o.b.ARTHUR_TAKEN),this.appStateService.setSelectedCharacter(i.a.ARTHUR),this.router.navigate(["/preview"])}takeStarman(){this.appStateService.toggleCharacterTaken(o.b.STARMAN_TAKEN),this.appStateService.setSelectedCharacter(i.a.STARMAN),this.router.navigate(["/preview"])}get starmanTaken(){return this.state.isStarmantaken}get starmanBorderTaken(){return this.starmanTaken?"#ff3603":""}get arthurTaken(){return this.state.isArthurTaken}get arthurBorderTaken(){return this.arthurTaken?"#ff3603":""}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(a.a),s.Mb(o.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-login"]],decls:8,vars:8,consts:[[1,"orb-container"],[1,"orb-row"],[1,"orb","arthur"],["src","../../../assets/login_orbs/arthur_overlap_bw.png",1,"orb-overlay-image",3,"hidden","click"],["src","../../../assets/login_orbs/arthur_overlap_taken_bw.png",1,"orb-overlay-image-taken",3,"hidden"],[1,"orb","starman"],["src","../../../assets/login_orbs/starman_overlap_bw.png",1,"orb-overlay-image",3,"hidden","click"],["src","../../../assets/login_orbs/starman_overlap_taken_bw.png",1,"orb-overlay-image-taken",3,"hidden"]],template:function(e,t){1&e&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"div",2),s.Rb(3,"img",3),s.dc("click",(function(){return t.takeArthur()})),s.Qb(),s.Nb(4,"img",4),s.Qb(),s.Rb(5,"div",5),s.Rb(6,"img",6),s.dc("click",(function(){return t.takeStarman()})),s.Qb(),s.Nb(7,"img",7),s.Qb(),s.Qb(),s.Qb()),2&e&&(s.zb(2),s.zc("border-color",t.arthurBorderTaken),s.zb(1),s.kc("hidden",t.arthurTaken),s.zb(1),s.kc("hidden",!t.arthurTaken),s.zb(1),s.zc("border-color",t.starmanBorderTaken),s.zb(1),s.kc("hidden",t.starmanTaken),s.zb(1),s.kc("hidden",!t.starmanTaken))},styles:[".orb-container[_ngcontent-%COMP%]{height:100%;padding-top:3%;padding-bottom:3%}.orb-row[_ngcontent-%COMP%]{height:100%;position:relative}.orb[_ngcontent-%COMP%]{border-radius:50%;margin-left:5%;margin-right:5%;display:inline-block;width:40%;border:10px solid #282310;background-size:cover;background-repeat:no-repeat;background-position:50%;transition:all 1s}.orb[_ngcontent-%COMP%]:hover{transform:scale(1.1);border-color:#ff3603}.arthur[_ngcontent-%COMP%]{background-image:url(arthur.53bd146ffe880ac41486.jpg)}.starman[_ngcontent-%COMP%]{background-image:url(starman.b0c37524e47de9ad8445.jpg)}.orb-overlay-image[_ngcontent-%COMP%]{width:100%;opacity:0;border-radius:50%;transition:all 1s}.orb-overlay-image[_ngcontent-%COMP%]:hover{opacity:1}.orb-overlay-image-taken[_ngcontent-%COMP%]{width:100%;border-radius:50%}"]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(c),n.b]]}),e})()}}]);