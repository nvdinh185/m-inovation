(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["idea-entry-idea-idea-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/idea-card/idea-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/idea-card/idea-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"commandCardForm\" class=\"main-ion-card welcome-card\">\r\n  <!-- Nếu có image thì ưu tiên lấy image làm nền, còn ko thì lấy màu background -->\r\n  <div *ngIf=\"!commandCardForm.image\" class=\"welcome-card-image-height\"\r\n    [style.background-color]=\"commandCardForm.background\" style=\"opacity: 0.4;\"></div>\r\n  <div *ngIf=\"commandCardForm.image\" class=\"welcome-card-image-height\"\r\n    [style.background-image]=\"'url('+commandCardForm.image+')'\" style=\"opacity: 0.9;\"></div>\r\n\r\n  <ion-card-header class=\"card-title\">\r\n    <ion-card-title>#{{commandCardForm.id}} - {{commandCardForm.title}}</ion-card-title>\r\n    <ion-card-subtitle>{{commandCardForm.created_time | timeAgo}}</ion-card-subtitle>\r\n    {{commandCardForm.description.substring(0,100)}}\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button color=\"{{(commandCardForm.isUserVoted?'secondary':'light')}}\" (click)=\"onClickLike(commandCardForm)\" shape=\"round\" size=\"small\">\r\n            {{commandCardForm.voted_count}}<ion-icon slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button color=\"{{(commandCardForm.isUserCommented?'success':'light')}}\" (click)=\"onClickComment(commandCardForm)\" shape=\"round\" size=\"small\">\r\n            {{commandCardForm.commented_count}}<ion-icon slot=\"end\" name=\"chatbubbles\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n\r\n  <ion-button class=\"card-icon\" (click)=\"onClickView(commandCardForm)\" shape=\"round\">\r\n    <ion-icon slot=\"start\" name=\"arrow-forward\"></ion-icon>\r\n  </ion-button>\r\n\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/idea-entry/idea/idea.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/idea-entry/idea/idea.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-buttons *ngIf=\"!isSearch\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-button shape=\"round\" (click)=\"goSearch()\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title *ngIf=\"!isSearch\">{{(formIdea?.title?formIdea.title:'')}}</ion-title>\r\n\r\n    <ion-buttons *ngIf=\"!isSearch && userInfo\" slot=\"end\">\r\n      <ion-button shape=\"round\">\r\n        <ion-icon slot=\"start\" name=\"{{userInfo?'contact':'log-in'}}\"></ion-icon>\r\n        {{userInfo?.username}}\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-searchbar class=\"search-bar\" *ngIf=\"isSearch\" [placeholder]=\"searchHint\" [(ngModel)]=\"searchString\"\r\n      (keyup.enter)=\"searchEnter()\" (keyup.esc)=\"searchEnter()\" (focusout)=\"searchEnter()\"\r\n      (ionChange)=\"onUserEnterSearch($event)\"></ion-searchbar>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-fab *ngIf=\"!isCardNewShow\" horizontal=\"start\" vertical=\"top\" slot=\"fixed\">\r\n    <ion-fab-button color=\"warning\" (click)=\"onClickAddNew()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab *ngIf=\"!isCardNewShow\" horizontal=\"end\" vertical=\"top\" slot=\"fixed\" edge>\r\n    <ion-fab-button color=\"secondary\">\r\n      <ion-icon name=\"funnel\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list>\r\n      <ion-fab-button color=\"success\" data-filter=\"Sắp xếp theo\" (click)=\"onClickOrder()\">\r\n        <ion-icon name=\"code-download\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"tertiary\" data-filter=\"Lọc theo lĩnh vực\" (click)=\"onClickFilterCategory()\">\r\n        <ion-icon name=\"funnel\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"danger\" data-filter=\"Lọc theo trạng thái\" (click)=\"onClickFilterStatus()\">\r\n        <ion-icon name=\"flask\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"warning\" data-filter=\"Tùy chọn tìm kiếm\" (click)=\"onClickSearchOption()\">\r\n        <ion-icon name=\"eye\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <ion-card class=\"card-add-new\" *ngIf=\"isCardNewShow\">\r\n    <card-dynamic-form [dynamicFormInput]=\"dynamicFormInput\" [dynamicFormValue]=\"dynamicFormValue\"\r\n      (onSelectedFinish)=\"onSelectedFinish($event)\"></card-dynamic-form>\r\n  </ion-card>\r\n\r\n  <!-- Phần bộ công cụ kéo refresh để đọc dữ liệu mới -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event, 'UP')\" pullFactor=\"0.8\" pullMin=\"60\" pullMax=\"120\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Kéo xuống để làm mới\" refreshingSpinner=\"bubbles\"\r\n      refreshingText=\"Đang tải...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- Hiển thị danh sách các ý tưởng ra trên trang này sắp xếp thành các card theo các màu sắc ý tưởng khác nhau -->\r\n  <ion-grid *ngIf=\"!isCardNewShow\">\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let it of myIdeaFilterList\" size=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"4\" size-xl=\"3\">\r\n        <app-idea-card [cardData]=\"it\" (onClickSub)=\"onClickIdeaCard($event)\"></app-idea-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Phần công cụ kéo xuống để đọc tiếp dữ liệu trang sau bổ sung  -->\r\n  <ion-infinite-scroll (ionInfinite)=\"doRefresh($event, 'DOWN')\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Load dữ liệu cũ hơn...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components/idea-card/idea-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/idea-card/idea-card.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card .welcome-card-image-height {\n  min-height: 20vh;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n.main-ion-card {\n  position: relative;\n  text-align: center;\n  border-radius: 5em;\n  opacity: 0.7;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);\n}\n\n.main-ion-card .card-title {\n  position: absolute;\n  top: 5%;\n  font-size: 1.8em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  opacity: 0.9;\n}\n\n.main-ion-card .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 18%;\n  width: 60%;\n  color: burlywood;\n}\n\n.main-ion-card .card-icon {\n  font-size: 1.8em;\n  position: absolute;\n  top: 36%;\n  left: 85%;\n  width: 30%;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pZGVhLWNhcmQvRTpcXE1ZREFUQVxcTEFQVFJJTkhcXE5PREU0XFxkaW5oLWlub3ZhdGlvblxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxpZGVhLWNhcmRcXGlkZWEtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pZGVhLWNhcmQvaWRlYS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWRlYS1jYXJkL2lkZWEtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGtpZXUgYmFja2dyb3VuZCB0aGkgaGluaCB0cnVuZyB0YW1cclxuLndlbGNvbWUtY2FyZCAud2VsY29tZS1jYXJkLWltYWdlLWhlaWdodCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8vIGNhcmQgdGhlIHRob25nIGtlIGNvIGRpbmhcclxuLm1haW4taW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNWVtO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm1haW4taW9uLWNhcmQgIC5jYXJkLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4ubWFpbi1pb24tY2FyZCAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgY29sb3I6IGJ1cmx5d29vZFxyXG59XHJcblxyXG4ubWFpbi1pb24tY2FyZCAuY2FyZC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2JTtcclxuICAgIGxlZnQ6IDg1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn0iLCIud2VsY29tZS1jYXJkIC53ZWxjb21lLWNhcmQtaW1hZ2UtaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1haW4taW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tYWluLWlvbi1jYXJkIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBmb250LXNpemU6IDEuOGVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5tYWluLWlvbi1jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIHdpZHRoOiA2MCU7XG4gIGNvbG9yOiBidXJseXdvb2Q7XG59XG5cbi5tYWluLWlvbi1jYXJkIC5jYXJkLWljb24ge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiA4NSU7XG4gIHdpZHRoOiAzMCU7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/idea-card/idea-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/idea-card/idea-card.component.ts ***!
  \*************************************************************/
/*! exports provided: IdeaCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaCardComponent", function() { return IdeaCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IdeaCardComponent = class IdeaCardComponent {
    constructor() {
        // Sự kiện sinh ra khi các tác động lên các nút lệnh ở card này
        this.onClickSub = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.demoCard = {
            background: "#ffffff",
            // nếu truyền vào là image thì ưu tiên lấy image làm nền nhé
            // image:"/assets/imgs/icon.png",
            color: "black",
            //- tùy thuộc vào nền mà chữ sẽ lấy theo các tông màu khác nhau
            //, tùy vào bộ màu đưa vào mà chọn hợp lý
            title: 'Nhân sự',
            items: [
                {
                    icon: 'wifi',
                    title: '12 Nhân sự',
                    color: 'light' // màu trong theme
                },
                {
                    icon: 'wifi',
                    title: '1 psc',
                    color: 'light'
                },
                {
                    icon: 'wifi',
                    title: '7 C',
                    color: 'light'
                },
                {
                    icon: 'wifi',
                    title: '6 s',
                    color: 'light'
                }
            ],
            button: {
                color: 'secondary',
                icon: {
                    name: 'book',
                    color: 'light'
                }
            }
        };
    }
    ngOnInit() {
        this.commandCardForm = this.cardData ? this.cardData : this.demoCard;
        // console.log('form',this.commandCardForm);
        this.commandCardForm.background = this.commandCardForm.background ? this.commandCardForm.background : 'red';
    }
    /**
     * Lệnh khi click vào lệnh chính, và các lệnh con
     * @param item
     */
    onClickView(item) {
        //   if (this.callback) this.callback(item);
        this.onClickSub.emit({
            idea: item,
            command: 'VIEW'
        });
    }
    onClickLike(item) {
        //   if (this.callback) this.callback(item);
        this.onClickSub.emit({
            idea: item,
            command: 'LIKE'
        });
    }
    onClickComment(item) {
        //   if (this.callback) this.callback(item);
        this.onClickSub.emit({
            idea: item,
            command: 'COMMENT'
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdeaCardComponent.prototype, "cardData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdeaCardComponent.prototype, "callback", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdeaCardComponent.prototype, "onClickSub", void 0);
IdeaCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idea-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./idea-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/idea-card/idea-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./idea-card.component.scss */ "./src/app/components/idea-card/idea-card.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IdeaCardComponent);



/***/ }),

/***/ "./src/app/idea-entry/idea/idea-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/idea-entry/idea/idea-routing.module.ts ***!
  \********************************************************/
/*! exports provided: IdeaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaPageRoutingModule", function() { return IdeaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _idea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idea.page */ "./src/app/idea-entry/idea/idea.page.ts");




const routes = [
    {
        path: '',
        component: _idea_page__WEBPACK_IMPORTED_MODULE_3__["IdeaPage"]
    }
];
let IdeaPageRoutingModule = class IdeaPageRoutingModule {
};
IdeaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IdeaPageRoutingModule);



/***/ }),

