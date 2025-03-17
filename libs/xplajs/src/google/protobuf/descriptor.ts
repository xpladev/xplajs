import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** The full set of known editions. */
export enum Edition {
  /** EDITION_UNKNOWN - A placeholder for an unknown edition value. */
  EDITION_UNKNOWN = 0,
  /**
   * EDITION_LEGACY - A placeholder edition for specifying default behaviors *before* a feature
   * was first introduced.  This is effectively an "infinite past".
   */
  EDITION_LEGACY = 900,
  /**
   * EDITION_PROTO2 - Legacy syntax "editions".  These pre-date editions, but behave much like
   * distinct editions.  These can't be used to specify the edition of proto
   * files, but feature definitions must supply proto2/proto3 defaults for
   * backwards compatibility.
   */
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  /**
   * EDITION_2023 - Editions that have been released.  The specific values are arbitrary and
   * should not be depended on, but they will always be time-ordered for easy
   * comparison.
   */
  EDITION_2023 = 1000,
  EDITION_2024 = 1001,
  /**
   * EDITION_1_TEST_ONLY - Placeholder editions for testing feature resolution.  These should not be
   * used or relied on outside of tests.
   */
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
  /**
   * EDITION_MAX - Placeholder for specifying unbounded edition support.  This should only
   * ever be used by plugins that can expect to never require any changes to
   * support a new edition.
   */
  EDITION_MAX = 2147483647,
  UNRECOGNIZED = -1,
}
export const EditionAmino = Edition;
export function editionFromJSON(object: any): Edition {
  switch (object) {
    case 0:
    case "EDITION_UNKNOWN":
      return Edition.EDITION_UNKNOWN;
    case 900:
    case "EDITION_LEGACY":
      return Edition.EDITION_LEGACY;
    case 998:
    case "EDITION_PROTO2":
      return Edition.EDITION_PROTO2;
    case 999:
    case "EDITION_PROTO3":
      return Edition.EDITION_PROTO3;
    case 1000:
    case "EDITION_2023":
      return Edition.EDITION_2023;
    case 1001:
    case "EDITION_2024":
      return Edition.EDITION_2024;
    case 1:
    case "EDITION_1_TEST_ONLY":
      return Edition.EDITION_1_TEST_ONLY;
    case 2:
    case "EDITION_2_TEST_ONLY":
      return Edition.EDITION_2_TEST_ONLY;
    case 99997:
    case "EDITION_99997_TEST_ONLY":
      return Edition.EDITION_99997_TEST_ONLY;
    case 99998:
    case "EDITION_99998_TEST_ONLY":
      return Edition.EDITION_99998_TEST_ONLY;
    case 99999:
    case "EDITION_99999_TEST_ONLY":
      return Edition.EDITION_99999_TEST_ONLY;
    case 2147483647:
    case "EDITION_MAX":
      return Edition.EDITION_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Edition.UNRECOGNIZED;
  }
}
export function editionToJSON(object: Edition): string {
  switch (object) {
    case Edition.EDITION_UNKNOWN:
      return "EDITION_UNKNOWN";
    case Edition.EDITION_LEGACY:
      return "EDITION_LEGACY";
    case Edition.EDITION_PROTO2:
      return "EDITION_PROTO2";
    case Edition.EDITION_PROTO3:
      return "EDITION_PROTO3";
    case Edition.EDITION_2023:
      return "EDITION_2023";
    case Edition.EDITION_2024:
      return "EDITION_2024";
    case Edition.EDITION_1_TEST_ONLY:
      return "EDITION_1_TEST_ONLY";
    case Edition.EDITION_2_TEST_ONLY:
      return "EDITION_2_TEST_ONLY";
    case Edition.EDITION_99997_TEST_ONLY:
      return "EDITION_99997_TEST_ONLY";
    case Edition.EDITION_99998_TEST_ONLY:
      return "EDITION_99998_TEST_ONLY";
    case Edition.EDITION_99999_TEST_ONLY:
      return "EDITION_99999_TEST_ONLY";
    case Edition.EDITION_MAX:
      return "EDITION_MAX";
    case Edition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The verification state of the extension range. */
export enum ExtensionRangeOptions_VerificationState {
  /** DECLARATION - All the extensions of the range must be declared. */
  DECLARATION = 0,
  UNVERIFIED = 1,
  UNRECOGNIZED = -1,
}
export const ExtensionRangeOptions_VerificationStateAmino = ExtensionRangeOptions_VerificationState;
export function extensionRangeOptions_VerificationStateFromJSON(object: any): ExtensionRangeOptions_VerificationState {
  switch (object) {
    case 0:
    case "DECLARATION":
      return ExtensionRangeOptions_VerificationState.DECLARATION;
    case 1:
    case "UNVERIFIED":
      return ExtensionRangeOptions_VerificationState.UNVERIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExtensionRangeOptions_VerificationState.UNRECOGNIZED;
  }
}
export function extensionRangeOptions_VerificationStateToJSON(object: ExtensionRangeOptions_VerificationState): string {
  switch (object) {
    case ExtensionRangeOptions_VerificationState.DECLARATION:
      return "DECLARATION";
    case ExtensionRangeOptions_VerificationState.UNVERIFIED:
      return "UNVERIFIED";
    case ExtensionRangeOptions_VerificationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported after google.protobuf. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.  In Editions, the group wire format
   * can be enabled via the `message_encoding` feature.
   */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Length-delimited aggregate. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_TypeAmino = FieldDescriptorProto_Type;
export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REPEATED = 3,
  /**
   * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
   * it's explicitly prohibited.  In Editions, the `field_presence` feature
   * can be used to get this behavior.
   */
  LABEL_REQUIRED = 2,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_LabelAmino = FieldDescriptorProto_Label;
export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - Generate complete code for parsing, serialization, */
  SPEED = 1,
  /** CODE_SIZE - etc. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}
export const FileOptions_OptimizeModeAmino = FileOptions_OptimizeMode;
export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  /**
   * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
   * "bytes". It indicates that in C++, the data should be stored in a Cord
   * instead of a string.  For very large strings, this may reduce memory
   * fragmentation. It may also allow better performance when parsing from a
   * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
   * alias the original buffer.
   */
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_CTypeAmino = FieldOptions_CType;
export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_JSTypeAmino = FieldOptions_JSType;
export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** If set to RETENTION_SOURCE, the option will be omitted from the binary. */
export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_OptionRetentionAmino = FieldOptions_OptionRetention;
export function fieldOptions_OptionRetentionFromJSON(object: any): FieldOptions_OptionRetention {
  switch (object) {
    case 0:
    case "RETENTION_UNKNOWN":
      return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
    case 1:
    case "RETENTION_RUNTIME":
      return FieldOptions_OptionRetention.RETENTION_RUNTIME;
    case 2:
    case "RETENTION_SOURCE":
      return FieldOptions_OptionRetention.RETENTION_SOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionRetention.UNRECOGNIZED;
  }
}
export function fieldOptions_OptionRetentionToJSON(object: FieldOptions_OptionRetention): string {
  switch (object) {
    case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
      return "RETENTION_UNKNOWN";
    case FieldOptions_OptionRetention.RETENTION_RUNTIME:
      return "RETENTION_RUNTIME";
    case FieldOptions_OptionRetention.RETENTION_SOURCE:
      return "RETENTION_SOURCE";
    case FieldOptions_OptionRetention.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity.
 */
export enum FieldOptions_OptionTargetType {
  TARGET_TYPE_UNKNOWN = 0,
  TARGET_TYPE_FILE = 1,
  TARGET_TYPE_EXTENSION_RANGE = 2,
  TARGET_TYPE_MESSAGE = 3,
  TARGET_TYPE_FIELD = 4,
  TARGET_TYPE_ONEOF = 5,
  TARGET_TYPE_ENUM = 6,
  TARGET_TYPE_ENUM_ENTRY = 7,
  TARGET_TYPE_SERVICE = 8,
  TARGET_TYPE_METHOD = 9,
  UNRECOGNIZED = -1,
}
export const FieldOptions_OptionTargetTypeAmino = FieldOptions_OptionTargetType;
export function fieldOptions_OptionTargetTypeFromJSON(object: any): FieldOptions_OptionTargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNKNOWN":
      return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
    case 1:
    case "TARGET_TYPE_FILE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
    case 2:
    case "TARGET_TYPE_EXTENSION_RANGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
    case 3:
    case "TARGET_TYPE_MESSAGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
    case 4:
    case "TARGET_TYPE_FIELD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
    case 5:
    case "TARGET_TYPE_ONEOF":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
    case 6:
    case "TARGET_TYPE_ENUM":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
    case 7:
    case "TARGET_TYPE_ENUM_ENTRY":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
    case 8:
    case "TARGET_TYPE_SERVICE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
    case 9:
    case "TARGET_TYPE_METHOD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionTargetType.UNRECOGNIZED;
  }
}
export function fieldOptions_OptionTargetTypeToJSON(object: FieldOptions_OptionTargetType): string {
  switch (object) {
    case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
      return "TARGET_TYPE_UNKNOWN";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
      return "TARGET_TYPE_FILE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
      return "TARGET_TYPE_EXTENSION_RANGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
      return "TARGET_TYPE_MESSAGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
      return "TARGET_TYPE_FIELD";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
      return "TARGET_TYPE_ONEOF";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
      return "TARGET_TYPE_ENUM";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
      return "TARGET_TYPE_ENUM_ENTRY";
    case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
      return "TARGET_TYPE_SERVICE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
      return "TARGET_TYPE_METHOD";
    case FieldOptions_OptionTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}
export const MethodOptions_IdempotencyLevelAmino = MethodOptions_IdempotencyLevel;
export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_FieldPresence {
  FIELD_PRESENCE_UNKNOWN = 0,
  EXPLICIT = 1,
  IMPLICIT = 2,
  LEGACY_REQUIRED = 3,
  UNRECOGNIZED = -1,
}
export const FeatureSet_FieldPresenceAmino = FeatureSet_FieldPresence;
export function featureSet_FieldPresenceFromJSON(object: any): FeatureSet_FieldPresence {
  switch (object) {
    case 0:
    case "FIELD_PRESENCE_UNKNOWN":
      return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
    case 1:
    case "EXPLICIT":
      return FeatureSet_FieldPresence.EXPLICIT;
    case 2:
    case "IMPLICIT":
      return FeatureSet_FieldPresence.IMPLICIT;
    case 3:
    case "LEGACY_REQUIRED":
      return FeatureSet_FieldPresence.LEGACY_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_FieldPresence.UNRECOGNIZED;
  }
}
export function featureSet_FieldPresenceToJSON(object: FeatureSet_FieldPresence): string {
  switch (object) {
    case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
      return "FIELD_PRESENCE_UNKNOWN";
    case FeatureSet_FieldPresence.EXPLICIT:
      return "EXPLICIT";
    case FeatureSet_FieldPresence.IMPLICIT:
      return "IMPLICIT";
    case FeatureSet_FieldPresence.LEGACY_REQUIRED:
      return "LEGACY_REQUIRED";
    case FeatureSet_FieldPresence.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
  UNRECOGNIZED = -1,
}
export const FeatureSet_EnumTypeAmino = FeatureSet_EnumType;
export function featureSet_EnumTypeFromJSON(object: any): FeatureSet_EnumType {
  switch (object) {
    case 0:
    case "ENUM_TYPE_UNKNOWN":
      return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
    case 1:
    case "OPEN":
      return FeatureSet_EnumType.OPEN;
    case 2:
    case "CLOSED":
      return FeatureSet_EnumType.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_EnumType.UNRECOGNIZED;
  }
}
export function featureSet_EnumTypeToJSON(object: FeatureSet_EnumType): string {
  switch (object) {
    case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
      return "ENUM_TYPE_UNKNOWN";
    case FeatureSet_EnumType.OPEN:
      return "OPEN";
    case FeatureSet_EnumType.CLOSED:
      return "CLOSED";
    case FeatureSet_EnumType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
  UNRECOGNIZED = -1,
}
export const FeatureSet_RepeatedFieldEncodingAmino = FeatureSet_RepeatedFieldEncoding;
export function featureSet_RepeatedFieldEncodingFromJSON(object: any): FeatureSet_RepeatedFieldEncoding {
  switch (object) {
    case 0:
    case "REPEATED_FIELD_ENCODING_UNKNOWN":
      return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
    case 1:
    case "PACKED":
      return FeatureSet_RepeatedFieldEncoding.PACKED;
    case 2:
    case "EXPANDED":
      return FeatureSet_RepeatedFieldEncoding.EXPANDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED;
  }
}
export function featureSet_RepeatedFieldEncodingToJSON(object: FeatureSet_RepeatedFieldEncoding): string {
  switch (object) {
    case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
      return "REPEATED_FIELD_ENCODING_UNKNOWN";
    case FeatureSet_RepeatedFieldEncoding.PACKED:
      return "PACKED";
    case FeatureSet_RepeatedFieldEncoding.EXPANDED:
      return "EXPANDED";
    case FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  VERIFY = 2,
  NONE = 3,
  UNRECOGNIZED = -1,
}
export const FeatureSet_Utf8ValidationAmino = FeatureSet_Utf8Validation;
export function featureSet_Utf8ValidationFromJSON(object: any): FeatureSet_Utf8Validation {
  switch (object) {
    case 0:
    case "UTF8_VALIDATION_UNKNOWN":
      return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
    case 2:
    case "VERIFY":
      return FeatureSet_Utf8Validation.VERIFY;
    case 3:
    case "NONE":
      return FeatureSet_Utf8Validation.NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_Utf8Validation.UNRECOGNIZED;
  }
}
export function featureSet_Utf8ValidationToJSON(object: FeatureSet_Utf8Validation): string {
  switch (object) {
    case FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN:
      return "UTF8_VALIDATION_UNKNOWN";
    case FeatureSet_Utf8Validation.VERIFY:
      return "VERIFY";
    case FeatureSet_Utf8Validation.NONE:
      return "NONE";
    case FeatureSet_Utf8Validation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
  UNRECOGNIZED = -1,
}
export const FeatureSet_MessageEncodingAmino = FeatureSet_MessageEncoding;
export function featureSet_MessageEncodingFromJSON(object: any): FeatureSet_MessageEncoding {
  switch (object) {
    case 0:
    case "MESSAGE_ENCODING_UNKNOWN":
      return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
    case 1:
    case "LENGTH_PREFIXED":
      return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
    case 2:
    case "DELIMITED":
      return FeatureSet_MessageEncoding.DELIMITED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_MessageEncoding.UNRECOGNIZED;
  }
}
export function featureSet_MessageEncodingToJSON(object: FeatureSet_MessageEncoding): string {
  switch (object) {
    case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
      return "MESSAGE_ENCODING_UNKNOWN";
    case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
      return "LENGTH_PREFIXED";
    case FeatureSet_MessageEncoding.DELIMITED:
      return "DELIMITED";
    case FeatureSet_MessageEncoding.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
  UNRECOGNIZED = -1,
}
export const FeatureSet_JsonFormatAmino = FeatureSet_JsonFormat;
export function featureSet_JsonFormatFromJSON(object: any): FeatureSet_JsonFormat {
  switch (object) {
    case 0:
    case "JSON_FORMAT_UNKNOWN":
      return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
    case 1:
    case "ALLOW":
      return FeatureSet_JsonFormat.ALLOW;
    case 2:
    case "LEGACY_BEST_EFFORT":
      return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FeatureSet_JsonFormat.UNRECOGNIZED;
  }
}
export function featureSet_JsonFormatToJSON(object: FeatureSet_JsonFormat): string {
  switch (object) {
    case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
      return "JSON_FORMAT_UNKNOWN";
    case FeatureSet_JsonFormat.ALLOW:
      return "ALLOW";
    case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
      return "LEGACY_BEST_EFFORT";
    case FeatureSet_JsonFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export enum GeneratedCodeInfo_Annotation_Semantic {
  /** NONE - There is no effect or the effect is indescribable. */
  NONE = 0,
  /** SET - The element is set or otherwise mutated. */
  SET = 1,
  /** ALIAS - An alias to the element is returned. */
  ALIAS = 2,
  UNRECOGNIZED = -1,
}
export const GeneratedCodeInfo_Annotation_SemanticAmino = GeneratedCodeInfo_Annotation_Semantic;
export function generatedCodeInfo_Annotation_SemanticFromJSON(object: any): GeneratedCodeInfo_Annotation_Semantic {
  switch (object) {
    case 0:
    case "NONE":
      return GeneratedCodeInfo_Annotation_Semantic.NONE;
    case 1:
    case "SET":
      return GeneratedCodeInfo_Annotation_Semantic.SET;
    case 2:
    case "ALIAS":
      return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
  }
}
export function generatedCodeInfo_Annotation_SemanticToJSON(object: GeneratedCodeInfo_Annotation_Semantic): string {
  switch (object) {
    case GeneratedCodeInfo_Annotation_Semantic.NONE:
      return "NONE";
    case GeneratedCodeInfo_Annotation_Semantic.SET:
      return "SET";
    case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
      return "ALIAS";
    case GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}
export interface FileDescriptorSetProtoMsg {
  type_url: "/google.protobuf.FileDescriptorSet";
  value: Uint8Array;
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSetAmino {
  file: FileDescriptorProtoAmino[];
}
export interface FileDescriptorSetAminoMsg {
  type: "/google.protobuf.FileDescriptorSet";
  value: FileDescriptorSetAmino;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  /** e.g. "foo", "foo.bar", etc. */
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency: number[];
  /** All top-level definitions in this file. */
  message_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options?: FileOptions;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info?: SourceCodeInfo;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2", "proto3", and "editions".
   * 
   * If `edition` is present, this value must be "editions".
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  syntax: string;
  /**
   * The edition of the proto file.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  edition: Edition;
}
export interface FileDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.FileDescriptorProto";
  value: Uint8Array;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProtoAmino {
  /** file name, relative to root of source tree */
  name: string;
  /** e.g. "foo", "foo.bar", etc. */
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency: number[];
  /** All top-level definitions in this file. */
  message_type: DescriptorProtoAmino[];
  enum_type: EnumDescriptorProtoAmino[];
  service: ServiceDescriptorProtoAmino[];
  extension: FieldDescriptorProtoAmino[];
  options?: FileOptionsAmino;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info?: SourceCodeInfoAmino;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2", "proto3", and "editions".
   * 
   * If `edition` is present, this value must be "editions".
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  syntax: string;
  /**
   * The edition of the proto file.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  edition: Edition;
}
export interface FileDescriptorProtoAminoMsg {
  type: "/google.protobuf.FileDescriptorProto";
  value: FileDescriptorProtoAmino;
}
/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nested_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  extension_range: DescriptorProto_ExtensionRange[];
  oneof_decl: OneofDescriptorProto[];
  options?: MessageOptions;
  reserved_range: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name: string[];
}
export interface DescriptorProtoProtoMsg {
  type_url: "/google.protobuf.DescriptorProto";
  value: Uint8Array;
}
/** Describes a message type. */
export interface DescriptorProtoAmino {
  name: string;
  field: FieldDescriptorProtoAmino[];
  extension: FieldDescriptorProtoAmino[];
  nested_type: DescriptorProtoAmino[];
  enum_type: EnumDescriptorProtoAmino[];
  extension_range: DescriptorProto_ExtensionRangeAmino[];
  oneof_decl: OneofDescriptorProtoAmino[];
  options?: MessageOptionsAmino;
  reserved_range: DescriptorProto_ReservedRangeAmino[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name: string[];
}
export interface DescriptorProtoAminoMsg {
  type: "/google.protobuf.DescriptorProto";
  value: DescriptorProtoAmino;
}
export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptions;
}
export interface DescriptorProto_ExtensionRangeProtoMsg {
  type_url: "/google.protobuf.ExtensionRange";
  value: Uint8Array;
}
export interface DescriptorProto_ExtensionRangeAmino {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptionsAmino;
}
export interface DescriptorProto_ExtensionRangeAminoMsg {
  type: "/google.protobuf.ExtensionRange";
  value: DescriptorProto_ExtensionRangeAmino;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
export interface DescriptorProto_ReservedRangeProtoMsg {
  type_url: "/google.protobuf.ReservedRange";
  value: Uint8Array;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRangeAmino {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
export interface DescriptorProto_ReservedRangeAminoMsg {
  type: "/google.protobuf.ReservedRange";
  value: DescriptorProto_ReservedRangeAmino;
}
export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
  /**
   * For external users: DO NOT USE. We are in the process of open sourcing
   * extension declaration and executing internal cleanups before it can be
   * used externally.
   */
  declaration: ExtensionRangeOptions_Declaration[];
  /** Any features defined in the specific edition. */
  features?: FeatureSet;
  /**
   * The verification state of the range.
   * TODO: flip the default to DECLARATION once all empty ranges
   * are marked as UNVERIFIED.
   */
  verification: ExtensionRangeOptions_VerificationState;
}
export interface ExtensionRangeOptionsProtoMsg {
  type_url: "/google.protobuf.ExtensionRangeOptions";
  value: Uint8Array;
}
export interface ExtensionRangeOptionsAmino {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
  /**
   * For external users: DO NOT USE. We are in the process of open sourcing
   * extension declaration and executing internal cleanups before it can be
   * used externally.
   */
  declaration: ExtensionRangeOptions_DeclarationAmino[];
  /** Any features defined in the specific edition. */
  features?: FeatureSetAmino;
  /**
   * The verification state of the range.
   * TODO: flip the default to DECLARATION once all empty ranges
   * are marked as UNVERIFIED.
   */
  verification: ExtensionRangeOptions_VerificationState;
}
export interface ExtensionRangeOptionsAminoMsg {
  type: "/google.protobuf.ExtensionRangeOptions";
  value: ExtensionRangeOptionsAmino;
}
export interface ExtensionRangeOptions_Declaration {
  /** The extension number declared within the extension range. */
  number: number;
  /**
   * The fully-qualified name of the extension field. There must be a leading
   * dot in front of the full name.
   */
  full_name: string;
  /**
   * The fully-qualified type name of the extension field. Unlike
   * Metadata.type, Declaration.type must have a leading dot for messages
   * and enums.
   */
  type: string;
  /**
   * If true, indicates that the number is reserved in the extension range,
   * and any extension field with the number will fail to compile. Set this
   * when a declared extension field is deleted.
   */
  reserved: boolean;
  /**
   * If true, indicates that the extension must be defined as repeated.
   * Otherwise the extension must be defined as optional.
   */
  repeated: boolean;
}
export interface ExtensionRangeOptions_DeclarationProtoMsg {
  type_url: "/google.protobuf.Declaration";
  value: Uint8Array;
}
export interface ExtensionRangeOptions_DeclarationAmino {
  /** The extension number declared within the extension range. */
  number: number;
  /**
   * The fully-qualified name of the extension field. There must be a leading
   * dot in front of the full name.
   */
  full_name: string;
  /**
   * The fully-qualified type name of the extension field. Unlike
   * Metadata.type, Declaration.type must have a leading dot for messages
   * and enums.
   */
  type: string;
  /**
   * If true, indicates that the number is reserved in the extension range,
   * and any extension field with the number will fail to compile. Set this
   * when a declared extension field is deleted.
   */
  reserved: boolean;
  /**
   * If true, indicates that the extension must be defined as repeated.
   * Otherwise the extension must be defined as optional.
   */
  repeated: boolean;
}
export interface ExtensionRangeOptions_DeclarationAminoMsg {
  type: "/google.protobuf.Declaration";
  value: ExtensionRangeOptions_DeclarationAmino;
}
/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   */
  default_value: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name: string;
  options?: FieldOptions;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   * 
   * When proto3_optional is true, this field must belong to a oneof to signal
   * to old proto3 clients that presence is tracked for this field. This oneof
   * is known as a "synthetic" oneof, and this field must be its sole member
   * (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
   * exist in the descriptor only, and do not generate any API. Synthetic oneofs
   * must be ordered after all "real" oneofs.
   * 
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   * 
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3_optional: boolean;
}
export interface FieldDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.FieldDescriptorProto";
  value: Uint8Array;
}
/** Describes a field within a message. */
export interface FieldDescriptorProtoAmino {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   */
  default_value: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name: string;
  options?: FieldOptionsAmino;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   * 
   * When proto3_optional is true, this field must belong to a oneof to signal
   * to old proto3 clients that presence is tracked for this field. This oneof
   * is known as a "synthetic" oneof, and this field must be its sole member
   * (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs
   * exist in the descriptor only, and do not generate any API. Synthetic oneofs
   * must be ordered after all "real" oneofs.
   * 
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   * 
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3_optional: boolean;
}
export interface FieldDescriptorProtoAminoMsg {
  type: "/google.protobuf.FieldDescriptorProto";
  value: FieldDescriptorProtoAmino;
}
/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options?: OneofOptions;
}
export interface OneofDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.OneofDescriptorProto";
  value: Uint8Array;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoAmino {
  name: string;
  options?: OneofOptionsAmino;
}
export interface OneofDescriptorProtoAminoMsg {
  type: "/google.protobuf.OneofDescriptorProto";
  value: OneofDescriptorProtoAmino;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options?: EnumOptions;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name: string[];
}
export interface EnumDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.EnumDescriptorProto";
  value: Uint8Array;
}
/** Describes an enum type. */
export interface EnumDescriptorProtoAmino {
  name: string;
  value: EnumValueDescriptorProtoAmino[];
  options?: EnumOptionsAmino;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range: EnumDescriptorProto_EnumReservedRangeAmino[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name: string[];
}
export interface EnumDescriptorProtoAminoMsg {
  type: "/google.protobuf.EnumDescriptorProto";
  value: EnumDescriptorProtoAmino;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
export interface EnumDescriptorProto_EnumReservedRangeProtoMsg {
  type_url: "/google.protobuf.EnumReservedRange";
  value: Uint8Array;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRangeAmino {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
export interface EnumDescriptorProto_EnumReservedRangeAminoMsg {
  type: "/google.protobuf.EnumReservedRange";
  value: EnumDescriptorProto_EnumReservedRangeAmino;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options?: EnumValueOptions;
}
export interface EnumValueDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.EnumValueDescriptorProto";
  value: Uint8Array;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoAmino {
  name: string;
  number: number;
  options?: EnumValueOptionsAmino;
}
export interface EnumValueDescriptorProtoAminoMsg {
  type: "/google.protobuf.EnumValueDescriptorProto";
  value: EnumValueDescriptorProtoAmino;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options?: ServiceOptions;
}
export interface ServiceDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.ServiceDescriptorProto";
  value: Uint8Array;
}
/** Describes a service. */
export interface ServiceDescriptorProtoAmino {
  name: string;
  method: MethodDescriptorProtoAmino[];
  options?: ServiceOptionsAmino;
}
export interface ServiceDescriptorProtoAminoMsg {
  type: "/google.protobuf.ServiceDescriptorProto";
  value: ServiceDescriptorProtoAmino;
}
/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type: string;
  output_type: string;
  options?: MethodOptions;
  /** Identifies if client streams multiple client messages */
  client_streaming: boolean;
  /** Identifies if server streams multiple server messages */
  server_streaming: boolean;
}
export interface MethodDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.MethodDescriptorProto";
  value: Uint8Array;
}
/** Describes a method of a service. */
export interface MethodDescriptorProtoAmino {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type: string;
  output_type: string;
  options?: MethodOptionsAmino;
  /** Identifies if client streams multiple client messages */
  client_streaming: boolean;
  /** Identifies if server streams multiple server messages */
  server_streaming: boolean;
}
export interface MethodDescriptorProtoAminoMsg {
  type: "/google.protobuf.MethodDescriptorProto";
  value: MethodDescriptorProtoAmino;
}
export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package: string;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  java_outer_classname: string;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files: boolean;
  /** This option does nothing. */
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  /**
   * A proto2 file can set this to true to opt in to UTF-8 checking for Java,
   * which will throw an exception if invalid UTF-8 is parsed from the wire or
   * assigned to a string field.
   * 
   * TODO: clarify exactly what kinds of field types this option
   * applies to, and update these docs accordingly.
   * 
   * Proto3 files already perform these checks. Setting the option explicitly to
   * false has no effect: it cannot be used to opt proto3 files out of UTF-8
   * checks.
   */
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package: string;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option: UninterpretedOption[];
}
export interface FileOptionsProtoMsg {
  type_url: "/google.protobuf.FileOptions";
  value: Uint8Array;
}
export interface FileOptionsAmino {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package: string;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  java_outer_classname: string;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files: boolean;
  /** This option does nothing. */
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  /**
   * A proto2 file can set this to true to opt in to UTF-8 checking for Java,
   * which will throw an exception if invalid UTF-8 is parsed from the wire or
   * assigned to a string field.
   * 
   * TODO: clarify exactly what kinds of field types this option
   * applies to, and update these docs accordingly.
   * 
   * Proto3 files already perform these checks. Setting the option explicitly to
   * false has no effect: it cannot be used to opt proto3 files out of UTF-8
   * checks.
   */
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package: string;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface FileOptionsAminoMsg {
  type: "/google.protobuf.FileOptions";
  value: FileOptionsAmino;
}
export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  map_entry: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * 
   * This should only be used as a temporary measure against broken builds due
   * to the change in behavior for JSON field name conflicts.
   * 
   * TODO This is legacy behavior we plan to remove once downstream
   * teams have had time to migrate.
   */
  /** @deprecated */
  deprecated_legacy_json_field_conflicts: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface MessageOptionsProtoMsg {
  type_url: "/google.protobuf.MessageOptions";
  value: Uint8Array;
}
export interface MessageOptionsAmino {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  map_entry: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * 
   * This should only be used as a temporary measure against broken builds due
   * to the change in behavior for JSON field name conflicts.
   * 
   * TODO This is legacy behavior we plan to remove once downstream
   * teams have had time to migrate.
   */
  /** @deprecated */
  deprecated_legacy_json_field_conflicts: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface MessageOptionsAminoMsg {
  type: "/google.protobuf.MessageOptions";
  value: MessageOptionsAmino;
}
export interface FieldOptions {
  /**
   * NOTE: ctype is deprecated. Use `features.(pb.cpp).string_type` instead.
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is only implemented to support use of
   * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
   * type "bytes" in the open source release.
   * TODO: make ctype actually deprecated.
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.  This option is prohibited in
   * Editions, but the `repeated_field_encoding` feature can be used to control
   * the behavior.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * Note that lazy message fields are still eagerly verified to check
   * ill-formed wireformat or missing required fields. Calling IsInitialized()
   * on the outer message would fail if the inner message has missing required
   * fields. Failed verification would result in parsing failure (except when
   * uninitialized messages are acceptable).
   */
  lazy: boolean;
  /**
   * unverified_lazy does no correctness checks on the byte stream. This should
   * only be used where lazy with verification is prohibitive for performance
   * reasons.
   */
  unverified_lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /**
   * Indicate that the field value should not be printed out when using debug
   * formats, e.g. when the field contains sensitive credentials.
   */
  debug_redact: boolean;
  retention: FieldOptions_OptionRetention;
  targets: FieldOptions_OptionTargetType[];
  edition_defaults: FieldOptions_EditionDefault[];
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  feature_support?: FieldOptions_FeatureSupport;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface FieldOptionsProtoMsg {
  type_url: "/google.protobuf.FieldOptions";
  value: Uint8Array;
}
export interface FieldOptionsAmino {
  /**
   * NOTE: ctype is deprecated. Use `features.(pb.cpp).string_type` instead.
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is only implemented to support use of
   * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
   * type "bytes" in the open source release.
   * TODO: make ctype actually deprecated.
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.  This option is prohibited in
   * Editions, but the `repeated_field_encoding` feature can be used to control
   * the behavior.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * Note that lazy message fields are still eagerly verified to check
   * ill-formed wireformat or missing required fields. Calling IsInitialized()
   * on the outer message would fail if the inner message has missing required
   * fields. Failed verification would result in parsing failure (except when
   * uninitialized messages are acceptable).
   */
  lazy: boolean;
  /**
   * unverified_lazy does no correctness checks on the byte stream. This should
   * only be used where lazy with verification is prohibitive for performance
   * reasons.
   */
  unverified_lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /**
   * Indicate that the field value should not be printed out when using debug
   * formats, e.g. when the field contains sensitive credentials.
   */
  debug_redact: boolean;
  retention: FieldOptions_OptionRetention;
  targets: FieldOptions_OptionTargetType[];
  edition_defaults: FieldOptions_EditionDefaultAmino[];
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  feature_support?: FieldOptions_FeatureSupportAmino;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface FieldOptionsAminoMsg {
  type: "/google.protobuf.FieldOptions";
  value: FieldOptionsAmino;
}
export interface FieldOptions_EditionDefault {
  edition: Edition;
  /** Textproto value. */
  value: string;
}
export interface FieldOptions_EditionDefaultProtoMsg {
  type_url: "/google.protobuf.EditionDefault";
  value: Uint8Array;
}
export interface FieldOptions_EditionDefaultAmino {
  edition: Edition;
  /** Textproto value. */
  value: string;
}
export interface FieldOptions_EditionDefaultAminoMsg {
  type: "/google.protobuf.EditionDefault";
  value: FieldOptions_EditionDefaultAmino;
}
/** Information about the support window of a feature. */
export interface FieldOptions_FeatureSupport {
  /**
   * The edition that this feature was first available in.  In editions
   * earlier than this one, the default assigned to EDITION_LEGACY will be
   * used, and proto files will not be able to override it.
   */
  edition_introduced: Edition;
  /**
   * The edition this feature becomes deprecated in.  Using this after this
   * edition may trigger warnings.
   */
  edition_deprecated: Edition;
  /**
   * The deprecation warning text if this feature is used after the edition it
   * was marked deprecated in.
   */
  deprecation_warning: string;
  /**
   * The edition this feature is no longer available in.  In editions after
   * this one, the last default assigned will be used, and proto files will
   * not be able to override it.
   */
  edition_removed: Edition;
}
export interface FieldOptions_FeatureSupportProtoMsg {
  type_url: "/google.protobuf.FeatureSupport";
  value: Uint8Array;
}
/** Information about the support window of a feature. */
export interface FieldOptions_FeatureSupportAmino {
  /**
   * The edition that this feature was first available in.  In editions
   * earlier than this one, the default assigned to EDITION_LEGACY will be
   * used, and proto files will not be able to override it.
   */
  edition_introduced: Edition;
  /**
   * The edition this feature becomes deprecated in.  Using this after this
   * edition may trigger warnings.
   */
  edition_deprecated: Edition;
  /**
   * The deprecation warning text if this feature is used after the edition it
   * was marked deprecated in.
   */
  deprecation_warning: string;
  /**
   * The edition this feature is no longer available in.  In editions after
   * this one, the last default assigned will be used, and proto files will
   * not be able to override it.
   */
  edition_removed: Edition;
}
export interface FieldOptions_FeatureSupportAminoMsg {
  type: "/google.protobuf.FeatureSupport";
  value: FieldOptions_FeatureSupportAmino;
}
export interface OneofOptions {
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface OneofOptionsProtoMsg {
  type_url: "/google.protobuf.OneofOptions";
  value: Uint8Array;
}
export interface OneofOptionsAmino {
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface OneofOptionsAminoMsg {
  type: "/google.protobuf.OneofOptions";
  value: OneofOptionsAmino;
}
export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * TODO Remove this legacy behavior once downstream teams have
   * had time to migrate.
   */
  /** @deprecated */
  deprecated_legacy_json_field_conflicts: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface EnumOptionsProtoMsg {
  type_url: "/google.protobuf.EnumOptions";
  value: Uint8Array;
}
export interface EnumOptionsAmino {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * TODO Remove this legacy behavior once downstream teams have
   * had time to migrate.
   */
  /** @deprecated */
  deprecated_legacy_json_field_conflicts: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface EnumOptionsAminoMsg {
  type: "/google.protobuf.EnumOptions";
  value: EnumOptionsAmino;
}
export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /**
   * Indicate that fields annotated with this enum value should not be printed
   * out when using debug formats, e.g. when the field contains sensitive
   * credentials.
   */
  debug_redact: boolean;
  /** Information about the support window of a feature value. */
  feature_support?: FieldOptions_FeatureSupport;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface EnumValueOptionsProtoMsg {
  type_url: "/google.protobuf.EnumValueOptions";
  value: Uint8Array;
}
export interface EnumValueOptionsAmino {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /**
   * Indicate that fields annotated with this enum value should not be printed
   * out when using debug formats, e.g. when the field contains sensitive
   * credentials.
   */
  debug_redact: boolean;
  /** Information about the support window of a feature value. */
  feature_support?: FieldOptions_FeatureSupportAmino;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface EnumValueOptionsAminoMsg {
  type: "/google.protobuf.EnumValueOptions";
  value: EnumValueOptionsAmino;
}
export interface ServiceOptions {
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface ServiceOptionsProtoMsg {
  type_url: "/google.protobuf.ServiceOptions";
  value: Uint8Array;
}
export interface ServiceOptionsAmino {
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface ServiceOptionsAminoMsg {
  type: "/google.protobuf.ServiceOptions";
  value: ServiceOptionsAmino;
}
export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSet;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface MethodOptionsProtoMsg {
  type_url: "/google.protobuf.MethodOptions";
  value: Uint8Array;
}
export interface MethodOptionsAmino {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  /**
   * Any features defined in the specific edition.
   * WARNING: This field should only be used by protobuf plugins or special
   * cases like the proto compiler. Other uses are discouraged and
   * developers should rely on the protoreflect APIs for their client language.
   */
  features?: FeatureSetAmino;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface MethodOptionsAminoMsg {
  type: "/google.protobuf.MethodOptions";
  value: MethodOptionsAmino;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value: string;
  positive_int_value: bigint;
  negative_int_value: bigint;
  double_value: number;
  string_value: Uint8Array;
  aggregate_value: string;
}
export interface UninterpretedOptionProtoMsg {
  type_url: "/google.protobuf.UninterpretedOption";
  value: Uint8Array;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOptionAmino {
  name: UninterpretedOption_NamePartAmino[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value: string;
  positive_int_value: string;
  negative_int_value: string;
  double_value: number;
  string_value: string;
  aggregate_value: string;
}
export interface UninterpretedOptionAminoMsg {
  type: "/google.protobuf.UninterpretedOption";
  value: UninterpretedOptionAmino;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePart {
  name_part: string;
  is_extension: boolean;
}
export interface UninterpretedOption_NamePartProtoMsg {
  type_url: "/google.protobuf.NamePart";
  value: Uint8Array;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePartAmino {
  name_part: string;
  is_extension: boolean;
}
export interface UninterpretedOption_NamePartAminoMsg {
  type: "/google.protobuf.NamePart";
  value: UninterpretedOption_NamePartAmino;
}
/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 */
export interface FeatureSet {
  field_presence: FeatureSet_FieldPresence;
  enum_type: FeatureSet_EnumType;
  repeated_field_encoding: FeatureSet_RepeatedFieldEncoding;
  utf8_validation: FeatureSet_Utf8Validation;
  message_encoding: FeatureSet_MessageEncoding;
  json_format: FeatureSet_JsonFormat;
}
export interface FeatureSetProtoMsg {
  type_url: "/google.protobuf.FeatureSet";
  value: Uint8Array;
}
/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 */
export interface FeatureSetAmino {
  field_presence: FeatureSet_FieldPresence;
  enum_type: FeatureSet_EnumType;
  repeated_field_encoding: FeatureSet_RepeatedFieldEncoding;
  utf8_validation: FeatureSet_Utf8Validation;
  message_encoding: FeatureSet_MessageEncoding;
  json_format: FeatureSet_JsonFormat;
}
export interface FeatureSetAminoMsg {
  type: "/google.protobuf.FeatureSet";
  value: FeatureSetAmino;
}
/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 */
export interface FeatureSetDefaults {
  defaults: FeatureSetDefaults_FeatureSetEditionDefault[];
  /**
   * The minimum supported edition (inclusive) when this was constructed.
   * Editions before this will not have defaults.
   */
  minimum_edition: Edition;
  /**
   * The maximum known edition (inclusive) when this was constructed. Editions
   * after this will not have reliable defaults.
   */
  maximum_edition: Edition;
}
export interface FeatureSetDefaultsProtoMsg {
  type_url: "/google.protobuf.FeatureSetDefaults";
  value: Uint8Array;
}
/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 */
export interface FeatureSetDefaultsAmino {
  defaults: FeatureSetDefaults_FeatureSetEditionDefaultAmino[];
  /**
   * The minimum supported edition (inclusive) when this was constructed.
   * Editions before this will not have defaults.
   */
  minimum_edition: Edition;
  /**
   * The maximum known edition (inclusive) when this was constructed. Editions
   * after this will not have reliable defaults.
   */
  maximum_edition: Edition;
}
export interface FeatureSetDefaultsAminoMsg {
  type: "/google.protobuf.FeatureSetDefaults";
  value: FeatureSetDefaultsAmino;
}
/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 */
export interface FeatureSetDefaults_FeatureSetEditionDefault {
  edition: Edition;
  /** Defaults of features that can be overridden in this edition. */
  overridable_features?: FeatureSet;
  /** Defaults of features that can't be overridden in this edition. */
  fixed_features?: FeatureSet;
}
export interface FeatureSetDefaults_FeatureSetEditionDefaultProtoMsg {
  type_url: "/google.protobuf.FeatureSetEditionDefault";
  value: Uint8Array;
}
/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 */
export interface FeatureSetDefaults_FeatureSetEditionDefaultAmino {
  edition: Edition;
  /** Defaults of features that can be overridden in this edition. */
  overridable_features?: FeatureSetAmino;
  /** Defaults of features that can't be overridden in this edition. */
  fixed_features?: FeatureSetAmino;
}
export interface FeatureSetDefaults_FeatureSetEditionDefaultAminoMsg {
  type: "/google.protobuf.FeatureSetEditionDefault";
  value: FeatureSetDefaults_FeatureSetEditionDefaultAmino;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}
export interface SourceCodeInfoProtoMsg {
  type_url: "/google.protobuf.SourceCodeInfo";
  value: Uint8Array;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfoAmino {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_LocationAmino[];
}
export interface SourceCodeInfoAminoMsg {
  type: "/google.protobuf.SourceCodeInfo";
  value: SourceCodeInfoAmino;
}
export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition appears.
   * For example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to moo.
   *   //
   *   // Another line attached to moo.
   *   optional double moo = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to moo or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
export interface SourceCodeInfo_LocationProtoMsg {
  type_url: "/google.protobuf.Location";
  value: Uint8Array;
}
export interface SourceCodeInfo_LocationAmino {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition appears.
   * For example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to moo.
   *   //
   *   // Another line attached to moo.
   *   optional double moo = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to moo or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
export interface SourceCodeInfo_LocationAminoMsg {
  type: "/google.protobuf.Location";
  value: SourceCodeInfo_LocationAmino;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}
export interface GeneratedCodeInfoProtoMsg {
  type_url: "/google.protobuf.GeneratedCodeInfo";
  value: Uint8Array;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfoAmino {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_AnnotationAmino[];
}
export interface GeneratedCodeInfoAminoMsg {
  type: "/google.protobuf.GeneratedCodeInfo";
  value: GeneratedCodeInfoAmino;
}
export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  source_file: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified object. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
  semantic: GeneratedCodeInfo_Annotation_Semantic;
}
export interface GeneratedCodeInfo_AnnotationProtoMsg {
  type_url: "/google.protobuf.Annotation";
  value: Uint8Array;
}
export interface GeneratedCodeInfo_AnnotationAmino {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  source_file: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified object. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
  semantic: GeneratedCodeInfo_Annotation_Semantic;
}
export interface GeneratedCodeInfo_AnnotationAminoMsg {
  type: "/google.protobuf.Annotation";
  value: GeneratedCodeInfo_AnnotationAmino;
}
function createBaseFileDescriptorSet(): FileDescriptorSet {
  return {
    file: []
  };
}
export const FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  is(o: any): o is FileDescriptorSet {
    return o && (o.$typeUrl === FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || FileDescriptorProto.is(o.file[0])));
  },
  isAmino(o: any): o is FileDescriptorSetAmino {
    return o && (o.$typeUrl === FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || FileDescriptorProto.isAmino(o.file[0])));
  },
  encode(message: FileDescriptorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FileDescriptorSetAmino): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map(e => FileDescriptorProto.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FileDescriptorSet): FileDescriptorSetAmino {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.file = message.file;
    }
    return obj;
  },
  fromAminoMsg(object: FileDescriptorSetAminoMsg): FileDescriptorSet {
    return FileDescriptorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: FileDescriptorSetProtoMsg): FileDescriptorSet {
    return FileDescriptorSet.decode(message.value);
  },
  toProto(message: FileDescriptorSet): Uint8Array {
    return FileDescriptorSet.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorSet): FileDescriptorSetProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileDescriptorSet",
      value: FileDescriptorSet.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FileDescriptorProto.registerTypeUrl();
  }
};
function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    public_dependency: [],
    weak_dependency: [],
    message_type: [],
    enum_type: [],
    service: [],
    extension: [],
    options: undefined,
    source_code_info: undefined,
    syntax: "",
    edition: 1
  };
}
export const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  is(o: any): o is FileDescriptorProto {
    return o && (o.$typeUrl === FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.public_dependency) && (!o.public_dependency.length || typeof o.public_dependency[0] === "number") && Array.isArray(o.weak_dependency) && (!o.weak_dependency.length || typeof o.weak_dependency[0] === "number") && Array.isArray(o.message_type) && (!o.message_type.length || DescriptorProto.is(o.message_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.is(o.enum_type[0])) && Array.isArray(o.service) && (!o.service.length || ServiceDescriptorProto.is(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.is(o.extension[0])) && typeof o.syntax === "string" && isSet(o.edition));
  },
  isAmino(o: any): o is FileDescriptorProtoAmino {
    return o && (o.$typeUrl === FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.public_dependency) && (!o.public_dependency.length || typeof o.public_dependency[0] === "number") && Array.isArray(o.weak_dependency) && (!o.weak_dependency.length || typeof o.weak_dependency[0] === "number") && Array.isArray(o.message_type) && (!o.message_type.length || DescriptorProto.isAmino(o.message_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.isAmino(o.enum_type[0])) && Array.isArray(o.service) && (!o.service.length || ServiceDescriptorProto.isAmino(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.isAmino(o.extension[0])) && typeof o.syntax === "string" && isSet(o.edition));
  },
  encode(message: FileDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.public_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weak_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.message_type) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.source_code_info !== undefined) {
      SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    if (message.edition !== 1) {
      writer.uint32(112).int32(message.edition);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.public_dependency.push(reader.int32());
            }
          } else {
            message.public_dependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weak_dependency.push(reader.int32());
            }
          } else {
            message.weak_dependency.push(reader.int32());
          }
          break;
        case 4:
          message.message_type.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        case 14:
          message.edition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map(e => e) || [];
    message.public_dependency = object.public_dependency?.map(e => e) || [];
    message.weak_dependency = object.weak_dependency?.map(e => e) || [];
    message.message_type = object.message_type?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map(e => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
    message.source_code_info = object.source_code_info !== undefined && object.source_code_info !== null ? SourceCodeInfo.fromPartial(object.source_code_info) : undefined;
    message.syntax = object.syntax ?? "";
    message.edition = object.edition ?? 1;
    return message;
  },
  fromAmino(object: FileDescriptorProtoAmino): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.package !== undefined && object.package !== null) {
      message.package = object.package;
    }
    message.dependency = object.dependency?.map(e => e) || [];
    message.public_dependency = object.public_dependency?.map(e => e) || [];
    message.weak_dependency = object.weak_dependency?.map(e => e) || [];
    message.message_type = object.message_type?.map(e => DescriptorProto.fromAmino(e)) || [];
    message.enum_type = object.enum_type?.map(e => EnumDescriptorProto.fromAmino(e)) || [];
    message.service = object.service?.map(e => ServiceDescriptorProto.fromAmino(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = FileOptions.fromAmino(object.options);
    }
    if (object.source_code_info !== undefined && object.source_code_info !== null) {
      message.source_code_info = SourceCodeInfo.fromAmino(object.source_code_info);
    }
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    if (object.edition !== undefined && object.edition !== null) {
      message.edition = object.edition;
    }
    return message;
  },
  toAmino(message: FileDescriptorProto): FileDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.package = message.package === "" ? undefined : message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = message.dependency;
    }
    if (message.public_dependency) {
      obj.public_dependency = message.public_dependency.map(e => e);
    } else {
      obj.public_dependency = message.public_dependency;
    }
    if (message.weak_dependency) {
      obj.weak_dependency = message.weak_dependency.map(e => e);
    } else {
      obj.weak_dependency = message.weak_dependency;
    }
    if (message.message_type) {
      obj.message_type = message.message_type.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.message_type = message.message_type;
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = message.enum_type;
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.service = message.service;
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = message.extension;
    }
    obj.options = message.options ? FileOptions.toAmino(message.options) : undefined;
    obj.source_code_info = message.source_code_info ? SourceCodeInfo.toAmino(message.source_code_info) : undefined;
    obj.syntax = message.syntax === "" ? undefined : message.syntax;
    obj.edition = message.edition === 1 ? undefined : message.edition;
    return obj;
  },
  fromAminoMsg(object: FileDescriptorProtoAminoMsg): FileDescriptorProto {
    return FileDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: FileDescriptorProtoProtoMsg): FileDescriptorProto {
    return FileDescriptorProto.decode(message.value);
  },
  toProto(message: FileDescriptorProto): Uint8Array {
    return FileDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorProto): FileDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileDescriptorProto",
      value: FileDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    DescriptorProto.registerTypeUrl();
    EnumDescriptorProto.registerTypeUrl();
    ServiceDescriptorProto.registerTypeUrl();
    FieldDescriptorProto.registerTypeUrl();
    FileOptions.registerTypeUrl();
    SourceCodeInfo.registerTypeUrl();
  }
};
function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nested_type: [],
    enum_type: [],
    extension_range: [],
    oneof_decl: [],
    options: undefined,
    reserved_range: [],
    reserved_name: []
  };
}
export const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  is(o: any): o is DescriptorProto {
    return o && (o.$typeUrl === DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || FieldDescriptorProto.is(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.is(o.extension[0])) && Array.isArray(o.nested_type) && (!o.nested_type.length || DescriptorProto.is(o.nested_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.is(o.enum_type[0])) && Array.isArray(o.extension_range) && (!o.extension_range.length || DescriptorProto_ExtensionRange.is(o.extension_range[0])) && Array.isArray(o.oneof_decl) && (!o.oneof_decl.length || OneofDescriptorProto.is(o.oneof_decl[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || DescriptorProto_ReservedRange.is(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  isAmino(o: any): o is DescriptorProtoAmino {
    return o && (o.$typeUrl === DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || FieldDescriptorProto.isAmino(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || FieldDescriptorProto.isAmino(o.extension[0])) && Array.isArray(o.nested_type) && (!o.nested_type.length || DescriptorProto.isAmino(o.nested_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || EnumDescriptorProto.isAmino(o.enum_type[0])) && Array.isArray(o.extension_range) && (!o.extension_range.length || DescriptorProto_ExtensionRange.isAmino(o.extension_range[0])) && Array.isArray(o.oneof_decl) && (!o.oneof_decl.length || OneofDescriptorProto.isAmino(o.oneof_decl[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || DescriptorProto_ReservedRange.isAmino(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  encode(message: DescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nested_type) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extension_range) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneof_decl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nested_type.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extension_range.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneof_decl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reserved_range.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reserved_name.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.nested_type = object.nested_type?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.extension_range = object.extension_range?.map(e => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneof_decl = object.oneof_decl?.map(e => OneofDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
    message.reserved_range = object.reserved_range?.map(e => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reserved_name = object.reserved_name?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DescriptorProtoAmino): DescriptorProto {
    const message = createBaseDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.field = object.field?.map(e => FieldDescriptorProto.fromAmino(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromAmino(e)) || [];
    message.nested_type = object.nested_type?.map(e => DescriptorProto.fromAmino(e)) || [];
    message.enum_type = object.enum_type?.map(e => EnumDescriptorProto.fromAmino(e)) || [];
    message.extension_range = object.extension_range?.map(e => DescriptorProto_ExtensionRange.fromAmino(e)) || [];
    message.oneof_decl = object.oneof_decl?.map(e => OneofDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = MessageOptions.fromAmino(object.options);
    }
    message.reserved_range = object.reserved_range?.map(e => DescriptorProto_ReservedRange.fromAmino(e)) || [];
    message.reserved_name = object.reserved_name?.map(e => e) || [];
    return message;
  },
  toAmino(message: DescriptorProto): DescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.field = message.field;
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = message.extension;
    }
    if (message.nested_type) {
      obj.nested_type = message.nested_type.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.nested_type = message.nested_type;
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = message.enum_type;
    }
    if (message.extension_range) {
      obj.extension_range = message.extension_range.map(e => e ? DescriptorProto_ExtensionRange.toAmino(e) : undefined);
    } else {
      obj.extension_range = message.extension_range;
    }
    if (message.oneof_decl) {
      obj.oneof_decl = message.oneof_decl.map(e => e ? OneofDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.oneof_decl = message.oneof_decl;
    }
    obj.options = message.options ? MessageOptions.toAmino(message.options) : undefined;
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map(e => e ? DescriptorProto_ReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = message.reserved_range;
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map(e => e);
    } else {
      obj.reserved_name = message.reserved_name;
    }
    return obj;
  },
  fromAminoMsg(object: DescriptorProtoAminoMsg): DescriptorProto {
    return DescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProtoProtoMsg): DescriptorProto {
    return DescriptorProto.decode(message.value);
  },
  toProto(message: DescriptorProto): Uint8Array {
    return DescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto): DescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.DescriptorProto",
      value: DescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FieldDescriptorProto.registerTypeUrl();
    DescriptorProto.registerTypeUrl();
    EnumDescriptorProto.registerTypeUrl();
    DescriptorProto_ExtensionRange.registerTypeUrl();
    OneofDescriptorProto.registerTypeUrl();
    MessageOptions.registerTypeUrl();
    DescriptorProto_ReservedRange.registerTypeUrl();
  }
};
function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return {
    start: 0,
    end: 0,
    options: undefined
  };
}
export const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  is(o: any): o is DescriptorProto_ExtensionRange {
    return o && (o.$typeUrl === DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is DescriptorProto_ExtensionRangeAmino {
    return o && (o.$typeUrl === DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  encode(message: DescriptorProto_ExtensionRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: DescriptorProto_ExtensionRangeAmino): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = ExtensionRangeOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeAmino {
    const obj: any = {};
    obj.start = message.start === 0 ? undefined : message.start;
    obj.end = message.end === 0 ? undefined : message.end;
    obj.options = message.options ? ExtensionRangeOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: DescriptorProto_ExtensionRangeAminoMsg): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProto_ExtensionRangeProtoMsg): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.decode(message.value);
  },
  toProto(message: DescriptorProto_ExtensionRange): Uint8Array {
    return DescriptorProto_ExtensionRange.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.ExtensionRange",
      value: DescriptorProto_ExtensionRange.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ExtensionRangeOptions.registerTypeUrl();
  }
};
function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  is(o: any): o is DescriptorProto_ReservedRange {
    return o && (o.$typeUrl === DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is DescriptorProto_ReservedRangeAmino {
    return o && (o.$typeUrl === DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  encode(message: DescriptorProto_ReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object: DescriptorProto_ReservedRangeAmino): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeAmino {
    const obj: any = {};
    obj.start = message.start === 0 ? undefined : message.start;
    obj.end = message.end === 0 ? undefined : message.end;
    return obj;
  },
  fromAminoMsg(object: DescriptorProto_ReservedRangeAminoMsg): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProto_ReservedRangeProtoMsg): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.decode(message.value);
  },
  toProto(message: DescriptorProto_ReservedRange): Uint8Array {
    return DescriptorProto_ReservedRange.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.ReservedRange",
      value: DescriptorProto_ReservedRange.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return {
    uninterpreted_option: [],
    declaration: [],
    features: undefined,
    verification: 1
  };
}
export const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  is(o: any): o is ExtensionRangeOptions {
    return o && (o.$typeUrl === ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])) && Array.isArray(o.declaration) && (!o.declaration.length || ExtensionRangeOptions_Declaration.is(o.declaration[0])) && isSet(o.verification));
  },
  isAmino(o: any): o is ExtensionRangeOptionsAmino {
    return o && (o.$typeUrl === ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])) && Array.isArray(o.declaration) && (!o.declaration.length || ExtensionRangeOptions_Declaration.isAmino(o.declaration[0])) && isSet(o.verification));
  },
  encode(message: ExtensionRangeOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    for (const v of message.declaration) {
      ExtensionRangeOptions_Declaration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    if (message.verification !== 1) {
      writer.uint32(24).int32(message.verification);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        case 2:
          message.declaration.push(ExtensionRangeOptions_Declaration.decode(reader, reader.uint32()));
          break;
        case 50:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.verification = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    message.declaration = object.declaration?.map(e => ExtensionRangeOptions_Declaration.fromPartial(e)) || [];
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.verification = object.verification ?? 1;
    return message;
  },
  fromAmino(object: ExtensionRangeOptionsAmino): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    message.declaration = object.declaration?.map(e => ExtensionRangeOptions_Declaration.fromAmino(e)) || [];
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    if (object.verification !== undefined && object.verification !== null) {
      message.verification = object.verification;
    }
    return message;
  },
  toAmino(message: ExtensionRangeOptions): ExtensionRangeOptionsAmino {
    const obj: any = {};
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    if (message.declaration) {
      obj.declaration = message.declaration.map(e => e ? ExtensionRangeOptions_Declaration.toAmino(e) : undefined);
    } else {
      obj.declaration = message.declaration;
    }
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    obj.verification = message.verification === 1 ? undefined : message.verification;
    return obj;
  },
  fromAminoMsg(object: ExtensionRangeOptionsAminoMsg): ExtensionRangeOptions {
    return ExtensionRangeOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionRangeOptionsProtoMsg): ExtensionRangeOptions {
    return ExtensionRangeOptions.decode(message.value);
  },
  toProto(message: ExtensionRangeOptions): Uint8Array {
    return ExtensionRangeOptions.encode(message).finish();
  },
  toProtoMsg(message: ExtensionRangeOptions): ExtensionRangeOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.ExtensionRangeOptions",
      value: ExtensionRangeOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    UninterpretedOption.registerTypeUrl();
    ExtensionRangeOptions_Declaration.registerTypeUrl();
    FeatureSet.registerTypeUrl();
  }
};
function createBaseExtensionRangeOptions_Declaration(): ExtensionRangeOptions_Declaration {
  return {
    number: 0,
    full_name: "",
    type: "",
    reserved: false,
    repeated: false
  };
}
export const ExtensionRangeOptions_Declaration = {
  typeUrl: "/google.protobuf.Declaration",
  is(o: any): o is ExtensionRangeOptions_Declaration {
    return o && (o.$typeUrl === ExtensionRangeOptions_Declaration.typeUrl || typeof o.number === "number" && typeof o.full_name === "string" && typeof o.type === "string" && typeof o.reserved === "boolean" && typeof o.repeated === "boolean");
  },
  isAmino(o: any): o is ExtensionRangeOptions_DeclarationAmino {
    return o && (o.$typeUrl === ExtensionRangeOptions_Declaration.typeUrl || typeof o.number === "number" && typeof o.full_name === "string" && typeof o.type === "string" && typeof o.reserved === "boolean" && typeof o.repeated === "boolean");
  },
  encode(message: ExtensionRangeOptions_Declaration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    if (message.full_name !== "") {
      writer.uint32(18).string(message.full_name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.reserved === true) {
      writer.uint32(40).bool(message.reserved);
    }
    if (message.repeated === true) {
      writer.uint32(48).bool(message.repeated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions_Declaration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions_Declaration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int32();
          break;
        case 2:
          message.full_name = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 5:
          message.reserved = reader.bool();
          break;
        case 6:
          message.repeated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtensionRangeOptions_Declaration>): ExtensionRangeOptions_Declaration {
    const message = createBaseExtensionRangeOptions_Declaration();
    message.number = object.number ?? 0;
    message.full_name = object.full_name ?? "";
    message.type = object.type ?? "";
    message.reserved = object.reserved ?? false;
    message.repeated = object.repeated ?? false;
    return message;
  },
  fromAmino(object: ExtensionRangeOptions_DeclarationAmino): ExtensionRangeOptions_Declaration {
    const message = createBaseExtensionRangeOptions_Declaration();
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.full_name !== undefined && object.full_name !== null) {
      message.full_name = object.full_name;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = object.reserved;
    }
    if (object.repeated !== undefined && object.repeated !== null) {
      message.repeated = object.repeated;
    }
    return message;
  },
  toAmino(message: ExtensionRangeOptions_Declaration): ExtensionRangeOptions_DeclarationAmino {
    const obj: any = {};
    obj.number = message.number === 0 ? undefined : message.number;
    obj.full_name = message.full_name === "" ? undefined : message.full_name;
    obj.type = message.type === "" ? undefined : message.type;
    obj.reserved = message.reserved === false ? undefined : message.reserved;
    obj.repeated = message.repeated === false ? undefined : message.repeated;
    return obj;
  },
  fromAminoMsg(object: ExtensionRangeOptions_DeclarationAminoMsg): ExtensionRangeOptions_Declaration {
    return ExtensionRangeOptions_Declaration.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionRangeOptions_DeclarationProtoMsg): ExtensionRangeOptions_Declaration {
    return ExtensionRangeOptions_Declaration.decode(message.value);
  },
  toProto(message: ExtensionRangeOptions_Declaration): Uint8Array {
    return ExtensionRangeOptions_Declaration.encode(message).finish();
  },
  toProtoMsg(message: ExtensionRangeOptions_Declaration): ExtensionRangeOptions_DeclarationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Declaration",
      value: ExtensionRangeOptions_Declaration.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    type_name: "",
    extendee: "",
    default_value: "",
    oneof_index: 0,
    json_name: "",
    options: undefined,
    proto3_optional: false
  };
}
export const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  is(o: any): o is FieldDescriptorProto {
    return o && (o.$typeUrl === FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && isSet(o.label) && isSet(o.type) && typeof o.type_name === "string" && typeof o.extendee === "string" && typeof o.default_value === "string" && typeof o.oneof_index === "number" && typeof o.json_name === "string" && typeof o.proto3_optional === "boolean");
  },
  isAmino(o: any): o is FieldDescriptorProtoAmino {
    return o && (o.$typeUrl === FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && isSet(o.label) && isSet(o.type) && typeof o.type_name === "string" && typeof o.extendee === "string" && typeof o.default_value === "string" && typeof o.oneof_index === "number" && typeof o.json_name === "string" && typeof o.proto3_optional === "boolean");
  },
  encode(message: FieldDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.type_name !== "") {
      writer.uint32(50).string(message.type_name);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.default_value !== "") {
      writer.uint32(58).string(message.default_value);
    }
    if (message.oneof_index !== 0) {
      writer.uint32(72).int32(message.oneof_index);
    }
    if (message.json_name !== "") {
      writer.uint32(82).string(message.json_name);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.proto3_optional === true) {
      writer.uint32(136).bool(message.proto3_optional);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = reader.int32() as any;
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        case 6:
          message.type_name = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.default_value = reader.string();
          break;
        case 9:
          message.oneof_index = reader.int32();
          break;
        case 10:
          message.json_name = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        case 17:
          message.proto3_optional = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.type_name = object.type_name ?? "";
    message.extendee = object.extendee ?? "";
    message.default_value = object.default_value ?? "";
    message.oneof_index = object.oneof_index ?? 0;
    message.json_name = object.json_name ?? "";
    message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
    message.proto3_optional = object.proto3_optional ?? false;
    return message;
  },
  fromAmino(object: FieldDescriptorProtoAmino): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.type_name !== undefined && object.type_name !== null) {
      message.type_name = object.type_name;
    }
    if (object.extendee !== undefined && object.extendee !== null) {
      message.extendee = object.extendee;
    }
    if (object.default_value !== undefined && object.default_value !== null) {
      message.default_value = object.default_value;
    }
    if (object.oneof_index !== undefined && object.oneof_index !== null) {
      message.oneof_index = object.oneof_index;
    }
    if (object.json_name !== undefined && object.json_name !== null) {
      message.json_name = object.json_name;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = FieldOptions.fromAmino(object.options);
    }
    if (object.proto3_optional !== undefined && object.proto3_optional !== null) {
      message.proto3_optional = object.proto3_optional;
    }
    return message;
  },
  toAmino(message: FieldDescriptorProto): FieldDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.number = message.number === 0 ? undefined : message.number;
    obj.label = message.label === 1 ? undefined : message.label;
    obj.type = message.type === 1 ? undefined : message.type;
    obj.type_name = message.type_name === "" ? undefined : message.type_name;
    obj.extendee = message.extendee === "" ? undefined : message.extendee;
    obj.default_value = message.default_value === "" ? undefined : message.default_value;
    obj.oneof_index = message.oneof_index === 0 ? undefined : message.oneof_index;
    obj.json_name = message.json_name === "" ? undefined : message.json_name;
    obj.options = message.options ? FieldOptions.toAmino(message.options) : undefined;
    obj.proto3_optional = message.proto3_optional === false ? undefined : message.proto3_optional;
    return obj;
  },
  fromAminoMsg(object: FieldDescriptorProtoAminoMsg): FieldDescriptorProto {
    return FieldDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldDescriptorProtoProtoMsg): FieldDescriptorProto {
    return FieldDescriptorProto.decode(message.value);
  },
  toProto(message: FieldDescriptorProto): Uint8Array {
    return FieldDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: FieldDescriptorProto): FieldDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.FieldDescriptorProto",
      value: FieldDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FieldOptions.registerTypeUrl();
  }
};
function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return {
    name: "",
    options: undefined
  };
}
export const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  is(o: any): o is OneofDescriptorProto {
    return o && (o.$typeUrl === OneofDescriptorProto.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is OneofDescriptorProtoAmino {
    return o && (o.$typeUrl === OneofDescriptorProto.typeUrl || typeof o.name === "string");
  },
  encode(message: OneofDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: OneofDescriptorProtoAmino): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = OneofOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: OneofDescriptorProto): OneofDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.options = message.options ? OneofOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: OneofDescriptorProtoAminoMsg): OneofDescriptorProto {
    return OneofDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: OneofDescriptorProtoProtoMsg): OneofDescriptorProto {
    return OneofDescriptorProto.decode(message.value);
  },
  toProto(message: OneofDescriptorProto): Uint8Array {
    return OneofDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: OneofDescriptorProto): OneofDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.OneofDescriptorProto",
      value: OneofDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    OneofOptions.registerTypeUrl();
  }
};
function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return {
    name: "",
    value: [],
    options: undefined,
    reserved_range: [],
    reserved_name: []
  };
}
export const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  is(o: any): o is EnumDescriptorProto {
    return o && (o.$typeUrl === EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || EnumValueDescriptorProto.is(o.value[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || EnumDescriptorProto_EnumReservedRange.is(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  isAmino(o: any): o is EnumDescriptorProtoAmino {
    return o && (o.$typeUrl === EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || EnumValueDescriptorProto.isAmino(o.value[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || EnumDescriptorProto_EnumReservedRange.isAmino(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
  },
  encode(message: EnumDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reserved_range.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reserved_name.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map(e => EnumValueDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reserved_range = object.reserved_range?.map(e => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
    message.reserved_name = object.reserved_name?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EnumDescriptorProtoAmino): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.value = object.value?.map(e => EnumValueDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumOptions.fromAmino(object.options);
    }
    message.reserved_range = object.reserved_range?.map(e => EnumDescriptorProto_EnumReservedRange.fromAmino(e)) || [];
    message.reserved_name = object.reserved_name?.map(e => e) || [];
    return message;
  },
  toAmino(message: EnumDescriptorProto): EnumDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.value = message.value;
    }
    obj.options = message.options ? EnumOptions.toAmino(message.options) : undefined;
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map(e => e ? EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = message.reserved_range;
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map(e => e);
    } else {
      obj.reserved_name = message.reserved_name;
    }
    return obj;
  },
  fromAminoMsg(object: EnumDescriptorProtoAminoMsg): EnumDescriptorProto {
    return EnumDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumDescriptorProtoProtoMsg): EnumDescriptorProto {
    return EnumDescriptorProto.decode(message.value);
  },
  toProto(message: EnumDescriptorProto): Uint8Array {
    return EnumDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: EnumDescriptorProto): EnumDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumDescriptorProto",
      value: EnumDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    EnumValueDescriptorProto.registerTypeUrl();
    EnumOptions.registerTypeUrl();
    EnumDescriptorProto_EnumReservedRange.registerTypeUrl();
  }
};
function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  is(o: any): o is EnumDescriptorProto_EnumReservedRange {
    return o && (o.$typeUrl === EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  isAmino(o: any): o is EnumDescriptorProto_EnumReservedRangeAmino {
    return o && (o.$typeUrl === EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
  },
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object: EnumDescriptorProto_EnumReservedRangeAmino): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    return message;
  },
  toAmino(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeAmino {
    const obj: any = {};
    obj.start = message.start === 0 ? undefined : message.start;
    obj.end = message.end === 0 ? undefined : message.end;
    return obj;
  },
  fromAminoMsg(object: EnumDescriptorProto_EnumReservedRangeAminoMsg): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumDescriptorProto_EnumReservedRangeProtoMsg): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.decode(message.value);
  },
  toProto(message: EnumDescriptorProto_EnumReservedRange): Uint8Array {
    return EnumDescriptorProto_EnumReservedRange.encode(message).finish();
  },
  toProtoMsg(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumReservedRange",
      value: EnumDescriptorProto_EnumReservedRange.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return {
    name: "",
    number: 0,
    options: undefined
  };
}
export const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  is(o: any): o is EnumValueDescriptorProto {
    return o && (o.$typeUrl === EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
  },
  isAmino(o: any): o is EnumValueDescriptorProtoAmino {
    return o && (o.$typeUrl === EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
  },
  encode(message: EnumValueDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: EnumValueDescriptorProtoAmino): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = EnumValueOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: EnumValueDescriptorProto): EnumValueDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.number = message.number === 0 ? undefined : message.number;
    obj.options = message.options ? EnumValueOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnumValueDescriptorProtoAminoMsg): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueDescriptorProtoProtoMsg): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.decode(message.value);
  },
  toProto(message: EnumValueDescriptorProto): Uint8Array {
    return EnumValueDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: EnumValueDescriptorProto): EnumValueDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValueDescriptorProto",
      value: EnumValueDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    EnumValueOptions.registerTypeUrl();
  }
};
function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return {
    name: "",
    method: [],
    options: undefined
  };
}
export const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  is(o: any): o is ServiceDescriptorProto {
    return o && (o.$typeUrl === ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || MethodDescriptorProto.is(o.method[0])));
  },
  isAmino(o: any): o is ServiceDescriptorProtoAmino {
    return o && (o.$typeUrl === ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || MethodDescriptorProto.isAmino(o.method[0])));
  },
  encode(message: ServiceDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map(e => MethodDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: ServiceDescriptorProtoAmino): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.method = object.method?.map(e => MethodDescriptorProto.fromAmino(e)) || [];
    if (object.options !== undefined && object.options !== null) {
      message.options = ServiceOptions.fromAmino(object.options);
    }
    return message;
  },
  toAmino(message: ServiceDescriptorProto): ServiceDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.method = message.method;
    }
    obj.options = message.options ? ServiceOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceDescriptorProtoAminoMsg): ServiceDescriptorProto {
    return ServiceDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceDescriptorProtoProtoMsg): ServiceDescriptorProto {
    return ServiceDescriptorProto.decode(message.value);
  },
  toProto(message: ServiceDescriptorProto): Uint8Array {
    return ServiceDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: ServiceDescriptorProto): ServiceDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.ServiceDescriptorProto",
      value: ServiceDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MethodDescriptorProto.registerTypeUrl();
    ServiceOptions.registerTypeUrl();
  }
};
function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    input_type: "",
    output_type: "",
    options: undefined,
    client_streaming: false,
    server_streaming: false
  };
}
export const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  is(o: any): o is MethodDescriptorProto {
    return o && (o.$typeUrl === MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.input_type === "string" && typeof o.output_type === "string" && typeof o.client_streaming === "boolean" && typeof o.server_streaming === "boolean");
  },
  isAmino(o: any): o is MethodDescriptorProtoAmino {
    return o && (o.$typeUrl === MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.input_type === "string" && typeof o.output_type === "string" && typeof o.client_streaming === "boolean" && typeof o.server_streaming === "boolean");
  },
  encode(message: MethodDescriptorProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input_type !== "") {
      writer.uint32(18).string(message.input_type);
    }
    if (message.output_type !== "") {
      writer.uint32(26).string(message.output_type);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.client_streaming === true) {
      writer.uint32(40).bool(message.client_streaming);
    }
    if (message.server_streaming === true) {
      writer.uint32(48).bool(message.server_streaming);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.input_type = reader.string();
          break;
        case 3:
          message.output_type = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.client_streaming = reader.bool();
          break;
        case 6:
          message.server_streaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.input_type = object.input_type ?? "";
    message.output_type = object.output_type ?? "";
    message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
    message.client_streaming = object.client_streaming ?? false;
    message.server_streaming = object.server_streaming ?? false;
    return message;
  },
  fromAmino(object: MethodDescriptorProtoAmino): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.input_type !== undefined && object.input_type !== null) {
      message.input_type = object.input_type;
    }
    if (object.output_type !== undefined && object.output_type !== null) {
      message.output_type = object.output_type;
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = MethodOptions.fromAmino(object.options);
    }
    if (object.client_streaming !== undefined && object.client_streaming !== null) {
      message.client_streaming = object.client_streaming;
    }
    if (object.server_streaming !== undefined && object.server_streaming !== null) {
      message.server_streaming = object.server_streaming;
    }
    return message;
  },
  toAmino(message: MethodDescriptorProto): MethodDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.input_type = message.input_type === "" ? undefined : message.input_type;
    obj.output_type = message.output_type === "" ? undefined : message.output_type;
    obj.options = message.options ? MethodOptions.toAmino(message.options) : undefined;
    obj.client_streaming = message.client_streaming === false ? undefined : message.client_streaming;
    obj.server_streaming = message.server_streaming === false ? undefined : message.server_streaming;
    return obj;
  },
  fromAminoMsg(object: MethodDescriptorProtoAminoMsg): MethodDescriptorProto {
    return MethodDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodDescriptorProtoProtoMsg): MethodDescriptorProto {
    return MethodDescriptorProto.decode(message.value);
  },
  toProto(message: MethodDescriptorProto): Uint8Array {
    return MethodDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: MethodDescriptorProto): MethodDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.MethodDescriptorProto",
      value: MethodDescriptorProto.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MethodOptions.registerTypeUrl();
  }
};
function createBaseFileOptions(): FileOptions {
  return {
    java_package: "",
    java_outer_classname: "",
    java_multiple_files: false,
    java_generate_equals_and_hash: false,
    java_string_check_utf8: false,
    optimize_for: 1,
    go_package: "",
    cc_generic_services: false,
    java_generic_services: false,
    py_generic_services: false,
    deprecated: false,
    cc_enable_arenas: false,
    objc_class_prefix: "",
    csharp_namespace: "",
    swift_prefix: "",
    php_class_prefix: "",
    php_namespace: "",
    php_metadata_namespace: "",
    ruby_package: "",
    features: undefined,
    uninterpreted_option: []
  };
}
export const FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  is(o: any): o is FileOptions {
    return o && (o.$typeUrl === FileOptions.typeUrl || typeof o.java_package === "string" && typeof o.java_outer_classname === "string" && typeof o.java_multiple_files === "boolean" && typeof o.java_generate_equals_and_hash === "boolean" && typeof o.java_string_check_utf8 === "boolean" && isSet(o.optimize_for) && typeof o.go_package === "string" && typeof o.cc_generic_services === "boolean" && typeof o.java_generic_services === "boolean" && typeof o.py_generic_services === "boolean" && typeof o.deprecated === "boolean" && typeof o.cc_enable_arenas === "boolean" && typeof o.objc_class_prefix === "string" && typeof o.csharp_namespace === "string" && typeof o.swift_prefix === "string" && typeof o.php_class_prefix === "string" && typeof o.php_namespace === "string" && typeof o.php_metadata_namespace === "string" && typeof o.ruby_package === "string" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is FileOptionsAmino {
    return o && (o.$typeUrl === FileOptions.typeUrl || typeof o.java_package === "string" && typeof o.java_outer_classname === "string" && typeof o.java_multiple_files === "boolean" && typeof o.java_generate_equals_and_hash === "boolean" && typeof o.java_string_check_utf8 === "boolean" && isSet(o.optimize_for) && typeof o.go_package === "string" && typeof o.cc_generic_services === "boolean" && typeof o.java_generic_services === "boolean" && typeof o.py_generic_services === "boolean" && typeof o.deprecated === "boolean" && typeof o.cc_enable_arenas === "boolean" && typeof o.objc_class_prefix === "string" && typeof o.csharp_namespace === "string" && typeof o.swift_prefix === "string" && typeof o.php_class_prefix === "string" && typeof o.php_namespace === "string" && typeof o.php_metadata_namespace === "string" && typeof o.ruby_package === "string" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: FileOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.java_package !== "") {
      writer.uint32(10).string(message.java_package);
    }
    if (message.java_outer_classname !== "") {
      writer.uint32(66).string(message.java_outer_classname);
    }
    if (message.java_multiple_files === true) {
      writer.uint32(80).bool(message.java_multiple_files);
    }
    if (message.java_generate_equals_and_hash === true) {
      writer.uint32(160).bool(message.java_generate_equals_and_hash);
    }
    if (message.java_string_check_utf8 === true) {
      writer.uint32(216).bool(message.java_string_check_utf8);
    }
    if (message.optimize_for !== 1) {
      writer.uint32(72).int32(message.optimize_for);
    }
    if (message.go_package !== "") {
      writer.uint32(90).string(message.go_package);
    }
    if (message.cc_generic_services === true) {
      writer.uint32(128).bool(message.cc_generic_services);
    }
    if (message.java_generic_services === true) {
      writer.uint32(136).bool(message.java_generic_services);
    }
    if (message.py_generic_services === true) {
      writer.uint32(144).bool(message.py_generic_services);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.cc_enable_arenas === true) {
      writer.uint32(248).bool(message.cc_enable_arenas);
    }
    if (message.objc_class_prefix !== "") {
      writer.uint32(290).string(message.objc_class_prefix);
    }
    if (message.csharp_namespace !== "") {
      writer.uint32(298).string(message.csharp_namespace);
    }
    if (message.swift_prefix !== "") {
      writer.uint32(314).string(message.swift_prefix);
    }
    if (message.php_class_prefix !== "") {
      writer.uint32(322).string(message.php_class_prefix);
    }
    if (message.php_namespace !== "") {
      writer.uint32(330).string(message.php_namespace);
    }
    if (message.php_metadata_namespace !== "") {
      writer.uint32(354).string(message.php_metadata_namespace);
    }
    if (message.ruby_package !== "") {
      writer.uint32(362).string(message.ruby_package);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.java_package = reader.string();
          break;
        case 8:
          message.java_outer_classname = reader.string();
          break;
        case 10:
          message.java_multiple_files = reader.bool();
          break;
        case 20:
          message.java_generate_equals_and_hash = reader.bool();
          break;
        case 27:
          message.java_string_check_utf8 = reader.bool();
          break;
        case 9:
          message.optimize_for = reader.int32() as any;
          break;
        case 11:
          message.go_package = reader.string();
          break;
        case 16:
          message.cc_generic_services = reader.bool();
          break;
        case 17:
          message.java_generic_services = reader.bool();
          break;
        case 18:
          message.py_generic_services = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.cc_enable_arenas = reader.bool();
          break;
        case 36:
          message.objc_class_prefix = reader.string();
          break;
        case 37:
          message.csharp_namespace = reader.string();
          break;
        case 39:
          message.swift_prefix = reader.string();
          break;
        case 40:
          message.php_class_prefix = reader.string();
          break;
        case 41:
          message.php_namespace = reader.string();
          break;
        case 44:
          message.php_metadata_namespace = reader.string();
          break;
        case 45:
          message.ruby_package = reader.string();
          break;
        case 50:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FileOptions>): FileOptions {
    const message = createBaseFileOptions();
    message.java_package = object.java_package ?? "";
    message.java_outer_classname = object.java_outer_classname ?? "";
    message.java_multiple_files = object.java_multiple_files ?? false;
    message.java_generate_equals_and_hash = object.java_generate_equals_and_hash ?? false;
    message.java_string_check_utf8 = object.java_string_check_utf8 ?? false;
    message.optimize_for = object.optimize_for ?? 1;
    message.go_package = object.go_package ?? "";
    message.cc_generic_services = object.cc_generic_services ?? false;
    message.java_generic_services = object.java_generic_services ?? false;
    message.py_generic_services = object.py_generic_services ?? false;
    message.deprecated = object.deprecated ?? false;
    message.cc_enable_arenas = object.cc_enable_arenas ?? false;
    message.objc_class_prefix = object.objc_class_prefix ?? "";
    message.csharp_namespace = object.csharp_namespace ?? "";
    message.swift_prefix = object.swift_prefix ?? "";
    message.php_class_prefix = object.php_class_prefix ?? "";
    message.php_namespace = object.php_namespace ?? "";
    message.php_metadata_namespace = object.php_metadata_namespace ?? "";
    message.ruby_package = object.ruby_package ?? "";
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FileOptionsAmino): FileOptions {
    const message = createBaseFileOptions();
    if (object.java_package !== undefined && object.java_package !== null) {
      message.java_package = object.java_package;
    }
    if (object.java_outer_classname !== undefined && object.java_outer_classname !== null) {
      message.java_outer_classname = object.java_outer_classname;
    }
    if (object.java_multiple_files !== undefined && object.java_multiple_files !== null) {
      message.java_multiple_files = object.java_multiple_files;
    }
    if (object.java_generate_equals_and_hash !== undefined && object.java_generate_equals_and_hash !== null) {
      message.java_generate_equals_and_hash = object.java_generate_equals_and_hash;
    }
    if (object.java_string_check_utf8 !== undefined && object.java_string_check_utf8 !== null) {
      message.java_string_check_utf8 = object.java_string_check_utf8;
    }
    if (object.optimize_for !== undefined && object.optimize_for !== null) {
      message.optimize_for = object.optimize_for;
    }
    if (object.go_package !== undefined && object.go_package !== null) {
      message.go_package = object.go_package;
    }
    if (object.cc_generic_services !== undefined && object.cc_generic_services !== null) {
      message.cc_generic_services = object.cc_generic_services;
    }
    if (object.java_generic_services !== undefined && object.java_generic_services !== null) {
      message.java_generic_services = object.java_generic_services;
    }
    if (object.py_generic_services !== undefined && object.py_generic_services !== null) {
      message.py_generic_services = object.py_generic_services;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.cc_enable_arenas !== undefined && object.cc_enable_arenas !== null) {
      message.cc_enable_arenas = object.cc_enable_arenas;
    }
    if (object.objc_class_prefix !== undefined && object.objc_class_prefix !== null) {
      message.objc_class_prefix = object.objc_class_prefix;
    }
    if (object.csharp_namespace !== undefined && object.csharp_namespace !== null) {
      message.csharp_namespace = object.csharp_namespace;
    }
    if (object.swift_prefix !== undefined && object.swift_prefix !== null) {
      message.swift_prefix = object.swift_prefix;
    }
    if (object.php_class_prefix !== undefined && object.php_class_prefix !== null) {
      message.php_class_prefix = object.php_class_prefix;
    }
    if (object.php_namespace !== undefined && object.php_namespace !== null) {
      message.php_namespace = object.php_namespace;
    }
    if (object.php_metadata_namespace !== undefined && object.php_metadata_namespace !== null) {
      message.php_metadata_namespace = object.php_metadata_namespace;
    }
    if (object.ruby_package !== undefined && object.ruby_package !== null) {
      message.ruby_package = object.ruby_package;
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FileOptions): FileOptionsAmino {
    const obj: any = {};
    obj.java_package = message.java_package === "" ? undefined : message.java_package;
    obj.java_outer_classname = message.java_outer_classname === "" ? undefined : message.java_outer_classname;
    obj.java_multiple_files = message.java_multiple_files === false ? undefined : message.java_multiple_files;
    obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash === false ? undefined : message.java_generate_equals_and_hash;
    obj.java_string_check_utf8 = message.java_string_check_utf8 === false ? undefined : message.java_string_check_utf8;
    obj.optimize_for = message.optimize_for === 1 ? undefined : message.optimize_for;
    obj.go_package = message.go_package === "" ? undefined : message.go_package;
    obj.cc_generic_services = message.cc_generic_services === false ? undefined : message.cc_generic_services;
    obj.java_generic_services = message.java_generic_services === false ? undefined : message.java_generic_services;
    obj.py_generic_services = message.py_generic_services === false ? undefined : message.py_generic_services;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.cc_enable_arenas = message.cc_enable_arenas === false ? undefined : message.cc_enable_arenas;
    obj.objc_class_prefix = message.objc_class_prefix === "" ? undefined : message.objc_class_prefix;
    obj.csharp_namespace = message.csharp_namespace === "" ? undefined : message.csharp_namespace;
    obj.swift_prefix = message.swift_prefix === "" ? undefined : message.swift_prefix;
    obj.php_class_prefix = message.php_class_prefix === "" ? undefined : message.php_class_prefix;
    obj.php_namespace = message.php_namespace === "" ? undefined : message.php_namespace;
    obj.php_metadata_namespace = message.php_metadata_namespace === "" ? undefined : message.php_metadata_namespace;
    obj.ruby_package = message.ruby_package === "" ? undefined : message.ruby_package;
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: FileOptionsAminoMsg): FileOptions {
    return FileOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: FileOptionsProtoMsg): FileOptions {
    return FileOptions.decode(message.value);
  },
  toProto(message: FileOptions): Uint8Array {
    return FileOptions.encode(message).finish();
  },
  toProtoMsg(message: FileOptions): FileOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileOptions",
      value: FileOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseMessageOptions(): MessageOptions {
  return {
    message_set_wire_format: false,
    no_standard_descriptor_accessor: false,
    deprecated: false,
    map_entry: false,
    deprecated_legacy_json_field_conflicts: false,
    features: undefined,
    uninterpreted_option: []
  };
}
export const MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  is(o: any): o is MessageOptions {
    return o && (o.$typeUrl === MessageOptions.typeUrl || typeof o.message_set_wire_format === "boolean" && typeof o.no_standard_descriptor_accessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.map_entry === "boolean" && typeof o.deprecated_legacy_json_field_conflicts === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is MessageOptionsAmino {
    return o && (o.$typeUrl === MessageOptions.typeUrl || typeof o.message_set_wire_format === "boolean" && typeof o.no_standard_descriptor_accessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.map_entry === "boolean" && typeof o.deprecated_legacy_json_field_conflicts === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: MessageOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message_set_wire_format === true) {
      writer.uint32(8).bool(message.message_set_wire_format);
    }
    if (message.no_standard_descriptor_accessor === true) {
      writer.uint32(16).bool(message.no_standard_descriptor_accessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.map_entry === true) {
      writer.uint32(56).bool(message.map_entry);
    }
    if (message.deprecated_legacy_json_field_conflicts === true) {
      writer.uint32(88).bool(message.deprecated_legacy_json_field_conflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message_set_wire_format = reader.bool();
          break;
        case 2:
          message.no_standard_descriptor_accessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.map_entry = reader.bool();
          break;
        case 11:
          message.deprecated_legacy_json_field_conflicts = reader.bool();
          break;
        case 12:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = createBaseMessageOptions();
    message.message_set_wire_format = object.message_set_wire_format ?? false;
    message.no_standard_descriptor_accessor = object.no_standard_descriptor_accessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.map_entry = object.map_entry ?? false;
    message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts ?? false;
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MessageOptionsAmino): MessageOptions {
    const message = createBaseMessageOptions();
    if (object.message_set_wire_format !== undefined && object.message_set_wire_format !== null) {
      message.message_set_wire_format = object.message_set_wire_format;
    }
    if (object.no_standard_descriptor_accessor !== undefined && object.no_standard_descriptor_accessor !== null) {
      message.no_standard_descriptor_accessor = object.no_standard_descriptor_accessor;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.map_entry !== undefined && object.map_entry !== null) {
      message.map_entry = object.map_entry;
    }
    if (object.deprecated_legacy_json_field_conflicts !== undefined && object.deprecated_legacy_json_field_conflicts !== null) {
      message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts;
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MessageOptions): MessageOptionsAmino {
    const obj: any = {};
    obj.message_set_wire_format = message.message_set_wire_format === false ? undefined : message.message_set_wire_format;
    obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor === false ? undefined : message.no_standard_descriptor_accessor;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.map_entry = message.map_entry === false ? undefined : message.map_entry;
    obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts === false ? undefined : message.deprecated_legacy_json_field_conflicts;
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: MessageOptionsAminoMsg): MessageOptions {
    return MessageOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOptionsProtoMsg): MessageOptions {
    return MessageOptions.decode(message.value);
  },
  toProto(message: MessageOptions): Uint8Array {
    return MessageOptions.encode(message).finish();
  },
  toProtoMsg(message: MessageOptions): MessageOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.MessageOptions",
      value: MessageOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    unverified_lazy: false,
    deprecated: false,
    weak: false,
    debug_redact: false,
    retention: 1,
    targets: [],
    edition_defaults: [],
    features: undefined,
    feature_support: undefined,
    uninterpreted_option: []
  };
}
export const FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  is(o: any): o is FieldOptions {
    return o && (o.$typeUrl === FieldOptions.typeUrl || isSet(o.ctype) && typeof o.packed === "boolean" && isSet(o.jstype) && typeof o.lazy === "boolean" && typeof o.unverified_lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && typeof o.debug_redact === "boolean" && isSet(o.retention) && Array.isArray(o.targets) && Array.isArray(o.edition_defaults) && (!o.edition_defaults.length || FieldOptions_EditionDefault.is(o.edition_defaults[0])) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is FieldOptionsAmino {
    return o && (o.$typeUrl === FieldOptions.typeUrl || isSet(o.ctype) && typeof o.packed === "boolean" && isSet(o.jstype) && typeof o.lazy === "boolean" && typeof o.unverified_lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && typeof o.debug_redact === "boolean" && isSet(o.retention) && Array.isArray(o.targets) && Array.isArray(o.edition_defaults) && (!o.edition_defaults.length || FieldOptions_EditionDefault.isAmino(o.edition_defaults[0])) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: FieldOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.unverified_lazy === true) {
      writer.uint32(120).bool(message.unverified_lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    if (message.debug_redact === true) {
      writer.uint32(128).bool(message.debug_redact);
    }
    if (message.retention !== 1) {
      writer.uint32(136).int32(message.retention);
    }
    writer.uint32(154).fork();
    for (const v of message.targets) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.edition_defaults) {
      FieldOptions_EditionDefault.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
    }
    if (message.feature_support !== undefined) {
      FieldOptions_FeatureSupport.encode(message.feature_support, writer.uint32(178).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = reader.int32() as any;
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = reader.int32() as any;
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 15:
          message.unverified_lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 16:
          message.debug_redact = reader.bool();
          break;
        case 17:
          message.retention = reader.int32() as any;
          break;
        case 19:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targets.push(reader.int32() as any);
            }
          } else {
            message.targets.push(reader.int32() as any);
          }
          break;
        case 20:
          message.edition_defaults.push(FieldOptions_EditionDefault.decode(reader, reader.uint32()));
          break;
        case 21:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 22:
          message.feature_support = FieldOptions_FeatureSupport.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 1;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 1;
    message.lazy = object.lazy ?? false;
    message.unverified_lazy = object.unverified_lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.debug_redact = object.debug_redact ?? false;
    message.retention = object.retention ?? 1;
    message.targets = object.targets?.map(e => e) || [];
    message.edition_defaults = object.edition_defaults?.map(e => FieldOptions_EditionDefault.fromPartial(e)) || [];
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.feature_support = object.feature_support !== undefined && object.feature_support !== null ? FieldOptions_FeatureSupport.fromPartial(object.feature_support) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FieldOptionsAmino): FieldOptions {
    const message = createBaseFieldOptions();
    if (object.ctype !== undefined && object.ctype !== null) {
      message.ctype = object.ctype;
    }
    if (object.packed !== undefined && object.packed !== null) {
      message.packed = object.packed;
    }
    if (object.jstype !== undefined && object.jstype !== null) {
      message.jstype = object.jstype;
    }
    if (object.lazy !== undefined && object.lazy !== null) {
      message.lazy = object.lazy;
    }
    if (object.unverified_lazy !== undefined && object.unverified_lazy !== null) {
      message.unverified_lazy = object.unverified_lazy;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.weak !== undefined && object.weak !== null) {
      message.weak = object.weak;
    }
    if (object.debug_redact !== undefined && object.debug_redact !== null) {
      message.debug_redact = object.debug_redact;
    }
    if (object.retention !== undefined && object.retention !== null) {
      message.retention = object.retention;
    }
    message.targets = object.targets?.map(e => e) || [];
    message.edition_defaults = object.edition_defaults?.map(e => FieldOptions_EditionDefault.fromAmino(e)) || [];
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    if (object.feature_support !== undefined && object.feature_support !== null) {
      message.feature_support = FieldOptions_FeatureSupport.fromAmino(object.feature_support);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FieldOptions): FieldOptionsAmino {
    const obj: any = {};
    obj.ctype = message.ctype === 1 ? undefined : message.ctype;
    obj.packed = message.packed === false ? undefined : message.packed;
    obj.jstype = message.jstype === 1 ? undefined : message.jstype;
    obj.lazy = message.lazy === false ? undefined : message.lazy;
    obj.unverified_lazy = message.unverified_lazy === false ? undefined : message.unverified_lazy;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.weak = message.weak === false ? undefined : message.weak;
    obj.debug_redact = message.debug_redact === false ? undefined : message.debug_redact;
    obj.retention = message.retention === 1 ? undefined : message.retention;
    if (message.targets) {
      obj.targets = message.targets.map(e => e);
    } else {
      obj.targets = message.targets;
    }
    if (message.edition_defaults) {
      obj.edition_defaults = message.edition_defaults.map(e => e ? FieldOptions_EditionDefault.toAmino(e) : undefined);
    } else {
      obj.edition_defaults = message.edition_defaults;
    }
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    obj.feature_support = message.feature_support ? FieldOptions_FeatureSupport.toAmino(message.feature_support) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: FieldOptionsAminoMsg): FieldOptions {
    return FieldOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldOptionsProtoMsg): FieldOptions {
    return FieldOptions.decode(message.value);
  },
  toProto(message: FieldOptions): Uint8Array {
    return FieldOptions.encode(message).finish();
  },
  toProtoMsg(message: FieldOptions): FieldOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FieldOptions",
      value: FieldOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FieldOptions_EditionDefault.registerTypeUrl();
    FeatureSet.registerTypeUrl();
    FieldOptions_FeatureSupport.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseFieldOptions_EditionDefault(): FieldOptions_EditionDefault {
  return {
    edition: 1,
    value: ""
  };
}
export const FieldOptions_EditionDefault = {
  typeUrl: "/google.protobuf.EditionDefault",
  is(o: any): o is FieldOptions_EditionDefault {
    return o && (o.$typeUrl === FieldOptions_EditionDefault.typeUrl || isSet(o.edition) && typeof o.value === "string");
  },
  isAmino(o: any): o is FieldOptions_EditionDefaultAmino {
    return o && (o.$typeUrl === FieldOptions_EditionDefault.typeUrl || isSet(o.edition) && typeof o.value === "string");
  },
  encode(message: FieldOptions_EditionDefault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edition !== 1) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions_EditionDefault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions_EditionDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.edition = reader.int32() as any;
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FieldOptions_EditionDefault>): FieldOptions_EditionDefault {
    const message = createBaseFieldOptions_EditionDefault();
    message.edition = object.edition ?? 1;
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: FieldOptions_EditionDefaultAmino): FieldOptions_EditionDefault {
    const message = createBaseFieldOptions_EditionDefault();
    if (object.edition !== undefined && object.edition !== null) {
      message.edition = object.edition;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: FieldOptions_EditionDefault): FieldOptions_EditionDefaultAmino {
    const obj: any = {};
    obj.edition = message.edition === 1 ? undefined : message.edition;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: FieldOptions_EditionDefaultAminoMsg): FieldOptions_EditionDefault {
    return FieldOptions_EditionDefault.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldOptions_EditionDefaultProtoMsg): FieldOptions_EditionDefault {
    return FieldOptions_EditionDefault.decode(message.value);
  },
  toProto(message: FieldOptions_EditionDefault): Uint8Array {
    return FieldOptions_EditionDefault.encode(message).finish();
  },
  toProtoMsg(message: FieldOptions_EditionDefault): FieldOptions_EditionDefaultProtoMsg {
    return {
      typeUrl: "/google.protobuf.EditionDefault",
      value: FieldOptions_EditionDefault.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFieldOptions_FeatureSupport(): FieldOptions_FeatureSupport {
  return {
    edition_introduced: 1,
    edition_deprecated: 1,
    deprecation_warning: "",
    edition_removed: 1
  };
}
export const FieldOptions_FeatureSupport = {
  typeUrl: "/google.protobuf.FeatureSupport",
  is(o: any): o is FieldOptions_FeatureSupport {
    return o && (o.$typeUrl === FieldOptions_FeatureSupport.typeUrl || isSet(o.edition_introduced) && isSet(o.edition_deprecated) && typeof o.deprecation_warning === "string" && isSet(o.edition_removed));
  },
  isAmino(o: any): o is FieldOptions_FeatureSupportAmino {
    return o && (o.$typeUrl === FieldOptions_FeatureSupport.typeUrl || isSet(o.edition_introduced) && isSet(o.edition_deprecated) && typeof o.deprecation_warning === "string" && isSet(o.edition_removed));
  },
  encode(message: FieldOptions_FeatureSupport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edition_introduced !== 1) {
      writer.uint32(8).int32(message.edition_introduced);
    }
    if (message.edition_deprecated !== 1) {
      writer.uint32(16).int32(message.edition_deprecated);
    }
    if (message.deprecation_warning !== "") {
      writer.uint32(26).string(message.deprecation_warning);
    }
    if (message.edition_removed !== 1) {
      writer.uint32(32).int32(message.edition_removed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions_FeatureSupport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions_FeatureSupport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edition_introduced = reader.int32() as any;
          break;
        case 2:
          message.edition_deprecated = reader.int32() as any;
          break;
        case 3:
          message.deprecation_warning = reader.string();
          break;
        case 4:
          message.edition_removed = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FieldOptions_FeatureSupport>): FieldOptions_FeatureSupport {
    const message = createBaseFieldOptions_FeatureSupport();
    message.edition_introduced = object.edition_introduced ?? 1;
    message.edition_deprecated = object.edition_deprecated ?? 1;
    message.deprecation_warning = object.deprecation_warning ?? "";
    message.edition_removed = object.edition_removed ?? 1;
    return message;
  },
  fromAmino(object: FieldOptions_FeatureSupportAmino): FieldOptions_FeatureSupport {
    const message = createBaseFieldOptions_FeatureSupport();
    if (object.edition_introduced !== undefined && object.edition_introduced !== null) {
      message.edition_introduced = object.edition_introduced;
    }
    if (object.edition_deprecated !== undefined && object.edition_deprecated !== null) {
      message.edition_deprecated = object.edition_deprecated;
    }
    if (object.deprecation_warning !== undefined && object.deprecation_warning !== null) {
      message.deprecation_warning = object.deprecation_warning;
    }
    if (object.edition_removed !== undefined && object.edition_removed !== null) {
      message.edition_removed = object.edition_removed;
    }
    return message;
  },
  toAmino(message: FieldOptions_FeatureSupport): FieldOptions_FeatureSupportAmino {
    const obj: any = {};
    obj.edition_introduced = message.edition_introduced === 1 ? undefined : message.edition_introduced;
    obj.edition_deprecated = message.edition_deprecated === 1 ? undefined : message.edition_deprecated;
    obj.deprecation_warning = message.deprecation_warning === "" ? undefined : message.deprecation_warning;
    obj.edition_removed = message.edition_removed === 1 ? undefined : message.edition_removed;
    return obj;
  },
  fromAminoMsg(object: FieldOptions_FeatureSupportAminoMsg): FieldOptions_FeatureSupport {
    return FieldOptions_FeatureSupport.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldOptions_FeatureSupportProtoMsg): FieldOptions_FeatureSupport {
    return FieldOptions_FeatureSupport.decode(message.value);
  },
  toProto(message: FieldOptions_FeatureSupport): Uint8Array {
    return FieldOptions_FeatureSupport.encode(message).finish();
  },
  toProtoMsg(message: FieldOptions_FeatureSupport): FieldOptions_FeatureSupportProtoMsg {
    return {
      typeUrl: "/google.protobuf.FeatureSupport",
      value: FieldOptions_FeatureSupport.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseOneofOptions(): OneofOptions {
  return {
    features: undefined,
    uninterpreted_option: []
  };
}
export const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  is(o: any): o is OneofOptions {
    return o && (o.$typeUrl === OneofOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is OneofOptionsAmino {
    return o && (o.$typeUrl === OneofOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: OneofOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OneofOptions>): OneofOptions {
    const message = createBaseOneofOptions();
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OneofOptionsAmino): OneofOptions {
    const message = createBaseOneofOptions();
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OneofOptions): OneofOptionsAmino {
    const obj: any = {};
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: OneofOptionsAminoMsg): OneofOptions {
    return OneofOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: OneofOptionsProtoMsg): OneofOptions {
    return OneofOptions.decode(message.value);
  },
  toProto(message: OneofOptions): Uint8Array {
    return OneofOptions.encode(message).finish();
  },
  toProtoMsg(message: OneofOptions): OneofOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.OneofOptions",
      value: OneofOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseEnumOptions(): EnumOptions {
  return {
    allow_alias: false,
    deprecated: false,
    deprecated_legacy_json_field_conflicts: false,
    features: undefined,
    uninterpreted_option: []
  };
}
export const EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  is(o: any): o is EnumOptions {
    return o && (o.$typeUrl === EnumOptions.typeUrl || typeof o.allow_alias === "boolean" && typeof o.deprecated === "boolean" && typeof o.deprecated_legacy_json_field_conflicts === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is EnumOptionsAmino {
    return o && (o.$typeUrl === EnumOptions.typeUrl || typeof o.allow_alias === "boolean" && typeof o.deprecated === "boolean" && typeof o.deprecated_legacy_json_field_conflicts === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: EnumOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allow_alias === true) {
      writer.uint32(16).bool(message.allow_alias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.deprecated_legacy_json_field_conflicts === true) {
      writer.uint32(48).bool(message.deprecated_legacy_json_field_conflicts);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allow_alias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 6:
          message.deprecated_legacy_json_field_conflicts = reader.bool();
          break;
        case 7:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumOptions>): EnumOptions {
    const message = createBaseEnumOptions();
    message.allow_alias = object.allow_alias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts ?? false;
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EnumOptionsAmino): EnumOptions {
    const message = createBaseEnumOptions();
    if (object.allow_alias !== undefined && object.allow_alias !== null) {
      message.allow_alias = object.allow_alias;
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.deprecated_legacy_json_field_conflicts !== undefined && object.deprecated_legacy_json_field_conflicts !== null) {
      message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts;
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EnumOptions): EnumOptionsAmino {
    const obj: any = {};
    obj.allow_alias = message.allow_alias === false ? undefined : message.allow_alias;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts === false ? undefined : message.deprecated_legacy_json_field_conflicts;
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: EnumOptionsAminoMsg): EnumOptions {
    return EnumOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumOptionsProtoMsg): EnumOptions {
    return EnumOptions.decode(message.value);
  },
  toProto(message: EnumOptions): Uint8Array {
    return EnumOptions.encode(message).finish();
  },
  toProtoMsg(message: EnumOptions): EnumOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumOptions",
      value: EnumOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseEnumValueOptions(): EnumValueOptions {
  return {
    deprecated: false,
    features: undefined,
    debug_redact: false,
    feature_support: undefined,
    uninterpreted_option: []
  };
}
export const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  is(o: any): o is EnumValueOptions {
    return o && (o.$typeUrl === EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && typeof o.debug_redact === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is EnumValueOptionsAmino {
    return o && (o.$typeUrl === EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && typeof o.debug_redact === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: EnumValueOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
    }
    if (message.debug_redact === true) {
      writer.uint32(24).bool(message.debug_redact);
    }
    if (message.feature_support !== undefined) {
      FieldOptions_FeatureSupport.encode(message.feature_support, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 2:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.debug_redact = reader.bool();
          break;
        case 4:
          message.feature_support = FieldOptions_FeatureSupport.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.debug_redact = object.debug_redact ?? false;
    message.feature_support = object.feature_support !== undefined && object.feature_support !== null ? FieldOptions_FeatureSupport.fromPartial(object.feature_support) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EnumValueOptionsAmino): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    if (object.debug_redact !== undefined && object.debug_redact !== null) {
      message.debug_redact = object.debug_redact;
    }
    if (object.feature_support !== undefined && object.feature_support !== null) {
      message.feature_support = FieldOptions_FeatureSupport.fromAmino(object.feature_support);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EnumValueOptions): EnumValueOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    obj.debug_redact = message.debug_redact === false ? undefined : message.debug_redact;
    obj.feature_support = message.feature_support ? FieldOptions_FeatureSupport.toAmino(message.feature_support) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: EnumValueOptionsAminoMsg): EnumValueOptions {
    return EnumValueOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueOptionsProtoMsg): EnumValueOptions {
    return EnumValueOptions.decode(message.value);
  },
  toProto(message: EnumValueOptions): Uint8Array {
    return EnumValueOptions.encode(message).finish();
  },
  toProtoMsg(message: EnumValueOptions): EnumValueOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValueOptions",
      value: EnumValueOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    FieldOptions_FeatureSupport.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseServiceOptions(): ServiceOptions {
  return {
    features: undefined,
    deprecated: false,
    uninterpreted_option: []
  };
}
export const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  is(o: any): o is ServiceOptions {
    return o && (o.$typeUrl === ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is ServiceOptionsAmino {
    return o && (o.$typeUrl === ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: ServiceOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
    }
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 34:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions {
    const message = createBaseServiceOptions();
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceOptionsAmino): ServiceOptions {
    const message = createBaseServiceOptions();
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceOptions): ServiceOptionsAmino {
    const obj: any = {};
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceOptionsAminoMsg): ServiceOptions {
    return ServiceOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceOptionsProtoMsg): ServiceOptions {
    return ServiceOptions.decode(message.value);
  },
  toProto(message: ServiceOptions): Uint8Array {
    return ServiceOptions.encode(message).finish();
  },
  toProtoMsg(message: ServiceOptions): ServiceOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.ServiceOptions",
      value: ServiceOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseMethodOptions(): MethodOptions {
  return {
    deprecated: false,
    idempotency_level: 1,
    features: undefined,
    uninterpreted_option: []
  };
}
export const MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  is(o: any): o is MethodOptions {
    return o && (o.$typeUrl === MethodOptions.typeUrl || typeof o.deprecated === "boolean" && isSet(o.idempotency_level) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.is(o.uninterpreted_option[0])));
  },
  isAmino(o: any): o is MethodOptionsAmino {
    return o && (o.$typeUrl === MethodOptions.typeUrl || typeof o.deprecated === "boolean" && isSet(o.idempotency_level) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || UninterpretedOption.isAmino(o.uninterpreted_option[0])));
  },
  encode(message: MethodOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotency_level !== 1) {
      writer.uint32(272).int32(message.idempotency_level);
    }
    if (message.features !== undefined) {
      FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotency_level = reader.int32() as any;
          break;
        case 35:
          message.features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MethodOptions>): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotency_level = object.idempotency_level ?? 1;
    message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MethodOptionsAmino): MethodOptions {
    const message = createBaseMethodOptions();
    if (object.deprecated !== undefined && object.deprecated !== null) {
      message.deprecated = object.deprecated;
    }
    if (object.idempotency_level !== undefined && object.idempotency_level !== null) {
      message.idempotency_level = object.idempotency_level;
    }
    if (object.features !== undefined && object.features !== null) {
      message.features = FeatureSet.fromAmino(object.features);
    }
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MethodOptions): MethodOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
    obj.idempotency_level = message.idempotency_level === 1 ? undefined : message.idempotency_level;
    obj.features = message.features ? FeatureSet.toAmino(message.features) : undefined;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = message.uninterpreted_option;
    }
    return obj;
  },
  fromAminoMsg(object: MethodOptionsAminoMsg): MethodOptions {
    return MethodOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodOptionsProtoMsg): MethodOptions {
    return MethodOptions.decode(message.value);
  },
  toProto(message: MethodOptions): Uint8Array {
    return MethodOptions.encode(message).finish();
  },
  toProtoMsg(message: MethodOptions): MethodOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.MethodOptions",
      value: MethodOptions.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
    UninterpretedOption.registerTypeUrl();
  }
};
function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifier_value: "",
    positive_int_value: BigInt(0),
    negative_int_value: BigInt(0),
    double_value: 0,
    string_value: new Uint8Array(),
    aggregate_value: ""
  };
}
export const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  is(o: any): o is UninterpretedOption {
    return o && (o.$typeUrl === UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || UninterpretedOption_NamePart.is(o.name[0])) && typeof o.identifier_value === "string" && typeof o.positive_int_value === "bigint" && typeof o.negative_int_value === "bigint" && typeof o.double_value === "number" && (o.string_value instanceof Uint8Array || typeof o.string_value === "string") && typeof o.aggregate_value === "string");
  },
  isAmino(o: any): o is UninterpretedOptionAmino {
    return o && (o.$typeUrl === UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || UninterpretedOption_NamePart.isAmino(o.name[0])) && typeof o.identifier_value === "string" && typeof o.positive_int_value === "bigint" && typeof o.negative_int_value === "bigint" && typeof o.double_value === "number" && (o.string_value instanceof Uint8Array || typeof o.string_value === "string") && typeof o.aggregate_value === "string");
  },
  encode(message: UninterpretedOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifier_value !== "") {
      writer.uint32(26).string(message.identifier_value);
    }
    if (message.positive_int_value !== BigInt(0)) {
      writer.uint32(32).uint64(message.positive_int_value);
    }
    if (message.negative_int_value !== BigInt(0)) {
      writer.uint32(40).int64(message.negative_int_value);
    }
    if (message.double_value !== 0) {
      writer.uint32(49).double(message.double_value);
    }
    if (message.string_value.length !== 0) {
      writer.uint32(58).bytes(message.string_value);
    }
    if (message.aggregate_value !== "") {
      writer.uint32(66).string(message.aggregate_value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifier_value = reader.string();
          break;
        case 4:
          message.positive_int_value = reader.uint64();
          break;
        case 5:
          message.negative_int_value = reader.int64();
          break;
        case 6:
          message.double_value = reader.double();
          break;
        case 7:
          message.string_value = reader.bytes();
          break;
        case 8:
          message.aggregate_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map(e => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifier_value = object.identifier_value ?? "";
    message.positive_int_value = object.positive_int_value !== undefined && object.positive_int_value !== null ? BigInt(object.positive_int_value.toString()) : BigInt(0);
    message.negative_int_value = object.negative_int_value !== undefined && object.negative_int_value !== null ? BigInt(object.negative_int_value.toString()) : BigInt(0);
    message.double_value = object.double_value ?? 0;
    message.string_value = object.string_value ?? new Uint8Array();
    message.aggregate_value = object.aggregate_value ?? "";
    return message;
  },
  fromAmino(object: UninterpretedOptionAmino): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map(e => UninterpretedOption_NamePart.fromAmino(e)) || [];
    if (object.identifier_value !== undefined && object.identifier_value !== null) {
      message.identifier_value = object.identifier_value;
    }
    if (object.positive_int_value !== undefined && object.positive_int_value !== null) {
      message.positive_int_value = BigInt(object.positive_int_value);
    }
    if (object.negative_int_value !== undefined && object.negative_int_value !== null) {
      message.negative_int_value = BigInt(object.negative_int_value);
    }
    if (object.double_value !== undefined && object.double_value !== null) {
      message.double_value = object.double_value;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.string_value = bytesFromBase64(object.string_value);
    }
    if (object.aggregate_value !== undefined && object.aggregate_value !== null) {
      message.aggregate_value = object.aggregate_value;
    }
    return message;
  },
  toAmino(message: UninterpretedOption): UninterpretedOptionAmino {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toAmino(e) : undefined);
    } else {
      obj.name = message.name;
    }
    obj.identifier_value = message.identifier_value === "" ? undefined : message.identifier_value;
    obj.positive_int_value = message.positive_int_value !== BigInt(0) ? message.positive_int_value?.toString() : undefined;
    obj.negative_int_value = message.negative_int_value !== BigInt(0) ? message.negative_int_value?.toString() : undefined;
    obj.double_value = message.double_value === 0 ? undefined : message.double_value;
    obj.string_value = message.string_value ? base64FromBytes(message.string_value) : undefined;
    obj.aggregate_value = message.aggregate_value === "" ? undefined : message.aggregate_value;
    return obj;
  },
  fromAminoMsg(object: UninterpretedOptionAminoMsg): UninterpretedOption {
    return UninterpretedOption.fromAmino(object.value);
  },
  fromProtoMsg(message: UninterpretedOptionProtoMsg): UninterpretedOption {
    return UninterpretedOption.decode(message.value);
  },
  toProto(message: UninterpretedOption): Uint8Array {
    return UninterpretedOption.encode(message).finish();
  },
  toProtoMsg(message: UninterpretedOption): UninterpretedOptionProtoMsg {
    return {
      typeUrl: "/google.protobuf.UninterpretedOption",
      value: UninterpretedOption.encode(message).finish()
    };
  },
  registerTypeUrl() {
    UninterpretedOption_NamePart.registerTypeUrl();
  }
};
function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return {
    name_part: "",
    is_extension: false
  };
}
export const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  is(o: any): o is UninterpretedOption_NamePart {
    return o && (o.$typeUrl === UninterpretedOption_NamePart.typeUrl || typeof o.name_part === "string" && typeof o.is_extension === "boolean");
  },
  isAmino(o: any): o is UninterpretedOption_NamePartAmino {
    return o && (o.$typeUrl === UninterpretedOption_NamePart.typeUrl || typeof o.name_part === "string" && typeof o.is_extension === "boolean");
  },
  encode(message: UninterpretedOption_NamePart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name_part !== "") {
      writer.uint32(10).string(message.name_part);
    }
    if (message.is_extension === true) {
      writer.uint32(16).bool(message.is_extension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name_part = reader.string();
          break;
        case 2:
          message.is_extension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.name_part = object.name_part ?? "";
    message.is_extension = object.is_extension ?? false;
    return message;
  },
  fromAmino(object: UninterpretedOption_NamePartAmino): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    if (object.name_part !== undefined && object.name_part !== null) {
      message.name_part = object.name_part;
    }
    if (object.is_extension !== undefined && object.is_extension !== null) {
      message.is_extension = object.is_extension;
    }
    return message;
  },
  toAmino(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartAmino {
    const obj: any = {};
    obj.name_part = message.name_part === "" ? undefined : message.name_part;
    obj.is_extension = message.is_extension === false ? undefined : message.is_extension;
    return obj;
  },
  fromAminoMsg(object: UninterpretedOption_NamePartAminoMsg): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.fromAmino(object.value);
  },
  fromProtoMsg(message: UninterpretedOption_NamePartProtoMsg): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.decode(message.value);
  },
  toProto(message: UninterpretedOption_NamePart): Uint8Array {
    return UninterpretedOption_NamePart.encode(message).finish();
  },
  toProtoMsg(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartProtoMsg {
    return {
      typeUrl: "/google.protobuf.NamePart",
      value: UninterpretedOption_NamePart.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFeatureSet(): FeatureSet {
  return {
    field_presence: 1,
    enum_type: 1,
    repeated_field_encoding: 1,
    utf8_validation: 0,
    message_encoding: 1,
    json_format: 1
  };
}
export const FeatureSet = {
  typeUrl: "/google.protobuf.FeatureSet",
  is(o: any): o is FeatureSet {
    return o && (o.$typeUrl === FeatureSet.typeUrl || isSet(o.field_presence) && isSet(o.enum_type) && isSet(o.repeated_field_encoding) && isSet(o.utf8_validation) && isSet(o.message_encoding) && isSet(o.json_format));
  },
  isAmino(o: any): o is FeatureSetAmino {
    return o && (o.$typeUrl === FeatureSet.typeUrl || isSet(o.field_presence) && isSet(o.enum_type) && isSet(o.repeated_field_encoding) && isSet(o.utf8_validation) && isSet(o.message_encoding) && isSet(o.json_format));
  },
  encode(message: FeatureSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.field_presence !== 1) {
      writer.uint32(8).int32(message.field_presence);
    }
    if (message.enum_type !== 1) {
      writer.uint32(16).int32(message.enum_type);
    }
    if (message.repeated_field_encoding !== 1) {
      writer.uint32(24).int32(message.repeated_field_encoding);
    }
    if (message.utf8_validation !== 0) {
      writer.uint32(32).int32(message.utf8_validation);
    }
    if (message.message_encoding !== 1) {
      writer.uint32(40).int32(message.message_encoding);
    }
    if (message.json_format !== 1) {
      writer.uint32(48).int32(message.json_format);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeatureSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field_presence = reader.int32() as any;
          break;
        case 2:
          message.enum_type = reader.int32() as any;
          break;
        case 3:
          message.repeated_field_encoding = reader.int32() as any;
          break;
        case 4:
          message.utf8_validation = reader.int32() as any;
          break;
        case 5:
          message.message_encoding = reader.int32() as any;
          break;
        case 6:
          message.json_format = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeatureSet>): FeatureSet {
    const message = createBaseFeatureSet();
    message.field_presence = object.field_presence ?? 1;
    message.enum_type = object.enum_type ?? 1;
    message.repeated_field_encoding = object.repeated_field_encoding ?? 1;
    message.utf8_validation = object.utf8_validation ?? 0;
    message.message_encoding = object.message_encoding ?? 1;
    message.json_format = object.json_format ?? 1;
    return message;
  },
  fromAmino(object: FeatureSetAmino): FeatureSet {
    const message = createBaseFeatureSet();
    if (object.field_presence !== undefined && object.field_presence !== null) {
      message.field_presence = object.field_presence;
    }
    if (object.enum_type !== undefined && object.enum_type !== null) {
      message.enum_type = object.enum_type;
    }
    if (object.repeated_field_encoding !== undefined && object.repeated_field_encoding !== null) {
      message.repeated_field_encoding = object.repeated_field_encoding;
    }
    if (object.utf8_validation !== undefined && object.utf8_validation !== null) {
      message.utf8_validation = object.utf8_validation;
    }
    if (object.message_encoding !== undefined && object.message_encoding !== null) {
      message.message_encoding = object.message_encoding;
    }
    if (object.json_format !== undefined && object.json_format !== null) {
      message.json_format = object.json_format;
    }
    return message;
  },
  toAmino(message: FeatureSet): FeatureSetAmino {
    const obj: any = {};
    obj.field_presence = message.field_presence === 1 ? undefined : message.field_presence;
    obj.enum_type = message.enum_type === 1 ? undefined : message.enum_type;
    obj.repeated_field_encoding = message.repeated_field_encoding === 1 ? undefined : message.repeated_field_encoding;
    obj.utf8_validation = message.utf8_validation === 0 ? undefined : message.utf8_validation;
    obj.message_encoding = message.message_encoding === 1 ? undefined : message.message_encoding;
    obj.json_format = message.json_format === 1 ? undefined : message.json_format;
    return obj;
  },
  fromAminoMsg(object: FeatureSetAminoMsg): FeatureSet {
    return FeatureSet.fromAmino(object.value);
  },
  fromProtoMsg(message: FeatureSetProtoMsg): FeatureSet {
    return FeatureSet.decode(message.value);
  },
  toProto(message: FeatureSet): Uint8Array {
    return FeatureSet.encode(message).finish();
  },
  toProtoMsg(message: FeatureSet): FeatureSetProtoMsg {
    return {
      typeUrl: "/google.protobuf.FeatureSet",
      value: FeatureSet.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFeatureSetDefaults(): FeatureSetDefaults {
  return {
    defaults: [],
    minimum_edition: 1,
    maximum_edition: 1
  };
}
export const FeatureSetDefaults = {
  typeUrl: "/google.protobuf.FeatureSetDefaults",
  is(o: any): o is FeatureSetDefaults {
    return o && (o.$typeUrl === FeatureSetDefaults.typeUrl || Array.isArray(o.defaults) && (!o.defaults.length || FeatureSetDefaults_FeatureSetEditionDefault.is(o.defaults[0])) && isSet(o.minimum_edition) && isSet(o.maximum_edition));
  },
  isAmino(o: any): o is FeatureSetDefaultsAmino {
    return o && (o.$typeUrl === FeatureSetDefaults.typeUrl || Array.isArray(o.defaults) && (!o.defaults.length || FeatureSetDefaults_FeatureSetEditionDefault.isAmino(o.defaults[0])) && isSet(o.minimum_edition) && isSet(o.maximum_edition));
  },
  encode(message: FeatureSetDefaults, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.defaults) {
      FeatureSetDefaults_FeatureSetEditionDefault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minimum_edition !== 1) {
      writer.uint32(32).int32(message.minimum_edition);
    }
    if (message.maximum_edition !== 1) {
      writer.uint32(40).int32(message.maximum_edition);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSetDefaults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaults.push(FeatureSetDefaults_FeatureSetEditionDefault.decode(reader, reader.uint32()));
          break;
        case 4:
          message.minimum_edition = reader.int32() as any;
          break;
        case 5:
          message.maximum_edition = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeatureSetDefaults>): FeatureSetDefaults {
    const message = createBaseFeatureSetDefaults();
    message.defaults = object.defaults?.map(e => FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(e)) || [];
    message.minimum_edition = object.minimum_edition ?? 1;
    message.maximum_edition = object.maximum_edition ?? 1;
    return message;
  },
  fromAmino(object: FeatureSetDefaultsAmino): FeatureSetDefaults {
    const message = createBaseFeatureSetDefaults();
    message.defaults = object.defaults?.map(e => FeatureSetDefaults_FeatureSetEditionDefault.fromAmino(e)) || [];
    if (object.minimum_edition !== undefined && object.minimum_edition !== null) {
      message.minimum_edition = object.minimum_edition;
    }
    if (object.maximum_edition !== undefined && object.maximum_edition !== null) {
      message.maximum_edition = object.maximum_edition;
    }
    return message;
  },
  toAmino(message: FeatureSetDefaults): FeatureSetDefaultsAmino {
    const obj: any = {};
    if (message.defaults) {
      obj.defaults = message.defaults.map(e => e ? FeatureSetDefaults_FeatureSetEditionDefault.toAmino(e) : undefined);
    } else {
      obj.defaults = message.defaults;
    }
    obj.minimum_edition = message.minimum_edition === 1 ? undefined : message.minimum_edition;
    obj.maximum_edition = message.maximum_edition === 1 ? undefined : message.maximum_edition;
    return obj;
  },
  fromAminoMsg(object: FeatureSetDefaultsAminoMsg): FeatureSetDefaults {
    return FeatureSetDefaults.fromAmino(object.value);
  },
  fromProtoMsg(message: FeatureSetDefaultsProtoMsg): FeatureSetDefaults {
    return FeatureSetDefaults.decode(message.value);
  },
  toProto(message: FeatureSetDefaults): Uint8Array {
    return FeatureSetDefaults.encode(message).finish();
  },
  toProtoMsg(message: FeatureSetDefaults): FeatureSetDefaultsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FeatureSetDefaults",
      value: FeatureSetDefaults.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSetDefaults_FeatureSetEditionDefault.registerTypeUrl();
  }
};
function createBaseFeatureSetDefaults_FeatureSetEditionDefault(): FeatureSetDefaults_FeatureSetEditionDefault {
  return {
    edition: 1,
    overridable_features: undefined,
    fixed_features: undefined
  };
}
export const FeatureSetDefaults_FeatureSetEditionDefault = {
  typeUrl: "/google.protobuf.FeatureSetEditionDefault",
  is(o: any): o is FeatureSetDefaults_FeatureSetEditionDefault {
    return o && (o.$typeUrl === FeatureSetDefaults_FeatureSetEditionDefault.typeUrl || isSet(o.edition));
  },
  isAmino(o: any): o is FeatureSetDefaults_FeatureSetEditionDefaultAmino {
    return o && (o.$typeUrl === FeatureSetDefaults_FeatureSetEditionDefault.typeUrl || isSet(o.edition));
  },
  encode(message: FeatureSetDefaults_FeatureSetEditionDefault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edition !== 1) {
      writer.uint32(24).int32(message.edition);
    }
    if (message.overridable_features !== undefined) {
      FeatureSet.encode(message.overridable_features, writer.uint32(34).fork()).ldelim();
    }
    if (message.fixed_features !== undefined) {
      FeatureSet.encode(message.fixed_features, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults_FeatureSetEditionDefault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.edition = reader.int32() as any;
          break;
        case 4:
          message.overridable_features = FeatureSet.decode(reader, reader.uint32());
          break;
        case 5:
          message.fixed_features = FeatureSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeatureSetDefaults_FeatureSetEditionDefault>): FeatureSetDefaults_FeatureSetEditionDefault {
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    message.edition = object.edition ?? 1;
    message.overridable_features = object.overridable_features !== undefined && object.overridable_features !== null ? FeatureSet.fromPartial(object.overridable_features) : undefined;
    message.fixed_features = object.fixed_features !== undefined && object.fixed_features !== null ? FeatureSet.fromPartial(object.fixed_features) : undefined;
    return message;
  },
  fromAmino(object: FeatureSetDefaults_FeatureSetEditionDefaultAmino): FeatureSetDefaults_FeatureSetEditionDefault {
    const message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
    if (object.edition !== undefined && object.edition !== null) {
      message.edition = object.edition;
    }
    if (object.overridable_features !== undefined && object.overridable_features !== null) {
      message.overridable_features = FeatureSet.fromAmino(object.overridable_features);
    }
    if (object.fixed_features !== undefined && object.fixed_features !== null) {
      message.fixed_features = FeatureSet.fromAmino(object.fixed_features);
    }
    return message;
  },
  toAmino(message: FeatureSetDefaults_FeatureSetEditionDefault): FeatureSetDefaults_FeatureSetEditionDefaultAmino {
    const obj: any = {};
    obj.edition = message.edition === 1 ? undefined : message.edition;
    obj.overridable_features = message.overridable_features ? FeatureSet.toAmino(message.overridable_features) : undefined;
    obj.fixed_features = message.fixed_features ? FeatureSet.toAmino(message.fixed_features) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeatureSetDefaults_FeatureSetEditionDefaultAminoMsg): FeatureSetDefaults_FeatureSetEditionDefault {
    return FeatureSetDefaults_FeatureSetEditionDefault.fromAmino(object.value);
  },
  fromProtoMsg(message: FeatureSetDefaults_FeatureSetEditionDefaultProtoMsg): FeatureSetDefaults_FeatureSetEditionDefault {
    return FeatureSetDefaults_FeatureSetEditionDefault.decode(message.value);
  },
  toProto(message: FeatureSetDefaults_FeatureSetEditionDefault): Uint8Array {
    return FeatureSetDefaults_FeatureSetEditionDefault.encode(message).finish();
  },
  toProtoMsg(message: FeatureSetDefaults_FeatureSetEditionDefault): FeatureSetDefaults_FeatureSetEditionDefaultProtoMsg {
    return {
      typeUrl: "/google.protobuf.FeatureSetEditionDefault",
      value: FeatureSetDefaults_FeatureSetEditionDefault.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FeatureSet.registerTypeUrl();
  }
};
function createBaseSourceCodeInfo(): SourceCodeInfo {
  return {
    location: []
  };
}
export const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  is(o: any): o is SourceCodeInfo {
    return o && (o.$typeUrl === SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || SourceCodeInfo_Location.is(o.location[0])));
  },
  isAmino(o: any): o is SourceCodeInfoAmino {
    return o && (o.$typeUrl === SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || SourceCodeInfo_Location.isAmino(o.location[0])));
  },
  encode(message: SourceCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map(e => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SourceCodeInfoAmino): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map(e => SourceCodeInfo_Location.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SourceCodeInfo): SourceCodeInfoAmino {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toAmino(e) : undefined);
    } else {
      obj.location = message.location;
    }
    return obj;
  },
  fromAminoMsg(object: SourceCodeInfoAminoMsg): SourceCodeInfo {
    return SourceCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceCodeInfoProtoMsg): SourceCodeInfo {
    return SourceCodeInfo.decode(message.value);
  },
  toProto(message: SourceCodeInfo): Uint8Array {
    return SourceCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: SourceCodeInfo): SourceCodeInfoProtoMsg {
    return {
      typeUrl: "/google.protobuf.SourceCodeInfo",
      value: SourceCodeInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SourceCodeInfo_Location.registerTypeUrl();
  }
};
function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return {
    path: [],
    span: [],
    leading_comments: "",
    trailing_comments: "",
    leading_detached_comments: []
  };
}
export const SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  is(o: any): o is SourceCodeInfo_Location {
    return o && (o.$typeUrl === SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leading_comments === "string" && typeof o.trailing_comments === "string" && Array.isArray(o.leading_detached_comments) && (!o.leading_detached_comments.length || typeof o.leading_detached_comments[0] === "string"));
  },
  isAmino(o: any): o is SourceCodeInfo_LocationAmino {
    return o && (o.$typeUrl === SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leading_comments === "string" && typeof o.trailing_comments === "string" && Array.isArray(o.leading_detached_comments) && (!o.leading_detached_comments.length || typeof o.leading_detached_comments[0] === "string"));
  },
  encode(message: SourceCodeInfo_Location, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leading_comments !== "") {
      writer.uint32(26).string(message.leading_comments);
    }
    if (message.trailing_comments !== "") {
      writer.uint32(34).string(message.trailing_comments);
    }
    for (const v of message.leading_detached_comments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leading_comments = reader.string();
          break;
        case 4:
          message.trailing_comments = reader.string();
          break;
        case 6:
          message.leading_detached_comments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map(e => e) || [];
    message.span = object.span?.map(e => e) || [];
    message.leading_comments = object.leading_comments ?? "";
    message.trailing_comments = object.trailing_comments ?? "";
    message.leading_detached_comments = object.leading_detached_comments?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SourceCodeInfo_LocationAmino): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map(e => e) || [];
    message.span = object.span?.map(e => e) || [];
    if (object.leading_comments !== undefined && object.leading_comments !== null) {
      message.leading_comments = object.leading_comments;
    }
    if (object.trailing_comments !== undefined && object.trailing_comments !== null) {
      message.trailing_comments = object.trailing_comments;
    }
    message.leading_detached_comments = object.leading_detached_comments?.map(e => e) || [];
    return message;
  },
  toAmino(message: SourceCodeInfo_Location): SourceCodeInfo_LocationAmino {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = message.path;
    }
    if (message.span) {
      obj.span = message.span.map(e => e);
    } else {
      obj.span = message.span;
    }
    obj.leading_comments = message.leading_comments === "" ? undefined : message.leading_comments;
    obj.trailing_comments = message.trailing_comments === "" ? undefined : message.trailing_comments;
    if (message.leading_detached_comments) {
      obj.leading_detached_comments = message.leading_detached_comments.map(e => e);
    } else {
      obj.leading_detached_comments = message.leading_detached_comments;
    }
    return obj;
  },
  fromAminoMsg(object: SourceCodeInfo_LocationAminoMsg): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceCodeInfo_LocationProtoMsg): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.decode(message.value);
  },
  toProto(message: SourceCodeInfo_Location): Uint8Array {
    return SourceCodeInfo_Location.encode(message).finish();
  },
  toProtoMsg(message: SourceCodeInfo_Location): SourceCodeInfo_LocationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Location",
      value: SourceCodeInfo_Location.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return {
    annotation: []
  };
}
export const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  is(o: any): o is GeneratedCodeInfo {
    return o && (o.$typeUrl === GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || GeneratedCodeInfo_Annotation.is(o.annotation[0])));
  },
  isAmino(o: any): o is GeneratedCodeInfoAmino {
    return o && (o.$typeUrl === GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || GeneratedCodeInfo_Annotation.isAmino(o.annotation[0])));
  },
  encode(message: GeneratedCodeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map(e => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GeneratedCodeInfoAmino): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map(e => GeneratedCodeInfo_Annotation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GeneratedCodeInfo): GeneratedCodeInfoAmino {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toAmino(e) : undefined);
    } else {
      obj.annotation = message.annotation;
    }
    return obj;
  },
  fromAminoMsg(object: GeneratedCodeInfoAminoMsg): GeneratedCodeInfo {
    return GeneratedCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneratedCodeInfoProtoMsg): GeneratedCodeInfo {
    return GeneratedCodeInfo.decode(message.value);
  },
  toProto(message: GeneratedCodeInfo): Uint8Array {
    return GeneratedCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: GeneratedCodeInfo): GeneratedCodeInfoProtoMsg {
    return {
      typeUrl: "/google.protobuf.GeneratedCodeInfo",
      value: GeneratedCodeInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GeneratedCodeInfo_Annotation.registerTypeUrl();
  }
};
function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return {
    path: [],
    source_file: "",
    begin: 0,
    end: 0,
    semantic: 1
  };
}
export const GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  is(o: any): o is GeneratedCodeInfo_Annotation {
    return o && (o.$typeUrl === GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.source_file === "string" && typeof o.begin === "number" && typeof o.end === "number" && isSet(o.semantic));
  },
  isAmino(o: any): o is GeneratedCodeInfo_AnnotationAmino {
    return o && (o.$typeUrl === GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.source_file === "string" && typeof o.begin === "number" && typeof o.end === "number" && isSet(o.semantic));
  },
  encode(message: GeneratedCodeInfo_Annotation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.source_file !== "") {
      writer.uint32(18).string(message.source_file);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.semantic !== 1) {
      writer.uint32(40).int32(message.semantic);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.source_file = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.semantic = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map(e => e) || [];
    message.source_file = object.source_file ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.semantic = object.semantic ?? 1;
    return message;
  },
  fromAmino(object: GeneratedCodeInfo_AnnotationAmino): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map(e => e) || [];
    if (object.source_file !== undefined && object.source_file !== null) {
      message.source_file = object.source_file;
    }
    if (object.begin !== undefined && object.begin !== null) {
      message.begin = object.begin;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    if (object.semantic !== undefined && object.semantic !== null) {
      message.semantic = object.semantic;
    }
    return message;
  },
  toAmino(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationAmino {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = message.path;
    }
    obj.source_file = message.source_file === "" ? undefined : message.source_file;
    obj.begin = message.begin === 0 ? undefined : message.begin;
    obj.end = message.end === 0 ? undefined : message.end;
    obj.semantic = message.semantic === 1 ? undefined : message.semantic;
    return obj;
  },
  fromAminoMsg(object: GeneratedCodeInfo_AnnotationAminoMsg): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneratedCodeInfo_AnnotationProtoMsg): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.decode(message.value);
  },
  toProto(message: GeneratedCodeInfo_Annotation): Uint8Array {
    return GeneratedCodeInfo_Annotation.encode(message).finish();
  },
  toProtoMsg(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Annotation",
      value: GeneratedCodeInfo_Annotation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};