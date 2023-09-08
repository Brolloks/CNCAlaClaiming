const $ClientBody = (tag, _1) => ({tag, _1});
const ArrayBufferBody = value0 => $ClientBody("ArrayBufferBody", value0);
const JsonBody = value0 => $ClientBody("JsonBody", value0);
const StringBody = value0 => $ClientBody("StringBody", value0);
export {$ClientBody, ArrayBufferBody, JsonBody, StringBody};
