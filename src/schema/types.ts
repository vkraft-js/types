/** Core property type used throughout VK schema definitions. */
export interface VKSchemaProperty {
	type?: string | string[];
	$ref?: string;
	description?: string;
	enum?: (string | number)[];
	enumNames?: string[];
	items?: VKSchemaProperty;
	allOf?: VKSchemaProperty[];
	oneOf?: VKSchemaProperty[];
	discriminator?: {
		propertyName: string;
		mapping?: Record<string, string>;
	};
	properties?: Record<string, VKSchemaProperty>;
	additionalProperties?: boolean | VKSchemaProperty;
	required?: string[] | boolean;
	format?: string;
	entity?: string;
	minimum?: number;
	maximum?: number;
	default?: unknown;
	const?: unknown;
	deprecated_from_version?: string;
	name?: string;
	/** Pattern for string validation */
	pattern?: string;
	/** Min/max items for arrays */
	minItems?: number;
	maxItems?: number;
}

/** A single method parameter. */
export interface VKParameter extends VKSchemaProperty {
	name: string;
	required?: boolean;
}

/** Reference to a response definition. */
export interface VKResponseRef {
	$ref: string;
}

/** A VK API method definition. */
export interface VKMethod {
	name: string;
	description?: string;
	access_token_type?: string[];
	parameters?: VKParameter[];
	responses: Record<string, VKResponseRef>;
	errors?: VKResponseRef[];
	timeout?: number;
}

/** A VK API error definition. */
export interface VKError {
	code: number;
	description: string;
	global?: boolean;
	subcodes?: { subcode: number; description: string }[];
}

/** Unified schema returned by the fetcher. */
export interface VKSchema {
	version: string;
	objects: Map<string, VKSchemaProperty>;
	responses: Map<string, VKSchemaProperty>;
	methods: VKMethod[];
	errors: VKError[];
}
