/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iproto.StartSubChainPb');

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
proto.iproto.StartSubChainPb = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iproto.StartSubChainPb, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iproto.StartSubChainPb.displayName = 'proto.iproto.StartSubChainPb';
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
proto.iproto.StartSubChainPb.prototype.toObject = function(opt_includeInstance) {
  return proto.iproto.StartSubChainPb.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iproto.StartSubChainPb} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.StartSubChainPb.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    securitydeposit: msg.getSecuritydeposit_asB64(),
    operationdeposit: msg.getOperationdeposit_asB64(),
    startheight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    parentheightoffset: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.iproto.StartSubChainPb}
 */
proto.iproto.StartSubChainPb.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iproto.StartSubChainPb;
  return proto.iproto.StartSubChainPb.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iproto.StartSubChainPb} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iproto.StartSubChainPb}
 */
proto.iproto.StartSubChainPb.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChainid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSecuritydeposit(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOperationdeposit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartheight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setParentheightoffset(value);
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
proto.iproto.StartSubChainPb.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iproto.StartSubChainPb.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iproto.StartSubChainPb} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.StartSubChainPb.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSecuritydeposit_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOperationdeposit_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStartheight();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getParentheightoffset();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint32 chainID = 1;
 * @return {number}
 */
proto.iproto.StartSubChainPb.prototype.getChainid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.iproto.StartSubChainPb.prototype.setChainid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes securityDeposit = 2;
 * @return {string}
 */
proto.iproto.StartSubChainPb.prototype.getSecuritydeposit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes securityDeposit = 2;
 * This is a type-conversion wrapper around `getSecuritydeposit()`
 * @return {string}
 */
proto.iproto.StartSubChainPb.prototype.getSecuritydeposit_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSecuritydeposit()));
};


/**
 * optional bytes securityDeposit = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSecuritydeposit()`
 * @return {!Uint8Array}
 */
proto.iproto.StartSubChainPb.prototype.getSecuritydeposit_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSecuritydeposit()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.StartSubChainPb.prototype.setSecuritydeposit = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes operationDeposit = 3;
 * @return {string}
 */
proto.iproto.StartSubChainPb.prototype.getOperationdeposit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes operationDeposit = 3;
 * This is a type-conversion wrapper around `getOperationdeposit()`
 * @return {string}
 */
proto.iproto.StartSubChainPb.prototype.getOperationdeposit_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOperationdeposit()));
};


/**
 * optional bytes operationDeposit = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOperationdeposit()`
 * @return {!Uint8Array}
 */
proto.iproto.StartSubChainPb.prototype.getOperationdeposit_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOperationdeposit()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.StartSubChainPb.prototype.setOperationdeposit = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 startHeight = 4;
 * @return {number}
 */
proto.iproto.StartSubChainPb.prototype.getStartheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.iproto.StartSubChainPb.prototype.setStartheight = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 parentHeightOffset = 5;
 * @return {number}
 */
proto.iproto.StartSubChainPb.prototype.getParentheightoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.iproto.StartSubChainPb.prototype.setParentheightoffset = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


