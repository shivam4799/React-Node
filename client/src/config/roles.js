export default {
  admin: {
    routes: [
      {
        component: "Inbox",
        url: "/",
      },
      {
        component: "ReadInbox",
        url: "/readinbox",
      },
      {
        component: "Contacts",
        url: "/contacts",
      },
      {
        component: "AdminRequest",
        url: "/adminrequest",
      },
      {
        component: "Dash",
        url: "/dash",
      },
    ],
  },
  staff: {
    routes: [
      {
        component: "HeadOfOperationAndManager",
        url: "/hoo-manager",
      },
      {
        component: "OnlyForManager",
        url: "/manager-only",
      },
      {
        component: "HeadOfOperationManagerAndHeadCashier",
        url: "/hoo-manager-head-cashier",
      },
    ],
  },
  common: {
    routes: [
      {
        component: "CommonRoute",
        url: "/common-component",
      },
    ],
  },
};
