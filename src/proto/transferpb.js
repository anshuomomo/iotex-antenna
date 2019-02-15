/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iproto.TransferPb');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.iproto.TransferPb = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iproto.TransferPb, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iproto.TransferPb.displayName = 'proto.iproto.TransferPb';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.iproto.TransferPb.prototype.toObject = function(opt_includeInstance) {
  return proto.iproto.TransferPb.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iproto.TransferPb} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.TransferPb.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount_asB64(),
    recipient: jspb.Message.getFieldWithDefault(msg, 2, ""),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.iproto.TransferPb}
 */
proto.iproto.TransferPb.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iproto.TransferPb;
  return proto.iproto.TransferPb.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iproto.TransferPb} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iproto.TransferPb}
 */
proto.iproto.TransferPb.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipient(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.iproto.TransferPb.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iproto.TransferPb.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iproto.TransferPb} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.TransferPb.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRecipient();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes amount = 1;
 * @return {string}
 */
proto.iproto.TransferPb.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes amount = 1;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.iproto.TransferPb.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.iproto.TransferPb.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.TransferPb.prototype.setAmount = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string recipient = 2;
 * @return {string}
 */
proto.iproto.TransferPb.prototype.getRecipient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.iproto.TransferPb.prototype.setRecipient = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes payload = 3;
 * @return {string}
 */
proto.iproto.TransferPb.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes payload = 3;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.iproto.TransferPb.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.iproto.TransferPb.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.TransferPb.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


