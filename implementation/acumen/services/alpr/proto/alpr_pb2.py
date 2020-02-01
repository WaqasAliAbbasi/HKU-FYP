# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/alpr.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/alpr.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x10proto/alpr.proto\"\x1b\n\tALPRChunk\x12\x0e\n\x06\x62uffer\x18\x01 \x01(\x0c\"\x1b\n\x0b\x41LPRRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\"\x1b\n\tALPRReply\x12\x0e\n\x06plates\x18\x01 \x03(\t2`\n\x0e\x41LPRFileServer\x12$\n\x06upload\x12\n.ALPRChunk\x1a\n.ALPRReply\"\x00(\x01\x12(\n\x08\x64ownload\x12\x0c.ALPRRequest\x1a\n.ALPRChunk\"\x00\x30\x01\x62\x06proto3')
)




_ALPRCHUNK = _descriptor.Descriptor(
  name='ALPRChunk',
  full_name='ALPRChunk',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='buffer', full_name='ALPRChunk.buffer', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=20,
  serialized_end=47,
)


_ALPRREQUEST = _descriptor.Descriptor(
  name='ALPRRequest',
  full_name='ALPRRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='ALPRRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=49,
  serialized_end=76,
)


_ALPRREPLY = _descriptor.Descriptor(
  name='ALPRReply',
  full_name='ALPRReply',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='plates', full_name='ALPRReply.plates', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=78,
  serialized_end=105,
)

DESCRIPTOR.message_types_by_name['ALPRChunk'] = _ALPRCHUNK
DESCRIPTOR.message_types_by_name['ALPRRequest'] = _ALPRREQUEST
DESCRIPTOR.message_types_by_name['ALPRReply'] = _ALPRREPLY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ALPRChunk = _reflection.GeneratedProtocolMessageType('ALPRChunk', (_message.Message,), {
  'DESCRIPTOR' : _ALPRCHUNK,
  '__module__' : 'proto.alpr_pb2'
  # @@protoc_insertion_point(class_scope:ALPRChunk)
  })
_sym_db.RegisterMessage(ALPRChunk)

ALPRRequest = _reflection.GeneratedProtocolMessageType('ALPRRequest', (_message.Message,), {
  'DESCRIPTOR' : _ALPRREQUEST,
  '__module__' : 'proto.alpr_pb2'
  # @@protoc_insertion_point(class_scope:ALPRRequest)
  })
_sym_db.RegisterMessage(ALPRRequest)

ALPRReply = _reflection.GeneratedProtocolMessageType('ALPRReply', (_message.Message,), {
  'DESCRIPTOR' : _ALPRREPLY,
  '__module__' : 'proto.alpr_pb2'
  # @@protoc_insertion_point(class_scope:ALPRReply)
  })
_sym_db.RegisterMessage(ALPRReply)



_ALPRFILESERVER = _descriptor.ServiceDescriptor(
  name='ALPRFileServer',
  full_name='ALPRFileServer',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=107,
  serialized_end=203,
  methods=[
  _descriptor.MethodDescriptor(
    name='upload',
    full_name='ALPRFileServer.upload',
    index=0,
    containing_service=None,
    input_type=_ALPRCHUNK,
    output_type=_ALPRREPLY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='download',
    full_name='ALPRFileServer.download',
    index=1,
    containing_service=None,
    input_type=_ALPRREQUEST,
    output_type=_ALPRCHUNK,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_ALPRFILESERVER)

DESCRIPTOR.services_by_name['ALPRFileServer'] = _ALPRFILESERVER

# @@protoc_insertion_point(module_scope)
