/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iotexapi.GetBlockMetasRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.iotexapi.GetBlockMetaByHashRequest');
goog.require('proto.iotexapi.GetBlockMetasByIndexRequest');


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
proto.iotexapi.GetBlockMetasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iotexapi.GetBlockMetasRequest.oneofGroups_);
};
goog.inherits(proto.iotexapi.GetBlockMetasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotexapi.GetBlockMetasRequest.displayName = 'proto.iotexapi.GetBlockMetasRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.iotexapi.GetBlockMetasRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.iotexapi.GetBlockMetasRequest.LookupCase = {
  LOOKUP_NOT_SET: 0,
  BYINDEX: 1,
  BYHASH: 2
};

/**
 * @return {proto.iotexapi.GetBlockMetasRequest.LookupCase}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.getLookupCase = function() {
  return /** @type {proto.iotexapi.GetBlockMetasRequest.LookupCase} */(jspb.Message.computeOneofCase(this, proto.iotexapi.GetBlockMetasRequest.oneofGroups_[0]));
};



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
proto.iotexapi.GetBlockMetasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetBlockMetasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetBlockMetasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    byindex: (f = msg.getByindex()) && proto.iotexapi.GetBlockMetasByIndexRequest.toObject(includeInstance, f),
    byhash: (f = msg.getByhash()) && proto.iotexapi.GetBlockMetaByHashRequest.toObject(includeInstance, f)
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
 * @return {!proto.iotexapi.GetBlockMetasRequest}
 */
proto.iotexapi.GetBlockMetasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetBlockMetasRequest;
  return proto.iotexapi.GetBlockMetasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetBlockMetasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetBlockMetasRequest}
 */
proto.iotexapi.GetBlockMetasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iotexapi.GetBlockMetasByIndexRequest;
      reader.readMessage(value,proto.iotexapi.GetBlockMetasByIndexRequest.deserializeBinaryFromReader);
      msg.setByindex(value);
      break;
    case 2:
      var value = new proto.iotexapi.GetBlockMetaByHashRequest;
      reader.readMessage(value,proto.iotexapi.GetBlockMetaByHashRequest.deserializeBinaryFromReader);
      msg.setByhash(value);
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
proto.iotexapi.GetBlockMetasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetBlockMetasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetBlockMetasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getByindex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iotexapi.GetBlockMetasByIndexRequest.serializeBinaryToWriter
    );
  }
  f = message.getByhash();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.iotexapi.GetBlockMetaByHashRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetBlockMetasByIndexRequest byIndex = 1;
 * @return {?proto.iotexapi.GetBlockMetasByIndexRequest}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.getByindex = function() {
  return /** @type{?proto.iotexapi.GetBlockMetasByIndexRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetBlockMetasByIndexRequest, 1));
};


/** @param {?proto.iotexapi.GetBlockMetasByIndexRequest|undefined} value */
proto.iotexapi.GetBlockMetasRequest.prototype.setByindex = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.iotexapi.GetBlockMetasRequest.oneofGroups_[0], value);
};


proto.iotexapi.GetBlockMetasRequest.prototype.clearByindex = function() {
  this.setByindex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.hasByindex = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetBlockMetaByHashRequest byHash = 2;
 * @return {?proto.iotexapi.GetBlockMetaByHashRequest}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.getByhash = function() {
  return /** @type{?proto.iotexapi.GetBlockMetaByHashRequest} */ (
    jspb.Message.getWrapperField(this, proto.iotexapi.GetBlockMetaByHashRequest, 2));
};


/** @param {?proto.iotexapi.GetBlockMetaByHashRequest|undefined} value */
proto.iotexapi.GetBlockMetasRequest.prototype.setByhash = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.iotexapi.GetBlockMetasRequest.oneofGroups_[0], value);
};


proto.iotexapi.GetBlockMetasRequest.prototype.clearByhash = function() {
  this.setByhash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iotexapi.GetBlockMetasRequest.prototype.hasByhash = function() {
  return jspb.Message.getField(this, 2) != null;
};


