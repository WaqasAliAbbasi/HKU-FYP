const CHUNK_SIZE = 1024 * 1024;

export const splitBuffer = (
  buffer: Buffer,
  maxBytes = CHUNK_SIZE
): Buffer[] => {
  const buffers = [];
  while (buffer.length) {
    let i = buffer.lastIndexOf(32, maxBytes + 1);
    if (i < 0) i = buffer.indexOf(32, maxBytes);
    if (i < 0) i = buffer.length;
    buffers.push(buffer.slice(0, i));
    buffer = buffer.slice(i + 1);
  }
  return buffers;
};
