import { A as safeParseAsync, D as string, E as record, M as _coercedNumber, O as union, T as object, _ as discriminatedUnion, b as lazy, c as EventSourceParserStream, f as _null, h as boolean, j as toJSONSchema, k as unknown, l as ZodNumber, m as array, o as WORKFLOW_DESERIALIZE, p as any, s as WORKFLOW_SERIALIZE, u as _enum, v as intersection, w as number$1, x as literal } from "./gateway+[...].mjs";
//#region node_modules/zod/v4/classic/coerce.js
function number(params) {
	return _coercedNumber(ZodNumber, params);
}
//#endregion
//#region node_modules/@ai-sdk/openai/node_modules/@ai-sdk/provider/dist/index.js
var marker$1 = "vercel.ai.error";
var symbol$1 = Symbol.for(marker$1);
var _a$2;
var _b$1;
var AISDKError = class _AISDKError extends (_b$1 = Error, _a$2 = symbol$1, _b$1) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name15, message, cause }) {
		super(message);
		this[_a$2] = true;
		this.name = name15;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$1);
	}
	static hasMarker(error, marker16) {
		const markerSymbol = Symbol.for(marker16);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$1 = "AI_APICallError";
var marker2$1 = `vercel.ai.error.${name$1}`;
var symbol2$1 = Symbol.for(marker2$1);
var _a2$1;
var _b2$1;
var APICallError = class extends (_b2$1 = AISDKError, _a2$1 = symbol2$1, _b2$1) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$1,
			message,
			cause
		});
		this[_a2$1] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2$1);
	}
};
var name2$1 = "AI_EmptyResponseBodyError";
var marker3$1 = `vercel.ai.error.${name2$1}`;
var symbol3 = Symbol.for(marker3$1);
var _a3;
var _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$1,
			message
		});
		this[_a3] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3$1);
	}
};
function getErrorMessage(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.toString();
	return JSON.stringify(error);
}
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
	constructor({ message, cause, argument }) {
		super({
			name: name3,
			message,
			cause
		});
		this[_a4] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4);
	}
};
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
	constructor({ prompt, message, cause }) {
		super({
			name: name4,
			message: `Invalid prompt: ${message}`,
			cause
		});
		this[_a5] = true;
		this.prompt = prompt;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5);
	}
};
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
	constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }) {
		super({
			name: name5,
			message
		});
		this[_a6] = true;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6);
	}
};
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
	constructor({ text, cause }) {
		super({
			name: name6,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
			cause
		});
		this[_a7] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7);
	}
};
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
	constructor({ message }) {
		super({
			name: name7,
			message
		});
		this[_a8] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker8);
	}
};
var name11 = "AI_NoSuchProviderReferenceError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _b12;
var NoSuchProviderReferenceError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
	constructor({ provider, reference, message = `No provider reference found for provider '${provider}'. Available providers: ${Object.keys(reference).join(", ")}` }) {
		super({
			name: name11,
			message
		});
		this[_a12] = true;
		this.provider = provider;
		this.reference = reference;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker12);
	}
};
var name12 = "AI_TooManyEmbeddingValuesForCallError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _b13;
var TooManyEmbeddingValuesForCallError = class extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
	constructor(options) {
		super({
			name: name12,
			message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
		});
		this[_a13] = true;
		this.provider = options.provider;
		this.modelId = options.modelId;
		this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
		this.values = options.values;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13);
	}
};
var name13 = "AI_TypeValidationError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var _b14;
var TypeValidationError = class _TypeValidationError extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
	constructor({ value, cause, context }) {
		let contextPrefix = "Type validation failed";
		if (context == null ? void 0 : context.field) contextPrefix += ` for ${context.field}`;
		if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
			contextPrefix += " (";
			const parts = [];
			if (context.entityName) parts.push(context.entityName);
			if (context.entityId) parts.push(`id: "${context.entityId}"`);
			contextPrefix += parts.join(", ");
			contextPrefix += ")";
		}
		super({
			name: name13,
			message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
			cause
		});
		this[_a14] = true;
		this.value = value;
		this.context = context;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value and context, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @param {TypeValidationContext} params.context - Optional context about what is being validated.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause, context }) {
		var _a16, _b16, _c;
		if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a16 = cause.context) == null ? void 0 : _a16.field) === (context == null ? void 0 : context.field) && ((_b16 = cause.context) == null ? void 0 : _b16.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) return cause;
		return new _TypeValidationError({
			value,
			cause,
			context
		});
	}
};
var name14 = "AI_UnsupportedFunctionalityError";
var marker15 = `vercel.ai.error.${name14}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var _b15;
var UnsupportedFunctionalityError = class extends (_b15 = AISDKError, _a15 = symbol15, _b15) {
	constructor({ functionality, message = `'${functionality}' functionality not supported.` }) {
		super({
			name: name14,
			message
		});
		this[_a15] = true;
		this.functionality = functionality;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker15);
	}
};
function isJSONValue(value) {
	if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return true;
	if (Array.isArray(value)) return value.every(isJSONValue);
	if (typeof value === "object") return Object.entries(value).every(([key, val]) => typeof key === "string" && (val === void 0 || isJSONValue(val)));
	return false;
}
function isJSONObject(value) {
	return value != null && typeof value === "object" && Object.entries(value).every(([key, val]) => typeof key === "string" && (val === void 0 || isJSONValue(val)));
}
//#endregion
//#region node_modules/@ai-sdk/openai/node_modules/@ai-sdk/provider-utils/dist/index.js
function combineHeaders(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => ({
		...combinedHeaders,
		...currentHeaders != null ? currentHeaders : {}
	}), {});
}
function removeUndefinedEntries(record) {
	return Object.fromEntries(Object.entries(record).filter(([_key, value]) => value != null));
}
async function delay(delayInMs, options) {
	if (delayInMs == null) return Promise.resolve();
	const signal = options == null ? void 0 : options.abortSignal;
	return new Promise((resolve2, reject) => {
		if (signal == null ? void 0 : signal.aborted) {
			reject(createAbortError());
			return;
		}
		const timeoutId = setTimeout(() => {
			cleanup();
			resolve2();
		}, delayInMs);
		const cleanup = () => {
			clearTimeout(timeoutId);
			signal?.removeEventListener("abort", onAbort);
		};
		const onAbort = () => {
			cleanup();
			reject(createAbortError());
		};
		signal?.addEventListener("abort", onAbort);
	});
}
function createAbortError() {
	return new DOMException("Delay was aborted", "AbortError");
}
function getWebSocketConstructor(webSocket) {
	const WebSocketConstructor = webSocket != null ? webSocket : globalThis.WebSocket;
	if (WebSocketConstructor == null) throw new Error("No WebSocket implementation available.");
	return WebSocketConstructor;
}
function toWebSocketUrl(url) {
	const wsUrl = new URL(url);
	if (wsUrl.protocol === "http:") wsUrl.protocol = "ws:";
	else if (wsUrl.protocol === "https:") wsUrl.protocol = "wss:";
	return wsUrl;
}
var textDecoder = new TextDecoder();
async function readWebSocketMessageText(data) {
	if (typeof data === "string") return data;
	if (data instanceof ArrayBuffer) return textDecoder.decode(data);
	if (ArrayBuffer.isView(data)) return textDecoder.decode(data);
	if (typeof Blob !== "undefined" && data instanceof Blob) return data.text();
	return String(data);
}
var WEBSOCKET_OPEN_STATE = 1;
async function waitForWebSocketBufferDrain(socket, { highWaterMark = 1048576, pollIntervalMs = 20, abortSignal } = {}) {
	var _a3;
	while (socket.readyState === WEBSOCKET_OPEN_STATE && ((_a3 = socket.bufferedAmount) != null ? _a3 : 0) > highWaterMark) {
		if ((abortSignal == null ? void 0 : abortSignal.aborted) === true) return;
		await delay(pollIntervalMs);
	}
}
function connectToWebSocket({ url, protocols, headers, webSocket, abortSignal, onOpen, onMessageText, onProcessingError, onSocketError, onClose, onAbort }) {
	var _a3;
	let socket;
	let abortListener;
	const close = (code) => {
		if (abortListener != null) {
			abortSignal?.removeEventListener("abort", abortListener);
			abortListener = void 0;
		}
		try {
			socket?.close(code);
		} catch (e) {}
	};
	if (abortSignal == null ? void 0 : abortSignal.aborted) {
		onAbort?.((_a3 = abortSignal.reason) != null ? _a3 : /* @__PURE__ */ new Error("Aborted"));
		return {
			socket: void 0,
			close
		};
	}
	try {
		socket = new (getWebSocketConstructor(webSocket))(url, protocols, { headers: removeUndefinedEntries(headers != null ? headers : {}) });
	} catch (error) {
		onProcessingError(error);
		return {
			socket: void 0,
			close
		};
	}
	if (abortSignal != null && onAbort != null) {
		abortListener = () => {
			var _a4;
			return onAbort((_a4 = abortSignal.reason) != null ? _a4 : /* @__PURE__ */ new Error("Aborted"));
		};
		abortSignal.addEventListener("abort", abortListener, { once: true });
	}
	const openedSocket = socket;
	socket.onopen = () => {
		try {
			onOpen?.(openedSocket);
		} catch (error) {
			onProcessingError(error);
		}
	};
	let tail = Promise.resolve();
	socket.onmessage = (event) => {
		tail = tail.then(() => readWebSocketMessageText(event.data)).then((text) => onMessageText(text)).catch(onProcessingError);
	};
	socket.onerror = () => {
		tail = tail.then(() => onSocketError == null ? void 0 : onSocketError()).catch(onProcessingError);
	};
	socket.onclose = (event) => {
		const closeEvent = event;
		const code = typeof (closeEvent == null ? void 0 : closeEvent.code) === "number" ? closeEvent.code : void 0;
		const reason = typeof (closeEvent == null ? void 0 : closeEvent.reason) === "string" ? closeEvent.reason : void 0;
		tail = tail.then(() => onClose == null ? void 0 : onClose({
			code,
			reason
		})).catch(onProcessingError);
	};
	return {
		socket,
		close
	};
}
function convertAsyncIteratorToReadableStream(iterator) {
	let cancelled = false;
	return new ReadableStream({
		/**
		* Called when the consumer wants to pull more data from the stream.
		*
		* @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
		* @returns {Promise<void>}
		*/
		async pull(controller) {
			if (cancelled) return;
			try {
				const { value, done } = await iterator.next();
				if (done) controller.close();
				else controller.enqueue(value);
			} catch (error) {
				controller.error(error);
			}
		},
		/**
		* Called when the consumer cancels the stream.
		*/
		async cancel(reason) {
			cancelled = true;
			if (iterator.return) try {
				await iterator.return(reason);
			} catch (e) {}
		}
	});
}
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
	const latin1string = atob(base64String.replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
	const chunks = [];
	const chunkSize = 4096;
	for (let i = 0; i < array.length; i += chunkSize) chunks.push(String.fromCodePoint(...array.subarray(i, i + chunkSize)));
	return btoa(chunks.join(""));
}
function convertToBase64(value) {
	return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
function convertInlineFileDataToUint8Array(data) {
	if (data.type === "stream") {
		const error = new UnsupportedFunctionalityError({ functionality: "streaming file upload" });
		data.stream.cancel(error).catch(() => {});
		throw error;
	}
	if (data.type === "text") return new TextEncoder().encode(data.text);
	if (data.data instanceof Uint8Array) return data.data;
	if (data.data instanceof ArrayBuffer) return new Uint8Array(data.data);
	return convertBase64ToUint8Array(data.data);
}
function convertToFormData(input, options = {}) {
	const { useArrayBrackets = true } = options;
	const formData = new FormData();
	for (const [key, value] of Object.entries(input)) {
		if (value == null) continue;
		if (Array.isArray(value)) {
			if (value.length === 1) {
				formData.append(key, value[0]);
				continue;
			}
			const arrayKey = useArrayBrackets ? `${key}[]` : key;
			for (const item of value) formData.append(arrayKey, item);
			continue;
		}
		formData.append(key, value);
	}
	return formData;
}
function createLanguageModelResponseMetadata({ id, model, created }) {
	return {
		id: id != null ? id : void 0,
		modelId: model != null ? model : void 0,
		timestamp: created != null ? /* @__PURE__ */ new Date(created * 1e3) : void 0
	};
}
function createNullLanguageModelUsage() {
	return {
		inputTokens: {
			total: void 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: void 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
}
function createToolNameMapping({ tools = [], providerToolNames }) {
	const customToolNameToProviderToolName = {};
	const providerToolNameToCustomToolName = {};
	for (const tool2 of tools) if (tool2.type === "provider" && tool2.id in providerToolNames) {
		const providerToolName = providerToolNames[tool2.id];
		customToolNameToProviderToolName[tool2.name] = providerToolName;
		providerToolNameToCustomToolName[providerToolName] = tool2.name;
	}
	return {
		toProviderToolName: (customToolName) => {
			var _a3;
			return (_a3 = customToolNameToProviderToolName[customToolName]) != null ? _a3 : customToolName;
		},
		toCustomToolName: (providerToolName) => {
			var _a3;
			return (_a3 = providerToolNameToCustomToolName[providerToolName]) != null ? _a3 : providerToolName;
		}
	};
}
var marker = /* @__PURE__ */ Symbol.for("vercel.ai.providerStreamError");
function createProviderStreamError({ message, type, code, statusCode, isRetryable, data }) {
	const error = {
		message,
		type,
		code,
		statusCode,
		isRetryable,
		data
	};
	Object.defineProperty(error, marker, { value: true });
	return error;
}
function extractResponseHeaders(response) {
	return Object.fromEntries([...response.headers]);
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
	var _a3, _b3, _c;
	if (globalThisAny.window) return `runtime/browser`;
	if ((_a3 = globalThisAny.navigator) == null ? void 0 : _a3.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if ((_c = (_b3 = globalThisAny.process) == null ? void 0 : _b3.versions) == null ? void 0 : _c.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function isAbortError(error) {
	return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var RETRYABLE_NETWORK_ERROR_CODES = /* @__PURE__ */ new Set([
	"ConnectionRefused",
	"ConnectionClosed",
	"FailedToOpenSocket",
	"ECONNRESET",
	"ECONNREFUSED",
	"ETIMEDOUT",
	"EPIPE",
	"UND_ERR_SOCKET",
	"UND_ERR_HEADERS_TIMEOUT",
	"UND_ERR_BODY_TIMEOUT",
	"UND_ERR_CONNECT_TIMEOUT"
]);
function findNetworkError(error) {
	const visited = /* @__PURE__ */ new Set();
	let current = error;
	while (current instanceof Error && !visited.has(current)) {
		visited.add(current);
		const errorWithCode = current;
		if (typeof errorWithCode.code === "string" && RETRYABLE_NETWORK_ERROR_CODES.has(errorWithCode.code)) return errorWithCode;
		current = current.cause;
	}
}
function handleFetchError({ error, url, requestBodyValues }) {
	if (isAbortError(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	const networkError = findNetworkError(error);
	if (networkError != null) {
		if (APICallError.isInstance(error)) return new APICallError({
			message: error.message,
			cause: error.cause,
			url: error.url,
			requestBodyValues: error.requestBodyValues,
			statusCode: error.statusCode,
			responseHeaders: error.responseHeaders,
			responseBody: error.responseBody,
			data: error.data,
			isRetryable: true
		});
		return new APICallError({
			message: `Cannot connect to API: ${error instanceof Error ? error.message : networkError.message}`,
			cause: error,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	return error;
}
var VERSION$1 = "5.0.40";
function normalizeHeaders(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var getOriginalFetch = () => globalThis.fetch;
var deleteFromApi = async ({ url, headers = {}, failedResponseHandler, successfulResponseHandler, abortSignal, fetch = getOriginalFetch() }) => {
	try {
		const response = await fetch(url, {
			method: "DELETE",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$1}`, getRuntimeEnvironmentUserAgent()),
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
var imageMediaTypeSignatures = [
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70,
			56,
			55,
			97
		]
	},
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70,
			56,
			57,
			97
		]
	},
	{
		mediaType: "image/png",
		bytesPrefix: [
			137,
			80,
			78,
			71
		]
	},
	{
		mediaType: "image/jpeg",
		bytesPrefix: [255, 216]
	},
	{
		mediaType: "image/webp",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			69,
			66,
			80
		]
	},
	{
		mediaType: "image/bmp",
		bytesPrefix: [
			66,
			77,
			null,
			null,
			null,
			null,
			0,
			0,
			0,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			73,
			73,
			42,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			77,
			77,
			0,
			42
		]
	},
	{
		mediaType: "image/avif",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			97,
			118,
			105,
			102
		]
	},
	{
		mediaType: "image/heic",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			104,
			101,
			105,
			99
		]
	}
];
var documentMediaTypeSignatures = [{
	mediaType: "application/pdf",
	bytesPrefix: [
		37,
		80,
		68,
		70
	]
}];
var audioMediaTypeSignaturesWithoutMp4 = [
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 251]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 250]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 243]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 242]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 227]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 226]
	},
	{
		mediaType: "audio/wav",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			65,
			86,
			69
		]
	},
	{
		mediaType: "audio/ogg",
		bytesPrefix: [
			79,
			103,
			103,
			83
		]
	},
	{
		mediaType: "audio/flac",
		bytesPrefix: [
			102,
			76,
			97,
			67
		]
	},
	{
		mediaType: "audio/aac",
		bytesPrefix: [
			64,
			21,
			0,
			0
		]
	},
	{
		mediaType: "audio/webm",
		bytesPrefix: [
			26,
			69,
			223,
			163
		]
	}
];
var audioMediaTypeSignatures = [...audioMediaTypeSignaturesWithoutMp4, {
	mediaType: "audio/mp4",
	bytesPrefix: [
		0,
		0,
		0,
		null,
		102,
		116,
		121,
		112
	]
}];
var videoMediaTypeSignatures = [
	{
		mediaType: "video/mp4",
		bytesPrefix: [
			0,
			0,
			0,
			null,
			102,
			116,
			121,
			112
		]
	},
	{
		mediaType: "video/webm",
		bytesPrefix: [
			26,
			69,
			223,
			163
		]
	},
	{
		mediaType: "video/quicktime",
		bytesPrefix: [
			0,
			0,
			0,
			20,
			102,
			116,
			121,
			112,
			113,
			116
		]
	},
	{
		mediaType: "video/x-msvideo",
		bytesPrefix: [
			82,
			73,
			70,
			70
		]
	}
];
var DEFAULT_SNIFF_BYTES = 18;
var ID3_SCAN_BYTES = 131084;
function decodePrefix(data, maxBytes) {
	if (typeof data !== "string") return data.length > maxBytes ? data.subarray(0, maxBytes) : data;
	const maxChars = Math.ceil(maxBytes / 3) * 4;
	const bytes = convertBase64ToUint8Array(data.substring(0, Math.min(data.length, maxChars)));
	return bytes.length > maxBytes ? bytes.subarray(0, maxBytes) : bytes;
}
function hasID3(bytes) {
	return bytes.length > 10 && bytes[0] === 73 && bytes[1] === 68 && bytes[2] === 51;
}
var stripID3 = (bytes) => {
	const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
	return bytes.subarray(id3Size + 10);
};
function detectMediaTypeBySignatures({ data, signatures }) {
	let bytes = decodePrefix(data, DEFAULT_SNIFF_BYTES);
	if (hasID3(bytes)) bytes = stripID3(decodePrefix(data, ID3_SCAN_BYTES));
	for (const signature of signatures) if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every((byte, index) => byte === null || bytes[index] === byte)) return signature.mediaType;
}
var topLevelSignatureTables = {
	image: imageMediaTypeSignatures,
	audio: audioMediaTypeSignatures,
	video: videoMediaTypeSignatures,
	application: documentMediaTypeSignatures
};
function detectMediaType({ data, topLevelType }) {
	if (topLevelType === void 0) return detectMediaTypeBySignatures({
		data,
		signatures: [
			...imageMediaTypeSignatures,
			...documentMediaTypeSignatures,
			...audioMediaTypeSignaturesWithoutMp4,
			...videoMediaTypeSignatures
		]
	});
	const signatures = topLevelSignatureTables[topLevelType];
	if (signatures === void 0) return;
	return detectMediaTypeBySignatures({
		data,
		signatures
	});
}
function getTopLevelMediaType(mediaType) {
	const slashIndex = mediaType.indexOf("/");
	return slashIndex === -1 ? mediaType : mediaType.substring(0, slashIndex);
}
function isFullMediaType(mediaType) {
	const slashIndex = mediaType.indexOf("/");
	if (slashIndex === -1) return false;
	const subtype = mediaType.substring(slashIndex + 1);
	return subtype.length > 0 && subtype !== "*";
}
async function cancelResponseBody(response) {
	var _a3;
	try {
		await ((_a3 = response.body) == null ? void 0 : _a3.cancel());
	} catch (e) {}
}
var name = "AI_DownloadError";
var marker2 = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker2);
var _a$1;
var _b;
var DownloadError = class extends (_b = AISDKError, _a$1 = symbol, _b) {
	constructor({ url, statusCode, statusText, cause, message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}` }) {
		super({
			name,
			message,
			cause
		});
		this[_a$1] = true;
		this.url = url;
		this.statusCode = statusCode;
		this.statusText = statusText;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2);
	}
};
function isBrowserRuntime(globalThisAny = globalThis) {
	return globalThisAny.window != null;
}
function isSameOrigin(url, baseUrl) {
	try {
		return new URL(url).origin === new URL(baseUrl).origin;
	} catch (e) {
		return false;
	}
}
function validateDownloadUrl(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch (e) {
		throw new DownloadError({
			url,
			message: `Invalid URL: ${url}`
		});
	}
	if (parsed.protocol === "data:") return;
	if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new DownloadError({
		url,
		message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
	});
	const hostname = parsed.hostname.toLowerCase().replace(/\.+$/, "");
	if (!hostname) throw new DownloadError({
		url,
		message: `URL must have a hostname`
	});
	if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) throw new DownloadError({
		url,
		message: `URL with hostname ${hostname} is not allowed`
	});
	if (hostname.startsWith("[") && hostname.endsWith("]")) {
		if (isPrivateIPv6(hostname.slice(1, -1))) throw new DownloadError({
			url,
			message: `URL with IPv6 address ${hostname} is not allowed`
		});
		return;
	}
	if (isIPv4(hostname)) {
		if (isPrivateIPv4(hostname)) throw new DownloadError({
			url,
			message: `URL with IP address ${hostname} is not allowed`
		});
		return;
	}
}
function validateDownloadAddress({ address, family, hostname }) {
	if (family === 4 ? !isIPv4(address) || isPrivateIPv4(address) : family === 6 ? isPrivateIPv6(address) : true) throw new DownloadError({
		url: hostname,
		message: `Hostname ${hostname} resolved to disallowed IP address ${address}`
	});
}
function isIPv4(hostname) {
	const parts = hostname.split(".");
	if (parts.length !== 4) return false;
	return parts.every((part) => {
		const num = Number(part);
		return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
	});
}
function isPrivateIPv4(ip) {
	const [a, b, c] = ip.split(".").map(Number);
	if (a === 0) return true;
	if (a === 10) return true;
	if (a === 100 && b >= 64 && b <= 127) return true;
	if (a === 127) return true;
	if (a === 169 && b === 254) return true;
	if (a === 172 && b >= 16 && b <= 31) return true;
	if (a === 192 && b === 0 && c === 0) return true;
	if (a === 192 && b === 0 && c === 2) return true;
	if (a === 192 && b === 168) return true;
	if (a === 198 && (b === 18 || b === 19)) return true;
	if (a === 198 && b === 51 && c === 100) return true;
	if (a === 203 && b === 0 && c === 113) return true;
	if (a >= 224) return true;
	return false;
}
function parseIPv6(ip) {
	let address = ip.toLowerCase();
	const zoneIndex = address.indexOf("%");
	if (zoneIndex !== -1) address = address.slice(0, zoneIndex);
	const halves = address.split("::");
	if (halves.length > 2) return null;
	const toGroups = (segment) => {
		if (segment === "") return [];
		const groups = [];
		const parts = segment.split(":");
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.includes(".")) {
				if (i !== parts.length - 1 || !isIPv4(part)) return null;
				const [a, b, c, d] = part.split(".").map(Number);
				groups.push(a << 8 | b, c << 8 | d);
				continue;
			}
			if (!/^[0-9a-f]{1,4}$/.test(part)) return null;
			groups.push(parseInt(part, 16));
		}
		return groups;
	};
	const head = toGroups(halves[0]);
	if (head === null) return null;
	if (halves.length === 2) {
		const tail = toGroups(halves[1]);
		if (tail === null) return null;
		const fill = 8 - head.length - tail.length;
		if (fill < 0) return null;
		return [
			...head,
			...new Array(fill).fill(0),
			...tail
		];
	}
	return head.length === 8 ? head : null;
}
function isPrivateIPv6(ip) {
	const groups = parseIPv6(ip);
	if (groups === null) return true;
	const topZero = (count) => groups.slice(0, count).every((group) => group === 0);
	if (topZero(7) && (groups[7] === 0 || groups[7] === 1)) return true;
	if ((groups[0] & 65024) === 64512) return true;
	if ((groups[0] & 65472) === 65152) return true;
	if ((groups[0] & 65472) === 65216) return true;
	if ((groups[0] & 65280) === 65280) return true;
	if (groups[0] === 8193 && groups[1] === 3512) return true;
	if (groups[0] === 16383 && (groups[1] & 61440) === 0) return true;
	if (topZero(6) || topZero(5) && groups[5] === 65535 || topZero(4) && groups[4] === 65535 && groups[5] === 0 || groups[0] === 100 && groups[1] === 65435 && groups[2] === 0 && groups[3] === 0 && groups[4] === 0 && groups[5] === 0 || groups[0] === 100 && groups[1] === 65435 && groups[2] === 1) return isPrivateIPv4(`${groups[6] >> 8 & 255}.${groups[6] & 255}.${groups[7] >> 8 & 255}.${groups[7] & 255}`);
	return false;
}
function createSafeLookup(lookup) {
	return ((hostname, options, callback) => {
		lookup(hostname, {
			...options,
			all: true
		}, (error, addresses) => {
			if (error) {
				callback(error);
				return;
			}
			try {
				const [firstAddress] = addresses;
				if (firstAddress == null) throw new Error(`Hostname ${hostname} did not resolve to an address`);
				for (const { address, family } of addresses) validateDownloadAddress({
					address,
					family,
					hostname
				});
				if (options.all === true) callback(null, addresses);
				else callback(null, firstAddress.address, firstAddress.family);
			} catch (error2) {
				callback(error2 instanceof Error ? error2 : new Error(String(error2)));
			}
		});
	});
}
var safeNodeFetchPromise;
var initialGlobalFetch = globalThis.fetch;
var initialGlobalFetchIsNodeDefault = isNodeDefaultFetch(initialGlobalFetch);
function isNodeRuntime() {
	var _a3, _b3;
	const runtimeProcess = globalThis.process;
	return ((_a3 = runtimeProcess == null ? void 0 : runtimeProcess.release) == null ? void 0 : _a3.name) === "node" && ((_b3 = runtimeProcess.versions) == null ? void 0 : _b3.bun) == null;
}
async function getDefaultDownloadFetch() {
	if (!isNodeRuntime() || !initialGlobalFetchIsNodeDefault || globalThis.fetch !== initialGlobalFetch) return globalThis.fetch;
	return safeNodeFetchPromise != null ? safeNodeFetchPromise : safeNodeFetchPromise = Promise.resolve().then(createSafeNodeFetch);
}
function isNodeDefaultFetch(fetch) {
	if (typeof fetch !== "function") return false;
	const source = Function.prototype.toString.call(fetch);
	return source.includes("internal/deps/undici") || source.includes("lazy loading of undici");
}
function createSafeNodeFetch() {
	const { createRequire } = loadBuiltinModule("node:module");
	const { lookup } = loadBuiltinModule("node:dns");
	const { Agent, fetch } = createRequire(getCurrentModulePath())("undici");
	const dispatcher = new Agent({ connect: { lookup: createSafeLookup(lookup) } });
	return ((input, init) => fetch(input, {
		...init,
		dispatcher
	}));
}
function loadBuiltinModule(id) {
	var _a3;
	const processWithBuiltins = globalThis.process;
	const builtinModule = (_a3 = processWithBuiltins == null ? void 0 : processWithBuiltins.getBuiltinModule) == null ? void 0 : _a3.call(processWithBuiltins, id);
	if (builtinModule == null) throw new Error(`Node.js built-in module ${id} is unavailable`);
	return builtinModule;
}
function getCurrentModulePath() {
	const originalPrepareStackTrace = Error.prepareStackTrace;
	try {
		Error.prepareStackTrace = (_error, callSites) => callSites;
		const error = /* @__PURE__ */ new Error("Capture current module path");
		Error.captureStackTrace(error, getCurrentModulePath);
		const [caller] = error.stack;
		const fileName = caller == null ? void 0 : caller.getFileName();
		if (fileName == null) throw new Error("Unable to determine the current module path");
		return fileName;
	} finally {
		Error.prepareStackTrace = originalPrepareStackTrace;
	}
}
var BLOCKED_REQUEST_HEADERS = [
	"connection",
	"keep-alive",
	"te",
	"trailer",
	"transfer-encoding",
	"upgrade",
	"host",
	"forwarded",
	"proxy-authorization",
	"via",
	"x-forwarded-for",
	"x-forwarded-host",
	"x-forwarded-proto",
	"x-real-ip",
	"metadata",
	"metadata-flavor",
	"x-aws-ec2-metadata-token",
	"x-metadata-token",
	"cookie",
	"set-cookie"
];
function sanitizeRequestHeaders(input) {
	const headers = new Headers(input);
	for (const name3 of BLOCKED_REQUEST_HEADERS) headers.delete(name3);
	return headers;
}
var MAX_DOWNLOAD_REDIRECTS = 10;
var REDIRECT_STATUS_CODES = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]);
async function getValidatedFetch(customFetch) {
	return customFetch == null || customFetch === globalThis.fetch ? await getDefaultDownloadFetch() : customFetch;
}
async function fetchWithValidatedRedirects({ url, headers, abortSignal, maxRedirects = MAX_DOWNLOAD_REDIRECTS, fetch: customFetch, trustedOrigin }) {
	var _a3;
	let currentHeaders = headers === void 0 ? void 0 : sanitizeRequestHeaders(headers);
	const perHopInit = (redirect) => {
		const init = {
			signal: abortSignal,
			redirect
		};
		if (currentHeaders !== void 0) init.headers = new Headers(currentHeaders);
		return init;
	};
	let currentUrl = url;
	for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount++) {
		const isTrustedHop = trustedOrigin !== void 0 && isSameOrigin(currentUrl, trustedOrigin);
		if (!isTrustedHop) validateDownloadUrl(currentUrl);
		const fetch = isTrustedHop && customFetch != null ? customFetch : isTrustedHop ? globalThis.fetch : await getValidatedFetch(customFetch);
		const response = await fetch(currentUrl, perHopInit("manual"));
		if (response.type === "opaqueredirect") {
			if (!isBrowserRuntime()) throw new DownloadError({
				url,
				message: `Redirect from ${currentUrl} could not be validated and was blocked`
			});
			return await fetch(currentUrl, perHopInit("follow"));
		}
		const location = (_a3 = response.headers) == null ? void 0 : _a3.get("location");
		if (REDIRECT_STATUS_CODES.has(response.status) && location) {
			await cancelResponseBody(response);
			const nextUrl = new URL(location, currentUrl).toString();
			if (currentHeaders !== void 0 && !isSameOrigin(nextUrl, currentUrl)) {
				const userAgent = currentHeaders.get("user-agent");
				currentHeaders = new Headers(userAgent == null ? void 0 : { "user-agent": userAgent });
			}
			currentUrl = nextUrl;
			continue;
		}
		return response;
	}
	throw new DownloadError({
		url,
		message: `Too many redirects (max ${maxRedirects})`
	});
}
var DEFAULT_MAX_DOWNLOAD_SIZE = 2147483648;
async function readResponseWithSizeLimit({ response, url, maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE }) {
	const contentLength = response.headers.get("content-length");
	if (contentLength != null) {
		const length = parseInt(contentLength, 10);
		if (!isNaN(length) && length > maxBytes) {
			await cancelResponseBody(response);
			throw new DownloadError({
				url,
				message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
			});
		}
	}
	const body = response.body;
	if (body == null) return /* @__PURE__ */ new Uint8Array(0);
	const reader = body.getReader();
	const chunks = [];
	let totalBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBytes += value.length;
			if (totalBytes > maxBytes) throw new DownloadError({
				url,
				message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
			});
			chunks.push(value);
		}
	} finally {
		try {
			await reader.cancel();
		} catch (e) {} finally {
			reader.releaseLock();
		}
	}
	const result = new Uint8Array(totalBytes);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.length;
	}
	return result;
}
async function downloadBlob(url, options) {
	var _a3, _b3;
	try {
		const response = await fetchWithValidatedRedirects({
			url,
			abortSignal: options == null ? void 0 : options.abortSignal
		});
		if (!response.ok) {
			await cancelResponseBody(response);
			throw new DownloadError({
				url,
				statusCode: response.status,
				statusText: response.statusText
			});
		}
		const data = await readResponseWithSizeLimit({
			response,
			url,
			maxBytes: (_a3 = options == null ? void 0 : options.maxBytes) != null ? _a3 : DEFAULT_MAX_DOWNLOAD_SIZE
		});
		const contentType = (_b3 = response.headers.get("content-type")) != null ? _b3 : void 0;
		return new Blob([data], contentType ? { type: contentType } : void 0);
	} catch (error) {
		if (DownloadError.isInstance(error)) throw error;
		throw new DownloadError({
			url,
			cause: error
		});
	}
}
var EMBEDDING_MODEL_MAX_INPUT_BYTES_PER_CALL = /* @__PURE__ */ Symbol.for("vercel.ai.embeddingModel.maxInputBytesPerCall");
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
var getOriginalFetch2 = () => globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch, validateUrl, credentialedOrigin, trustedOrigin }) => {
	try {
		const requestFetch = fetch != null ? fetch : getOriginalFetch2();
		const requestHeaders = withUserAgentSuffix(credentialedOrigin !== void 0 && !isSameOrigin(url, credentialedOrigin) ? {} : headers, `ai-sdk/provider-utils/${VERSION$1}`, getRuntimeEnvironmentUserAgent());
		const response = validateUrl ? await fetchWithValidatedRedirects({
			url,
			headers: requestHeaders,
			abortSignal,
			fetch,
			trustedOrigin
		}) : await requestFetch(url, {
			method: "GET",
			headers: requestHeaders,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function isNonNullable(value) {
	return value != null;
}
function isRecord(value) {
	return value != null && typeof value === "object" && !Array.isArray(value);
}
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
	if (typeof apiKey === "string") return apiKey;
	if (apiKey != null) throw new LoadAPIKeyError({ message: `${description} API key must be a string.` });
	if (typeof process === "undefined") throw new LoadAPIKeyError({ message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.` });
	apiKey = process.env[environmentVariableName];
	if (apiKey == null) throw new LoadAPIKeyError({ message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.` });
	if (typeof apiKey !== "string") throw new LoadAPIKeyError({ message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.` });
	return apiKey;
}
function loadOptionalSetting({ settingValue, environmentVariableName }) {
	if (typeof settingValue === "string") return settingValue;
	if (settingValue != null || typeof process === "undefined") return;
	settingValue = process.env[environmentVariableName];
	if (settingValue == null || typeof settingValue !== "string") return;
	return settingValue;
}
function isCustomReasoning(reasoning) {
	return reasoning !== void 0 && reasoning !== "provider-default";
}
function mediaTypeToExtension(mediaType) {
	var _a3;
	const [_type, subtype = ""] = mediaType.toLowerCase().split("/");
	return (_a3 = {
		mpeg: "mp3",
		"x-wav": "wav",
		opus: "ogg",
		mp4: "m4a",
		"x-m4a": "m4a"
	}[subtype]) != null ? _a3 : subtype;
}
function normalizeBatchRequestCounts({ total, pending, completed, failed }) {
	if (isNonNegativeSafeInteger(total) && isNonNegativeSafeInteger(pending) && isNonNegativeSafeInteger(completed) && isNonNegativeSafeInteger(failed) && pending + completed + failed === total) return {
		total,
		pending,
		completed,
		failed
	};
}
function isNonNegativeSafeInteger(value) {
	return value != null && Number.isSafeInteger(value) && value >= 0;
}
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) return obj;
	return filter(obj);
}
function filter(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch (e) {
		return _parse(text);
	}
	try {
		return _parse(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		const { additionalProperties } = jsonSchema2;
		jsonSchema2.additionalProperties = additionalProperties != null && typeof additionalProperties !== "boolean" ? visit(additionalProperties) : false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit(definitions[key]);
	return jsonSchema2;
}
function visit(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
	...defaultOptions,
	name: options
} : {
	...defaultOptions,
	...options
};
function parseAnyDef() {
	return {};
}
function parseArrayDef(def, refs) {
	var _a3, _b3, _c;
	const res = { type: "array" };
	if (((_a3 = def.type) == null ? void 0 : _a3._def) && ((_c = (_b3 = def.type) == null ? void 0 : _b3._def) == null ? void 0 : _c.typeName) !== "ZodAny") res.items = parseDef(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseBooleanDef() {
	return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
	return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item) => parseDateDef(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser(def);
	}
}
var integerDateParser = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max": res.maximum = check.value;
	}
	return res;
};
function parseDefaultDef(_def, refs) {
	return {
		...parseDef(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
function parseEffectsDef(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
	const allOf = [parseDef(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties: _additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex = void 0;
var zodPatterns = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod": addPattern(res, zodPatterns.email, check.message, refs);
			}
			break;
		case "url":
			addFormat(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern(res, zodPatterns.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern(res, zodPatterns.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat(res, "date", check.message, refs);
			break;
		case "time":
			addFormat(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern(res, zodPatterns.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern(res, zodPatterns.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern(res, zodPatterns.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern(res, zodPatterns.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod": addPattern(res, zodPatterns.base64, check.message, refs);
			}
			break;
		case "nanoid": addPattern(res, zodPatterns.nanoid, check.message, refs);
	}
	return res;
}
function escapeLiteralCheckValue(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat(schema, value, message, refs) {
	var _a3;
	if (schema.format || ((_a3 = schema.anyOf) == null ? void 0 : _a3.some((x) => x.format))) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else schema.format = value;
}
function addPattern(schema, regex, message, refs) {
	var _a3;
	if (schema.pattern || ((_a3 = schema.allOf) == null ? void 0 : _a3.some((x) => x.pattern))) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else schema.pattern = stringifyRegExpWithFlags(regex, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
	var _a3;
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && ((_a3 = source[i + 2]) == null ? void 0 : _a3.match(/[a-z]/))) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch (e) {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef(def, refs) {
	var _a3, _b3, _c, _d, _e, _f;
	const schema = {
		type: "object",
		additionalProperties: (_a3 = parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		})) != null ? _a3 : refs.allowedAdditionalProperties
	};
	if (((_b3 = def.keyType) == null ? void 0 : _b3._def.typeName) === "ZodString" && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
		const { type: _type, ...keyType } = parseStringDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === "ZodEnum") return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === "ZodBranded" && def.keyType._def.type._def.typeName === "ZodString" && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
		const { type: _type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
function parseMapDef(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef(), parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef() {
	return { not: parseAnyDef() };
}
function parseNullDef() {
	return { type: "null" };
}
var primitiveMappings = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings[def.innerType._def.typeName], "null"] };
	const base = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseObjectDef(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional(propDef);
		const parsedDef = parseDef(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional(schema) {
	try {
		return schema.isOptional();
	} catch (e) {
		return true;
	}
}
var parseOptionalDef = (def, refs) => {
	var _a3;
	if (refs.currentPath.toString() === ((_a3 = refs.propertyPath) == null ? void 0 : _a3.toString())) return parseDef(def.innerType._def, refs);
	const innerSchema = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef(def.out._def, refs);
	const inputSchema = parseDef(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [inputSchema, parseDef(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			inputSchema ? "1" : "0"
		]
	})].filter((schema) => schema !== void 0) };
};
function parsePromiseDef(def, refs) {
	return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef() {
	return { not: parseAnyDef() };
}
function parseUnknownDef() {
	return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
	switch (typeName) {
		case "ZodString": return parseStringDef(def, refs);
		case "ZodNumber": return parseNumberDef(def);
		case "ZodObject": return parseObjectDef(def, refs);
		case "ZodBigInt": return parseBigintDef(def);
		case "ZodBoolean": return parseBooleanDef();
		case "ZodDate": return parseDateDef(def, refs);
		case "ZodUndefined": return parseUndefinedDef();
		case "ZodNull": return parseNullDef();
		case "ZodArray": return parseArrayDef(def, refs);
		case "ZodUnion":
		case "ZodDiscriminatedUnion": return parseUnionDef(def, refs);
		case "ZodIntersection": return parseIntersectionDef(def, refs);
		case "ZodTuple": return parseTupleDef(def, refs);
		case "ZodRecord": return parseRecordDef(def, refs);
		case "ZodLiteral": return parseLiteralDef(def);
		case "ZodEnum": return parseEnumDef(def);
		case "ZodNativeEnum": return parseNativeEnumDef(def);
		case "ZodNullable": return parseNullableDef(def, refs);
		case "ZodOptional": return parseOptionalDef(def, refs);
		case "ZodMap": return parseMapDef(def, refs);
		case "ZodSet": return parseSetDef(def, refs);
		case "ZodLazy": return () => def.getter()._def;
		case "ZodPromise": return parsePromiseDef(def, refs);
		case "ZodNaN":
		case "ZodNever": return parseNeverDef();
		case "ZodEffects": return parseEffectsDef(def, refs);
		case "ZodAny": return parseAnyDef();
		case "ZodUnknown": return parseUnknownDef();
		case "ZodDefault": return parseDefaultDef(def, refs);
		case "ZodBranded": return parseBrandedDef(def, refs);
		case "ZodReadonly": return parseReadonlyDef(def, refs);
		case "ZodCatch": return parseCatchDef(def, refs);
		case "ZodPipeline": return parsePipelineDef(def, refs);
		case "ZodFunction":
		case "ZodVoid":
		case "ZodSymbol": return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
	var _a3;
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = (_a3 = refs.override) == null ? void 0 : _a3.call(refs, def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
	}
};
var addMeta = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs = (options) => {
	const _options = getDefaultOptions(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name3, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name3
			],
			jsonSchema: void 0
		}]))
	};
};
var zod3ToJsonSchema = (schema, options) => {
	var _a3;
	const refs = getRefs(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name4, schema2]) => {
		var _a4;
		return {
			...acc,
			[name4]: (_a4 = parseDef(schema2._def, {
				...refs,
				currentPath: [
					...refs.basePath,
					refs.definitionPath,
					name4
				]
			}, true)) != null ? _a4 : parseAnyDef()
		};
	}, {}) : void 0;
	const name3 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
	const main = (_a3 = parseDef(schema._def, name3 === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name3
		]
	}, false)) != null ? _a3 : parseAnyDef();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name3 === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name3
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name3]: main
		}
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
	let schema;
	return () => {
		if (schema == null) schema = createSchema();
		return schema;
	};
}
function jsonSchema(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema(value) {
	return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
	return schema == null ? jsonSchema({
		type: "object",
		properties: {},
		additionalProperties: false
	}) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
	return jsonSchema(() => {
		if (!hasStandardJsonSchema(standardSchema2)) throw new Error(`Standard schema vendor '${standardSchema2["~standard"].vendor}' does not support JSON Schema conversion.`);
		return addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" }));
	}, { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError({
				value,
				cause: result.issues
			})
		};
	} });
}
function hasStandardJsonSchema(schema) {
	return schema["~standard"].jsonSchema != null;
}
function zod3Schema(zodSchema2, options) {
	var _a3;
	const useReferences = (_a3 = options == null ? void 0 : options.useReferences) != null ? _a3 : false;
	return jsonSchema(() => zod3ToJsonSchema(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema(zodSchema2, options) {
	var _a3;
	const useReferences = (_a3 = options == null ? void 0 : options.useReferences) != null ? _a3 : false;
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
	if (isZod4Schema(zodSchema2)) return zod4Schema(zodSchema2, options);
	else return zod3Schema(zodSchema2, options);
}
async function validateTypes({ value, schema, context }) {
	const result = await safeValidateTypes({
		value,
		schema,
		context
	});
	if (!result.success) throw TypeValidationError.wrap({
		value,
		cause: result.error,
		context
	});
	return result.value;
}
async function safeValidateTypes({ value, schema, context }) {
	const actualSchema = asSchema(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: result.error,
				context
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: error,
				context
			}),
			rawValue: value
		};
	}
}
async function parseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return value;
		return await validateTypes({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) throw error;
		throw new JSONParseError({
			text,
			cause: error
		});
	}
}
async function safeParseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError.isInstance(error) ? error : new JSONParseError({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function parseJsonEventStream({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON({
			text: data,
			schema
		}));
	} }));
}
async function parseProviderOptions({ provider, providerOptions, schema }) {
	if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) return;
	const parsedProviderOptions = await safeValidateTypes({
		value: providerOptions[provider],
		schema
	});
	if (!parsedProviderOptions.success) throw new InvalidArgumentError({
		argument: "providerOptions",
		message: `invalid ${provider} provider options`,
		cause: parsedProviderOptions.error
	});
	return parsedProviderOptions.value;
}
var getOriginalFetch3 = () => globalThis.fetch;
function escapeMultipartHeaderValue(value) {
	return value.replace(/[\r\n]/g, "").replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function createMultipartBody(parts, boundary) {
	const encoder = new TextEncoder();
	let disposed = false;
	let activeReader;
	const enteredStreams = /* @__PURE__ */ new Set();
	async function* emitParts() {
		var _a3, _b3;
		for (const part of parts) {
			if (disposed) return;
			const disposition = `--${boundary}\r
Content-Disposition: form-data; name="${escapeMultipartHeaderValue(part.name)}"`;
			if (part.type === "field") {
				yield encoder.encode(`${disposition}\r
\r
${part.value}\r
`);
				continue;
			}
			const filenameParameter = `; filename="${escapeMultipartHeaderValue((_a3 = part.filename) != null ? _a3 : "blob")}"`;
			const mediaType = ((_b3 = part.mediaType) != null ? _b3 : "application/octet-stream").replace(/[\r\n]/g, "");
			yield encoder.encode(`${disposition}${filenameParameter}\r
Content-Type: ${mediaType}\r
\r
`);
			if (part.content instanceof Uint8Array) yield part.content;
			else {
				const reader = part.content.getReader();
				activeReader = reader;
				enteredStreams.add(part.content);
				let finished = false;
				try {
					while (true) {
						const { done, value } = await reader.read();
						if (done || disposed) {
							finished = done;
							break;
						}
						yield value;
					}
				} finally {
					activeReader = void 0;
					if (!finished) await reader.cancel().catch(() => {});
					reader.releaseLock();
				}
				if (disposed) return;
			}
			yield encoder.encode("\r\n");
		}
		yield encoder.encode(`--${boundary}--\r
`);
	}
	return {
		stream: convertAsyncIteratorToReadableStream(emitParts()),
		async dispose(reason) {
			if (disposed) return;
			disposed = true;
			const reader = activeReader;
			if (reader != null) await reader.cancel(reason).catch(() => {});
			for (const part of parts) if (part.type === "file" && !(part.content instanceof Uint8Array) && !enteredStreams.has(part.content)) await part.content.cancel(reason).catch(() => {});
		}
	};
}
var postMultipartStreamToApi = async ({ url, headers = {}, parts, failedResponseHandler, successfulResponseHandler, abortSignal, fetch = getOriginalFetch3() }) => {
	const boundary = `ai-sdk-multipart-${generateId()}`;
	const requestBodyValues = Object.fromEntries(parts.map((part) => {
		var _a3;
		return [part.name, part.type === "field" ? part.value : `<file:${(_a3 = part.filename) != null ? _a3 : part.name}>`];
	}));
	const body = createMultipartBody(parts, boundary);
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: withUserAgentSuffix({
				...headers,
				"Content-Type": `multipart/form-data; boundary=${boundary}`
			}, `ai-sdk/provider-utils/${VERSION$1}`, getRuntimeEnvironmentUserAgent()),
			body: body.stream,
			duplex: "half",
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues
			});
		}
	} catch (error) {
		await body.dispose(error);
		throw handleFetchError({
			error,
			url,
			requestBodyValues
		});
	}
};
var getOriginalFetch4 = () => globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch }) => await postToApi({
	url,
	headers: {
		"Content-Type": "application/json",
		...headers
	},
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch
});
var postFormDataToApi = async ({ url, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch }) => await postToApi({
	url,
	headers,
	body: {
		content: formData,
		values: Object.fromEntries(formData.entries())
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch
});
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch4() }) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$1}`, getRuntimeEnvironmentUserAgent()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool(tool2) {
	return tool2;
}
function createProviderDefinedToolFactory({ id, inputSchema }) {
	return ({ execute, outputSchema, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		isProviderExecuted: false,
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable
	});
}
function createProviderDefinedToolFactoryWithOutputSchema({ id, inputSchema, outputSchema }) {
	return ({ execute, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		isProviderExecuted: false,
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable
	});
}
function createProviderExecutedToolFactory({ id, inputSchema, outputSchema, supportsDeferredResults }) {
	return ({ onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		isProviderExecuted: true,
		id,
		args,
		inputSchema,
		outputSchema,
		onInputStart,
		onInputDelta,
		onInputAvailable,
		supportsDeferredResults
	});
}
function resolveFullMediaType({ part }) {
	if (isFullMediaType(part.mediaType)) return part.mediaType;
	if (part.data.type === "data") {
		const detected = detectMediaType({
			data: part.data.data,
			topLevelType: getTopLevelMediaType(part.mediaType)
		});
		if (detected) return detected;
		throw new UnsupportedFunctionalityError({ functionality: `file of media type "${part.mediaType}" must specify subtype since it could not be auto-detected` });
	}
	throw new UnsupportedFunctionalityError({ functionality: `file of media type "${part.mediaType}" must specify subtype since it is not passed as inline bytes` });
}
function resolveProviderReference({ reference, provider }) {
	const id = reference[provider];
	if (id != null) return id;
	throw new NoSuchProviderReferenceError({
		provider,
		reference
	});
}
var textDecoder2 = new TextDecoder();
function wrapResponseBodyStream({ stream, url, requestBodyValues, statusCode, responseHeaders }) {
	const reader = stream.getReader();
	let readerReleased = false;
	const releaseReader = () => {
		if (!readerReleased) {
			reader.releaseLock();
			readerReleased = true;
		}
	};
	return new ReadableStream({
		async pull(controller) {
			try {
				const { done, value } = await reader.read();
				if (done) {
					releaseReader();
					controller.close();
				} else controller.enqueue(value);
			} catch (error) {
				releaseReader();
				if (isAbortError(error)) {
					controller.error(error);
					return;
				}
				controller.error(handleFetchError({
					error: new APICallError({
						message: "Failed to process successful response",
						cause: error,
						statusCode,
						url,
						responseHeaders,
						requestBodyValues
					}),
					url,
					requestBodyValues
				}));
			}
		},
		async cancel(reason) {
			try {
				await reader.cancel(reason);
			} finally {
				releaseReader();
			}
		}
	});
}
async function readResponseBodyAsText({ response, url }) {
	return textDecoder2.decode(await readResponseWithSizeLimit({
		response,
		url
	}));
}
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await readResponseBodyAsText({
		response,
		url
	});
	const responseHeaders = extractResponseHeaders(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable == null ? void 0 : isRetryable(response)
		})
	};
	try {
		const parsedError = await parseJSON({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
			})
		};
	} catch (e) {
		return {
			responseHeaders,
			value: new APICallError({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response)
			})
		};
	}
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response, url, requestBodyValues }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonEventStream({
			stream: wrapResponseBodyStream({
				stream: response.body,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders
			}),
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await readResponseBodyAsText({
		response,
		url
	});
	const parsedResult = await safeParseJSON({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders(response);
	if (!parsedResult.success) throw new APICallError({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
var createJsonLinesResponseHandler = (responseSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonLines({
			stream: response.body,
			schema: responseSchema
		})
	};
};
async function* parseJsonLines({ stream, schema }) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	let finished = false;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) {
				finished = true;
				buffer += decoder.decode();
				break;
			}
			buffer += decoder.decode(value, { stream: true });
			let lineEnd = buffer.indexOf("\n");
			while (lineEnd !== -1) {
				const line = buffer.slice(0, lineEnd).replace(/\r$/, "");
				buffer = buffer.slice(lineEnd + 1);
				if (line.trim().length > 0) yield await parseJSON({
					text: line,
					schema
				});
				lineEnd = buffer.indexOf("\n");
			}
		}
		const finalLine = buffer.replace(/\r$/, "");
		if (finalLine.trim().length > 0) yield await parseJSON({
			text: finalLine,
			schema
		});
	} finally {
		if (!finished) await reader.cancel().catch(() => {});
		reader.releaseLock();
	}
}
var createBinaryResponseHandler = () => async ({ response, url, requestBodyValues }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (!response.body) throw new APICallError({
		message: "Response body is empty",
		url,
		requestBodyValues,
		statusCode: response.status,
		responseHeaders,
		responseBody: void 0
	});
	try {
		const buffer = await response.arrayBuffer();
		return {
			responseHeaders,
			value: new Uint8Array(buffer)
		};
	} catch (error) {
		throw new APICallError({
			message: "Failed to read response as array buffer",
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody: void 0,
			cause: error
		});
	}
};
var createBinaryStreamResponseHandler = () => async ({ response, url, requestBodyValues }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: wrapResponseBodyStream({
			stream: response.body,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders
		})
	};
};
function isJSONSerializable(value) {
	if (value === null || value === void 0) return true;
	const type = typeof value;
	if (type === "string" || type === "number" || type === "boolean") return true;
	if (type === "function" || type === "symbol" || type === "bigint") return false;
	if (Array.isArray(value)) return value.every(isJSONSerializable);
	if (Object.getPrototypeOf(value) === Object.prototype) return Object.values(value).every(isJSONSerializable);
	return false;
}
var name2 = "AI_SerializationError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol2 = Symbol.for(marker3);
var _a2;
var _b2;
var SerializationError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
	constructor({ message = "Failed to serialize value.", cause } = {}) {
		super({
			name: name2,
			message,
			cause
		});
		this[_a2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3);
	}
};
function serializeModelOptions(options) {
	const serializableConfig = {};
	for (const [key, value] of Object.entries(options.config)) if (key === "headers") {
		const resolvedHeaders = resolveSync(value);
		if (isJSONSerializable(resolvedHeaders)) serializableConfig[key] = resolvedHeaders;
	} else if (isJSONSerializable(value)) serializableConfig[key] = value;
	return {
		modelId: options.modelId,
		config: serializableConfig
	};
}
function resolveSync(value) {
	let next = value;
	if (typeof value === "function") next = value();
	if (next instanceof Promise) throw new SerializationError({ message: "Cannot serialize asynchronous model options." });
	return next;
}
var StreamingToolCallTracker = class {
	constructor(controller, options = {}) {
		this.toolCalls = /* @__PURE__ */ new Set();
		this.toolCallsById = /* @__PURE__ */ new Map();
		this.toolCallsByIndex = /* @__PURE__ */ new Map();
		var _a3, _b3;
		this.controller = controller;
		this._generateId = (_a3 = options.generateId) != null ? _a3 : generateId;
		this.typeValidation = (_b3 = options.typeValidation) != null ? _b3 : "none";
		this.extractMetadata = options.extractMetadata;
		this.buildToolCallProviderMetadata = options.buildToolCallProviderMetadata;
	}
	/**
	* Process a tool call delta from a streaming response chunk.
	* Emits tool-input-start, tool-input-delta, tool-input-end, and tool-call
	* events as appropriate.
	*/
	processDelta(toolCallDelta) {
		const { id, index } = toolCallDelta;
		let toolCall = id != null && id.length > 0 ? this.toolCallsById.get(id) : index != null ? this.toolCallsByIndex.get(index) : this.latestToolCall;
		if (toolCall == null) toolCall = this.processNewToolCall(toolCallDelta);
		else this.processExistingToolCall(toolCall, toolCallDelta);
		if (index != null) this.toolCallsByIndex.set(index, toolCall);
		this.latestToolCall = toolCall;
	}
	/**
	* Finalize any unfinished tool calls. Should be called during the stream's
	* flush handler to ensure all tool calls are properly completed.
	*/
	flush() {
		for (const toolCall of this.toolCalls) if (!toolCall.hasFinished) this.finishToolCall(toolCall);
	}
	processNewToolCall(toolCallDelta) {
		var _a3, _b3, _c;
		if (this.typeValidation === "required") {
			if (toolCallDelta.type !== "function") throw new InvalidResponseDataError({
				data: toolCallDelta,
				message: `Expected 'function' type.`
			});
		} else if (this.typeValidation === "if-present") {
			if (toolCallDelta.type != null && toolCallDelta.type !== "function") throw new InvalidResponseDataError({
				data: toolCallDelta,
				message: `Expected 'function' type.`
			});
		}
		if (toolCallDelta.id == null) throw new InvalidResponseDataError({
			data: toolCallDelta,
			message: `Expected 'id' to be a string.`
		});
		if (((_a3 = toolCallDelta.function) == null ? void 0 : _a3.name) == null) throw new InvalidResponseDataError({
			data: toolCallDelta,
			message: `Expected 'function.name' to be a string.`
		});
		this.controller.enqueue({
			type: "tool-input-start",
			id: toolCallDelta.id,
			toolName: toolCallDelta.function.name
		});
		const metadata = (_b3 = this.extractMetadata) == null ? void 0 : _b3.call(this, toolCallDelta);
		const toolCall = {
			id: toolCallDelta.id,
			type: "function",
			function: {
				name: toolCallDelta.function.name,
				arguments: (_c = toolCallDelta.function.arguments) != null ? _c : ""
			},
			hasFinished: false,
			metadata
		};
		this.toolCalls.add(toolCall);
		if (toolCall.id.length > 0) this.toolCallsById.set(toolCall.id, toolCall);
		if (toolCall.function.arguments.length > 0) this.controller.enqueue({
			type: "tool-input-delta",
			id: toolCall.id,
			delta: toolCall.function.arguments
		});
		return toolCall;
	}
	processExistingToolCall(toolCall, toolCallDelta) {
		var _a3;
		if (toolCall.hasFinished) return;
		if (((_a3 = toolCallDelta.function) == null ? void 0 : _a3.arguments) != null) {
			toolCall.function.arguments += toolCallDelta.function.arguments;
			this.controller.enqueue({
				type: "tool-input-delta",
				id: toolCall.id,
				delta: toolCallDelta.function.arguments
			});
		}
	}
	finishToolCall(toolCall) {
		var _a3, _b3;
		this.controller.enqueue({
			type: "tool-input-end",
			id: toolCall.id
		});
		const providerMetadata = (_a3 = this.buildToolCallProviderMetadata) == null ? void 0 : _a3.call(this, toolCall.metadata);
		this.controller.enqueue({
			type: "tool-call",
			toolCallId: (_b3 = toolCall.id) != null ? _b3 : this._generateId(),
			toolName: toolCall.function.name,
			input: toolCall.function.arguments,
			...providerMetadata ? { providerMetadata } : {}
		});
		toolCall.hasFinished = true;
	}
};
function validateBaseURL(baseURL) {
	if ((baseURL == null ? void 0 : baseURL.trim()) === "") throw new InvalidArgumentError({
		argument: "baseURL",
		message: "baseURL must be a non-empty string."
	});
	return baseURL;
}
function withoutTrailingSlash(url) {
	return url == null ? void 0 : url.replace(/\/$/, "");
}
function toolCaller(tool2, definition) {
	return Object.defineProperty({ ...tool2 }, "experimental_toolCaller", { value: definition });
}
//#endregion
//#region node_modules/@ai-sdk/openai/dist/index.js
var openaiErrorDataSchema = object({ error: object({
	message: string(),
	type: string().nullish(),
	param: any().nullish(),
	code: union([string(), number$1()]).nullish()
}) });
var openaiFailedResponseHandler = createJsonErrorResponseHandler({
	errorSchema: openaiErrorDataSchema,
	errorToMessage: (data) => data.error.message
});
function getOpenAILanguageModelCapabilities(modelId) {
	var _a2, _b, _c, _d, _e;
	const oSeriesVersion = getOSeriesVersion(modelId);
	const gptVersion = getGptVersion(modelId);
	const isGptChatModel = (gptVersion == null ? void 0 : gptVersion.minor) == null && ((_b = (_a2 = gptVersion == null ? void 0 : gptVersion.variant) == null ? void 0 : _a2.startsWith("chat")) != null ? _b : false);
	const isGptNanoModel = (_d = (_c = gptVersion == null ? void 0 : gptVersion.variant) == null ? void 0 : _c.startsWith("nano")) != null ? _d : false;
	const isGpt6OrLaterModel = gptVersion != null && gptVersion.major >= 6;
	const supportsFlexProcessing = oSeriesVersion != null && oSeriesVersion >= 3 || gptVersion != null && gptVersion.major >= 5 && !isGptChatModel;
	const supportsPriorityProcessing = modelId.startsWith("gpt-4") || gptVersion != null && gptVersion.major >= 5 && !isGptNanoModel && !isGptChatModel || oSeriesVersion != null && oSeriesVersion >= 3;
	const isReasoningModel = oSeriesVersion != null || gptVersion != null && gptVersion.major >= 5 && !isGptChatModel;
	const supportsNonReasoningParameters = !isGpt6OrLaterModel && gptVersion != null && (gptVersion.major > 5 || gptVersion.major === 5 && ((_e = gptVersion.minor) != null ? _e : 0) >= 1);
	return {
		supportsFlexProcessing,
		supportsPriorityProcessing,
		supportsConfigurationUpdate: isGpt6OrLaterModel,
		supportsAsyncToolCalling: isGpt6OrLaterModel,
		supportedReasoningEfforts: isGpt6OrLaterModel ? [
			"low",
			"medium",
			"high",
			"xhigh",
			"max"
		] : void 0,
		isReasoningModel,
		systemMessageMode: isReasoningModel ? "developer" : "system",
		supportsNonReasoningParameters
	};
}
function getOSeriesVersion(modelId) {
	const match = /^o(\d+)(?:-|$)/.exec(modelId);
	return match == null ? void 0 : Number(match[1]);
}
function getGptVersion(modelId) {
	const match = /^gpt-(\d+)(?:\.(\d+))?(?:-(.+))?$/.exec(modelId);
	if (match == null) return;
	return {
		major: Number(match[1]),
		minor: match[2] == null ? void 0 : Number(match[2]),
		variant: match[3]
	};
}
function createOpenAIProviderStreamError(frame) {
	var _a2, _b;
	const streamError = parseStreamError(frame);
	if (streamError == null) return;
	const statusCode = getStatusCode(streamError);
	return createProviderStreamError({
		message: streamError.message,
		type: (_a2 = streamError.type) != null ? _a2 : void 0,
		code: (_b = streamError.code) != null ? _b : void 0,
		statusCode,
		isRetryable: isRetryableStreamError(streamError, statusCode),
		data: frame
	});
}
async function throwIfOpenAIStreamErrorBeforeOutput({ stream, getError, isOutputChunk, isAcceptedChunk, acceptedGraceMs = 50, url, requestBodyValues, responseHeaders }) {
	const [streamForEarlyError, streamForConsumer] = stream.tee();
	const reader = streamForEarlyError.getReader();
	let drainAfterError = false;
	try {
		let accepted = false;
		while (true) {
			let result;
			if (accepted) {
				const raced = await raceWithTimeout(reader.read(), acceptedGraceMs);
				if (raced.timedOut) return streamForConsumer;
				result = raced.value;
			} else result = await reader.read();
			if (result.done) return streamForConsumer;
			const chunk = result.value;
			if (!chunk.success) return streamForConsumer;
			const errorFrame = getError(chunk.value);
			if (errorFrame != null) {
				drainAfterError = true;
				drainReader(reader).catch(() => {});
				drainReader(streamForConsumer.getReader()).catch(() => {});
				throw createOpenAIStreamError({
					frame: errorFrame,
					url,
					requestBodyValues,
					responseHeaders
				});
			}
			if (isOutputChunk(chunk.value)) return streamForConsumer;
			if (!accepted && (isAcceptedChunk == null ? void 0 : isAcceptedChunk(chunk.value)) === true) accepted = true;
		}
	} finally {
		if (!drainAfterError) {
			reader.cancel().catch(() => {});
			reader.releaseLock();
		}
	}
}
async function drainReader(reader) {
	try {
		while (!(await reader.read()).done);
	} catch (e) {} finally {
		reader.releaseLock();
	}
}
async function raceWithTimeout(promise, timeoutMs) {
	let timer;
	const wrapped = promise.then((value) => ({
		timedOut: false,
		value
	}));
	try {
		const raced = await Promise.race([wrapped, new Promise((resolve) => {
			timer = setTimeout(() => resolve({ timedOut: true }), timeoutMs);
		})]);
		if (raced.timedOut) wrapped.catch(() => {});
		return raced;
	} finally {
		clearTimeout(timer);
	}
}
function createOpenAIStreamError({ frame, url, requestBodyValues, responseHeaders }) {
	var _a2, _b;
	const streamError = createOpenAIProviderStreamError(frame);
	return new APICallError({
		message: (_a2 = streamError == null ? void 0 : streamError.message) != null ? _a2 : "OpenAI stream failed before any output was generated",
		url,
		requestBodyValues,
		statusCode: (_b = streamError == null ? void 0 : streamError.statusCode) != null ? _b : 500,
		responseHeaders,
		responseBody: JSON.stringify(frame),
		data: frame,
		isRetryable: streamError == null ? void 0 : streamError.isRetryable
	});
}
function parseStreamError(frame) {
	var _a2;
	const value = asRecord(frame);
	if (value == null) return;
	if (value.type === "response.failed") {
		const response = asRecord(value.response);
		const responseError = asRecord(response == null ? void 0 : response.error);
		return typeof (responseError == null ? void 0 : responseError.message) === "string" ? {
			message: responseError.message,
			code: getStringOrNumber(responseError.code),
			type: "response.failed"
		} : void 0;
	}
	const error = (_a2 = asRecord(value.error)) != null ? _a2 : value;
	return typeof error.message === "string" && (asRecord(value.error) != null || typeof error.type === "string" || "code" in error || "param" in error) ? {
		message: error.message,
		code: getStringOrNumber(error.code),
		type: typeof error.type === "string" ? error.type : void 0
	} : void 0;
}
function getStatusCode(error) {
	const explicitStatusCode = getHttpStatusCode(error.code);
	if (explicitStatusCode != null) return explicitStatusCode;
	const discriminator = [error.code, error.type].filter((value) => typeof value === "string" || typeof value === "number").join(" ").toLowerCase();
	if (["insufficient_quota", "rate_limit"].some((term) => discriminator.includes(term))) return 429;
	if (discriminator.includes("authentication")) return 401;
	if (discriminator.includes("permission")) return 403;
	if (discriminator.includes("not_found")) return 404;
	if ([
		"invalid",
		"bad_request",
		"context_length"
	].some((term) => discriminator.includes(term))) return 400;
	if (discriminator.includes("overload")) return 503;
	if (discriminator.includes("timeout")) return 504;
	return 500;
}
function asRecord(value) {
	return typeof value === "object" && value != null ? value : void 0;
}
function getStringOrNumber(value) {
	return typeof value === "string" || typeof value === "number" ? value : void 0;
}
function isHttpErrorStatusCode(value) {
	return Number.isInteger(value) && value >= 400 && value <= 599;
}
function getHttpStatusCode(value) {
	const statusCode = typeof value === "string" && /^\d{3}$/.test(value) ? Number(value) : value;
	return typeof statusCode === "number" && isHttpErrorStatusCode(statusCode) ? statusCode : void 0;
}
function isRetryableStatusCode(statusCode) {
	return statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500;
}
function isRetryableStreamError(error, statusCode) {
	if (error.code === "insufficient_quota" || error.type === "insufficient_quota") return false;
	return isRetryableStatusCode(statusCode);
}
function convertOpenAIChatUsage(usage) {
	var _a2, _b, _c, _d, _e, _f, _g, _h;
	if (usage == null) return createNullLanguageModelUsage();
	const promptTokens = (_a2 = usage.prompt_tokens) != null ? _a2 : 0;
	const completionTokens = (_b = usage.completion_tokens) != null ? _b : 0;
	const cachedTokens = (_d = (_c = usage.prompt_tokens_details) == null ? void 0 : _c.cached_tokens) != null ? _d : 0;
	const cacheWriteTokens = (_f = (_e = usage.prompt_tokens_details) == null ? void 0 : _e.cache_write_tokens) != null ? _f : void 0;
	const reasoningTokens = (_h = (_g = usage.completion_tokens_details) == null ? void 0 : _g.reasoning_tokens) != null ? _h : 0;
	return {
		inputTokens: {
			total: promptTokens,
			noCache: promptTokens - cachedTokens - (cacheWriteTokens != null ? cacheWriteTokens : 0),
			cacheRead: cachedTokens,
			cacheWrite: cacheWriteTokens
		},
		outputTokens: {
			total: completionTokens,
			text: Math.max(0, completionTokens - reasoningTokens),
			reasoning: reasoningTokens
		},
		raw: usage
	};
}
function serializeToolCallArguments(input) {
	return JSON.stringify(typeof input === "object" && input !== null && !Array.isArray(input) ? input : {});
}
function getPromptCacheBreakpoint(providerOptions) {
	var _a2;
	return (_a2 = providerOptions == null ? void 0 : providerOptions.openai) == null ? void 0 : _a2.promptCacheBreakpoint;
}
function convertToOpenAIChatMessages({ prompt, systemMessageMode = "system" }) {
	var _a2, _b;
	const messages = [];
	const warnings = [];
	for (const { role, content, providerOptions } of prompt) switch (role) {
		case "system":
			switch (systemMessageMode) {
				case "system": {
					const promptCacheBreakpoint = getPromptCacheBreakpoint(providerOptions);
					messages.push({
						role: "system",
						content: promptCacheBreakpoint == null ? content : [{
							type: "text",
							text: content,
							prompt_cache_breakpoint: promptCacheBreakpoint
						}]
					});
					break;
				}
				case "developer": {
					const promptCacheBreakpoint = getPromptCacheBreakpoint(providerOptions);
					messages.push({
						role: "developer",
						content: promptCacheBreakpoint == null ? content : [{
							type: "text",
							text: content,
							prompt_cache_breakpoint: promptCacheBreakpoint
						}]
					});
					break;
				}
				case "remove":
					warnings.push({
						type: "other",
						message: "system messages are removed for this model"
					});
					break;
				default: throw new Error(`Unsupported system message mode: ${systemMessageMode}`);
			}
			break;
		case "user":
			if (content.length === 1 && content[0].type === "text" && getPromptCacheBreakpoint(content[0].providerOptions) == null) {
				messages.push({
					role: "user",
					content: content[0].text
				});
				break;
			}
			messages.push({
				role: "user",
				content: content.map((part, index) => {
					var _a3, _b2, _c;
					switch (part.type) {
						case "text": {
							const promptCacheBreakpoint = getPromptCacheBreakpoint(part.providerOptions);
							return {
								type: "text",
								text: part.text,
								...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
							};
						}
						case "file": {
							const promptCacheBreakpoint = getPromptCacheBreakpoint(part.providerOptions);
							switch (part.data.type) {
								case "reference": return {
									type: "file",
									file: { file_id: resolveProviderReference({
										reference: part.data.reference,
										provider: "openai"
									}) },
									...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
								};
								case "text": throw new UnsupportedFunctionalityError({ functionality: "text file parts" });
								case "url":
								case "data": {
									const topLevel = getTopLevelMediaType(part.mediaType);
									if (topLevel === "image") return {
										type: "image_url",
										image_url: {
											url: part.data.type === "url" ? part.data.url.toString() : `data:${resolveFullMediaType({ part })};base64,${convertToBase64(part.data.data)}`,
											detail: (_b2 = (_a3 = part.providerOptions) == null ? void 0 : _a3.openai) == null ? void 0 : _b2.imageDetail
										},
										...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
									};
									else if (topLevel === "audio") {
										if (part.data.type === "url") throw new UnsupportedFunctionalityError({ functionality: "audio file parts with URLs" });
										const fullMediaType = resolveFullMediaType({ part });
										switch (fullMediaType) {
											case "audio/wav": return {
												type: "input_audio",
												input_audio: {
													data: convertToBase64(part.data.data),
													format: "wav"
												},
												...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
											};
											case "audio/mp3":
											case "audio/mpeg": return {
												type: "input_audio",
												input_audio: {
													data: convertToBase64(part.data.data),
													format: "mp3"
												},
												...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
											};
											default: throw new UnsupportedFunctionalityError({ functionality: `audio content parts with media type ${fullMediaType}` });
										}
									}
									{
										const fullMediaType = resolveFullMediaType({ part });
										if (fullMediaType !== "application/pdf") throw new UnsupportedFunctionalityError({ functionality: `file part media type ${fullMediaType}` });
										if (part.data.type === "url") throw new UnsupportedFunctionalityError({ functionality: "PDF file parts with URLs" });
										return {
											type: "file",
											file: {
												filename: (_c = part.filename) != null ? _c : `part-${index}.pdf`,
												file_data: `data:application/pdf;base64,${convertToBase64(part.data.data)}`
											},
											...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
										};
									}
								}
							}
						}
					}
				})
			});
			break;
		case "assistant": {
			let text = "";
			const textParts = [];
			let hasPromptCacheBreakpoint = false;
			const toolCalls = [];
			for (const part of content) switch (part.type) {
				case "text": {
					const promptCacheBreakpoint = getPromptCacheBreakpoint(part.providerOptions);
					text += part.text;
					textParts.push({
						type: "text",
						text: part.text,
						...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
					});
					hasPromptCacheBreakpoint || (hasPromptCacheBreakpoint = promptCacheBreakpoint != null);
					break;
				}
				case "tool-call": toolCalls.push({
					id: part.toolCallId,
					type: "function",
					function: {
						name: part.toolName,
						arguments: serializeToolCallArguments(part.input)
					}
				});
			}
			messages.push({
				role: "assistant",
				content: hasPromptCacheBreakpoint ? textParts : toolCalls.length > 0 ? text || null : text,
				tool_calls: toolCalls.length > 0 ? toolCalls : void 0
			});
			break;
		}
		case "tool":
			for (const toolResponse of content) {
				if (toolResponse.type === "tool-approval-response") continue;
				const output = toolResponse.output;
				const promptCacheBreakpoint = (_a2 = output.type === "content" ? output.value.map((part) => getPromptCacheBreakpoint(part.providerOptions)).find((breakpoint) => breakpoint != null) : getPromptCacheBreakpoint(output.providerOptions)) != null ? _a2 : getPromptCacheBreakpoint(toolResponse.providerOptions);
				let contentValue;
				switch (output.type) {
					case "text":
					case "error-text":
						contentValue = output.value;
						break;
					case "execution-denied":
						contentValue = (_b = output.reason) != null ? _b : "Tool call execution denied.";
						break;
					case "content":
					case "json":
					case "error-json": contentValue = JSON.stringify(output.value);
				}
				messages.push({
					role: "tool",
					tool_call_id: toolResponse.toolCallId,
					content: promptCacheBreakpoint == null ? contentValue : [{
						type: "text",
						text: contentValue,
						prompt_cache_breakpoint: promptCacheBreakpoint
					}]
				});
			}
			break;
		default: throw new Error(`Unsupported role: ${role}`);
	}
	return {
		messages,
		warnings
	};
}
function getResponseMetadata({ id, model, created }) {
	return createLanguageModelResponseMetadata({
		id,
		model,
		created: created || void 0
	});
}
function mapOpenAIFinishReason(finishReason) {
	switch (finishReason) {
		case "stop": return "stop";
		case "length": return "length";
		case "content_filter": return "content-filter";
		case "function_call":
		case "tool_calls": return "tool-calls";
		default: return "other";
	}
}
var openaiChatResponseSchema = lazySchema(() => zodSchema(object({
	id: string().nullish(),
	created: number$1().nullish(),
	model: string().nullish(),
	choices: array(object({
		message: object({
			role: literal("assistant").nullish(),
			content: string().nullish(),
			tool_calls: array(object({
				id: string().nullish(),
				type: literal("function"),
				function: object({
					name: string(),
					arguments: string()
				})
			})).nullish(),
			annotations: array(object({
				type: literal("url_citation"),
				url_citation: object({
					start_index: number$1(),
					end_index: number$1(),
					url: string(),
					title: string()
				})
			})).nullish()
		}),
		index: number$1(),
		logprobs: object({ content: array(object({
			token: string(),
			logprob: number$1(),
			top_logprobs: array(object({
				token: string(),
				logprob: number$1()
			}))
		})).nullish() }).nullish(),
		finish_reason: string().nullish()
	})),
	usage: object({
		prompt_tokens: number$1().nullish(),
		completion_tokens: number$1().nullish(),
		total_tokens: number$1().nullish(),
		prompt_tokens_details: object({
			cached_tokens: number$1().nullish(),
			cache_write_tokens: number$1().nullish()
		}).nullish(),
		completion_tokens_details: object({
			reasoning_tokens: number$1().nullish(),
			accepted_prediction_tokens: number$1().nullish(),
			rejected_prediction_tokens: number$1().nullish()
		}).nullish()
	}).nullish()
})));
var openaiChatChunkSchema = lazySchema(() => zodSchema(union([object({
	id: string().nullish(),
	created: number$1().nullish(),
	model: string().nullish(),
	choices: array(object({
		delta: object({
			role: _enum(["assistant"]).nullish(),
			content: string().nullish(),
			tool_calls: array(object({
				index: number$1(),
				id: string().nullish(),
				type: literal("function").nullish(),
				function: object({
					name: string().nullish(),
					arguments: string().nullish()
				})
			})).nullish(),
			annotations: array(object({
				type: literal("url_citation"),
				url_citation: object({
					start_index: number$1(),
					end_index: number$1(),
					url: string(),
					title: string()
				})
			})).nullish()
		}).nullish(),
		logprobs: object({ content: array(object({
			token: string(),
			logprob: number$1(),
			top_logprobs: array(object({
				token: string(),
				logprob: number$1()
			}))
		})).nullish() }).nullish(),
		finish_reason: string().nullish(),
		index: number$1()
	})),
	usage: object({
		prompt_tokens: number$1().nullish(),
		completion_tokens: number$1().nullish(),
		total_tokens: number$1().nullish(),
		prompt_tokens_details: object({
			cached_tokens: number$1().nullish(),
			cache_write_tokens: number$1().nullish()
		}).nullish(),
		completion_tokens_details: object({
			reasoning_tokens: number$1().nullish(),
			accepted_prediction_tokens: number$1().nullish(),
			rejected_prediction_tokens: number$1().nullish()
		}).nullish()
	}).nullish()
}), openaiErrorDataSchema])));
var openaiLanguageModelChatOptions = lazySchema(() => zodSchema(object({
	/**
	* Modify the likelihood of specified tokens appearing in the completion.
	*
	* Accepts a JSON object that maps tokens (specified by their token ID in
	* the GPT tokenizer) to an associated bias value from -100 to 100.
	*/
	logitBias: record(number(), number$1()).optional(),
	/**
	* Return the log probabilities of the tokens.
	*
	* Setting to true will return the log probabilities of the tokens that
	* were generated.
	*
	* Setting to a number will return the log probabilities of the top n
	* tokens that were generated.
	*/
	logprobs: union([boolean(), number$1()]).optional(),
	/**
	* Whether to enable parallel function calling during tool use. Default to true.
	*/
	parallelToolCalls: boolean().optional(),
	/**
	* A unique identifier representing your end-user, which can help OpenAI to
	* monitor and detect abuse.
	*/
	user: string().optional(),
	/**
	* Reasoning effort for reasoning models. Defaults to `medium`.
	*/
	reasoningEffort: _enum([
		"none",
		"minimal",
		"low",
		"medium",
		"high",
		"xhigh",
		"max"
	]).optional(),
	/**
	* Maximum number of completion tokens to generate. Useful for reasoning models.
	*/
	maxCompletionTokens: number$1().optional(),
	/**
	* Whether to enable persistence in responses API.
	*/
	store: boolean().optional(),
	/**
	* Metadata to associate with the request.
	*/
	metadata: record(string().max(64), string().max(512)).optional(),
	/**
	* Parameters for prediction mode.
	*/
	prediction: record(string(), any()).optional(),
	/**
	* Service tier for the request.
	* - 'auto': Default service tier. The request will be processed with the service tier configured in the
	*           Project settings. Unless otherwise configured, the Project will use 'default'.
	* - 'flex': 50% cheaper processing at the cost of increased latency. Only available for o3 and o4-mini models.
	* - 'priority': Higher-speed processing with predictably low latency at premium cost. Available for Enterprise customers.
	* - 'fast': OpenAI's newer name for the 'priority' tier. Interchangeable with it.
	* - 'ultrafast': Access-controlled Ultrafast processing. Only available for gpt-5.6-sol.
	* - 'default': The request will be processed with the standard pricing and performance for the selected model.
	*
	* @default 'auto'
	*/
	serviceTier: _enum([
		"auto",
		"flex",
		"priority",
		"fast",
		"ultrafast",
		"default"
	]).optional(),
	/**
	* Whether to use strict JSON schema validation.
	*
	* @default true
	*/
	strictJsonSchema: boolean().optional(),
	/**
	* Controls the verbosity of the model's responses.
	* Lower values will result in more concise responses, while higher values will result in more verbose responses.
	*/
	textVerbosity: _enum([
		"low",
		"medium",
		"high"
	]).optional(),
	/**
	* A cache key for prompt caching. Allows manual control over prompt caching behavior.
	* Useful for improving cache hit rates and working around automatic caching issues.
	*/
	promptCacheKey: string().optional(),
	/**
	* Prompt cache behavior for GPT-5.6 and later models.
	* `mode` controls whether OpenAI also places an implicit breakpoint.
	* `ttl` sets the minimum cache lifetime and currently only supports 30 minutes.
	*/
	promptCacheOptions: object({
		mode: _enum(["implicit", "explicit"]).optional(),
		ttl: literal("30m").optional()
	}).optional(),
	/**
	* The retention policy for the prompt cache.
	* - 'in_memory': Default. Standard prompt caching behavior.
	* - '24h': Extended prompt caching that keeps cached prefixes active for up to 24 hours.
	*          Available for models before GPT-5.6 that support extended caching.
	*
	* @deprecated For GPT-5.6 and later models, use `promptCacheOptions.ttl`.
	*
	* @default 'in_memory'
	*/
	promptCacheRetention: _enum(["in_memory", "24h"]).optional(),
	/**
	* A stable identifier used to help detect users of your application
	* that may be violating OpenAI's usage policies. The IDs should be a
	* string that uniquely identifies each user. We recommend hashing their
	* username or email address, in order to avoid sending us any identifying
	* information.
	*/
	safetyIdentifier: string().optional(),
	/**
	* Override the system message mode for this model.
	* - 'system': Use the 'system' role for system messages (default for most models)
	* - 'developer': Use the 'developer' role for system messages (used by reasoning models)
	* - 'remove': Remove system messages entirely
	*
	* If not specified, the mode is automatically determined based on the model.
	*/
	systemMessageMode: _enum([
		"system",
		"developer",
		"remove"
	]).optional(),
	/**
	* Force treating this model as a reasoning model.
	*
	* This is useful for "stealth" reasoning models (e.g. via a custom baseURL)
	* where the model ID is not recognized by the SDK's allowlist.
	*
	* When enabled, the SDK applies reasoning-model parameter compatibility rules
	* and defaults `systemMessageMode` to `developer` unless overridden.
	*/
	forceReasoning: boolean().optional()
})));
function normalizeOpenAIJsonSchema(schema) {
	let removedPropertyNames = false;
	return {
		schema: normalizeSchema(schema),
		warnings: removedPropertyNames ? [{
			type: "compatibility",
			feature: "JSON Schema propertyNames",
			details: "OpenAI does not support JSON Schema propertyNames. It was removed before sending the schema, so OpenAI will not enforce property-name constraints."
		}] : []
	};
	function normalizeSchema(schema2) {
		const propertyNames = schema2.propertyNames;
		if (propertyNames != null) {
			if (typeof propertyNames === "boolean" || propertyNames.type !== "string") throw new UnsupportedFunctionalityError({ functionality: "JSON Schema propertyNames that does not use a string schema" });
			removedPropertyNames = true;
		}
		const normalizedSchema2 = { ...schema2 };
		delete normalizedSchema2.propertyNames;
		if (normalizedSchema2.properties != null) normalizedSchema2.properties = normalizeSchemaRecord(normalizedSchema2.properties);
		if (normalizedSchema2.patternProperties != null) normalizedSchema2.patternProperties = normalizeSchemaRecord(normalizedSchema2.patternProperties);
		if (normalizedSchema2.additionalProperties != null) normalizedSchema2.additionalProperties = normalizeDefinition(normalizedSchema2.additionalProperties);
		if (normalizedSchema2.additionalItems != null) normalizedSchema2.additionalItems = normalizeDefinition(normalizedSchema2.additionalItems);
		if (normalizedSchema2.items != null) normalizedSchema2.items = Array.isArray(normalizedSchema2.items) ? normalizedSchema2.items.map(normalizeDefinition) : normalizeDefinition(normalizedSchema2.items);
		if (normalizedSchema2.contains != null) normalizedSchema2.contains = normalizeDefinition(normalizedSchema2.contains);
		if (normalizedSchema2.not != null) normalizedSchema2.not = normalizeDefinition(normalizedSchema2.not);
		if (normalizedSchema2.allOf != null) normalizedSchema2.allOf = normalizedSchema2.allOf.map(normalizeDefinition);
		if (normalizedSchema2.anyOf != null) normalizedSchema2.anyOf = normalizedSchema2.anyOf.map(normalizeDefinition);
		if (normalizedSchema2.oneOf != null) normalizedSchema2.oneOf = normalizedSchema2.oneOf.map(normalizeDefinition);
		if (normalizedSchema2.definitions != null) normalizedSchema2.definitions = normalizeSchemaRecord(normalizedSchema2.definitions);
		if (normalizedSchema2.$defs != null) normalizedSchema2.$defs = normalizeSchemaRecord(normalizedSchema2.$defs);
		if (normalizedSchema2.dependencies != null) normalizedSchema2.dependencies = Object.fromEntries(Object.entries(normalizedSchema2.dependencies).map(([key, dependency]) => [key, Array.isArray(dependency) ? dependency : normalizeDefinition(dependency)]));
		for (const keyword of [
			"if",
			"then",
			"else"
		]) {
			const conditionalSchema = normalizedSchema2[keyword];
			if (conditionalSchema != null) normalizedSchema2[keyword] = normalizeDefinition(conditionalSchema);
		}
		return normalizedSchema2;
	}
	function normalizeSchemaRecord(schemas) {
		return Object.fromEntries(Object.entries(schemas).map(([key, schema2]) => [key, normalizeDefinition(schema2)]));
	}
	function normalizeDefinition(definition) {
		return typeof definition === "boolean" ? definition : normalizeSchema(definition);
	}
}
function prepareChatTools({ tools, toolChoice }) {
	tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
	const toolWarnings = [];
	if (tools == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings
	};
	const openaiTools2 = [];
	for (const tool of tools) switch (tool.type) {
		case "function": {
			const normalizedInputSchema = normalizeOpenAIJsonSchema(tool.inputSchema);
			toolWarnings.push(...normalizedInputSchema.warnings);
			openaiTools2.push({
				type: "function",
				function: {
					name: tool.name,
					description: tool.description,
					parameters: normalizedInputSchema.schema,
					...tool.strict != null ? { strict: tool.strict } : {}
				}
			});
			break;
		}
		default: toolWarnings.push({
			type: "unsupported",
			feature: `tool type: ${tool.type}`
		});
	}
	if (toolChoice == null) return {
		tools: openaiTools2,
		toolChoice: void 0,
		toolWarnings
	};
	const type = toolChoice.type;
	switch (type) {
		case "auto":
		case "none":
		case "required": return {
			tools: openaiTools2,
			toolChoice: type,
			toolWarnings
		};
		case "tool": return {
			tools: openaiTools2,
			toolChoice: {
				type: "function",
				function: { name: toolChoice.toolName }
			},
			toolWarnings
		};
		default: throw new UnsupportedFunctionalityError({ functionality: `tool choice type: ${type}` });
	}
}
var OpenAIChatLanguageModel = class _OpenAIChatLanguageModel {
	constructor(modelId, config) {
		this.specificationVersion = "v4";
		this.supportedUrls = { "image/*": [/^https?:\/\/.*$/] };
		this.modelId = modelId;
		this.config = config;
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAIChatLanguageModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences, responseFormat, seed, tools, toolChoice, reasoning, providerOptions }) {
		var _a2, _b, _c, _d, _e, _f;
		const warnings = [];
		const openaiOptions = (_a2 = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openaiLanguageModelChatOptions
		})) != null ? _a2 : {};
		const modelCapabilities = getOpenAILanguageModelCapabilities(this.modelId);
		let resolvedReasoningEffort = (_b = openaiOptions.reasoningEffort) != null ? _b : isCustomReasoning(reasoning) ? reasoning : void 0;
		if (resolvedReasoningEffort != null && modelCapabilities.supportedReasoningEfforts != null && !modelCapabilities.supportedReasoningEfforts.includes(resolvedReasoningEffort)) {
			warnings.push({
				type: "unsupported",
				feature: "reasoningEffort",
				details: `${this.modelId} only supports the following reasoning efforts: ${modelCapabilities.supportedReasoningEfforts.join(", ")}`
			});
			resolvedReasoningEffort = void 0;
		}
		const isReasoningModel = (_c = openaiOptions.forceReasoning) != null ? _c : modelCapabilities.isReasoningModel;
		if (topK != null) warnings.push({
			type: "unsupported",
			feature: "topK"
		});
		const { messages, warnings: messageWarnings } = convertToOpenAIChatMessages({
			prompt,
			systemMessageMode: (_d = openaiOptions.systemMessageMode) != null ? _d : isReasoningModel ? "developer" : modelCapabilities.systemMessageMode
		});
		warnings.push(...messageWarnings);
		const strictJsonSchema = (_e = openaiOptions.strictJsonSchema) != null ? _e : true;
		const normalizedResponseFormatSchema = (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null ? normalizeOpenAIJsonSchema(responseFormat.schema) : void 0;
		if (normalizedResponseFormatSchema != null) warnings.push(...normalizedResponseFormatSchema.warnings);
		const baseArgs = {
			model: this.modelId,
			logit_bias: openaiOptions.logitBias,
			logprobs: openaiOptions.logprobs === true || typeof openaiOptions.logprobs === "number" ? true : void 0,
			top_logprobs: typeof openaiOptions.logprobs === "number" ? openaiOptions.logprobs : typeof openaiOptions.logprobs === "boolean" ? openaiOptions.logprobs ? 0 : void 0 : void 0,
			user: openaiOptions.user,
			parallel_tool_calls: openaiOptions.parallelToolCalls,
			max_tokens: maxOutputTokens,
			temperature,
			top_p: topP,
			frequency_penalty: frequencyPenalty,
			presence_penalty: presencePenalty,
			response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? normalizedResponseFormatSchema != null ? {
				type: "json_schema",
				json_schema: {
					schema: normalizedResponseFormatSchema.schema,
					strict: strictJsonSchema,
					name: (_f = responseFormat.name) != null ? _f : "response",
					description: responseFormat.description
				}
			} : { type: "json_object" } : void 0,
			stop: stopSequences,
			seed,
			verbosity: openaiOptions.textVerbosity,
			max_completion_tokens: openaiOptions.maxCompletionTokens,
			store: openaiOptions.store,
			metadata: openaiOptions.metadata,
			prediction: openaiOptions.prediction,
			reasoning_effort: resolvedReasoningEffort,
			service_tier: openaiOptions.serviceTier,
			prompt_cache_key: openaiOptions.promptCacheKey,
			prompt_cache_options: openaiOptions.promptCacheOptions,
			prompt_cache_retention: openaiOptions.promptCacheRetention,
			safety_identifier: openaiOptions.safetyIdentifier,
			messages
		};
		if (modelCapabilities.supportedReasoningEfforts != null && baseArgs.prompt_cache_retention != null) {
			baseArgs.prompt_cache_retention = void 0;
			warnings.push({
				type: "unsupported",
				feature: "promptCacheRetention",
				details: "promptCacheRetention is not supported by GPT-6 and later models; use promptCacheOptions instead"
			});
		}
		if (isReasoningModel) {
			if (resolvedReasoningEffort !== "none" || !modelCapabilities.supportsNonReasoningParameters) {
				if (baseArgs.temperature != null) {
					baseArgs.temperature = void 0;
					warnings.push({
						type: "unsupported",
						feature: "temperature",
						details: "temperature is not supported for reasoning models"
					});
				}
				if (baseArgs.top_p != null) {
					baseArgs.top_p = void 0;
					warnings.push({
						type: "unsupported",
						feature: "topP",
						details: "topP is not supported for reasoning models"
					});
				}
				if (baseArgs.logprobs != null) {
					baseArgs.logprobs = void 0;
					warnings.push({
						type: "other",
						message: "logprobs is not supported for reasoning models"
					});
				}
			}
			if (baseArgs.frequency_penalty != null) {
				baseArgs.frequency_penalty = void 0;
				warnings.push({
					type: "unsupported",
					feature: "frequencyPenalty",
					details: "frequencyPenalty is not supported for reasoning models"
				});
			}
			if (baseArgs.presence_penalty != null) {
				baseArgs.presence_penalty = void 0;
				warnings.push({
					type: "unsupported",
					feature: "presencePenalty",
					details: "presencePenalty is not supported for reasoning models"
				});
			}
			if (baseArgs.logit_bias != null) {
				baseArgs.logit_bias = void 0;
				warnings.push({
					type: "other",
					message: "logitBias is not supported for reasoning models"
				});
			}
			if (baseArgs.top_logprobs != null) {
				baseArgs.top_logprobs = void 0;
				warnings.push({
					type: "other",
					message: "topLogprobs is not supported for reasoning models"
				});
			}
			if (baseArgs.max_tokens != null) {
				if (baseArgs.max_completion_tokens == null) baseArgs.max_completion_tokens = baseArgs.max_tokens;
				baseArgs.max_tokens = void 0;
			}
		} else if (this.modelId.startsWith("gpt-4o-search-preview") || this.modelId.startsWith("gpt-4o-mini-search-preview")) {
			if (baseArgs.temperature != null) {
				baseArgs.temperature = void 0;
				warnings.push({
					type: "unsupported",
					feature: "temperature",
					details: "temperature is not supported for the search preview models and has been removed."
				});
			}
		}
		if (openaiOptions.serviceTier === "flex" && !modelCapabilities.supportsFlexProcessing) {
			warnings.push({
				type: "unsupported",
				feature: "serviceTier",
				details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
			});
			baseArgs.service_tier = void 0;
		}
		if ((openaiOptions.serviceTier === "priority" || openaiOptions.serviceTier === "fast") && !modelCapabilities.supportsPriorityProcessing) {
			warnings.push({
				type: "unsupported",
				feature: "serviceTier",
				details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
			});
			baseArgs.service_tier = void 0;
		}
		const { tools: openaiTools2, toolChoice: openaiToolChoice, toolWarnings } = prepareChatTools({
			tools,
			toolChoice
		});
		return {
			args: {
				...baseArgs,
				tools: openaiTools2,
				tool_choice: openaiToolChoice
			},
			warnings: [...warnings, ...toolWarnings]
		};
	}
	async doGenerate(options) {
		var _a2, _b, _c, _d, _e, _f, _g;
		const { args: body, warnings } = await this.getArgs(options);
		const { responseHeaders, value: response, rawValue: rawResponse } = await postJsonToApi({
			url: this.config.url({
				path: "/chat/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders((_b = (_a2 = this.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiChatResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		const choice = response.choices[0];
		if (choice == null) throw new InvalidResponseDataError({
			data: rawResponse,
			message: "Response did not contain any choices."
		});
		const content = [];
		const text = choice.message.content;
		if (text != null && text.length > 0) content.push({
			type: "text",
			text
		});
		for (const toolCall of (_c = choice.message.tool_calls) != null ? _c : []) content.push({
			type: "tool-call",
			toolCallId: toolCall.id || generateId(),
			toolName: toolCall.function.name,
			input: toolCall.function.arguments
		});
		for (const annotation of (_d = choice.message.annotations) != null ? _d : []) content.push({
			type: "source",
			sourceType: "url",
			id: generateId(),
			url: annotation.url_citation.url,
			title: annotation.url_citation.title
		});
		const completionTokenDetails = (_e = response.usage) == null ? void 0 : _e.completion_tokens_details;
		const providerMetadata = { openai: {} };
		if ((completionTokenDetails == null ? void 0 : completionTokenDetails.accepted_prediction_tokens) != null) providerMetadata.openai.acceptedPredictionTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.accepted_prediction_tokens;
		if ((completionTokenDetails == null ? void 0 : completionTokenDetails.rejected_prediction_tokens) != null) providerMetadata.openai.rejectedPredictionTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.rejected_prediction_tokens;
		if (((_f = choice.logprobs) == null ? void 0 : _f.content) != null) providerMetadata.openai.logprobs = choice.logprobs.content;
		return {
			content,
			finishReason: {
				unified: mapOpenAIFinishReason(choice.finish_reason),
				raw: (_g = choice.finish_reason) != null ? _g : void 0
			},
			usage: convertOpenAIChatUsage(response.usage),
			request: { body },
			response: {
				...getResponseMetadata(response),
				headers: responseHeaders,
				body: rawResponse
			},
			warnings,
			providerMetadata
		};
	}
	async doStream(options) {
		var _a2, _b;
		const { args, warnings } = await this.getArgs(options);
		const body = {
			...args,
			stream: true,
			stream_options: { include_usage: true }
		};
		const url = this.config.url({
			path: "/chat/completions",
			modelId: this.modelId
		});
		const { responseHeaders, value: response } = await postJsonToApi({
			url,
			headers: combineHeaders((_b = (_a2 = this.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createEventSourceResponseHandler(openaiChatChunkSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		const checkedResponse = await throwIfOpenAIStreamErrorBeforeOutput({
			stream: response,
			getError: (chunk) => "error" in chunk ? chunk.error : void 0,
			isOutputChunk: isOpenAIChatOutputChunk,
			url,
			requestBodyValues: body,
			responseHeaders
		});
		let toolCallTracker;
		let finishReason = {
			unified: "other",
			raw: void 0
		};
		let usage = void 0;
		let metadataExtracted = false;
		let isActiveText = false;
		const providerMetadata = { openai: {} };
		return {
			stream: checkedResponse.pipeThrough(new TransformStream({
				start(controller) {
					toolCallTracker = new StreamingToolCallTracker(controller, {
						generateId,
						typeValidation: "if-present"
					});
					controller.enqueue({
						type: "stream-start",
						warnings
					});
				},
				transform(chunk, controller) {
					var _a3, _b2, _c, _d, _e, _f;
					if (options.includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: chunk.rawValue
					});
					if (!chunk.success) {
						finishReason = {
							unified: "error",
							raw: void 0
						};
						controller.enqueue({
							type: "error",
							error: chunk.error
						});
						return;
					}
					const value = chunk.value;
					if ("error" in value) {
						finishReason = {
							unified: "error",
							raw: void 0
						};
						controller.enqueue({
							type: "error",
							error: (_a3 = createOpenAIProviderStreamError(value.error)) != null ? _a3 : value.error
						});
						return;
					}
					if (!metadataExtracted) {
						const metadata = getResponseMetadata(value);
						if (Object.values(metadata).some(Boolean)) {
							metadataExtracted = true;
							controller.enqueue({
								type: "response-metadata",
								...getResponseMetadata(value)
							});
						}
					}
					if (value.usage != null) {
						usage = value.usage;
						if (((_b2 = value.usage.completion_tokens_details) == null ? void 0 : _b2.accepted_prediction_tokens) != null) providerMetadata.openai.acceptedPredictionTokens = (_c = value.usage.completion_tokens_details) == null ? void 0 : _c.accepted_prediction_tokens;
						if (((_d = value.usage.completion_tokens_details) == null ? void 0 : _d.rejected_prediction_tokens) != null) providerMetadata.openai.rejectedPredictionTokens = (_e = value.usage.completion_tokens_details) == null ? void 0 : _e.rejected_prediction_tokens;
					}
					const choice = value.choices[0];
					if ((choice == null ? void 0 : choice.finish_reason) != null) finishReason = {
						unified: mapOpenAIFinishReason(choice.finish_reason),
						raw: choice.finish_reason
					};
					if (((_f = choice == null ? void 0 : choice.logprobs) == null ? void 0 : _f.content) != null) providerMetadata.openai.logprobs = choice.logprobs.content;
					if ((choice == null ? void 0 : choice.delta) == null) return;
					const delta = choice.delta;
					if (delta.content != null) {
						if (!isActiveText) {
							controller.enqueue({
								type: "text-start",
								id: "0"
							});
							isActiveText = true;
						}
						controller.enqueue({
							type: "text-delta",
							id: "0",
							delta: delta.content
						});
					}
					if (delta.tool_calls != null) for (const toolCallDelta of delta.tool_calls) toolCallTracker.processDelta(toolCallDelta);
					if (delta.annotations != null) for (const annotation of delta.annotations) controller.enqueue({
						type: "source",
						sourceType: "url",
						id: generateId(),
						url: annotation.url_citation.url,
						title: annotation.url_citation.title
					});
				},
				flush(controller) {
					if (isActiveText) controller.enqueue({
						type: "text-end",
						id: "0"
					});
					toolCallTracker.flush();
					controller.enqueue({
						type: "finish",
						finishReason,
						usage: convertOpenAIChatUsage(usage),
						...providerMetadata != null ? { providerMetadata } : {}
					});
				}
			})),
			request: { body },
			response: { headers: responseHeaders }
		};
	}
};
function isOpenAIChatOutputChunk(chunk) {
	if ("error" in chunk) return false;
	return chunk.choices.some((choice) => {
		const delta = choice.delta;
		return (delta == null ? void 0 : delta.content) != null && delta.content.length > 0 || (delta == null ? void 0 : delta.tool_calls) != null && delta.tool_calls.length > 0 || (delta == null ? void 0 : delta.annotations) != null && delta.annotations.length > 0;
	});
}
function convertOpenAICompletionUsage(usage) {
	var _a2, _b, _c, _d;
	if (usage == null) return createNullLanguageModelUsage();
	const promptTokens = (_a2 = usage.prompt_tokens) != null ? _a2 : 0;
	const completionTokens = (_b = usage.completion_tokens) != null ? _b : 0;
	return {
		inputTokens: {
			total: (_c = usage.prompt_tokens) != null ? _c : void 0,
			noCache: promptTokens,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: (_d = usage.completion_tokens) != null ? _d : void 0,
			text: completionTokens,
			reasoning: void 0
		},
		raw: usage
	};
}
function convertToOpenAICompletionPrompt({ prompt, user = "user", assistant = "assistant" }) {
	let text = "";
	if (prompt[0].role === "system") {
		text += `${prompt[0].content}

`;
		prompt = prompt.slice(1);
	}
	for (const { role, content } of prompt) switch (role) {
		case "system": throw new InvalidPromptError({
			message: "Unexpected system message in prompt: ${content}",
			prompt
		});
		case "user": {
			const userMessage = content.map((part) => {
				switch (part.type) {
					case "text": return part.text;
				}
			}).filter(Boolean).join("");
			text += `${user}:
${userMessage}

`;
			break;
		}
		case "assistant": {
			const assistantMessage = content.map((part) => {
				switch (part.type) {
					case "text": return part.text;
					case "tool-call": throw new UnsupportedFunctionalityError({ functionality: "tool-call messages" });
				}
			}).join("");
			text += `${assistant}:
${assistantMessage}

`;
			break;
		}
		case "tool": throw new UnsupportedFunctionalityError({ functionality: "tool messages" });
		default: throw new Error(`Unsupported role: ${role}`);
	}
	text += `${assistant}:
`;
	return {
		prompt: text,
		stopSequences: [`
${user}:`]
	};
}
function mapOpenAIFinishReason2(finishReason) {
	switch (finishReason) {
		case "stop": return "stop";
		case "length": return "length";
		case "content_filter": return "content-filter";
		case "function_call":
		case "tool_calls": return "tool-calls";
		default: return "other";
	}
}
var openaiCompletionResponseSchema = lazySchema(() => zodSchema(object({
	id: string().nullish(),
	created: number$1().nullish(),
	model: string().nullish(),
	choices: array(object({
		text: string(),
		finish_reason: string(),
		logprobs: object({
			tokens: array(string()),
			token_logprobs: array(number$1()),
			top_logprobs: array(record(string(), number$1())).nullish()
		}).nullish()
	})),
	usage: object({
		prompt_tokens: number$1(),
		completion_tokens: number$1(),
		total_tokens: number$1()
	}).nullish()
})));
var openaiCompletionChunkSchema = lazySchema(() => zodSchema(union([object({
	id: string().nullish(),
	created: number$1().nullish(),
	model: string().nullish(),
	choices: array(object({
		text: string(),
		finish_reason: string().nullish(),
		index: number$1(),
		logprobs: object({
			tokens: array(string()),
			token_logprobs: array(number$1()),
			top_logprobs: array(record(string(), number$1())).nullish()
		}).nullish()
	})),
	usage: object({
		prompt_tokens: number$1(),
		completion_tokens: number$1(),
		total_tokens: number$1()
	}).nullish()
}), openaiErrorDataSchema])));
var openaiLanguageModelCompletionOptions = lazySchema(() => zodSchema(object({
	/**
	* Echo back the prompt in addition to the completion.
	*/
	echo: boolean().optional(),
	/**
	* Modify the likelihood of specified tokens appearing in the completion.
	*
	* Accepts a JSON object that maps tokens (specified by their token ID in
	* the GPT tokenizer) to an associated bias value from -100 to 100. You
	* can use this tokenizer tool to convert text to token IDs. Mathematically,
	* the bias is added to the logits generated by the model prior to sampling.
	* The exact effect will vary per model, but values between -1 and 1 should
	* decrease or increase likelihood of selection; values like -100 or 100
	* should result in a ban or exclusive selection of the relevant token.
	*
	* As an example, you can pass {"50256": -100} to prevent the <|endoftext|>
	* token from being generated.
	*/
	logitBias: record(string(), number$1()).optional(),
	/**
	* The suffix that comes after a completion of inserted text.
	*/
	suffix: string().optional(),
	/**
	* A unique identifier representing your end-user, which can help OpenAI to
	* monitor and detect abuse. Learn more.
	*/
	user: string().optional(),
	/**
	* Return the log probabilities of the tokens. Including logprobs will increase
	* the response size and can slow down response times. However, it can
	* be useful to better understand how the model is behaving.
	* Setting to true will return the log probabilities of the tokens that
	* were generated.
	* Setting to a number will return the log probabilities of the top n
	* tokens that were generated.
	*/
	logprobs: union([boolean(), number$1()]).optional()
})));
var OpenAICompletionLanguageModel = class _OpenAICompletionLanguageModel {
	constructor(modelId, config) {
		this.specificationVersion = "v4";
		this.supportedUrls = {};
		this.modelId = modelId;
		this.config = config;
	}
	get providerOptionsName() {
		return this.config.provider.split(".")[0].trim();
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAICompletionLanguageModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences: userStopSequences, responseFormat, tools, toolChoice, seed, providerOptions }) {
		const warnings = [];
		const openaiOptions = {
			...await parseProviderOptions({
				provider: "openai",
				providerOptions,
				schema: openaiLanguageModelCompletionOptions
			}),
			...await parseProviderOptions({
				provider: this.providerOptionsName,
				providerOptions,
				schema: openaiLanguageModelCompletionOptions
			})
		};
		if (topK != null) warnings.push({
			type: "unsupported",
			feature: "topK"
		});
		if (tools == null ? void 0 : tools.length) warnings.push({
			type: "unsupported",
			feature: "tools"
		});
		if (toolChoice != null) warnings.push({
			type: "unsupported",
			feature: "toolChoice"
		});
		if (responseFormat != null && responseFormat.type !== "text") warnings.push({
			type: "unsupported",
			feature: "responseFormat",
			details: "JSON response format is not supported."
		});
		const { prompt: completionPrompt, stopSequences } = convertToOpenAICompletionPrompt({ prompt });
		const stop = [...stopSequences != null ? stopSequences : [], ...userStopSequences != null ? userStopSequences : []];
		return {
			args: {
				model: this.modelId,
				echo: openaiOptions.echo,
				logit_bias: openaiOptions.logitBias,
				logprobs: (openaiOptions == null ? void 0 : openaiOptions.logprobs) === true ? 0 : (openaiOptions == null ? void 0 : openaiOptions.logprobs) === false ? void 0 : openaiOptions == null ? void 0 : openaiOptions.logprobs,
				suffix: openaiOptions.suffix,
				user: openaiOptions.user,
				max_tokens: maxOutputTokens,
				temperature,
				top_p: topP,
				frequency_penalty: frequencyPenalty,
				presence_penalty: presencePenalty,
				seed,
				prompt: completionPrompt,
				stop: stop.length > 0 ? stop : void 0
			},
			warnings
		};
	}
	async doGenerate(options) {
		var _a2, _b, _c;
		const { args, warnings } = await this.getArgs(options);
		const { responseHeaders, value: response, rawValue: rawResponse } = await postJsonToApi({
			url: this.config.url({
				path: "/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders((_b = (_a2 = this.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body: args,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiCompletionResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		const choice = response.choices[0];
		const providerMetadata = { openai: {} };
		if (choice.logprobs != null) providerMetadata.openai.logprobs = choice.logprobs;
		return {
			content: [{
				type: "text",
				text: choice.text
			}],
			usage: convertOpenAICompletionUsage(response.usage),
			finishReason: {
				unified: mapOpenAIFinishReason2(choice.finish_reason),
				raw: (_c = choice.finish_reason) != null ? _c : void 0
			},
			request: { body: args },
			response: {
				...createLanguageModelResponseMetadata(response),
				headers: responseHeaders,
				body: rawResponse
			},
			providerMetadata,
			warnings
		};
	}
	async doStream(options) {
		var _a2, _b;
		const { args, warnings } = await this.getArgs(options);
		const body = {
			...args,
			stream: true,
			stream_options: { include_usage: true }
		};
		const url = this.config.url({
			path: "/completions",
			modelId: this.modelId
		});
		const { responseHeaders, value: response } = await postJsonToApi({
			url,
			headers: combineHeaders((_b = (_a2 = this.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createEventSourceResponseHandler(openaiCompletionChunkSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		const checkedResponse = await throwIfOpenAIStreamErrorBeforeOutput({
			stream: response,
			getError: (chunk) => "error" in chunk ? chunk.error : void 0,
			isOutputChunk: isOpenAICompletionOutputChunk,
			url,
			requestBodyValues: body,
			responseHeaders
		});
		let finishReason = {
			unified: "other",
			raw: void 0
		};
		const providerMetadata = { openai: {} };
		let usage = void 0;
		let isFirstChunk = true;
		return {
			stream: checkedResponse.pipeThrough(new TransformStream({
				start(controller) {
					controller.enqueue({
						type: "stream-start",
						warnings
					});
				},
				transform(chunk, controller) {
					var _a3;
					if (options.includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: chunk.rawValue
					});
					if (!chunk.success) {
						finishReason = {
							unified: "error",
							raw: void 0
						};
						controller.enqueue({
							type: "error",
							error: chunk.error
						});
						return;
					}
					const value = chunk.value;
					if ("error" in value) {
						finishReason = {
							unified: "error",
							raw: void 0
						};
						controller.enqueue({
							type: "error",
							error: (_a3 = createOpenAIProviderStreamError(value.error)) != null ? _a3 : value.error
						});
						return;
					}
					if (isFirstChunk) {
						isFirstChunk = false;
						controller.enqueue({
							type: "response-metadata",
							...createLanguageModelResponseMetadata(value)
						});
						controller.enqueue({
							type: "text-start",
							id: "0"
						});
					}
					if (value.usage != null) usage = value.usage;
					const choice = value.choices[0];
					if ((choice == null ? void 0 : choice.finish_reason) != null) finishReason = {
						unified: mapOpenAIFinishReason2(choice.finish_reason),
						raw: choice.finish_reason
					};
					if ((choice == null ? void 0 : choice.logprobs) != null) providerMetadata.openai.logprobs = choice.logprobs;
					if ((choice == null ? void 0 : choice.text) != null && choice.text.length > 0) controller.enqueue({
						type: "text-delta",
						id: "0",
						delta: choice.text
					});
				},
				flush(controller) {
					if (!isFirstChunk) controller.enqueue({
						type: "text-end",
						id: "0"
					});
					controller.enqueue({
						type: "finish",
						finishReason,
						providerMetadata,
						usage: convertOpenAICompletionUsage(usage)
					});
				}
			})),
			request: { body },
			response: { headers: responseHeaders }
		};
	}
};
function isOpenAICompletionOutputChunk(chunk) {
	return !("error" in chunk) && chunk.choices.some((choice) => choice.text.length > 0);
}
var openaiEmbeddingModelOptions = lazySchema(() => zodSchema(object({
	/**
	* The number of dimensions the resulting output embeddings should have.
	* Only supported in text-embedding-3 and later models.
	*/
	dimensions: number$1().optional(),
	/**
	* A unique identifier representing your end-user, which can help OpenAI to
	* monitor and detect abuse. Learn more.
	*/
	user: string().optional()
})));
var openaiTextEmbeddingResponseSchema = lazySchema(() => zodSchema(object({
	data: array(object({ embedding: array(number$1()) })),
	usage: object({ prompt_tokens: number$1() }).nullish()
})));
var _a;
var OpenAIEmbeddingModel = class _OpenAIEmbeddingModel {
	constructor(modelId, config) {
		this.specificationVersion = "v4";
		this.maxEmbeddingsPerCall = 2048;
		this[_a] = 3e5;
		this.supportsParallelCalls = true;
		this.modelId = modelId;
		this.config = config;
	}
	static [(_a = EMBEDDING_MODEL_MAX_INPUT_BYTES_PER_CALL, WORKFLOW_SERIALIZE)](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAIEmbeddingModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async doEmbed({ values, headers, abortSignal, providerOptions }) {
		var _a2, _b, _c;
		if (values.length > this.maxEmbeddingsPerCall) throw new TooManyEmbeddingValuesForCallError({
			provider: this.provider,
			modelId: this.modelId,
			maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
			values
		});
		const openaiOptions = (_a2 = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openaiEmbeddingModelOptions
		})) != null ? _a2 : {};
		const { responseHeaders, value: response, rawValue } = await postJsonToApi({
			url: this.config.url({
				path: "/embeddings",
				modelId: this.modelId
			}),
			headers: combineHeaders((_c = (_b = this.config).headers) == null ? void 0 : _c.call(_b), headers),
			body: {
				model: this.modelId,
				input: values,
				encoding_format: "float",
				dimensions: openaiOptions.dimensions,
				user: openaiOptions.user
			},
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiTextEmbeddingResponseSchema),
			abortSignal,
			fetch: this.config.fetch
		});
		return {
			warnings: [],
			embeddings: response.data.map((item) => item.embedding),
			usage: response.usage ? { tokens: response.usage.prompt_tokens } : void 0,
			response: {
				headers: responseHeaders,
				body: rawValue
			}
		};
	}
};
var openaiFilesResponseSchema = lazySchema(() => zodSchema(object({
	id: string(),
	object: string().nullish(),
	bytes: number$1().nullish(),
	created_at: number$1().nullish(),
	filename: string().nullish(),
	purpose: string().nullish(),
	status: string().nullish(),
	expires_at: number$1().nullish()
})));
var openaiFileDeleteResponseSchema = lazySchema(() => zodSchema(object({
	id: string(),
	object: string().nullish(),
	deleted: boolean()
})));
var openaiFilesOptionsSchema = lazySchema(() => zodSchema(object({
	purpose: string().optional(),
	expiresAfter: number$1().optional()
})));
function encodePathSegment(value) {
	const encodedValue = encodeURIComponent(value);
	return encodedValue === "." ? "%252E" : encodedValue === ".." ? "%252E%252E" : encodedValue;
}
var OpenAIFiles = class {
	constructor(config) {
		this.config = config;
		this.specificationVersion = "v4";
	}
	get provider() {
		return this.config.provider;
	}
	getFileId(file) {
		const fileId = file.openai;
		if (fileId == null || fileId.trim() === "") throw new InvalidArgumentError({
			argument: "file",
			message: "file reference is missing an 'openai' file id."
		});
		return fileId;
	}
	getHeaders(headers) {
		return combineHeaders(this.config.headers(), headers);
	}
	async uploadFile({ data, mediaType, filename, abortSignal, headers, providerOptions }) {
		var _a2, _b, _c;
		let openaiOptions;
		try {
			openaiOptions = await parseProviderOptions({
				provider: "openai",
				providerOptions,
				schema: openaiFilesOptionsSchema
			});
		} catch (error) {
			if (data.type === "stream") await data.stream.cancel(error).catch(() => {});
			throw error;
		}
		const purpose = (_a2 = openaiOptions == null ? void 0 : openaiOptions.purpose) != null ? _a2 : "assistants";
		const requestHeaders = this.getHeaders(headers);
		const url = `${this.config.baseURL}/files`;
		let response;
		if (data.type === "stream") {
			const parts = [{
				type: "field",
				name: "purpose",
				value: purpose
			}];
			if ((openaiOptions == null ? void 0 : openaiOptions.expiresAfter) != null) parts.push({
				type: "field",
				name: "expires_after[anchor]",
				value: "created_at"
			}, {
				type: "field",
				name: "expires_after[seconds]",
				value: String(openaiOptions.expiresAfter)
			});
			parts.push({
				type: "file",
				name: "file",
				filename,
				mediaType,
				content: data.stream
			});
			({value: response} = await postMultipartStreamToApi({
				url,
				headers: requestHeaders,
				parts,
				failedResponseHandler: openaiFailedResponseHandler,
				successfulResponseHandler: createJsonResponseHandler(openaiFilesResponseSchema),
				abortSignal,
				fetch: this.config.fetch
			}));
		} else {
			const fileBytes = convertInlineFileDataToUint8Array(data);
			const blob = new Blob([fileBytes], { type: mediaType });
			const formData = new FormData();
			if (filename != null) formData.append("file", blob, filename);
			else formData.append("file", blob);
			formData.append("purpose", purpose);
			if ((openaiOptions == null ? void 0 : openaiOptions.expiresAfter) != null) {
				formData.append("expires_after[anchor]", "created_at");
				formData.append("expires_after[seconds]", String(openaiOptions.expiresAfter));
			}
			({value: response} = await postFormDataToApi({
				url,
				headers: requestHeaders,
				formData,
				failedResponseHandler: openaiFailedResponseHandler,
				successfulResponseHandler: createJsonResponseHandler(openaiFilesResponseSchema),
				abortSignal,
				fetch: this.config.fetch
			}));
		}
		return {
			warnings: [],
			providerReference: { openai: response.id },
			...((_b = response.filename) != null ? _b : filename) ? { filename: (_c = response.filename) != null ? _c : filename } : {},
			...mediaType != null ? { mediaType } : {},
			...response.bytes != null ? { byteSize: response.bytes } : {},
			...response.created_at != null ? { createdAt: /* @__PURE__ */ new Date(response.created_at * 1e3) } : {},
			...response.expires_at != null ? { expiresAt: /* @__PURE__ */ new Date(response.expires_at * 1e3) } : {},
			providerMetadata: { openai: this.toFileMetadata(response) }
		};
	}
	async getFileMetadata({ file, abortSignal, headers }) {
		const fileId = this.getFileId(file);
		const { value: response } = await getFromApi({
			url: `${this.config.baseURL}/files/${encodePathSegment(fileId)}`,
			headers: this.getHeaders(headers),
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiFilesResponseSchema),
			abortSignal,
			fetch: this.config.fetch,
			validateUrl: false
		});
		return {
			warnings: [],
			providerReference: { openai: response.id },
			...response.filename != null ? { filename: response.filename } : {},
			...response.bytes != null ? { byteSize: response.bytes } : {},
			...response.created_at != null ? { createdAt: /* @__PURE__ */ new Date(response.created_at * 1e3) } : {},
			...response.expires_at != null ? { expiresAt: /* @__PURE__ */ new Date(response.expires_at * 1e3) } : {},
			providerMetadata: { openai: this.toFileMetadata(response) }
		};
	}
	async downloadFile({ file, abortSignal, headers }) {
		var _a2;
		const fileId = this.getFileId(file);
		const { value: content, responseHeaders } = await getFromApi({
			url: `${this.config.baseURL}/files/${encodePathSegment(fileId)}/content`,
			headers: this.getHeaders(headers),
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createBinaryStreamResponseHandler(),
			abortSignal,
			fetch: this.config.fetch,
			validateUrl: false
		});
		const mediaType = (_a2 = responseHeaders == null ? void 0 : responseHeaders["content-type"]) == null ? void 0 : _a2.split(";")[0].trim();
		return {
			warnings: [],
			content,
			...mediaType ? { mediaType } : {}
		};
	}
	async deleteFile({ file, abortSignal, headers }) {
		const fileId = this.getFileId(file);
		const { value: response } = await deleteFromApi({
			url: `${this.config.baseURL}/files/${encodePathSegment(fileId)}`,
			headers: this.getHeaders(headers),
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiFileDeleteResponseSchema),
			abortSignal,
			fetch: this.config.fetch
		});
		return {
			warnings: [],
			providerReference: { openai: response.id },
			deleted: response.deleted
		};
	}
	toFileMetadata(response) {
		return {
			...response.filename != null ? { filename: response.filename } : {},
			...response.purpose != null ? { purpose: response.purpose } : {},
			...response.bytes != null ? { bytes: response.bytes } : {},
			...response.created_at != null ? { createdAt: response.created_at } : {},
			...response.status != null ? { status: response.status } : {},
			...response.expires_at != null ? { expiresAt: response.expires_at } : {}
		};
	}
};
var openaiImageResponseSchema = lazySchema(() => zodSchema(object({
	created: number$1().nullish(),
	data: array(object({
		b64_json: string(),
		revised_prompt: string().nullish()
	})),
	background: string().nullish(),
	output_format: string().nullish(),
	size: string().nullish(),
	quality: string().nullish(),
	usage: object({
		input_tokens: number$1().nullish(),
		output_tokens: number$1().nullish(),
		total_tokens: number$1().nullish(),
		input_tokens_details: object({
			image_tokens: number$1().nullish(),
			text_tokens: number$1().nullish()
		}).nullish()
	}).nullish()
})));
var modelMaxImagesPerCall = {
	"dall-e-3": 1,
	"dall-e-2": 10,
	"gpt-image-1": 10,
	"gpt-image-1-mini": 10,
	"gpt-image-1.5": 10,
	"gpt-image-2": 10,
	"gpt-image-2.5-flare": 10,
	"gpt-image-2.5-flare-2026-09-08": 10,
	"gpt-image-2.5-sunburst": 10,
	"gpt-image-2.5-sunburst-2026-09-08": 10,
	"chatgpt-image-latest": 10
};
var defaultResponseFormatPrefixes = ["chatgpt-image-", "gpt-image-"];
function hasDefaultResponseFormat(modelId) {
	return defaultResponseFormatPrefixes.some((prefix) => modelId.startsWith(prefix));
}
function getMaxImagesPerCall(modelId) {
	var _a2;
	return (_a2 = modelMaxImagesPerCall[modelId]) != null ? _a2 : modelId.startsWith("gpt-image-") ? 10 : 1;
}
var baseImageModelOptionsObject = object({
	/**
	* Quality of the generated image(s).
	*
	* Valid values: `standard`, `hd`, `low`, `medium`, `high`, `xhigh`, `max`, `auto`.
	* `xhigh` and `max` are supported by GPT Image 2.5 models.
	*/
	quality: _enum([
		"standard",
		"hd",
		"low",
		"medium",
		"high",
		"xhigh",
		"max",
		"auto"
	]).optional(),
	/**
	* Background behavior for the generated image(s).
	*
	* If `transparent`, the output format must support transparency
	* (i.e. `png` or `webp`).
	*/
	background: _enum([
		"transparent",
		"opaque",
		"auto"
	]).optional(),
	/**
	* Format in which the generated image(s) are returned.
	*/
	outputFormat: _enum([
		"png",
		"jpeg",
		"webp"
	]).optional(),
	/**
	* Compression level (0-100) for the generated image(s). Applies to the
	* `jpeg` and `webp` output formats.
	*/
	outputCompression: number$1().int().min(0).max(100).optional(),
	/**
	* A unique identifier representing your end-user, which can help OpenAI
	* to monitor and detect abuse.
	*/
	user: string().optional()
});
var openaiImageModelGenerationOptions = lazySchema(() => zodSchema(baseImageModelOptionsObject.extend({
	/**
	* Style of the generated image. `vivid` produces hyper-real and
	* dramatic images; `natural` produces more subdued, less hyper-real
	* looking images.
	*/
	style: _enum(["vivid", "natural"]).optional(),
	/**
	* Content moderation level for the generated image(s). `low` applies
	* less restrictive filtering.
	*/
	moderation: _enum(["auto", "low"]).optional()
})));
var openaiImageModelEditOptions = lazySchema(() => zodSchema(baseImageModelOptionsObject.extend({ 
/**
* Fidelity of the output image(s) to the input image(s).
*/
inputFidelity: _enum(["high", "low"]).optional() })));
var OpenAIImageModel = class _OpenAIImageModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAIImageModel(options.modelId, options.config);
	}
	get maxImagesPerCall() {
		return getMaxImagesPerCall(this.modelId);
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, files, mask, n, size, aspectRatio, seed, providerOptions, headers, abortSignal }) {
		var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
		const warnings = [];
		if (aspectRatio != null) warnings.push({
			type: "unsupported",
			feature: "aspectRatio",
			details: "This model does not support aspect ratio. Use `size` instead."
		});
		if (seed != null) warnings.push({
			type: "unsupported",
			feature: "seed"
		});
		const currentDate = (_c = (_b = (_a2 = this.config._internal) == null ? void 0 : _a2.currentDate) == null ? void 0 : _b.call(_a2)) != null ? _c : /* @__PURE__ */ new Date();
		if (files != null) {
			const openaiOptions2 = (_d = await parseProviderOptions({
				provider: "openai",
				providerOptions,
				schema: openaiImageModelEditOptions
			})) != null ? _d : {};
			const { value: response2, responseHeaders: responseHeaders2 } = await postFormDataToApi({
				url: this.config.url({
					path: "/images/edits",
					modelId: this.modelId
				}),
				headers: combineHeaders((_f = (_e = this.config).headers) == null ? void 0 : _f.call(_e), headers),
				formData: convertToFormData({
					model: this.modelId,
					prompt,
					image: await Promise.all(files.map((file) => file.type === "file" ? new Blob([file.data instanceof Uint8Array ? new Blob([file.data], { type: file.mediaType }) : new Blob([convertBase64ToUint8Array(file.data)], { type: file.mediaType })], { type: file.mediaType }) : downloadBlob(file.url))),
					mask: mask != null ? await fileToBlob(mask) : void 0,
					n,
					size,
					quality: openaiOptions2.quality,
					background: openaiOptions2.background,
					output_format: openaiOptions2.outputFormat,
					output_compression: openaiOptions2.outputCompression,
					input_fidelity: openaiOptions2.inputFidelity,
					user: openaiOptions2.user
				}),
				failedResponseHandler: openaiFailedResponseHandler,
				successfulResponseHandler: createJsonResponseHandler(openaiImageResponseSchema),
				abortSignal,
				fetch: this.config.fetch
			});
			return {
				images: response2.data.map((item) => item.b64_json),
				warnings,
				usage: response2.usage != null ? {
					inputTokens: (_g = response2.usage.input_tokens) != null ? _g : void 0,
					outputTokens: (_h = response2.usage.output_tokens) != null ? _h : void 0,
					totalTokens: (_i = response2.usage.total_tokens) != null ? _i : void 0
				} : void 0,
				response: {
					timestamp: currentDate,
					modelId: this.modelId,
					headers: responseHeaders2
				},
				providerMetadata: { openai: { images: response2.data.map((item, index) => {
					var _a3, _b2, _c2, _d2, _e2, _f2;
					return {
						...item.revised_prompt ? { revisedPrompt: item.revised_prompt } : {},
						created: (_a3 = response2.created) != null ? _a3 : void 0,
						size: (_b2 = response2.size) != null ? _b2 : void 0,
						quality: (_c2 = response2.quality) != null ? _c2 : void 0,
						background: (_d2 = response2.background) != null ? _d2 : void 0,
						outputFormat: (_e2 = response2.output_format) != null ? _e2 : void 0,
						...distributeTokenDetails((_f2 = response2.usage) == null ? void 0 : _f2.input_tokens_details, index, response2.data.length)
					};
				}) } }
			};
		}
		const openaiOptions = (_j = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openaiImageModelGenerationOptions
		})) != null ? _j : {};
		const { value: response, responseHeaders } = await postJsonToApi({
			url: this.config.url({
				path: "/images/generations",
				modelId: this.modelId
			}),
			headers: combineHeaders((_l = (_k = this.config).headers) == null ? void 0 : _l.call(_k), headers),
			body: {
				model: this.modelId,
				prompt,
				n,
				size,
				quality: openaiOptions.quality,
				style: openaiOptions.style,
				background: openaiOptions.background,
				moderation: openaiOptions.moderation,
				output_format: openaiOptions.outputFormat,
				output_compression: openaiOptions.outputCompression,
				user: openaiOptions.user,
				...!hasDefaultResponseFormat(this.modelId) ? { response_format: "b64_json" } : {}
			},
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiImageResponseSchema),
			abortSignal,
			fetch: this.config.fetch
		});
		return {
			images: response.data.map((item) => item.b64_json),
			warnings,
			usage: response.usage != null ? {
				inputTokens: (_m = response.usage.input_tokens) != null ? _m : void 0,
				outputTokens: (_n = response.usage.output_tokens) != null ? _n : void 0,
				totalTokens: (_o = response.usage.total_tokens) != null ? _o : void 0
			} : void 0,
			response: {
				timestamp: currentDate,
				modelId: this.modelId,
				headers: responseHeaders
			},
			providerMetadata: { openai: { images: response.data.map((item, index) => {
				var _a3, _b2, _c2, _d2, _e2, _f2;
				return {
					...item.revised_prompt ? { revisedPrompt: item.revised_prompt } : {},
					created: (_a3 = response.created) != null ? _a3 : void 0,
					size: (_b2 = response.size) != null ? _b2 : void 0,
					quality: (_c2 = response.quality) != null ? _c2 : void 0,
					background: (_d2 = response.background) != null ? _d2 : void 0,
					outputFormat: (_e2 = response.output_format) != null ? _e2 : void 0,
					...distributeTokenDetails((_f2 = response.usage) == null ? void 0 : _f2.input_tokens_details, index, response.data.length)
				};
			}) } }
		};
	}
};
function distributeTokenDetails(details, index, total) {
	if (details == null) return {};
	const result = {};
	if (details.image_tokens != null) {
		const base = Math.floor(details.image_tokens / total);
		const remainder = details.image_tokens - base * (total - 1);
		result.imageTokens = index === total - 1 ? remainder : base;
	}
	if (details.text_tokens != null) {
		const base = Math.floor(details.text_tokens / total);
		const remainder = details.text_tokens - base * (total - 1);
		result.textTokens = index === total - 1 ? remainder : base;
	}
	return result;
}
async function fileToBlob(file) {
	if (!file) return void 0;
	if (file.type === "url") return downloadBlob(file.url);
	const data = file.data instanceof Uint8Array ? file.data : convertBase64ToUint8Array(file.data);
	return new Blob([data], { type: file.mediaType });
}
var applyPatchInputSchema = lazySchema(() => zodSchema(object({
	callId: string(),
	operation: discriminatedUnion("type", [
		object({
			type: literal("create_file"),
			path: string(),
			diff: string()
		}),
		object({
			type: literal("delete_file"),
			path: string()
		}),
		object({
			type: literal("update_file"),
			path: string(),
			diff: string()
		})
	])
})));
var applyPatchOutputSchema = lazySchema(() => zodSchema(object({
	status: _enum(["completed", "failed"]),
	output: string().optional()
})));
var applyPatch = createProviderDefinedToolFactoryWithOutputSchema({
	id: "openai.apply_patch",
	inputSchema: applyPatchInputSchema,
	outputSchema: applyPatchOutputSchema
});
var codeInterpreterInputSchema = lazySchema(() => zodSchema(object({
	code: string().nullish(),
	containerId: string()
})));
var codeInterpreterOutputSchema = lazySchema(() => zodSchema(object({ outputs: array(discriminatedUnion("type", [object({
	type: literal("logs"),
	logs: string()
}), object({
	type: literal("image"),
	url: string()
})])).nullish() })));
var codeInterpreterArgsSchema = lazySchema(() => zodSchema(object({ container: union([string(), object({ fileIds: array(string()).optional() })]).optional() })));
var codeInterpreterToolFactory = createProviderExecutedToolFactory({
	id: "openai.code_interpreter",
	inputSchema: codeInterpreterInputSchema,
	outputSchema: codeInterpreterOutputSchema
});
var codeInterpreter = (args = {}) => {
	return codeInterpreterToolFactory(args);
};
var safetyCheckSchema = object({
	id: string(),
	code: string().optional(),
	message: string().optional()
});
var computerActionSchema = discriminatedUnion("type", [
	object({
		type: literal("click"),
		button: _enum([
			"left",
			"right",
			"wheel",
			"back",
			"forward"
		]),
		x: number$1(),
		y: number$1(),
		keys: array(string()).optional()
	}),
	object({
		type: literal("double_click"),
		x: number$1(),
		y: number$1(),
		keys: array(string()).optional()
	}),
	object({
		type: literal("drag"),
		path: array(object({
			x: number$1(),
			y: number$1()
		})),
		keys: array(string()).optional()
	}),
	object({
		type: literal("keypress"),
		keys: array(string())
	}),
	object({
		type: literal("move"),
		x: number$1(),
		y: number$1(),
		keys: array(string()).optional()
	}),
	object({ type: literal("screenshot") }),
	object({
		type: literal("scroll"),
		x: number$1(),
		y: number$1(),
		scrollX: number$1(),
		scrollY: number$1(),
		keys: array(string()).optional()
	}),
	object({
		type: literal("type"),
		text: string()
	}),
	object({ type: literal("wait") })
]);
var computerInputSchema = lazySchema(() => zodSchema(object({
	actions: array(computerActionSchema),
	pendingSafetyChecks: array(safetyCheckSchema),
	status: _enum([
		"in_progress",
		"completed",
		"incomplete"
	])
})));
var computerOutputSchema = lazySchema(() => zodSchema(object({
	output: union([object({
		type: literal("computer_screenshot"),
		imageUrl: string(),
		fileId: string().optional(),
		detail: _enum([
			"auto",
			"low",
			"high",
			"original"
		]).optional()
	}), object({
		type: literal("computer_screenshot"),
		fileId: string(),
		imageUrl: string().optional(),
		detail: _enum([
			"auto",
			"low",
			"high",
			"original"
		]).optional()
	})]),
	acknowledgedSafetyChecks: array(safetyCheckSchema).optional()
})));
var computerToolFactory = createProviderDefinedToolFactoryWithOutputSchema({
	id: "openai.computer",
	inputSchema: computerInputSchema,
	outputSchema: computerOutputSchema
});
var computer = (options = {}) => computerToolFactory(options);
var customArgsSchema = lazySchema(() => zodSchema(object({
	description: string().optional(),
	async: boolean().optional(),
	format: union([object({
		type: literal("grammar"),
		syntax: _enum(["regex", "lark"]),
		definition: string()
	}), object({ type: literal("text") })]).optional()
})));
var customToolFactory = createProviderDefinedToolFactory({
	id: "openai.custom",
	inputSchema: lazySchema(() => zodSchema(string()))
});
var customTool = (args) => customToolFactory(args);
var comparisonFilterSchema = object({
	key: string(),
	type: _enum([
		"eq",
		"ne",
		"gt",
		"gte",
		"lt",
		"lte",
		"in",
		"nin"
	]),
	value: union([
		string(),
		number$1(),
		boolean(),
		array(string())
	])
});
var compoundFilterSchema = object({
	type: _enum(["and", "or"]),
	filters: array(union([comparisonFilterSchema, lazy(() => compoundFilterSchema)]))
});
var fileSearchArgsSchema = lazySchema(() => zodSchema(object({
	vectorStoreIds: array(string()),
	maxNumResults: number$1().optional(),
	ranking: object({
		ranker: string().optional(),
		scoreThreshold: number$1().optional()
	}).optional(),
	filters: union([comparisonFilterSchema, compoundFilterSchema]).optional()
})));
var fileSearchOutputSchema = lazySchema(() => zodSchema(object({
	queries: array(string()),
	results: array(object({
		attributes: record(string(), unknown()),
		fileId: string(),
		filename: string(),
		score: number$1(),
		text: string()
	})).nullable()
})));
var fileSearch = createProviderExecutedToolFactory({
	id: "openai.file_search",
	inputSchema: object({}),
	outputSchema: fileSearchOutputSchema
});
var imageGenerationArgsSchema = lazySchema(() => zodSchema(object({
	action: _enum([
		"generate",
		"edit",
		"auto"
	]).optional(),
	background: _enum([
		"auto",
		"opaque",
		"transparent"
	]).optional(),
	inputFidelity: _enum(["low", "high"]).optional(),
	inputImageMask: object({
		fileId: string().optional(),
		imageUrl: string().optional()
	}).optional(),
	model: string().optional(),
	moderation: _enum(["auto", "low"]).optional(),
	outputCompression: number$1().int().min(0).max(100).optional(),
	outputFormat: _enum([
		"png",
		"jpeg",
		"webp"
	]).optional(),
	partialImages: number$1().int().min(0).max(3).optional(),
	quality: _enum([
		"auto",
		"low",
		"medium",
		"high",
		"xhigh",
		"max"
	]).optional(),
	size: union([_enum([
		"1024x1024",
		"1024x1536",
		"1536x1024",
		"auto"
	]), string().regex(/^\d+x\d+$/)]).optional()
}).strict()));
var imageGenerationToolFactory = createProviderExecutedToolFactory({
	id: "openai.image_generation",
	inputSchema: lazySchema(() => zodSchema(object({}))),
	outputSchema: lazySchema(() => zodSchema(object({ result: string() })))
});
var imageGeneration = (args = {}) => {
	return imageGenerationToolFactory(args);
};
var localShellInputSchema = lazySchema(() => zodSchema(object({ action: object({
	type: literal("exec"),
	command: array(string()),
	timeoutMs: number$1().optional(),
	user: string().optional(),
	workingDirectory: string().optional(),
	env: record(string(), string()).optional()
}) })));
var localShellOutputSchema = lazySchema(() => zodSchema(object({ output: string() })));
var localShell = createProviderDefinedToolFactoryWithOutputSchema({
	id: "openai.local_shell",
	inputSchema: localShellInputSchema,
	outputSchema: localShellOutputSchema
});
var shellInputSchema = lazySchema(() => zodSchema(object({ action: object({
	commands: array(string()),
	timeoutMs: number$1().optional(),
	maxOutputLength: number$1().optional()
}) })));
var shellOutputSchema = lazySchema(() => zodSchema(object({ output: array(object({
	stdout: string(),
	stderr: string(),
	outcome: discriminatedUnion("type", [object({ type: literal("timeout") }), object({
		type: literal("exit"),
		exitCode: number$1()
	})])
})) })));
var shellSkillsSchema = array(discriminatedUnion("type", [object({
	type: literal("skillReference"),
	providerReference: record(string(), string()),
	version: string().optional()
}), object({
	type: literal("inline"),
	name: string(),
	description: string(),
	source: object({
		type: literal("base64"),
		mediaType: literal("application/zip"),
		data: string()
	})
})])).optional();
var shellArgsSchema = lazySchema(() => zodSchema(object({ environment: union([
	object({
		type: literal("containerAuto"),
		fileIds: array(string()).optional(),
		memoryLimit: _enum([
			"1g",
			"4g",
			"16g",
			"64g"
		]).optional(),
		networkPolicy: discriminatedUnion("type", [object({ type: literal("disabled") }), object({
			type: literal("allowlist"),
			allowedDomains: array(string()),
			domainSecrets: array(object({
				domain: string(),
				name: string(),
				value: string()
			})).optional()
		})]).optional(),
		skills: shellSkillsSchema
	}),
	object({
		type: literal("containerReference"),
		containerId: string()
	}),
	object({
		type: literal("local").optional(),
		skills: array(object({
			name: string(),
			description: string(),
			path: string()
		})).optional()
	})
]).optional() })));
var shell = createProviderDefinedToolFactoryWithOutputSchema({
	id: "openai.shell",
	inputSchema: shellInputSchema,
	outputSchema: shellOutputSchema
});
var toolSearchArgsSchema = lazySchema(() => zodSchema(object({
	execution: _enum(["server", "client"]).optional(),
	description: string().optional(),
	parameters: record(string(), unknown()).optional()
})));
var toolSearchInputSchema = lazySchema(() => zodSchema(object({
	arguments: unknown().optional(),
	call_id: string().nullish()
})));
var toolSearchOutputSchema = lazySchema(() => zodSchema(object({ tools: array(record(string(), unknown())) })));
var toolSearchToolFactory = createProviderDefinedToolFactoryWithOutputSchema({
	id: "openai.tool_search",
	inputSchema: toolSearchInputSchema,
	outputSchema: toolSearchOutputSchema
});
var toolSearch = (args = {}) => toolSearchToolFactory(args);
var webSearchArgsSchema = lazySchema(() => zodSchema(object({
	externalWebAccess: boolean().optional(),
	filters: object({
		allowedDomains: array(string()).optional(),
		blockedDomains: array(string()).optional()
	}).optional(),
	searchContextSize: _enum([
		"low",
		"medium",
		"high"
	]).optional(),
	userLocation: object({
		type: literal("approximate"),
		country: string().optional(),
		city: string().optional(),
		region: string().optional(),
		timezone: string().optional()
	}).optional()
})));
var webSearchToolFactory = createProviderExecutedToolFactory({
	id: "openai.web_search",
	inputSchema: lazySchema(() => zodSchema(object({}))),
	outputSchema: lazySchema(() => zodSchema(object({
		action: discriminatedUnion("type", [
			object({
				type: literal("search"),
				query: string().optional(),
				queries: array(string()).optional()
			}),
			object({
				type: literal("openPage"),
				url: string().nullish()
			}),
			object({
				type: literal("findInPage"),
				url: string().nullish(),
				pattern: string().nullish()
			})
		]).optional(),
		sources: array(discriminatedUnion("type", [object({
			type: literal("url"),
			url: string()
		}), object({
			type: literal("api"),
			name: string()
		})])).optional()
	})))
});
var webSearch = (args = {}) => webSearchToolFactory(args);
var webSearchPreviewArgsSchema = lazySchema(() => zodSchema(object({
	searchContextSize: _enum([
		"low",
		"medium",
		"high"
	]).optional(),
	userLocation: object({
		type: literal("approximate"),
		country: string().optional(),
		city: string().optional(),
		region: string().optional(),
		timezone: string().optional()
	}).optional()
})));
var webSearchPreview = createProviderExecutedToolFactory({
	id: "openai.web_search_preview",
	inputSchema: lazySchema(() => zodSchema(object({}))),
	outputSchema: lazySchema(() => zodSchema(object({ action: discriminatedUnion("type", [
		object({
			type: literal("search"),
			query: string().optional()
		}),
		object({
			type: literal("openPage"),
			url: string().nullish()
		}),
		object({
			type: literal("findInPage"),
			url: string().nullish(),
			pattern: string().nullish()
		})
	]).optional() })))
});
var jsonValueSchema = lazy(() => union([
	string(),
	number$1(),
	boolean(),
	_null(),
	array(jsonValueSchema),
	record(string(), jsonValueSchema)
]));
var mcpArgsSchema = lazySchema(() => zodSchema(object({
	serverLabel: string(),
	allowedTools: union([array(string()), object({
		readOnly: boolean().optional(),
		toolNames: array(string()).optional()
	})]).optional(),
	authorization: string().optional(),
	connectorId: string().optional(),
	headers: record(string(), string()).optional(),
	requireApproval: union([_enum(["always", "never"]), object({ never: object({ toolNames: array(string()).optional() }).optional() })]).optional(),
	serverDescription: string().optional(),
	serverUrl: string().optional()
}).refine((v) => v.serverUrl != null || v.connectorId != null, "One of serverUrl or connectorId must be provided.")));
var mcpToolFactory = createProviderExecutedToolFactory({
	id: "openai.mcp",
	inputSchema: lazySchema(() => zodSchema(object({}))),
	outputSchema: lazySchema(() => zodSchema(object({
		type: literal("call"),
		serverLabel: string(),
		name: string(),
		arguments: string(),
		output: string().nullish(),
		error: union([string(), jsonValueSchema]).optional()
	})))
});
var mcp = (args) => mcpToolFactory(args);
var programmaticToolCallingInputSchema = lazySchema(() => zodSchema(object({
	code: string(),
	fingerprint: string()
})));
var programmaticToolCallingOutputSchema = lazySchema(() => zodSchema(object({
	result: string(),
	status: _enum(["completed", "incomplete"])
})));
var programmaticToolCallingFactory = createProviderExecutedToolFactory({
	id: "openai.programmatic_tool_calling",
	inputSchema: programmaticToolCallingInputSchema,
	outputSchema: programmaticToolCallingOutputSchema,
	supportsDeferredResults: true
});
var programmaticToolCalling = () => toolCaller(programmaticToolCallingFactory({}), {
	type: "provider",
	prepareProviderOptions: (providerOptions) => {
		var _a2;
		const openaiOptions = providerOptions == null ? void 0 : providerOptions.openai;
		return {
			...providerOptions,
			openai: {
				...openaiOptions,
				allowedCallers: [.../* @__PURE__ */ new Set([...(_a2 = openaiOptions == null ? void 0 : openaiOptions.allowedCallers) != null ? _a2 : [], "programmatic"])]
			}
		};
	}
});
var openaiTools = {
	/**
	* The apply_patch tool lets GPT-5.1 create, update, and delete files in your
	* codebase using structured diffs. Instead of just suggesting edits, the model
	* emits patch operations that your application applies and then reports back on,
	* enabling iterative, multi-step code editing workflows.
	*
	*/
	applyPatch,
	/**
	* Custom tools let callers constrain model output to a grammar (regex or
	* Lark syntax). The model returns a `custom_tool_call` output item whose
	* `input` field is a string matching the specified grammar.
	*
	* @param description - An optional description of the tool.
	* @param async - Whether the model can continue without waiting for the tool result.
	* @param format - The output format constraint (grammar type, syntax, and definition).
	*/
	customTool,
	/**
	* The Code Interpreter tool allows models to write and run Python code in a
	* sandboxed environment to solve complex problems in domains like data analysis,
	* coding, and math.
	*
	* @param container - The container to use for the code interpreter.
	*/
	codeInterpreter,
	/**
	* The computer tool allows models to operate a browser or desktop through
	* batched UI actions. Your application executes the actions and returns an
	* updated screenshot.
	*
	* WARNING: Run computer use in an isolated environment, treat on-screen
	* content as untrusted, and require confirmation for consequential actions.
	*/
	computer,
	/**
	* File search is a tool available in the Responses API. It enables models to
	* retrieve information in a knowledge base of previously uploaded files through
	* semantic and keyword search.
	*
	* @param vectorStoreIds - The vector store IDs to use for the file search.
	* @param maxNumResults - The maximum number of results to return.
	* @param ranking - The ranking options to use for the file search.
	* @param filters - The filters to use for the file search.
	*/
	fileSearch,
	/**
	* The image generation tool allows you to generate images using a text prompt,
	* and optionally image inputs. It leverages the GPT Image model,
	* and automatically optimizes text inputs for improved performance.
	*
	* @param background - Background type for the generated image. One of 'auto', 'opaque', or 'transparent'.
	* @param inputFidelity - Input fidelity for the generated image. One of 'low' or 'high'.
	* @param inputImageMask - Optional mask for inpainting. Contains fileId and/or imageUrl.
	* @param model - The image generation model to use. Default: gpt-image-1.
	* @param moderation - Moderation level for the generated image. Default: 'auto'.
	* @param outputCompression - Compression level for the output image (0-100).
	* @param outputFormat - The output format of the generated image. One of 'png', 'jpeg', or 'webp'.
	* @param partialImages - Number of partial images to generate in streaming mode (0-3).
	* @param quality - The quality of the generated image. One of 'auto', 'low', 'medium', 'high', 'xhigh', or 'max'. 'xhigh' and 'max' require a GPT Image 2.5 model.
	* @param size - The size of the generated image. One of 'auto', '1024x1024', '1024x1536', or '1536x1024'.
	*/
	imageGeneration,
	/**
	* Local shell is a tool that allows agents to run shell commands locally
	* on a machine you or the user provides.
	*
	* Supported models: `gpt-5-codex`
	*/
	localShell,
	/**
	* The shell tool allows the model to interact with your local computer through
	* a controlled command-line interface. The model proposes shell commands; your
	* integration executes them and returns the outputs.
	*
	* Available through the Responses API for use with GPT-5.1.
	*
	* WARNING: Running arbitrary shell commands can be dangerous. Always sandbox
	* execution or add strict allow-/deny-lists before forwarding a command to
	* the system shell.
	*/
	shell,
	/**
	* Web search allows models to access up-to-date information from the internet
	* and provide answers with sourced citations.
	*
	* @param searchContextSize - The search context size to use for the web search.
	* @param userLocation - The user location to use for the web search.
	*/
	webSearchPreview,
	/**
	* Web search allows models to access up-to-date information from the internet
	* and provide answers with sourced citations.
	*
	* @param filters - The filters to use for the web search.
	* @param searchContextSize - The search context size to use for the web search.
	* @param userLocation - The user location to use for the web search.
	*/
	webSearch,
	/**
	* MCP (Model Context Protocol) allows models to call tools exposed by
	* remote MCP servers or service connectors.
	*
	* @param serverLabel - Label to identify the MCP server.
	* @param allowedTools - Allowed tool names or filter object.
	* @param authorization - OAuth access token for the MCP server/connector.
	* @param connectorId - Identifier for a service connector.
	* @param headers - Optional headers to include in MCP requests.
	* // param requireApproval - Approval policy ('always'|'never'|filter object). (Removed - always 'never')
	* @param serverDescription - Optional description of the server.
	* @param serverUrl - URL for the MCP server.
	*/
	mcp,
	/**
	* Programmatic Tool Calling lets OpenAI Responses models write and execute
	* JavaScript that orchestrates eligible tools.
	*/
	programmaticToolCalling,
	/**
	* Tool search allows the model to dynamically search for and load deferred
	* tools into the model's context as needed. This helps reduce overall token
	* usage, cost, and latency by only loading tools when the model needs them.
	*
	* To use tool search, mark functions or namespaces with `defer_loading: true`
	* in the tools array. The model will use tool search to load these tools
	* when it determines they are needed.
	*/
	toolSearch
};
function convertOpenAIResponsesUsage(usage) {
	var _a2, _b, _c, _d, _e, _f;
	if (usage == null) return createNullLanguageModelUsage();
	const inputTokens = usage.input_tokens;
	const outputTokens = usage.output_tokens;
	const cachedTokens = (_b = (_a2 = usage.input_tokens_details) == null ? void 0 : _a2.cached_tokens) != null ? _b : 0;
	const cacheWriteTokens = (_d = (_c = usage.input_tokens_details) == null ? void 0 : _c.cache_write_tokens) != null ? _d : void 0;
	const reasoningTokens = (_f = (_e = usage.output_tokens_details) == null ? void 0 : _e.reasoning_tokens) != null ? _f : 0;
	return {
		inputTokens: {
			total: inputTokens,
			noCache: inputTokens - cachedTokens - (cacheWriteTokens != null ? cacheWriteTokens : 0),
			cacheRead: cachedTokens,
			cacheWrite: cacheWriteTokens
		},
		outputTokens: {
			total: outputTokens,
			text: outputTokens - reasoningTokens,
			reasoning: reasoningTokens
		},
		raw: usage
	};
}
function mapOpenAIResponseFinishReason({ finishReason, hasFunctionCall }) {
	switch (finishReason) {
		case void 0:
		case null: return hasFunctionCall ? "tool-calls" : "stop";
		case "max_output_tokens": return "length";
		case "content_filter": return "content-filter";
		default: return hasFunctionCall ? "tool-calls" : "other";
	}
}
var jsonValueSchema2 = lazy(() => union([
	string(),
	number$1(),
	boolean(),
	_null(),
	array(jsonValueSchema2),
	record(string(), jsonValueSchema2.optional())
]));
var jsonObjectSchema = record(string(), jsonValueSchema2.optional());
var openaiResponsesUsageSchema = intersection(jsonObjectSchema, object({
	input_tokens: number$1(),
	input_tokens_details: intersection(jsonObjectSchema, object({
		cached_tokens: number$1().nullish(),
		cache_write_tokens: number$1().nullish(),
		orchestration_input_tokens: number$1().nullish(),
		orchestration_input_cached_tokens: number$1().nullish()
	})).nullish(),
	output_tokens: number$1(),
	output_tokens_details: intersection(jsonObjectSchema, object({
		reasoning_tokens: number$1().nullish(),
		orchestration_output_tokens: number$1().nullish()
	})).nullish(),
	total_tokens: number$1().optional()
}));
var openaiResponsesComputerSafetyCheckSchema = object({
	id: string(),
	code: string().nullish(),
	message: string().nullish()
});
var openaiResponsesComputerActionSchema = discriminatedUnion("type", [
	object({
		type: literal("click"),
		button: _enum([
			"left",
			"right",
			"wheel",
			"back",
			"forward"
		]),
		x: number$1(),
		y: number$1(),
		keys: array(string()).nullish()
	}),
	object({
		type: literal("double_click"),
		x: number$1(),
		y: number$1(),
		keys: array(string()).nullish()
	}),
	object({
		type: literal("drag"),
		path: array(object({
			x: number$1(),
			y: number$1()
		})),
		keys: array(string()).nullish()
	}),
	object({
		type: literal("keypress"),
		keys: array(string())
	}),
	object({
		type: literal("move"),
		x: number$1(),
		y: number$1(),
		keys: array(string()).nullish()
	}),
	object({ type: literal("screenshot") }),
	object({
		type: literal("scroll"),
		x: number$1(),
		y: number$1(),
		scroll_x: number$1(),
		scroll_y: number$1(),
		keys: array(string()).nullish()
	}),
	object({
		type: literal("type"),
		text: string()
	}),
	object({ type: literal("wait") })
]);
var openaiResponsesComputerCallSchema = object({
	type: literal("computer_call"),
	id: string(),
	call_id: string().nullish(),
	status: _enum([
		"in_progress",
		"completed",
		"incomplete"
	]),
	action: openaiResponsesComputerActionSchema.nullish(),
	actions: array(openaiResponsesComputerActionSchema).nullish(),
	pending_safety_checks: array(openaiResponsesComputerSafetyCheckSchema).nullish()
});
var openaiResponsesToolCallerSchema = discriminatedUnion("type", [object({ type: literal("direct") }), object({
	type: literal("program"),
	caller_id: string()
})]);
var openaiResponsesProgramSchema = object({
	type: literal("program"),
	id: string(),
	call_id: string(),
	code: string(),
	fingerprint: string()
});
var openaiResponsesProgramOutputSchema = object({
	type: literal("program_output"),
	id: string(),
	call_id: string(),
	result: string(),
	status: _enum(["completed", "incomplete"])
});
var openaiResponsesLocalShellCallSchema = object({
	type: literal("local_shell_call"),
	id: string(),
	call_id: string(),
	action: object({
		type: literal("exec"),
		command: array(string()),
		timeout_ms: number$1().optional(),
		user: string().optional(),
		working_directory: string().optional(),
		env: record(string(), string()).optional()
	})
});
var openaiResponsesNestedErrorChunkSchema = object({
	type: literal("error"),
	sequence_number: number$1(),
	error: object({
		type: string(),
		code: string(),
		message: string(),
		param: string().nullish()
	})
});
var openaiResponsesErrorChunkSchema = object({
	type: literal("error"),
	sequence_number: number$1(),
	code: string().nullish(),
	message: string(),
	param: string().nullish()
});
var openaiResponsesModeledChunkTypes = /* @__PURE__ */ new Set([
	"error",
	"response.apply_patch_call_operation_diff.delta",
	"response.apply_patch_call_operation_diff.done",
	"response.code_interpreter_call_code.delta",
	"response.code_interpreter_call_code.done",
	"response.completed",
	"response.created",
	"response.custom_tool_call_input.delta",
	"response.failed",
	"response.function_call_arguments.delta",
	"response.function_call_arguments.done",
	"response.image_generation_call.partial_image",
	"response.in_progress",
	"response.incomplete",
	"response.output_item.added",
	"response.output_item.done",
	"response.output_text.annotation.added",
	"response.output_text.delta",
	"response.reasoning_summary_part.added",
	"response.reasoning_summary_part.done",
	"response.reasoning_summary_text.delta"
]);
var openaiResponsesModeledOutputItemTypes = /* @__PURE__ */ new Set([
	"apply_patch_call",
	"code_interpreter_call",
	"compaction",
	"computer_call",
	"custom_tool_call",
	"file_search_call",
	"function_call",
	"image_generation_call",
	"local_shell_call",
	"mcp_approval_request",
	"mcp_call",
	"mcp_list_tools",
	"message",
	"program",
	"program_output",
	"reasoning",
	"shell_call",
	"shell_call_output",
	"tool_search_call",
	"tool_search_output",
	"web_search_call"
]);
function isModeledOpenAIResponsesChunk(value) {
	if (typeof value.type !== "string" || !openaiResponsesModeledChunkTypes.has(value.type)) return false;
	if (value.type !== "response.output_item.added" && value.type !== "response.output_item.done") return true;
	if (!isRecord(value.item) || typeof value.item.type !== "string") return true;
	return openaiResponsesModeledOutputItemTypes.has(value.item.type);
}
var openaiResponsesChunkSchema = lazySchema(() => zodSchema(union([
	object({
		type: literal("response.output_text.delta"),
		item_id: string(),
		output_index: number$1().nullish(),
		delta: string(),
		logprobs: array(object({
			token: string(),
			logprob: number$1(),
			top_logprobs: array(object({
				token: string(),
				logprob: number$1()
			}))
		})).nullish()
	}),
	object({
		type: _enum(["response.completed", "response.incomplete"]),
		response: object({
			incomplete_details: object({ reason: string() }).nullish(),
			usage: openaiResponsesUsageSchema.nullish(),
			reasoning: object({ context: string().nullish() }).nullish(),
			service_tier: string().nullish()
		})
	}),
	object({
		type: literal("response.failed"),
		sequence_number: number$1(),
		response: object({
			error: object({
				code: string().nullish(),
				message: string()
			}).nullish(),
			incomplete_details: object({ reason: string() }).nullish(),
			usage: openaiResponsesUsageSchema.nullish(),
			reasoning: object({ context: string().nullish() }).nullish(),
			service_tier: string().nullish()
		})
	}),
	object({
		type: literal("response.created"),
		response: object({
			id: string(),
			created_at: number$1(),
			model: string(),
			service_tier: string().nullish()
		})
	}),
	object({
		type: literal("response.in_progress"),
		response: object({
			id: string(),
			created_at: number$1(),
			model: string(),
			service_tier: string().nullish()
		})
	}),
	object({
		type: literal("response.output_item.added"),
		output_index: number$1(),
		item: discriminatedUnion("type", [
			object({
				type: literal("message"),
				id: string(),
				phase: _enum(["commentary", "final_answer"]).nullish()
			}),
			object({
				type: literal("reasoning"),
				id: string(),
				encrypted_content: string().nullish()
			}),
			object({
				type: literal("function_call"),
				id: string(),
				call_id: string(),
				name: string(),
				arguments: string(),
				async: boolean().nullish(),
				namespace: string().nullish(),
				caller: openaiResponsesToolCallerSchema.nullish()
			}),
			openaiResponsesProgramSchema,
			openaiResponsesProgramOutputSchema,
			object({
				type: literal("web_search_call"),
				id: string(),
				status: string()
			}),
			openaiResponsesComputerCallSchema,
			object({
				type: literal("file_search_call"),
				id: string()
			}),
			openaiResponsesLocalShellCallSchema,
			object({
				type: literal("image_generation_call"),
				id: string()
			}),
			object({
				type: literal("code_interpreter_call"),
				id: string(),
				container_id: string(),
				code: string().nullable(),
				outputs: array(discriminatedUnion("type", [object({
					type: literal("logs"),
					logs: string()
				}), object({
					type: literal("image"),
					url: string()
				})])).nullable(),
				status: string()
			}),
			object({
				type: literal("mcp_call"),
				id: string(),
				status: string(),
				approval_request_id: string().nullish()
			}),
			object({
				type: literal("mcp_list_tools"),
				id: string()
			}),
			object({
				type: literal("mcp_approval_request"),
				id: string()
			}),
			object({
				type: literal("apply_patch_call"),
				id: string(),
				call_id: string(),
				status: _enum(["in_progress", "completed"]),
				operation: discriminatedUnion("type", [
					object({
						type: literal("create_file"),
						path: string(),
						diff: string()
					}),
					object({
						type: literal("delete_file"),
						path: string()
					}),
					object({
						type: literal("update_file"),
						path: string(),
						diff: string()
					})
				])
			}),
			object({
				type: literal("custom_tool_call"),
				id: string(),
				call_id: string(),
				name: string(),
				input: string(),
				async: boolean().nullish()
			}),
			object({
				type: literal("shell_call"),
				id: string(),
				call_id: string(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				action: object({ commands: array(string()) })
			}),
			object({
				type: literal("compaction"),
				id: string(),
				encrypted_content: string().nullish()
			}),
			object({
				type: literal("shell_call_output"),
				id: string(),
				call_id: string(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				output: array(object({
					stdout: string(),
					stderr: string(),
					outcome: discriminatedUnion("type", [object({ type: literal("timeout") }), object({
						type: literal("exit"),
						exit_code: number$1()
					})])
				}))
			}),
			object({
				type: literal("tool_search_call"),
				id: string(),
				execution: _enum(["server", "client"]),
				call_id: string().nullable(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				arguments: unknown()
			}),
			object({
				type: literal("tool_search_output"),
				id: string(),
				execution: _enum(["server", "client"]),
				call_id: string().nullable(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				tools: array(record(string(), jsonValueSchema2.optional()))
			})
		])
	}),
	object({
		type: literal("response.output_item.done"),
		output_index: number$1(),
		item: discriminatedUnion("type", [
			object({
				type: literal("message"),
				id: string(),
				phase: _enum(["commentary", "final_answer"]).nullish()
			}),
			object({
				type: literal("reasoning"),
				id: string(),
				encrypted_content: string().nullish()
			}),
			object({
				type: literal("function_call"),
				id: string(),
				call_id: string(),
				name: string(),
				arguments: string(),
				async: boolean().nullish(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				namespace: string().nullish(),
				caller: openaiResponsesToolCallerSchema.nullish()
			}),
			openaiResponsesProgramSchema,
			openaiResponsesProgramOutputSchema,
			object({
				type: literal("custom_tool_call"),
				id: string(),
				call_id: string(),
				name: string(),
				input: string(),
				async: boolean().nullish(),
				status: literal("completed")
			}),
			object({
				type: literal("code_interpreter_call"),
				id: string(),
				code: string().nullable(),
				container_id: string(),
				outputs: array(discriminatedUnion("type", [object({
					type: literal("logs"),
					logs: string()
				}), object({
					type: literal("image"),
					url: string()
				})])).nullable()
			}),
			object({
				type: literal("image_generation_call"),
				id: string(),
				result: string()
			}),
			object({
				type: literal("web_search_call"),
				id: string(),
				status: string(),
				action: discriminatedUnion("type", [
					object({
						type: literal("search"),
						query: string().nullish(),
						queries: array(string()).nullish(),
						sources: array(discriminatedUnion("type", [object({
							type: literal("url"),
							url: string()
						}), object({
							type: literal("api"),
							name: string()
						})])).nullish()
					}),
					object({
						type: literal("open_page"),
						url: string().nullish()
					}),
					object({
						type: literal("find_in_page"),
						url: string().nullish(),
						pattern: string().nullish()
					})
				]).nullish()
			}),
			object({
				type: literal("file_search_call"),
				id: string(),
				queries: array(string()),
				results: array(object({
					attributes: record(string(), union([
						string(),
						number$1(),
						boolean()
					])),
					file_id: string(),
					filename: string(),
					score: number$1(),
					text: string()
				})).nullish()
			}),
			openaiResponsesLocalShellCallSchema,
			openaiResponsesComputerCallSchema,
			object({
				type: literal("mcp_call"),
				id: string(),
				status: string(),
				arguments: string(),
				name: string(),
				server_label: string(),
				output: string().nullish(),
				error: union([string(), object({
					type: string().optional(),
					code: union([number$1(), string()]).optional(),
					message: string().optional()
				}).loose()]).nullish(),
				approval_request_id: string().nullish()
			}),
			object({
				type: literal("mcp_list_tools"),
				id: string(),
				server_label: string(),
				tools: array(object({
					name: string(),
					description: string().optional(),
					input_schema: any(),
					annotations: record(string(), unknown()).optional()
				})),
				error: union([string(), object({
					type: string().optional(),
					code: union([number$1(), string()]).optional(),
					message: string().optional()
				}).loose()]).optional()
			}),
			object({
				type: literal("mcp_approval_request"),
				id: string(),
				server_label: string(),
				name: string(),
				arguments: string(),
				approval_request_id: string().optional()
			}),
			object({
				type: literal("apply_patch_call"),
				id: string(),
				call_id: string(),
				status: _enum(["in_progress", "completed"]),
				operation: discriminatedUnion("type", [
					object({
						type: literal("create_file"),
						path: string(),
						diff: string()
					}),
					object({
						type: literal("delete_file"),
						path: string()
					}),
					object({
						type: literal("update_file"),
						path: string(),
						diff: string()
					})
				])
			}),
			object({
				type: literal("shell_call"),
				id: string(),
				call_id: string(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				action: object({ commands: array(string()) })
			}),
			object({
				type: literal("compaction"),
				id: string(),
				encrypted_content: string()
			}),
			object({
				type: literal("shell_call_output"),
				id: string(),
				call_id: string(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				output: array(object({
					stdout: string(),
					stderr: string(),
					outcome: discriminatedUnion("type", [object({ type: literal("timeout") }), object({
						type: literal("exit"),
						exit_code: number$1()
					})])
				}))
			}),
			object({
				type: literal("tool_search_call"),
				id: string(),
				execution: _enum(["server", "client"]),
				call_id: string().nullable(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				arguments: unknown()
			}),
			object({
				type: literal("tool_search_output"),
				id: string(),
				execution: _enum(["server", "client"]),
				call_id: string().nullable(),
				status: _enum([
					"in_progress",
					"completed",
					"incomplete"
				]),
				tools: array(record(string(), jsonValueSchema2.optional()))
			})
		])
	}),
	object({
		type: literal("response.function_call_arguments.delta"),
		item_id: string(),
		output_index: number$1(),
		delta: string()
	}),
	object({
		type: literal("response.function_call_arguments.done"),
		item_id: string(),
		output_index: number$1(),
		arguments: string()
	}),
	object({
		type: literal("response.custom_tool_call_input.delta"),
		item_id: string(),
		output_index: number$1(),
		delta: string()
	}),
	object({
		type: literal("response.image_generation_call.partial_image"),
		item_id: string(),
		output_index: number$1(),
		partial_image_b64: string()
	}),
	object({
		type: literal("response.code_interpreter_call_code.delta"),
		item_id: string(),
		output_index: number$1(),
		delta: string()
	}),
	object({
		type: literal("response.code_interpreter_call_code.done"),
		item_id: string(),
		output_index: number$1(),
		code: string()
	}),
	object({
		type: literal("response.output_text.annotation.added"),
		annotation: discriminatedUnion("type", [
			object({
				type: literal("url_citation"),
				start_index: number$1(),
				end_index: number$1(),
				url: string(),
				title: string()
			}),
			object({
				type: literal("file_citation"),
				file_id: string(),
				filename: string(),
				index: number$1()
			}),
			object({
				type: literal("container_file_citation"),
				container_id: string(),
				file_id: string(),
				filename: string(),
				start_index: number$1(),
				end_index: number$1()
			}),
			object({
				type: literal("file_path"),
				file_id: string(),
				index: number$1()
			})
		])
	}),
	object({
		type: literal("response.reasoning_summary_part.added"),
		item_id: string(),
		output_index: number$1().nullish(),
		summary_index: number$1()
	}),
	object({
		type: literal("response.reasoning_summary_text.delta"),
		item_id: string(),
		output_index: number$1().nullish(),
		summary_index: number$1(),
		delta: string()
	}),
	object({
		type: literal("response.reasoning_summary_part.done"),
		item_id: string(),
		output_index: number$1().nullish(),
		summary_index: number$1()
	}),
	object({
		type: literal("response.apply_patch_call_operation_diff.delta"),
		item_id: string(),
		output_index: number$1(),
		delta: string(),
		obfuscation: string().nullish()
	}),
	object({
		type: literal("response.apply_patch_call_operation_diff.done"),
		item_id: string(),
		output_index: number$1(),
		diff: string()
	}),
	openaiResponsesNestedErrorChunkSchema,
	openaiResponsesErrorChunkSchema,
	object({ type: string() }).loose().refine((value) => !isModeledOpenAIResponsesChunk(value), { message: "Known response chunk failed schema validation" }).transform((value) => ({
		type: "unknown_chunk",
		message: value.type
	}))
])));
var openaiResponsesResponseSchema = lazySchema(() => zodSchema(object({
	id: string().optional(),
	created_at: number$1().optional(),
	error: object({
		message: string(),
		type: string(),
		param: string().nullish(),
		code: string()
	}).nullish(),
	model: string().optional(),
	output: array(discriminatedUnion("type", [
		object({
			type: literal("message"),
			role: literal("assistant"),
			id: string(),
			phase: _enum(["commentary", "final_answer"]).nullish(),
			content: array(object({
				type: literal("output_text"),
				text: string(),
				logprobs: array(object({
					token: string(),
					logprob: number$1(),
					top_logprobs: array(object({
						token: string(),
						logprob: number$1()
					}))
				})).nullish(),
				annotations: array(discriminatedUnion("type", [
					object({
						type: literal("url_citation"),
						start_index: number$1(),
						end_index: number$1(),
						url: string(),
						title: string()
					}),
					object({
						type: literal("file_citation"),
						file_id: string(),
						filename: string(),
						index: number$1()
					}),
					object({
						type: literal("container_file_citation"),
						container_id: string(),
						file_id: string(),
						filename: string(),
						start_index: number$1(),
						end_index: number$1()
					}),
					object({
						type: literal("file_path"),
						file_id: string(),
						index: number$1()
					})
				]))
			}))
		}),
		object({
			type: literal("web_search_call"),
			id: string(),
			status: string(),
			action: discriminatedUnion("type", [
				object({
					type: literal("search"),
					query: string().nullish(),
					queries: array(string()).nullish(),
					sources: array(discriminatedUnion("type", [object({
						type: literal("url"),
						url: string()
					}), object({
						type: literal("api"),
						name: string()
					})])).nullish()
				}),
				object({
					type: literal("open_page"),
					url: string().nullish()
				}),
				object({
					type: literal("find_in_page"),
					url: string().nullish(),
					pattern: string().nullish()
				})
			]).nullish()
		}),
		object({
			type: literal("file_search_call"),
			id: string(),
			queries: array(string()),
			results: array(object({
				attributes: record(string(), union([
					string(),
					number$1(),
					boolean()
				])),
				file_id: string(),
				filename: string(),
				score: number$1(),
				text: string()
			})).nullish()
		}),
		object({
			type: literal("code_interpreter_call"),
			id: string(),
			code: string().nullable(),
			container_id: string(),
			outputs: array(discriminatedUnion("type", [object({
				type: literal("logs"),
				logs: string()
			}), object({
				type: literal("image"),
				url: string()
			})])).nullable()
		}),
		object({
			type: literal("image_generation_call"),
			id: string(),
			result: string()
		}),
		openaiResponsesLocalShellCallSchema,
		object({
			type: literal("function_call"),
			call_id: string(),
			name: string(),
			arguments: string(),
			id: string(),
			async: boolean().nullish(),
			namespace: string().nullish(),
			caller: openaiResponsesToolCallerSchema.nullish()
		}),
		openaiResponsesProgramSchema,
		openaiResponsesProgramOutputSchema,
		object({
			type: literal("custom_tool_call"),
			call_id: string(),
			name: string(),
			input: string(),
			id: string(),
			async: boolean().nullish()
		}),
		openaiResponsesComputerCallSchema,
		object({
			type: literal("reasoning"),
			id: string(),
			encrypted_content: string().nullish(),
			summary: array(object({
				type: literal("summary_text"),
				text: string()
			}))
		}),
		object({
			type: literal("mcp_call"),
			id: string(),
			status: string(),
			arguments: string(),
			name: string(),
			server_label: string(),
			output: string().nullish(),
			error: union([string(), object({
				type: string().optional(),
				code: union([number$1(), string()]).optional(),
				message: string().optional()
			}).loose()]).nullish(),
			approval_request_id: string().nullish()
		}),
		object({
			type: literal("mcp_list_tools"),
			id: string(),
			server_label: string(),
			tools: array(object({
				name: string(),
				description: string().optional(),
				input_schema: any(),
				annotations: record(string(), unknown()).optional()
			})),
			error: union([string(), object({
				type: string().optional(),
				code: union([number$1(), string()]).optional(),
				message: string().optional()
			}).loose()]).optional()
		}),
		object({
			type: literal("mcp_approval_request"),
			id: string(),
			server_label: string(),
			name: string(),
			arguments: string(),
			approval_request_id: string().optional()
		}),
		object({
			type: literal("apply_patch_call"),
			id: string(),
			call_id: string(),
			status: _enum(["in_progress", "completed"]),
			operation: discriminatedUnion("type", [
				object({
					type: literal("create_file"),
					path: string(),
					diff: string()
				}),
				object({
					type: literal("delete_file"),
					path: string()
				}),
				object({
					type: literal("update_file"),
					path: string(),
					diff: string()
				})
			])
		}),
		object({
			type: literal("shell_call"),
			id: string(),
			call_id: string(),
			status: _enum([
				"in_progress",
				"completed",
				"incomplete"
			]),
			action: object({ commands: array(string()) })
		}),
		object({
			type: literal("compaction"),
			id: string(),
			encrypted_content: string()
		}),
		object({
			type: literal("shell_call_output"),
			id: string(),
			call_id: string(),
			status: _enum([
				"in_progress",
				"completed",
				"incomplete"
			]),
			output: array(object({
				stdout: string(),
				stderr: string(),
				outcome: discriminatedUnion("type", [object({ type: literal("timeout") }), object({
					type: literal("exit"),
					exit_code: number$1()
				})])
			}))
		}),
		object({
			type: literal("tool_search_call"),
			id: string(),
			execution: _enum(["server", "client"]),
			call_id: string().nullable(),
			status: _enum([
				"in_progress",
				"completed",
				"incomplete"
			]),
			arguments: unknown()
		}),
		object({
			type: literal("tool_search_output"),
			id: string(),
			execution: _enum(["server", "client"]),
			call_id: string().nullable(),
			status: _enum([
				"in_progress",
				"completed",
				"incomplete"
			]),
			tools: array(record(string(), jsonValueSchema2.optional()))
		})
	])).optional(),
	service_tier: string().nullish(),
	reasoning: object({ context: string().nullish() }).nullish(),
	incomplete_details: object({ reason: string() }).nullish(),
	usage: openaiResponsesUsageSchema.nullish()
})));
function prepareOpenAIConfigForWorkflowDeserialize(config) {
	if (config.provider == null) throw new Error("OpenAI model is missing provider after workflow deserialization.");
	return {
		...config,
		provider: config.provider,
		url: typeof config.url === "function" ? config.url : ({ path }) => {
			if (config.baseURL == null) throw new Error("OpenAI model is missing baseURL after workflow deserialization.");
			return `${config.baseURL}${path}`;
		},
		headers: typeof config.headers === "function" ? config.headers : config.headers == null ? void 0 : () => config.headers
	};
}
var parallelToolName = "parallel";
var recipientNamePrefix = "functions.";
function getParallelToolCallMetadata({ providerOptions, providerOptionsName }) {
	var _a2;
	const metadata = (_a2 = providerOptions == null ? void 0 : providerOptions[providerOptionsName]) == null ? void 0 : _a2.parallelToolCall;
	if (!isJSONObject(metadata) || typeof metadata.itemId !== "string" || typeof metadata.toolCallId !== "string" || typeof metadata.toolName !== "string" || typeof metadata.input !== "string" || typeof metadata.index !== "number" || !Number.isInteger(metadata.index) || typeof metadata.count !== "number" || !Number.isInteger(metadata.count) || metadata.index < 0 || metadata.count <= metadata.index) return;
	return metadata;
}
function isUndeclaredParallelToolCall({ toolName, tools }) {
	return toolName === parallelToolName && !tools.some((tool) => tool.name === parallelToolName);
}
async function expandParallelToolCall({ toolCall, tools, providerOptionsName, itemId }) {
	if (!isUndeclaredParallelToolCall({
		toolName: toolCall.toolName,
		tools
	})) return;
	const parsedInput = await safeParseJSON({ text: toolCall.input });
	if (!parsedInput.success || !isJSONObject(parsedInput.value)) return;
	const toolUses = parsedInput.value.tool_uses;
	if (!Array.isArray(toolUses) || toolUses.length === 0) return;
	const availableToolNames = new Set(tools.map((tool) => tool.name));
	const expandedToolCalls = [];
	for (const [index, toolUse] of toolUses.entries()) {
		if (!isJSONObject(toolUse)) return;
		const recipientName = toolUse.recipient_name;
		const parameters = toolUse.parameters;
		if (typeof recipientName !== "string" || !recipientName.startsWith(recipientNamePrefix) || !isJSONObject(parameters)) return;
		const toolName = recipientName.slice(recipientNamePrefix.length);
		if (toolName.length === 0 || !availableToolNames.has(toolName)) return;
		expandedToolCalls.push({
			type: "tool-call",
			toolCallId: `${toolCall.toolCallId}_${index}`,
			toolName,
			input: JSON.stringify(parameters),
			providerMetadata: { [providerOptionsName]: { parallelToolCall: {
				itemId,
				toolCallId: toolCall.toolCallId,
				toolName: toolCall.toolName,
				input: toolCall.input,
				index,
				count: toolUses.length
			} } }
		});
	}
	return expandedToolCalls;
}
function serializeToolCallArguments2(input) {
	return JSON.stringify(input === void 0 ? {} : input);
}
function mapToolCaller(caller) {
	return caller == null ? void 0 : caller.type === "program" ? {
		type: "program",
		caller_id: caller.callerId
	} : caller;
}
async function convertFunctionToolResultOutput({ output, toolName, outputSchemaToolNames, promptCacheBreakpoint, providerOptionsName, warnings }) {
	var _a2;
	const hasOutputSchema = outputSchemaToolNames == null ? void 0 : outputSchemaToolNames.has(toolName);
	const convertScalarOutput = (value) => promptCacheBreakpoint == null ? value : [{
		type: "input_text",
		text: value,
		prompt_cache_breakpoint: promptCacheBreakpoint
	}];
	switch (output.type) {
		case "text":
		case "error-text": return convertScalarOutput(hasOutputSchema ? JSON.stringify(output.value) : output.value);
		case "execution-denied": {
			const reason = (_a2 = output.reason) != null ? _a2 : "Tool call execution denied.";
			return convertScalarOutput(hasOutputSchema ? JSON.stringify(reason) : reason);
		}
		case "json":
		case "error-json": return convertScalarOutput(JSON.stringify(output.value));
		case "content": return output.value.map((item) => {
			var _a3, _b, _c;
			const promptCacheBreakpoint2 = getPromptCacheBreakpoint2(item.providerOptions, providerOptionsName);
			switch (item.type) {
				case "text": return {
					type: "input_text",
					text: item.text,
					...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
				};
				case "file": {
					const topLevel = getTopLevelMediaType(item.mediaType);
					const imageDetail = (_b = (_a3 = item.providerOptions) == null ? void 0 : _a3[providerOptionsName]) == null ? void 0 : _b.imageDetail;
					if (item.data.type === "data") {
						const fullMediaType = resolveFullMediaType({ part: item });
						if (topLevel === "image") return {
							type: "input_image",
							image_url: `data:${fullMediaType};base64,${convertToBase64(item.data.data)}`,
							detail: imageDetail,
							...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
						};
						return {
							type: "input_file",
							filename: (_c = item.filename) != null ? _c : "data",
							file_data: `data:${fullMediaType};base64,${convertToBase64(item.data.data)}`,
							...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
						};
					}
					if (item.data.type === "url") {
						if (topLevel === "image") return {
							type: "input_image",
							image_url: item.data.url.toString(),
							detail: imageDetail,
							...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
						};
						return {
							type: "input_file",
							file_url: item.data.url.toString(),
							...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
						};
					}
					warnings.push({
						type: "other",
						message: `unsupported tool content part type: ${item.type} with data type: ${item.data.type}`
					});
					return;
				}
				default:
					warnings.push({
						type: "other",
						message: `unsupported tool content part type: ${item.type}`
					});
					return;
			}
		}).filter(isNonNullable);
	}
}
function hasSameParallelToolCall(first, second) {
	return first.itemId === second.itemId && first.toolCallId === second.toolCallId && first.toolName === second.toolName && first.input === second.input && first.count === second.count;
}
function collectCompleteParallelToolResultGroups({ prompt, providerOptionsName }) {
	const pendingGroups = /* @__PURE__ */ new Map();
	for (const message of prompt) {
		if (message.role !== "tool") continue;
		for (const part of message.content) {
			if (part.type !== "tool-result") continue;
			const metadata = getParallelToolCallMetadata({
				providerOptions: part.providerOptions,
				providerOptionsName
			});
			if (metadata == null) continue;
			const existing = pendingGroups.get(metadata.toolCallId);
			if (existing == null) {
				pendingGroups.set(metadata.toolCallId, {
					metadata,
					results: /* @__PURE__ */ new Map([[metadata.index, part]]),
					invalid: false
				});
				continue;
			}
			if (!hasSameParallelToolCall(existing.metadata, metadata) || existing.results.has(metadata.index)) {
				existing.invalid = true;
				continue;
			}
			existing.results.set(metadata.index, part);
		}
	}
	const completeGroups = /* @__PURE__ */ new Map();
	for (const [toolCallId, group] of pendingGroups) {
		if (group.invalid || group.results.size !== group.metadata.count) continue;
		const results = Array.from({ length: group.metadata.count }, (_, index) => group.results.get(index));
		if (results.every(isNonNullable)) completeGroups.set(toolCallId, {
			metadata: group.metadata,
			results
		});
	}
	return completeGroups;
}
function getPromptCacheBreakpoint2(providerOptions, providerOptionsName) {
	var _a2;
	return (_a2 = providerOptions == null ? void 0 : providerOptions[providerOptionsName]) == null ? void 0 : _a2.promptCacheBreakpoint;
}
function getScalarToolResultPromptCacheBreakpoint({ output, toolResultProviderOptions, providerOptionsName }) {
	var _a2;
	return output.type === "content" ? void 0 : (_a2 = getPromptCacheBreakpoint2(output.providerOptions, providerOptionsName)) != null ? _a2 : getPromptCacheBreakpoint2(toolResultProviderOptions, providerOptionsName);
}
function isFileId(data, prefixes) {
	if (!prefixes) return false;
	return prefixes.some((prefix) => data.startsWith(prefix));
}
async function convertToOpenAIResponsesInput({ prompt, toolNameMapping, systemMessageMode, providerOptionsName, explicitMessageItemType = false, fileIdPrefixes, passThroughUnsupportedFiles = false, store, hasConversation = false, hasPreviousResponseId = false, hasLocalShellTool = false, hasShellTool = false, hasApplyPatchTool = false, hasComputerTool = false, toolSearchToolName, customProviderToolNames, outputSchemaToolNames }) {
	var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
	let input = [];
	const warnings = [];
	const processedApprovalIds = /* @__PURE__ */ new Set();
	const programmaticToolCallIds = /* @__PURE__ */ new Set();
	const parallelToolResultGroups = hasConversation || hasPreviousResponseId ? collectCompleteParallelToolResultGroups({
		prompt,
		providerOptionsName
	}) : /* @__PURE__ */ new Map();
	const emittedParallelToolCalls = /* @__PURE__ */ new Set();
	const emittedParallelToolResults = /* @__PURE__ */ new Set();
	for (const { role, content, providerOptions } of prompt) switch (role) {
		case "system":
			switch (systemMessageMode) {
				case "system": {
					const promptCacheBreakpoint = getPromptCacheBreakpoint2(providerOptions, providerOptionsName);
					input.push({
						...explicitMessageItemType && { type: "message" },
						role: "system",
						content: promptCacheBreakpoint == null ? content : [{
							type: "input_text",
							text: content,
							prompt_cache_breakpoint: promptCacheBreakpoint
						}]
					});
					break;
				}
				case "developer": {
					const promptCacheBreakpoint = getPromptCacheBreakpoint2(providerOptions, providerOptionsName);
					input.push({
						...explicitMessageItemType && { type: "message" },
						role: "developer",
						content: promptCacheBreakpoint == null ? content : [{
							type: "input_text",
							text: content,
							prompt_cache_breakpoint: promptCacheBreakpoint
						}]
					});
					break;
				}
				case "remove":
					warnings.push({
						type: "other",
						message: "system messages are removed for this model"
					});
					break;
				default: throw new Error(`Unsupported system message mode: ${systemMessageMode}`);
			}
			break;
		case "user":
			input.push({
				...explicitMessageItemType && { type: "message" },
				role: "user",
				content: content.map((part, index) => {
					var _a3, _b2, _c2, _d2, _e2;
					switch (part.type) {
						case "text": {
							const promptCacheBreakpoint = getPromptCacheBreakpoint2(part.providerOptions, providerOptionsName);
							return {
								type: "input_text",
								text: part.text,
								...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
							};
						}
						case "file": {
							const promptCacheBreakpoint = getPromptCacheBreakpoint2(part.providerOptions, providerOptionsName);
							switch (part.data.type) {
								case "reference": {
									const fileId = resolveProviderReference({
										reference: part.data.reference,
										provider: providerOptionsName
									});
									if (getTopLevelMediaType(part.mediaType) === "image") return {
										type: "input_image",
										file_id: fileId,
										detail: (_b2 = (_a3 = part.providerOptions) == null ? void 0 : _a3[providerOptionsName]) == null ? void 0 : _b2.imageDetail,
										...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
									};
									return {
										type: "input_file",
										file_id: fileId,
										...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
									};
								}
								case "text": throw new UnsupportedFunctionalityError({ functionality: "text file parts" });
								case "url":
								case "data": if (getTopLevelMediaType(part.mediaType) === "image") return {
									type: "input_image",
									...part.data.type === "url" ? { image_url: part.data.url.toString() } : typeof part.data.data === "string" && isFileId(part.data.data, fileIdPrefixes) ? { file_id: part.data.data } : { image_url: `data:${resolveFullMediaType({ part })};base64,${convertToBase64(part.data.data)}` },
									detail: (_d2 = (_c2 = part.providerOptions) == null ? void 0 : _c2[providerOptionsName]) == null ? void 0 : _d2.imageDetail,
									...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
								};
								else {
									if (part.data.type === "url") return {
										type: "input_file",
										file_url: part.data.url.toString(),
										...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
									};
									const fullMediaType = resolveFullMediaType({ part });
									if (fullMediaType !== "application/pdf" && !passThroughUnsupportedFiles) throw new UnsupportedFunctionalityError({ functionality: `file part media type ${fullMediaType}` });
									return {
										type: "input_file",
										...typeof part.data.data === "string" && isFileId(part.data.data, fileIdPrefixes) ? { file_id: part.data.data } : {
											filename: (_e2 = part.filename) != null ? _e2 : fullMediaType === "application/pdf" ? `part-${index}.pdf` : `part-${index}`,
											file_data: `data:${fullMediaType};base64,${convertToBase64(part.data.data)}`
										},
										...promptCacheBreakpoint != null && { prompt_cache_breakpoint: promptCacheBreakpoint }
									};
								}
							}
						}
					}
				})
			});
			break;
		case "assistant": {
			const reasoningMessages = {};
			for (const part of content) switch (part.type) {
				case "text": {
					const providerOptions2 = (_a2 = part.providerOptions) == null ? void 0 : _a2[providerOptionsName];
					const id = providerOptions2 == null ? void 0 : providerOptions2.itemId;
					const phase = providerOptions2 == null ? void 0 : providerOptions2.phase;
					if (hasConversation && id != null) break;
					if (store && id != null) {
						input.push({
							type: "item_reference",
							id
						});
						break;
					}
					input.push({
						...explicitMessageItemType && { type: "message" },
						role: "assistant",
						content: [{
							type: "output_text",
							text: part.text
						}],
						id,
						...phase != null && { phase }
					});
					break;
				}
				case "tool-call": {
					const parallelToolCallMetadata = getParallelToolCallMetadata({
						providerOptions: part.providerOptions,
						providerOptionsName
					});
					const parallelToolResultGroup = parallelToolCallMetadata == null ? void 0 : parallelToolResultGroups.get(parallelToolCallMetadata.toolCallId);
					if (parallelToolCallMetadata != null && parallelToolResultGroup != null && hasSameParallelToolCall(parallelToolResultGroup.metadata, parallelToolCallMetadata)) {
						if (!emittedParallelToolCalls.has(parallelToolResultGroup.metadata.toolCallId)) {
							emittedParallelToolCalls.add(parallelToolResultGroup.metadata.toolCallId);
							if (!hasConversation) input.push({
								type: "function_call",
								call_id: parallelToolResultGroup.metadata.toolCallId,
								name: parallelToolResultGroup.metadata.toolName,
								arguments: parallelToolResultGroup.metadata.input
							});
						}
						break;
					}
					const id = (_f = (_c = (_b = part.providerOptions) == null ? void 0 : _b[providerOptionsName]) == null ? void 0 : _c.itemId) != null ? _f : (_e = (_d = part.providerMetadata) == null ? void 0 : _d[providerOptionsName]) == null ? void 0 : _e.itemId;
					const namespace = (_k = (_h = (_g = part.providerOptions) == null ? void 0 : _g[providerOptionsName]) == null ? void 0 : _h.namespace) != null ? _k : (_j = (_i = part.providerMetadata) == null ? void 0 : _i[providerOptionsName]) == null ? void 0 : _j.namespace;
					const isAsync = (_p = (_m = (_l = part.providerOptions) == null ? void 0 : _l[providerOptionsName]) == null ? void 0 : _m.async) != null ? _p : (_o = (_n = part.providerMetadata) == null ? void 0 : _n[providerOptionsName]) == null ? void 0 : _o.async;
					const caller = (_r = (_q = part.providerOptions) == null ? void 0 : _q[providerOptionsName]) == null ? void 0 : _r.caller;
					if ((caller == null ? void 0 : caller.type) === "program") programmaticToolCallIds.add(part.toolCallId);
					if (hasConversation && id != null) break;
					const resolvedToolName = toolNameMapping.toProviderToolName(part.toolName);
					if (part.toolName === toolSearchToolName) {
						if (store && id != null) {
							input.push({
								type: "item_reference",
								id
							});
							break;
						}
						const parsedInput = typeof part.input === "string" ? await parseJSON({
							text: part.input,
							schema: toolSearchInputSchema
						}) : await validateTypes({
							value: part.input,
							schema: toolSearchInputSchema
						});
						const execution = parsedInput.call_id != null ? "client" : "server";
						input.push({
							type: "tool_search_call",
							id: id != null ? id : part.toolCallId,
							execution,
							call_id: (_s = parsedInput.call_id) != null ? _s : null,
							status: "completed",
							arguments: parsedInput.arguments
						});
						break;
					}
					if (resolvedToolName === "programmatic_tool_calling") {
						if (store && id != null) {
							input.push({
								type: "item_reference",
								id
							});
							break;
						}
						const parsedInput = await validateTypes({
							value: part.input,
							schema: programmaticToolCallingInputSchema
						});
						input.push({
							type: "program",
							id: id != null ? id : part.toolCallId,
							call_id: part.toolCallId,
							code: parsedInput.code,
							fingerprint: parsedInput.fingerprint
						});
						break;
					}
					if (part.providerExecuted) {
						if (store && id != null) input.push({
							type: "item_reference",
							id
						});
						if (store || !hasShellTool || resolvedToolName !== "shell") break;
					}
					const isProviderDefinedToolCall = hasLocalShellTool && resolvedToolName === "local_shell" || hasShellTool && resolvedToolName === "shell" || hasApplyPatchTool && resolvedToolName === "apply_patch" || hasComputerTool && resolvedToolName === "computer" || ((_t = customProviderToolNames == null ? void 0 : customProviderToolNames.has(resolvedToolName)) != null ? _t : false);
					if (hasPreviousResponseId && store && id != null && isProviderDefinedToolCall) break;
					if (store && id != null && isProviderDefinedToolCall) {
						input.push({
							type: "item_reference",
							id
						});
						break;
					}
					if (hasLocalShellTool && resolvedToolName === "local_shell") {
						const parsedInput = await validateTypes({
							value: part.input,
							schema: localShellInputSchema
						});
						input.push({
							type: "local_shell_call",
							call_id: part.toolCallId,
							id,
							action: {
								type: "exec",
								command: parsedInput.action.command,
								timeout_ms: parsedInput.action.timeoutMs,
								user: parsedInput.action.user,
								working_directory: parsedInput.action.workingDirectory,
								env: parsedInput.action.env
							}
						});
						break;
					}
					if (hasShellTool && resolvedToolName === "shell") {
						const parsedInput = await validateTypes({
							value: part.input,
							schema: shellInputSchema
						});
						input.push({
							type: "shell_call",
							call_id: part.toolCallId,
							id,
							status: "completed",
							action: {
								commands: parsedInput.action.commands,
								timeout_ms: parsedInput.action.timeoutMs,
								max_output_length: parsedInput.action.maxOutputLength
							}
						});
						break;
					}
					if (hasApplyPatchTool && resolvedToolName === "apply_patch") {
						const parsedInput = await validateTypes({
							value: part.input,
							schema: applyPatchInputSchema
						});
						input.push({
							type: "apply_patch_call",
							call_id: parsedInput.callId,
							id,
							status: "completed",
							operation: parsedInput.operation
						});
						break;
					}
					if (hasComputerTool && resolvedToolName === "computer") {
						const parsedInput = await validateTypes({
							value: part.input,
							schema: computerInputSchema
						});
						input.push({
							type: "computer_call",
							call_id: part.toolCallId,
							id,
							status: parsedInput.status,
							actions: parsedInput.actions.map((action) => {
								switch (action.type) {
									case "click":
									case "double_click":
									case "move": return {
										...action,
										keys: action.keys
									};
									case "drag": return {
										...action,
										keys: action.keys
									};
									case "scroll": return {
										type: "scroll",
										x: action.x,
										y: action.y,
										scroll_x: action.scrollX,
										scroll_y: action.scrollY,
										keys: action.keys
									};
									default: return action;
								}
							}),
							pending_safety_checks: parsedInput.pendingSafetyChecks.map((safetyCheck) => ({
								id: safetyCheck.id,
								code: safetyCheck.code,
								message: safetyCheck.message
							}))
						});
						break;
					}
					if (customProviderToolNames == null ? void 0 : customProviderToolNames.has(resolvedToolName)) {
						input.push({
							type: "custom_tool_call",
							call_id: part.toolCallId,
							name: resolvedToolName,
							input: typeof part.input === "string" ? part.input : JSON.stringify(part.input),
							...isAsync != null && { async: isAsync },
							id
						});
						break;
					}
					input.push({
						type: "function_call",
						call_id: part.toolCallId,
						name: resolvedToolName,
						arguments: serializeToolCallArguments2(part.input),
						...isAsync != null && { async: isAsync },
						...namespace != null && { namespace },
						...caller != null && { caller: mapToolCaller(caller) }
					});
					break;
				}
				case "tool-result": {
					if (part.output.type === "execution-denied" || part.output.type === "json" && typeof part.output.value === "object" && part.output.value != null && "type" in part.output.value && part.output.value.type === "execution-denied") break;
					if (hasConversation) break;
					const resolvedResultToolName = toolNameMapping.toProviderToolName(part.toolName);
					if (part.toolName === toolSearchToolName) {
						const itemId = (_z = (_y = (_v = (_u = part.providerOptions) == null ? void 0 : _u[providerOptionsName]) == null ? void 0 : _v.itemId) != null ? _y : (_x = (_w = part.providerMetadata) == null ? void 0 : _w[providerOptionsName]) == null ? void 0 : _x.itemId) != null ? _z : part.toolCallId;
						if (store) input.push({
							type: "item_reference",
							id: itemId
						});
						else if (part.output.type === "json") {
							const parsedOutput = await validateTypes({
								value: part.output.value,
								schema: toolSearchOutputSchema
							});
							input.push({
								type: "tool_search_output",
								id: itemId,
								execution: "server",
								call_id: null,
								status: "completed",
								tools: parsedOutput.tools
							});
						}
						break;
					}
					if (resolvedResultToolName === "programmatic_tool_calling") {
						const itemId = (_F = (_E = (_B = (_A = part.providerOptions) == null ? void 0 : _A[providerOptionsName]) == null ? void 0 : _B.itemId) != null ? _E : (_D = (_C = part.providerMetadata) == null ? void 0 : _C[providerOptionsName]) == null ? void 0 : _D.itemId) != null ? _F : part.toolCallId;
						if (store) input.push({
							type: "item_reference",
							id: itemId
						});
						else if (part.output.type === "json") {
							const parsedOutput = await validateTypes({
								value: part.output.value,
								schema: programmaticToolCallingOutputSchema
							});
							input.push({
								type: "program_output",
								id: itemId,
								call_id: part.toolCallId,
								result: parsedOutput.result,
								status: parsedOutput.status
							});
						}
						break;
					}
					if (hasShellTool && resolvedResultToolName === "shell") {
						if (part.output.type === "json") {
							const parsedOutput = await validateTypes({
								value: part.output.value,
								schema: shellOutputSchema
							});
							input.push({
								type: "shell_call_output",
								call_id: part.toolCallId,
								output: parsedOutput.output.map((item) => ({
									stdout: item.stdout,
									stderr: item.stderr,
									outcome: item.outcome.type === "timeout" ? { type: "timeout" } : {
										type: "exit",
										exit_code: item.outcome.exitCode
									}
								}))
							});
						}
						break;
					}
					if (store) {
						const itemId = (_I = (_H = (_G = part.providerOptions) == null ? void 0 : _G[providerOptionsName]) == null ? void 0 : _H.itemId) != null ? _I : part.toolCallId;
						input.push({
							type: "item_reference",
							id: itemId
						});
					} else warnings.push({
						type: "other",
						message: `Results for OpenAI tool ${part.toolName} are not sent to the API when store is false`
					});
					break;
				}
				case "reasoning": {
					const providerOptions2 = await parseProviderOptions({
						provider: providerOptionsName,
						providerOptions: part.providerOptions,
						schema: openaiResponsesReasoningProviderOptionsSchema
					});
					const reasoningId = providerOptions2 == null ? void 0 : providerOptions2.itemId;
					if ((hasConversation || hasPreviousResponseId) && reasoningId != null) break;
					if (reasoningId != null) {
						const reasoningMessage = reasoningMessages[reasoningId];
						if (store) {
							if (reasoningMessage === void 0) {
								input.push({
									type: "item_reference",
									id: reasoningId
								});
								reasoningMessages[reasoningId] = {
									type: "reasoning",
									id: reasoningId,
									summary: []
								};
							}
						} else {
							const summaryParts = [];
							if (part.text.length > 0) summaryParts.push({
								type: "summary_text",
								text: part.text
							});
							else if (reasoningMessage !== void 0) warnings.push({
								type: "other",
								message: `Cannot append empty reasoning part to existing reasoning sequence. Skipping reasoning part: ${JSON.stringify(part)}.`
							});
							if (reasoningMessage === void 0) {
								reasoningMessages[reasoningId] = {
									type: "reasoning",
									id: reasoningId,
									encrypted_content: providerOptions2 == null ? void 0 : providerOptions2.reasoningEncryptedContent,
									summary: summaryParts
								};
								input.push(reasoningMessages[reasoningId]);
							} else {
								reasoningMessage.summary.push(...summaryParts);
								if ((providerOptions2 == null ? void 0 : providerOptions2.reasoningEncryptedContent) != null) reasoningMessage.encrypted_content = providerOptions2.reasoningEncryptedContent;
							}
						}
					} else {
						const encryptedContent = providerOptions2 == null ? void 0 : providerOptions2.reasoningEncryptedContent;
						if (encryptedContent != null) {
							const summaryParts = [];
							if (part.text.length > 0) summaryParts.push({
								type: "summary_text",
								text: part.text
							});
							input.push({
								type: "reasoning",
								encrypted_content: encryptedContent,
								summary: summaryParts
							});
						} else warnings.push({
							type: "other",
							message: `Non-OpenAI reasoning parts are not supported. Skipping reasoning part: ${JSON.stringify(part)}.`
						});
					}
					break;
				}
				case "custom": if (part.kind === "openai.compaction") {
					const providerOptions2 = (_J = part.providerOptions) == null ? void 0 : _J[providerOptionsName];
					const id = providerOptions2 == null ? void 0 : providerOptions2.itemId;
					if (hasConversation && id != null) break;
					if (store && id != null) {
						input.push({
							type: "item_reference",
							id
						});
						break;
					}
					const encryptedContent = providerOptions2 == null ? void 0 : providerOptions2.encryptedContent;
					if (id != null) input.push({
						type: "compaction",
						id,
						encrypted_content: encryptedContent
					});
				}
			}
			break;
		}
		case "tool":
			for (const part of content) {
				if (part.type === "tool-approval-response") {
					const approvalResponse = part;
					if (processedApprovalIds.has(approvalResponse.approvalId)) continue;
					processedApprovalIds.add(approvalResponse.approvalId);
					if (store && !hasConversation && !hasPreviousResponseId) input.push({
						type: "item_reference",
						id: approvalResponse.approvalId
					});
					input.push({
						type: "mcp_approval_response",
						approval_request_id: approvalResponse.approvalId,
						approve: approvalResponse.approved
					});
					continue;
				}
				const parallelToolCallMetadata = getParallelToolCallMetadata({
					providerOptions: part.providerOptions,
					providerOptionsName
				});
				const parallelToolResultGroup = parallelToolCallMetadata == null ? void 0 : parallelToolResultGroups.get(parallelToolCallMetadata.toolCallId);
				if (parallelToolCallMetadata != null && parallelToolResultGroup != null && hasSameParallelToolCall(parallelToolResultGroup.metadata, parallelToolCallMetadata)) {
					if (!emittedParallelToolResults.has(parallelToolResultGroup.metadata.toolCallId)) {
						emittedParallelToolResults.add(parallelToolResultGroup.metadata.toolCallId);
						const toolOutputs = await Promise.all(parallelToolResultGroup.results.map(async (result) => {
							const promptCacheBreakpoint = getScalarToolResultPromptCacheBreakpoint({
								output: result.output,
								toolResultProviderOptions: result.providerOptions,
								providerOptionsName
							});
							return {
								output: await convertFunctionToolResultOutput({
									output: result.output,
									toolName: result.toolName,
									outputSchemaToolNames,
									providerOptionsName,
									warnings
								}),
								promptCacheBreakpoint
							};
						}));
						const serializedToolOutputs = toolOutputs.map(({ output: output2 }) => typeof output2 === "string" ? output2 : JSON.stringify(output2));
						const hasPromptCacheBreakpoint = toolOutputs.some(({ promptCacheBreakpoint }) => promptCacheBreakpoint != null);
						input.push({
							type: "function_call_output",
							call_id: parallelToolResultGroup.metadata.toolCallId,
							output: hasPromptCacheBreakpoint ? serializedToolOutputs.map((text, index) => ({
								type: "input_text",
								text: index === 0 ? text : `
${text}`,
								...toolOutputs[index].promptCacheBreakpoint != null && { prompt_cache_breakpoint: toolOutputs[index].promptCacheBreakpoint }
							})) : serializedToolOutputs.join("\n")
						});
					}
					continue;
				}
				const output = part.output;
				if (output.type === "execution-denied") {
					if ((_L = (_K = output.providerOptions) == null ? void 0 : _K.openai) == null ? void 0 : _L.approvalId) continue;
				}
				const resolvedToolName = toolNameMapping.toProviderToolName(part.toolName);
				if (part.toolName === toolSearchToolName && output.type === "json") {
					const parsedOutput = await validateTypes({
						value: output.value,
						schema: toolSearchOutputSchema
					});
					input.push({
						type: "tool_search_output",
						execution: "client",
						call_id: part.toolCallId,
						status: "completed",
						tools: parsedOutput.tools
					});
					continue;
				}
				if (hasLocalShellTool && resolvedToolName === "local_shell" && output.type === "json") {
					const parsedOutput = await validateTypes({
						value: output.value,
						schema: localShellOutputSchema
					});
					input.push({
						type: "local_shell_call_output",
						call_id: part.toolCallId,
						output: parsedOutput.output
					});
					continue;
				}
				if (hasShellTool && resolvedToolName === "shell" && output.type === "json") {
					const parsedOutput = await validateTypes({
						value: output.value,
						schema: shellOutputSchema
					});
					input.push({
						type: "shell_call_output",
						call_id: part.toolCallId,
						output: parsedOutput.output.map((item) => ({
							stdout: item.stdout,
							stderr: item.stderr,
							outcome: item.outcome.type === "timeout" ? { type: "timeout" } : {
								type: "exit",
								exit_code: item.outcome.exitCode
							}
						}))
					});
					continue;
				}
				if (hasApplyPatchTool && part.toolName === "apply_patch" && output.type === "json") {
					const parsedOutput = await validateTypes({
						value: output.value,
						schema: applyPatchOutputSchema
					});
					input.push({
						type: "apply_patch_call_output",
						call_id: part.toolCallId,
						status: parsedOutput.status,
						output: parsedOutput.output
					});
					continue;
				}
				if (hasComputerTool && resolvedToolName === "computer" && output.type === "json") {
					const parsedOutput = await validateTypes({
						value: output.value,
						schema: computerOutputSchema
					});
					input.push({
						type: "computer_call_output",
						call_id: part.toolCallId,
						output: {
							type: "computer_screenshot",
							image_url: parsedOutput.output.imageUrl,
							file_id: parsedOutput.output.fileId,
							detail: parsedOutput.output.detail
						},
						acknowledged_safety_checks: (_M = parsedOutput.acknowledgedSafetyChecks) == null ? void 0 : _M.map((safetyCheck) => ({
							id: safetyCheck.id,
							code: safetyCheck.code,
							message: safetyCheck.message
						}))
					});
					continue;
				}
				if (customProviderToolNames == null ? void 0 : customProviderToolNames.has(resolvedToolName)) {
					const promptCacheBreakpoint = getScalarToolResultPromptCacheBreakpoint({
						output,
						toolResultProviderOptions: part.providerOptions,
						providerOptionsName
					});
					const convertScalarOutput = (value) => promptCacheBreakpoint == null ? value : [{
						type: "input_text",
						text: value,
						prompt_cache_breakpoint: promptCacheBreakpoint
					}];
					let outputValue;
					switch (output.type) {
						case "text":
						case "error-text":
							outputValue = convertScalarOutput(output.value);
							break;
						case "execution-denied":
							outputValue = convertScalarOutput((_N = output.reason) != null ? _N : "Tool call execution denied.");
							break;
						case "json":
						case "error-json":
							outputValue = convertScalarOutput(JSON.stringify(output.value));
							break;
						case "content":
							outputValue = output.value.map((item) => {
								var _a3, _b2, _c2;
								const promptCacheBreakpoint2 = getPromptCacheBreakpoint2(item.providerOptions, providerOptionsName);
								switch (item.type) {
									case "text": return {
										type: "input_text",
										text: item.text,
										...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
									};
									case "file": {
										const topLevel = getTopLevelMediaType(item.mediaType);
										const imageDetail = (_b2 = (_a3 = item.providerOptions) == null ? void 0 : _a3[providerOptionsName]) == null ? void 0 : _b2.imageDetail;
										if (item.data.type === "data") {
											const fullMediaType = resolveFullMediaType({ part: item });
											if (topLevel === "image") return {
												type: "input_image",
												image_url: `data:${fullMediaType};base64,${convertToBase64(item.data.data)}`,
												detail: imageDetail,
												...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
											};
											return {
												type: "input_file",
												filename: (_c2 = item.filename) != null ? _c2 : "data",
												file_data: `data:${fullMediaType};base64,${convertToBase64(item.data.data)}`,
												...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
											};
										}
										if (item.data.type === "url") {
											if (topLevel === "image") return {
												type: "input_image",
												image_url: item.data.url.toString(),
												detail: imageDetail,
												...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
											};
											return {
												type: "input_file",
												file_url: item.data.url.toString(),
												...promptCacheBreakpoint2 != null && { prompt_cache_breakpoint: promptCacheBreakpoint2 }
											};
										}
										warnings.push({
											type: "other",
											message: `unsupported custom tool content part type: ${item.type} with data type: ${item.data.type}`
										});
										return;
									}
									default:
										warnings.push({
											type: "other",
											message: `unsupported custom tool content part type: ${item.type}`
										});
										return;
								}
							}).filter(isNonNullable);
							break;
						default: outputValue = "";
					}
					input.push({
						type: "custom_tool_call_output",
						call_id: part.toolCallId,
						output: outputValue
					});
					continue;
				}
				const resultCaller = (_P = (_O = part.providerOptions) == null ? void 0 : _O[providerOptionsName]) == null ? void 0 : _P.caller;
				if (output.type === "execution-denied" && ((resultCaller == null ? void 0 : resultCaller.type) === "program" || programmaticToolCallIds.has(part.toolCallId))) throw new UnsupportedFunctionalityError({ functionality: "execution-denied results for programmatic tool calls" });
				const contentValue = await convertFunctionToolResultOutput({
					output,
					toolName: part.toolName,
					outputSchemaToolNames,
					promptCacheBreakpoint: getScalarToolResultPromptCacheBreakpoint({
						output,
						toolResultProviderOptions: part.providerOptions,
						providerOptionsName
					}),
					providerOptionsName,
					warnings
				});
				const caller = mapToolCaller(resultCaller);
				input.push({
					type: "function_call_output",
					call_id: part.toolCallId,
					output: contentValue,
					...caller != null && { caller }
				});
			}
			break;
		default: throw new Error(`Unsupported role: ${role}`);
	}
	if (!store && input.some((item) => "type" in item && item.type === "reasoning" && item.encrypted_content == null)) {
		warnings.push({
			type: "other",
			message: "Reasoning parts without encrypted content are not supported when store is false. Skipping reasoning parts."
		});
		input = input.filter((item) => !("type" in item) || item.type !== "reasoning" || item.encrypted_content != null);
	}
	return {
		input,
		warnings
	};
}
var openaiResponsesReasoningProviderOptionsSchema = object({
	itemId: string().nullish(),
	reasoningEncryptedContent: string().nullish()
});
var TOP_LOGPROBS_MAX = 20;
var openaiLanguageModelResponsesOptionsSchema = lazySchema(() => zodSchema(object({
	/**
	* The ID of the OpenAI Conversation to continue.
	* You must create a conversation first via the OpenAI API.
	* Cannot be used in conjunction with `previousResponseId`.
	* Defaults to `undefined`.
	* @see https://platform.openai.com/docs/api-reference/conversations/create
	*/
	conversation: string().nullish(),
	/**
	* The set of extra fields to include in the response (advanced, usually not needed).
	* Example values: 'reasoning.encrypted_content', 'file_search_call.results', 'web_search_call.results', 'message.output_text.logprobs'.
	*/
	include: array(_enum([
		"reasoning.encrypted_content",
		"file_search_call.results",
		"web_search_call.results",
		"message.output_text.logprobs"
	])).nullish(),
	/**
	* Whether to automatically include web search action sources in the
	* response. Disable this for OpenAI-compatible providers that do not
	* support the `web_search_call.action.sources` include value.
	*
	* Defaults to `true`.
	*/
	includeWebSearchSources: boolean().optional(),
	/**
	* Instructions for the model.
	* They can be used to change the system or developer message when continuing a conversation using the `previousResponseId` option.
	* Defaults to `undefined`.
	*/
	instructions: string().nullish(),
	/**
	* Return the log probabilities of the tokens. Including logprobs will increase
	* the response size and can slow down response times. However, it can
	* be useful to better understand how the model is behaving.
	*
	* Setting to true will return the log probabilities of the tokens that
	* were generated.
	*
	* Setting to a number will return the log probabilities of the top n
	* tokens that were generated.
	*
	* @see https://platform.openai.com/docs/api-reference/responses/create
	* @see https://cookbook.openai.com/examples/using_logprobs
	*/
	logprobs: union([boolean(), number$1().min(1).max(TOP_LOGPROBS_MAX)]).optional(),
	/**
	* The maximum number of total calls to built-in tools that can be processed in a response.
	* This maximum number applies across all built-in tool calls, not per individual tool.
	* Any further attempts to call a tool by the model will be ignored.
	*/
	maxToolCalls: number$1().nullish(),
	/**
	* Additional metadata to store with the generation.
	*/
	metadata: any().nullish(),
	/**
	* Whether to use parallel tool calls. Defaults to `true`.
	*/
	parallelToolCalls: boolean().nullish(),
	/**
	* The ID of the previous response. You can use it to continue a conversation.
	* Defaults to `undefined`.
	*/
	previousResponseId: string().nullish(),
	/**
	* Sets a cache key to tie this prompt to cached prefixes for better caching performance.
	*/
	promptCacheKey: string().nullish(),
	/**
	* Prompt cache behavior for GPT-5.6 and later models.
	* `mode` controls whether OpenAI also places an implicit breakpoint.
	* `ttl` sets the minimum cache lifetime and currently only supports 30 minutes.
	*/
	promptCacheOptions: object({
		mode: _enum(["implicit", "explicit"]).optional(),
		ttl: literal("30m").optional()
	}).optional(),
	/**
	* The retention policy for the prompt cache.
	* - 'in_memory': Default. Standard prompt caching behavior.
	* - '24h': Extended prompt caching that keeps cached prefixes active for up to 24 hours.
	*          Available for models before GPT-5.6 that support extended caching.
	*
	* @deprecated For GPT-5.6 and later models, use `promptCacheOptions.ttl`.
	*
	* @default 'in_memory'
	*/
	promptCacheRetention: _enum(["in_memory", "24h"]).nullish(),
	/**
	* Reasoning effort for reasoning models. Defaults to `medium`. If you use
	* `providerOptions` to set the `reasoningEffort` option, this model setting will be ignored.
	* GPT-5.6 supports 'none' | 'low' | 'medium' | 'high' | 'xhigh' | 'max'.
	* Supported values vary by model.
	*/
	reasoningEffort: string().nullish(),
	/**
	* Updates the reasoning effort for GPT-6 and later models starting with this response
	* without changing the request-level reasoning effort. This preserves the
	* request prefix for prompt caching.
	*
	* Only supported by GPT-6 and later models in standard, single-agent mode. Cannot be
	* combined with automatic compaction or automatic truncation.
	*/
	reasoningEffortUpdate: _enum([
		"low",
		"medium",
		"high",
		"xhigh",
		"max"
	]).optional(),
	/**
	* Controls how much model work GPT-5.6 performs before returning a final answer.
	* `standard` is the default. `pro` increases quality, latency, and token usage.
	*/
	reasoningMode: _enum(["standard", "pro"]).optional(),
	/**
	* Controls which available reasoning items GPT-5.6 can use.
	* `auto` uses the model default, `current_turn` excludes reasoning from earlier
	* turns, and `all_turns` makes compatible earlier reasoning available.
	*/
	reasoningContext: _enum([
		"auto",
		"current_turn",
		"all_turns"
	]).optional(),
	/**
	* Controls reasoning summary output from the model.
	* Set to "auto" to automatically receive the richest level available,
	* or "detailed" for comprehensive summaries.
	*/
	reasoningSummary: string().nullish(),
	/**
	* The identifier for safety monitoring and tracking.
	*/
	safetyIdentifier: string().nullish(),
	/**
	* Service tier for the request.
	* Set to 'flex' for 50% cheaper processing at the cost of increased latency (available for o3, o4-mini, and gpt-5 models).
	* Set to 'priority' for faster processing with Enterprise access (available for gpt-4, gpt-5, gpt-5-mini, o3, o4-mini; gpt-5-nano is not supported).
	* Set to 'fast' for the same tier as 'priority' (OpenAI's newer name for it).
	* Set to 'ultrafast' for access-controlled Ultrafast processing (available only for gpt-5.6-sol).
	*
	* Defaults to 'auto'.
	*/
	serviceTier: _enum([
		"auto",
		"flex",
		"priority",
		"fast",
		"ultrafast",
		"default"
	]).nullish(),
	/**
	* Whether to store the generation. Defaults to `true`.
	*/
	store: boolean().nullish(),
	/**
	* Whether to pass through non-image file types as generic input files.
	*
	* By default, inline file inputs are restricted to images and PDFs.
	* Enable this when the target OpenAI Responses model supports additional
	* file media types, such as text/csv.
	*/
	passThroughUnsupportedFiles: boolean().optional(),
	/**
	* Whether to use strict JSON schema validation.
	* Defaults to `true`.
	*/
	strictJsonSchema: boolean().nullish(),
	/**
	* Controls the verbosity of the model's responses. Lower values ('low') will result
	* in more concise responses, while higher values ('high') will result in more verbose responses.
	* Valid values: 'low', 'medium', 'high'.
	*/
	textVerbosity: _enum([
		"low",
		"medium",
		"high"
	]).nullish(),
	/**
	* Controls output truncation. 'auto' (default) performs truncation automatically;
	* 'disabled' turns truncation off.
	*/
	truncation: _enum(["auto", "disabled"]).nullish(),
	/**
	* A unique identifier representing your end-user, which can help OpenAI to
	* monitor and detect abuse.
	* Defaults to `undefined`.
	* @see https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids
	*/
	user: string().nullish(),
	/**
	* Override the system message mode for this model.
	* - 'system': Use the 'system' role for system messages (default for most models)
	* - 'developer': Use the 'developer' role for system messages (used by reasoning models)
	* - 'remove': Remove system messages entirely
	*
	* If not specified, the mode is automatically determined based on the model.
	*/
	systemMessageMode: _enum([
		"system",
		"developer",
		"remove"
	]).optional(),
	/**
	* Force treating this model as a reasoning model.
	*
	* This is useful for "stealth" reasoning models (e.g. via a custom baseURL)
	* where the model ID is not recognized by the SDK's allowlist.
	*
	* When enabled, the SDK applies reasoning-model parameter compatibility rules
	* and defaults `systemMessageMode` to `developer` unless overridden.
	*/
	forceReasoning: boolean().optional(),
	/**
	* Enable server-side context management (compaction).
	*/
	contextManagement: array(object({
		type: literal("compaction"),
		compactThreshold: number$1()
	})).nullish(),
	/**
	* Request explicit server-side compaction by appending a
	* `compaction_trigger` item to the Responses input.
	*/
	compactionTrigger: boolean().optional(),
	/**
	* Restrict the callable tools to a subset while keeping the full tools
	* list intact, so prompt caching is preserved across requests with
	* different allowlists.
	*
	* When set, this overrides the request-level `toolChoice` and emits
	* `tool_choice: { type: "allowed_tools", mode, tools }` on the wire.
	*
	* @see https://developers.openai.com/api/reference/resources/responses/methods/create#(resource)%20responses%20%3E%20(model)%20tool_choice_allowed%20%3E%20(schema)
	*/
	allowedTools: object({
		toolNames: array(string()).min(1),
		mode: _enum(["auto", "required"]).optional()
	}).optional()
})));
async function prepareResponsesTools({ tools, toolChoice, allowedTools, toolNameMapping, customProviderToolNames, outputSchemaToolNames, supportsAsyncToolCalling = true }) {
	var _a2, _b, _c, _d;
	tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
	const toolWarnings = [];
	if (tools == null) return {
		tools: void 0,
		toolChoice: void 0,
		toolWarnings
	};
	const openaiTools2 = [];
	const namespaceTools = /* @__PURE__ */ new Map();
	const resolvedCustomProviderToolNames = customProviderToolNames != null ? customProviderToolNames : /* @__PURE__ */ new Set();
	const allowedToolResolutions = /* @__PURE__ */ new Map();
	const allowedToolAliases = /* @__PURE__ */ new Map();
	const recordAllowedTool = (toolName, resolution, canonicalName) => {
		allowedToolResolutions.set(toolName, resolution);
		if (canonicalName == null || canonicalName === toolName) return;
		const existingAlias = allowedToolAliases.get(canonicalName);
		if (existingAlias == null) allowedToolAliases.set(canonicalName, resolution);
		else if (existingAlias !== "ambiguous" && !isSameAllowedTool(existingAlias, resolution)) allowedToolAliases.set(canonicalName, "ambiguous");
	};
	for (const tool of tools) switch (tool.type) {
		case "function": {
			const openaiOptions = (_a2 = tool.providerOptions) == null ? void 0 : _a2.openai;
			if ((openaiOptions == null ? void 0 : openaiOptions.outputSchema) != null) outputSchemaToolNames?.add(tool.name);
			const openaiFunctionTool = prepareFunctionTool({
				tool,
				options: openaiOptions,
				toolWarnings,
				async: resolveAsyncToolOption({
					value: openaiOptions == null ? void 0 : openaiOptions.async,
					supportsAsyncToolCalling,
					toolName: tool.name,
					toolWarnings
				})
			});
			const namespace = openaiOptions == null ? void 0 : openaiOptions.namespace;
			if (namespace == null) openaiTools2.push(openaiFunctionTool);
			else {
				let namespaceTool = namespaceTools.get(namespace.name);
				if (namespaceTool == null) {
					namespaceTool = {
						type: "namespace",
						name: namespace.name,
						description: namespace.description,
						tools: []
					};
					namespaceTools.set(namespace.name, namespaceTool);
					openaiTools2.push(namespaceTool);
				} else if (namespaceTool.description !== namespace.description) throw new UnsupportedFunctionalityError({ functionality: `conflicting descriptions for OpenAI tool namespace "${namespace.name}"` });
				namespaceTool.tools.push(openaiFunctionTool);
			}
			recordAllowedTool(tool.name, namespace != null ? {
				supported: false,
				reason: "tools inside an OpenAI tool namespace are not visible to tool_choice.allowed_tools"
			} : (openaiOptions == null ? void 0 : openaiOptions.deferLoading) === true ? {
				supported: false,
				reason: "deferred tools are not visible to tool_choice.allowed_tools"
			} : {
				supported: true,
				entry: {
					type: "function",
					name: tool.name
				}
			}, void 0);
			break;
		}
		case "provider": {
			const openaiToolCountBefore = openaiTools2.length;
			switch (tool.id) {
				case "openai.file_search": {
					const args = await validateTypes({
						value: tool.args,
						schema: fileSearchArgsSchema
					});
					openaiTools2.push({
						type: "file_search",
						vector_store_ids: args.vectorStoreIds,
						max_num_results: args.maxNumResults,
						ranking_options: args.ranking ? {
							ranker: args.ranking.ranker,
							score_threshold: args.ranking.scoreThreshold
						} : void 0,
						filters: args.filters
					});
					break;
				}
				case "openai.local_shell":
					openaiTools2.push({ type: "local_shell" });
					break;
				case "openai.shell": {
					const args = await validateTypes({
						value: tool.args,
						schema: shellArgsSchema
					});
					openaiTools2.push({
						type: "shell",
						...args.environment && { environment: mapShellEnvironment(args.environment) }
					});
					break;
				}
				case "openai.apply_patch":
					openaiTools2.push({ type: "apply_patch" });
					break;
				case "openai.computer":
					openaiTools2.push({ type: "computer" });
					break;
				case "openai.web_search_preview": {
					const args = await validateTypes({
						value: tool.args,
						schema: webSearchPreviewArgsSchema
					});
					openaiTools2.push({
						type: "web_search_preview",
						search_context_size: args.searchContextSize,
						user_location: args.userLocation
					});
					break;
				}
				case "openai.web_search": {
					const args = await validateTypes({
						value: tool.args,
						schema: webSearchArgsSchema
					});
					openaiTools2.push({
						type: "web_search",
						filters: args.filters != null ? {
							allowed_domains: args.filters.allowedDomains,
							blocked_domains: args.filters.blockedDomains
						} : void 0,
						external_web_access: args.externalWebAccess,
						search_context_size: args.searchContextSize,
						user_location: args.userLocation
					});
					break;
				}
				case "openai.code_interpreter": {
					const args = await validateTypes({
						value: tool.args,
						schema: codeInterpreterArgsSchema
					});
					openaiTools2.push({
						type: "code_interpreter",
						container: args.container == null ? {
							type: "auto",
							file_ids: void 0
						} : typeof args.container === "string" ? args.container : {
							type: "auto",
							file_ids: args.container.fileIds
						}
					});
					break;
				}
				case "openai.image_generation": {
					const args = await validateTypes({
						value: tool.args,
						schema: imageGenerationArgsSchema
					});
					openaiTools2.push({
						type: "image_generation",
						action: args.action,
						background: args.background,
						input_fidelity: args.inputFidelity,
						input_image_mask: args.inputImageMask ? {
							file_id: args.inputImageMask.fileId,
							image_url: args.inputImageMask.imageUrl
						} : void 0,
						model: args.model,
						moderation: args.moderation,
						partial_images: args.partialImages,
						quality: args.quality,
						output_compression: args.outputCompression,
						output_format: args.outputFormat,
						size: args.size
					});
					break;
				}
				case "openai.mcp": {
					const args = await validateTypes({
						value: tool.args,
						schema: mcpArgsSchema
					});
					const mapApprovalFilter = (filter) => ({ tool_names: filter.toolNames });
					const requireApproval = args.requireApproval;
					const requireApprovalParam = requireApproval == null ? void 0 : typeof requireApproval === "string" ? requireApproval : requireApproval.never != null ? { never: mapApprovalFilter(requireApproval.never) } : void 0;
					openaiTools2.push({
						type: "mcp",
						server_label: args.serverLabel,
						allowed_tools: Array.isArray(args.allowedTools) ? args.allowedTools : args.allowedTools ? {
							read_only: args.allowedTools.readOnly,
							tool_names: args.allowedTools.toolNames
						} : void 0,
						authorization: args.authorization,
						connector_id: args.connectorId,
						headers: args.headers,
						require_approval: requireApprovalParam != null ? requireApprovalParam : "never",
						server_description: args.serverDescription,
						server_url: args.serverUrl
					});
					break;
				}
				case "openai.custom": {
					const args = await validateTypes({
						value: tool.args,
						schema: customArgsSchema
					});
					openaiTools2.push({
						type: "custom",
						name: tool.name,
						description: args.description,
						...resolveAsyncToolOption({
							value: args.async,
							supportsAsyncToolCalling,
							toolName: tool.name,
							toolWarnings
						}) != null ? { async: args.async } : {},
						format: args.format
					});
					resolvedCustomProviderToolNames.add(tool.name);
					break;
				}
				case "openai.programmatic_tool_calling":
					openaiTools2.push({ type: "programmatic_tool_calling" });
					break;
				case "openai.tool_search": {
					const args = await validateTypes({
						value: tool.args,
						schema: toolSearchArgsSchema
					});
					openaiTools2.push({
						type: "tool_search",
						...args.execution != null ? { execution: args.execution } : {},
						...args.description != null ? { description: args.description } : {},
						...args.parameters != null ? { parameters: args.parameters } : {}
					});
					break;
				}
			}
			if (openaiTools2.length > openaiToolCountBefore) {
				const openaiTool = openaiTools2[openaiToolCountBefore];
				recordAllowedTool(tool.name, toAllowedToolResolution(openaiTool), toolNameMapping == null ? void 0 : toolNameMapping.toProviderToolName(tool.name));
			}
			break;
		}
		default: toolWarnings.push({
			type: "unsupported",
			feature: `function tool ${tool}`
		});
	}
	if (allowedTools != null) {
		const allowedToolEntries = [];
		const droppedToolNames = [];
		for (const name of allowedTools.toolNames) {
			const directResolution = allowedToolResolutions.get(name);
			const resolution = directResolution != null ? directResolution : allowedToolAliases.get(name);
			if (directResolution != null && allowedToolAliases.has(name)) toolWarnings.push({
				type: "unsupported",
				feature: `allowedTools entry "${name}"`,
				details: "this name is both a tool name and the provider tool name of another tool in this request; the tool with this name is allowed"
			});
			if (resolution === "ambiguous") {
				toolWarnings.push({
					type: "unsupported",
					feature: `allowedTools entry "${name}"`,
					details: "several tools in this request share this provider tool name; use the tool name from the tools for this request instead"
				});
				droppedToolNames.push(name);
				continue;
			}
			if (resolution == null) {
				toolWarnings.push({
					type: "unsupported",
					feature: `allowedTools entry "${name}"`,
					details: "the tool is not part of the tools for this request and is sent as a function tool"
				});
				allowedToolEntries.push({
					type: "function",
					name: (_b = toolNameMapping == null ? void 0 : toolNameMapping.toProviderToolName(name)) != null ? _b : name
				});
				continue;
			}
			if (!resolution.supported) {
				toolWarnings.push({
					type: "unsupported",
					feature: `allowedTools entry "${name}"`,
					details: `${resolution.reason}; the tool is removed from the allowed tools`
				});
				droppedToolNames.push(name);
				continue;
			}
			allowedToolEntries.push(resolution.entry);
		}
		if (allowedToolEntries.length === 0) throw new UnsupportedFunctionalityError({ functionality: `allowedTools with only tools that cannot be allow-listed (${droppedToolNames.join(", ")})` });
		return {
			tools: openaiTools2,
			toolChoice: {
				type: "allowed_tools",
				mode: (_c = allowedTools.mode) != null ? _c : "auto",
				tools: allowedToolEntries
			},
			toolWarnings
		};
	}
	if (toolChoice == null) return {
		tools: openaiTools2,
		toolChoice: void 0,
		toolWarnings
	};
	const type = toolChoice.type;
	switch (type) {
		case "auto":
		case "none":
		case "required": return {
			tools: openaiTools2,
			toolChoice: type,
			toolWarnings
		};
		case "tool": {
			const resolvedToolName = (_d = toolNameMapping == null ? void 0 : toolNameMapping.toProviderToolName(toolChoice.toolName)) != null ? _d : toolChoice.toolName;
			return {
				tools: openaiTools2,
				toolChoice: resolvedToolName === "code_interpreter" || resolvedToolName === "file_search" || resolvedToolName === "image_generation" || resolvedToolName === "web_search_preview" || resolvedToolName === "web_search" || resolvedToolName === "mcp" || resolvedToolName === "apply_patch" || resolvedToolName === "computer" || resolvedToolName === "programmatic_tool_calling" ? { type: resolvedToolName } : resolvedCustomProviderToolNames.has(resolvedToolName) ? {
					type: "custom",
					name: resolvedToolName
				} : {
					type: "function",
					name: resolvedToolName
				},
				toolWarnings
			};
		}
		default: throw new UnsupportedFunctionalityError({ functionality: `tool choice type: ${type}` });
	}
}
function allowedToolKey(entry) {
	switch (entry.type) {
		case "mcp": return `mcp:${entry.server_label}`;
		case "function":
		case "custom": return `${entry.type}:${entry.name}`;
		default: return entry.type;
	}
}
function isSameAllowedTool(a, b) {
	if (a.supported && b.supported) return allowedToolKey(a.entry) === allowedToolKey(b.entry);
	if (!a.supported && !b.supported) return a.reason === b.reason;
	return false;
}
function toAllowedToolResolution(tool) {
	switch (tool.type) {
		case "custom": return {
			supported: true,
			entry: {
				type: "custom",
				name: tool.name
			}
		};
		case "mcp": return {
			supported: true,
			entry: {
				type: "mcp",
				server_label: tool.server_label
			}
		};
		case "file_search":
		case "web_search":
		case "web_search_preview":
		case "image_generation":
		case "code_interpreter":
		case "computer":
		case "apply_patch":
		case "shell":
		case "local_shell":
		case "programmatic_tool_calling": return {
			supported: true,
			entry: { type: tool.type }
		};
		default: return {
			supported: false,
			reason: `OpenAI does not support ${tool.type} tools in tool_choice.allowed_tools`
		};
	}
}
function prepareFunctionTool({ tool, options, toolWarnings, async }) {
	var _a2;
	const deferLoading = options == null ? void 0 : options.deferLoading;
	const normalizedInputSchema = normalizeOpenAIJsonSchema(tool.inputSchema);
	const normalizedOutputSchema = (options == null ? void 0 : options.outputSchema) != null ? normalizeOpenAIJsonSchema(options.outputSchema) : void 0;
	toolWarnings.push(...normalizedInputSchema.warnings, ...(_a2 = normalizedOutputSchema == null ? void 0 : normalizedOutputSchema.warnings) != null ? _a2 : []);
	return {
		type: "function",
		name: tool.name,
		description: tool.description,
		parameters: normalizedInputSchema.schema,
		...async != null ? { async } : {},
		...tool.strict != null ? { strict: tool.strict } : {},
		...deferLoading != null ? { defer_loading: deferLoading } : {},
		...(options == null ? void 0 : options.allowedCallers) != null ? { allowed_callers: options.allowedCallers } : {},
		...(options == null ? void 0 : options.outputSchema) != null ? { output_schema: normalizedOutputSchema == null ? void 0 : normalizedOutputSchema.schema } : {}
	};
}
function resolveAsyncToolOption({ value, supportsAsyncToolCalling, toolName, toolWarnings }) {
	if (value !== true || supportsAsyncToolCalling) return value;
	toolWarnings.push({
		type: "unsupported",
		feature: `async tool calling for "${toolName}"`,
		details: "Async tool calling is only supported by GPT-6 and later models."
	});
}
function mapShellEnvironment(environment) {
	if (environment.type === "containerReference") return {
		type: "container_reference",
		container_id: environment.containerId
	};
	if (environment.type === "containerAuto") {
		const env2 = environment;
		return {
			type: "container_auto",
			file_ids: env2.fileIds,
			memory_limit: env2.memoryLimit,
			network_policy: env2.networkPolicy == null ? void 0 : env2.networkPolicy.type === "disabled" ? { type: "disabled" } : {
				type: "allowlist",
				allowed_domains: env2.networkPolicy.allowedDomains,
				domain_secrets: env2.networkPolicy.domainSecrets
			},
			skills: mapShellSkills(env2.skills)
		};
	}
	return {
		type: "local",
		skills: environment.skills
	};
}
function mapShellSkills(skills) {
	return skills == null ? void 0 : skills.map((skill) => {
		var _a2, _b;
		return skill.type === "skillReference" ? {
			type: "skill_reference",
			skill_id: resolveProviderReference({
				reference: (_a2 = skill.providerReference) != null ? _a2 : {},
				provider: "openai"
			}),
			version: (_b = skill.version) != null ? _b : "latest"
		} : {
			type: "inline",
			name: skill.name,
			description: skill.description,
			source: {
				type: "base64",
				media_type: skill.source.mediaType,
				data: skill.source.data
			}
		};
	});
}
function extractApprovalRequestIdToToolCallIdMapping(prompt) {
	var _a2, _b;
	const mapping = {};
	for (const message of prompt) {
		if (message.role !== "assistant") continue;
		for (const part of message.content) {
			if (part.type !== "tool-call") continue;
			const approvalRequestId = (_b = (_a2 = part.providerOptions) == null ? void 0 : _a2.openai) == null ? void 0 : _b.approvalRequestId;
			if (approvalRequestId != null) mapping[approvalRequestId] = part.toolCallId;
		}
	}
	return mapping;
}
function mapComputerAction(action) {
	switch (action.type) {
		case "click": return {
			type: "click",
			button: action.button,
			x: action.x,
			y: action.y,
			...action.keys != null && { keys: action.keys }
		};
		case "double_click": return {
			type: "double_click",
			x: action.x,
			y: action.y,
			...action.keys != null && { keys: action.keys }
		};
		case "drag": return {
			type: "drag",
			path: action.path,
			...action.keys != null && { keys: action.keys }
		};
		case "keypress": return action;
		case "move": return {
			type: "move",
			x: action.x,
			y: action.y,
			...action.keys != null && { keys: action.keys }
		};
		case "screenshot": return action;
		case "scroll": return {
			type: "scroll",
			x: action.x,
			y: action.y,
			scrollX: action.scroll_x,
			scrollY: action.scroll_y,
			...action.keys != null && { keys: action.keys }
		};
		case "type": return action;
		case "wait": return action;
	}
}
function mapComputerCallInput({ action, actions, pending_safety_checks, status }) {
	var _a2;
	return {
		actions: (actions != null ? actions : action != null ? [action] : []).map(mapComputerAction),
		pendingSafetyChecks: (_a2 = pending_safety_checks == null ? void 0 : pending_safety_checks.map((safetyCheck) => ({
			id: safetyCheck.id,
			...safetyCheck.code != null && { code: safetyCheck.code },
			...safetyCheck.message != null && { message: safetyCheck.message }
		}))) != null ? _a2 : [],
		status
	};
}
var openaiResponsesSupportedUrls = {
	"image/*": [/^https?:\/\/.*$/],
	"application/pdf": [/^https?:\/\/.*$/]
};
var OpenAIResponsesLanguageModel = class _OpenAIResponsesLanguageModel {
	constructor(modelId, config) {
		this.specificationVersion = "v4";
		this.supportedUrls = openaiResponsesSupportedUrls;
		this.modelId = modelId;
		this.config = config;
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAIResponsesLanguageModel(options.modelId, prepareOpenAIConfigForWorkflowDeserialize(options.config));
	}
	get provider() {
		return this.config.provider;
	}
	static async prepareRequest({ modelId, config, options: { maxOutputTokens, temperature, stopSequences, topP, topK, presencePenalty, frequencyPenalty, seed, prompt, reasoning, providerOptions, tools, toolChoice, responseFormat } }) {
		var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
		const warnings = [];
		const modelCapabilities = getOpenAILanguageModelCapabilities(modelId);
		if (topK != null) warnings.push({
			type: "unsupported",
			feature: "topK"
		});
		if (seed != null) warnings.push({
			type: "unsupported",
			feature: "seed"
		});
		if (presencePenalty != null) warnings.push({
			type: "unsupported",
			feature: "presencePenalty"
		});
		if (frequencyPenalty != null) warnings.push({
			type: "unsupported",
			feature: "frequencyPenalty"
		});
		if (stopSequences != null) warnings.push({
			type: "unsupported",
			feature: "stopSequences"
		});
		const providerOptionsName = config.provider.includes("azure") ? "azure" : "openai";
		let openaiOptions = await parseProviderOptions({
			provider: providerOptionsName,
			providerOptions,
			schema: openaiLanguageModelResponsesOptionsSchema
		});
		if (openaiOptions == null && providerOptionsName !== "openai") openaiOptions = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openaiLanguageModelResponsesOptionsSchema
		});
		let resolvedReasoningEffort = (_a2 = openaiOptions == null ? void 0 : openaiOptions.reasoningEffort) != null ? _a2 : isCustomReasoning(reasoning) ? reasoning : void 0;
		if (resolvedReasoningEffort != null && modelCapabilities.supportedReasoningEfforts != null && !modelCapabilities.supportedReasoningEfforts.includes(resolvedReasoningEffort)) {
			warnings.push({
				type: "unsupported",
				feature: "reasoningEffort",
				details: `${modelId} only supports the following reasoning efforts: ${modelCapabilities.supportedReasoningEfforts.join(", ")}`
			});
			resolvedReasoningEffort = void 0;
		}
		const resolvedReasoningSummary = (openaiOptions == null ? void 0 : openaiOptions.reasoningSummary) !== void 0 ? openaiOptions.reasoningSummary : resolvedReasoningEffort != null && resolvedReasoningEffort !== "none" ? "detailed" : void 0;
		const isReasoningModel = (_b = openaiOptions == null ? void 0 : openaiOptions.forceReasoning) != null ? _b : modelCapabilities.isReasoningModel;
		if ((openaiOptions == null ? void 0 : openaiOptions.conversation) && (openaiOptions == null ? void 0 : openaiOptions.previousResponseId)) warnings.push({
			type: "unsupported",
			feature: "conversation",
			details: "conversation and previousResponseId cannot be used together"
		});
		const toolNameMapping = createToolNameMapping({
			tools,
			providerToolNames: {
				"openai.code_interpreter": "code_interpreter",
				"openai.computer": "computer",
				"openai.file_search": "file_search",
				"openai.image_generation": "image_generation",
				"openai.local_shell": "local_shell",
				"openai.shell": "shell",
				"openai.web_search": "web_search",
				"openai.web_search_preview": "web_search_preview",
				"openai.mcp": "mcp",
				"openai.apply_patch": "apply_patch",
				"openai.tool_search": "tool_search",
				"openai.programmatic_tool_calling": "programmatic_tool_calling"
			}
		});
		const customProviderToolNames = /* @__PURE__ */ new Set();
		const outputSchemaToolNames = /* @__PURE__ */ new Set();
		const { tools: openaiTools2, toolChoice: openaiToolChoice, toolWarnings } = await prepareResponsesTools({
			tools,
			toolChoice,
			allowedTools: (_c = openaiOptions == null ? void 0 : openaiOptions.allowedTools) != null ? _c : void 0,
			toolNameMapping,
			customProviderToolNames,
			outputSchemaToolNames,
			supportsAsyncToolCalling: modelCapabilities.supportsAsyncToolCalling
		});
		const { input, warnings: inputWarnings } = await convertToOpenAIResponsesInput({
			prompt,
			toolNameMapping,
			systemMessageMode: (_d = openaiOptions == null ? void 0 : openaiOptions.systemMessageMode) != null ? _d : isReasoningModel ? "developer" : modelCapabilities.systemMessageMode,
			providerOptionsName,
			explicitMessageItemType: config.explicitMessageItemType,
			fileIdPrefixes: config.fileIdPrefixes,
			passThroughUnsupportedFiles: (_e = openaiOptions == null ? void 0 : openaiOptions.passThroughUnsupportedFiles) != null ? _e : false,
			store: (_f = openaiOptions == null ? void 0 : openaiOptions.store) != null ? _f : true,
			hasConversation: (openaiOptions == null ? void 0 : openaiOptions.conversation) != null,
			hasPreviousResponseId: (openaiOptions == null ? void 0 : openaiOptions.previousResponseId) != null,
			hasLocalShellTool: hasOpenAITool("openai.local_shell"),
			hasShellTool: hasOpenAITool("openai.shell"),
			hasApplyPatchTool: hasOpenAITool("openai.apply_patch"),
			hasComputerTool: hasOpenAITool("openai.computer"),
			toolSearchToolName: getOpenAIToolName("openai.tool_search"),
			customProviderToolNames: customProviderToolNames.size > 0 ? customProviderToolNames : void 0,
			outputSchemaToolNames: outputSchemaToolNames.size > 0 ? outputSchemaToolNames : void 0
		});
		warnings.push(...inputWarnings);
		const reasoningEffortUpdate = openaiOptions == null ? void 0 : openaiOptions.reasoningEffortUpdate;
		const configurationUpdateIsSupported = reasoningEffortUpdate == null || modelCapabilities.supportsConfigurationUpdate && (openaiOptions == null ? void 0 : openaiOptions.reasoningMode) !== "pro" && (openaiOptions == null ? void 0 : openaiOptions.contextManagement) == null && (openaiOptions == null ? void 0 : openaiOptions.truncation) !== "auto";
		if (reasoningEffortUpdate != null && !configurationUpdateIsSupported) warnings.push({
			type: "unsupported",
			feature: "reasoningEffortUpdate",
			details: !modelCapabilities.supportsConfigurationUpdate ? "reasoningEffortUpdate is only supported by GPT-6 and later models" : "reasoningEffortUpdate requires standard reasoning mode without automatic compaction or automatic truncation"
		});
		else if (reasoningEffortUpdate != null) input.unshift({
			type: "configuration_update",
			reasoning: { effort: reasoningEffortUpdate }
		});
		if (openaiOptions == null ? void 0 : openaiOptions.compactionTrigger) input.push({ type: "compaction_trigger" });
		const strictJsonSchema = (_g = openaiOptions == null ? void 0 : openaiOptions.strictJsonSchema) != null ? _g : true;
		const normalizedResponseFormatSchema = (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null ? normalizeOpenAIJsonSchema(responseFormat.schema) : void 0;
		if (normalizedResponseFormatSchema != null) warnings.push(...normalizedResponseFormatSchema.warnings);
		let include = openaiOptions == null ? void 0 : openaiOptions.include;
		function addInclude(key) {
			if (include == null) include = [key];
			else if (!include.includes(key)) include = [...include, key];
		}
		function getOpenAIToolName(id) {
			var _a3;
			return (_a3 = tools == null ? void 0 : tools.find((tool) => tool.type === "provider" && tool.id === id)) == null ? void 0 : _a3.name;
		}
		function hasOpenAITool(id) {
			return getOpenAIToolName(id) != null;
		}
		const topLogprobs = typeof (openaiOptions == null ? void 0 : openaiOptions.logprobs) === "number" ? openaiOptions == null ? void 0 : openaiOptions.logprobs : (openaiOptions == null ? void 0 : openaiOptions.logprobs) === true ? TOP_LOGPROBS_MAX : void 0;
		if (topLogprobs) addInclude("message.output_text.logprobs");
		const webSearchToolName = (_h = tools == null ? void 0 : tools.find((tool) => tool.type === "provider" && (tool.id === "openai.web_search" || tool.id === "openai.web_search_preview"))) == null ? void 0 : _h.name;
		if (webSearchToolName && config.supportsWebSearchSourcesInclude !== false && (openaiOptions == null ? void 0 : openaiOptions.includeWebSearchSources) !== false) addInclude("web_search_call.action.sources");
		if (hasOpenAITool("openai.code_interpreter")) addInclude("code_interpreter_call.outputs");
		const store = openaiOptions == null ? void 0 : openaiOptions.store;
		if (store === false && isReasoningModel) addInclude("reasoning.encrypted_content");
		const baseArgs = {
			model: modelId,
			input,
			temperature,
			top_p: topP,
			max_output_tokens: maxOutputTokens,
			...((responseFormat == null ? void 0 : responseFormat.type) === "json" || (openaiOptions == null ? void 0 : openaiOptions.textVerbosity)) && { text: {
				...(responseFormat == null ? void 0 : responseFormat.type) === "json" && { format: normalizedResponseFormatSchema != null ? {
					type: "json_schema",
					strict: strictJsonSchema,
					name: (_i = responseFormat.name) != null ? _i : "response",
					description: responseFormat.description,
					schema: normalizedResponseFormatSchema.schema
				} : { type: "json_object" } },
				...(openaiOptions == null ? void 0 : openaiOptions.textVerbosity) && { verbosity: openaiOptions.textVerbosity }
			} },
			conversation: openaiOptions == null ? void 0 : openaiOptions.conversation,
			max_tool_calls: openaiOptions == null ? void 0 : openaiOptions.maxToolCalls,
			metadata: openaiOptions == null ? void 0 : openaiOptions.metadata,
			parallel_tool_calls: openaiOptions == null ? void 0 : openaiOptions.parallelToolCalls,
			previous_response_id: openaiOptions == null ? void 0 : openaiOptions.previousResponseId,
			store,
			user: openaiOptions == null ? void 0 : openaiOptions.user,
			instructions: openaiOptions == null ? void 0 : openaiOptions.instructions,
			service_tier: openaiOptions == null ? void 0 : openaiOptions.serviceTier,
			include,
			prompt_cache_key: openaiOptions == null ? void 0 : openaiOptions.promptCacheKey,
			prompt_cache_options: openaiOptions == null ? void 0 : openaiOptions.promptCacheOptions,
			prompt_cache_retention: openaiOptions == null ? void 0 : openaiOptions.promptCacheRetention,
			safety_identifier: openaiOptions == null ? void 0 : openaiOptions.safetyIdentifier,
			top_logprobs: topLogprobs,
			truncation: openaiOptions == null ? void 0 : openaiOptions.truncation,
			...(openaiOptions == null ? void 0 : openaiOptions.contextManagement) && { context_management: openaiOptions.contextManagement.map((cm) => ({
				type: cm.type,
				compact_threshold: cm.compactThreshold
			})) },
			...isReasoningModel && (resolvedReasoningEffort != null || resolvedReasoningSummary != null || (openaiOptions == null ? void 0 : openaiOptions.reasoningMode) != null || (openaiOptions == null ? void 0 : openaiOptions.reasoningContext) != null) && { reasoning: {
				...resolvedReasoningEffort != null && { effort: resolvedReasoningEffort },
				...resolvedReasoningSummary != null && { summary: resolvedReasoningSummary },
				...(openaiOptions == null ? void 0 : openaiOptions.reasoningMode) != null && { mode: openaiOptions.reasoningMode },
				...(openaiOptions == null ? void 0 : openaiOptions.reasoningContext) != null && { context: openaiOptions.reasoningContext }
			} }
		};
		if (modelCapabilities.supportsConfigurationUpdate && baseArgs.prompt_cache_retention != null) {
			baseArgs.prompt_cache_retention = void 0;
			warnings.push({
				type: "unsupported",
				feature: "promptCacheRetention",
				details: "promptCacheRetention is not supported by GPT-6 and later models; use promptCacheOptions instead"
			});
		}
		if (isReasoningModel) {
			if (!(resolvedReasoningEffort === "none" && modelCapabilities.supportsNonReasoningParameters)) {
				if (baseArgs.temperature != null) {
					baseArgs.temperature = void 0;
					warnings.push({
						type: "unsupported",
						feature: "temperature",
						details: "temperature is not supported for reasoning models"
					});
				}
				if (baseArgs.top_p != null) {
					baseArgs.top_p = void 0;
					warnings.push({
						type: "unsupported",
						feature: "topP",
						details: "topP is not supported for reasoning models"
					});
				}
				if (modelCapabilities.supportedReasoningEfforts != null && (baseArgs.top_logprobs != null || ((_j = baseArgs.include) == null ? void 0 : _j.includes("message.output_text.logprobs")))) {
					baseArgs.top_logprobs = void 0;
					const filteredInclude = (_k = baseArgs.include) == null ? void 0 : _k.filter((value) => value !== "message.output_text.logprobs");
					baseArgs.include = filteredInclude != null && filteredInclude.length > 0 ? filteredInclude : void 0;
					warnings.push({
						type: "unsupported",
						feature: "logprobs",
						details: "logprobs is not supported for reasoning models"
					});
				}
			}
		} else {
			if ((openaiOptions == null ? void 0 : openaiOptions.reasoningEffort) != null) warnings.push({
				type: "unsupported",
				feature: "reasoningEffort",
				details: "reasoningEffort is not supported for non-reasoning models"
			});
			if ((openaiOptions == null ? void 0 : openaiOptions.reasoningSummary) != null) warnings.push({
				type: "unsupported",
				feature: "reasoningSummary",
				details: "reasoningSummary is not supported for non-reasoning models"
			});
			if ((openaiOptions == null ? void 0 : openaiOptions.reasoningMode) != null) warnings.push({
				type: "unsupported",
				feature: "reasoningMode",
				details: "reasoningMode is not supported for non-reasoning models"
			});
			if ((openaiOptions == null ? void 0 : openaiOptions.reasoningContext) != null) warnings.push({
				type: "unsupported",
				feature: "reasoningContext",
				details: "reasoningContext is not supported for non-reasoning models"
			});
		}
		if ((openaiOptions == null ? void 0 : openaiOptions.serviceTier) === "flex" && !modelCapabilities.supportsFlexProcessing) {
			warnings.push({
				type: "unsupported",
				feature: "serviceTier",
				details: "flex processing is only available for o3, o4-mini, and gpt-5 models"
			});
			delete baseArgs.service_tier;
		}
		if (((openaiOptions == null ? void 0 : openaiOptions.serviceTier) === "priority" || (openaiOptions == null ? void 0 : openaiOptions.serviceTier) === "fast") && !modelCapabilities.supportsPriorityProcessing) {
			warnings.push({
				type: "unsupported",
				feature: "serviceTier",
				details: "priority processing is only available for supported models (gpt-4, gpt-5, gpt-5-mini, o3, o4-mini) and requires Enterprise access. gpt-5-nano is not supported"
			});
			delete baseArgs.service_tier;
		}
		const shellToolEnvType = (_n = (_m = (_l = tools == null ? void 0 : tools.find((tool) => tool.type === "provider" && tool.id === "openai.shell")) == null ? void 0 : _l.args) == null ? void 0 : _m.environment) == null ? void 0 : _n.type;
		const isShellProviderExecuted = shellToolEnvType === "containerAuto" || shellToolEnvType === "containerReference";
		return {
			webSearchToolName,
			args: {
				...baseArgs,
				tools: openaiTools2,
				tool_choice: openaiToolChoice
			},
			warnings: [...warnings, ...toolWarnings],
			store,
			toolNameMapping,
			providerOptionsName,
			isShellProviderExecuted
		};
	}
	getArgs(options) {
		return _OpenAIResponsesLanguageModel.prepareRequest({
			modelId: this.modelId,
			config: this.config,
			options
		});
	}
	async doGenerate(options) {
		var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H;
		const { args: body, warnings, webSearchToolName, toolNameMapping, providerOptionsName, isShellProviderExecuted } = await this.getArgs(options);
		const url = this.config.url({
			path: "/responses",
			modelId: this.modelId
		});
		const approvalRequestIdToDummyToolCallIdFromPrompt = extractApprovalRequestIdToToolCallIdMapping(options.prompt);
		const { responseHeaders, value: response, rawValue: rawResponse } = await postJsonToApi({
			url,
			headers: combineHeaders((_b = (_a2 = this.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiResponsesResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		if (response.error) throw new APICallError({
			message: response.error.message,
			url,
			requestBodyValues: body,
			statusCode: 400,
			responseHeaders,
			responseBody: rawResponse,
			isRetryable: false
		});
		if (response.output == null) {
			const detail = (_c = response.incomplete_details) == null ? void 0 : _c.reason;
			throw new APICallError({
				message: detail ? `Responses API returned no output (${detail})` : "Responses API returned no output",
				url,
				requestBodyValues: body,
				statusCode: 500,
				responseHeaders,
				responseBody: rawResponse,
				isRetryable: false
			});
		}
		const content = [];
		const logprobs = [];
		const functionTools = (_e = (_d = options.tools) == null ? void 0 : _d.filter((tool) => tool.type === "function")) != null ? _e : [];
		let hasFunctionCall = false;
		const hostedToolSearchCallIds = [];
		for (const part of response.output) switch (part.type) {
			case "reasoning":
				if (part.summary.length === 0) part.summary.push({
					type: "summary_text",
					text: ""
				});
				for (const summary of part.summary) content.push({
					type: "reasoning",
					text: summary.text,
					providerMetadata: { [providerOptionsName]: {
						itemId: part.id,
						reasoningEncryptedContent: (_f = part.encrypted_content) != null ? _f : null
					} }
				});
				break;
			case "image_generation_call":
				content.push({
					type: "tool-call",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName("image_generation"),
					input: "{}",
					providerExecuted: true
				});
				content.push({
					type: "tool-result",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName("image_generation"),
					result: { result: part.result }
				});
				break;
			case "tool_search_call": {
				const toolCallId = (_g = part.call_id) != null ? _g : part.id;
				const isHosted = part.execution === "server";
				if (isHosted) hostedToolSearchCallIds.push(toolCallId);
				content.push({
					type: "tool-call",
					toolCallId,
					toolName: toolNameMapping.toCustomToolName("tool_search"),
					input: JSON.stringify({
						arguments: part.arguments,
						call_id: part.call_id
					}),
					...isHosted ? { providerExecuted: true } : {},
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			}
			case "tool_search_output": {
				const toolCallId = (_i = (_h = part.call_id) != null ? _h : hostedToolSearchCallIds.shift()) != null ? _i : part.id;
				content.push({
					type: "tool-result",
					toolCallId,
					toolName: toolNameMapping.toCustomToolName("tool_search"),
					result: { tools: part.tools },
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			}
			case "local_shell_call":
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName: toolNameMapping.toCustomToolName("local_shell"),
					input: JSON.stringify({ action: part.action }),
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			case "shell_call":
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName: toolNameMapping.toCustomToolName("shell"),
					input: JSON.stringify({ action: { commands: part.action.commands } }),
					...isShellProviderExecuted && { providerExecuted: true },
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			case "shell_call_output":
				content.push({
					type: "tool-result",
					toolCallId: part.call_id,
					toolName: toolNameMapping.toCustomToolName("shell"),
					result: { output: part.output.map((item) => ({
						stdout: item.stdout,
						stderr: item.stderr,
						outcome: item.outcome.type === "exit" ? {
							type: "exit",
							exitCode: item.outcome.exit_code
						} : { type: "timeout" }
					})) }
				});
				break;
			case "message":
				for (const contentPart of part.content) {
					if (((_k = (_j = options.providerOptions) == null ? void 0 : _j[providerOptionsName]) == null ? void 0 : _k.logprobs) && contentPart.logprobs) logprobs.push(contentPart.logprobs);
					const providerMetadata2 = {
						itemId: part.id,
						...part.phase != null && { phase: part.phase },
						...contentPart.annotations.length > 0 && { annotations: contentPart.annotations }
					};
					content.push({
						type: "text",
						text: contentPart.text,
						providerMetadata: { [providerOptionsName]: providerMetadata2 }
					});
					for (const annotation of contentPart.annotations) if (annotation.type === "url_citation") content.push({
						type: "source",
						sourceType: "url",
						id: (_n = (_m = (_l = this.config).generateId) == null ? void 0 : _m.call(_l)) != null ? _n : generateId(),
						url: annotation.url,
						title: annotation.title
					});
					else if (annotation.type === "file_citation") content.push({
						type: "source",
						sourceType: "document",
						id: (_q = (_p = (_o = this.config).generateId) == null ? void 0 : _p.call(_o)) != null ? _q : generateId(),
						mediaType: "text/plain",
						title: annotation.filename,
						filename: annotation.filename,
						providerMetadata: { [providerOptionsName]: {
							type: annotation.type,
							fileId: annotation.file_id,
							index: annotation.index
						} }
					});
					else if (annotation.type === "container_file_citation") content.push({
						type: "source",
						sourceType: "document",
						id: (_t = (_s = (_r = this.config).generateId) == null ? void 0 : _s.call(_r)) != null ? _t : generateId(),
						mediaType: "text/plain",
						title: annotation.filename,
						filename: annotation.filename,
						providerMetadata: { [providerOptionsName]: {
							type: annotation.type,
							fileId: annotation.file_id,
							containerId: annotation.container_id
						} }
					});
					else if (annotation.type === "file_path") content.push({
						type: "source",
						sourceType: "document",
						id: (_w = (_v = (_u = this.config).generateId) == null ? void 0 : _v.call(_u)) != null ? _w : generateId(),
						mediaType: "application/octet-stream",
						title: annotation.file_id,
						filename: annotation.file_id,
						providerMetadata: { [providerOptionsName]: {
							type: annotation.type,
							fileId: annotation.file_id,
							index: annotation.index
						} }
					});
				}
				break;
			case "function_call": {
				hasFunctionCall = true;
				const expandedToolCalls = await expandParallelToolCall({
					toolCall: {
						toolCallId: part.call_id,
						toolName: part.name,
						input: part.arguments
					},
					tools: functionTools,
					providerOptionsName,
					itemId: part.id
				});
				if (expandedToolCalls != null) {
					content.push(...expandedToolCalls);
					break;
				}
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName: part.name,
					input: part.arguments,
					providerMetadata: { [providerOptionsName]: {
						itemId: part.id,
						...part.async != null && { async: part.async },
						...part.namespace != null && { namespace: part.namespace },
						...part.caller != null && { caller: part.caller.type === "program" ? {
							type: "program",
							callerId: part.caller.caller_id
						} : part.caller }
					} }
				});
				break;
			}
			case "program":
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName: toolNameMapping.toCustomToolName("programmatic_tool_calling"),
					input: JSON.stringify({
						code: part.code,
						fingerprint: part.fingerprint
					}),
					providerExecuted: true,
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			case "program_output":
				content.push({
					type: "tool-result",
					toolCallId: part.call_id,
					toolName: toolNameMapping.toCustomToolName("programmatic_tool_calling"),
					result: {
						result: part.result,
						status: part.status
					},
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			case "custom_tool_call": {
				hasFunctionCall = true;
				const toolName = toolNameMapping.toCustomToolName(part.name);
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName,
					input: JSON.stringify(part.input),
					providerMetadata: { [providerOptionsName]: {
						itemId: part.id,
						...part.async != null && { async: part.async }
					} }
				});
				break;
			}
			case "web_search_call":
				content.push({
					type: "tool-call",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName(webSearchToolName != null ? webSearchToolName : "web_search"),
					input: JSON.stringify({}),
					providerExecuted: true
				});
				content.push({
					type: "tool-result",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName(webSearchToolName != null ? webSearchToolName : "web_search"),
					result: mapWebSearchOutput(part.action)
				});
				break;
			case "mcp_call": {
				const toolCallId = part.approval_request_id != null ? (_x = approvalRequestIdToDummyToolCallIdFromPrompt[part.approval_request_id]) != null ? _x : part.id : part.id;
				const toolName = `mcp.${part.name}`;
				content.push({
					type: "tool-call",
					toolCallId,
					toolName,
					input: part.arguments,
					providerExecuted: true,
					dynamic: true
				});
				content.push({
					type: "tool-result",
					toolCallId,
					toolName,
					result: {
						type: "call",
						serverLabel: part.server_label,
						name: part.name,
						arguments: part.arguments,
						...part.output != null ? { output: part.output } : {},
						...part.error != null ? { error: part.error } : {}
					},
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			}
			case "mcp_list_tools": break;
			case "mcp_approval_request": {
				const approvalRequestId = (_y = part.approval_request_id) != null ? _y : part.id;
				const dummyToolCallId = (_B = (_A = (_z = this.config).generateId) == null ? void 0 : _A.call(_z)) != null ? _B : generateId();
				const toolName = `mcp.${part.name}`;
				content.push({
					type: "tool-call",
					toolCallId: dummyToolCallId,
					toolName,
					input: part.arguments,
					providerExecuted: true,
					dynamic: true
				});
				content.push({
					type: "tool-approval-request",
					approvalId: approvalRequestId,
					toolCallId: dummyToolCallId
				});
				break;
			}
			case "computer_call": {
				if (part.call_id == null) {
					content.push({
						type: "tool-call",
						toolCallId: part.id,
						toolName: toolNameMapping.toCustomToolName("computer_use"),
						input: "",
						providerExecuted: true
					});
					content.push({
						type: "tool-result",
						toolCallId: part.id,
						toolName: toolNameMapping.toCustomToolName("computer_use"),
						result: {
							type: "computer_use_tool_result",
							status: part.status
						}
					});
					break;
				}
				hasFunctionCall = true;
				const toolName = toolNameMapping.toCustomToolName("computer");
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName,
					input: JSON.stringify(mapComputerCallInput(part)),
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			}
			case "file_search_call":
				content.push({
					type: "tool-call",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName("file_search"),
					input: "{}",
					providerExecuted: true
				});
				content.push({
					type: "tool-result",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName("file_search"),
					result: {
						queries: part.queries,
						results: (_D = (_C = part.results) == null ? void 0 : _C.map((result) => ({
							attributes: result.attributes,
							fileId: result.file_id,
							filename: result.filename,
							score: result.score,
							text: result.text
						}))) != null ? _D : null
					}
				});
				break;
			case "code_interpreter_call":
				content.push({
					type: "tool-call",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName("code_interpreter"),
					input: JSON.stringify({
						code: part.code,
						containerId: part.container_id
					}),
					providerExecuted: true
				});
				content.push({
					type: "tool-result",
					toolCallId: part.id,
					toolName: toolNameMapping.toCustomToolName("code_interpreter"),
					result: { outputs: part.outputs }
				});
				break;
			case "apply_patch_call":
				hasFunctionCall = true;
				content.push({
					type: "tool-call",
					toolCallId: part.call_id,
					toolName: toolNameMapping.toCustomToolName("apply_patch"),
					input: JSON.stringify({
						callId: part.call_id,
						operation: part.operation
					}),
					providerMetadata: { [providerOptionsName]: { itemId: part.id } }
				});
				break;
			case "compaction": content.push({
				type: "custom",
				kind: "openai.compaction",
				providerMetadata: { [providerOptionsName]: {
					type: "compaction",
					itemId: part.id,
					encryptedContent: part.encrypted_content
				} }
			});
		}
		const providerMetadata = { [providerOptionsName]: {
			responseId: response.id,
			...logprobs.length > 0 ? { logprobs } : {},
			...typeof response.service_tier === "string" ? { serviceTier: response.service_tier } : {},
			...((_E = response.reasoning) == null ? void 0 : _E.context) != null ? { reasoningContext: response.reasoning.context } : {}
		} };
		const usage = response.usage;
		return {
			content,
			finishReason: {
				unified: mapOpenAIResponseFinishReason({
					finishReason: (_F = response.incomplete_details) == null ? void 0 : _F.reason,
					hasFunctionCall
				}),
				raw: (_H = (_G = response.incomplete_details) == null ? void 0 : _G.reason) != null ? _H : void 0
			},
			usage: convertOpenAIResponsesUsage(usage),
			request: { body },
			response: {
				id: response.id,
				timestamp: /* @__PURE__ */ new Date(response.created_at * 1e3),
				modelId: response.model,
				headers: responseHeaders,
				body: rawResponse
			},
			providerMetadata,
			warnings
		};
	}
	async doStream(options) {
		var _a2, _b, _c, _d;
		const { args: body, warnings, webSearchToolName, toolNameMapping, store, providerOptionsName, isShellProviderExecuted } = await this.getArgs(options);
		const url = this.config.url({
			path: "/responses",
			modelId: this.modelId
		});
		const { responseHeaders, value: response } = await postJsonToApi({
			url,
			headers: combineHeaders((_b = (_a2 = this.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body: {
				...body,
				stream: true
			},
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createEventSourceResponseHandler(openaiResponsesChunkSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		const checkedResponse = await throwIfOpenAIStreamErrorBeforeOutput({
			stream: response,
			getError: (chunk) => isErrorChunk(chunk) || isResponseFailedChunk(chunk) && chunk.response.error != null ? chunk : void 0,
			isOutputChunk: isResponseOutputChunk,
			isAcceptedChunk: isResponseInProgressChunk,
			url,
			requestBodyValues: body,
			responseHeaders
		});
		const self = this;
		const approvalRequestIdToDummyToolCallIdFromPrompt = extractApprovalRequestIdToToolCallIdMapping(options.prompt);
		const functionTools = (_d = (_c = options.tools) == null ? void 0 : _c.filter((tool) => tool.type === "function")) != null ? _d : [];
		const approvalRequestIdToDummyToolCallIdFromStream = /* @__PURE__ */ new Map();
		let finishReason = {
			unified: "other",
			raw: void 0
		};
		let usage = void 0;
		const logprobs = [];
		let responseId = null;
		const ongoingToolCalls = {};
		const ongoingAnnotations = [];
		let activeMessagePhase;
		let hasFunctionCall = false;
		const activeReasoning = {};
		const activeOutputItemIds = {};
		const resolveOutputItemId = ({ itemId, outputIndex }) => {
			var _a3;
			return outputIndex == null ? itemId : (_a3 = activeOutputItemIds[outputIndex]) != null ? _a3 : itemId;
		};
		let serviceTier;
		let reasoningContext;
		const hostedToolSearchCallIds = [];
		let encounteredStreamError = false;
		return {
			stream: checkedResponse.pipeThrough(new TransformStream({
				start(controller) {
					controller.enqueue({
						type: "stream-start",
						warnings
					});
				},
				transform(chunk, controller) {
					var _a3, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S;
					if (options.includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: chunk.rawValue
					});
					if (!chunk.success) {
						const error = isOpenAIChatCompletionChunk(chunk.rawValue) ? createOpenAIResponsesChatCompletionsMismatchError({
							value: chunk.rawValue,
							cause: chunk.error,
							url,
							requestBodyValues: body,
							responseHeaders
						}) : chunk.error;
						encounteredStreamError = true;
						finishReason = {
							unified: "error",
							raw: void 0
						};
						controller.enqueue({
							type: "error",
							error
						});
						return;
					}
					const value = chunk.value;
					if (isResponseOutputItemAddedChunk(value)) {
						if (value.item.type === "function_call") {
							const suppressInputStreaming = isUndeclaredParallelToolCall({
								toolName: value.item.name,
								tools: functionTools
							});
							ongoingToolCalls[value.output_index] = {
								toolName: value.item.name,
								toolCallId: value.item.call_id,
								suppressInputStreaming,
								bufferedInputDeltas: suppressInputStreaming ? [] : void 0,
								async: value.item.async
							};
							if (!suppressInputStreaming) controller.enqueue({
								type: "tool-input-start",
								id: value.item.call_id,
								toolName: value.item.name
							});
						} else if (value.item.type === "custom_tool_call") {
							const toolName = toolNameMapping.toCustomToolName(value.item.name);
							ongoingToolCalls[value.output_index] = {
								toolName,
								toolCallId: value.item.call_id,
								async: value.item.async
							};
							controller.enqueue({
								type: "tool-input-start",
								id: value.item.call_id,
								toolName
							});
						} else if (value.item.type === "web_search_call") {
							ongoingToolCalls[value.output_index] = {
								toolName: toolNameMapping.toCustomToolName(webSearchToolName != null ? webSearchToolName : "web_search"),
								toolCallId: value.item.id
							};
							controller.enqueue({
								type: "tool-input-start",
								id: value.item.id,
								toolName: toolNameMapping.toCustomToolName(webSearchToolName != null ? webSearchToolName : "web_search"),
								providerExecuted: true
							});
							controller.enqueue({
								type: "tool-input-end",
								id: value.item.id
							});
							controller.enqueue({
								type: "tool-call",
								toolCallId: value.item.id,
								toolName: toolNameMapping.toCustomToolName(webSearchToolName != null ? webSearchToolName : "web_search"),
								input: JSON.stringify({}),
								providerExecuted: true
							});
						} else if (value.item.type === "computer_call") {
							const toolCallId = (_a3 = value.item.call_id) != null ? _a3 : value.item.id;
							ongoingToolCalls[value.output_index] = {
								toolName: toolNameMapping.toCustomToolName("computer"),
								toolCallId
							};
							controller.enqueue({
								type: "tool-input-start",
								id: toolCallId,
								toolName: toolNameMapping.toCustomToolName("computer")
							});
						} else if (value.item.type === "code_interpreter_call") {
							ongoingToolCalls[value.output_index] = {
								toolName: toolNameMapping.toCustomToolName("code_interpreter"),
								toolCallId: value.item.id,
								codeInterpreter: { containerId: value.item.container_id }
							};
							controller.enqueue({
								type: "tool-input-start",
								id: value.item.id,
								toolName: toolNameMapping.toCustomToolName("code_interpreter"),
								providerExecuted: true
							});
							controller.enqueue({
								type: "tool-input-delta",
								id: value.item.id,
								delta: `{"containerId":"${value.item.container_id}","code":"`
							});
						} else if (value.item.type === "file_search_call") controller.enqueue({
							type: "tool-call",
							toolCallId: value.item.id,
							toolName: toolNameMapping.toCustomToolName("file_search"),
							input: "{}",
							providerExecuted: true
						});
						else if (value.item.type === "image_generation_call") controller.enqueue({
							type: "tool-call",
							toolCallId: value.item.id,
							toolName: toolNameMapping.toCustomToolName("image_generation"),
							input: "{}",
							providerExecuted: true
						});
						else if (value.item.type === "tool_search_call") {
							const toolCallId = value.item.id;
							const toolName = toolNameMapping.toCustomToolName("tool_search");
							const isHosted = value.item.execution === "server";
							ongoingToolCalls[value.output_index] = {
								toolName,
								toolCallId,
								toolSearchExecution: (_b2 = value.item.execution) != null ? _b2 : "server"
							};
							if (isHosted) controller.enqueue({
								type: "tool-input-start",
								id: toolCallId,
								toolName,
								providerExecuted: true
							});
						} else if (value.item.type === "tool_search_output") {} else if (value.item.type === "mcp_call" || value.item.type === "mcp_list_tools" || value.item.type === "mcp_approval_request") {} else if (value.item.type === "apply_patch_call") {
							const { call_id: callId, operation } = value.item;
							ongoingToolCalls[value.output_index] = {
								toolName: toolNameMapping.toCustomToolName("apply_patch"),
								toolCallId: callId,
								applyPatch: {
									hasDiff: operation.type === "delete_file",
									endEmitted: operation.type === "delete_file"
								}
							};
							controller.enqueue({
								type: "tool-input-start",
								id: callId,
								toolName: toolNameMapping.toCustomToolName("apply_patch")
							});
							if (operation.type === "delete_file") {
								const inputString = JSON.stringify({
									callId,
									operation
								});
								controller.enqueue({
									type: "tool-input-delta",
									id: callId,
									delta: inputString
								});
								controller.enqueue({
									type: "tool-input-end",
									id: callId
								});
							} else controller.enqueue({
								type: "tool-input-delta",
								id: callId,
								delta: `{"callId":"${escapeJSONDelta(callId)}","operation":{"type":"${escapeJSONDelta(operation.type)}","path":"${escapeJSONDelta(operation.path)}","diff":"`
							});
						} else if (value.item.type === "shell_call") ongoingToolCalls[value.output_index] = {
							toolName: toolNameMapping.toCustomToolName("shell"),
							toolCallId: value.item.call_id
						};
						else if (value.item.type === "shell_call_output") {} else if (value.item.type === "message") {
							activeOutputItemIds[value.output_index] = value.item.id;
							ongoingAnnotations.splice(0, ongoingAnnotations.length);
							activeMessagePhase = (_c2 = value.item.phase) != null ? _c2 : void 0;
							controller.enqueue({
								type: "text-start",
								id: value.item.id,
								providerMetadata: { [providerOptionsName]: {
									itemId: value.item.id,
									...value.item.phase != null && { phase: value.item.phase }
								} }
							});
						} else if (isResponseOutputItemAddedChunk(value) && value.item.type === "reasoning") {
							activeOutputItemIds[value.output_index] = value.item.id;
							activeReasoning[value.item.id] = {
								encryptedContent: value.item.encrypted_content,
								summaryParts: { 0: "active" }
							};
							controller.enqueue({
								type: "reasoning-start",
								id: `${value.item.id}:0`,
								providerMetadata: { [providerOptionsName]: {
									itemId: value.item.id,
									reasoningEncryptedContent: (_d2 = value.item.encrypted_content) != null ? _d2 : null
								} }
							});
						}
					} else if (isResponseOutputItemDoneChunk(value)) {
						if (value.item.type === "message") {
							const itemId = resolveOutputItemId({
								itemId: value.item.id,
								outputIndex: value.output_index
							});
							const phase = (_e = value.item.phase) != null ? _e : activeMessagePhase;
							activeMessagePhase = void 0;
							controller.enqueue({
								type: "text-end",
								id: itemId,
								providerMetadata: { [providerOptionsName]: {
									itemId,
									...phase != null && { phase },
									...ongoingAnnotations.length > 0 && { annotations: ongoingAnnotations }
								} }
							});
							activeOutputItemIds[value.output_index] = void 0;
						} else if (value.item.type === "function_call") {
							const item = value.item;
							const ongoingToolCall = ongoingToolCalls[value.output_index];
							ongoingToolCalls[value.output_index] = void 0;
							hasFunctionCall = true;
							const suppressInputStreaming = (_f = ongoingToolCall == null ? void 0 : ongoingToolCall.suppressInputStreaming) != null ? _f : isUndeclaredParallelToolCall({
								toolName: item.name,
								tools: functionTools
							});
							const enqueueUnexpandedToolCall = () => {
								var _a4;
								if (suppressInputStreaming) {
									controller.enqueue({
										type: "tool-input-start",
										id: item.call_id,
										toolName: item.name
									});
									const bufferedInputDeltas = (_a4 = ongoingToolCall == null ? void 0 : ongoingToolCall.bufferedInputDeltas) != null ? _a4 : [];
									if (bufferedInputDeltas.length > 0) for (const delta of bufferedInputDeltas) controller.enqueue({
										type: "tool-input-delta",
										id: item.call_id,
										delta
									});
									else if (item.arguments.length > 0) controller.enqueue({
										type: "tool-input-delta",
										id: item.call_id,
										delta: item.arguments
									});
								}
								controller.enqueue({
									type: "tool-input-end",
									id: item.call_id,
									...item.namespace != null && { providerMetadata: { [providerOptionsName]: { namespace: item.namespace } } }
								});
								controller.enqueue({
									type: "tool-call",
									toolCallId: item.call_id,
									toolName: item.name,
									input: item.arguments,
									providerMetadata: { [providerOptionsName]: {
										itemId: item.id,
										...item.async != null ? { async: item.async } : (ongoingToolCall == null ? void 0 : ongoingToolCall.async) != null ? { async: ongoingToolCall.async } : {},
										...item.namespace != null && { namespace: item.namespace },
										...item.caller != null && { caller: item.caller.type === "program" ? {
											type: "program",
											callerId: item.caller.caller_id
										} : item.caller }
									} }
								});
							};
							if (!suppressInputStreaming) {
								enqueueUnexpandedToolCall();
								return;
							}
							return expandParallelToolCall({
								toolCall: {
									toolCallId: item.call_id,
									toolName: item.name,
									input: item.arguments
								},
								tools: functionTools,
								providerOptionsName,
								itemId: item.id
							}).then((expandedToolCalls) => {
								if (expandedToolCalls == null) {
									enqueueUnexpandedToolCall();
									return;
								}
								for (const toolCall of expandedToolCalls) {
									controller.enqueue({
										type: "tool-input-start",
										id: toolCall.toolCallId,
										toolName: toolCall.toolName
									});
									controller.enqueue({
										type: "tool-input-delta",
										id: toolCall.toolCallId,
										delta: toolCall.input
									});
									controller.enqueue({
										type: "tool-input-end",
										id: toolCall.toolCallId
									});
									controller.enqueue(toolCall);
								}
							});
						} else if (value.item.type === "program") controller.enqueue({
							type: "tool-call",
							toolCallId: value.item.call_id,
							toolName: toolNameMapping.toCustomToolName("programmatic_tool_calling"),
							input: JSON.stringify({
								code: value.item.code,
								fingerprint: value.item.fingerprint
							}),
							providerExecuted: true,
							providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
						});
						else if (value.item.type === "program_output") controller.enqueue({
							type: "tool-result",
							toolCallId: value.item.call_id,
							toolName: toolNameMapping.toCustomToolName("programmatic_tool_calling"),
							result: {
								result: value.item.result,
								status: value.item.status
							},
							providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
						});
						else if (value.item.type === "custom_tool_call") {
							const ongoingToolCall = ongoingToolCalls[value.output_index];
							ongoingToolCalls[value.output_index] = void 0;
							hasFunctionCall = true;
							const toolName = toolNameMapping.toCustomToolName(value.item.name);
							controller.enqueue({
								type: "tool-input-end",
								id: value.item.call_id
							});
							controller.enqueue({
								type: "tool-call",
								toolCallId: value.item.call_id,
								toolName,
								input: JSON.stringify(value.item.input),
								providerMetadata: { [providerOptionsName]: {
									itemId: value.item.id,
									...value.item.async != null ? { async: value.item.async } : (ongoingToolCall == null ? void 0 : ongoingToolCall.async) != null ? { async: ongoingToolCall.async } : {}
								} }
							});
						} else if (value.item.type === "web_search_call") {
							ongoingToolCalls[value.output_index] = void 0;
							controller.enqueue({
								type: "tool-result",
								toolCallId: value.item.id,
								toolName: toolNameMapping.toCustomToolName(webSearchToolName != null ? webSearchToolName : "web_search"),
								result: mapWebSearchOutput(value.item.action)
							});
						} else if (value.item.type === "computer_call") {
							ongoingToolCalls[value.output_index] = void 0;
							if (value.item.call_id == null) {
								controller.enqueue({
									type: "tool-input-end",
									id: value.item.id
								});
								controller.enqueue({
									type: "tool-call",
									toolCallId: value.item.id,
									toolName: toolNameMapping.toCustomToolName("computer_use"),
									input: "",
									providerExecuted: true
								});
								controller.enqueue({
									type: "tool-result",
									toolCallId: value.item.id,
									toolName: toolNameMapping.toCustomToolName("computer_use"),
									result: {
										type: "computer_use_tool_result",
										status: value.item.status
									}
								});
								return;
							}
							hasFunctionCall = true;
							const toolName = toolNameMapping.toCustomToolName("computer");
							const input = JSON.stringify(mapComputerCallInput(value.item));
							controller.enqueue({
								type: "tool-input-delta",
								id: value.item.call_id,
								delta: input
							});
							controller.enqueue({
								type: "tool-input-end",
								id: value.item.call_id
							});
							controller.enqueue({
								type: "tool-call",
								toolCallId: value.item.call_id,
								toolName,
								input,
								providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
							});
						} else if (value.item.type === "file_search_call") {
							ongoingToolCalls[value.output_index] = void 0;
							controller.enqueue({
								type: "tool-result",
								toolCallId: value.item.id,
								toolName: toolNameMapping.toCustomToolName("file_search"),
								result: {
									queries: value.item.queries,
									results: (_h = (_g = value.item.results) == null ? void 0 : _g.map((result2) => ({
										attributes: result2.attributes,
										fileId: result2.file_id,
										filename: result2.filename,
										score: result2.score,
										text: result2.text
									}))) != null ? _h : null
								}
							});
						} else if (value.item.type === "code_interpreter_call") {
							ongoingToolCalls[value.output_index] = void 0;
							controller.enqueue({
								type: "tool-result",
								toolCallId: value.item.id,
								toolName: toolNameMapping.toCustomToolName("code_interpreter"),
								result: { outputs: value.item.outputs }
							});
						} else if (value.item.type === "image_generation_call") controller.enqueue({
							type: "tool-result",
							toolCallId: value.item.id,
							toolName: toolNameMapping.toCustomToolName("image_generation"),
							result: { result: value.item.result }
						});
						else if (value.item.type === "tool_search_call") {
							const toolCall = ongoingToolCalls[value.output_index];
							const isHosted = value.item.execution === "server";
							if (toolCall != null) {
								const toolCallId = isHosted ? toolCall.toolCallId : (_i = value.item.call_id) != null ? _i : value.item.id;
								if (isHosted) hostedToolSearchCallIds.push(toolCallId);
								else controller.enqueue({
									type: "tool-input-start",
									id: toolCallId,
									toolName: toolCall.toolName
								});
								controller.enqueue({
									type: "tool-input-end",
									id: toolCallId
								});
								controller.enqueue({
									type: "tool-call",
									toolCallId,
									toolName: toolCall.toolName,
									input: JSON.stringify({
										arguments: value.item.arguments,
										call_id: isHosted ? null : toolCallId
									}),
									...isHosted ? { providerExecuted: true } : {},
									providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
								});
							}
							ongoingToolCalls[value.output_index] = void 0;
						} else if (value.item.type === "tool_search_output") {
							const toolCallId = (_k = (_j = value.item.call_id) != null ? _j : hostedToolSearchCallIds.shift()) != null ? _k : value.item.id;
							controller.enqueue({
								type: "tool-result",
								toolCallId,
								toolName: toolNameMapping.toCustomToolName("tool_search"),
								result: { tools: value.item.tools },
								providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
							});
						} else if (value.item.type === "mcp_call") {
							ongoingToolCalls[value.output_index] = void 0;
							const approvalRequestId = (_l = value.item.approval_request_id) != null ? _l : void 0;
							const aliasedToolCallId = approvalRequestId != null ? (_n = (_m = approvalRequestIdToDummyToolCallIdFromStream.get(approvalRequestId)) != null ? _m : approvalRequestIdToDummyToolCallIdFromPrompt[approvalRequestId]) != null ? _n : value.item.id : value.item.id;
							const toolName = `mcp.${value.item.name}`;
							controller.enqueue({
								type: "tool-call",
								toolCallId: aliasedToolCallId,
								toolName,
								input: value.item.arguments,
								providerExecuted: true,
								dynamic: true
							});
							controller.enqueue({
								type: "tool-result",
								toolCallId: aliasedToolCallId,
								toolName,
								result: {
									type: "call",
									serverLabel: value.item.server_label,
									name: value.item.name,
									arguments: value.item.arguments,
									...value.item.output != null ? { output: value.item.output } : {},
									...value.item.error != null ? { error: value.item.error } : {}
								},
								providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
							});
						} else if (value.item.type === "mcp_list_tools") ongoingToolCalls[value.output_index] = void 0;
						else if (value.item.type === "apply_patch_call") {
							const toolCall = ongoingToolCalls[value.output_index];
							if ((toolCall == null ? void 0 : toolCall.applyPatch) && !toolCall.applyPatch.endEmitted && value.item.operation.type !== "delete_file") {
								if (!toolCall.applyPatch.hasDiff) controller.enqueue({
									type: "tool-input-delta",
									id: toolCall.toolCallId,
									delta: escapeJSONDelta(value.item.operation.diff)
								});
								controller.enqueue({
									type: "tool-input-delta",
									id: toolCall.toolCallId,
									delta: "\"}}"
								});
								controller.enqueue({
									type: "tool-input-end",
									id: toolCall.toolCallId
								});
								toolCall.applyPatch.endEmitted = true;
							}
							if (toolCall && value.item.status === "completed") {
								hasFunctionCall = true;
								controller.enqueue({
									type: "tool-call",
									toolCallId: toolCall.toolCallId,
									toolName: toolNameMapping.toCustomToolName("apply_patch"),
									input: JSON.stringify({
										callId: value.item.call_id,
										operation: value.item.operation
									}),
									providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
								});
							}
							ongoingToolCalls[value.output_index] = void 0;
						} else if (value.item.type === "mcp_approval_request") {
							ongoingToolCalls[value.output_index] = void 0;
							const dummyToolCallId = (_q = (_p = (_o = self.config).generateId) == null ? void 0 : _p.call(_o)) != null ? _q : generateId();
							const approvalRequestId = (_r = value.item.approval_request_id) != null ? _r : value.item.id;
							approvalRequestIdToDummyToolCallIdFromStream.set(approvalRequestId, dummyToolCallId);
							const toolName = `mcp.${value.item.name}`;
							controller.enqueue({
								type: "tool-call",
								toolCallId: dummyToolCallId,
								toolName,
								input: value.item.arguments,
								providerExecuted: true,
								dynamic: true
							});
							controller.enqueue({
								type: "tool-approval-request",
								approvalId: approvalRequestId,
								toolCallId: dummyToolCallId
							});
						} else if (value.item.type === "local_shell_call") {
							ongoingToolCalls[value.output_index] = void 0;
							controller.enqueue({
								type: "tool-call",
								toolCallId: value.item.call_id,
								toolName: toolNameMapping.toCustomToolName("local_shell"),
								input: JSON.stringify({ action: {
									type: "exec",
									command: value.item.action.command,
									timeoutMs: value.item.action.timeout_ms,
									user: value.item.action.user,
									workingDirectory: value.item.action.working_directory,
									env: value.item.action.env
								} }),
								providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
							});
						} else if (value.item.type === "shell_call") {
							ongoingToolCalls[value.output_index] = void 0;
							controller.enqueue({
								type: "tool-call",
								toolCallId: value.item.call_id,
								toolName: toolNameMapping.toCustomToolName("shell"),
								input: JSON.stringify({ action: { commands: value.item.action.commands } }),
								...isShellProviderExecuted && { providerExecuted: true },
								providerMetadata: { [providerOptionsName]: { itemId: value.item.id } }
							});
						} else if (value.item.type === "shell_call_output") controller.enqueue({
							type: "tool-result",
							toolCallId: value.item.call_id,
							toolName: toolNameMapping.toCustomToolName("shell"),
							result: { output: value.item.output.map((item) => ({
								stdout: item.stdout,
								stderr: item.stderr,
								outcome: item.outcome.type === "exit" ? {
									type: "exit",
									exitCode: item.outcome.exit_code
								} : { type: "timeout" }
							})) }
						});
						else if (value.item.type === "reasoning") {
							const itemId = resolveOutputItemId({
								itemId: value.item.id,
								outputIndex: value.output_index
							});
							const activeReasoningPart = activeReasoning[itemId];
							if (activeReasoningPart != null) {
								const summaryPartIndices = Object.entries(activeReasoningPart.summaryParts).filter(([_, status]) => status === "active" || status === "can-conclude").map(([summaryIndex]) => summaryIndex);
								for (const summaryIndex of summaryPartIndices) controller.enqueue({
									type: "reasoning-end",
									id: `${itemId}:${summaryIndex}`,
									providerMetadata: { [providerOptionsName]: {
										itemId,
										reasoningEncryptedContent: (_s = value.item.encrypted_content) != null ? _s : null
									} }
								});
								delete activeReasoning[itemId];
							}
							activeOutputItemIds[value.output_index] = void 0;
						} else if (value.item.type === "compaction") controller.enqueue({
							type: "custom",
							kind: "openai.compaction",
							providerMetadata: { [providerOptionsName]: {
								type: "compaction",
								itemId: value.item.id,
								encryptedContent: value.item.encrypted_content
							} }
						});
					} else if (isResponseFunctionCallArgumentsDeltaChunk(value)) {
						const toolCall = ongoingToolCalls[value.output_index];
						if (toolCall != null) if (toolCall.suppressInputStreaming) (_t = toolCall.bufferedInputDeltas) == null || _t.push(value.delta);
						else controller.enqueue({
							type: "tool-input-delta",
							id: toolCall.toolCallId,
							delta: value.delta
						});
					} else if (isResponseCustomToolCallInputDeltaChunk(value)) {
						const toolCall = ongoingToolCalls[value.output_index];
						if (toolCall != null) controller.enqueue({
							type: "tool-input-delta",
							id: toolCall.toolCallId,
							delta: value.delta
						});
					} else if (isResponseApplyPatchCallOperationDiffDeltaChunk(value)) {
						const toolCall = ongoingToolCalls[value.output_index];
						if (toolCall == null ? void 0 : toolCall.applyPatch) {
							controller.enqueue({
								type: "tool-input-delta",
								id: toolCall.toolCallId,
								delta: escapeJSONDelta(value.delta)
							});
							toolCall.applyPatch.hasDiff = true;
						}
					} else if (isResponseApplyPatchCallOperationDiffDoneChunk(value)) {
						const toolCall = ongoingToolCalls[value.output_index];
						if ((toolCall == null ? void 0 : toolCall.applyPatch) && !toolCall.applyPatch.endEmitted) {
							if (!toolCall.applyPatch.hasDiff) {
								controller.enqueue({
									type: "tool-input-delta",
									id: toolCall.toolCallId,
									delta: escapeJSONDelta(value.diff)
								});
								toolCall.applyPatch.hasDiff = true;
							}
							controller.enqueue({
								type: "tool-input-delta",
								id: toolCall.toolCallId,
								delta: "\"}}"
							});
							controller.enqueue({
								type: "tool-input-end",
								id: toolCall.toolCallId
							});
							toolCall.applyPatch.endEmitted = true;
						}
					} else if (isResponseImageGenerationCallPartialImageChunk(value)) controller.enqueue({
						type: "tool-result",
						toolCallId: value.item_id,
						toolName: toolNameMapping.toCustomToolName("image_generation"),
						result: { result: value.partial_image_b64 },
						preliminary: true
					});
					else if (isResponseCodeInterpreterCallCodeDeltaChunk(value)) {
						const toolCall = ongoingToolCalls[value.output_index];
						if (toolCall != null) controller.enqueue({
							type: "tool-input-delta",
							id: toolCall.toolCallId,
							delta: escapeJSONDelta(value.delta)
						});
					} else if (isResponseCodeInterpreterCallCodeDoneChunk(value)) {
						const toolCall = ongoingToolCalls[value.output_index];
						if (toolCall != null) {
							controller.enqueue({
								type: "tool-input-delta",
								id: toolCall.toolCallId,
								delta: "\"}"
							});
							controller.enqueue({
								type: "tool-input-end",
								id: toolCall.toolCallId
							});
							controller.enqueue({
								type: "tool-call",
								toolCallId: toolCall.toolCallId,
								toolName: toolNameMapping.toCustomToolName("code_interpreter"),
								input: JSON.stringify({
									code: value.code,
									containerId: toolCall.codeInterpreter.containerId
								}),
								providerExecuted: true
							});
						}
					} else if (isResponseCreatedChunk(value)) {
						responseId = value.response.id;
						controller.enqueue({
							type: "response-metadata",
							id: value.response.id,
							timestamp: /* @__PURE__ */ new Date(value.response.created_at * 1e3),
							modelId: value.response.model
						});
					} else if (isTextDeltaChunk(value)) {
						const itemId = resolveOutputItemId({
							itemId: value.item_id,
							outputIndex: value.output_index
						});
						controller.enqueue({
							type: "text-delta",
							id: itemId,
							delta: value.delta
						});
						if (((_v = (_u = options.providerOptions) == null ? void 0 : _u[providerOptionsName]) == null ? void 0 : _v.logprobs) && value.logprobs) logprobs.push(value.logprobs);
					} else if (value.type === "response.reasoning_summary_part.added") {
						const itemId = resolveOutputItemId({
							itemId: value.item_id,
							outputIndex: value.output_index
						});
						if (value.summary_index > 0) {
							const activeReasoningPart = activeReasoning[itemId];
							if (activeReasoningPart != null) {
								activeReasoningPart.summaryParts[value.summary_index] = "active";
								for (const summaryIndex of Object.keys(activeReasoningPart.summaryParts)) if (activeReasoningPart.summaryParts[summaryIndex] === "can-conclude") {
									controller.enqueue({
										type: "reasoning-end",
										id: `${itemId}:${summaryIndex}`,
										providerMetadata: { [providerOptionsName]: { itemId } }
									});
									activeReasoningPart.summaryParts[summaryIndex] = "concluded";
								}
								controller.enqueue({
									type: "reasoning-start",
									id: `${itemId}:${value.summary_index}`,
									providerMetadata: { [providerOptionsName]: {
										itemId,
										reasoningEncryptedContent: (_w = activeReasoningPart.encryptedContent) != null ? _w : null
									} }
								});
							}
						}
					} else if (value.type === "response.reasoning_summary_text.delta") {
						const itemId = resolveOutputItemId({
							itemId: value.item_id,
							outputIndex: value.output_index
						});
						controller.enqueue({
							type: "reasoning-delta",
							id: `${itemId}:${value.summary_index}`,
							delta: value.delta,
							providerMetadata: { [providerOptionsName]: { itemId } }
						});
					} else if (value.type === "response.reasoning_summary_part.done") {
						const itemId = resolveOutputItemId({
							itemId: value.item_id,
							outputIndex: value.output_index
						});
						const activeReasoningPart = activeReasoning[itemId];
						if (activeReasoningPart != null) if (store) {
							controller.enqueue({
								type: "reasoning-end",
								id: `${itemId}:${value.summary_index}`,
								providerMetadata: { [providerOptionsName]: { itemId } }
							});
							activeReasoningPart.summaryParts[value.summary_index] = "concluded";
						} else activeReasoningPart.summaryParts[value.summary_index] = "can-conclude";
					} else if (isResponseFinishedChunk(value)) {
						if (!encounteredStreamError) finishReason = {
							unified: mapOpenAIResponseFinishReason({
								finishReason: (_x = value.response.incomplete_details) == null ? void 0 : _x.reason,
								hasFunctionCall
							}),
							raw: (_z = (_y = value.response.incomplete_details) == null ? void 0 : _y.reason) != null ? _z : void 0
						};
						usage = (_A = value.response.usage) != null ? _A : void 0;
						if (typeof value.response.service_tier === "string") serviceTier = value.response.service_tier;
						if (((_B = value.response.reasoning) == null ? void 0 : _B.context) != null) reasoningContext = value.response.reasoning.context;
					} else if (isResponseFailedChunk(value)) {
						const incompleteReason = (_C = value.response.incomplete_details) == null ? void 0 : _C.reason;
						finishReason = {
							unified: incompleteReason ? mapOpenAIResponseFinishReason({
								finishReason: incompleteReason,
								hasFunctionCall
							}) : "error",
							raw: incompleteReason != null ? incompleteReason : "error"
						};
						usage = (_D = value.response.usage) != null ? _D : void 0;
						if (((_E = value.response.reasoning) == null ? void 0 : _E.context) != null) reasoningContext = value.response.reasoning.context;
						if (!encounteredStreamError && value.response.error != null) {
							encounteredStreamError = true;
							const error = {
								type: "response.failed",
								sequence_number: value.sequence_number,
								response: {
									error: value.response.error,
									incomplete_details: value.response.incomplete_details,
									service_tier: value.response.service_tier
								}
							};
							controller.enqueue({
								type: "error",
								error: (_F = createOpenAIProviderStreamError(error)) != null ? _F : error
							});
						}
					} else if (isResponseAnnotationAddedChunk(value)) {
						ongoingAnnotations.push(value.annotation);
						if (value.annotation.type === "url_citation") controller.enqueue({
							type: "source",
							sourceType: "url",
							id: (_I = (_H = (_G = self.config).generateId) == null ? void 0 : _H.call(_G)) != null ? _I : generateId(),
							url: value.annotation.url,
							title: value.annotation.title
						});
						else if (value.annotation.type === "file_citation") controller.enqueue({
							type: "source",
							sourceType: "document",
							id: (_L = (_K = (_J = self.config).generateId) == null ? void 0 : _K.call(_J)) != null ? _L : generateId(),
							mediaType: "text/plain",
							title: value.annotation.filename,
							filename: value.annotation.filename,
							providerMetadata: { [providerOptionsName]: {
								type: value.annotation.type,
								fileId: value.annotation.file_id,
								index: value.annotation.index
							} }
						});
						else if (value.annotation.type === "container_file_citation") controller.enqueue({
							type: "source",
							sourceType: "document",
							id: (_O = (_N = (_M = self.config).generateId) == null ? void 0 : _N.call(_M)) != null ? _O : generateId(),
							mediaType: "text/plain",
							title: value.annotation.filename,
							filename: value.annotation.filename,
							providerMetadata: { [providerOptionsName]: {
								type: value.annotation.type,
								fileId: value.annotation.file_id,
								containerId: value.annotation.container_id
							} }
						});
						else if (value.annotation.type === "file_path") controller.enqueue({
							type: "source",
							sourceType: "document",
							id: (_R = (_Q = (_P = self.config).generateId) == null ? void 0 : _Q.call(_P)) != null ? _R : generateId(),
							mediaType: "application/octet-stream",
							title: value.annotation.file_id,
							filename: value.annotation.file_id,
							providerMetadata: { [providerOptionsName]: {
								type: value.annotation.type,
								fileId: value.annotation.file_id,
								index: value.annotation.index
							} }
						});
					} else if (isErrorChunk(value)) {
						encounteredStreamError = true;
						finishReason = {
							unified: "error",
							raw: "error"
						};
						controller.enqueue({
							type: "error",
							error: (_S = createOpenAIProviderStreamError(value)) != null ? _S : value
						});
					}
				},
				flush(controller) {
					var _a3;
					for (const toolCall of Object.values(ongoingToolCalls)) {
						if (!(toolCall == null ? void 0 : toolCall.suppressInputStreaming)) continue;
						controller.enqueue({
							type: "tool-input-start",
							id: toolCall.toolCallId,
							toolName: toolCall.toolName
						});
						for (const delta of (_a3 = toolCall.bufferedInputDeltas) != null ? _a3 : []) controller.enqueue({
							type: "tool-input-delta",
							id: toolCall.toolCallId,
							delta
						});
					}
					const providerMetadata = { [providerOptionsName]: {
						responseId,
						...logprobs.length > 0 ? { logprobs } : {},
						...serviceTier !== void 0 ? { serviceTier } : {},
						...reasoningContext !== void 0 ? { reasoningContext } : {}
					} };
					controller.enqueue({
						type: "finish",
						finishReason,
						usage: convertOpenAIResponsesUsage(usage),
						providerMetadata
					});
				}
			})),
			request: { body },
			response: { headers: responseHeaders }
		};
	}
};
function isTextDeltaChunk(chunk) {
	return chunk.type === "response.output_text.delta";
}
function isOpenAIChatCompletionChunk(value) {
	const chunk = asRecord2(value);
	return chunk != null && Array.isArray(chunk.choices) && typeof chunk.type !== "string";
}
function createOpenAIResponsesChatCompletionsMismatchError({ value, cause, url, requestBodyValues, responseHeaders }) {
	return new APICallError({
		message: "Received a Chat Completions stream while using the OpenAI Responses API. The default OpenAI provider model uses the Responses API. If your custom baseURL targets a Chat Completions-compatible endpoint, use openai.chat('model-id') or createOpenAI(...).chat('model-id') instead. You can also use @ai-sdk/openai-compatible for OpenAI-compatible providers.",
		url,
		requestBodyValues,
		responseHeaders,
		responseBody: JSON.stringify(value),
		cause,
		data: value,
		isRetryable: false
	});
}
function asRecord2(value) {
	return typeof value === "object" && value != null ? value : void 0;
}
function isResponseOutputItemDoneChunk(chunk) {
	return chunk.type === "response.output_item.done";
}
function isResponseFinishedChunk(chunk) {
	return chunk.type === "response.completed" || chunk.type === "response.incomplete";
}
function isResponseFailedChunk(chunk) {
	return chunk.type === "response.failed";
}
function isResponseCreatedChunk(chunk) {
	return chunk.type === "response.created";
}
function isResponseFunctionCallArgumentsDeltaChunk(chunk) {
	return chunk.type === "response.function_call_arguments.delta";
}
function isResponseCustomToolCallInputDeltaChunk(chunk) {
	return chunk.type === "response.custom_tool_call_input.delta";
}
function isResponseImageGenerationCallPartialImageChunk(chunk) {
	return chunk.type === "response.image_generation_call.partial_image";
}
function isResponseCodeInterpreterCallCodeDeltaChunk(chunk) {
	return chunk.type === "response.code_interpreter_call_code.delta";
}
function isResponseCodeInterpreterCallCodeDoneChunk(chunk) {
	return chunk.type === "response.code_interpreter_call_code.done";
}
function isResponseApplyPatchCallOperationDiffDeltaChunk(chunk) {
	return chunk.type === "response.apply_patch_call_operation_diff.delta";
}
function isResponseApplyPatchCallOperationDiffDoneChunk(chunk) {
	return chunk.type === "response.apply_patch_call_operation_diff.done";
}
function isResponseOutputItemAddedChunk(chunk) {
	return chunk.type === "response.output_item.added";
}
function isResponseAnnotationAddedChunk(chunk) {
	return chunk.type === "response.output_text.annotation.added";
}
function isErrorChunk(chunk) {
	return chunk.type === "error";
}
function isResponseInProgressChunk(chunk) {
	return chunk.type === "response.in_progress";
}
function isResponseOutputChunk(chunk) {
	return !(chunk.type === "response.created" || chunk.type === "response.in_progress" || chunk.type === "response.failed" || chunk.type === "error" || chunk.type === "unknown_chunk");
}
function mapWebSearchOutput(action) {
	var _a2;
	if (action == null) return {};
	switch (action.type) {
		case "search": return {
			action: {
				type: "search",
				query: (_a2 = action.query) != null ? _a2 : void 0,
				...action.queries != null && { queries: action.queries }
			},
			...action.sources != null && { sources: action.sources }
		};
		case "open_page": return { action: {
			type: "openPage",
			url: action.url
		} };
		case "find_in_page": return { action: {
			type: "findInPage",
			url: action.url,
			pattern: action.pattern
		} };
	}
}
function escapeJSONDelta(delta) {
	return JSON.stringify(delta).slice(1, -1);
}
var openaiBatchEndpoint = "/v1/responses";
var openaiBatchInputFileDefaultExpiresAfterSeconds = 172800;
var openaiBatchProviderOptionsSchema = lazySchema(() => zodSchema(object({ 
/**
* TTL in seconds for the uploaded batch input file, measured from
* upload time. OpenAI accepts integers between 3600 (1 hour) and
* 2592000 (30 days) inclusive. Defaults to 48 hours.
*/
inputFileExpiresAfter: number$1().int().min(3600).max(2592e3).optional() })));
function assertTextBatchRequests(requests) {
	for (const request of requests) {
		const requestType = request.type;
		if (requestType !== "text") throw new UnsupportedFunctionalityError({
			functionality: `batch request type: ${requestType}`,
			message: `The OpenAI Batch API does not support batch requests with type "${requestType}".`
		});
	}
}
var openaiBatchResponseZodSchema = () => object({
	id: string(),
	status: string(),
	output_file_id: string().nullish(),
	error_file_id: string().nullish(),
	created_at: number$1().nullish(),
	expires_at: number$1().nullish(),
	request_counts: object({
		total: number$1().nullish(),
		completed: number$1().nullish(),
		failed: number$1().nullish()
	}).nullish(),
	errors: object({ data: array(object({
		code: string().nullish(),
		message: string().nullish()
	})).nullish() }).nullish()
});
var openaiBatchResponseSchema = lazySchema(() => zodSchema(openaiBatchResponseZodSchema()));
var openaiBatchResultLineSchema = lazySchema(() => zodSchema(object({
	custom_id: string(),
	response: object({
		status_code: number$1(),
		request_id: string().nullish(),
		body: unknown()
	}).nullish(),
	error: object({
		code: string(),
		message: string()
	}).nullish()
})));
var openaiBatchListResponseSchema = lazySchema(() => zodSchema(object({
	data: array(openaiBatchResponseZodSchema()),
	has_more: boolean(),
	last_id: string().nullish()
})));
var OpenAIBatch = class {
	constructor(options) {
		this.options = options;
		this.specificationVersion = "v4";
		this.supportedUrls = openaiResponsesSupportedUrls;
		this.provider = options.provider;
	}
	async doStartBatch(options) {
		var _a2, _b, _c, _d, _e, _f;
		assertTextBatchRequests(options.requests);
		validateSingleModel(options.requests);
		const fileParts = [];
		const warnings = options.webhookUrl == null ? [] : [{ warning: {
			type: "unsupported",
			feature: "webhookUrl",
			details: "The OpenAI Batch API does not support per-batch webhook URLs."
		} }];
		const batchOptions = await this.parseBatchProviderOptions(options.providerOptions);
		const inputFileExpiresAfterSeconds = (_a2 = batchOptions == null ? void 0 : batchOptions.inputFileExpiresAfter) != null ? _a2 : openaiBatchInputFileDefaultExpiresAfterSeconds;
		for (const request of options.requests) {
			const preparedRequest = await this.prepareRequest(request);
			fileParts.push(JSON.stringify({
				custom_id: request.id,
				method: "POST",
				url: openaiBatchEndpoint,
				body: preparedRequest.body
			}), "\n");
			for (const warning of preparedRequest.warnings) warnings.push({
				requestId: request.id,
				warning
			});
			for (const tool of (_b = request.options.tools) != null ? _b : []) if (tool.type === "provider" && !openAIBatchConvertibleProviderToolIds.has(tool.id)) warnings.push({
				requestId: request.id,
				warning: {
					type: "unsupported",
					feature: `batch result conversion for tool "${tool.name}"`,
					details: "OpenAI may return output for this tool that AI SDK text batches cannot currently convert."
				}
			});
		}
		const filename = "batch.jsonl";
		const file = new Blob(fileParts, { type: "application/jsonl" });
		fileParts.length = 0;
		const formData = new FormData();
		formData.append("file", file, filename);
		formData.append("purpose", "batch");
		formData.append("expires_after[anchor]", "created_at");
		formData.append("expires_after[seconds]", String(inputFileExpiresAfterSeconds));
		const { value: uploadedFile } = await postToApi({
			url: this.getUrl("/files"),
			headers: combineHeaders((_d = (_c = this.options.config).headers) == null ? void 0 : _d.call(_c), options.headers),
			body: {
				content: formData,
				values: {
					purpose: "batch",
					"expires_after[anchor]": "created_at",
					"expires_after[seconds]": String(inputFileExpiresAfterSeconds),
					file: {
						name: filename,
						type: file.type,
						size: file.size
					}
				}
			},
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiFilesResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.options.config.fetch
		});
		const { value: batch } = await postJsonToApi({
			url: this.getUrl("/batches"),
			headers: combineHeaders((_f = (_e = this.options.config).headers) == null ? void 0 : _f.call(_e), options.headers),
			body: {
				input_file_id: uploadedFile.id,
				endpoint: openaiBatchEndpoint,
				completion_window: "24h"
			},
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiBatchResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.options.config.fetch
		});
		const inputFileExpiresAt = convertUnixTimestamp(uploadedFile.expires_at);
		return {
			batchId: batch.id,
			...convertOpenAIBatchStatus(batch),
			providerMetadata: { openai: {
				inputFileId: uploadedFile.id,
				...inputFileExpiresAt != null ? { inputFileExpiresAt } : {}
			} },
			warnings
		};
	}
	async parseBatchProviderOptions(providerOptions) {
		const providerOptionsName = this.options.config.provider.includes("azure") ? "azure" : "openai";
		let batchOptions = await parseProviderOptions({
			provider: providerOptionsName,
			providerOptions,
			schema: openaiBatchProviderOptionsSchema
		});
		if (batchOptions == null && providerOptionsName !== "openai") batchOptions = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openaiBatchProviderOptionsSchema
		});
		return batchOptions;
	}
	async doGetBatchStatus(options) {
		return convertOpenAIBatchStatus(await this.retrieveBatch(options));
	}
	async doCancelBatch(options) {
		var _a2, _b;
		await postJsonToApi({
			url: this.getUrl(`/batches/${encodeURIComponent(options.batchId)}/cancel`),
			headers: combineHeaders((_b = (_a2 = this.options.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			body: {},
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiBatchResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.options.config.fetch
		});
		return {};
	}
	async doListBatches(options) {
		var _a2, _b;
		const url = new URL(this.getUrl("/batches"));
		if (options.limit != null) url.searchParams.set("limit", String(options.limit));
		if (options.cursor != null) url.searchParams.set("after", options.cursor);
		const { value: page } = await getFromApi({
			url: url.toString(),
			headers: combineHeaders((_b = (_a2 = this.options.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiBatchListResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.options.config.fetch,
			validateUrl: false
		});
		return {
			batches: page.data.map((batch) => ({
				batchId: batch.id,
				...convertOpenAIBatchStatus(batch)
			})),
			...page.has_more && page.last_id != null ? { nextCursor: page.last_id } : {}
		};
	}
	async doGetBatchResults(options) {
		const batch = await this.retrieveBatch(options);
		const batchStatus = convertOpenAIBatchStatus(batch);
		if (batchStatus.status === "pending") throw new InvalidArgumentError({
			argument: "batchId",
			message: `OpenAI batch "${options.batchId}" is not complete.`
		});
		const fileIds = [batch.output_file_id, batch.error_file_id].filter((fileId) => fileId != null);
		if (batchStatus.status === "completed" && fileIds.length === 0) throw new InvalidResponseDataError({
			data: batch,
			message: `OpenAI batch "${options.batchId}" completed without batch output.`
		});
		return convertAsyncIteratorToReadableStream(this.iterateBatchResults({
			fileIds,
			options
		}));
	}
	async retrieveBatch(options) {
		var _a2, _b;
		const { value: batch } = await getFromApi({
			url: this.getUrl(`/batches/${encodeURIComponent(options.batchId)}`),
			headers: combineHeaders((_b = (_a2 = this.options.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiBatchResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.options.config.fetch,
			validateUrl: false
		});
		return batch;
	}
	async *iterateBatchResults({ fileIds, options }) {
		var _a2, _b;
		for (const fileId of fileIds) {
			const { value: lines } = await getFromApi({
				url: this.getUrl(`/files/${encodeURIComponent(fileId)}/content`),
				headers: combineHeaders((_b = (_a2 = this.options.config).headers) == null ? void 0 : _b.call(_a2), options.headers),
				failedResponseHandler: openaiFailedResponseHandler,
				successfulResponseHandler: createJsonLinesResponseHandler(openaiBatchResultLineSchema),
				abortSignal: options.abortSignal,
				fetch: this.options.config.fetch,
				validateUrl: false
			});
			for await (const line of lines) yield await this.convertResultLine(line);
		}
	}
	async convertResultLine(line) {
		if (line.error != null) {
			const error = {
				message: line.error.message,
				code: line.error.code
			};
			if (line.error.code === "batch_cancelled") return {
				type: "text",
				id: line.custom_id,
				status: "cancelled",
				error
			};
			if (line.error.code === "batch_expired") return {
				type: "text",
				id: line.custom_id,
				status: "expired",
				error
			};
			return {
				type: "text",
				id: line.custom_id,
				status: "failed",
				error
			};
		}
		if (line.response == null) return {
			type: "text",
			id: line.custom_id,
			status: "failed",
			error: {
				message: "OpenAI returned a batch result without a response or error.",
				code: "invalid_batch_result"
			}
		};
		if (line.response.status_code < 200 || line.response.status_code >= 300) return {
			type: "text",
			id: line.custom_id,
			status: "failed",
			error: await convertOpenAIErrorResponse({
				body: line.response.body,
				statusCode: line.response.status_code
			})
		};
		const conversion = await convertOpenAIBatchResult(line.response.body);
		if (!conversion.success) return {
			type: "text",
			id: line.custom_id,
			status: "failed",
			error: conversion.error
		};
		return {
			type: "text",
			id: line.custom_id,
			status: "succeeded",
			result: conversion.result
		};
	}
	async prepareRequest(request) {
		const { args: body, warnings } = await OpenAIResponsesLanguageModel.prepareRequest({
			modelId: request.modelId,
			config: this.options.config,
			options: request.options
		});
		return {
			body,
			warnings
		};
	}
	getUrl(path) {
		return this.options.config.url({
			path,
			modelId: ""
		});
	}
};
function validateSingleModel(requests) {
	var _a2;
	const modelId = (_a2 = requests[0]) == null ? void 0 : _a2.modelId;
	for (const request of requests) if (request.modelId !== modelId) throw new InvalidArgumentError({
		argument: "requests",
		message: `The OpenAI Batch API requires all requests in a batch to use the same model. Found "${modelId}" and "${request.modelId}".`
	});
}
var openAIBatchConvertibleProviderToolIds = /* @__PURE__ */ new Set([
	"openai.code_interpreter",
	"openai.custom",
	"openai.file_search",
	"openai.web_search",
	"openai.web_search_preview"
]);
function convertOpenAIBatchStatus(batch) {
	var _a2, _b, _c;
	const status = mapOpenAIBatchStatus(batch.status);
	const firstError = (_b = (_a2 = batch.errors) == null ? void 0 : _a2.data) == null ? void 0 : _b[0];
	const requestCounts = convertOpenAIRequestCounts(batch.request_counts);
	const createdAt = convertUnixTimestamp(batch.created_at);
	const expiresAt = convertUnixTimestamp(batch.expires_at);
	return {
		status,
		rawStatus: batch.status,
		...requestCounts != null ? { requestCounts } : {},
		...firstError != null ? { error: {
			message: (_c = firstError.message) != null ? _c : "OpenAI batch failed.",
			...firstError.code != null ? { code: firstError.code } : {}
		} } : {},
		...createdAt != null ? { createdAt } : {},
		...expiresAt != null ? { expiresAt } : {}
	};
}
function mapOpenAIBatchStatus(rawStatus) {
	switch (rawStatus) {
		case "completed": return "completed";
		case "failed":
		case "expired":
		case "cancelled": return "failed";
		default: return "pending";
	}
}
function convertOpenAIRequestCounts(counts) {
	const total = counts == null ? void 0 : counts.total;
	const completed = counts == null ? void 0 : counts.completed;
	const failed = counts == null ? void 0 : counts.failed;
	return normalizeBatchRequestCounts({
		total,
		pending: total != null && completed != null && failed != null ? total - completed - failed : void 0,
		completed,
		failed
	});
}
function convertUnixTimestamp(value) {
	if (value == null || !Number.isFinite(value)) return;
	const date = /* @__PURE__ */ new Date(value * 1e3);
	return Number.isNaN(date.getTime()) ? void 0 : date.toISOString();
}
async function convertOpenAIErrorResponse({ body, statusCode }) {
	var _a2;
	const result = await safeValidateTypes({
		value: body,
		schema: openaiErrorDataSchema
	});
	if (!result.success) return {
		message: `OpenAI batch request failed with status code ${statusCode}.`,
		statusCode
	};
	return {
		message: result.value.error.message,
		type: (_a2 = result.value.error.type) != null ? _a2 : void 0,
		code: result.value.error.code != null ? String(result.value.error.code) : void 0,
		statusCode
	};
}
async function convertOpenAIBatchResult(body) {
	var _a2, _b, _c, _d, _e, _f, _g, _h;
	const validation = await safeValidateTypes({
		value: body,
		schema: openaiResponsesResponseSchema
	});
	if (!validation.success) return {
		success: false,
		error: {
			message: "OpenAI returned an invalid Responses batch result.",
			code: "invalid_response"
		}
	};
	const response = validation.value;
	if (response.error != null) return {
		success: false,
		error: {
			message: response.error.message,
			type: response.error.type,
			code: response.error.code
		}
	};
	if (response.output == null) {
		const detail = (_a2 = response.incomplete_details) == null ? void 0 : _a2.reason;
		return {
			success: false,
			error: {
				message: detail != null ? `OpenAI Responses returned no output (${detail}).` : "OpenAI Responses returned no output.",
				code: "invalid_response"
			}
		};
	}
	const content = [];
	const logprobs = [];
	let hasFunctionCall = false;
	for (const part of response.output) switch (part.type) {
		case "reasoning": {
			const summaries = part.summary.length > 0 ? part.summary : [{
				type: "summary_text",
				text: ""
			}];
			for (const summary of summaries) content.push({
				type: "reasoning",
				text: summary.text,
				providerMetadata: { openai: {
					itemId: part.id,
					reasoningEncryptedContent: (_b = part.encrypted_content) != null ? _b : null
				} }
			});
			break;
		}
		case "message":
			for (const contentPart of part.content) {
				content.push({
					type: "text",
					text: contentPart.text
				});
				if (contentPart.logprobs != null) logprobs.push(contentPart.logprobs);
			}
			break;
		case "function_call":
			hasFunctionCall = true;
			content.push({
				type: "tool-call",
				toolCallId: part.call_id,
				toolName: part.name,
				input: part.arguments,
				providerMetadata: { openai: {
					itemId: part.id,
					...part.namespace != null && { namespace: part.namespace },
					...part.caller != null && { caller: part.caller.type === "program" ? {
						type: "program",
						callerId: part.caller.caller_id
					} : part.caller }
				} }
			});
			break;
		case "custom_tool_call":
			hasFunctionCall = true;
			content.push({
				type: "tool-call",
				toolCallId: part.call_id,
				toolName: part.name,
				input: JSON.stringify(part.input),
				providerMetadata: { openai: { itemId: part.id } }
			});
			break;
		case "web_search_call":
			content.push({
				type: "tool-call",
				toolCallId: part.id,
				toolName: "web_search",
				input: "{}",
				providerExecuted: true,
				dynamic: true
			});
			content.push({
				type: "tool-result",
				toolCallId: part.id,
				toolName: "web_search",
				result: mapWebSearchOutput(part.action),
				dynamic: true
			});
			break;
		case "file_search_call":
			content.push({
				type: "tool-call",
				toolCallId: part.id,
				toolName: "file_search",
				input: "{}",
				providerExecuted: true,
				dynamic: true
			});
			content.push({
				type: "tool-result",
				toolCallId: part.id,
				toolName: "file_search",
				result: {
					queries: part.queries,
					results: (_d = (_c = part.results) == null ? void 0 : _c.map((result) => ({
						attributes: result.attributes,
						fileId: result.file_id,
						filename: result.filename,
						score: result.score,
						text: result.text
					}))) != null ? _d : null
				},
				dynamic: true
			});
			break;
		case "code_interpreter_call":
			content.push({
				type: "tool-call",
				toolCallId: part.id,
				toolName: "code_interpreter",
				input: JSON.stringify({
					code: part.code,
					containerId: part.container_id
				}),
				providerExecuted: true,
				dynamic: true
			});
			content.push({
				type: "tool-result",
				toolCallId: part.id,
				toolName: "code_interpreter",
				result: { outputs: part.outputs },
				dynamic: true
			});
			break;
		default: return {
			success: false,
			error: {
				message: `OpenAI returned an unsupported "${part.type}" output item in an AI SDK text batch.`,
				code: "unsupported_content"
			}
		};
	}
	const providerMetadata = { openai: {
		responseId: response.id,
		...logprobs.length > 0 ? { logprobs } : {},
		...typeof response.service_tier === "string" ? { serviceTier: response.service_tier } : {},
		...((_e = response.reasoning) == null ? void 0 : _e.context) != null ? { reasoningContext: response.reasoning.context } : {}
	} };
	return {
		success: true,
		result: {
			content,
			finishReason: {
				unified: mapOpenAIResponseFinishReason({
					finishReason: (_f = response.incomplete_details) == null ? void 0 : _f.reason,
					hasFunctionCall
				}),
				raw: (_h = (_g = response.incomplete_details) == null ? void 0 : _g.reason) != null ? _h : void 0
			},
			usage: convertOpenAIResponsesUsage(response.usage),
			response: {
				id: response.id,
				timestamp: response.created_at != null ? /* @__PURE__ */ new Date(response.created_at * 1e3) : void 0,
				modelId: response.model
			},
			providerMetadata,
			warnings: []
		}
	};
}
function parseOpenAIRealtimeServerEvent(raw) {
	var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
	const event = raw;
	const type = event.type;
	switch (type) {
		case "session.created": return {
			type: "session-created",
			sessionId: (_a2 = event.session) == null ? void 0 : _a2.id,
			raw
		};
		case "session.updated": return {
			type: "session-updated",
			raw
		};
		case "input_audio_buffer.speech_started": return {
			type: "speech-started",
			itemId: event.item_id,
			raw
		};
		case "input_audio_buffer.speech_stopped": return {
			type: "speech-stopped",
			itemId: event.item_id,
			raw
		};
		case "input_audio_buffer.committed": return {
			type: "audio-committed",
			itemId: event.item_id,
			previousItemId: event.previous_item_id,
			raw
		};
		case "conversation.item.added": return {
			type: "conversation-item-added",
			itemId: (_c = (_b = event.item) == null ? void 0 : _b.id) != null ? _c : event.item_id,
			item: event.item,
			raw
		};
		case "conversation.item.input_audio_transcription.completed": return {
			type: "input-transcription-completed",
			itemId: event.item_id,
			transcript: (_d = event.transcript) != null ? _d : "",
			raw
		};
		case "response.created": return {
			type: "response-created",
			responseId: (_f = (_e = event.response) == null ? void 0 : _e.id) != null ? _f : event.response_id,
			raw
		};
		case "response.done": return {
			type: "response-done",
			responseId: (_h = (_g = event.response) == null ? void 0 : _g.id) != null ? _h : event.response_id,
			status: (_j = (_i = event.response) == null ? void 0 : _i.status) != null ? _j : "completed",
			raw
		};
		case "response.output_item.added": return {
			type: "output-item-added",
			responseId: event.response_id,
			itemId: (_l = (_k = event.item) == null ? void 0 : _k.id) != null ? _l : event.item_id,
			raw
		};
		case "response.output_item.done": return {
			type: "output-item-done",
			responseId: event.response_id,
			itemId: (_n = (_m = event.item) == null ? void 0 : _m.id) != null ? _n : event.item_id,
			raw
		};
		case "response.content_part.added": return {
			type: "content-part-added",
			responseId: event.response_id,
			itemId: event.item_id,
			raw
		};
		case "response.content_part.done": return {
			type: "content-part-done",
			responseId: event.response_id,
			itemId: event.item_id,
			raw
		};
		case "response.output_audio.delta": return {
			type: "audio-delta",
			responseId: event.response_id,
			itemId: event.item_id,
			delta: event.delta,
			raw
		};
		case "response.output_audio.done": return {
			type: "audio-done",
			responseId: event.response_id,
			itemId: event.item_id,
			raw
		};
		case "response.output_audio_transcript.delta": return {
			type: "audio-transcript-delta",
			responseId: event.response_id,
			itemId: event.item_id,
			delta: event.delta,
			raw
		};
		case "response.output_audio_transcript.done": return {
			type: "audio-transcript-done",
			responseId: event.response_id,
			itemId: event.item_id,
			transcript: event.transcript,
			raw
		};
		case "response.output_text.delta": return {
			type: "text-delta",
			responseId: event.response_id,
			itemId: event.item_id,
			delta: event.delta,
			raw
		};
		case "response.output_text.done": return {
			type: "text-done",
			responseId: event.response_id,
			itemId: event.item_id,
			text: event.text,
			raw
		};
		case "response.function_call_arguments.delta": return {
			type: "function-call-arguments-delta",
			responseId: event.response_id,
			itemId: event.item_id,
			callId: event.call_id,
			delta: event.delta,
			raw
		};
		case "response.function_call_arguments.done": return {
			type: "function-call-arguments-done",
			responseId: event.response_id,
			itemId: event.item_id,
			callId: event.call_id,
			name: event.name,
			arguments: event.arguments,
			raw
		};
		case "error": return {
			type: "error",
			message: (_q = (_p = (_o = event.error) == null ? void 0 : _o.message) != null ? _p : event.message) != null ? _q : "Unknown error",
			code: (_s = (_r = event.error) == null ? void 0 : _r.code) != null ? _s : event.code,
			raw
		};
		default: return {
			type: "custom",
			rawType: type,
			raw
		};
	}
}
function serializeOpenAIRealtimeClientEvent(event, modelId) {
	switch (event.type) {
		case "session-update": return {
			type: "session.update",
			session: buildOpenAISessionConfig(event.config, modelId)
		};
		case "input-audio-append": return {
			type: "input_audio_buffer.append",
			audio: event.audio
		};
		case "input-audio-commit": return { type: "input_audio_buffer.commit" };
		case "input-audio-clear": return { type: "input_audio_buffer.clear" };
		case "conversation-item-create": {
			const item = event.item;
			switch (item.type) {
				case "text-message": return {
					type: "conversation.item.create",
					item: {
						type: "message",
						role: item.role,
						content: [{
							type: "input_text",
							text: item.text
						}]
					}
				};
				case "audio-message": return {
					type: "conversation.item.create",
					item: {
						type: "message",
						role: item.role,
						content: [{
							type: "input_audio",
							audio: item.audio
						}]
					}
				};
				case "function-call-output": return {
					type: "conversation.item.create",
					item: {
						type: "function_call_output",
						call_id: item.callId,
						output: item.output
					}
				};
			}
			break;
		}
		case "conversation-item-truncate": return {
			type: "conversation.item.truncate",
			item_id: event.itemId,
			content_index: event.contentIndex,
			audio_end_ms: event.audioEndMs
		};
		case "response-create": return {
			type: "response.create",
			...event.options != null ? { response: {
				...event.options.modalities != null ? { output_modalities: event.options.modalities } : {},
				...event.options.instructions != null ? { instructions: event.options.instructions } : {},
				...event.options.metadata != null ? { metadata: event.options.metadata } : {}
			} } : {}
		};
		case "response-cancel": return { type: "response.cancel" };
	}
}
function buildOpenAISessionConfig(config, modelId) {
	var _a2;
	const session = {
		type: "realtime",
		model: modelId
	};
	if (config.instructions != null) session.instructions = config.instructions;
	if (config.outputModalities != null) session.output_modalities = config.outputModalities;
	const audio = {};
	if (config.inputAudioFormat != null || config.inputAudioTranscription != null || config.turnDetection != null) {
		const input = {};
		if (config.inputAudioFormat != null) input.format = {
			type: config.inputAudioFormat.type,
			...config.inputAudioFormat.rate != null ? { rate: config.inputAudioFormat.rate } : {}
		};
		if (config.turnDetection != null) if (config.turnDetection.type === "disabled") input.turn_detection = null;
		else {
			const td = { type: config.turnDetection.type === "server-vad" ? "server_vad" : "semantic_vad" };
			if (config.turnDetection.threshold != null) td.threshold = config.turnDetection.threshold;
			if (config.turnDetection.silenceDurationMs != null) td.silence_duration_ms = config.turnDetection.silenceDurationMs;
			if (config.turnDetection.prefixPaddingMs != null) td.prefix_padding_ms = config.turnDetection.prefixPaddingMs;
			input.turn_detection = td;
		}
		if (config.inputAudioTranscription != null) input.transcription = {
			model: (_a2 = config.inputAudioTranscription.model) != null ? _a2 : "gpt-realtime-whisper",
			...config.inputAudioTranscription.language != null ? { language: config.inputAudioTranscription.language } : {},
			...config.inputAudioTranscription.prompt != null ? { prompt: config.inputAudioTranscription.prompt } : {}
		};
		audio.input = input;
	}
	if (config.outputAudioFormat != null || config.voice != null) {
		const output = {};
		if (config.outputAudioFormat != null) output.format = {
			type: config.outputAudioFormat.type,
			...config.outputAudioFormat.rate != null ? { rate: config.outputAudioFormat.rate } : {}
		};
		if (config.voice != null) output.voice = config.voice;
		audio.output = output;
	}
	if (Object.keys(audio).length > 0) session.audio = audio;
	if (config.tools != null && config.tools.length > 0) {
		session.tools = config.tools.map((tool) => ({
			type: tool.type,
			name: tool.name,
			description: tool.description,
			parameters: tool.parameters
		}));
		session.tool_choice = "auto";
	}
	if (config.providerOptions != null) Object.assign(session, config.providerOptions);
	return session;
}
var OpenAIRealtimeModel = class {
	constructor(modelId, config) {
		this.specificationVersion = "v4";
		this.modelId = modelId;
		this.provider = config.provider;
		this.config = config;
	}
	async doCreateClientSecret(options) {
		var _a2;
		const fetchFn = (_a2 = this.config.fetch) != null ? _a2 : fetch;
		const url = `${this.config.baseURL}/realtime/client_secrets`;
		const session = options.sessionConfig != null ? buildOpenAISessionConfig(options.sessionConfig, this.modelId) : {
			type: "realtime",
			model: this.modelId
		};
		const response = await fetchFn(url, {
			method: "POST",
			headers: {
				...this.config.headers(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				session,
				...options.expiresAfterSeconds != null ? { expires_after: {
					anchor: "created_at",
					seconds: options.expiresAfterSeconds
				} } : {}
			})
		});
		if (!response.ok) {
			const text = await response.text();
			throw new Error(`OpenAI realtime client secret request failed: ${response.status} ${text}`);
		}
		const data = await response.json();
		return {
			token: data.value,
			url: `wss://${new URL(this.config.baseURL).host}/v1/realtime?model=${encodeURIComponent(this.modelId)}`,
			expiresAt: data.expires_at
		};
	}
	getWebSocketConfig(options) {
		return {
			url: options.url,
			protocols: ["realtime", `openai-insecure-api-key.${options.token}`]
		};
	}
	parseServerEvent(raw) {
		return parseOpenAIRealtimeServerEvent(raw);
	}
	serializeClientEvent(event) {
		return serializeOpenAIRealtimeClientEvent(event, this.modelId);
	}
	buildSessionConfig(config) {
		return buildOpenAISessionConfig(config, this.modelId);
	}
};
var openaiSpeechModelOptionsSchema = lazySchema(() => zodSchema(object({
	instructions: string().nullish(),
	speed: number$1().min(.25).max(4).default(1).nullish()
})));
var OpenAISpeechModel = class _OpenAISpeechModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAISpeechModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs({ text, voice = "alloy", outputFormat = "mp3", speed, instructions, language, providerOptions }) {
		const warnings = [];
		const openAIOptions = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openaiSpeechModelOptionsSchema
		});
		const requestBody = {
			model: this.modelId,
			input: text,
			voice,
			response_format: "mp3",
			speed,
			instructions
		};
		if (outputFormat) if ([
			"mp3",
			"opus",
			"aac",
			"flac",
			"wav",
			"pcm"
		].includes(outputFormat)) requestBody.response_format = outputFormat;
		else warnings.push({
			type: "unsupported",
			feature: "outputFormat",
			details: `Unsupported output format: ${outputFormat}. Using mp3 instead.`
		});
		if (openAIOptions) {
			const speechModelOptions = {};
			for (const key in speechModelOptions) {
				const value = speechModelOptions[key];
				if (value !== void 0) requestBody[key] = value;
			}
		}
		if (language) warnings.push({
			type: "unsupported",
			feature: "language",
			details: `OpenAI speech models do not support language selection. Language parameter "${language}" was ignored.`
		});
		return {
			requestBody,
			warnings
		};
	}
	async doGenerate(options) {
		var _a2, _b, _c, _d, _e;
		const currentDate = (_c = (_b = (_a2 = this.config._internal) == null ? void 0 : _a2.currentDate) == null ? void 0 : _b.call(_a2)) != null ? _c : /* @__PURE__ */ new Date();
		const { requestBody, warnings } = await this.getArgs(options);
		const { value: audio, responseHeaders, rawValue: rawResponse } = await postJsonToApi({
			url: this.config.url({
				path: "/audio/speech",
				modelId: this.modelId
			}),
			headers: combineHeaders((_e = (_d = this.config).headers) == null ? void 0 : _e.call(_d), options.headers),
			body: requestBody,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createBinaryResponseHandler(),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		return {
			audio,
			warnings,
			request: { body: JSON.stringify(requestBody) },
			response: {
				timestamp: currentDate,
				modelId: this.modelId,
				headers: responseHeaders,
				body: rawResponse
			}
		};
	}
};
var openaiTranscriptionResponseSchema = lazySchema(() => zodSchema(object({
	text: string(),
	language: string().nullish(),
	duration: number$1().nullish(),
	words: array(object({
		word: string(),
		start: number$1(),
		end: number$1()
	})).nullish(),
	segments: array(union([object({
		id: number$1(),
		seek: number$1(),
		start: number$1(),
		end: number$1(),
		text: string(),
		tokens: array(number$1()),
		temperature: number$1(),
		avg_logprob: number$1(),
		compression_ratio: number$1(),
		no_speech_prob: number$1()
	}), object({
		type: literal("transcript.text.segment"),
		id: string(),
		start: number$1(),
		end: number$1(),
		text: string(),
		speaker: string()
	})])).nullish()
})));
var openAITranscriptionModelOptions = lazySchema(() => zodSchema(object({
	/**
	* Additional information to include in the transcription response.
	*/
	include: array(string()).optional(),
	/**
	* The language of the input audio in ISO-639-1 format.
	*/
	language: string().optional(),
	/**
	* An optional text to guide the model's style or continue a previous audio segment.
	*/
	prompt: string().optional(),
	/**
	* The sampling temperature, between 0 and 1.
	* @default 0
	*/
	temperature: number$1().min(0).max(1).default(0).optional(),
	/**
	* The timestamp granularities to populate for this transcription.
	* @default ['segment']
	*/
	timestampGranularities: array(_enum(["word", "segment"])).default(["segment"]).optional(),
	/**
	* The format of the transcription response.
	*/
	responseFormat: _enum([
		"json",
		"verbose_json",
		"diarized_json"
	]).optional(),
	/**
	* Controls how the audio is split into chunks before transcription.
	*/
	chunkingStrategy: union([literal("auto"), object({
		type: literal("server_vad"),
		threshold: number$1().min(0).max(1).optional(),
		prefixPaddingMs: number$1().int().min(0).optional(),
		silenceDurationMs: number$1().int().min(0).optional()
	})]).optional(),
	/**
	* Options for streaming transcription models such as `gpt-realtime-whisper`.
	*/
	streaming: object({
		/**
		* Latency/accuracy tradeoff for realtime transcription.
		*/
		delay: _enum([
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh"
		]).optional(),
		/**
		* Additional fields to include in realtime transcription events.
		*/
		include: array(string()).optional()
	}).optional()
})));
function isRealtimeTranscriptionModelId(modelId) {
	return modelId === "gpt-realtime-whisper" || modelId.startsWith("gpt-realtime-whisper-");
}
var languageMap = {
	afrikaans: "af",
	arabic: "ar",
	armenian: "hy",
	azerbaijani: "az",
	belarusian: "be",
	bosnian: "bs",
	bulgarian: "bg",
	catalan: "ca",
	chinese: "zh",
	croatian: "hr",
	czech: "cs",
	danish: "da",
	dutch: "nl",
	english: "en",
	estonian: "et",
	finnish: "fi",
	french: "fr",
	galician: "gl",
	german: "de",
	greek: "el",
	hebrew: "he",
	hindi: "hi",
	hungarian: "hu",
	icelandic: "is",
	indonesian: "id",
	italian: "it",
	japanese: "ja",
	kannada: "kn",
	kazakh: "kk",
	korean: "ko",
	latvian: "lv",
	lithuanian: "lt",
	macedonian: "mk",
	malay: "ms",
	marathi: "mr",
	maori: "mi",
	nepali: "ne",
	norwegian: "no",
	persian: "fa",
	polish: "pl",
	portuguese: "pt",
	romanian: "ro",
	russian: "ru",
	serbian: "sr",
	slovak: "sk",
	slovenian: "sl",
	spanish: "es",
	swahili: "sw",
	swedish: "sv",
	tagalog: "tl",
	tamil: "ta",
	thai: "th",
	turkish: "tr",
	ukrainian: "uk",
	urdu: "ur",
	vietnamese: "vi",
	welsh: "cy"
};
var OpenAITranscriptionModel = class _OpenAITranscriptionModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAITranscriptionModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs({ audio, mediaType, providerOptions }) {
		var _a2, _b;
		const warnings = [];
		const openAIOptions = await parseProviderOptions({
			provider: "openai",
			providerOptions,
			schema: openAITranscriptionModelOptions
		});
		const formData = new FormData();
		const blob = audio instanceof Uint8Array ? new Blob([audio]) : new Blob([convertBase64ToUint8Array(audio)]);
		formData.append("model", this.modelId);
		const fileExtension = mediaTypeToExtension(mediaType);
		formData.append("file", new File([blob], "audio", { type: mediaType }), `audio.${fileExtension}`);
		if (this.modelId === "whisper-1") formData.append("response_format", "verbose_json");
		const isDiarizationModel = this.modelId === "gpt-4o-transcribe-diarize";
		const chunkingStrategy = (_a2 = openAIOptions == null ? void 0 : openAIOptions.chunkingStrategy) != null ? _a2 : isDiarizationModel ? "auto" : void 0;
		if (openAIOptions) {
			const isGpt4oTranscribeModel = ["gpt-4o-transcribe", "gpt-4o-mini-transcribe"].includes(this.modelId);
			const transcriptionModelOptions = {
				include: openAIOptions.include,
				language: openAIOptions.language,
				prompt: openAIOptions.prompt,
				...this.modelId !== "whisper-1" && { response_format: (_b = openAIOptions.responseFormat) != null ? _b : isDiarizationModel ? "diarized_json" : isGpt4oTranscribeModel ? "json" : "verbose_json" },
				temperature: openAIOptions.temperature,
				timestamp_granularities: openAIOptions.timestampGranularities
			};
			for (const [key, value] of Object.entries(transcriptionModelOptions)) if (value != null) if (Array.isArray(value)) for (const item of value) formData.append(`${key}[]`, String(item));
			else formData.append(key, String(value));
		} else if (isDiarizationModel) formData.append("response_format", "diarized_json");
		if (chunkingStrategy != null) formData.append("chunking_strategy", typeof chunkingStrategy === "string" ? chunkingStrategy : JSON.stringify({
			type: chunkingStrategy.type,
			...chunkingStrategy.threshold != null && { threshold: chunkingStrategy.threshold },
			...chunkingStrategy.prefixPaddingMs != null && { prefix_padding_ms: chunkingStrategy.prefixPaddingMs },
			...chunkingStrategy.silenceDurationMs != null && { silence_duration_ms: chunkingStrategy.silenceDurationMs }
		}));
		return {
			formData,
			warnings
		};
	}
	async doGenerate(options) {
		var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
		if (isRealtimeTranscriptionModelId(this.modelId)) throw new UnsupportedFunctionalityError({ functionality: `non-streaming transcription with ${this.modelId}` });
		const currentDate = (_c = (_b = (_a2 = this.config._internal) == null ? void 0 : _a2.currentDate) == null ? void 0 : _b.call(_a2)) != null ? _c : /* @__PURE__ */ new Date();
		const { formData, warnings } = await this.getArgs(options);
		const { value: response, responseHeaders, rawValue: rawResponse } = await postFormDataToApi({
			url: this.config.url({
				path: "/audio/transcriptions",
				modelId: this.modelId
			}),
			headers: combineHeaders((_e = (_d = this.config).headers) == null ? void 0 : _e.call(_d), options.headers),
			formData,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiTranscriptionResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		const language = response.language != null && response.language in languageMap ? languageMap[response.language] : void 0;
		const diarizedSegments = (_f = response.segments) == null ? void 0 : _f.flatMap((segment) => "speaker" in segment ? [{
			text: segment.text,
			startSecond: segment.start,
			endSecond: segment.end,
			speaker: segment.speaker
		}] : []);
		return {
			text: response.text,
			segments: (_j = (_i = (_g = response.segments) == null ? void 0 : _g.map((segment) => ({
				text: segment.text,
				startSecond: segment.start,
				endSecond: segment.end
			}))) != null ? _i : (_h = response.words) == null ? void 0 : _h.map((word) => ({
				text: word.word,
				startSecond: word.start,
				endSecond: word.end
			}))) != null ? _j : [],
			language,
			durationInSeconds: (_k = response.duration) != null ? _k : void 0,
			warnings,
			response: {
				timestamp: currentDate,
				modelId: this.modelId,
				headers: responseHeaders,
				body: rawResponse
			},
			...diarizedSegments != null && diarizedSegments.length > 0 && { providerMetadata: { openai: { segments: diarizedSegments } } }
		};
	}
	async doStream(options) {
		var _a2, _b, _c, _d, _e, _f, _g;
		if (!isRealtimeTranscriptionModelId(this.modelId)) throw new UnsupportedFunctionalityError({ functionality: `streaming transcription with ${this.modelId}` });
		const currentDate = (_c = (_b = (_a2 = this.config._internal) == null ? void 0 : _a2.currentDate) == null ? void 0 : _b.call(_a2)) != null ? _c : /* @__PURE__ */ new Date();
		const openAIOptions = await parseProviderOptions({
			provider: "openai",
			providerOptions: options.providerOptions,
			schema: openAITranscriptionModelOptions
		});
		const warnings = [];
		const rawOpenAIOptions = (_e = (_d = options.providerOptions) == null ? void 0 : _d.openai) != null ? _e : {};
		for (const option of [
			"include",
			"prompt",
			"temperature",
			"timestampGranularities"
		]) if (rawOpenAIOptions[option] != null) warnings.push({
			type: "unsupported",
			feature: `providerOptions.openai.${option}`,
			details: `OpenAI streaming transcription does not support ${option}.`
		});
		const headers = combineHeaders((_g = (_f = this.config).headers) == null ? void 0 : _g.call(_f), options.headers);
		const sessionUpdate = buildOpenAIRealtimeTranscriptionSession({
			modelId: this.modelId,
			inputAudioFormat: options.inputAudioFormat,
			providerOptions: openAIOptions
		});
		return {
			request: { body: sessionUpdate },
			response: {
				timestamp: currentDate,
				modelId: this.modelId
			},
			stream: createOpenAIRealtimeTranscriptionStream({
				webSocket: this.config.webSocket,
				url: toWebSocketUrl(this.config.url({
					path: "/realtime?intent=transcription",
					modelId: this.modelId
				})),
				headers,
				sessionUpdate,
				language: openAIOptions == null ? void 0 : openAIOptions.language,
				warnings,
				audio: options.audio,
				abortSignal: options.abortSignal,
				includeRawChunks: options.includeRawChunks
			})
		};
	}
};
function createOpenAIRealtimeTranscriptionStream({ webSocket, url, headers, sessionUpdate, language, warnings, audio, abortSignal, includeRawChunks }) {
	let finished = false;
	let cleanup = () => {};
	return new ReadableStream({
		start: (controller) => {
			const realtimeConnection = getOpenAIRealtimeConnection(headers);
			let audioReader;
			let connection;
			cleanup = (closeCode) => {
				if (audioReader != null) audioReader.cancel().catch(() => {});
				else audio.cancel().catch(() => {});
				connection?.close(closeCode);
			};
			const finishWithError = (error) => {
				if (finished) return;
				finished = true;
				cleanup();
				controller.error(error);
			};
			const finish = (text, id) => {
				if (finished) return;
				finished = true;
				if (id != null) controller.enqueue({
					type: "transcript-final",
					id,
					text
				});
				controller.enqueue({
					type: "finish",
					text,
					segments: [],
					language
				});
				controller.close();
				cleanup(1e3);
			};
			const sendAudio = async (socket) => {
				audioReader = audio.getReader();
				try {
					while (true) {
						const { done, value } = await audioReader.read();
						if (done || finished) break;
						socket.send(JSON.stringify({
							type: "input_audio_buffer.append",
							audio: convertToBase64(value)
						}));
						await waitForWebSocketBufferDrain(socket);
					}
				} finally {
					audioReader.releaseLock();
					audioReader = void 0;
				}
				if (!finished) socket.send(JSON.stringify({ type: "input_audio_buffer.commit" }));
			};
			connection = connectToWebSocket({
				url,
				protocols: realtimeConnection.protocols,
				headers: realtimeConnection.headers,
				webSocket,
				abortSignal,
				onAbort: finishWithError,
				onProcessingError: finishWithError,
				onOpen: (socket) => {
					controller.enqueue({
						type: "stream-start",
						warnings
					});
					socket.send(JSON.stringify(sessionUpdate));
					sendAudio(socket).catch(finishWithError);
				},
				onMessageText: async (text) => {
					var _a2, _b, _c, _d;
					const parsed = await safeParseJSON({ text });
					if (!parsed.success) return;
					const raw = parsed.value;
					if (includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: raw
					});
					switch (raw.type) {
						case "conversation.item.input_audio_transcription.delta":
							controller.enqueue({
								type: "transcript-delta",
								id: raw.item_id,
								delta: (_a2 = raw.delta) != null ? _a2 : ""
							});
							break;
						case "conversation.item.input_audio_transcription.completed":
							finish((_b = raw.transcript) != null ? _b : "", raw.item_id);
							break;
						case "error": finishWithError(new Error((_d = (_c = raw.error) == null ? void 0 : _c.message) != null ? _d : "OpenAI realtime error"));
					}
				},
				onSocketError: () => {
					finishWithError(/* @__PURE__ */ new Error("OpenAI realtime transcription error"));
				},
				onClose: () => {
					if (finished) return;
					finished = true;
					cleanup();
					controller.close();
				}
			});
		},
		cancel: () => {
			if (finished) return;
			finished = true;
			cleanup();
		}
	});
}
function buildOpenAIRealtimeTranscriptionSession({ modelId, inputAudioFormat, providerOptions }) {
	var _a2, _b;
	return {
		type: "session.update",
		session: {
			type: "transcription",
			audio: { input: {
				format: {
					type: inputAudioFormat.type,
					...inputAudioFormat.rate != null ? { rate: inputAudioFormat.rate } : {}
				},
				transcription: {
					model: modelId,
					...(providerOptions == null ? void 0 : providerOptions.language) != null ? { language: providerOptions.language } : {},
					...((_a2 = providerOptions == null ? void 0 : providerOptions.streaming) == null ? void 0 : _a2.delay) != null ? { delay: providerOptions.streaming.delay } : {}
				},
				turn_detection: null
			} },
			...((_b = providerOptions == null ? void 0 : providerOptions.streaming) == null ? void 0 : _b.include) != null ? { include: providerOptions.streaming.include } : {}
		}
	};
}
function getOpenAIRealtimeConnection(headers) {
	var _a2;
	let authorization;
	for (const [key, value] of Object.entries(headers)) if (key.toLowerCase() === "authorization" && value != null) authorization = value;
	const token = (_a2 = authorization == null ? void 0 : authorization.match(/^bearer\s+(.+)$/i)) == null ? void 0 : _a2[1];
	if (token == null) return {
		protocols: ["realtime"],
		headers
	};
	return {
		protocols: ["realtime", `openai-insecure-api-key.${token}`],
		headers: Object.fromEntries(Object.entries(headers).filter(([key]) => key.toLowerCase() !== "authorization"))
	};
}
var openAISpeechTranslationModelOptions = lazySchema(() => zodSchema(object({})));
var OpenAISpeechTranslationModel = class _OpenAISpeechTranslationModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _OpenAISpeechTranslationModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async doStream(options) {
		var _a2, _b, _c, _d, _e;
		if (options.targetLanguage == null) throw new InvalidArgumentError({
			argument: "targetLanguage",
			message: `targetLanguage is required for translation model '${this.modelId}'.`
		});
		const currentDate = (_c = (_b = (_a2 = this.config._internal) == null ? void 0 : _a2.currentDate) == null ? void 0 : _b.call(_a2)) != null ? _c : /* @__PURE__ */ new Date();
		await parseProviderOptions({
			provider: "openai",
			providerOptions: options.providerOptions,
			schema: openAISpeechTranslationModelOptions
		});
		const warnings = [];
		validateOpenAISpeechTranslationInputAudioFormat(options.inputAudioFormat);
		if (options.sourceLanguage != null) warnings.push({
			type: "unsupported",
			feature: "sourceLanguage",
			details: "The OpenAI Realtime translation API auto-detects the source language and does not accept a source language."
		});
		if (options.outputAudioFormat != null) warnings.push({
			type: "unsupported",
			feature: "outputAudioFormat",
			details: "The OpenAI Realtime translation API always outputs 24kHz 16-bit PCM audio and does not accept an output audio format."
		});
		const headers = combineHeaders((_e = (_d = this.config).headers) == null ? void 0 : _e.call(_d), options.headers);
		const sessionUpdate = buildOpenAIRealtimeSpeechTranslationSession({ targetLanguage: options.targetLanguage });
		return {
			request: { body: sessionUpdate },
			response: {
				timestamp: currentDate,
				modelId: this.modelId
			},
			stream: createOpenAIRealtimeSpeechTranslationStream({
				webSocket: this.config.webSocket,
				url: toWebSocketUrl(this.config.url({
					path: `/realtime/translations?model=${encodeURIComponent(this.modelId)}`,
					modelId: this.modelId
				})),
				headers,
				sessionUpdate,
				warnings,
				audio: options.audio,
				abortSignal: options.abortSignal,
				includeRawChunks: options.includeRawChunks
			})
		};
	}
};
function createOpenAIRealtimeSpeechTranslationStream({ webSocket, url, headers, sessionUpdate, warnings, audio, abortSignal, includeRawChunks }) {
	let finished = false;
	let cleanup = () => {};
	return new ReadableStream({
		start: (controller) => {
			const realtimeConnection = getOpenAIRealtimeConnection2(headers);
			let audioReader;
			let connection;
			let sourceText = "";
			let translationText = "";
			cleanup = (closeCode) => {
				if (audioReader != null) audioReader.cancel().catch(() => {});
				else audio.cancel().catch(() => {});
				connection?.close(closeCode);
			};
			const finishWithError = (error) => {
				if (finished) return;
				finished = true;
				cleanup();
				controller.error(error);
			};
			const finish = () => {
				if (finished) return;
				finished = true;
				if (sourceText !== "") controller.enqueue({
					type: "source-transcript-final",
					text: sourceText
				});
				if (translationText !== "") controller.enqueue({
					type: "output-text-final",
					text: translationText
				});
				controller.enqueue({
					type: "finish",
					sourceText,
					outputText: translationText,
					usage: void 0
				});
				controller.close();
				cleanup(1e3);
			};
			const sendAudio = async (socket) => {
				audioReader = audio.getReader();
				try {
					while (true) {
						const { done, value } = await audioReader.read();
						if (done || finished) break;
						socket.send(JSON.stringify({
							type: "session.input_audio_buffer.append",
							audio: convertToBase64(value)
						}));
						await waitForWebSocketBufferDrain(socket);
					}
				} finally {
					audioReader.releaseLock();
					audioReader = void 0;
				}
				if (!finished) socket.send(JSON.stringify({ type: "session.close" }));
			};
			connection = connectToWebSocket({
				url,
				protocols: realtimeConnection.protocols,
				headers: realtimeConnection.headers,
				webSocket,
				abortSignal,
				onAbort: finishWithError,
				onProcessingError: finishWithError,
				onOpen: (socket) => {
					controller.enqueue({
						type: "stream-start",
						warnings
					});
					socket.send(JSON.stringify(sessionUpdate));
					sendAudio(socket).catch(finishWithError);
				},
				onMessageText: async (text) => {
					var _a2, _b, _c, _d, _e, _f;
					if (finished) return;
					const parsed = await safeParseJSON({ text });
					if (!parsed.success) return;
					const raw = parsed.value;
					if (includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: raw
					});
					switch (raw.type) {
						case "session.output_audio.delta":
							if (raw.delta) controller.enqueue({
								type: "audio",
								audio: raw.delta
							});
							break;
						case "session.output_transcript.delta":
							translationText += (_a2 = raw.delta) != null ? _a2 : "";
							controller.enqueue({
								type: "output-text-delta",
								delta: (_b = raw.delta) != null ? _b : ""
							});
							break;
						case "session.input_transcript.delta":
							sourceText += (_c = raw.delta) != null ? _c : "";
							controller.enqueue({
								type: "source-transcript-delta",
								delta: (_d = raw.delta) != null ? _d : ""
							});
							break;
						case "session.closed":
							finish();
							break;
						case "error": controller.enqueue({
							type: "error",
							error: new Error((_f = (_e = raw.error) == null ? void 0 : _e.message) != null ? _f : "OpenAI realtime error")
						});
					}
				},
				onSocketError: () => {
					finishWithError(/* @__PURE__ */ new Error("OpenAI realtime translation error"));
				},
				onClose: ({ code, reason }) => {
					if (finished) return;
					finishWithError(/* @__PURE__ */ new Error(`OpenAI realtime translation WebSocket closed unexpectedly before finishing (code ${code != null ? code : "unknown"}${reason ? `, reason: ${reason}` : ""}).`));
				}
			});
		},
		cancel: () => {
			if (finished) return;
			finished = true;
			cleanup();
		}
	});
}
function buildOpenAIRealtimeSpeechTranslationSession({ targetLanguage }) {
	return {
		type: "session.update",
		session: { audio: {
			input: {
				transcription: { model: "gpt-realtime-whisper" },
				noise_reduction: null
			},
			output: { language: targetLanguage }
		} }
	};
}
function validateOpenAISpeechTranslationInputAudioFormat(inputAudioFormat) {
	if (inputAudioFormat.type !== "audio/pcm" || inputAudioFormat.rate != null && inputAudioFormat.rate !== 24e3) throw new InvalidArgumentError({
		argument: "inputAudioFormat",
		message: "The OpenAI Realtime translation API only supports 24kHz 16-bit PCM input audio."
	});
}
function getOpenAIRealtimeConnection2(headers) {
	var _a2;
	let authorization;
	for (const [key, value] of Object.entries(headers)) if (key.toLowerCase() === "authorization" && value != null) authorization = value;
	const token = (_a2 = authorization == null ? void 0 : authorization.match(/^bearer\s+(.+)$/i)) == null ? void 0 : _a2[1];
	if (token == null) return {
		protocols: ["realtime"],
		headers
	};
	return {
		protocols: ["realtime", `openai-insecure-api-key.${token}`],
		headers: Object.fromEntries(Object.entries(headers).filter(([key]) => key.toLowerCase() !== "authorization"))
	};
}
var openaiSkillResponseSchema = lazySchema(() => zodSchema(object({
	id: string(),
	name: string().nullish(),
	description: string().nullish(),
	default_version: string().nullish(),
	latest_version: string().nullish(),
	created_at: number$1(),
	updated_at: number$1().nullish()
})));
var OpenAISkills = class {
	constructor(config) {
		this.config = config;
		this.specificationVersion = "v4";
	}
	get provider() {
		return this.config.provider;
	}
	async uploadSkill(params) {
		const warnings = [];
		if (params.displayTitle != null) warnings.push({
			type: "unsupported",
			feature: "displayTitle"
		});
		const formData = new FormData();
		for (const file of params.files) {
			const content = convertInlineFileDataToUint8Array(file.data);
			formData.append("files[]", new Blob([content]), file.path);
		}
		const { value: response } = await postFormDataToApi({
			url: this.config.url({ path: "/skills" }),
			headers: combineHeaders(this.config.headers()),
			formData,
			failedResponseHandler: openaiFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler(openaiSkillResponseSchema),
			fetch: this.config.fetch
		});
		return {
			providerReference: { openai: response.id },
			...response.name != null ? { name: response.name } : {},
			...response.description != null ? { description: response.description } : {},
			...response.latest_version != null ? { latestVersion: response.latest_version } : {},
			providerMetadata: { openai: {
				...response.default_version != null ? { defaultVersion: response.default_version } : {},
				...response.created_at != null ? { createdAt: response.created_at } : {},
				...response.updated_at != null ? { updatedAt: response.updated_at } : {}
			} },
			warnings
		};
	}
};
var VERSION = "4.0.66";
function createOpenAI(options = {}) {
	var _a2, _b;
	const baseURL = (_a2 = withoutTrailingSlash(validateBaseURL(loadOptionalSetting({
		settingValue: options.baseURL,
		environmentVariableName: "OPENAI_BASE_URL"
	})))) != null ? _a2 : "https://api.openai.com/v1";
	const providerName = (_b = options.name) != null ? _b : "openai";
	const getHeaders = () => withUserAgentSuffix({
		Authorization: `Bearer ${loadApiKey({
			apiKey: options.apiKey,
			environmentVariableName: "OPENAI_API_KEY",
			description: "OpenAI"
		})}`,
		"OpenAI-Organization": options.organization,
		"OpenAI-Project": options.project,
		...options.headers
	}, `ai-sdk/openai/${VERSION}`);
	const createChatModel = (modelId) => new OpenAIChatLanguageModel(modelId, {
		provider: `${providerName}.chat`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createCompletionModel = (modelId) => new OpenAICompletionLanguageModel(modelId, {
		provider: `${providerName}.completion`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createEmbeddingModel = (modelId) => new OpenAIEmbeddingModel(modelId, {
		provider: `${providerName}.embedding`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createImageModel = (modelId) => new OpenAIImageModel(modelId, {
		provider: `${providerName}.image`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createTranscriptionModel = (modelId) => new OpenAITranscriptionModel(modelId, {
		provider: `${providerName}.transcription`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch,
		webSocket: options.webSocket
	});
	const createSpeechTranslationModel = (modelId) => new OpenAISpeechTranslationModel(modelId, {
		provider: `${providerName}.speech-translation`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch,
		webSocket: options.webSocket
	});
	const createSpeechModel = (modelId) => new OpenAISpeechModel(modelId, {
		provider: `${providerName}.speech`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createFiles = () => new OpenAIFiles({
		provider: `${providerName}.files`,
		baseURL,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createSkills = () => new OpenAISkills({
		provider: `${providerName}.skills`,
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch
	});
	const createLanguageModel = (modelId) => {
		if (new.target) throw new Error("The OpenAI model function cannot be called with the new keyword.");
		return createResponsesModel(modelId);
	};
	const createResponsesModel = (modelId) => {
		return new OpenAIResponsesLanguageModel(modelId, {
			provider: `${providerName}.responses`,
			baseURL,
			url: ({ path }) => `${baseURL}${path}`,
			headers: getHeaders,
			fetch: options.fetch,
			fileIdPrefixes: ["file-"]
		});
	};
	const createBatch = () => new OpenAIBatch({
		provider: `${providerName}.batch`,
		config: {
			provider: `${providerName}.responses`,
			baseURL,
			url: ({ path }) => `${baseURL}${path}`,
			headers: getHeaders,
			fetch: options.fetch,
			fileIdPrefixes: ["file-"]
		}
	});
	const createRealtimeModel = (modelId) => new OpenAIRealtimeModel(modelId, {
		provider: `${providerName}.realtime`,
		baseURL,
		headers: getHeaders,
		fetch: options.fetch
	});
	const experimentalRealtimeFactory = Object.assign((modelId) => createRealtimeModel(modelId), { getToken: async (tokenOptions) => {
		const secret = await createRealtimeModel(tokenOptions.model).doCreateClientSecret({
			sessionConfig: tokenOptions.sessionConfig,
			expiresAfterSeconds: tokenOptions.expiresAfterSeconds
		});
		return {
			token: secret.token,
			url: secret.url,
			expiresAt: secret.expiresAt
		};
	} });
	const provider = function(modelId) {
		return createLanguageModel(modelId);
	};
	provider.specificationVersion = "v4";
	provider.languageModel = createLanguageModel;
	provider.chat = createChatModel;
	provider.completion = createCompletionModel;
	provider.responses = createResponsesModel;
	provider.embedding = createEmbeddingModel;
	provider.embeddingModel = createEmbeddingModel;
	provider.textEmbedding = createEmbeddingModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.image = createImageModel;
	provider.imageModel = createImageModel;
	provider.transcription = createTranscriptionModel;
	provider.transcriptionModel = createTranscriptionModel;
	provider.translation = createSpeechTranslationModel;
	provider.speechTranslationModel = createSpeechTranslationModel;
	provider.speech = createSpeechModel;
	provider.speechModel = createSpeechModel;
	provider.files = createFiles;
	provider.skills = createSkills;
	provider.experimental_batch = createBatch;
	provider.experimental_realtime = experimentalRealtimeFactory;
	provider.tools = openaiTools;
	return provider;
}
createOpenAI();
//#endregion
export { createOpenAI as t };
