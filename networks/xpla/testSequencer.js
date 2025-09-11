const TestSequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends TestSequencer {
  sort(tests) {
    const testOrder = [
      'setup.test.ts',
      'token.test.ts'
    ];
    
    return tests.sort((testA, testB) => {
      const a = testA.path.split('/').pop();
      const b = testB.path.split('/').pop();
      
      const aIndex = testOrder.indexOf(a);
      const bIndex = testOrder.indexOf(b);
      
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      if (aIndex !== -1) return -1;
      
      if (bIndex !== -1) return 1;
      
      return a.localeCompare(b);
    });
  }
}

module.exports = CustomSequencer;