/***/ "./src/app/idea-entry/idea/idea.module.ts":
/*!************************************************!*\
  !*** ./src/app/idea-entry/idea/idea.module.ts ***!
  \************************************************/
/*! exports provided: IdeaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaPageModule", function() { return IdeaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _idea_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idea-routing.module */ "./src/app/idea-entry/idea/idea-routing.module.ts");
/* harmony import */ var _idea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idea.page */ "./src/app/idea-entry/idea/idea.page.ts");
/* harmony import */ var src_app_components_idea_card_idea_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/idea-card/idea-card.component */ "./src/app/components/idea-card/idea-card.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");






let IdeaPageModule = class IdeaPageModule {
};
IdeaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _idea_routing_module__WEBPACK_IMPORTED_MODULE_2__["IdeaPageRoutingModule"]
        ],
        declarations: [
            _idea_page__WEBPACK_IMPORTED_MODULE_3__["IdeaPage"],
            src_app_components_idea_card_idea_card_component__WEBPACK_IMPORTED_MODULE_4__["IdeaCardComponent"]
        ]
    })
], IdeaPageModule);



/***/ }),

/***/ "./src/app/idea-entry/idea/idea.page.scss":
/*!************************************************!*\
  !*** ./src/app/idea-entry/idea/idea.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  border-radius: 30px !important;\n}\n\n.card-add-new {\n  margin: 10px;\n  border-radius: 2em;\n}\n\nion-fab-button[data-filter] {\n  position: relative;\n}\n\nion-fab-button[data-filter]::after {\n  position: absolute;\n  content: attr(data-filter);\n  z-index: 1;\n  opacity: 0.8;\n  right: 50px;\n  bottom: 4px;\n  background-color: var(--ion-color-primary);\n  padding: 9px;\n  border-radius: 15px;\n  color: white;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWRlYS1lbnRyeS9pZGVhL0U6XFxNWURBVEFcXExBUFRSSU5IXFxOT0RFNFxcZGluaC1pbm92YXRpb25cXGNsaWVudC9zcmNcXGFwcFxcaWRlYS1lbnRyeVxcaWRlYVxcaWRlYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2lkZWEtZW50cnkvaWRlYS9pZGVhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlIQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pZGVhLWVudHJ5L2lkZWEvaWRlYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWFkZC1uZXcge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbltkYXRhLWZpbHRlcl0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAgXHJcbmlvbi1mYWItYnV0dG9uW2RhdGEtZmlsdGVyXTo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLWZpbHRlcik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcmlnaHQ6IDUwcHg7IC8vIG9yIGxlZnQgY2hvIGLDqm4gbsO6dCBiw6puIHRyw6FpXHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxufSIsIi5zZWFyY2gtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1hZGQtbmV3IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyZW07XG59XG5cbmlvbi1mYWItYnV0dG9uW2RhdGEtZmlsdGVyXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWZhYi1idXR0b25bZGF0YS1maWx0ZXJdOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogYXR0cihkYXRhLWZpbHRlcik7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDAuODtcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/idea-entry/idea/idea.page.ts":
/*!**********************************************!*\
  !*** ./src/app/idea-entry/idea/idea.page.ts ***!
  \**********************************************/
