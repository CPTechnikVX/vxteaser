import {configure} from '@storybook/react';
import './../http-root/lib/css/main.css';

function loadStories() {
	require('../stories/index.js');
	// You can require as many stories as you need.
}

configure(loadStories, module);

