function expect(value) {
  function toEqual(expected) {
    const typeExpected = typeof expected;
    const typeValue = typeof value;

    if (typeExpected !== typeValue) {
      throw new Error('types doesnt match');
    }

    return toBe(expected);
  }

  function toBe(expected) {
    if (!Object.is(expected, value)) {
      throw new Error(`Received ${value}, expected ${expected}`);
    }
    
    return true;
  }

  return {
    toBe,
    toEqual,
  };
}

function test(description, callback) {
  const snippetTest = {
    [description]: callback,
  };

  global.__tests = Object.assign(global.__tests || {}, snippetTest);

  return snippetTest;
}

function it(description, callback) {
  return test(description, callback);
}

global.it = it;
global.test = test;
global.expect = expect;