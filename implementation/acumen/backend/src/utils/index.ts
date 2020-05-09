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

export const filter = async <T>(
  arr: Array<T>,
  callback: (item: T) => Promise<boolean>
): Promise<T[]> => {
  const fail = Symbol();
  return (
    await Promise.all(
      arr.map(async (item) => ((await callback(item)) ? item : fail))
    )
  ).filter((i) => i !== fail) as T[];
};

export const getIntBuffer = (number: number): Buffer => {
  const buffer = Buffer.allocUnsafe(4);
  buffer.writeUInt32BE(number);
  return buffer;
};
