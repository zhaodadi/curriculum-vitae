import React from 'react';
import ReactDOM from 'react-dom';
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";

import Pace from "./lib/js/pace.min.js";
import Plugins from "./lib/js/plugins.js";
// plugins
import JqueryPlaceholder from "jquery-placeholder";
// main js from Kards
import KardsJs from "./lib/js/kards.js";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
