export const codes = [
	{
		title: '1xx (Informational)',
		codes: ['100 - Continue', '101 - Switching Protocols'],
	},
	{
		title: '2xx (Success)',
		codes: [
			'200 - OK',
			'201 - Created',
			'202 - Accepted',
			'203 - Non-Authoritive Information',
			'204 - No Content',
			'205 - Reset Content',
			'206 - Partial Content',
			'226 - IM Used',
		],
	},
	{
		title: '3xx (Redirection)',
		codes: [
			'300 - Multiple Choices',
			'301 - Moved Permanently',
			'302 - Found',
			'303 - See Other',
			'304 - Not Modified',
			'305 - Use Proxy',
			'306 - Switch Proxy',
			'307 - Temporary Redirect',
			'308 - Permanent Redirect',
		],
	},
	{
		title: '4xx (Client Error)',
		codes: [
			'400 - Bad Request',
			'401 - Unauthorized',
			'402 - Payment Required',
			'403 - Forbidden',
			'404 - Not Found',
			'405 - Method Not Allowed',
			'406 - Not Acceptable',
			'407 - Proxy Authentication Required',
			'408 - Request Timeout',
			'409 - Conflict',
			'410 - Gone',
			'411 - Length Required',
			'412 - Precondition Failed',
			'413 - Payload Too Large',
			'414 - URI Too Long',
			'415 - Unsupported Media Type',
			'416 - Range Not Satisfiable',
			'417 - Expectation Failed',
			'418 - I’m a teapot',
			'421 - Misdirected Request',
			'426 - Upgrade Required',
			'428 - Precondition Required',
			'429 - Too Many Requests',
			'431 - Request Header Fields Too Large',
			'451 - Unavailable For Legal Reasons',
		],
	},
	{
		title: '5xx (Server Error)',
		codes: [
			'500 - Internal Server Error',
			'501 - Not Implemented',
			'502 - Bad Gateway',
			'503 - Service Unavailable',
			'504 - Gateway Timeout',
			'505 - HTTP Version Not Supported',
			'506 - Variant Also Negotiates',
			'510 - Not Extended',
			'511 - Network Authentication Required',
		],
	},
	{
		title: 'Other (WebDAV)',
		codes: [
			'102 - Processing',
			'207 - Multi-Status',
			'208 - Already Reported',
			'422 - Unprocessable Entity',
			'423 - Locked',
			'424 - Failed Dependency',
			'507 - Insufficient Storage',
			'508 - Loop Detected',
		],
	},
];