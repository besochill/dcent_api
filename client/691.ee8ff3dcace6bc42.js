"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[691],{8691:(T,g,e)=>{e.r(g),e.d(g,{RegisterModule:()=>m});var d=e(9857),c=e(8996),o=e(4006),t=e(4650),p=e(6440),h=e(6895),Z=e(4144),u=e(9549),C=e(6709),i=e(3546),x=e(7392),v=e(4859);const y=["registerNgForm"];function A(a,n){1&a&&(t.TgZ(0,"span"),t._uU(1," Register "),t.qZA())}const f=function(){return["./"]};class s{constructor(n,r,l){this.formBuilder=n,this.authService=r,this.router=l}ngOnInit(){this.registerForm=this.formBuilder.group({username:["",o.kI.required],firstname:["",o.kI.required],lastname:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],password:["",o.kI.required],agreements:["",o.kI.requiredTrue]})}register(){this.authService.register(this.registerForm.value).subscribe(n=>{this.router.navigate(["/"])}),this.registerNgForm.resetForm()}}s.\u0275fac=function(n){return new(n||s)(t.Y36(o.qu),t.Y36(p.e),t.Y36(c.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-register"]],viewQuery:function(n,r){if(1&n&&t.Gf(y,5),2&n){let l;t.iGM(l=t.CRH())&&(r.registerNgForm=l.first)}},decls:58,vars:15,consts:[[1,"container","max-w-sm"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"mx-auto","sm:mx-0","items-center"],["src","assets/images/logo/icon.png","alt","Logo",1,"w-32","h-32","rounded-full"],[1,"text-2xl","font-bold"],[1,"text-gray-500"],["routerLink","/login"],[1,"mt-8",3,"formGroup"],["registerNgForm","ngForm"],["appearance","fill",1,"w-full"],["id","username","matInput","",3,"formControlName"],["svgIcon","heroicons_solid:hashtag","matSuffix","",2,"color","#ff3c00"],["id","firstname","matInput","",3,"formControlName"],["svgIcon","heroicons_outline:pencil-alt","matSuffix","",2,"color","#ff3c00"],["id","lastname","matInput","",3,"formControlName"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],["svgIcon","mat_outline:email","matSuffix","",2,"color","#ff3c00"],["appearance","fill",1,"flex-form","w-full"],["id","password","matInput","","type","password",3,"formControlName"],["password",""],["svgIcon","heroicons_outline:eye","matSuffix","",2,"color","#ff3c00"],[1,"inline-flex","items-end","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"bg-orange-700","w-full","mt-6",3,"color","disabled","click"],[4,"ngIf"],[1,"pt-4"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-header"),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"mat-card-title",4),t._uU(6,"Authorised Access Only"),t.qZA(),t.TgZ(7,"mat-card-subtitle",5),t._uU(8,"Please register your credentials to continue"),t.qZA(),t.TgZ(9,"mat-card-subtitle",5),t._uU(10,"Already have an account? "),t.TgZ(11,"a",6),t._uU(12,"Login"),t.qZA()(),t.TgZ(13,"mat-card-content")(14,"form",7,8)(16,"mat-form-field",9)(17,"mat-label"),t._uU(18,"Username"),t.qZA(),t._UZ(19,"input",10)(20,"mat-icon",11),t.qZA(),t.TgZ(21,"mat-form-field",9)(22,"mat-label"),t._uU(23,"Firstname"),t.qZA(),t._UZ(24,"input",12)(25,"mat-icon",13),t.qZA(),t.TgZ(26,"mat-form-field",9)(27,"mat-label"),t._uU(28,"Lastname"),t.qZA(),t._UZ(29,"input",14)(30,"mat-icon",13),t.qZA(),t.TgZ(31,"mat-form-field",15)(32,"mat-label"),t._uU(33,"Email address"),t.qZA(),t._UZ(34,"input",16)(35,"mat-icon",17),t.qZA(),t.TgZ(36,"mat-form-field",18)(37,"mat-label"),t._uU(38,"Password"),t.qZA(),t._UZ(39,"input",19,20)(41,"mat-icon",21),t.qZA(),t.TgZ(42,"div",22)(43,"mat-checkbox",23)(44,"span"),t._uU(45,"I agree with"),t.qZA(),t.TgZ(46,"a",24),t._uU(47,"Terms "),t.qZA(),t.TgZ(48,"span"),t._uU(49,"and"),t.qZA(),t.TgZ(50,"a",24),t._uU(51,"Privacy Policy "),t.qZA()()(),t.TgZ(52,"button",25),t.NdJ("click",function(){return r.register()}),t.YNc(53,A,2,0,"span",26),t.TgZ(54,"mat-icon"),t._uU(55,"login"),t.qZA()()()(),t.TgZ(56,"mat-card-actions",27),t._uU(57," Once you've submitted your details, the form will reset as an indication you have been registered. "),t.qZA()()()()),2&n&&(t.xp6(14),t.Q6J("formGroup",r.registerForm),t.xp6(5),t.Q6J("formControlName","username"),t.xp6(5),t.Q6J("formControlName","firstname"),t.xp6(5),t.Q6J("formControlName","lastname"),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(5),t.Q6J("formControlName","password"),t.xp6(4),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(3),t.Q6J("routerLink",t.DdM(13,f)),t.xp6(4),t.Q6J("routerLink",t.DdM(14,f)),t.xp6(2),t.Q6J("color","primary")("disabled",!r.registerForm.valid),t.xp6(1),t.Q6J("ngIf",!r.registerForm.disabled))},dependencies:[h.O5,Z.Nt,u.KE,u.hX,u.R9,C.oG,i.a8,i.hq,i.dn,i.dk,i.$j,i.n5,x.Hw,v.lW,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,c.rH],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:hidden}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;max-width:300px;margin-bottom:20px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:100%;max-width:300px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{margin-bottom:10px}"]});const M=[{path:"",component:s}];class m{}m.\u0275fac=function(n){return new(n||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[d.m,c.Bz.forChild(M)]})}}]);