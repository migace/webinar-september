import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";

import "tailwindcss/dist/tailwind.css";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>",
  },
  errors: {
    topNav: "<h1>Failed to load topnav (tech talks)</h1>",
    orders: "<h1>Nie udało się załadować orders</h1>",
  },
  props: {},
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

layoutEngine.activate();
start();

// registerApplication({
//   name: "@webinar/dashboard",
//   app: () => System.import("@webinar/dashboard"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@webinar/orders",
//   app: () => System.import("@webinar/orders"),
//   activeWhen: ["/"]
// });

// start({
//   urlRerouteOnly: true,
// });
