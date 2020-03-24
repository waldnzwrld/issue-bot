const core = require('@actions/core');
const { GitHub, context } = require('@actions/github');
const run = require('../src/issue-bot');

jest.mock('@actions/core');
jest.mock('@actions/github');
jest.mock('js-yaml');

describe('Issue Bot', () => {

	let issueBot;

	beforeEach(() => {

	});

	it('runs', () => {
		run();
	});
});
