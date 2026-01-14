import type { TestSpecification } from 'vitest/node';

export class TestSequencer {
  async sort(files: TestSpecification[]) {
    const testOrder = ['setup.test.ts', 'token.test.ts'];

    return files.sort((a, b) => {
      const aName = a.moduleId.split('/').pop() || '';
      const bName = b.moduleId.split('/').pop() || '';

      const aIndex = testOrder.indexOf(aName);
      const bIndex = testOrder.indexOf(bName);

      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      return aName.localeCompare(bName);
    });
  }
  async shard(files: TestSpecification[]) {
    return files;
  }
}
