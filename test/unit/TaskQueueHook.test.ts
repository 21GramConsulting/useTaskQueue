import buildStubRecords from '!buildStubRecords';
import {isTaskQueueHook} from '#TaskQueueHook';
import {nullTaskQueue} from '#nullTaskQueue';

describe('TaskQueueHook', () => {
  describe('.isTaskQueueHook()', () => {
    it('should return true for a task queue hook.', () => {
      const queue = nullTaskQueue();
      expect(isTaskQueueHook(queue)).toBe(true);
    });

    test.each([
      {},
      ...buildStubRecords({
        input: [1, true, undefined, 'string', {}, () => {}],
        process: [1, true, undefined, 'string', {}, () => {}],
        output: [1, true, undefined, 'string', {}, () => {}],
        error: [1, true, undefined, 'string', {}, () => {}],
        push: [1, true, undefined, 'string', {}],
        kill: [1, true, undefined, 'string', {}],
      }),
    ])('should return false for a non-task queue hook.', value =>
      expect(isTaskQueueHook(value)).toBe(false)
    );
  });
});
