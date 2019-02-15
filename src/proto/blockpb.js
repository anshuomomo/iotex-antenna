/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iproto.BlockPb');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.iproto.ActionPb');
goog.require('proto.iproto.BlockFooterPb');
goog.require('proto.iproto.BlockHeaderPb');


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
proto.iproto.BlockPb = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iproto.BlockPb.repeatedFields_, null);
};
goog.inherits(proto.iproto.BlockPb, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iproto.BlockPb.displayName = 'proto.iproto.BlockPb';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iproto.BlockPb.repeatedFields_ = [2];



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
proto.iproto.BlockPb.prototype.toObject = function(opt_includeInstance) {
  return proto.iproto.BlockPb.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iproto.BlockPb} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.BlockPb.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.iproto.BlockHeaderPb.toObject(includeInstance, f),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.iproto.ActionPb.toObject, includeInstance),
    footer: (f = msg.getFooter()) && proto.iproto.BlockFooterPb.toObject(includeInstance, f)
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
 * @return {!proto.iproto.BlockPb}
 */
proto.iproto.BlockPb.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iproto.BlockPb;
  return proto.iproto.BlockPb.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iproto.BlockPb} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iproto.BlockPb}
 */
proto.iproto.BlockPb.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iproto.BlockHeaderPb;
      reader.readMessage(value,proto.iproto.BlockHeaderPb.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.iproto.ActionPb;
      reader.readMessage(value,proto.iproto.ActionPb.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 3:
      var value = new proto.iproto.BlockFooterPb;
      reader.readMessage(value,proto.iproto.BlockFooterPb.deserializeBinaryFromReader);
      msg.setFooter(value);
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
proto.iproto.BlockPb.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iproto.BlockPb.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iproto.BlockPb} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iproto.BlockPb.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.iproto.BlockHeaderPb.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.iproto.ActionPb.serializeBinaryToWriter
    );
  }
  f = message.getFooter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.iproto.BlockFooterPb.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockHeaderPb header = 1;
 * @return {?proto.iproto.BlockHeaderPb}
 */
proto.iproto.BlockPb.prototype.getHeader = function() {
  return /** @type{?proto.iproto.BlockHeaderPb} */ (
    jspb.Message.getWrapperField(this, proto.iproto.BlockHeaderPb, 1));
};


/** @param {?proto.iproto.BlockHeaderPb|undefined} value */
proto.iproto.BlockPb.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.iproto.BlockPb.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iproto.BlockPb.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ActionPb actions = 2;
 * @return {!Array<!proto.iproto.ActionPb>}
 */
proto.iproto.BlockPb.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.iproto.ActionPb>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iproto.ActionPb, 2));
};


/** @param {!Array<!proto.iproto.ActionPb>} value */
proto.iproto.BlockPb.prototype.setActionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.iproto.ActionPb=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iproto.ActionPb}
 */
proto.iproto.BlockPb.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iproto.ActionPb, opt_index);
};


proto.iproto.BlockPb.prototype.clearActionsList = function() {
  this.setActionsList([]);
};


/**
 * optional BlockFooterPb footer = 3;
 * @return {?proto.iproto.BlockFooterPb}
 */
proto.iproto.BlockPb.prototype.getFooter = function() {
  return /** @type{?proto.iproto.BlockFooterPb} */ (
    jspb.Message.getWrapperField(this, proto.iproto.BlockFooterPb, 3));
};


/** @param {?proto.iproto.BlockFooterPb|undefined} value */
proto.iproto.BlockPb.prototype.setFooter = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.iproto.BlockPb.prototype.clearFooter = function() {
  this.setFooter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.iproto.BlockPb.prototype.hasFooter = function() {
  return jspb.Message.getField(this, 3) != null;
};


