import { AlprWorker } from "./worker";
import { EventEmitter } from "events";
import { YOLOWorker } from "../yolo/worker";

class Emitter extends EventEmitter {}

const RECHECK = "worker_recheck";

class WorkerQueue<T> {
  workers: T[];
  emitter: Emitter;

  constructor() {
    this.workers = [];
    this.emitter = new Emitter();
  }
  add = (worker: T) => {
    this.workers.push(worker);
    this.emitter.emit(RECHECK);
  };
  pop = (): Promise<T> =>
    new Promise((resolve) => {
      const worker = this.workers.pop();
      if (worker) {
        resolve(worker);
      } else {
        this.emitter.once(RECHECK, () => {
          const worker = this.workers.pop();
          if (worker) {
            resolve(worker);
          }
        });
      }
    });
  empty = () => (this.workers = []);
}

export const alprWorkerQueue = new WorkerQueue<AlprWorker>();
export const yoloWorkerQueue = new WorkerQueue<YOLOWorker>();
