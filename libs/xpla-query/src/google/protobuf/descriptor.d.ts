import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** The full set of known editions. */
export declare enum Edition {
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
    UNRECOGNIZED = -1
}
export declare const EditionAmino: typeof Edition;
export declare function editionFromJSON(object: any): Edition;
export declare function editionToJSON(object: Edition): string;
/** The verification state of the extension range. */
export declare enum ExtensionRangeOptions_VerificationState {
    /** DECLARATION - All the extensions of the range must be declared. */
    DECLARATION = 0,
    UNVERIFIED = 1,
    UNRECOGNIZED = -1
}
export declare const ExtensionRangeOptions_VerificationStateAmino: typeof ExtensionRangeOptions_VerificationState;
export declare function extensionRangeOptions_VerificationStateFromJSON(object: any): ExtensionRangeOptions_VerificationState;
export declare function extensionRangeOptions_VerificationStateToJSON(object: ExtensionRangeOptions_VerificationState): string;
export declare enum FieldDescriptorProto_Type {
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
    UNRECOGNIZED = -1
}
export declare const FieldDescriptorProto_TypeAmino: typeof FieldDescriptorProto_Type;
export declare function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type;
export declare function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string;
export declare enum FieldDescriptorProto_Label {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    LABEL_OPTIONAL = 1,
    LABEL_REPEATED = 3,
    /**
     * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
     * it's explicitly prohibited.  In Editions, the `field_presence` feature
     * can be used to get this behavior.
     */
    LABEL_REQUIRED = 2,
    UNRECOGNIZED = -1
}
export declare const FieldDescriptorProto_LabelAmino: typeof FieldDescriptorProto_Label;
export declare function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label;
export declare function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string;
/** Generated classes can be optimized for speed or code size. */
export declare enum FileOptions_OptimizeMode {
    /** SPEED - Generate complete code for parsing, serialization, */
    SPEED = 1,
    /** CODE_SIZE - etc. */
    CODE_SIZE = 2,
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    LITE_RUNTIME = 3,
    UNRECOGNIZED = -1
}
export declare const FileOptions_OptimizeModeAmino: typeof FileOptions_OptimizeMode;
export declare function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode;
export declare function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string;
export declare enum FieldOptions_CType {
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
    UNRECOGNIZED = -1
}
export declare const FieldOptions_CTypeAmino: typeof FieldOptions_CType;
export declare function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType;
export declare function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string;
export declare enum FieldOptions_JSType {
    /** JS_NORMAL - Use the default type. */
    JS_NORMAL = 0,
    /** JS_STRING - Use JavaScript strings. */
    JS_STRING = 1,
    /** JS_NUMBER - Use JavaScript numbers. */
    JS_NUMBER = 2,
    UNRECOGNIZED = -1
}
export declare const FieldOptions_JSTypeAmino: typeof FieldOptions_JSType;
export declare function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType;
export declare function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string;
/** If set to RETENTION_SOURCE, the option will be omitted from the binary. */
export declare enum FieldOptions_OptionRetention {
    RETENTION_UNKNOWN = 0,
    RETENTION_RUNTIME = 1,
    RETENTION_SOURCE = 2,
    UNRECOGNIZED = -1
}
export declare const FieldOptions_OptionRetentionAmino: typeof FieldOptions_OptionRetention;
export declare function fieldOptions_OptionRetentionFromJSON(object: any): FieldOptions_OptionRetention;
export declare function fieldOptions_OptionRetentionToJSON(object: FieldOptions_OptionRetention): string;
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity.
 */
