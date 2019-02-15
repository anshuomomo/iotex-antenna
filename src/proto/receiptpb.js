/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iproto.ReceiptPb');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.iproto.LogPb');


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
proto.iproto.ReceiptPb = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iproto.ReceiptPb.repeatedFields_, null);
};
goog.inherits(proto.iproto.ReceiptPb, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iproto.ReceiptPb.displayName = 'proto.iproto.ReceiptPb';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iproto.ReceiptPb.repeatedFields_ = [6];



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
proto.iproto.ReceiptPb.prototype.toObject = function(opt_includeInstance) {
  return proto.iproto.ReceiptPb.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iproto.ReceiptPb} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.ReceiptPb.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnvalue: msg.getReturnvalue_asB64(),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    acthash: msg.getActhash_asB64(),
    gasconsumed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contractaddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.iproto.LogPb.toObject, includeInstance)
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
 * @return {!proto.iproto.ReceiptPb}
 */
proto.iproto.ReceiptPb.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iproto.ReceiptPb;
  return proto.iproto.ReceiptPb.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iproto.ReceiptPb} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iproto.ReceiptPb}
 */
proto.iproto.ReceiptPb.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReturnvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setActhash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasconsumed(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractaddress(value);
      break;
    case 6:
      var value = new proto.iproto.LogPb;
      reader.readMessage(value,proto.iproto.LogPb.deserializeBinaryFromReader);
      msg.addLogs(value);
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
proto.iproto.ReceiptPb.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iproto.ReceiptPb.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iproto.ReceiptPb} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.ReceiptPb.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnvalue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getActhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getGasconsumed();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getContractaddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.iproto.LogPb.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes returnValue = 1;
 * @return {string}
 */
proto.iproto.ReceiptPb.prototype.getReturnvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes returnValue = 1;
 * This is a type-conversion wrapper around `getReturnvalue()`
 * @return {string}
 */
proto.iproto.ReceiptPb.prototype.getReturnvalue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReturnvalue()));
};


/**
 * optional bytes returnValue = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReturnvalue()`
 * @return {!Uint8Array}
 */
proto.iproto.ReceiptPb.prototype.getReturnvalue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReturnvalue()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.ReceiptPb.prototype.setReturnvalue = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 status = 2;
 * @return {number}
 */
proto.iproto.ReceiptPb.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.iproto.ReceiptPb.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes actHash = 3;
 * @return {string}
 */
proto.iproto.ReceiptPb.prototype.getActhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes actHash = 3;
 * This is a type-conversion wrapper around `getActhash()`
 * @return {string}
 */
proto.iproto.ReceiptPb.prototype.getActhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getActhash()));
};


/**
 * optional bytes actHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getActhash()`
 * @return {!Uint8Array}
 */
proto.iproto.ReceiptPb.prototype.getActhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getActhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.ReceiptPb.prototype.setActhash = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 gasConsumed = 4;
 * @return {number}
 */
proto.iproto.ReceiptPb.prototype.getGasconsumed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.iproto.ReceiptPb.prototype.setGasconsumed = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string contractAddress = 5;
 * @return {string}
 */
proto.iproto.ReceiptPb.prototype.getContractaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.iproto.ReceiptPb.prototype.setContractaddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated LogPb logs = 6;
 * @return {!Array<!proto.iproto.LogPb>}
 */
proto.iproto.ReceiptPb.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.iproto.LogPb>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iproto.LogPb, 6));
};


/** @param {!Array<!proto.iproto.LogPb>} value */
proto.iproto.ReceiptPb.prototype.setLogsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.iproto.LogPb=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iproto.LogPb}
 */
proto.iproto.ReceiptPb.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.iproto.LogPb, opt_index);
};


proto.iproto.ReceiptPb.prototype.clearLogsList = function() {
  this.setLogsList([]);
};


