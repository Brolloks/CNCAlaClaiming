import * as Fetch$dCore$dRequestBody from "../Fetch.Core.RequestBody/index.js";
const toRequestBodyString = {toRequestBody: Fetch$dCore$dRequestBody.fromString};
const toRequestBodyReadableStre = {toRequestBody: Fetch$dCore$dRequestBody.fromReadableStream};
const toRequestBodyArrayView = {toRequestBody: Fetch$dCore$dRequestBody.fromArrayView};
const toRequestBodyArrayBuffer = {toRequestBody: Fetch$dCore$dRequestBody.fromArrayBuffer};
const toRequestBody = dict => dict.toRequestBody;
export {toRequestBody, toRequestBodyArrayBuffer, toRequestBodyArrayView, toRequestBodyReadableStre, toRequestBodyString};
