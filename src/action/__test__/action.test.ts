import test from "ava";
import actionPb from "../../../protogen/proto/types/action_pb";
import { TEST_ACCOUNT } from "../../account/__test__/account.test";

test("TestAction_SerializationDeserialization", async t => {
  const tf = new actionPb.Transfer();
  tf.setAmount("456");
  tf.setRecipient(TEST_ACCOUNT.address);
  tf.setPayload(Buffer.from("hello world!"));
  const bytes = tf.serializeBinary();
  t.deepEqual(
    Buffer.from(bytes).toString("hex"),
    "0a033435361229696f313837777a703038766e686a6a706b79646e723937716c68386b683064706b6b797466616d386a1a0c68656c6c6f20776f726c6421"
  );
});
