/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iotexapi.GetAccountResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.iproto.AccountMeta');


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
proto.iotexapi.GetAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.iotexapi.GetAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotexapi.GetAccountResponse.displayName = 'proto.iotexapi.GetAccountResponse';
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
proto.iotexapi.GetAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountmeta: (f = msg.getAccountmeta()) && proto.iproto.AccountMeta.toObject(includeInstance, f)
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
 * @return {!proto.iotexapi.GetAccountResponse}
 */
proto.iotexapi.GetAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetAccountResponse;
  return proto.iotexapi.GetAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetAccountResponse}
 */
proto.iotexapi.GetAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iproto.AccountMeta;
      reader.readMessage(value,proto.iproto.AccountMeta.deserializeBinaryFromReader);
      msg.setAccountmeta(value);
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
proto.iotexapi.GetAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountmeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iproto.AccountMeta.serializeBinaryToWriter
    );
  }
};


/**
 * optional iproto.AccountMeta accountMeta = 1;
 * @return {?proto.iproto.AccountMeta}
 */
proto.iotexapi.GetAccountResponse.prototype.getAccountmeta = function() {
  return /** @type{?proto.iproto.AccountMeta} */ (
    jspb.Message.getWrapperField(this, proto.iproto.AccountMeta, 1));
};


/** @param {?proto.iproto.AccountMeta|undefined} value */
proto.iotexapi.GetAccountResponse.prototype.setAccountmeta = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.iotexapi.GetAccountResponse.prototype.clearAccountmeta = function() {
  this.setAccountmeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotexapi.GetAccountResponse.prototype.hasAccountmeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


