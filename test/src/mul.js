import test from 'ava';

import {mul} from '#module';

const macro = test.macro({
	exec(t, string, n, expected) {
		t.is(mul(string, n), expected);
	},
	title(title, string, n, expected) {
		return (
			title ??
			`mul(${JSON.stringify(string)}, ${n}}) == ${JSON.stringify(expected)}`
		);
	},
});

test(macro, '', 0, '');
test(macro, '', 1, '');
test(macro, '', 2, '');
test(macro, '', 3, '');
test(macro, '', 1000, '');
test(macro, 'ha', 0, '');
test(macro, 'ha', 1, 'ha');
test(macro, 'ha', 2, 'haha');
test(macro, 'ha', 3, 'hahaha');
