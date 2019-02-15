/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.iotexapi.GetBlockMetasResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.iproto.BlockMeta');


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
proto.iotexapi.GetBlockMetasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iotexapi.GetBlockMetasResponse.repeatedFields_, null);
};
goog.inherits(proto.iotexapi.GetBlockMetasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.iotexapi.GetBlockMetasResponse.displayName = 'proto.iotexapi.GetBlockMetasResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.iotexapi.GetBlockMetasResponse.repeatedFields_ = [1];



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
proto.iotexapi.GetBlockMetasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.iotexapi.GetBlockMetasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.iotexapi.GetBlockMetasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blkmetasList: jspb.Message.toObjectList(msg.getBlkmetasList(),
    proto.iproto.BlockMeta.toObject, includeInstance)
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
 * @return {!proto.iotexapi.GetBlockMetasResponse}
 */
proto.iotexapi.GetBlockMetasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iotexapi.GetBlockMetasResponse;
  return proto.iotexapi.GetBlockMetasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.iotexapi.GetBlockMetasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.iotexapi.GetBlockMetasResponse}
 */
proto.iotexapi.GetBlockMetasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.iproto.BlockMeta;
      reader.readMessage(value,proto.iproto.BlockMeta.deserializeBinaryFromReader);
      msg.addBlkmetas(value);
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
proto.iotexapi.GetBlockMetasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.iotexapi.GetBlockMetasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.iotexapi.GetBlockMetasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.iotexapi.GetBlockMetasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlkmetasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.iproto.BlockMeta.serializeBinaryToWriter
    );
  }
};


/**
 * repeated iproto.BlockMeta blkMetas = 1;
 * @return {!Array<!proto.iproto.BlockMeta>}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.getBlkmetasList = function() {
  return /** @type{!Array<!proto.iproto.BlockMeta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.iproto.BlockMeta, 1));
};


/** @param {!Array<!proto.iproto.BlockMeta>} value */
proto.iotexapi.GetBlockMetasResponse.prototype.setBlkmetasList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.iproto.BlockMeta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.iproto.BlockMeta}
 */
proto.iotexapi.GetBlockMetasResponse.prototype.addBlkmetas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iproto.BlockMeta, opt_index);
};


proto.iotexapi.GetBlockMetasResponse.prototype.clearBlkmetasList = function() {
  this.setBlkmetasList([]);
};


