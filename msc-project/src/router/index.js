import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/exerciseguide",
    name: "Exerciseguide",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Exerciseguide" */ "../components/exercises/Exerciseguide.vue"
      ),
  },

  {
    path: "/landing",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../components/Landing.vue"),
  },

  // routes to lessons
  {
    path: "/lessonguide",
    name: "Lessonguide",
    component: () =>
      import(
        /* webpackChunkName: "Lessonguide" */ "../components/lessons/Lessonguide.vue"
      ),
  },

  {
    path: "/lesson01",
    name: "Lesson01",
    component: () =>
      import(
        /* webpackChunkName: "Lesson01" */ "../components/lessons/Lesson01.vue"
      ),
  },

  {
    path: "/lesson02",
    name: "Lesson02",
    component: () =>
      import(
        /* webpackChunkName: "Lesson02" */ "../components/lessons/Lesson02.vue"
      ),
  },

  // routes to exercises
  {
    path: "/exercise01",
    name: "Exercise01",
    component: () =>
      import(
        /* webpackChunkName: "Exercise01" */ "../components/exercises/Exercise01.vue"
      ),
  },

  {
    path: "/exercise02",
    name: "Exercise02",
    component: () =>
      import(
        /* webpackChunkName: "Exercise02" */ "../components/exercises/Exercise02.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
