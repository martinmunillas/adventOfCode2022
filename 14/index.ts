type Child = Dir | number;

class Dir {
  constructor(public parent?: Dir) {}
  push(child: Child) {
    this.children.push(child);
  }
  private children: Child[] = [];
  private _size = 0;
  size() {
    if (!this._size) {
      for (const child of this.children) {
        if (typeof child === "number") {
          this._size += child;
        } else {
          this._size += child.size();
        }
      }
    }
    return this._size;
  }

  toString(indentation = ""): string {
    return `
${indentation}>
${indentation}${this.size()}
${indentation}-------------------------
${indentation}${this.children
      .map((c) => (c instanceof Dir ? c.toString(indentation + "    ") : c))
      .join("\n" + indentation)}
${indentation}>
    `;
  }

  *[Symbol.iterator]() {
    for (const child of this.children) {
      yield child;
    }
  }
}

export const getDirsUnder100000 = (input: string): number => {
  let root: Dir | undefined;
  let currentLine = "";
  let currentDir: Dir | undefined;
  for (let i = 0; i <= input.length; i++) {
    const char = input[i];
    if (char === "\n" || char === undefined) {
      if (currentLine[0] === "$") {
        if (currentLine[2] === "c") {
          if (currentLine[5] === "/") {
            if (!root) {
              root = new Dir();
            }
            currentDir = root;
          } else if (currentLine[5] === "." && currentLine[5] === ".") {
            if (currentDir !== root) {
              currentDir = currentDir?.parent;
            }
          } else {
            const newDir = new Dir(currentDir);
            currentDir?.push(newDir);
            currentDir = newDir;
          }
        }
      } else {
        const size = parseInt(currentLine);
        if (size) {
          currentDir?.push(size);
        }
      }
      currentLine = "";
      continue;
    }
    currentLine += char;
  }

  const total = 70_000_000;
  const available = total - (root?.size() || 0);
  const necessary = 30_000_000;
  const missing = necessary - available;

  if (!root) {
    return 0;
  }
  const queue: Dir[] = [root];

  let best: Dir | undefined;
  while (queue.length) {
    const next = queue.shift();
    if (!next) {
      break;
    }
    if (next.size() >= missing && (!best || best.size() > next.size())) {
      best = next;
    }
    for (const child of next) {
      if (child instanceof Dir) {
        queue.push(child);
      }
    }
  }

  return best?.size() || 0;
};
