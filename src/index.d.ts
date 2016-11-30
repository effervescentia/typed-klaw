import { Stats } from 'fs';
import { ReadableOptions } from 'stream';

declare namespace klaw {
  type QueueMethod = 'shift' | 'pop';
  type Event = 'close' | 'data' | 'end' | 'readable' | 'error';

  interface Item {
    path: string;
    stats: Stats;
  }


  interface Options extends ReadableOptions {
    queueMethod?: QueueMethod;
    pathSorter?: (a: string, b: string) => 0 | 1 | -1;
    fs?: any; // fs or mock-fs
    filter?: (a: string) => boolean;
  }


  interface Walker {
    on(event: Event, listener: Function): this;
    on(event: 'close', listener: () => void): this;
    on(event: 'data', listener: (item: Item) => void): this;
    on(event: 'end', listener: () => void): this;
    on(event: 'readable', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    pipe(stream: NodeJS.ReadWriteStream): this;
    read(): Item;
  }
}

declare interface Klaw {
  (root: string, options?: klaw.Options): klaw.Walker;
}

declare const klaw: Klaw;

export = klaw;
