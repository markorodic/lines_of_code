import mixpanel from "mixpanel-browser";
mixpanel.init("cf303273423cd6a034ea0721e12d5b14");

let env_check = process.env.NODE_ENV === "production";
env_check = true;

let actions = {
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    }
  }
};

export let Mixpanel = actions;