/*! exports provided: IdeaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaPage", function() { return IdeaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngxi4-dynamic-service */ "./node_modules/ngxi4-dynamic-service/fesm2015/ngxi4-dynamic-service.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// các tùy chọn sắp xếp ý tưởng
const orderList = {
    ORDER_CREATED: 'ORDER_CREATED' // được tạo ra gần đây nhất
    ,
    ORDER_LIKES: 'ORDER_LIKES' // được yêu thích nhất
    ,
    ORDER_COMMENTS: 'ORDER_COMMENTS' // được nhiều người bình luận nhất
    ,
    ORDER_MARKS: 'ORDER_MARKS' // được chấm điểm cao nhất của mọi người
};
// các tùy chọn tìm kiếm ý tưởng
const searchOptions = {
    SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
    SEARCH_BY_ID: 'SEARCH_BY_ID'
};
let IdeaPage = class IdeaPage {
    constructor(router, apiAuth, apiCommons, mainService) {
        this.router = router;
        this.apiAuth = apiAuth;
        this.apiCommons = apiCommons;
        this.mainService = mainService;
        this.formIdea = {
            title: 'Phòng ý tưởng',
            ideas: []
        };
        this.isCardNewShow = false;
        this.orderBy = orderList.ORDER_CREATED;
        this.filterCategorySelected = [];
        this.filterStatusSelected = [0, 1, 2, 3, 4, 5];
        this.categoryOptions = [];
        this.statusOptions = [];
        this.pageSize = 3;
        this.currentPage = 0;
        this.isSearch = false;
        this.searchHint = 'Tìm theo chủ đề...';
        this.searchOption = searchOptions.SEARCH_BY_TITLE;
        this.myIdeaFilterList = [];
        this.init();
    }
    ngOnInit() {
        this.refresh();
    }
    init() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // lấy thông tin user đang login có chưa?
            this.userInfo = this.mainService.getUserInfo();
            try {
                this.parameters = yield this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER + '/get-idea-parameters', true);
            }
            catch (err) {
                console.log(err);
            }
            this.categoryOptions = this.parameters && this.parameters.ideas_categories ? this.parameters.ideas_categories : [];
            this.statusOptions = this.parameters && this.parameters.ideas_statuses ? this.parameters.ideas_statuses : [];
            //form nhập thông tin ý tưởng mới
            this.dynamicFormInput = JSON.stringify({
                okButton: { icon: "save", name: "Ý tưởng mới của bạn là gì?", color: "secondary", next: "CALLBACK", command: "ADD", url: this.apiAuth.serviceUrls.RESOURCE_SERVER + '/create-idea', type: "FORM-DATA", token: true },
                cancelButton: { icon: "close", next: "CLOSE" },
                items: [
                    // Danh sách các trường nhập liệu
                    { type: "text", key: "title", name: "Chủ đề là gì? ", hint: "Nhập chủ đề của ý tưởng này từ 1-200 ký tự (letters)", input_type: "text", icon: "help", validators: [{ required: true, min: 1, max: 200 }] },
                    { type: "text_area", key: "description", hint: "Mô tả nội dung ý tưởng của bạn từ 1 đến 1000 từ (words)", name: "Nhập mô tả ý tưởng của bạn", input_type: "text", icon: "information-circle", validators: [{ required: true, min: 1 }] },
                    { type: "select-origin", key: "category_id", name: "Phân loại ý tưởng?", icon: "contrast", options: this.categoryOptions },
                    { type: "select-origin", key: "status", name: "Trạng thái của ý tưởng?", icon: "clock", options: this.statusOptions },
                    {
                        type: "upload-files", name: "Files đính kèm",
                        multiple: "multiple",
                        accept: `image/gif, image/jpeg, image/png
                                        , application/pdf
                                        , .txt, .md, .zip, .tar
                                        , .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel
                                        , application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document`
                    }
                ]
            });
            // giá trị mặc định
            this.dynamicFormValue = JSON.stringify({
                title: '',
                description: '',
                category_id: '' + (this.categoryOptions.find(x => x.is_default === 1) ? this.categoryOptions.find(x => x.is_default === 1).id : 2),
                status: '' + (this.statusOptions.find(x => x.is_default === 1) ? this.statusOptions.find(x => x.is_default === 1).id : 2)
            });
        });
    }
    // hàm gọi lại khi bắt đầu tải, thay đổi bộ lọc, sắp xếp, hoặc làm mới trang
    refresh(isReset, nextPage, direction) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (isReset)
                this.currentPage = 0;
            // lấy danh sách ý tưởng từ csdl mới nhất
            let countIdeaReturn = 0;
            try {
                if (isReset)
                    this.apiCommons.showLoader('Đang load dữ liệu');
                let ideas = yield this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER
                    + '/get-ideas?order_by=' + this.orderBy
                    + '&filter_category=' + this.filterCategorySelected.toString()
                    + '&filter_status=' + this.filterStatusSelected.toString()
                    + '&page_size=' + this.pageSize
                    + '&page=' + (nextPage ? nextPage : 0), true);
                // console.log(ideas);
                // reset mảng khi thêm mới dữ liệu, thay đổi bộ lọc, sắp xếp
                if (isReset)
                    this.formIdea.ideas = [];
                if (Array.isArray(ideas)) {
                    countIdeaReturn = ideas.length;
                    if (direction === 'UP') {
                        for (let idx = countIdeaReturn - 1; idx >= 0; idx--) {
                            let el = ideas[idx];
                            if (el.voted_users && el.voted_users.find(x => x === this.userInfo.id))
                                el.isUserVoted = true;
                            if (el.commented_users && el.commented_users.find(x => x === this.userInfo.id))
                                el.isUserCommented = true;
                            let findIndex = this.formIdea.ideas.findIndex(x => x.id === el.id);
                            if (findIndex < 0)
                                this.formIdea.ideas.unshift(el);
                            else
                                this.formIdea.ideas.splice(findIndex, 1, el);
                        }
                    }
                    else {
                        for (let el of ideas) {
                            if (el.voted_users && el.voted_users.find(x => x === this.userInfo.id))
                                el.isUserVoted = true;
                            if (el.commented_users && el.commented_users.find(x => x === this.userInfo.id))
                                el.isUserCommented = true;
                            let findIndex = this.formIdea.ideas.findIndex(x => x.id === el.id);
                            if (findIndex < 0)
                                this.formIdea.ideas.push(el);
                            else
                                this.formIdea.ideas.splice(findIndex, 1, el);
                        }
                    }
                }
                this.myIdeaFilterList = this.formIdea.ideas; // gán dữ liệu lấy về để hiển thị ra
                // console.log(this.myIdeaFilterList);
                if (countIdeaReturn === 0 && this.currentPage === 0) {
                    this.apiCommons.showToast('Không tìm thấy ý tưởng nào', 3000, 'danger');
                }
            }
            catch (err) {
                console.log(err);
            }
            finally {
                if (isReset)
                    this.apiCommons.hideLoader();
                return countIdeaReturn;
            }
        });
    }
    // lọc theo lĩnh vực
    onClickFilterCategory() {
        let settingsMenu = [];
        this.categoryOptions.forEach(el => {
            settingsMenu.push({
                id: el.id,
                name: el.name,
                isChecked: this.filterCategorySelected.includes(el.id) //Nếu có id trong mảng thì true
                ,
                value: el.id
            });
        });
        this.apiCommons.presentPopover(undefined, ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["PopoverCardComponent"], {
            type: 'multi-choice',
            title: "LỌC THEO LĨNH VỰC",
            color: "tertiary",
            menu: settingsMenu
        })
            .then(data => {
            this.processCategoryFilters(data);
        })
            .catch(err => {
            console.log('err: ', err);
        });
    }
    // lọc theo trạng thái
    onClickFilterStatus() {
        let settingsMenu = [];
        this.statusOptions.forEach(el => {
            settingsMenu.push({
                id: el.id,
                name: el.name,
                isChecked: this.filterStatusSelected.includes(el.id) //Nếu có id trong mảng thì true
                ,
                value: el.id
            });
        });
        this.apiCommons.presentPopover(undefined, ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["PopoverCardComponent"], {
            type: 'multi-choice',
            title: "LỌC THEO TRẠNG THÁI",
            color: "danger",
            menu: settingsMenu
        })
            .then(data => {
            this.processStatusFilters(data);
        })
            .catch(err => {
            console.log('err: ', err);
        });
    }
    // hiện thị các tùy chọn sắp xếp
    onClickOrder() {
        // console.log(this.orderBy, orderList[this.orderBy]);
        let settingsMenu = [
            {
                id: 1,
                name: "Tạo gần đây nhất",
                isChecked: orderList[this.orderBy] === orderList.ORDER_CREATED,
                value: orderList.ORDER_CREATED
            },
            {
                id: 2,
                name: "Nhiều người thích nhất",
                isChecked: orderList[this.orderBy] === orderList.ORDER_LIKES,
                value: orderList.ORDER_LIKES
            },
            {
                id: 3,
                name: "Nhiều người bình luận nhất",
                isChecked: orderList[this.orderBy] === orderList.ORDER_COMMENTS,
                value: orderList.ORDER_COMMENTS
            },
            {
                id: 4,
                name: "Được chấm điểm cao nhất",
                isChecked: orderList[this.orderBy] === orderList.ORDER_MARKS,
                value: orderList.ORDER_MARKS
            }
        ];
        this.apiCommons.presentPopover(undefined, ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["PopoverCardComponent"], {
            type: 'single-choice',
            title: "SẮP XẾP",
            color: "success",
            menu: settingsMenu
        })
            .then(data => {
            this.processOrderBys(data);
        })
            .catch(err => {
            console.log('err: ', err);
        });
    }
    // xử lý lọc theo lĩnh vực
    processCategoryFilters(data) {
        // lọc lấy bộ lọc để lấy dữ liệu, nếu bộ lọc đó không lọc thì xem như lấy hết
        this.filterCategorySelected = [];
        data.forEach(el => {
            this.filterCategorySelected.push(el.value);
        });
        this.refresh(true);
    }
    // hàm xử lý lọc theo trạng thái
    processStatusFilters(data) {
        this.filterStatusSelected = [];
        data.forEach(el => {
            this.filterStatusSelected.push(el.value);
        });
        this.refresh(true);
    }
    // hàm xử lý cho sắp xếp
    processOrderBys(data) {
        this.orderBy = data.value;
        this.refresh(true);
    }
    // hàm trả kết quả của form nhập mới ý tưởng
    onSelectedFinish(evt) {
        this.isCardNewShow = false;
        // console.log('ghi xong du lieu', evt);
        if (evt)
            this.refresh(true); // làm mới ý tưởng mới
    }
    // thêm mới ý tưởng
    onClickAddNew() {
        this.isCardNewShow = true;
    }
    // Hàm thực hiện khi kéo xuống hoặc refresh trang
    doRefresh(evt, direction) {
        if (this.isSearch || this.isCardNewShow) {
            evt.target.complete();
            return;
        }
        if (direction === 'UP') {
            // đọc dữ liệu mới nhất 
            this.refresh(false, 0, direction)
                .then(data => {
                evt.target.complete();
            });
        }
        if (direction === 'DOWN') {
            // lấy trang tiếp theo
            this.refresh(false, ++this.currentPage)
                .then(count => {
                evt.target.complete();
                if (count < this.pageSize) {
                    this.apiCommons.showToast('Hết ý tưởng rồi', 1000, 'success', 'bottom');
                }
            });
        }
    }
    // khi bấm ở card ý tưởng thì có mấy tình huống sinh ra bằng command
    onClickIdeaCard(evt) {
        // console.log(evt);
        if (evt) {
            if (evt.command === 'VIEW') {
                this.viewIdea(evt.idea);
            }
            if (evt.command === 'LIKE') {
                this.likeIdea(evt.idea);
            }
            if (evt.command === 'COMMENT') {
                this.commentIdea(evt.idea);
            }
        }
    }
    // chuyển sang trang chi tiết để hiển thị chi tiết ý tưởng đó
    viewIdea(item) {
        this.router.navigate(['/idea-detail'], { queryParams: { id: item.id } });
    }
    // Người dùng bấm nút like
    likeIdea(item) {
        this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.RESOURCE_SERVER + '/like-idea', { id: item.id }, true)
            .then(data => {
            // console.log(data);
            let el = data.idea;
            if (el.voted_users && el.voted_users.find(x => x === this.userInfo.id))
                el.isUserVoted = true;
            if (el.commented_users && el.commented_users.find(x => x === this.userInfo.id))
                el.isUserCommented = true;
            let index = this.formIdea.ideas.findIndex(x => x.id === el.id);
            this.formIdea.ideas.splice(index, 1, el);
            //tự động thay đổi trong this.myIdeaFilterList để hiển thị
        })
            .catch(err => console.log(err));
    }
    // người dùng bấm nút comment
    commentIdea(item) {
        this.router.navigate(['/idea-detail'], { queryParams: { id: item.id } });
    }
    // tùy chọn để tìm kiếm
    onClickSearchOption() {
        let settingsMenu = [
            {
                id: 1,
                name: "Tìm theo chủ đề",
                isChecked: searchOptions[this.searchOption] === searchOptions.SEARCH_BY_TITLE,
                value: searchOptions.SEARCH_BY_TITLE
            },
            {
                id: 2,
                name: "Tìm theo mã ý tưởng",
                isChecked: searchOptions[this.searchOption] === searchOptions.SEARCH_BY_ID,
                value: searchOptions.SEARCH_BY_ID
            }
        ];
        this.apiCommons.presentPopover(undefined, ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["PopoverCardComponent"], {
            type: 'single-choice',
            title: "TÙY CHỌN TÌM KIẾM",
            color: "warning",
            menu: settingsMenu
        })
            .then(data => {
            this.processSearchOptions(data);
        })
            .catch(err => {
            console.log('err: ', err);
        });
    }
    // bộ lọc tìm kiếm
    processSearchOptions(data) {
        this.searchOption = data.value;
        if (this.searchOption === searchOptions.SEARCH_BY_TITLE)
            this.searchHint = 'Gõ từ có trong các chủ đề bên dưới';
        if (this.searchOption === searchOptions.SEARCH_BY_ID)
            this.searchHint = 'Gõ mã ý tưởng để tìm';
    }
    // hiển thị ô tìm kiếm 
    goSearch() {
        this.isSearch = true;
    }
    searchEnter() {
        this.isSearch = false;
        this.searchString = "";
    }
    // tìm kiếm theo title hoặc theo id
    onUserEnterSearch(evt) {
        const searchTxt = evt.detail.value;
        if (searchTxt.length > 0) {
            if (this.searchOption === searchOptions.SEARCH_BY_TITLE) {
                this.myIdeaFilterList = this.formIdea.ideas.filter(x => x.title.toLowerCase().indexOf(searchTxt.toLowerCase()) >= 0);
            }
            else if (this.searchOption === searchOptions.SEARCH_BY_ID) {
                this.myIdeaFilterList = this.formIdea.ideas.filter(x => ("" + x.id).indexOf(searchTxt) >= 0);
            }
        }
        else {
            this.myIdeaFilterList = this.formIdea.ideas;
        }
    }
};
IdeaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"] },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
];
IdeaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./idea.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/idea-entry/idea/idea.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./idea.page.scss */ "./src/app/idea-entry/idea/idea.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"],
        _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
], IdeaPage);



/***/ })

}]);
//# sourceMappingURL=idea-entry-idea-idea-module-es2015.js.map