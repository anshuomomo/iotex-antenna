/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iproto.SetReward');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.iproto.RewardType');

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
proto.iproto.SetReward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iproto.SetReward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iproto.SetReward.displayName = 'proto.iproto.SetReward';
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
proto.iproto.SetReward.prototype.toObject = function(opt_includeInstance) {
  return proto.iproto.SetReward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iproto.SetReward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.SetReward.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount_asB64(),
    data: msg.getData_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.iproto.SetReward}
 */
proto.iproto.SetReward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iproto.SetReward;
  return proto.iproto.SetReward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iproto.SetReward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iproto.SetReward}
 */
proto.iproto.SetReward.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {!proto.iproto.RewardType} */ (reader.readEnum());
      msg.setType(value);
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
proto.iproto.SetReward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iproto.SetReward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iproto.SetReward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.SetReward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional bytes amount = 1;
 * @return {string}
 */
proto.iproto.SetReward.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes amount = 1;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.iproto.SetReward.prototype.getAmount_asB64 = function() {
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
proto.iproto.SetReward.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.SetReward.prototype.setAmount = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {string}
 */
proto.iproto.SetReward.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.iproto.SetReward.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.iproto.SetReward.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.iproto.SetReward.prototype.setData = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional RewardType type = 3;
 * @return {!proto.iproto.RewardType}
 */
proto.iproto.SetReward.prototype.getType = function() {
  return /** @type {!proto.iproto.RewardType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.iproto.RewardType} value */
proto.iproto.SetReward.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


