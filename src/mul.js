import {_concat} from '@string-plumbing/concat';

/**
 * Concatenate the input string with n-1 copies of itself.
 *
 * @param {string} string
 * @param {number} n
 */
const mul = (string, n) => {
	// eslint-disable-next-line unicorn/no-new-array
	return _concat(new Array(n).fill(string));
};

export default mul;
