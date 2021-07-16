// import mixpanel from "mixpanel-browser";
// mixpanel.init("9f3a0f00fb59f93316bb8ac8e25d5613");

// let env_check = process.env.NODE_ENV === "production";

// let actions = {
//   identify: id => {
//     if (env_check) mixpanel.identify(id);
//   },
//   alias: id => {
//     if (env_check) mixpanel.alias(id);
//   },
//   track: (name, props) => {
//     if (env_check) mixpanel.track(name, props);
//   },
//   time_event: (name, props) => {
//     if (env_check) mixpanel.time_event(name);
//   },
//   people: {
//     set: props => {
//       if (env_check) mixpanel.people.set(props);
//     }
//   }
// };

// export let Mixpanel = actions;
