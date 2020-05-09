import events from "events";

interface Options {
  timeThreshold: number;
  sizeThreshold: number;
}

export class Buffering<T> extends events.EventEmitter {
  timeThreshold: number;
  sizeThreshold: number;
  data: Array<T>;
  flushTimer: NodeJS.Timeout | null;
  paused: boolean;
  resumeTimer: NodeJS.Timeout | null;
  flushingBySize: any;

  constructor(options: Options) {
    super();
    this.timeThreshold = options.timeThreshold;
    this.sizeThreshold = options.sizeThreshold;
    this.data = [];
    this.paused = false;
    this.flushTimer = null;
    this.resumeTimer = null;
  }

  enqueue = (item: T) => {
    this.data.push(item);
    this.checkAndFlush();
  };

  undequeue = (item: T) => {
    this.data.unshift(item);
    this.checkAndFlush();
  };

  flush = () => {
    let data;
    if (!this.paused) {
      let size = this.sizeThreshold > 0 ? this.sizeThreshold : this.data.length;
      data = this.data.splice(0, size);
      this.emit("flush", data);
    }
    this.flushingBySize = false;
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
    }
    if (data && data.length > 0) this.checkAndFlush();
  };

  checkAndFlush = () => {
    if (this.flushingBySize) return;
    if (this.paused) return;
    if (this.sizeThreshold > 0 && this.data.length >= this.sizeThreshold) {
      this.flushingBySize = true;
      process.nextTick(this.flush);
    } else if (
      this.timeThreshold >= 0 &&
      !this.flushTimer &&
      this.data.length > 0
    ) {
      this.flushTimer = setTimeout(this.flush, this.timeThreshold);
    }
  };

  pause = (duration: number) => {
    this.paused = true;
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
    }
    if (duration >= 0) {
      this.resumeTimer = setTimeout(this.resume, duration);
    }
  };

  resume = () => {
    this.paused = false;
    if (this.resumeTimer) {
      clearTimeout(this.resumeTimer);
    }
    this.checkAndFlush();
  };

  size = () => this.data.length;
}