export declare enum FieldOptions_OptionTargetType {
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
    UNRECOGNIZED = -1
}
export declare const FieldOptions_OptionTargetTypeAmino: typeof FieldOptions_OptionTargetType;
export declare function fieldOptions_OptionTargetTypeFromJSON(object: any): FieldOptions_OptionTargetType;
export declare function fieldOptions_OptionTargetTypeToJSON(object: FieldOptions_OptionTargetType): string;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export declare enum MethodOptions_IdempotencyLevel {
    IDEMPOTENCY_UNKNOWN = 0,
    /** NO_SIDE_EFFECTS - implies idempotent */
    NO_SIDE_EFFECTS = 1,
    /** IDEMPOTENT - idempotent, but may have side effects */
    IDEMPOTENT = 2,
    UNRECOGNIZED = -1
}
export declare const MethodOptions_IdempotencyLevelAmino: typeof MethodOptions_IdempotencyLevel;
export declare function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel;
export declare function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string;
export declare enum FeatureSet_FieldPresence {
    FIELD_PRESENCE_UNKNOWN = 0,
    EXPLICIT = 1,
    IMPLICIT = 2,
    LEGACY_REQUIRED = 3,
    UNRECOGNIZED = -1
}
export declare const FeatureSet_FieldPresenceAmino: typeof FeatureSet_FieldPresence;
export declare function featureSet_FieldPresenceFromJSON(object: any): FeatureSet_FieldPresence;
export declare function featureSet_FieldPresenceToJSON(object: FeatureSet_FieldPresence): string;
export declare enum FeatureSet_EnumType {
    ENUM_TYPE_UNKNOWN = 0,
    OPEN = 1,
    CLOSED = 2,
    UNRECOGNIZED = -1
}
export declare const FeatureSet_EnumTypeAmino: typeof FeatureSet_EnumType;
export declare function featureSet_EnumTypeFromJSON(object: any): FeatureSet_EnumType;
export declare function featureSet_EnumTypeToJSON(object: FeatureSet_EnumType): string;
export declare enum FeatureSet_RepeatedFieldEncoding {
    REPEATED_FIELD_ENCODING_UNKNOWN = 0,
    PACKED = 1,
    EXPANDED = 2,
    UNRECOGNIZED = -1
}
export declare const FeatureSet_RepeatedFieldEncodingAmino: typeof FeatureSet_RepeatedFieldEncoding;
export declare function featureSet_RepeatedFieldEncodingFromJSON(object: any): FeatureSet_RepeatedFieldEncoding;
export declare function featureSet_RepeatedFieldEncodingToJSON(object: FeatureSet_RepeatedFieldEncoding): string;
export declare enum FeatureSet_Utf8Validation {
    UTF8_VALIDATION_UNKNOWN = 0,
    VERIFY = 2,
    NONE = 3,
    UNRECOGNIZED = -1
}
export declare const FeatureSet_Utf8ValidationAmino: typeof FeatureSet_Utf8Validation;
export declare function featureSet_Utf8ValidationFromJSON(object: any): FeatureSet_Utf8Validation;
export declare function featureSet_Utf8ValidationToJSON(object: FeatureSet_Utf8Validation): string;
export declare enum FeatureSet_MessageEncoding {
    MESSAGE_ENCODING_UNKNOWN = 0,
    LENGTH_PREFIXED = 1,
    DELIMITED = 2,
    UNRECOGNIZED = -1
}
export declare const FeatureSet_MessageEncodingAmino: typeof FeatureSet_MessageEncoding;
export declare function featureSet_MessageEncodingFromJSON(object: any): FeatureSet_MessageEncoding;
export declare function featureSet_MessageEncodingToJSON(object: FeatureSet_MessageEncoding): string;
export declare enum FeatureSet_JsonFormat {
    JSON_FORMAT_UNKNOWN = 0,
    ALLOW = 1,
    LEGACY_BEST_EFFORT = 2,
    UNRECOGNIZED = -1
}
export declare const FeatureSet_JsonFormatAmino: typeof FeatureSet_JsonFormat;
export declare function featureSet_JsonFormatFromJSON(object: any): FeatureSet_JsonFormat;
export declare function featureSet_JsonFormatToJSON(object: FeatureSet_JsonFormat): string;
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export declare enum GeneratedCodeInfo_Annotation_Semantic {
    /** NONE - There is no effect or the effect is indescribable. */
    NONE = 0,
    /** SET - The element is set or otherwise mutated. */
    SET = 1,
    /** ALIAS - An alias to the element is returned. */
    ALIAS = 2,
    UNRECOGNIZED = -1
}
export declare const GeneratedCodeInfo_Annotation_SemanticAmino: typeof GeneratedCodeInfo_Annotation_Semantic;
export declare function generatedCodeInfo_Annotation_SemanticFromJSON(object: any): GeneratedCodeInfo_Annotation_Semantic;
export declare function generatedCodeInfo_Annotation_SemanticToJSON(object: GeneratedCodeInfo_Annotation_Semantic): string;
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
    file: FileDescriptorProto[];
}
export interface FileDescriptorSetProtoMsg {
    typeUrl: "/google.protobuf.FileDescriptorSet";
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
    publicDependency: number[];
    /**
     * Indexes of the weak imported files in the dependency list.
     * For Google-internal migration only. Do not use.
     */
    weakDependency: number[];
    /** All top-level definitions in this file. */
    messageType: DescriptorProto[];
    enumType: EnumDescriptorProto[];
    service: ServiceDescriptorProto[];
    extension: FieldDescriptorProto[];
    options?: FileOptions;
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     */
    sourceCodeInfo?: SourceCodeInfo;
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
    typeUrl: "/google.protobuf.FileDescriptorProto";
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
    nestedType: DescriptorProto[];
    enumType: EnumDescriptorProto[];
    extensionRange: DescriptorProto_ExtensionRange[];
    oneofDecl: OneofDescriptorProto[];
    options?: MessageOptions;
    reservedRange: DescriptorProto_ReservedRange[];
    /**
     * Reserved field names, which may not be used by fields in the same message.
     * A given name may only be reserved once.
     */
    reservedName: string[];
}
export interface DescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.DescriptorProto";
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
    typeUrl: "/google.protobuf.ExtensionRange";
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
    typeUrl: "/google.protobuf.ReservedRange";
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
    uninterpretedOption: UninterpretedOption[];
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
    typeUrl: "/google.protobuf.ExtensionRangeOptions";
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
    fullName: string;
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
    typeUrl: "/google.protobuf.Declaration";
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
    typeName: string;
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
    defaultValue: string;
    /**
     * If set, gives the index of a oneof in the containing type's oneof_decl
     * list.  This field is a member of that oneof.
     */
    oneofIndex: number;
    /**
     * JSON name of this field. The value is set by protocol compiler. If the
     * user has set a "json_name" option on this field, that option's value
     * will be used. Otherwise, it's deduced from the field's name by converting
     * it to camelCase.
     */
    jsonName: string;
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
    proto3Optional: boolean;
}
export interface FieldDescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.FieldDescriptorProto";
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
    typeUrl: "/google.protobuf.OneofDescriptorProto";
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
    reservedRange: EnumDescriptorProto_EnumReservedRange[];
    /**
     * Reserved enum value names, which may not be reused. A given name may only
     * be reserved once.
     */
    reservedName: string[];
}
export interface EnumDescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.EnumDescriptorProto";
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
    typeUrl: "/google.protobuf.EnumReservedRange";
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
    typeUrl: "/google.protobuf.EnumValueDescriptorProto";
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
    typeUrl: "/google.protobuf.ServiceDescriptorProto";
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
    inputType: string;
    outputType: string;
    options?: MethodOptions;
    /** Identifies if client streams multiple client messages */
    clientStreaming: boolean;
    /** Identifies if server streams multiple server messages */
    serverStreaming: boolean;
}
export interface MethodDescriptorProtoProtoMsg {
    typeUrl: "/google.protobuf.MethodDescriptorProto";
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
    javaPackage: string;
    /**
     * Controls the name of the wrapper Java class generated for the .proto file.
     * That class will always contain the .proto file's getDescriptor() method as
     * well as any top-level extensions defined in the .proto file.
     * If java_multiple_files is disabled, then all the other classes from the
     * .proto file will be nested inside the single wrapper outer class.
     */
    javaOuterClassname: string;
    /**
     * If enabled, then the Java code generator will generate a separate .java
     * file for each top-level message, enum, and service defined in the .proto
     * file.  Thus, these types will *not* be nested inside the wrapper class
     * named by java_outer_classname.  However, the wrapper class will still be
     * generated to contain the file's getDescriptor() method as well as any
     * top-level extensions defined in the file.
     */
    javaMultipleFiles: boolean;
    /** This option does nothing. */
    /** @deprecated */
    javaGenerateEqualsAndHash: boolean;
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
    javaStringCheckUtf8: boolean;
    optimizeFor: FileOptions_OptimizeMode;
    /**
     * Sets the Go package where structs generated from this .proto will be
     * placed. If omitted, the Go package will be derived from the following:
     *   - The basename of the package import path, if provided.
     *   - Otherwise, the package statement in the .proto file, if present.
     *   - Otherwise, the basename of the .proto file, without extension.
     */
    goPackage: string;
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
    ccGenericServices: boolean;
    javaGenericServices: boolean;
    pyGenericServices: boolean;
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
    ccEnableArenas: boolean;
    /**
     * Sets the objective c class prefix which is prepended to all objective c
     * generated classes from this .proto. There is no default.
     */
    objcClassPrefix: string;
    /** Namespace for generated classes; defaults to the package. */
    csharpNamespace: string;
    /**
     * By default Swift generators will take the proto package and CamelCase it
     * replacing '.' with underscore and use that to prefix the types/symbols
     * defined. When this options is provided, they will use this value instead
     * to prefix the types/symbols defined.
     */
    swiftPrefix: string;
    /**
     * Sets the php class prefix which is prepended to all php generated classes
     * from this .proto. Default is empty.
     */
    phpClassPrefix: string;
    /**
     * Use this option to change the namespace of php generated classes. Default
     * is empty. When this option is empty, the package name will be used for
     * determining the namespace.
     */
    phpNamespace: string;
    /**
     * Use this option to change the namespace of php generated metadata classes.
     * Default is empty. When this option is empty, the proto file name will be
     * used for determining the namespace.
     */
    phpMetadataNamespace: string;
    /**
     * Use this option to change the package of ruby generated classes. Default
     * is empty. When this option is not set, the package name will be used for
     * determining the ruby package.
     */
    rubyPackage: string;
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
    uninterpretedOption: UninterpretedOption[];
}
export interface FileOptionsProtoMsg {
    typeUrl: "/google.protobuf.FileOptions";
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
    messageSetWireFormat: boolean;
    /**
     * Disables the generation of the standard "descriptor()" accessor, which can
     * conflict with a field of the same name.  This is meant to make migration
     * from proto1 easier; new code should avoid fields named "descriptor".
     */
    noStandardDescriptorAccessor: boolean;
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
    mapEntry: boolean;
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
    deprecatedLegacyJsonFieldConflicts: boolean;
    /**
     * Any features defined in the specific edition.
     * WARNING: This field should only be used by protobuf plugins or special
     * cases like the proto compiler. Other uses are discouraged and
     * developers should rely on the protoreflect APIs for their client language.
     */
    features?: FeatureSet;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption: UninterpretedOption[];
}
export interface MessageOptionsProtoMsg {
    typeUrl: "/google.protobuf.MessageOptions";
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
    unverifiedLazy: boolean;
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
    debugRedact: boolean;
    retention: FieldOptions_OptionRetention;
    targets: FieldOptions_OptionTargetType[];
    editionDefaults: FieldOptions_EditionDefault[];
    /**
     * Any features defined in the specific edition.
     * WARNING: This field should only be used by protobuf plugins or special
     * cases like the proto compiler. Other uses are discouraged and
     * developers should rely on the protoreflect APIs for their client language.
     */
    features?: FeatureSet;
    featureSupport?: FieldOptions_FeatureSupport;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption: UninterpretedOption[];
}
export interface FieldOptionsProtoMsg {
    typeUrl: "/google.protobuf.FieldOptions";
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
    typeUrl: "/google.protobuf.EditionDefault";
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
    editionIntroduced: Edition;
    /**
     * The edition this feature becomes deprecated in.  Using this after this
     * edition may trigger warnings.
     */
    editionDeprecated: Edition;
    /**
     * The deprecation warning text if this feature is used after the edition it
     * was marked deprecated in.
     */
    deprecationWarning: string;
    /**
     * The edition this feature is no longer available in.  In editions after
     * this one, the last default assigned will be used, and proto files will
     * not be able to override it.
     */
    editionRemoved: Edition;
}
export interface FieldOptions_FeatureSupportProtoMsg {
    typeUrl: "/google.protobuf.FeatureSupport";
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
    uninterpretedOption: UninterpretedOption[];
}
export interface OneofOptionsProtoMsg {
    typeUrl: "/google.protobuf.OneofOptions";
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
    allowAlias: boolean;
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
    deprecatedLegacyJsonFieldConflicts: boolean;
    /**
     * Any features defined in the specific edition.
     * WARNING: This field should only be used by protobuf plugins or special
     * cases like the proto compiler. Other uses are discouraged and
     * developers should rely on the protoreflect APIs for their client language.
     */
    features?: FeatureSet;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption: UninterpretedOption[];
}
export interface EnumOptionsProtoMsg {
    typeUrl: "/google.protobuf.EnumOptions";
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
    debugRedact: boolean;
    /** Information about the support window of a feature value. */
    featureSupport?: FieldOptions_FeatureSupport;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption: UninterpretedOption[];
}
export interface EnumValueOptionsProtoMsg {
    typeUrl: "/google.protobuf.EnumValueOptions";
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
    uninterpretedOption: UninterpretedOption[];
}
export interface ServiceOptionsProtoMsg {
    typeUrl: "/google.protobuf.ServiceOptions";
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
    idempotencyLevel: MethodOptions_IdempotencyLevel;
    /**
     * Any features defined in the specific edition.
     * WARNING: This field should only be used by protobuf plugins or special
     * cases like the proto compiler. Other uses are discouraged and
     * developers should rely on the protoreflect APIs for their client language.
     */
    features?: FeatureSet;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption: UninterpretedOption[];
}
export interface MethodOptionsProtoMsg {
    typeUrl: "/google.protobuf.MethodOptions";
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
    identifierValue: string;
    positiveIntValue: bigint;
    negativeIntValue: bigint;
    doubleValue: number;
    stringValue: Uint8Array;
    aggregateValue: string;
}
export interface UninterpretedOptionProtoMsg {
    typeUrl: "/google.protobuf.UninterpretedOption";
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
    namePart: string;
    isExtension: boolean;
}
export interface UninterpretedOption_NamePartProtoMsg {
    typeUrl: "/google.protobuf.NamePart";
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
    fieldPresence: FeatureSet_FieldPresence;
    enumType: FeatureSet_EnumType;
    repeatedFieldEncoding: FeatureSet_RepeatedFieldEncoding;
    utf8Validation: FeatureSet_Utf8Validation;
    messageEncoding: FeatureSet_MessageEncoding;
    jsonFormat: FeatureSet_JsonFormat;
}
export interface FeatureSetProtoMsg {
    typeUrl: "/google.protobuf.FeatureSet";
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
    minimumEdition: Edition;
    /**
     * The maximum known edition (inclusive) when this was constructed. Editions
     * after this will not have reliable defaults.
     */
    maximumEdition: Edition;
}
export interface FeatureSetDefaultsProtoMsg {
    typeUrl: "/google.protobuf.FeatureSetDefaults";
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
    overridableFeatures?: FeatureSet;
    /** Defaults of features that can't be overridden in this edition. */
    fixedFeatures?: FeatureSet;
}
export interface FeatureSetDefaults_FeatureSetEditionDefaultProtoMsg {
    typeUrl: "/google.protobuf.FeatureSetEditionDefault";
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
    typeUrl: "/google.protobuf.SourceCodeInfo";
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
    leadingComments: string;
    trailingComments: string;
    leadingDetachedComments: string[];
}
export interface SourceCodeInfo_LocationProtoMsg {
    typeUrl: "/google.protobuf.Location";
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
    typeUrl: "/google.protobuf.GeneratedCodeInfo";
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
    sourceFile: string;
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
    typeUrl: "/google.protobuf.Annotation";
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
export declare const FileDescriptorSet: {
    typeUrl: string;
    is(o: any): o is FileDescriptorSet;
    isAmino(o: any): o is FileDescriptorSetAmino;
    encode(message: FileDescriptorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet;
    fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet;
    fromAmino(object: FileDescriptorSetAmino): FileDescriptorSet;
    toAmino(message: FileDescriptorSet): FileDescriptorSetAmino;
    fromAminoMsg(object: FileDescriptorSetAminoMsg): FileDescriptorSet;
    fromProtoMsg(message: FileDescriptorSetProtoMsg): FileDescriptorSet;
    toProto(message: FileDescriptorSet): Uint8Array;
    toProtoMsg(message: FileDescriptorSet): FileDescriptorSetProtoMsg;
};
export declare const FileDescriptorProto: {
    typeUrl: string;
    is(o: any): o is FileDescriptorProto;
    isAmino(o: any): o is FileDescriptorProtoAmino;
    encode(message: FileDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto;
    fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto;
    fromAmino(object: FileDescriptorProtoAmino): FileDescriptorProto;
    toAmino(message: FileDescriptorProto): FileDescriptorProtoAmino;
    fromAminoMsg(object: FileDescriptorProtoAminoMsg): FileDescriptorProto;
    fromProtoMsg(message: FileDescriptorProtoProtoMsg): FileDescriptorProto;
    toProto(message: FileDescriptorProto): Uint8Array;
    toProtoMsg(message: FileDescriptorProto): FileDescriptorProtoProtoMsg;
};
export declare const DescriptorProto: {
    typeUrl: string;
    is(o: any): o is DescriptorProto;
    isAmino(o: any): o is DescriptorProtoAmino;
    encode(message: DescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto;
    fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto;
    fromAmino(object: DescriptorProtoAmino): DescriptorProto;
    toAmino(message: DescriptorProto): DescriptorProtoAmino;
    fromAminoMsg(object: DescriptorProtoAminoMsg): DescriptorProto;
    fromProtoMsg(message: DescriptorProtoProtoMsg): DescriptorProto;
    toProto(message: DescriptorProto): Uint8Array;
    toProtoMsg(message: DescriptorProto): DescriptorProtoProtoMsg;
};
export declare const DescriptorProto_ExtensionRange: {
    typeUrl: string;
    is(o: any): o is DescriptorProto_ExtensionRange;
    isAmino(o: any): o is DescriptorProto_ExtensionRangeAmino;
    encode(message: DescriptorProto_ExtensionRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ExtensionRange;
    fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange;
    fromAmino(object: DescriptorProto_ExtensionRangeAmino): DescriptorProto_ExtensionRange;
    toAmino(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeAmino;
    fromAminoMsg(object: DescriptorProto_ExtensionRangeAminoMsg): DescriptorProto_ExtensionRange;
    fromProtoMsg(message: DescriptorProto_ExtensionRangeProtoMsg): DescriptorProto_ExtensionRange;
    toProto(message: DescriptorProto_ExtensionRange): Uint8Array;
    toProtoMsg(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeProtoMsg;
};
export declare const DescriptorProto_ReservedRange: {
    typeUrl: string;
    is(o: any): o is DescriptorProto_ReservedRange;
    isAmino(o: any): o is DescriptorProto_ReservedRangeAmino;
    encode(message: DescriptorProto_ReservedRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto_ReservedRange;
    fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange;
    fromAmino(object: DescriptorProto_ReservedRangeAmino): DescriptorProto_ReservedRange;
    toAmino(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeAmino;
    fromAminoMsg(object: DescriptorProto_ReservedRangeAminoMsg): DescriptorProto_ReservedRange;
    fromProtoMsg(message: DescriptorProto_ReservedRangeProtoMsg): DescriptorProto_ReservedRange;
    toProto(message: DescriptorProto_ReservedRange): Uint8Array;
    toProtoMsg(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeProtoMsg;
};
export declare const ExtensionRangeOptions: {
    typeUrl: string;
    is(o: any): o is ExtensionRangeOptions;
    isAmino(o: any): o is ExtensionRangeOptionsAmino;
    encode(message: ExtensionRangeOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions;
    fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions;
    fromAmino(object: ExtensionRangeOptionsAmino): ExtensionRangeOptions;
    toAmino(message: ExtensionRangeOptions): ExtensionRangeOptionsAmino;
    fromAminoMsg(object: ExtensionRangeOptionsAminoMsg): ExtensionRangeOptions;
    fromProtoMsg(message: ExtensionRangeOptionsProtoMsg): ExtensionRangeOptions;
    toProto(message: ExtensionRangeOptions): Uint8Array;
    toProtoMsg(message: ExtensionRangeOptions): ExtensionRangeOptionsProtoMsg;
};
export declare const ExtensionRangeOptions_Declaration: {
    typeUrl: string;
    is(o: any): o is ExtensionRangeOptions_Declaration;
    isAmino(o: any): o is ExtensionRangeOptions_DeclarationAmino;
    encode(message: ExtensionRangeOptions_Declaration, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions_Declaration;
    fromPartial(object: DeepPartial<ExtensionRangeOptions_Declaration>): ExtensionRangeOptions_Declaration;
    fromAmino(object: ExtensionRangeOptions_DeclarationAmino): ExtensionRangeOptions_Declaration;
    toAmino(message: ExtensionRangeOptions_Declaration): ExtensionRangeOptions_DeclarationAmino;
    fromAminoMsg(object: ExtensionRangeOptions_DeclarationAminoMsg): ExtensionRangeOptions_Declaration;
    fromProtoMsg(message: ExtensionRangeOptions_DeclarationProtoMsg): ExtensionRangeOptions_Declaration;
    toProto(message: ExtensionRangeOptions_Declaration): Uint8Array;
    toProtoMsg(message: ExtensionRangeOptions_Declaration): ExtensionRangeOptions_DeclarationProtoMsg;
};
export declare const FieldDescriptorProto: {
    typeUrl: string;
    is(o: any): o is FieldDescriptorProto;
    isAmino(o: any): o is FieldDescriptorProtoAmino;
    encode(message: FieldDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto;
    fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto;
    fromAmino(object: FieldDescriptorProtoAmino): FieldDescriptorProto;
    toAmino(message: FieldDescriptorProto): FieldDescriptorProtoAmino;
    fromAminoMsg(object: FieldDescriptorProtoAminoMsg): FieldDescriptorProto;
    fromProtoMsg(message: FieldDescriptorProtoProtoMsg): FieldDescriptorProto;
    toProto(message: FieldDescriptorProto): Uint8Array;
    toProtoMsg(message: FieldDescriptorProto): FieldDescriptorProtoProtoMsg;
};
export declare const OneofDescriptorProto: {
    typeUrl: string;
    is(o: any): o is OneofDescriptorProto;
    isAmino(o: any): o is OneofDescriptorProtoAmino;
    encode(message: OneofDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto;
    fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto;
    fromAmino(object: OneofDescriptorProtoAmino): OneofDescriptorProto;
    toAmino(message: OneofDescriptorProto): OneofDescriptorProtoAmino;
    fromAminoMsg(object: OneofDescriptorProtoAminoMsg): OneofDescriptorProto;
    fromProtoMsg(message: OneofDescriptorProtoProtoMsg): OneofDescriptorProto;
    toProto(message: OneofDescriptorProto): Uint8Array;
    toProtoMsg(message: OneofDescriptorProto): OneofDescriptorProtoProtoMsg;
};
export declare const EnumDescriptorProto: {
    typeUrl: string;
    is(o: any): o is EnumDescriptorProto;
    isAmino(o: any): o is EnumDescriptorProtoAmino;
    encode(message: EnumDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto;
    fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto;
    fromAmino(object: EnumDescriptorProtoAmino): EnumDescriptorProto;
    toAmino(message: EnumDescriptorProto): EnumDescriptorProtoAmino;
    fromAminoMsg(object: EnumDescriptorProtoAminoMsg): EnumDescriptorProto;
    fromProtoMsg(message: EnumDescriptorProtoProtoMsg): EnumDescriptorProto;
    toProto(message: EnumDescriptorProto): Uint8Array;
    toProtoMsg(message: EnumDescriptorProto): EnumDescriptorProtoProtoMsg;
};
export declare const EnumDescriptorProto_EnumReservedRange: {
    typeUrl: string;
    is(o: any): o is EnumDescriptorProto_EnumReservedRange;
    isAmino(o: any): o is EnumDescriptorProto_EnumReservedRangeAmino;
    encode(message: EnumDescriptorProto_EnumReservedRange, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange;
    fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange;
    fromAmino(object: EnumDescriptorProto_EnumReservedRangeAmino): EnumDescriptorProto_EnumReservedRange;
    toAmino(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeAmino;
    fromAminoMsg(object: EnumDescriptorProto_EnumReservedRangeAminoMsg): EnumDescriptorProto_EnumReservedRange;
    fromProtoMsg(message: EnumDescriptorProto_EnumReservedRangeProtoMsg): EnumDescriptorProto_EnumReservedRange;
    toProto(message: EnumDescriptorProto_EnumReservedRange): Uint8Array;
    toProtoMsg(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeProtoMsg;
};
export declare const EnumValueDescriptorProto: {
    typeUrl: string;
    is(o: any): o is EnumValueDescriptorProto;
    isAmino(o: any): o is EnumValueDescriptorProtoAmino;
    encode(message: EnumValueDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto;
    fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto;
    fromAmino(object: EnumValueDescriptorProtoAmino): EnumValueDescriptorProto;
    toAmino(message: EnumValueDescriptorProto): EnumValueDescriptorProtoAmino;
    fromAminoMsg(object: EnumValueDescriptorProtoAminoMsg): EnumValueDescriptorProto;
    fromProtoMsg(message: EnumValueDescriptorProtoProtoMsg): EnumValueDescriptorProto;
    toProto(message: EnumValueDescriptorProto): Uint8Array;
    toProtoMsg(message: EnumValueDescriptorProto): EnumValueDescriptorProtoProtoMsg;
};
export declare const ServiceDescriptorProto: {
    typeUrl: string;
    is(o: any): o is ServiceDescriptorProto;
    isAmino(o: any): o is ServiceDescriptorProtoAmino;
    encode(message: ServiceDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto;
    fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto;
    fromAmino(object: ServiceDescriptorProtoAmino): ServiceDescriptorProto;
    toAmino(message: ServiceDescriptorProto): ServiceDescriptorProtoAmino;
    fromAminoMsg(object: ServiceDescriptorProtoAminoMsg): ServiceDescriptorProto;
    fromProtoMsg(message: ServiceDescriptorProtoProtoMsg): ServiceDescriptorProto;
    toProto(message: ServiceDescriptorProto): Uint8Array;
    toProtoMsg(message: ServiceDescriptorProto): ServiceDescriptorProtoProtoMsg;
};
export declare const MethodDescriptorProto: {
    typeUrl: string;
    is(o: any): o is MethodDescriptorProto;
    isAmino(o: any): o is MethodDescriptorProtoAmino;
    encode(message: MethodDescriptorProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto;
    fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto;
    fromAmino(object: MethodDescriptorProtoAmino): MethodDescriptorProto;
    toAmino(message: MethodDescriptorProto): MethodDescriptorProtoAmino;
    fromAminoMsg(object: MethodDescriptorProtoAminoMsg): MethodDescriptorProto;
    fromProtoMsg(message: MethodDescriptorProtoProtoMsg): MethodDescriptorProto;
    toProto(message: MethodDescriptorProto): Uint8Array;
    toProtoMsg(message: MethodDescriptorProto): MethodDescriptorProtoProtoMsg;
};
export declare const FileOptions: {
    typeUrl: string;
    is(o: any): o is FileOptions;
    isAmino(o: any): o is FileOptionsAmino;
    encode(message: FileOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FileOptions;
    fromPartial(object: DeepPartial<FileOptions>): FileOptions;
    fromAmino(object: FileOptionsAmino): FileOptions;
    toAmino(message: FileOptions): FileOptionsAmino;
    fromAminoMsg(object: FileOptionsAminoMsg): FileOptions;
    fromProtoMsg(message: FileOptionsProtoMsg): FileOptions;
    toProto(message: FileOptions): Uint8Array;
    toProtoMsg(message: FileOptions): FileOptionsProtoMsg;
};
export declare const MessageOptions: {
    typeUrl: string;
    is(o: any): o is MessageOptions;
    isAmino(o: any): o is MessageOptionsAmino;
    encode(message: MessageOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions;
    fromPartial(object: DeepPartial<MessageOptions>): MessageOptions;
    fromAmino(object: MessageOptionsAmino): MessageOptions;
    toAmino(message: MessageOptions): MessageOptionsAmino;
    fromAminoMsg(object: MessageOptionsAminoMsg): MessageOptions;
    fromProtoMsg(message: MessageOptionsProtoMsg): MessageOptions;
    toProto(message: MessageOptions): Uint8Array;
    toProtoMsg(message: MessageOptions): MessageOptionsProtoMsg;
};
export declare const FieldOptions: {
    typeUrl: string;
    is(o: any): o is FieldOptions;
    isAmino(o: any): o is FieldOptionsAmino;
    encode(message: FieldOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions;
    fromPartial(object: DeepPartial<FieldOptions>): FieldOptions;
    fromAmino(object: FieldOptionsAmino): FieldOptions;
    toAmino(message: FieldOptions): FieldOptionsAmino;
    fromAminoMsg(object: FieldOptionsAminoMsg): FieldOptions;
    fromProtoMsg(message: FieldOptionsProtoMsg): FieldOptions;
    toProto(message: FieldOptions): Uint8Array;
    toProtoMsg(message: FieldOptions): FieldOptionsProtoMsg;
};
export declare const FieldOptions_EditionDefault: {
    typeUrl: string;
    is(o: any): o is FieldOptions_EditionDefault;
    isAmino(o: any): o is FieldOptions_EditionDefaultAmino;
    encode(message: FieldOptions_EditionDefault, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions_EditionDefault;
    fromPartial(object: DeepPartial<FieldOptions_EditionDefault>): FieldOptions_EditionDefault;
    fromAmino(object: FieldOptions_EditionDefaultAmino): FieldOptions_EditionDefault;
    toAmino(message: FieldOptions_EditionDefault): FieldOptions_EditionDefaultAmino;
    fromAminoMsg(object: FieldOptions_EditionDefaultAminoMsg): FieldOptions_EditionDefault;
    fromProtoMsg(message: FieldOptions_EditionDefaultProtoMsg): FieldOptions_EditionDefault;
    toProto(message: FieldOptions_EditionDefault): Uint8Array;
    toProtoMsg(message: FieldOptions_EditionDefault): FieldOptions_EditionDefaultProtoMsg;
};
export declare const FieldOptions_FeatureSupport: {
    typeUrl: string;
    is(o: any): o is FieldOptions_FeatureSupport;
    isAmino(o: any): o is FieldOptions_FeatureSupportAmino;
    encode(message: FieldOptions_FeatureSupport, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions_FeatureSupport;
    fromPartial(object: DeepPartial<FieldOptions_FeatureSupport>): FieldOptions_FeatureSupport;
    fromAmino(object: FieldOptions_FeatureSupportAmino): FieldOptions_FeatureSupport;
    toAmino(message: FieldOptions_FeatureSupport): FieldOptions_FeatureSupportAmino;
    fromAminoMsg(object: FieldOptions_FeatureSupportAminoMsg): FieldOptions_FeatureSupport;
    fromProtoMsg(message: FieldOptions_FeatureSupportProtoMsg): FieldOptions_FeatureSupport;
    toProto(message: FieldOptions_FeatureSupport): Uint8Array;
    toProtoMsg(message: FieldOptions_FeatureSupport): FieldOptions_FeatureSupportProtoMsg;
};
export declare const OneofOptions: {
    typeUrl: string;
    is(o: any): o is OneofOptions;
    isAmino(o: any): o is OneofOptionsAmino;
    encode(message: OneofOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions;
    fromPartial(object: DeepPartial<OneofOptions>): OneofOptions;
    fromAmino(object: OneofOptionsAmino): OneofOptions;
    toAmino(message: OneofOptions): OneofOptionsAmino;
    fromAminoMsg(object: OneofOptionsAminoMsg): OneofOptions;
    fromProtoMsg(message: OneofOptionsProtoMsg): OneofOptions;
    toProto(message: OneofOptions): Uint8Array;
    toProtoMsg(message: OneofOptions): OneofOptionsProtoMsg;
};
export declare const EnumOptions: {
    typeUrl: string;
    is(o: any): o is EnumOptions;
    isAmino(o: any): o is EnumOptionsAmino;
    encode(message: EnumOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions;
    fromPartial(object: DeepPartial<EnumOptions>): EnumOptions;
    fromAmino(object: EnumOptionsAmino): EnumOptions;
    toAmino(message: EnumOptions): EnumOptionsAmino;
    fromAminoMsg(object: EnumOptionsAminoMsg): EnumOptions;
    fromProtoMsg(message: EnumOptionsProtoMsg): EnumOptions;
    toProto(message: EnumOptions): Uint8Array;
    toProtoMsg(message: EnumOptions): EnumOptionsProtoMsg;
};
export declare const EnumValueOptions: {
    typeUrl: string;
    is(o: any): o is EnumValueOptions;
    isAmino(o: any): o is EnumValueOptionsAmino;
    encode(message: EnumValueOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions;
    fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions;
    fromAmino(object: EnumValueOptionsAmino): EnumValueOptions;
    toAmino(message: EnumValueOptions): EnumValueOptionsAmino;
    fromAminoMsg(object: EnumValueOptionsAminoMsg): EnumValueOptions;
    fromProtoMsg(message: EnumValueOptionsProtoMsg): EnumValueOptions;
    toProto(message: EnumValueOptions): Uint8Array;
    toProtoMsg(message: EnumValueOptions): EnumValueOptionsProtoMsg;
};
export declare const ServiceOptions: {
    typeUrl: string;
    is(o: any): o is ServiceOptions;
    isAmino(o: any): o is ServiceOptionsAmino;
    encode(message: ServiceOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions;
    fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions;
    fromAmino(object: ServiceOptionsAmino): ServiceOptions;
    toAmino(message: ServiceOptions): ServiceOptionsAmino;
    fromAminoMsg(object: ServiceOptionsAminoMsg): ServiceOptions;
    fromProtoMsg(message: ServiceOptionsProtoMsg): ServiceOptions;
    toProto(message: ServiceOptions): Uint8Array;
    toProtoMsg(message: ServiceOptions): ServiceOptionsProtoMsg;
};
export declare const MethodOptions: {
    typeUrl: string;
    is(o: any): o is MethodOptions;
    isAmino(o: any): o is MethodOptionsAmino;
    encode(message: MethodOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions;
    fromPartial(object: DeepPartial<MethodOptions>): MethodOptions;
    fromAmino(object: MethodOptionsAmino): MethodOptions;
    toAmino(message: MethodOptions): MethodOptionsAmino;
    fromAminoMsg(object: MethodOptionsAminoMsg): MethodOptions;
    fromProtoMsg(message: MethodOptionsProtoMsg): MethodOptions;
    toProto(message: MethodOptions): Uint8Array;
    toProtoMsg(message: MethodOptions): MethodOptionsProtoMsg;
};
export declare const UninterpretedOption: {
    typeUrl: string;
    is(o: any): o is UninterpretedOption;
    isAmino(o: any): o is UninterpretedOptionAmino;
    encode(message: UninterpretedOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption;
    fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption;
    fromAmino(object: UninterpretedOptionAmino): UninterpretedOption;
    toAmino(message: UninterpretedOption): UninterpretedOptionAmino;
    fromAminoMsg(object: UninterpretedOptionAminoMsg): UninterpretedOption;
    fromProtoMsg(message: UninterpretedOptionProtoMsg): UninterpretedOption;
    toProto(message: UninterpretedOption): Uint8Array;
    toProtoMsg(message: UninterpretedOption): UninterpretedOptionProtoMsg;
};
export declare const UninterpretedOption_NamePart: {
    typeUrl: string;
    is(o: any): o is UninterpretedOption_NamePart;
    isAmino(o: any): o is UninterpretedOption_NamePartAmino;
    encode(message: UninterpretedOption_NamePart, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption_NamePart;
    fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart;
    fromAmino(object: UninterpretedOption_NamePartAmino): UninterpretedOption_NamePart;
    toAmino(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartAmino;
    fromAminoMsg(object: UninterpretedOption_NamePartAminoMsg): UninterpretedOption_NamePart;
    fromProtoMsg(message: UninterpretedOption_NamePartProtoMsg): UninterpretedOption_NamePart;
    toProto(message: UninterpretedOption_NamePart): Uint8Array;
    toProtoMsg(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartProtoMsg;
};
export declare const FeatureSet: {
    typeUrl: string;
    is(o: any): o is FeatureSet;
    isAmino(o: any): o is FeatureSetAmino;
    encode(message: FeatureSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeatureSet;
    fromPartial(object: DeepPartial<FeatureSet>): FeatureSet;
    fromAmino(object: FeatureSetAmino): FeatureSet;
    toAmino(message: FeatureSet): FeatureSetAmino;
    fromAminoMsg(object: FeatureSetAminoMsg): FeatureSet;
    fromProtoMsg(message: FeatureSetProtoMsg): FeatureSet;
    toProto(message: FeatureSet): Uint8Array;
    toProtoMsg(message: FeatureSet): FeatureSetProtoMsg;
};
export declare const FeatureSetDefaults: {
    typeUrl: string;
    is(o: any): o is FeatureSetDefaults;
    isAmino(o: any): o is FeatureSetDefaultsAmino;
    encode(message: FeatureSetDefaults, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults;
    fromPartial(object: DeepPartial<FeatureSetDefaults>): FeatureSetDefaults;
    fromAmino(object: FeatureSetDefaultsAmino): FeatureSetDefaults;
    toAmino(message: FeatureSetDefaults): FeatureSetDefaultsAmino;
    fromAminoMsg(object: FeatureSetDefaultsAminoMsg): FeatureSetDefaults;
    fromProtoMsg(message: FeatureSetDefaultsProtoMsg): FeatureSetDefaults;
    toProto(message: FeatureSetDefaults): Uint8Array;
    toProtoMsg(message: FeatureSetDefaults): FeatureSetDefaultsProtoMsg;
};
export declare const FeatureSetDefaults_FeatureSetEditionDefault: {
    typeUrl: string;
    is(o: any): o is FeatureSetDefaults_FeatureSetEditionDefault;
    isAmino(o: any): o is FeatureSetDefaults_FeatureSetEditionDefaultAmino;
    encode(message: FeatureSetDefaults_FeatureSetEditionDefault, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults_FeatureSetEditionDefault;
    fromPartial(object: DeepPartial<FeatureSetDefaults_FeatureSetEditionDefault>): FeatureSetDefaults_FeatureSetEditionDefault;
    fromAmino(object: FeatureSetDefaults_FeatureSetEditionDefaultAmino): FeatureSetDefaults_FeatureSetEditionDefault;
    toAmino(message: FeatureSetDefaults_FeatureSetEditionDefault): FeatureSetDefaults_FeatureSetEditionDefaultAmino;
    fromAminoMsg(object: FeatureSetDefaults_FeatureSetEditionDefaultAminoMsg): FeatureSetDefaults_FeatureSetEditionDefault;
    fromProtoMsg(message: FeatureSetDefaults_FeatureSetEditionDefaultProtoMsg): FeatureSetDefaults_FeatureSetEditionDefault;
    toProto(message: FeatureSetDefaults_FeatureSetEditionDefault): Uint8Array;
    toProtoMsg(message: FeatureSetDefaults_FeatureSetEditionDefault): FeatureSetDefaults_FeatureSetEditionDefaultProtoMsg;
};
export declare const SourceCodeInfo: {
    typeUrl: string;
    is(o: any): o is SourceCodeInfo;
    isAmino(o: any): o is SourceCodeInfoAmino;
    encode(message: SourceCodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo;
    fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo;
    fromAmino(object: SourceCodeInfoAmino): SourceCodeInfo;
    toAmino(message: SourceCodeInfo): SourceCodeInfoAmino;
    fromAminoMsg(object: SourceCodeInfoAminoMsg): SourceCodeInfo;
    fromProtoMsg(message: SourceCodeInfoProtoMsg): SourceCodeInfo;
    toProto(message: SourceCodeInfo): Uint8Array;
    toProtoMsg(message: SourceCodeInfo): SourceCodeInfoProtoMsg;
};
export declare const SourceCodeInfo_Location: {
    typeUrl: string;
    is(o: any): o is SourceCodeInfo_Location;
    isAmino(o: any): o is SourceCodeInfo_LocationAmino;
    encode(message: SourceCodeInfo_Location, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo_Location;
    fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location;
    fromAmino(object: SourceCodeInfo_LocationAmino): SourceCodeInfo_Location;
    toAmino(message: SourceCodeInfo_Location): SourceCodeInfo_LocationAmino;
    fromAminoMsg(object: SourceCodeInfo_LocationAminoMsg): SourceCodeInfo_Location;
    fromProtoMsg(message: SourceCodeInfo_LocationProtoMsg): SourceCodeInfo_Location;
    toProto(message: SourceCodeInfo_Location): Uint8Array;
    toProtoMsg(message: SourceCodeInfo_Location): SourceCodeInfo_LocationProtoMsg;
};
export declare const GeneratedCodeInfo: {
    typeUrl: string;
    is(o: any): o is GeneratedCodeInfo;
    isAmino(o: any): o is GeneratedCodeInfoAmino;
    encode(message: GeneratedCodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo;
    fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo;
    fromAmino(object: GeneratedCodeInfoAmino): GeneratedCodeInfo;
    toAmino(message: GeneratedCodeInfo): GeneratedCodeInfoAmino;
    fromAminoMsg(object: GeneratedCodeInfoAminoMsg): GeneratedCodeInfo;
    fromProtoMsg(message: GeneratedCodeInfoProtoMsg): GeneratedCodeInfo;
    toProto(message: GeneratedCodeInfo): Uint8Array;
    toProtoMsg(message: GeneratedCodeInfo): GeneratedCodeInfoProtoMsg;
};
export declare const GeneratedCodeInfo_Annotation: {
    typeUrl: string;
    is(o: any): o is GeneratedCodeInfo_Annotation;
    isAmino(o: any): o is GeneratedCodeInfo_AnnotationAmino;
    encode(message: GeneratedCodeInfo_Annotation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation;
    fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation;
    fromAmino(object: GeneratedCodeInfo_AnnotationAmino): GeneratedCodeInfo_Annotation;
    toAmino(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationAmino;
    fromAminoMsg(object: GeneratedCodeInfo_AnnotationAminoMsg): GeneratedCodeInfo_Annotation;
    fromProtoMsg(message: GeneratedCodeInfo_AnnotationProtoMsg): GeneratedCodeInfo_Annotation;
    toProto(message: GeneratedCodeInfo_Annotation): Uint8Array;
    toProtoMsg(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationProtoMsg;
};
