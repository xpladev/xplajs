"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.FeatureSetDefaults_FeatureSetEditionDefault = exports.FeatureSetDefaults = exports.FeatureSet = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions_FeatureSupport = exports.FieldOptions_EditionDefault = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions_Declaration = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.GeneratedCodeInfo_Annotation_Semantic = exports.FeatureSet_JsonFormat = exports.FeatureSet_MessageEncoding = exports.FeatureSet_Utf8Validation = exports.FeatureSet_RepeatedFieldEncoding = exports.FeatureSet_EnumType = exports.FeatureSet_FieldPresence = exports.MethodOptions_IdempotencyLevel = exports.FieldOptions_OptionTargetType = exports.FieldOptions_OptionRetention = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FileOptions_OptimizeMode = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_Type = exports.ExtensionRangeOptions_VerificationState = exports.Edition = void 0;
exports.editionFromJSON = editionFromJSON;
exports.editionToJSON = editionToJSON;
exports.extensionRangeOptions_VerificationStateFromJSON = extensionRangeOptions_VerificationStateFromJSON;
exports.extensionRangeOptions_VerificationStateToJSON = extensionRangeOptions_VerificationStateToJSON;
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
exports.fieldOptions_OptionRetentionFromJSON = fieldOptions_OptionRetentionFromJSON;
exports.fieldOptions_OptionRetentionToJSON = fieldOptions_OptionRetentionToJSON;
exports.fieldOptions_OptionTargetTypeFromJSON = fieldOptions_OptionTargetTypeFromJSON;
exports.fieldOptions_OptionTargetTypeToJSON = fieldOptions_OptionTargetTypeToJSON;
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
exports.featureSet_FieldPresenceFromJSON = featureSet_FieldPresenceFromJSON;
exports.featureSet_FieldPresenceToJSON = featureSet_FieldPresenceToJSON;
exports.featureSet_EnumTypeFromJSON = featureSet_EnumTypeFromJSON;
exports.featureSet_EnumTypeToJSON = featureSet_EnumTypeToJSON;
exports.featureSet_RepeatedFieldEncodingFromJSON = featureSet_RepeatedFieldEncodingFromJSON;
exports.featureSet_RepeatedFieldEncodingToJSON = featureSet_RepeatedFieldEncodingToJSON;
exports.featureSet_Utf8ValidationFromJSON = featureSet_Utf8ValidationFromJSON;
exports.featureSet_Utf8ValidationToJSON = featureSet_Utf8ValidationToJSON;
exports.featureSet_MessageEncodingFromJSON = featureSet_MessageEncodingFromJSON;
exports.featureSet_MessageEncodingToJSON = featureSet_MessageEncodingToJSON;
exports.featureSet_JsonFormatFromJSON = featureSet_JsonFormatFromJSON;
exports.featureSet_JsonFormatToJSON = featureSet_JsonFormatToJSON;
exports.generatedCodeInfo_Annotation_SemanticFromJSON = generatedCodeInfo_Annotation_SemanticFromJSON;
exports.generatedCodeInfo_Annotation_SemanticToJSON = generatedCodeInfo_Annotation_SemanticToJSON;
var binary_1 = require("../../binary");
/** The full set of known editions. */
var Edition;
(function (Edition) {
    /** EDITION_UNKNOWN - A placeholder for an unknown edition value. */
    Edition[Edition["EDITION_UNKNOWN"] = 0] = "EDITION_UNKNOWN";
    /**
     * EDITION_LEGACY - A placeholder edition for specifying default behaviors *before* a feature
     * was first introduced.  This is effectively an "infinite past".
     */
    Edition[Edition["EDITION_LEGACY"] = 900] = "EDITION_LEGACY";
    /**
     * EDITION_PROTO2 - Legacy syntax "editions".  These pre-date editions, but behave much like
     * distinct editions.  These can't be used to specify the edition of proto
     * files, but feature definitions must supply proto2/proto3 defaults for
     * backwards compatibility.
     */
    Edition[Edition["EDITION_PROTO2"] = 998] = "EDITION_PROTO2";
    Edition[Edition["EDITION_PROTO3"] = 999] = "EDITION_PROTO3";
    /**
     * EDITION_2023 - Editions that have been released.  The specific values are arbitrary and
     * should not be depended on, but they will always be time-ordered for easy
     * comparison.
     */
    Edition[Edition["EDITION_2023"] = 1000] = "EDITION_2023";
    Edition[Edition["EDITION_2024"] = 1001] = "EDITION_2024";
    /**
     * EDITION_1_TEST_ONLY - Placeholder editions for testing feature resolution.  These should not be
     * used or relied on outside of tests.
     */
    Edition[Edition["EDITION_1_TEST_ONLY"] = 1] = "EDITION_1_TEST_ONLY";
    Edition[Edition["EDITION_2_TEST_ONLY"] = 2] = "EDITION_2_TEST_ONLY";
    Edition[Edition["EDITION_99997_TEST_ONLY"] = 99997] = "EDITION_99997_TEST_ONLY";
    Edition[Edition["EDITION_99998_TEST_ONLY"] = 99998] = "EDITION_99998_TEST_ONLY";
    Edition[Edition["EDITION_99999_TEST_ONLY"] = 99999] = "EDITION_99999_TEST_ONLY";
    /**
     * EDITION_MAX - Placeholder for specifying unbounded edition support.  This should only
     * ever be used by plugins that can expect to never require any changes to
     * support a new edition.
     */
    Edition[Edition["EDITION_MAX"] = 2147483647] = "EDITION_MAX";
    Edition[Edition["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Edition || (exports.Edition = Edition = {}));
function editionFromJSON(object) {
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
function editionToJSON(object) {
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
var ExtensionRangeOptions_VerificationState;
(function (ExtensionRangeOptions_VerificationState) {
    /** DECLARATION - All the extensions of the range must be declared. */
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["DECLARATION"] = 0] = "DECLARATION";
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNVERIFIED"] = 1] = "UNVERIFIED";
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExtensionRangeOptions_VerificationState || (exports.ExtensionRangeOptions_VerificationState = ExtensionRangeOptions_VerificationState = {}));
function extensionRangeOptions_VerificationStateFromJSON(object) {
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
function extensionRangeOptions_VerificationStateToJSON(object) {
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
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported after google.protobuf. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.  In Editions, the group wire format
     * can be enabled via the `message_encoding` feature.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
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
function fieldDescriptorProto_TypeToJSON(object) {
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
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    /**
     * LABEL_REQUIRED - The required label is only allowed in google.protobuf.  In proto3 and Editions
     * it's explicitly prohibited.  In Editions, the `field_presence` feature
     * can be used to get this behavior.
     */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
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
function fieldDescriptorProto_LabelToJSON(object) {
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
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
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
function fileOptions_OptimizeModeToJSON(object) {
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
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    /**
     * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
     * "bytes". It indicates that in C++, the data should be stored in a Cord
     * instead of a string.  For very large strings, this may reduce memory
     * fragmentation. It may also allow better performance when parsing from a
     * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
     * alias the original buffer.
     */
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
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
function fieldOptions_CTypeToJSON(object) {
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
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
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
function fieldOptions_JSTypeToJSON(object) {
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
var FieldOptions_OptionRetention;
(function (FieldOptions_OptionRetention) {
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionRetention || (exports.FieldOptions_OptionRetention = FieldOptions_OptionRetention = {}));
function fieldOptions_OptionRetentionFromJSON(object) {
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
function fieldOptions_OptionRetentionToJSON(object) {
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
var FieldOptions_OptionTargetType;
(function (FieldOptions_OptionTargetType) {
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionTargetType || (exports.FieldOptions_OptionTargetType = FieldOptions_OptionTargetType = {}));
function fieldOptions_OptionTargetTypeFromJSON(object) {
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
function fieldOptions_OptionTargetTypeToJSON(object) {
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
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
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
function methodOptions_IdempotencyLevelToJSON(object) {
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
var FeatureSet_FieldPresence;
(function (FeatureSet_FieldPresence) {
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["EXPLICIT"] = 1] = "EXPLICIT";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["IMPLICIT"] = 2] = "IMPLICIT";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_FieldPresence || (exports.FeatureSet_FieldPresence = FeatureSet_FieldPresence = {}));
function featureSet_FieldPresenceFromJSON(object) {
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
function featureSet_FieldPresenceToJSON(object) {
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
var FeatureSet_EnumType;
(function (FeatureSet_EnumType) {
    FeatureSet_EnumType[FeatureSet_EnumType["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    FeatureSet_EnumType[FeatureSet_EnumType["OPEN"] = 1] = "OPEN";
    FeatureSet_EnumType[FeatureSet_EnumType["CLOSED"] = 2] = "CLOSED";
    FeatureSet_EnumType[FeatureSet_EnumType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_EnumType || (exports.FeatureSet_EnumType = FeatureSet_EnumType = {}));
function featureSet_EnumTypeFromJSON(object) {
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
function featureSet_EnumTypeToJSON(object) {
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
var FeatureSet_RepeatedFieldEncoding;
(function (FeatureSet_RepeatedFieldEncoding) {
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["PACKED"] = 1] = "PACKED";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["EXPANDED"] = 2] = "EXPANDED";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_RepeatedFieldEncoding || (exports.FeatureSet_RepeatedFieldEncoding = FeatureSet_RepeatedFieldEncoding = {}));
function featureSet_RepeatedFieldEncodingFromJSON(object) {
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
function featureSet_RepeatedFieldEncodingToJSON(object) {
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
var FeatureSet_Utf8Validation;
(function (FeatureSet_Utf8Validation) {
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["UTF8_VALIDATION_UNKNOWN"] = 0] = "UTF8_VALIDATION_UNKNOWN";
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["VERIFY"] = 2] = "VERIFY";
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["NONE"] = 3] = "NONE";
    FeatureSet_Utf8Validation[FeatureSet_Utf8Validation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_Utf8Validation || (exports.FeatureSet_Utf8Validation = FeatureSet_Utf8Validation = {}));
function featureSet_Utf8ValidationFromJSON(object) {
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
function featureSet_Utf8ValidationToJSON(object) {
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
var FeatureSet_MessageEncoding;
(function (FeatureSet_MessageEncoding) {
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["DELIMITED"] = 2] = "DELIMITED";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_MessageEncoding || (exports.FeatureSet_MessageEncoding = FeatureSet_MessageEncoding = {}));
function featureSet_MessageEncodingFromJSON(object) {
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
function featureSet_MessageEncodingToJSON(object) {
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
var FeatureSet_JsonFormat;
(function (FeatureSet_JsonFormat) {
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["ALLOW"] = 1] = "ALLOW";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_JsonFormat || (exports.FeatureSet_JsonFormat = FeatureSet_JsonFormat = {}));
function featureSet_JsonFormatFromJSON(object) {
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
function featureSet_JsonFormatToJSON(object) {
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
var GeneratedCodeInfo_Annotation_Semantic;
(function (GeneratedCodeInfo_Annotation_Semantic) {
    /** NONE - There is no effect or the effect is indescribable. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["NONE"] = 0] = "NONE";
    /** SET - The element is set or otherwise mutated. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["SET"] = 1] = "SET";
    /** ALIAS - An alias to the element is returned. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["ALIAS"] = 2] = "ALIAS";
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GeneratedCodeInfo_Annotation_Semantic || (exports.GeneratedCodeInfo_Annotation_Semantic = GeneratedCodeInfo_Annotation_Semantic = {}));
function generatedCodeInfo_Annotation_SemanticFromJSON(object) {
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
function generatedCodeInfo_Annotation_SemanticToJSON(object) {
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
function createBaseFileDescriptorSet() {
    return {
        file: []
    };
}
exports.FileDescriptorSet = {
    typeUrl: "/google.protobuf.FileDescriptorSet",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.file; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFileDescriptorSet();
        message.file = ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FileDescriptorProto.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: "",
        edition: 1
    };
}
exports.FileDescriptorProto = {
    typeUrl: "/google.protobuf.FileDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (var _i = 0, _a = message.dependency; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (var _b = 0, _c = message.publicDependency; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (var _d = 0, _e = message.weakDependency; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.int32(v);
        }
        writer.ldelim();
        for (var _f = 0, _g = message.messageType; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _h = 0, _j = message.enumType; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _k = 0, _l = message.service; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _m = 0, _o = message.extension; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        if (message.edition !== 1) {
            writer.uint32(112).int32(message.edition);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
                case 14:
                    message.edition = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseFileDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.dependency = ((_c = object.dependency) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.publicDependency = ((_d = object.publicDependency) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.weakDependency = ((_e = object.weakDependency) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        message.messageType = ((_f = object.messageType) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.DescriptorProto.fromPartial(e); })) || [];
        message.enumType = ((_g = object.enumType) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.EnumDescriptorProto.fromPartial(e); })) || [];
        message.service = ((_h = object.service) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.ServiceDescriptorProto.fromPartial(e); })) || [];
        message.extension = ((_j = object.extension) === null || _j === void 0 ? void 0 : _j.map(function (e) { return exports.FieldDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.FileOptions.fromPartial(object.options) : undefined;
        message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
        message.syntax = (_k = object.syntax) !== null && _k !== void 0 ? _k : "";
        message.edition = (_l = object.edition) !== null && _l !== void 0 ? _l : 1;
        return message;
    }
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.DescriptorProto = {
    typeUrl: "/google.protobuf.DescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.field; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.extension; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _d = 0, _e = message.nestedType; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _f = 0, _g = message.enumType; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _h = 0, _j = message.extensionRange; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _k = 0, _l = message.oneofDecl; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (var _m = 0, _o = message.reservedRange; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (var _p = 0, _q = message.reservedName; _p < _q.length; _p++) {
            var v = _q[_p];
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.field = ((_b = object.field) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.FieldDescriptorProto.fromPartial(e); })) || [];
        message.extension = ((_c = object.extension) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.FieldDescriptorProto.fromPartial(e); })) || [];
        message.nestedType = ((_d = object.nestedType) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.DescriptorProto.fromPartial(e); })) || [];
        message.enumType = ((_e = object.enumType) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.EnumDescriptorProto.fromPartial(e); })) || [];
        message.extensionRange = ((_f = object.extensionRange) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.DescriptorProto_ExtensionRange.fromPartial(e); })) || [];
        message.oneofDecl = ((_g = object.oneofDecl) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.OneofDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.MessageOptions.fromPartial(object.options) : undefined;
        message.reservedRange = ((_h = object.reservedRange) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.DescriptorProto_ReservedRange.fromPartial(e); })) || [];
        message.reservedName = ((_j = object.reservedName) === null || _j === void 0 ? void 0 : _j.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseDescriptorProto_ExtensionRange() {
    return {
        start: 0,
        end: 0,
        options: undefined
    };
}
exports.DescriptorProto_ExtensionRange = {
    typeUrl: "/google.protobuf.ExtensionRange",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDescriptorProto_ExtensionRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.options = object.options !== undefined && object.options !== null ? exports.ExtensionRangeOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseDescriptorProto_ReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.DescriptorProto_ReservedRange = {
    typeUrl: "/google.protobuf.ReservedRange",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDescriptorProto_ReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseExtensionRangeOptions() {
    return {
        uninterpretedOption: [],
        declaration: [],
        features: undefined,
        verification: 1
    };
}
exports.ExtensionRangeOptions = {
    typeUrl: "/google.protobuf.ExtensionRangeOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        for (var _b = 0, _c = message.declaration; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ExtensionRangeOptions_Declaration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
        }
        if (message.verification !== 1) {
            writer.uint32(24).int32(message.verification);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.declaration.push(exports.ExtensionRangeOptions_Declaration.decode(reader, reader.uint32()));
                    break;
                case 50:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.verification = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        message.declaration = ((_b = object.declaration) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ExtensionRangeOptions_Declaration.fromPartial(e); })) || [];
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.verification = (_c = object.verification) !== null && _c !== void 0 ? _c : 1;
        return message;
    }
};
function createBaseExtensionRangeOptions_Declaration() {
    return {
        number: 0,
        fullName: "",
        type: "",
        reserved: false,
        repeated: false
    };
}
exports.ExtensionRangeOptions_Declaration = {
    typeUrl: "/google.protobuf.Declaration",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.number !== 0) {
            writer.uint32(8).int32(message.number);
        }
        if (message.fullName !== "") {
            writer.uint32(18).string(message.fullName);
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
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtensionRangeOptions_Declaration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.number = reader.int32();
                    break;
                case 2:
                    message.fullName = reader.string();
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseExtensionRangeOptions_Declaration();
        message.number = (_a = object.number) !== null && _a !== void 0 ? _a : 0;
        message.fullName = (_b = object.fullName) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        message.reserved = (_d = object.reserved) !== null && _d !== void 0 ? _d : false;
        message.repeated = (_e = object.repeated) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined,
        proto3Optional: false
    };
}
exports.FieldDescriptorProto = {
    typeUrl: "/google.protobuf.FieldDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
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
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3Optional === true) {
            writer.uint32(136).bool(message.proto3Optional);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.proto3Optional = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseFieldDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : 1;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 1;
        message.typeName = (_e = object.typeName) !== null && _e !== void 0 ? _e : "";
        message.extendee = (_f = object.extendee) !== null && _f !== void 0 ? _f : "";
        message.defaultValue = (_g = object.defaultValue) !== null && _g !== void 0 ? _g : "";
        message.oneofIndex = (_h = object.oneofIndex) !== null && _h !== void 0 ? _h : 0;
        message.jsonName = (_j = object.jsonName) !== null && _j !== void 0 ? _j : "";
        message.options = object.options !== undefined && object.options !== null ? exports.FieldOptions.fromPartial(object.options) : undefined;
        message.proto3Optional = (_k = object.proto3Optional) !== null && _k !== void 0 ? _k : false;
        return message;
    }
};
function createBaseOneofDescriptorProto() {
    return {
        name: "",
        options: undefined
    };
}
exports.OneofDescriptorProto = {
    typeUrl: "/google.protobuf.OneofDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOneofDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.options = object.options !== undefined && object.options !== null ? exports.OneofOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseEnumDescriptorProto() {
    return {
        name: "",
        value: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.EnumDescriptorProto = {
    typeUrl: "/google.protobuf.EnumDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.value; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.reservedRange; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.reservedName; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEnumDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EnumValueDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.EnumOptions.fromPartial(object.options) : undefined;
        message.reservedRange = ((_c = object.reservedRange) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e); })) || [];
        message.reservedName = ((_d = object.reservedName) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    typeUrl: "/google.protobuf.EnumReservedRange",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseEnumValueDescriptorProto() {
    return {
        name: "",
        number: 0,
        options: undefined
    };
}
exports.EnumValueDescriptorProto = {
    typeUrl: "/google.protobuf.EnumValueDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEnumValueDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.options = object.options !== undefined && object.options !== null ? exports.EnumValueOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseServiceDescriptorProto() {
    return {
        name: "",
        method: [],
        options: undefined
    };
}
exports.ServiceDescriptorProto = {
    typeUrl: "/google.protobuf.ServiceDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.method; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseServiceDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = ((_b = object.method) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MethodDescriptorProto.fromPartial(e); })) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.ServiceOptions.fromPartial(object.options) : undefined;
        return message;
    }
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false
    };
}
exports.MethodDescriptorProto = {
    typeUrl: "/google.protobuf.MethodDescriptorProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMethodDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.inputType = (_b = object.inputType) !== null && _b !== void 0 ? _b : "";
        message.outputType = (_c = object.outputType) !== null && _c !== void 0 ? _c : "";
        message.options = object.options !== undefined && object.options !== null ? exports.MethodOptions.fromPartial(object.options) : undefined;
        message.clientStreaming = (_d = object.clientStreaming) !== null && _d !== void 0 ? _d : false;
        message.serverStreaming = (_e = object.serverStreaming) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        features: undefined,
        uninterpretedOption: []
    };
}
exports.FileOptions = {
    typeUrl: "/google.protobuf.FileOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 50:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var message = createBaseFileOptions();
        message.javaPackage = (_a = object.javaPackage) !== null && _a !== void 0 ? _a : "";
        message.javaOuterClassname = (_b = object.javaOuterClassname) !== null && _b !== void 0 ? _b : "";
        message.javaMultipleFiles = (_c = object.javaMultipleFiles) !== null && _c !== void 0 ? _c : false;
        message.javaGenerateEqualsAndHash = (_d = object.javaGenerateEqualsAndHash) !== null && _d !== void 0 ? _d : false;
        message.javaStringCheckUtf8 = (_e = object.javaStringCheckUtf8) !== null && _e !== void 0 ? _e : false;
        message.optimizeFor = (_f = object.optimizeFor) !== null && _f !== void 0 ? _f : 1;
        message.goPackage = (_g = object.goPackage) !== null && _g !== void 0 ? _g : "";
        message.ccGenericServices = (_h = object.ccGenericServices) !== null && _h !== void 0 ? _h : false;
        message.javaGenericServices = (_j = object.javaGenericServices) !== null && _j !== void 0 ? _j : false;
        message.pyGenericServices = (_k = object.pyGenericServices) !== null && _k !== void 0 ? _k : false;
        message.deprecated = (_l = object.deprecated) !== null && _l !== void 0 ? _l : false;
        message.ccEnableArenas = (_m = object.ccEnableArenas) !== null && _m !== void 0 ? _m : false;
        message.objcClassPrefix = (_o = object.objcClassPrefix) !== null && _o !== void 0 ? _o : "";
        message.csharpNamespace = (_p = object.csharpNamespace) !== null && _p !== void 0 ? _p : "";
        message.swiftPrefix = (_q = object.swiftPrefix) !== null && _q !== void 0 ? _q : "";
        message.phpClassPrefix = (_r = object.phpClassPrefix) !== null && _r !== void 0 ? _r : "";
        message.phpNamespace = (_s = object.phpNamespace) !== null && _s !== void 0 ? _s : "";
        message.phpMetadataNamespace = (_t = object.phpMetadataNamespace) !== null && _t !== void 0 ? _t : "";
        message.rubyPackage = (_u = object.rubyPackage) !== null && _u !== void 0 ? _u : "";
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.uninterpretedOption = ((_v = object.uninterpretedOption) === null || _v === void 0 ? void 0 : _v.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        deprecatedLegacyJsonFieldConflicts: false,
        features: undefined,
        uninterpretedOption: []
    };
}
exports.MessageOptions = {
    typeUrl: "/google.protobuf.MessageOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            writer.uint32(88).bool(message.deprecatedLegacyJsonFieldConflicts);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMessageOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 11:
                    message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                    break;
                case 12:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMessageOptions();
        message.messageSetWireFormat = (_a = object.messageSetWireFormat) !== null && _a !== void 0 ? _a : false;
        message.noStandardDescriptorAccessor = (_b = object.noStandardDescriptorAccessor) !== null && _b !== void 0 ? _b : false;
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : false;
        message.mapEntry = (_d = object.mapEntry) !== null && _d !== void 0 ? _d : false;
        message.deprecatedLegacyJsonFieldConflicts = (_e = object.deprecatedLegacyJsonFieldConflicts) !== null && _e !== void 0 ? _e : false;
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.uninterpretedOption = ((_f = object.uninterpretedOption) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseFieldOptions() {
    return {
        ctype: 1,
        packed: false,
        jstype: 1,
        lazy: false,
        unverifiedLazy: false,
        deprecated: false,
        weak: false,
        debugRedact: false,
        retention: 1,
        targets: [],
        editionDefaults: [],
        features: undefined,
        featureSupport: undefined,
        uninterpretedOption: []
    };
}
exports.FieldOptions = {
    typeUrl: "/google.protobuf.FieldOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
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
        if (message.unverifiedLazy === true) {
            writer.uint32(120).bool(message.unverifiedLazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        if (message.debugRedact === true) {
            writer.uint32(128).bool(message.debugRedact);
        }
        if (message.retention !== 1) {
            writer.uint32(136).int32(message.retention);
        }
        writer.uint32(154).fork();
        for (var _i = 0, _a = message.targets; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        for (var _b = 0, _c = message.editionDefaults; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.FieldOptions_EditionDefault.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
        }
        if (message.featureSupport !== undefined) {
            exports.FieldOptions_FeatureSupport.encode(message.featureSupport, writer.uint32(178).fork()).ldelim();
        }
        for (var _d = 0, _e = message.uninterpretedOption; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 15:
                    message.unverifiedLazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 16:
                    message.debugRedact = reader.bool();
                    break;
                case 17:
                    message.retention = reader.int32();
                    break;
                case 19:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.targets.push(reader.int32());
                        }
                    }
                    else {
                        message.targets.push(reader.int32());
                    }
                    break;
                case 20:
                    message.editionDefaults.push(exports.FieldOptions_EditionDefault.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.featureSupport = exports.FieldOptions_FeatureSupport.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseFieldOptions();
        message.ctype = (_a = object.ctype) !== null && _a !== void 0 ? _a : 1;
        message.packed = (_b = object.packed) !== null && _b !== void 0 ? _b : false;
        message.jstype = (_c = object.jstype) !== null && _c !== void 0 ? _c : 1;
        message.lazy = (_d = object.lazy) !== null && _d !== void 0 ? _d : false;
        message.unverifiedLazy = (_e = object.unverifiedLazy) !== null && _e !== void 0 ? _e : false;
        message.deprecated = (_f = object.deprecated) !== null && _f !== void 0 ? _f : false;
        message.weak = (_g = object.weak) !== null && _g !== void 0 ? _g : false;
        message.debugRedact = (_h = object.debugRedact) !== null && _h !== void 0 ? _h : false;
        message.retention = (_j = object.retention) !== null && _j !== void 0 ? _j : 1;
        message.targets = ((_k = object.targets) === null || _k === void 0 ? void 0 : _k.map(function (e) { return e; })) || [];
        message.editionDefaults = ((_l = object.editionDefaults) === null || _l === void 0 ? void 0 : _l.map(function (e) { return exports.FieldOptions_EditionDefault.fromPartial(e); })) || [];
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.featureSupport = object.featureSupport !== undefined && object.featureSupport !== null ? exports.FieldOptions_FeatureSupport.fromPartial(object.featureSupport) : undefined;
        message.uninterpretedOption = ((_m = object.uninterpretedOption) === null || _m === void 0 ? void 0 : _m.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseFieldOptions_EditionDefault() {
    return {
        edition: 1,
        value: ""
    };
}
exports.FieldOptions_EditionDefault = {
    typeUrl: "/google.protobuf.EditionDefault",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.edition !== 1) {
            writer.uint32(24).int32(message.edition);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldOptions_EditionDefault();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.edition = reader.int32();
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
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFieldOptions_EditionDefault();
        message.edition = (_a = object.edition) !== null && _a !== void 0 ? _a : 1;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseFieldOptions_FeatureSupport() {
    return {
        editionIntroduced: 1,
        editionDeprecated: 1,
        deprecationWarning: "",
        editionRemoved: 1
    };
}
exports.FieldOptions_FeatureSupport = {
    typeUrl: "/google.protobuf.FeatureSupport",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.editionIntroduced !== 1) {
            writer.uint32(8).int32(message.editionIntroduced);
        }
        if (message.editionDeprecated !== 1) {
            writer.uint32(16).int32(message.editionDeprecated);
        }
        if (message.deprecationWarning !== "") {
            writer.uint32(26).string(message.deprecationWarning);
        }
        if (message.editionRemoved !== 1) {
            writer.uint32(32).int32(message.editionRemoved);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFieldOptions_FeatureSupport();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.editionIntroduced = reader.int32();
                    break;
                case 2:
                    message.editionDeprecated = reader.int32();
                    break;
                case 3:
                    message.deprecationWarning = reader.string();
                    break;
                case 4:
                    message.editionRemoved = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseFieldOptions_FeatureSupport();
        message.editionIntroduced = (_a = object.editionIntroduced) !== null && _a !== void 0 ? _a : 1;
        message.editionDeprecated = (_b = object.editionDeprecated) !== null && _b !== void 0 ? _b : 1;
        message.deprecationWarning = (_c = object.deprecationWarning) !== null && _c !== void 0 ? _c : "";
        message.editionRemoved = (_d = object.editionRemoved) !== null && _d !== void 0 ? _d : 1;
        return message;
    }
};
function createBaseOneofOptions() {
    return {
        features: undefined,
        uninterpretedOption: []
    };
}
exports.OneofOptions = {
    typeUrl: "/google.protobuf.OneofOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOneofOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOneofOptions();
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        deprecatedLegacyJsonFieldConflicts: false,
        features: undefined,
        uninterpretedOption: []
    };
}
exports.EnumOptions = {
    typeUrl: "/google.protobuf.EnumOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            writer.uint32(48).bool(message.deprecatedLegacyJsonFieldConflicts);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 6:
                    message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                    break;
                case 7:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEnumOptions();
        message.allowAlias = (_a = object.allowAlias) !== null && _a !== void 0 ? _a : false;
        message.deprecated = (_b = object.deprecated) !== null && _b !== void 0 ? _b : false;
        message.deprecatedLegacyJsonFieldConflicts = (_c = object.deprecatedLegacyJsonFieldConflicts) !== null && _c !== void 0 ? _c : false;
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.uninterpretedOption = ((_d = object.uninterpretedOption) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseEnumValueOptions() {
    return {
        deprecated: false,
        features: undefined,
        debugRedact: false,
        featureSupport: undefined,
        uninterpretedOption: []
    };
}
exports.EnumValueOptions = {
    typeUrl: "/google.protobuf.EnumValueOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
        }
        if (message.debugRedact === true) {
            writer.uint32(24).bool(message.debugRedact);
        }
        if (message.featureSupport !== undefined) {
            exports.FieldOptions_FeatureSupport.encode(message.featureSupport, writer.uint32(34).fork()).ldelim();
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 2:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.debugRedact = reader.bool();
                    break;
                case 4:
                    message.featureSupport = exports.FieldOptions_FeatureSupport.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEnumValueOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.debugRedact = (_b = object.debugRedact) !== null && _b !== void 0 ? _b : false;
        message.featureSupport = object.featureSupport !== undefined && object.featureSupport !== null ? exports.FieldOptions_FeatureSupport.fromPartial(object.featureSupport) : undefined;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseServiceOptions() {
    return {
        features: undefined,
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.ServiceOptions = {
    typeUrl: "/google.protobuf.ServiceOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
        }
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServiceOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 34:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseServiceOptions();
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpretedOption = ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMethodOptions() {
    return {
        deprecated: false,
        idempotencyLevel: 1,
        features: undefined,
        uninterpretedOption: []
    };
}
exports.MethodOptions = {
    typeUrl: "/google.protobuf.MethodOptions",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 1) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
        }
        for (var _i = 0, _a = message.uninterpretedOption; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMethodOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 35:
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMethodOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.idempotencyLevel = (_b = object.idempotencyLevel) !== null && _b !== void 0 ? _b : 1;
        message.features = object.features !== undefined && object.features !== null ? exports.FeatureSet.fromPartial(object.features) : undefined;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.UninterpretedOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: BigInt(0),
        negativeIntValue: BigInt(0),
        doubleValue: 0,
        stringValue: new Uint8Array(),
        aggregateValue: ""
    };
}
exports.UninterpretedOption = {
    typeUrl: "/google.protobuf.UninterpretedOption",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.name; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (message.positiveIntValue !== BigInt(0)) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (message.negativeIntValue !== BigInt(0)) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUninterpretedOption();
        message.name = ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UninterpretedOption_NamePart.fromPartial(e); })) || [];
        message.identifierValue = (_b = object.identifierValue) !== null && _b !== void 0 ? _b : "";
        message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? BigInt(object.positiveIntValue.toString()) : BigInt(0);
        message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? BigInt(object.negativeIntValue.toString()) : BigInt(0);
        message.doubleValue = (_c = object.doubleValue) !== null && _c !== void 0 ? _c : 0;
        message.stringValue = (_d = object.stringValue) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.aggregateValue = (_e = object.aggregateValue) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseUninterpretedOption_NamePart() {
    return {
        namePart: "",
        isExtension: false
    };
}
exports.UninterpretedOption_NamePart = {
    typeUrl: "/google.protobuf.NamePart",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUninterpretedOption_NamePart();
        message.namePart = (_a = object.namePart) !== null && _a !== void 0 ? _a : "";
        message.isExtension = (_b = object.isExtension) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseFeatureSet() {
    return {
        fieldPresence: 1,
        enumType: 1,
        repeatedFieldEncoding: 1,
        utf8Validation: 0,
        messageEncoding: 1,
        jsonFormat: 1
    };
}
exports.FeatureSet = {
    typeUrl: "/google.protobuf.FeatureSet",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.fieldPresence !== 1) {
            writer.uint32(8).int32(message.fieldPresence);
        }
        if (message.enumType !== 1) {
            writer.uint32(16).int32(message.enumType);
        }
        if (message.repeatedFieldEncoding !== 1) {
            writer.uint32(24).int32(message.repeatedFieldEncoding);
        }
        if (message.utf8Validation !== 0) {
            writer.uint32(32).int32(message.utf8Validation);
        }
        if (message.messageEncoding !== 1) {
            writer.uint32(40).int32(message.messageEncoding);
        }
        if (message.jsonFormat !== 1) {
            writer.uint32(48).int32(message.jsonFormat);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFeatureSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fieldPresence = reader.int32();
                    break;
                case 2:
                    message.enumType = reader.int32();
                    break;
                case 3:
                    message.repeatedFieldEncoding = reader.int32();
                    break;
                case 4:
                    message.utf8Validation = reader.int32();
                    break;
                case 5:
                    message.messageEncoding = reader.int32();
                    break;
                case 6:
                    message.jsonFormat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseFeatureSet();
        message.fieldPresence = (_a = object.fieldPresence) !== null && _a !== void 0 ? _a : 1;
        message.enumType = (_b = object.enumType) !== null && _b !== void 0 ? _b : 1;
        message.repeatedFieldEncoding = (_c = object.repeatedFieldEncoding) !== null && _c !== void 0 ? _c : 1;
        message.utf8Validation = (_d = object.utf8Validation) !== null && _d !== void 0 ? _d : 0;
        message.messageEncoding = (_e = object.messageEncoding) !== null && _e !== void 0 ? _e : 1;
        message.jsonFormat = (_f = object.jsonFormat) !== null && _f !== void 0 ? _f : 1;
        return message;
    }
};
function createBaseFeatureSetDefaults() {
    return {
        defaults: [],
        minimumEdition: 1,
        maximumEdition: 1
    };
}
exports.FeatureSetDefaults = {
    typeUrl: "/google.protobuf.FeatureSetDefaults",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.defaults; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FeatureSetDefaults_FeatureSetEditionDefault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.minimumEdition !== 1) {
            writer.uint32(32).int32(message.minimumEdition);
        }
        if (message.maximumEdition !== 1) {
            writer.uint32(40).int32(message.maximumEdition);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFeatureSetDefaults();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaults.push(exports.FeatureSetDefaults_FeatureSetEditionDefault.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.minimumEdition = reader.int32();
                    break;
                case 5:
                    message.maximumEdition = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFeatureSetDefaults();
        message.defaults = ((_a = object.defaults) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FeatureSetDefaults_FeatureSetEditionDefault.fromPartial(e); })) || [];
        message.minimumEdition = (_b = object.minimumEdition) !== null && _b !== void 0 ? _b : 1;
        message.maximumEdition = (_c = object.maximumEdition) !== null && _c !== void 0 ? _c : 1;
        return message;
    }
};
function createBaseFeatureSetDefaults_FeatureSetEditionDefault() {
    return {
        edition: 1,
        overridableFeatures: undefined,
        fixedFeatures: undefined
    };
}
exports.FeatureSetDefaults_FeatureSetEditionDefault = {
    typeUrl: "/google.protobuf.FeatureSetEditionDefault",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.edition !== 1) {
            writer.uint32(24).int32(message.edition);
        }
        if (message.overridableFeatures !== undefined) {
            exports.FeatureSet.encode(message.overridableFeatures, writer.uint32(34).fork()).ldelim();
        }
        if (message.fixedFeatures !== undefined) {
            exports.FeatureSet.encode(message.fixedFeatures, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.edition = reader.int32();
                    break;
                case 4:
                    message.overridableFeatures = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.fixedFeatures = exports.FeatureSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFeatureSetDefaults_FeatureSetEditionDefault();
        message.edition = (_a = object.edition) !== null && _a !== void 0 ? _a : 1;
        message.overridableFeatures = object.overridableFeatures !== undefined && object.overridableFeatures !== null ? exports.FeatureSet.fromPartial(object.overridableFeatures) : undefined;
        message.fixedFeatures = object.fixedFeatures !== undefined && object.fixedFeatures !== null ? exports.FeatureSet.fromPartial(object.fixedFeatures) : undefined;
        return message;
    }
};
function createBaseSourceCodeInfo() {
    return {
        location: []
    };
}
exports.SourceCodeInfo = {
    typeUrl: "/google.protobuf.SourceCodeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.location; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSourceCodeInfo();
        message.location = ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SourceCodeInfo_Location.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSourceCodeInfo_Location() {
    return {
        path: [],
        span: [],
        leadingComments: "",
        trailingComments: "",
        leadingDetachedComments: []
    };
}
exports.SourceCodeInfo_Location = {
    typeUrl: "/google.protobuf.Location",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.path; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (var _b = 0, _c = message.span; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        for (var _d = 0, _e = message.leadingDetachedComments; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSourceCodeInfo_Location();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.leadingComments = (_c = object.leadingComments) !== null && _c !== void 0 ? _c : "";
        message.trailingComments = (_d = object.trailingComments) !== null && _d !== void 0 ? _d : "";
        message.leadingDetachedComments = ((_e = object.leadingDetachedComments) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseGeneratedCodeInfo() {
    return {
        annotation: []
    };
}
exports.GeneratedCodeInfo = {
    typeUrl: "/google.protobuf.GeneratedCodeInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.annotation; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGeneratedCodeInfo();
        message.annotation = ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GeneratedCodeInfo_Annotation.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseGeneratedCodeInfo_Annotation() {
    return {
        path: [],
        sourceFile: "",
        begin: 0,
        end: 0,
        semantic: 1
    };
}
exports.GeneratedCodeInfo_Annotation = {
    typeUrl: "/google.protobuf.Annotation",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.path; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
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
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                case 5:
                    message.semantic = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.sourceFile = (_b = object.sourceFile) !== null && _b !== void 0 ? _b : "";
        message.begin = (_c = object.begin) !== null && _c !== void 0 ? _c : 0;
        message.end = (_d = object.end) !== null && _d !== void 0 ? _d : 0;
        message.semantic = (_e = object.semantic) !== null && _e !== void 0 ? _e : 1;
        return message;
    }
};
