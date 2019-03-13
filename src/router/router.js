import Vue from "vue";
import Router from "vue-router";
import needMeSign from "../views/needMeSign.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "needMeSign",
            component: needMeSign
        }, {
            path: "/needMeSign",
            name: "needMeSign",
            component: needMeSign
        },
        {
            path: "/needOtherSign",
            name: "needOtherSign",
            component: () =>
                import ("../views/needOtherSign.vue")
        },
        {
            path: "/needOtherRec",
            name: "needOtherRec",
            component: () =>
                import ("../views/needOtherRec.vue")
        },
        {
            path: "/signFinish",
            name: "signFinish",
            component: () =>
                import ("../views/signFinish.vue")
        },
        {
            path: "/cancle",
            name: "cancle",
            component: () =>
                import ("../views/cancle.vue")
        },
        {
            path: "/drafts",
            name: "drafts",
            component: () =>
                import ("../views/drafts.vue")
        }
    ]
});